// BES-AF-02-0-PAGE - BANK VERIFICATION
import Stepper from "../component/Stepper";

export default function VerificationDone({onBack, onContinue}) {
    const steps = [
        { title: 'ID Verification', active: true },
        { title: 'Bank Information', active: true },
        { title: 'Done', active: true },
    ];

    return (
        <div>
            <div className="block sm:flex sm:justify-between mb-14">
                <div className="text-sm sm:text-2xl font-medium flex text-hybrid">
                    Verify your Information
                </div>
                <div className="text-xs w-60 text-center mt-2 sm:mt-0 sm:w-auto sm:text-sm font-light text-hysuccess-500 bg-[#3EA31A0A] border-[1px] border-hysuccess-500 py-1 px-2 sm:py-2 sm:px-5 rounded-lg">All data is safety stored and encrypted</div>
            </div>

            <Stepper steps={steps} />

            <div className="text-center">
                <div className="flex justify-center mb-3 sm:mb-6">
                    <div className="bg-[#72BB101A] rounded-full p-3 w-16 h-16 flex items-center justify-center">
                        <svg width="36" height="38" viewBox="0 0 36 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_544_4764" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="38">
                                <path d="M18 2.17773L22.4187 5.40112L27.8889 5.39103L29.5687 10.5962L34 13.8028L32.3 19.0012L34 24.1997L29.5687 27.4063L27.8889 32.6115L22.4187 32.6014L18 35.8248L13.5813 32.6014L8.11114 32.6115L6.43131 27.4063L2 24.1997L3.70002 19.0012L2 13.8028L6.43131 10.5962L8.11114 5.39103L13.5813 5.40112L18 2.17773Z" fill="white" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12.1118 19.0008L16.3177 23.2067L24.7295 14.7949" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                            </mask>
                            <g mask="url(#mask0_544_4764)">
                                <path d="M-2.14844 -1H37.8516V39H-2.14844V-1Z" fill="#72BB10"/>
                            </g>
                        </svg>
                    </div>
                </div>


                <p className="text-md sm:text-xl font-medium">Your Document Uploaded!</p>
                <p className="text-xs sm:text-sm font-light text-gray-400">Your Verification process takes approximately 1x24 hours. <br />
                Please wait until the process is complete before continuing your Reseller.</p>

            </div>
            
            <div className="flex justify-center">
                <button
                    type="button"
                    onClick={onContinue}
                    className="py-1 px-3 font-medium text-sm sm:text-md sm:py-3 sm:px-9 mt-6 sm:font-semibold bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    
                >
                    Close
                </button>
            </div>
        </div>
    );
  }
  