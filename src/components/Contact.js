import React from "react";
import Swal from 'sweetalert2';

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "e358249f-80d6-46f3-bc87-631b44e9507a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success"
      });
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-12 px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Contact Us</h1>
      <section className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-lg">
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="flex flex-col">
            <label className="text-lg font-medium text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your name"
              name="name"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-medium text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your email"
              name="email"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-medium text-gray-700 mb-2">Your Message</label>
            <textarea
              name="message"
              className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your message"
              required
              rows="6"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-600 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
