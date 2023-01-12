import React from "react";

function Input({ type, className = "", ...props }) {
    return (
        <input
            {...props}
            type={type}
            className="w-full mt-4 bg-transparent rounded-lg shadow-lg focus:border-b focus:border-green-300 focus:outline-none focus:bg-transparent focus:ring focus:ring-slate-200"
        />
    );
}

export default Input;
