import { useState, useRef, useEffect } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import imgUrl from '../assets/react.svg'

export default function ClientsReview() {
  const [isHovering, setIsHovering] = useState(false);
  const scrollContainerRef = useRef(null);
  const animationRef = useRef(null);

 useEffect(() => {
  const scroll = () => {
    if (scrollContainerRef.current && !isHovering) {
      const container = scrollContainerRef.current;
      container.scrollLeft += 1; // speed

      // Reset when end is reached
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }
    }
    animationRef.current = requestAnimationFrame(scroll);
  };

  animationRef.current = requestAnimationFrame(scroll);
  return () => cancelAnimationFrame(animationRef.current);
}, [isHovering]);

  const slides = [
    {
      id: 6,
      comma : "''",
      stars: "⭐⭐⭐⭐",
      compName: "Shopping experience redesigned",
      desc : "SaaSify Labs expertly crafted our MVP, accelerating our go-to-market strategy brilliantly.",
      image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI9lRck6miglY0SZF_BZ_sK829yiNskgYRUg&s",
      name : "ali",
      role : "developer"
    },
    {
      id: 6,
      comma : "''",
      stars: "⭐⭐⭐⭐",
      compName: "Shopping experience redesigned",
      desc : "SaaSify Labs expertly crafted our MVP, accelerating our go-to-market strategy brilliantly.",
      image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI9lRck6miglY0SZF_BZ_sK829yiNskgYRUg&s",
      name : "ali",
      role : "developer"
    },
    {
      id: 6,
      comma : "''",
      stars: "⭐⭐⭐⭐",
      compName: "Shopping experience redesigned",
      desc : "SaaSify Labs expertly crafted our MVP, accelerating our go-to-market strategy brilliantly.",
      image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI9lRck6miglY0SZF_BZ_sK829yiNskgYRUg&s",
      name : "ali",
      role : "developer"
    },
    {
      id: 6,
      comma : "''",
      stars: "⭐⭐⭐⭐",
      compName: "Shopping experience redesigned",
      desc : "SaaSify Labs expertly crafted our MVP, accelerating our go-to-market strategy brilliantly.",
      image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI9lRck6miglY0SZF_BZ_sK829yiNskgYRUg&s",
      name : "ali",
      role : "developer"
    },
    {
      id: 6,
      comma : "''",
      stars: "⭐⭐⭐⭐",
      compName: "Shopping experience redesigned",
      desc : "SaaSify Labs expertly crafted our MVP, accelerating our go-to-market strategy brilliantly.",
      image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI9lRck6miglY0SZF_BZ_sK829yiNskgYRUg&s",
      name : "ali",
      role : "developer"
    },
    {
      id: 6,
      comma : "''",
      stars: "⭐⭐⭐⭐",
      compName: "Shopping experience redesigned",
      desc : "SaaSify Labs expertly crafted our MVP, accelerating our go-to-market strategy brilliantly.",
      image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI9lRck6miglY0SZF_BZ_sK829yiNskgYRUg&s",
      name : "ali",
      role : "developer"
    }
  ];

  return (
    <div className=" flex flex-col items-center justify-center px-4 py-6">
      <div className="w-full ">
        {/* Carousel Container */}
        <div
          ref={scrollContainerRef}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="flex gap-6 overflow-x-hidden scroll-smooth pb-4 px-2"
          style={{ scrollBehavior: 'auto' }}
        >
          
          {[...slides, ...slides].map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 group cursor-pointer"
            >
              <div className="relative h-78  border-1 border-gray-400/30    overflow-hidden ">
                
                <div className="absolute inset-0 flex flex-col justify-between px-8 ">
                  

                  <div>
                    <h1 className='text-6xl'>{slide.comma}</h1>
                    <h3>
                        {slide.stars}
                    </h3>
                    <h3 className="text-2xl font-bold mb-2">
                      {slide.title}
                    </h3>
                    <p className=" text-3xl">
                      {slide.compName}
                    </p>
                    <p className=" text-sm">
                      {slide.desc}
                    </p>

                    <div className="mt-6 flex items-center gap-2 ">
                      <img src={slide.image} className='w-[50px] h-[50px] rounded-full' alt="" />
                      <div>
                        <p>{slide.name}</p>
                        <p>{slide.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}