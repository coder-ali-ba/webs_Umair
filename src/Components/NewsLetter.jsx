import { useState } from 'react';

export default function NewsletterSubscription({dark}) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First Name is required.';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last Name is required.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Handle successful submission
    setSubmitted(true);
    console.log('Form submitted:', formData);
    
    // Reset form after 2 seconds
    setTimeout(() => {
      setFormData({ firstName: '', lastName: '', email: '' });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <div className=" flex items-center justify-center md:p-18">
      <div className="w-full max-w-[90%]   border border-gray-300 rounded-lg p-8  backdrop-blur-sm md:px-18">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-2">
            Newsletter <span className="bg-gradient-to-r from-purple-900 to bg-blue-700 bg-clip-text text-transparent">Subscription</span>
          </h1>
          <p className=" text-sm leading-relaxed">
            Subscribe to our newsletter for the latest insights and updates in SaaS product development. 
            Get tips, success stories, and exclusive content delivered straight to your inbox.
          </p>
        </div>

        {/* Form */}
        <div className="space-y-4">
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                name="firstName"
                placeholder="First Name*"
                value={formData.firstName}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded  text-gray-900  focus:outline-none focus:ring-2 focus:ring-purple-500 transition ${
                  errors.firstName ? 'ring-2 ring-red-500' : ''
                }`}
                style={{
                  backgroundColor : dark ? "white" : "#d1d5db"
                }}
              />
              {errors.firstName && (
                <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>
              )}
            </div>

            <div>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name*"
                value={formData.lastName}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded  text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 transition ${
                  errors.lastName ? 'ring-2 ring-red-500' : ''
                }`}
                style={{
                  backgroundColor : dark ? "white" : "#d1d5db"
                }}
              />
              {errors.lastName && (
                <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>

          {/* Email Field */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address*"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition ${
                errors.email ? 'ring-2 ring-red-500' : ''
              }`}
              style={{
                  backgroundColor : dark ? "white" : "#d1d5db"
                }}
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={submitted}
            className="w-full bg-gradient-to-r from-purple-900 to-blue-700 cursor-pointer disabled:opacity-70 text-white font-bold py-3 rounded transition duration-300 mt-6"
            
          >
            {submitted ? '✓ Subscribed Successfully!' : 'Subscribe To Our News Letter'}
          </button>
        </div>

        {/* Privacy Notice */}
        <div className="text-center mt-6 pt-6 border-t border-purple-500/30">
          <p className=" text-sm">
            We value your privacy: no spam, just valuable updates and industry insights.
          </p>
        </div>
      </div>
    </div>
  );
}