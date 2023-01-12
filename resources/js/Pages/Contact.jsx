import React, { useEffect } from "react";
import App from "../Layouts/App";
import TextIntro from "../Components/TextIntro";
import SubText from "../Components/SubText";
import Input from "../Components/Input";
import Label from "../Components/Label";
import { useForm } from "@inertiajs/inertia-react";
import { toast, Toaster } from "react-hot-toast";
function Contact() {
    const string = "Contact Me";
    const { data, setData, post, errors, reset } = useForm({
        name: "",
        whatsapp: "",

        subject: "",
        message: "",
    });
    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const submitForm = (e) => {
        e.preventDefault();
        post("/contact", {
            onSuccess: () => {
                toast.success(
                    "Thanks for your submit, i will contact you back soon!"
                );
                reset();
            },
        });
    };

    useEffect(() => {
        if (Object.keys(errors).length > 0) {
            toast.error("Please fill all form");
        }
    }, [errors]);
    return (
        <div className="flex flex-col items-center justify-center md:flex-row gap-y-8 md:gap-y-0 md:gap-x-4">
            <Toaster position="top-center" reverseOrder={false} />
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
                <form onSubmit={submitForm}>
                    <div className="flex mb-5 gap-x-2">
                        <div className="w-1/2">
                            <Label htmlFor={"name"} children="Your Name" />
                            <Input
                                value={data.name}
                                onChange={onChange}
                                name="name"
                                id="name"
                                type={"text"}
                            />
                        </div>
                        <div className="w-1/2">
                            <Label
                                htmlFor={"whatsapp"}
                                children="Your Whatsapp"
                            />
                            <Input
                                value={data.whatsapp}
                                onChange={onChange}
                                name="whatsapp"
                                id="whatsapp"
                                type={"number"}
                            />
                        </div>
                    </div>
                    <div className="mb-5">
                        <Label htmlFor={"subject"} children="Subject" />
                        <Input
                            value={data.subject}
                            onChange={onChange}
                            name="subject"
                            id="subject"
                            type={"text"}
                        />
                    </div>
                    <div className="mb-5">
                        <Label children={"message"} htmlFor={"message"} />
                        <textarea
                            onChange={onChange}
                            name="message"
                            className="w-full mt-4 bg-transparent rounded-lg shadow-sm focus:ring focus:ring-slate-200 border-1"
                            id="message"
                            cols="30"
                            rows="10"
                        >
                            {data.message}
                        </textarea>
                    </div>
                    <button
                        type="submit"
                        className="px-4 fade-in-to-top py-2.5 border border-green-300 hover:border-green-800 focus:border-green-300 rounded-lg shadow-sm shadow-green-300/50 focus:outline-none "
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}

Contact.layout = (page) => <App children={page} />;
export default Contact;
