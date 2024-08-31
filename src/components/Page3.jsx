import React from "react";

function Page3() {
  return (
    <>
      <section className="text-center mb-16 h-[100vh] background-image2 flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-black md:text-white">
          Support Our Cause
        </h1>
        <p className="text-lg md:text-xl mb-6 text-black md:text-white">
          Support our mission to provide free educational resources. Your
          contribution can change lives. Donate today!
        </p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded text-lg w-48">
          Donate Now
        </button>
      </section>
    </>
  );
}

export default Page3;
