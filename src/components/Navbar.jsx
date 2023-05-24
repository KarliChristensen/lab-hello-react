import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center fixed top-0 w-full justify-between px-4 py-2 bg-grey m-5">
      <img
        src="/src/images/ironhack-logo-xs.png"
        alt="Ironhack Logo"
        className="ml-10"
      />
      <img
        src="/src/images/menu-top-xs.png"
        alt="Burger menu"
        className="ml-auto mr-10"
      />
    </div>
  );
};

export default Navbar;
