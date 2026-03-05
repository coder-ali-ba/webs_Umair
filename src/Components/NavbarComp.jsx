// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from "@mui/icons-material/Adb";
// import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
// import CallIcon from "@mui/icons-material/Call";
// import { daDK } from "@mui/material/locale";
// import { Link } from "react-router-dom";


// const pages = [
//     {text :"About", url :"#about"},
//     {text :"Our Process" , url :"#ourprocess"},
//     {text : "Portfolio" , url : "#portfolio"}, 
//     {text : "Pricing" , url :"#services"}, 
//     {text :"Client's Love" , url :"#clientslove" }, 
//     {text : "FAQs" , url : "#faqs"}
//     ];


// function ResponsiveAppBar({ dark, setDark }) {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);


//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
 

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };
//   const handleDark =dark ? "text-slate-200" : "text-slate-800"
// //   const handleBack =dark ? "bg-slate-800" : "bg-slate-200"
//   const navTextColor = dark ? "#e5e7eb" : "#1e293b";
  

//   return (
//     <div className={dark ? "bg-slate-800" : "bg-slate-200"}>
//       <Container maxWidth="lg" className="text-white">
//         <Toolbar disableGutters>
//           <DirectionsCarIcon
//             sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
//             className={handleDark}
//           />
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: "none", md: "flex" },
//               fontFamily: "monospace",
//               fontWeight: 700,
//               letterSpacing: ".1rem",
             
//               textDecoration: "none",
//             }}
//             className={handleDark}
//           >
//             Sassify
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon className={handleDark} />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: "bottom",
//                 horizontal: "left",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "left",
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{ display: { xs: "block", md: "none", color : navTextColor } }}
//             >
//               {pages.map((page) => (
//                 <MenuItem
//                   key={page}
//                   onClick={handleCloseNavMenu}
//                   sx={{}}
                
//                 >
//                   <Typography sx={{ textAlign: "center", }} >
//                     {page.text}
//                   </Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//           <DirectionsCarIcon
//             sx={{
//               display: {
//                 xs: "flex",
//                 md: "none",
//                 position: "absolute",
//                 left: 45,
//               },
//               mr: 1,
//             }}
//             className={handleDark}
//           />
//           <Typography
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: "flex", md: "none" },
//               //   flexGrow: 1,
//               fontFamily: "monospace",
//               fontWeight: 700,
//               //   letterSpacing: '.1rem',
             
//               textDecoration: "none",
//               position: "absolute",
//               left: 72,
//             }}
//             className={handleDark}
//           >
//             Sassify
//           </Typography>
//           <Box
//             sx={{
//               flexGrow: 1,
//               display: { xs: "none", md: "flex", justifyContent: "center" },
//             }}
//             className={handleDark}
//           >
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2 , color: navTextColor , display: "block" }}
//                 href={page.url}
//               >
//                 {page.text}
//               </Button>
//             ))}
//           </Box>
//           <Box sx={{ flexGrow: 0 }} className="hidden sm:block">
//             <Link to='/contact' className="bg-gradient-to-r from-purple-900 to-blue-700 font-bold text-xl rounded-xl px-6 py-3 cursor-pointer" >Contact Us</Link>
//           </Box>

//           <IconButton onClick={() => setDark(!dark)} sx={{ color: dark ? "white" : "black", position:"relative", right :"-24px"}}>
//              {dark ? "🌞" : "🌙"}
//           </IconButton>
          

//         </Toolbar>
//       </Container>
//     </div>
//   );
// }
// export default ResponsiveAppBar;

import * as React from "react";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

const pages = [
  { text: "About", url: "#about" },
  { text: "Our Process", url: "#ourprocess" },
  { text: "Portfolio", url: "#portfolio" },
  { text: "Pricing", url: "#services" },
  { text: "Client's Love", url: "#clientslove" },
  { text: "FAQs", url: "#faqs" },
];

