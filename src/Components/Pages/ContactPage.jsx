import React from "react";
import Footer from "../Footer";

function ContactPage() {
  return (
    <div className="bg-[#FFFBF2] w-full">
      {/* Hero Section */}
      <div className="relative bg-[url('/images/bg.jpg')] bg-cover bg-center text-white h-96 pt-10">
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#2b1e1e] bg-opacity-80"></div>

        {/* Centered Heading */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h2 className="uppercase font-bold font-sans text-5xl text-center">
            Contact
          </h2>
          <br />
          <p>Home / Contact</p>
        </div>
      </div>
   <section className="py-24 text-white">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
      {/* Left Section */}
      <div className="relative">
        <img
          src="https://pagedone.io/asset/uploads/1696488602.png"
          alt="Contact Us"
          className="w-full h-full lg:rounded-l-2xl rounded-2xl object-cover"
        />
        <h1 className="absolute top-11 left-11 text-4xl font-bold text-white font-manrope z-10">
          Contact us
        </h1>
        <div className="absolute bottom-0 w-full p-6 lg:p-11 bg-white rounded-lg text-black">
          <div className="mb-4">
            <h5 className="font-semibold text-[#C87E4F]">Phone:</h5>
            <p className="ml-1">
              <a href="tel:9024450935" className="text-[#2e1e17] hover:underline">
                9024450935
              </a>
            </p>
          </div>
          <div className="mb-4">
            <h5 className="font-semibold text-[#C87E4F]">Email:</h5>
            <p className="ml-1">
              <a href="mailto:lalitgattani139@gmail.com" className="text-[#2e1e17] hover:underline">
                lalitgattani139@gmail.com
              </a>
            </p>
          </div>
          <div>
  <h5 className="font-semibold text-[#C87E4F]">Address:</h5>
  <p className="ml-1">
    <a
      href="https://www.google.com/maps?q=72/203,+Mansarovar,+Jaipur"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#2e1e17] hover:underline"
    >
      72/203, Mansarovar, Jaipur
    </a>
  </p>
</div>

        </div>
      </div>

      {/* Right Section */}
      <div className="p-5 lg:p-11 rounded-2xl border">
        <h2 className="text-[#C87E4F] font-manrope text-4xl font-semibold leading-10 mb-11">
          Send Us A Message
        </h2>
        <form
          action="https://formspree.io/f/myzpgrjd"
          method="POST"
          className="space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full px-5 py-3 rounded-md border border-[#C87E4F] bg-transparent text-white placeholder:text-[#212121] focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-5 py-3 rounded-md border border-[#C87E4F] bg-transparent text-white placeholder:text-[#212121] focus:outline-none"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            className="w-full px-5 py-3 rounded-md border border-[#C87E4F] bg-transparent text-white placeholder:text-[#212121] focus:outline-none"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-[#C87E4F] text-[#2e1e17] font-semibold py-3 rounded-md hover:bg-[#e29b6e] transition-all duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  </div>
</section>




      <Footer/>
    </div>
  );
}

export default ContactPage;
