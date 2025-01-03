import React, { useState } from "react";

const FormModal = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  formFields,
  defaultValues,
}) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 700); // Waktu untuk animasi slide-down
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    onSubmit(data);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-10 z-50">
      {/* Modal Container */}
      <div
        className={`bg-transparent rounded-lg grid grid-cols-[1fr_auto] ${
          isClosing ? "animate-slide-down" : "animate-slide-up"
        }`}
      >
        <div className="bg-white rounded-md">
          <div className="border-b pt-3 pb-2 px-5 rounded-t-md flex justify-between">
            <div className="text-sm font-normal">{title}</div>
            <div className="font-medium cursor-pointer" onClick={handleClose}>
              &#x2715;
            </div>
          </div>

          <form className="px-5 pb-5 pt-2" onSubmit={handleSubmit}>
            <div className="px-14 py-9">
              {formFields.map((field, index) => (
                <div key={index} className="mb-4 flex items-center gap-4">
                  <label
                    className="w-1/6 text-sm font-light"
                    htmlFor={field.name}
                  >
                    {field.label}
                  </label>
                  :
                  {field.type === "textarea" ? (
                    <textarea
                      id={field.name}
                      name={field.name}
                      className="w-3/4 text-sm font-light border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                      rows="3"
                      defaultValue={defaultValues[field.name] || ""}
                      disabled={field.disable}
                    />
                  ) : field.type === "select" ? (
                    <select
                      id={field.name}
                      name={field.name}
                      className="w-3/4 text-sm font-light border border-gray-300 rounded-md px-3 py-2 focus:outline-none bg-white focus:ring focus:ring-blue-300"
                      defaultValue={defaultValues[field.name] || ""}
                      disabled={field.disable}
                    >
                      {field.options?.map((option, idx) => (
                        <option key={idx} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      className={`w-3/4 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300 ${field.disable ? `cursor-not-allowed bg-[#43434333] text-[#999999] font-extralight` : `font-light`}`}
                      defaultValue={defaultValues[field.name] || ""}
                      disabled={field.disable}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end">
              <button
                type="button"
                className="bg-[#E6E6E6] text-[#606060] px-2 py-1 rounded-md text-sm font-light mr-2"
                onClick={handleClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-[#0B8BEE] text-white px-2 py-1 rounded-md text-sm font-light"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormModal;
