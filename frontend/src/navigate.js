import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navigate.css"; // Import your CSS file where you define styles

const Navigate = () => {
  const [menuUse, setMenuUse] = useState(true);
  const navigate = useNavigate();

  const menuBar = () => {
    setMenuUse(!menuUse);
  };

  const cart = () => {
    let user_id = localStorage.getItem("9ouenbcvgetywMhIOEJD") || "null";
    if (user_id === "null") {
      navigate("/login");
    } else {
      navigate("/cart");
    }
  };

  let menu = menuUse
    ? "https://cdn-icons-png.flaticon.com/128/5036/5036960.png"
    : "https://cdn-icons-png.flaticon.com/128/10288/10288720.png";
  let classname = menuUse ? "true" : "false";

  return (
    <>
      <div
        className="menubar"
        style={{
          cursor: "pointer",
        }}
      >
        <img id="menuBar" src={menu} alt="Menu" onClick={menuBar} />
      </div>
      <nav
        id={`navigation${classname}`}
        className="navbar"
        style={{
          backgroundColor: "rgba(77, 111, 168, 0.5)",
          color: "#ffffff",
          borderRadius: "15%", // This makes the navbar oval-shaped
        }}
      >
        <Link to="/" className="brand-link">
          <img
            src="./LuxoraLogo.png" // Replace with your actual logo image path
            alt="Luxora Logo"
            style={{ width: "100px", height: "auto" }} // Adjust width and height as needed
          />
        </Link>
        <Link to="/" style={{ color: "#ffffff" }}></Link>
        <Link to="/" style={{ color: "#ffffff" }}></Link>
        <Link to="/" style={{ color: "#ffffff" }}></Link>
        <Link to="/" style={{ color: "#ffffff" }}></Link>
        <Link to="/" style={{ color: "#ffffff" }}></Link>
        <Link to="/" style={{ color: "#ffffff" }}>
          Home
        </Link>
        <Link to="/signup" style={{ color: "#ffffff" }}>
          Signup
        </Link>
        <Link to="/login" style={{ color: "#ffffff" }}>
          Login
        </Link>
        <img
          src="https://cdn-icons-png.flaticon.com/128/4290/4290722.png"
          alt="cart"
          className="cart"
          onClick={cart}
        />
      </nav>
      <div
        className="menus"
        id={classname}
        style={{ backgroundColor: "#392459", color: "#ffffff" }}
      >
        <Link to="/" style={{ color: "#ffffff" }}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/25/25694.png"
            alt="home"
          />
          <p>Home</p>
        </Link>
        <Link to="/signup" style={{ color: "#ffffff" }}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/7542/7542128.png"
            alt="signup"
          />
          <p>Signup</p>
        </Link>
        <Link to="/login" style={{ color: "#ffffff" }}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/14575/14575259.png"
            alt="login"
          />
          <p>Login</p>
        </Link>
        <Link to="/mobile" style={{ color: "#ffffff" }}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/1551/1551353.png"
            alt="mobile"
          />
          <p>Mobile</p>
        </Link>
        <Link to="/laptop" style={{ color: "#ffffff" }}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/99/99488.png"
            alt="laptop"
          />
          <p>Laptop</p>
        </Link>
        <Link to="/toys" style={{ color: "#ffffff" }}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/3171/3171959.png"
            alt="Toys"
          />
          <p>Toys</p>
        </Link>
        <Link to="/cart" style={{ color: "#ffffff" }}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/4290/4290722.png"
            alt="Cart"
          />
          <p>Cart</p>
        </Link>
        <a
          href="https://github.com/Krish3914"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#ffffff" }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/128/4460/4460756.png"
            alt="Support"
          />
          <p>Support</p>
        </a>
      </div>
    </>
  );
};

export default Navigate;

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// const Navigate = () => {
//   const [menuUse, setMenuUse] = useState(true);
//   const navigate = useNavigate();
//   const menuBar = () => {
//     setMenuUse(!menuUse);
//   };
//   let menu = menuUse
//     ? "https://cdn-icons-png.flaticon.com/128/5036/5036960.png"
//     : "https://cdn-icons-png.flaticon.com/128/10288/10288720.png";
//   let classname = menuUse ? "true" : "false";
//   const cart = () => {
//     let user_id = localStorage.getItem("9ouenbcvgetywMhIOEJD") || "null";
//     if (user_id === "null") {
//       navigate("/login");
//     } else {
//       navigate("/cart");
//     }
//   };
//   return (
//     <>
//       <div className="menubar">
//         <img id="menuBar" src={menu} alt="Menu" onClick={menuBar} />
//       </div>
//       <nav id={`naviation${classname}`}>
//         <h1 id="h1">shopper.com</h1>
//         <Link to="/">Home</Link>
//         <Link to="/signup">Signup</Link>
//         <Link to="/login">Login</Link>
//         <img
//           src="https://cdn-icons-png.flaticon.com/128/4290/4290722.png"
//           alt="cart"
//           className="cart"
//           onClick={cart}
//         />
//       </nav>
//       <div className="menus" id={classname}>
//         <Link to="/">
//           <img
//             src="https://cdn-icons-png.flaticon.com/128/25/25694.png"
//             alt="home"
//           />
//           <p>Home</p>
//         </Link>
//         <Link to="/signup">
//           <img
//             src="https://cdn-icons-png.flaticon.com/128/7542/7542128.png"
//             alt="signup"
//           />
//           <p>Signup</p>
//         </Link>
//         <Link to="/login">
//           <img
//             src="https://cdn-icons-png.flaticon.com/128/14575/14575259.png"
//             alt="login"
//           />
//           <p>Login</p>
//         </Link>
//         <Link to="/mobile">
//           <img
//             src="https://cdn-icons-png.flaticon.com/128/1551/1551353.png"
//             alt="mobile"
//           />
//           <p>Mobile</p>
//         </Link>
//         <Link to="/laptop">
//           <img
//             src="https://cdn-icons-png.flaticon.com/128/99/99488.png"
//             alt="laptop"
//           />
//           <p>Laptop</p>
//         </Link>
//         <Link to="/toys">
//           <img
//             src="https://cdn-icons-png.flaticon.com/128/3171/3171959.png"
//             alt="Toys"
//           />
//           <p>Toys</p>
//         </Link>
//         <Link to="/cart">
//           <img
//             src="https://cdn-icons-png.flaticon.com/128/4290/4290722.png"
//             alt="Cart"
//           />
//           <p>Cart</p>
//         </Link>
//         <Link to="https://github.com/sivaprasath2004">
//           <img
//             src="https://cdn-icons-png.flaticon.com/128/4460/4460756.png"
//             alt="Cart"
//           />
//           <p>Support</p>
//         </Link>
//       </div>
//     </>
//   );
// };

// export default Navigate;
