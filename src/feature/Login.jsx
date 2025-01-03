import { useState } from "react";
import hybridAccent from "../assets/hybridAccent.svg";
import hybridIcon from "../assets/hybrid.svg";

export default function Login(){
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
      setShowPassword((prev) => !prev);
    };

    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            {/* Kolom Kiri */}
            <div className="flex justify-start relative ">
              <img 
                src={hybridAccent} 
                alt="Accent" 
                className="
                  absolute 
                  top-[-12rem]
                  md:block 
                  md:left-[-30rem] md:top-[-24rem] md:max-w-3xl
                  lg:left-[-25rem] lg:top-[-24rem] lg:max-w-3xl
                  h-auto"
              />
            </div>

      
            {/* Kolom Kanan */}
            <div className="flex justify-center px-6 md:p-0 z-20">
              <div className="w-full max-w-md bg-white py-4 px-9 rounded-lg shadow-lg md:bg-transparent md:p-0 md:shadow-none">
                <div className="flex justify-center">
                  <img src={hybridIcon} alt="" />
                </div>
                <div className="text-center font-normal text-2xl mt-6">Welcome Affilator</div>
                <div className="text-start font-light text-sm mb-2">
                  We’re glad to see you! Enter your details to continue
                </div>
                <form>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm text-gray-600">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-2 py-3 text-xs border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
      
                  <div className="mb-1">
                    <label htmlFor="password" className="block text-sm text-gray-600">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        className="w-full px-2 py-3 text-xs border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                        placeholder="********"
                        required
                      />
                      <button
                        type="button"
                        onClick={togglePassword}
                        className="absolute right-2 top-2 text-gray-600"
                      >
                        {showPassword ? (
                          <i className="fa-regular fa-eye-slash"></i>
                        ) : (
                          <i className="fa-regular fa-eye"></i>
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="text-end">
                    <a href="" className="text-sm font-medium text-black hover:text-slate-800">
                      Forgot password?
                    </a>
                  </div>
                  <button
                    type="submit"
                    className="mt-6 w-full px-4 py-2 text-white bg-black rounded-md hover:bg-slate-800 focus:outline-none focus:ring focus:ring-blue-300"
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}