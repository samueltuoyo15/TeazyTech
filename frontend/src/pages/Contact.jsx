import FormSection from "../components/home/formSection";
import AnimatedSection from "../components/home/AnimatedSection";
import { useState, useEffect } from "react";

const Contact = () => {
     const [showSuccess, setShowSuccess] = useState(false);
     const [showFailure, setShowFailure] = useState(false);
       
    useEffect(() => {
            window.scroll({ top: 0,left: 0, behaviour: "smooth" })
        }, [])

  return (
    <>
        <div className="mt-10">
          {/*form with slide in effect from right*/}
            <AnimatedSection animation="slide-left" duration={900} delay={150}>
                <FormSection
                    showSuccess={showSuccess}
                    showFailure={showFailure}
                    setShowSuccess={setShowSuccess}
                    setShowFailure={setShowFailure}
                />
            </AnimatedSection>

            </div>
            <div>
            {/*The success and failure messages for the form..i coldnt implement it in the form module because the animatedSection component is intefering with it not making the position fixed*/}
            {showSuccess && (
                <div
                    className="fixed top-[80%] left-[10%] md:left-[40%] bg-white text-indigo-500 border-[3px] border-green-500
                 rounded-md py-4 px-4 w-[80%] md:w-[20%]"
                >
                    Message sent successfully!
                </div>
            )}
            {showFailure && (
                <div
                    className="fixed top-[80%] left-[10%] md:left-[40%] bg-white text-red-400 border-[3px] border-red-500
                 rounded-md py-4 px-4 w-[80%] md:w-[20%]"
                >
                    Message not sent! Please try again later.
                </div>
            )}
        </div>
    </>
  )
}

export default Contact