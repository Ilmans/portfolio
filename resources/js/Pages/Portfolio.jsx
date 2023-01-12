import { Head } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import Item from "../Components/Item";
import Modal from "../Components/Modal";
import App from "./../Layouts/App";
function Portfolio({ projects }) {
    const [html, setHtml] = useState("");
    const [showModal,setShowModal] = useState(false);

    const viewDetail = (description) => {
      setHtml(description)
        setShowModal((show) => !show);
    };
    return (
        <>
            <Head title="My Work" />
            <Modal html={html} showModal={showModal} setShowModal={setShowModal} />
            <div className="grid grid-cols-1 gap-8 mx-auto max-w-screen-2xl md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, i) => (
                    <div key={i}>
                        <Item
                            name={project.name}
                            stacks={JSON.parse(project.stacks)}
                            image={project.image}
                            year={project.year}
                            viewDetail={() => viewDetail(project.description)}
                        />
                    </div>
                ))}
            </div>
        </>
    );
}

Portfolio.layout = (page) => <App children={page} />;
export default Portfolio;
