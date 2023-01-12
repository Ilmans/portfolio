import React, { useEffect, useState } from "react";
import ToggleMobile from "../Components/ToggleMobile";
import Sidebar from "./Sidebar";

function App({ children }) {
    const [showSidebar, setShowSidebar] = useState(false);
    return (
        <div className="">
            <Sidebar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />

            <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-900 text-slate-100">
                <ToggleMobile
                    showSidebar={showSidebar}
                    setShowSidebar={setShowSidebar}
                />
                <div className=" text-white font-bold flex gap-x-2 items-center justify-end p-8">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 inline"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                    </svg>
                    <p className="inline">Next</p>
                </div>

                <div className="   min-h-screen  lg:ml-44 md:ml-44 px-12   md:mt-0  ">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default App;
