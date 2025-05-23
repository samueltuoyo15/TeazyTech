import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function FormSection({ setShowSuccess, setShowFailure }) {
    const [fields, setFields] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [showError, setShowError] = useState({
        name: false,
        email: false,
        phone: false,
        message: false,
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (fields.name && fields.email && fields.phone && fields.message) {
            if (
                showError.name === false &&
                showError.email === false &&
                showError.phone === false &&
                showError.message === false
            ) {
                emailjs.init("TPxhQrfopzurp7Isq");

                //sending four parameters namely: service Id from emailjs, template Id from emailjs,
                //formdata and emailjs public key/API key
                try {
                    const response = await emailjs.send(
                        "service_it769k8",
                        "template_h0wx2fl",
                        fields,
                        "TPxhQrfopzurp7Isq"
                    );
                    console.log("email sent succesfully", response);
                    setShowSuccess(true);
                    setTimeout(() => setShowSuccess(false), 4000);
                } catch (error) {
                    setShowFailure(true);
                    setTimeout(() => setShowFailure(false), 4000);
                    console.log("failed to submit");
                }
            }
        }
    };

    const handleFormChange1 = (e) => {
        setFields((prev) => ({
            ...prev,
            name: e.target.value,
        }));
        if (e.target.value === "")
            setShowError({
                ...showError,
                name: true,
            });
        else
            setShowError({
                ...showError,
                name: false,
            });
    };

    const handleFormChange2 = (e) => {
        setFields({
            ...fields,
            email: e.target.value,
        });
        if (
            e.target.value === "" ||
            !e.target.value.includes("@") ||
            !e.target.value.includes(".")
        )
            setShowError({
                ...showError,
                email: true,
            });
        else
            setShowError({
                ...showError,
                email: false,
            });
    };

    const handleFormChange3 = (e) => {
        setFields({
            ...fields,
            phone: e.target.value,
        });
        if (e.target.value === "" || isNaN(e.target.value))
            setShowError({
                ...showError,
                phone: true,
            });
        else
            setShowError({
                ...showError,
                phone: false,
            });
    };

    const handleFormChange4 = (e) => {
        setFields({
            ...fields,
            message: e.target.value,
        });
        if (e.target.value === "")
            setShowError({
                ...showError,
                message: true,
            });
        else
            setShowError({
                ...showError,
                message: false,
            });
    };

    return (
        <>
            <section className="flex flex-col md:flex-row gap-y-5 md:gap-y-0 gap-x-7 items-center justify-center py-20 bg-slate-200">
                <div className="w-[80%] md:w-[32%] bg-white shadow-md rounded-sm p-4">
                    <h1 className="text-[1.4rem] font-medium">Get in touch</h1>
                    <p className="text-black/80 my-1.5">
                        We&apos;re all ears for all of your messages to us.
                        Please don&apos;t hesitate to contact us
                    </p>
                    <ul className="mt-6 flex flex-col justify-center gap-y-2">
                        <li className="flex">sokka1234@gmail.com</li>
                        <li className="flex gap-x-1.5">
                            <svg
                                className="w-4 stroke-indigo-500 fill-indigo-500"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path d="M23 16.92c0.016-0.714-0.236-1.404-0.673-1.943-0.46-0.566-1.129-0.967-1.925-1.080-0.8-0.098-1.695-0.314-2.586-0.646-0.433-0.159-0.893-0.218-1.344-0.174-0.663 0.064-1.307 0.349-1.819 0.855l-0.72 0.72c-1.77-1.117-3.36-2.667-4.583-4.589l0.726-0.726c0.322-0.33 0.563-0.726 0.707-1.156 0.212-0.632 0.214-1.336-0.039-2.011-0.289-0.753-0.518-1.644-0.644-2.595-0.104-0.714-0.456-1.345-0.963-1.804-0.539-0.486-1.256-0.779-2.027-0.771h-2.996c-0.088 0-0.182 0.004-0.273 0.012-0.824 0.075-1.542 0.478-2.033 1.066s-0.758 1.367-0.683 2.199c0.3 3.076 1.365 6.243 3.216 9.102 1.502 2.413 3.648 4.623 6.298 6.306 2.568 1.697 5.684 2.862 9.086 3.231 0.092 0.009 0.191 0.013 0.288 0.013 0.828-0.003 1.578-0.343 2.118-0.887s0.873-1.297 0.87-2.121zM21 16.92v3c0.001 0.28-0.109 0.53-0.29 0.712s-0.429 0.295-0.706 0.296c-3.149-0.336-5.961-1.391-8.263-2.912-2.428-1.543-4.359-3.537-5.702-5.694-1.697-2.62-2.655-5.481-2.924-8.238-0.024-0.268 0.064-0.526 0.229-0.724s0.403-0.33 0.678-0.355l3.088-0.005c0.271-0.003 0.507 0.094 0.687 0.256 0.17 0.154 0.288 0.366 0.323 0.608 0.142 1.072 0.408 2.117 0.757 3.025 0.081 0.216 0.080 0.447 0.010 0.658-0.049 0.145-0.131 0.281-0.242 0.395l-1.262 1.261c-0.324 0.324-0.379 0.814-0.162 1.201 1.584 2.785 3.839 4.957 6.381 6.378 0.397 0.222 0.882 0.144 1.195-0.166l1.27-1.27c0.166-0.164 0.377-0.257 0.598-0.279 0.152-0.015 0.31 0.005 0.459 0.060 1.022 0.381 2.070 0.636 3.034 0.754 0.241 0.034 0.462 0.166 0.615 0.355 0.147 0.181 0.231 0.412 0.226 0.682z"></path>
                            </svg>
                            +1 (234) 567 890
                        </li>
                        <li>Lagos State, Nigeria</li>
                    </ul>
                </div>

                <div className="w-[85%] md:w-[48%] lg:w-[35%] bg-white shadow-md rounded-sm p-6">
                    <form onSubmit={handleSubmit} className="**:mb-6">
                        <div>
                            <label id="name" className="flex flex-col">
                                <span className="">Name</span>
                                <input
                                    value={fields.name}
                                    onChange={(e) => handleFormChange1(e)}
                                    aria-labelledby="name"
                                    type="text"
                                    className="border border-t-[3px] border-t-slate-300 rounded-md p-1.5 focus:outline-indigo-500"
                                ></input>
                            </label>
                            {showError.name && (
                                <span className="text-red-500 text-sm">
                                    Please enter a value
                                </span>
                            )}
                        </div>

                        <div>
                            <label id="email" className="flex flex-col">
                                <span className="">Email</span>
                                <input
                                    value={fields.email}
                                    onChange={(e) => handleFormChange2(e)}
                                    aria-labelledby="email"
                                    type="email"
                                    className="border border-t-[3px] border-t-slate-300 rounded-md p-1.5 focus:outline-indigo-500"
                                ></input>
                            </label>
                            {showError.email && (
                                <span className="text-red-500 text-sm">
                                    Please enter a valid email
                                </span>
                            )}
                        </div>

                        <div>
                            <label id="phone" className="flex flex-col">
                                <span className="">Phone Number</span>
                                <input
                                    value={fields.phone}
                                    onChange={(e) => handleFormChange3(e)}
                                    aria-labelledby="phone"
                                    type="number"
                                    className="border border-t-[3px] border-t-slate-300 rounded-md p-1.5 focus:outline-indigo-500"
                                ></input>
                            </label>
                            {showError.phone && (
                                <span className="text-red-500 text-sm">
                                    Please enter a valid phone number
                                </span>
                            )}
                        </div>

                        <div>
                            <label id="message" className="flex flex-col">
                                <span className="">Message</span>
                                <textarea
                                    value={fields.message}
                                    onChange={(e) => handleFormChange4(e)}
                                    aria-labelledby="message"
                                    type="text"
                                    className="h-28 border border-t-[3px] border-t-slate-300 rounded-md p-1.5 focus:outline-indigo-500"
                                ></textarea>
                            </label>
                            {showError.message && (
                                <span className="text-red-500 text-sm">
                                    Please type in something
                                </span>
                            )}
                        </div>

                        <button
                            className="border w-full my-4 bg-indigo-500 hover:bg-indigo-600
                         active:bg-indigo-800 text-white py-1 disabled:bg-indigo-300 cursor-pointer
                         disabled:cursor-default"
                            disabled={
                                fields.name === "" ||
                                fields.email === "" ||
                                fields.phone === "" ||
                                fields.message === "" ||
                                showError.name === true ||
                                showError.email === true ||
                                showError.phone === true ||
                                showError.message === true
                            }
                        >
                            Send
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
}
