import React from "react";

function Page1() {
  return (
    <>
      <section className="text-center mb-16 h-[100vh] background-image flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white md:text-white">
          Join Our Free Webinars
        </h1>
        <p className="text-lg md:text-xl mb-6 text-white md:text-white">
          Enhance your skills and knowledge with our free, expert-led webinars.
          Register now to secure your spot!
        </p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded text-lg w-48">
          Join a Webinar
        </button>
      </section>
    </>
  );
}

export default Page1;
