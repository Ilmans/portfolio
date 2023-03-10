import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import React, { useEffect, useState } from "react";
import ToggleMobile from "../Components/ToggleMobile";
import Sidebar from "./Sidebar";

function App({ children }) {
    const [showSidebar, setShowSidebar] = useState(false);
    const {url} = usePage();
    useEffect(()=> {
         setShowSidebar(false)
    },[url])

    const listPage = ['/','/portfolio','/articles','/contact'];
    const next = () => {
       const index = listPage.findIndex((page) => page == url);
        Inertia.get(listPage[index + 1]);
       
    }
    return (
        <div className="">
            <Sidebar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />

            <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-green-900 text-slate-100">
                <ToggleMobile
                    showSidebar={showSidebar}
                    setShowSidebar={setShowSidebar}
                />
                <div onClick={next}  className="flex items-center justify-end p-8 font-bold text-white hover:cursor-pointer hover:text-green-300 gap-x-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={`inline w-6 h-6 ${listPage.findIndex((p) => p == url) == 3 ? 'hidden' : ''}`}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                    </svg>
                    <p className="inline">{listPage.findIndex((p) => p == url) == 3 ? '' : 'Next'}</p>
                </div>

                <div className="min-h-screen px-12 lg:ml-44 md:ml-44 md:mt-0 ">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default App;