function ResponsiveAppBar({ dark, setDark }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');

        .navbar-root {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          font-family: 'DM Sans', sans-serif;
        }

        .navbar-root.scrolled.dark-mode {
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          box-shadow: 0 8px 32px rgba(0,0,0,0.3);
        }

        .navbar-root.scrolled.light-mode {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(0,0,0,0.06);
          box-shadow: 0 8px 32px rgba(0,0,0,0.08);
        }

        .navbar-root.not-scrolled.dark-mode {
          background: transparent;
        }

        .navbar-root.not-scrolled.light-mode {
          background: transparent;
        }

        .navbar-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .navbar-logo {
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          transition: opacity 0.2s;
        }

        .navbar-logo:hover {
          opacity: 0.8;
        }

        .navbar-logo-text {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 1.4rem;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, #a855f7, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .navbar-logo-icon {
          color: #a855f7;
          font-size: 1.6rem !important;
        }

        .navbar-links {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        @media (max-width: 768px) {
          .navbar-links {
            display: none;
          }
        }

        .nav-link {
          font-size: 0.875rem;
          font-weight: 500;
          padding: 8px 14px;
          border-radius: 8px;
          text-decoration: none;
          transition: all 0.2s ease;
          position: relative;
          letter-spacing: 0.01em;
        }

        .nav-link.dark {
          color: #cbd5e1;
        }

        .nav-link.light {
          color: #475569;
        }

        .nav-link:hover {
          background: rgba(168, 85, 247, 0.12);
          color: #a855f7;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 14px;
          right: 14px;
          height: 1.5px;
          background: linear-gradient(90deg, #a855f7, #3b82f6);
          border-radius: 2px;
          transform: scaleX(0);
          transition: transform 0.25s ease;
        }

        .nav-link:hover::after {
          transform: scaleX(1);
        }

        .navbar-right {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .contact-btn {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.875rem;
          font-weight: 600;
          padding: 10px 22px;
          border-radius: 10px;
          background: linear-gradient(135deg, #7c3aed, #2563eb);
          color: white;
          text-decoration: none;
          transition: all 0.25s ease;
          box-shadow: 0 4px 15px rgba(124, 58, 237, 0.35);
          letter-spacing: 0.02em;
        }

        .contact-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(124, 58, 237, 0.5);
          color: white;
        }

        .contact-btn:active {
          transform: translateY(0);
        }

        @media (max-width: 480px) {
          .contact-btn {
            display: none;
          }
        }

        .theme-btn {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          transition: all 0.25s ease;
          background: transparent;
        }

        .theme-btn.dark {
          background: rgba(255,255,255,0.08);
          color: #e2e8f0;
        }

        .theme-btn.dark:hover {
          background: rgba(255,255,255,0.14);
          transform: rotate(20deg);
        }

        .theme-btn.light {
          background: rgba(0,0,0,0.06);
          color: #1e293b;
        }

        .theme-btn.light:hover {
          background: rgba(0,0,0,0.1);
          transform: rotate(20deg);
        }

        .menu-btn {
          display: none;
          width: 42px;
          height: 42px;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          background: transparent;
        }

        @media (max-width: 768px) {
          .menu-btn {
            display: flex;
          }
        }

        .menu-btn.dark {
          background: rgba(255,255,255,0.08);
          color: #e2e8f0;
        }

        .menu-btn.dark:hover {
          background: rgba(255,255,255,0.14);
        }

        .menu-btn.light {
          background: rgba(0,0,0,0.06);
          color: #1e293b;
        }

        .menu-btn.light:hover {
          background: rgba(0,0,0,0.1);
        }

        /* Mobile Menu */
        .mobile-overlay {
          position: fixed;
          inset: 0;
          z-index: 999;
          transition: opacity 0.3s ease;
        }

        .mobile-overlay.open {
          opacity: 1;
          pointer-events: all;
        }

        .mobile-overlay.closed {
          opacity: 0;
          pointer-events: none;
        }

        .mobile-overlay-bg {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.5);
        }

        .mobile-menu {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          padding: 24px;
          padding-top: 80px;
          transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          border-bottom-left-radius: 20px;
          border-bottom-right-radius: 20px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .mobile-menu.dark {
          background: rgba(15, 23, 42, 0.97);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }

        .mobile-menu.light {
          background: rgba(255,255,255,0.97);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(0,0,0,0.06);
          box-shadow: 0 20px 40px rgba(0,0,0,0.12);
        }

        .mobile-overlay.open .mobile-menu {
          transform: translateY(0);
        }

        .mobile-overlay.closed .mobile-menu {
          transform: translateY(-20px);
        }

        .mobile-nav-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 1rem;
          font-weight: 500;
          padding: 14px 16px;
          border-radius: 10px;
          text-decoration: none;
          transition: all 0.2s ease;
          display: block;
          letter-spacing: 0.01em;
        }

        .mobile-nav-link.dark {
          color: #cbd5e1;
        }

        .mobile-nav-link.dark:hover {
          background: rgba(168, 85, 247, 0.12);
          color: #a855f7;
          padding-left: 22px;
        }

        .mobile-nav-link.light {
          color: #475569;
        }

        .mobile-nav-link.light:hover {
          background: rgba(168, 85, 247, 0.08);
          color: #7c3aed;
          padding-left: 22px;
        }

        .mobile-contact-btn {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem;
          font-weight: 600;
          padding: 14px 22px;
          border-radius: 10px;
          background: linear-gradient(135deg, #7c3aed, #2563eb);
          color: white;
          text-decoration: none;
          text-align: center;
          margin-top: 12px;
          display: block;
          box-shadow: 0 4px 15px rgba(124, 58, 237, 0.35);
          transition: all 0.25s ease;
        }

        .mobile-contact-btn:hover {
          box-shadow: 0 8px 25px rgba(124, 58, 237, 0.5);
          color: white;
        }

        .divider {
          height: 1px;
          margin: 8px 0;
        }

        .divider.dark {
          background: rgba(255,255,255,0.06);
        }

        .divider.light {
          background: rgba(0,0,0,0.08);
        }
      `}</style>

      {/* Main Navbar */}
      <nav
        className={`navbar-root ${scrolled ? "scrolled" : "not-scrolled"} ${dark ? "dark-mode" : "light-mode"}`}
      >
        <div className="navbar-inner">
          {/* Logo */}
          <a href="#app-bar-with-responsive-menu" className="navbar-logo">
            <DirectionsCarIcon className="navbar-logo-icon" />
            <span className="navbar-logo-text">Sassify</span>
          </a>

          {/* Desktop Links */}
          <div className="navbar-links">
            {pages.map((page) => (
              <a
                key={page.url}
                href={page.url}
                className={`nav-link ${dark ? "dark" : "light"}`}
              >
                {page.text}
              </a>
            ))}
          </div>

          {/* Right Side */}
          <div className="navbar-right">
            <Link to="/contact" className="contact-btn">
              Contact Us
            </Link>

            <button
              className={`theme-btn ${dark ? "dark" : "light"}`}
              onClick={() => setDark(!dark)}
              aria-label="Toggle theme"
            >
              {dark ? "🌞" : "🌙"}
            </button>

            <button
              className={`menu-btn ${dark ? "dark" : "light"}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <CloseIcon style={{ fontSize: 20 }} />
              ) : (
                <MenuIcon style={{ fontSize: 20 }} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-overlay ${menuOpen ? "open" : "closed"}`}>
        <div className="mobile-overlay-bg" onClick={() => setMenuOpen(false)} />
        <div className={`mobile-menu ${dark ? "dark" : "light"}`}>
          {pages.map((page, i) => (
            <React.Fragment key={page.url}>
              <a
                href={page.url}
                className={`mobile-nav-link ${dark ? "dark" : "light"}`}
                onClick={() => setMenuOpen(false)}
              >
                {page.text}
              </a>
              {i < pages.length - 1 && (
                <div className={`divider ${dark ? "dark" : "light"}`} />
              )}
            </React.Fragment>
          ))}
          <Link
            to="/contact"
            className="mobile-contact-btn"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us →
          </Link>
        </div>
      </div>
    </>
  );
}

export default ResponsiveAppBar;
