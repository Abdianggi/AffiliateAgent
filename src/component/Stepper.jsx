export default function Stepper({ steps }) {
    return (
        <>
            <div className="mb-6 sm:px-9 border-dashed border-b-2 pb-12">
                <div className="flex items-center justify-between ">
                    {steps.map((step, index) => (
                        <>
                            <div className="flex flex-col items-center">
                                <div
                                    className={`w-6 h-6 text-xs sm:w-8 sm:h-8 sm:text-sm rounded-full flex items-center justify-center mx-5 ${
                                        step.active ? "bg-[#3EA31A] text-white" : "bg-gray-300 text-white"
                                    }`}
                                >
                                    {index + 1}
                                </div>
                                <span className="text-[0.65rem] sm:text-sm font-light absolute mt-9">{step.title}</span>
                            </div>

                            {index < steps.length - 1 && (
                                <div
                                className={`flex-1 h-0.5 
                                    ${steps[index + 1].active ? "bg-[#3EA31A]" : "bg-gray-300"}`
                                }
                                ></div>
                            )}
                        </>
                    ))}
                </div>
            </div>
        </>
    );
}
