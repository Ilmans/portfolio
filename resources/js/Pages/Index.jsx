import { Head } from "@inertiajs/inertia-react";
import React from "react";
import TextIntro from "../Components/TextIntro";
import App from "../Layouts/App";

function Index() {
    const string = "Hi,I'am  Ilman S,Web Developer";
    let array = string.split("");
    return (
      <div className="-mt-14 md:-mt-0 flex items-center  min-h-screen">
      <Head title="Portfilio | Home" />
        <div className="md:flex   items-center justify-between gap-x-8 ">
         
            <div className="space-y-8 w-full  md:w-2/3">
                <TextIntro array={array} />
                <p className="font-semibold !text-transparent bg-gradient-to-r from-red-50 via-pink-100 to-green-500 bg-clip-text text-lg md:text-xl text-slate-400 mt-2  fade-in-to-top">
                    I am expert in backend developer and have finished a lot of
                    project as a freelancer.
                </p>

                <button className="px-4 fade-in-to-top py-2.5 border border-green-300 hover:border-green-800 focus:border-green-300 rounded-lg shadow-sm shadow-green-300/50 focus:outline-none ">
                    Contact Me
                </button>
            </div>
            <div className="w-full hidden  md:w-1/3 mt-20 md:mt-0 lg:flex items-center justify-center fade-in-to-left">
                <div className="relative  rounded-full overflow-hidden    box-border">
                    <svg
                        className="w-full h-full "
                        viewBox="0 0 200 200"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill="#F2F4F8"
                            d="M40.2,-67.9C54.1,-61.6,68.8,-54.9,74,-43.5C79.2,-32.1,74.9,-16.1,75.3,0.2C75.7,16.5,80.8,33.1,74.5,42.5C68.2,51.9,50.4,54.2,36.1,57C21.7,59.8,10.9,63.2,-1.4,65.6C-13.7,68.1,-27.4,69.7,-36.9,64.1C-46.4,58.5,-51.6,45.6,-59.7,33.7C-67.8,21.9,-78.8,10.9,-76.6,1.3C-74.4,-8.4,-58.9,-16.7,-49.4,-26.3C-40,-35.8,-36.5,-46.6,-29.3,-56.8C-22.1,-66.9,-11,-76.6,1.1,-78.4C13.1,-80.2,26.3,-74.2,40.2,-67.9Z"
                            transform="translate(100 100)"
                        />
                    </svg>

                    <img
                        className="absolute -top-12  shadow-sm border-1 border-slate-800 shadew-slate-800"
                        width={300}
                        height={200}
                        src="images/pas-foto2.png"
                        alt=""
                    />
                </div>
            </div>
        </div>
      </div>
    );
}

Index.layout = (page) => <App children={page} />;
export default Index;
