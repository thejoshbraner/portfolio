import React from "react";

const Navbar = () => {
    return (
        <div className="w-full h-10 text-rose-600 bg-white flex flex-row gap-x-2 p-2 m-3 justify-center">
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
        </div>
    );
};

export default Navbar;
