import React from "react";
import App from "../Layouts/App";
import TextIntro from "../Components/TextIntro";
import SubText from "../Components/SubText";
import Input from "../Components/Input";
import Label from "../Components/Label";
function Contact() {
    const string = "Contact Me";

    return (
        <div className="flex flex-col items-center justify-center md:flex-row mt-14 gap-y-8 md:gap-y-0 md:gap-x-4">
            <div className="md:w-1/2">
                <TextIntro array={string.split("")} />
                <SubText>
                    I'm interested in freelance opportunities <br /> especially
                    ambitious or large projects.
                    <br /> Howefer, if you have other request or question, don't
                    hesitate to use the form.
                </SubText>

                <div className="mt-8 space-y-4 font-semibold leading-3">
                    <p> @whatsapp : 082298859671</p>
                    <p> @email : Ilmansunannudin2@gmail.com</p>
                </div>
            </div>
            <div className="w-full md:w-1/2">
                <div className="flex mb-5 gap-x-2">
                    <div className="w-1/2">
                        <Label htmlFor={"name"} children="Your Name" />
                        <Input name="name" id="name" type={"text"} />
                    </div>
                    <div className="w-1/2">
                        <Label htmlFor={"whatsapp"} children="Your Whatsapp" />
                        <Input name="whatsapp" id="whatsapp" type={"number"} />
                    </div>
                </div>
                <div className="mb-5">
                    <Label htmlFor={"subject"} children="Subject" />
                    <Input name="subject" id="subject" type={"text"} />
                </div>
                <div className="mb-5">
                    <Label children={"message"} htmlFor={"message"} />
                    <textarea
                        name="message"
                        className="w-full mt-4 bg-transparent rounded-lg shadow-sm focus:ring focus:ring-slate-200 border-1"
                        id="message"
                    
                        cols="30"
                        rows="10"
                    ></textarea>
                </div>
            </div>
        </div>
    );
}

Contact.layout = (page) => <App children={page} />;
export default Contact;
