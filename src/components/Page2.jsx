import React from "react";

function Page2() {
  return (
    <>
      <section className="text-center mb-16 h-[100vh] background-image1 flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-black md:text-white">
          Volunteer as a Mentor
        </h1>
        <p className="text-lg md:text-xl mb-6 text-black md:text-white">
          Share your expertise and make a difference in a student's life.
          Volunteer as a mentor today!
        </p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded text-lg w-48">
          Become a Mentor
        </button>
      </section>
    </>
  );
}

export default Page2;
