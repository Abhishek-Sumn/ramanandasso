import React from 'react'

const contact = () => {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div className="lg:mb-0 mb-10">
            <div className="group w-full h-full relative">
              <img
                src="https://pagedone.io/asset/uploads/1696488602.png"
                alt="Contact Us"
                className="w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply bg-indigo-700 object-cover"
              />
              <h1 className="font-manrope text-white text-4xl font-bold absolute top-11 left-11">
                Contact us
              </h1>
              <div className="absolute bottom-0 w-full lg:p-11 p-5">
                <div className="bg-white rounded-lg p-6">
                  {[
                    { icon: "📞", text: "470-601-1911" },
                    { icon: "📧", text: "Pagedone1234@gmail.com" },
                    { icon: "📍", text: "654 Sycamore Avenue, Meadowville, WA 76543" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center mb-6">
                      <span className="text-2xl text-indigo-600">{item.icon}</span>
                      <h5 className="text-black text-base font-normal leading-6 ml-5">
                        {item.text}
                      </h5>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl">
            <h2 className="text-indigo-600 font-manrope text-4xl font-semibold mb-11">
              Send Us A Message
            </h2>
            {[
              "Name",
              "Email",
              "Phone",
              "Message",
            ].map((placeholder, index) => (
              <input
                key={index}
                type="text"
                className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
                placeholder={placeholder}
              />
            ))}

            <div className="mb-10">
              <h4 className="text-gray-500 text-lg font-normal mb-4">
                Preferred method of communication
              </h4>
              <div className="flex">
                {["Email", "Phone"].map((method, index) => (
                  <div key={index} className="flex items-center mr-11">
                    <input
                      id={`radio-${index}`}
                      type="radio"
                      name="contact-method"
                      className="hidden"
                    />
                    <label
                      htmlFor={`radio-${index}`}
                      className="flex items-center cursor-pointer text-gray-500 text-base font-normal"
                    >
                      <span className="border border-gray-300 rounded-full mr-2 w-4 h-4 ml-2"></span>
                      {method}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <button className="w-full h-12 text-white text-base font-semibold rounded-full transition-all duration-700 hover:bg-indigo-800 bg-indigo-600 shadow-sm">
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default contact