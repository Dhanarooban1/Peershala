import React, { useState } from "react";
import { Calendar, Mail, Users } from "lucide-react";
import mentor1 from "../assets/mentor1.jpeg";
import mentor2 from "../assets/mentor2.jpeg";
import mentor3 from "../assets/mentor3.jpeg";
import mentor4 from "../assets/mentor4.jpeg";
import image from "../assets/image.png";
import Page3 from "./page3";
import Page1 from "./page1";
import Page2 from "./page2";

import Image1 from "../assets/Photos/Image1.jpeg";
import Image2 from "../assets/Photos/Image2.jpeg";
import Image3 from "../assets/Photos/Image3.jpeg";
import Image4 from "../assets/Photos/Image4.jpeg";
import Image5 from "../assets/Photos/Image5.jpeg";



import Image6 from "../assets/Photos/Image6.jpeg";

import { GiFastBackwardButton } from "react-icons/gi";
import { GiFastForwardButton } from "react-icons/gi";

const GI = [Image1, Image2, Image3, Image4, Image5, Image6];
const mentors = [mentor1, mentor2, mentor3, mentor4];

const Home = () => {
  const [page, setPage] = useState(1);
  console.log(page);
  function forward() {
    if (page < 3) {
      setPage(page + 1);
    } else {
      setPage(1);
    }
  }

  function backward() {
    if (page > 0) {
      setPage(page - 1);
    } else {
      setPage(3);
    }
  }
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <nav className="container mx-auto px-4 py-3">
          <div className="flex flex-col md:flex-row justify-between items-center">
              <img
                src={image}
                style={{ width: "6%", height: "auto" }}
                // alt={`Gallery Image ${i}`}
                // className="object-cover w-full h-full"
              />
            <div className="flex flex-wrap justify-around w-[100%] gap-3">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Home
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                About Us
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Events
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Mentors
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Students
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Get Involved
              </a>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded w-full md:w-auto">
              Register
            </button>
          </div>
        </nav>
      </header>

      <main className="mx-auto px-4 py-8">
        <div className="relative min-h-[70vh] bg-gray-100">
          <button
            onClick={backward}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-3xl text-white hover:text-white"
          >
            <GiFastBackwardButton />
          </button>
          <button
            onClick={forward}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-3xl text-white hover:text-white"
          >
            <GiFastForwardButton />
          </button>
          {page === 1 ? <Page1 /> : page === 2 ? <Page2 /> : <Page3 />}
        </div>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Our ~ & Goals
          </h2>
          <p className="text-lg md:text-xl mb-6">
            Peershala empowers students through dynamic, peer-driven learning
            and cutting-edge tools for academic and future success.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border rounded-lg p-6">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                Mission
              </h3>
              <p>
                Peershala's mission is to empower students with skills, foster a
                dynamic learning community, and provide mentorship for academic
                and professional success.
              </p>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">Vision</h3>
              <p>
                Peershala envisions limitless education, fostering lifelong
                learning and growth to develop adaptable leaders through
                mentorship and knowledge sharing.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Achievements
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-blue-600">
                99%
              </p>
              <p>Members</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-blue-600">
                100+
              </p>
              <p>Workshops</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-blue-600">
                15K+
              </p>
              <p>Beneficiaries</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-blue-600">
                15K+
              </p>
              <p>Volunteers</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Our Gallery
          </h2>
          <p className="mb-4">
            Browse through our gallery to see highlights from our webinars,
            seminars, and mentorship programs, showcasing the positive impact
            we've made.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {GI.map((GI, i) => (
              <div key={i} className="aspect-video">
                <img
                  src={GI}
                  alt={`Gallery Image ${i}`}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded w-full md:w-auto">
              View More
            </button>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {mentors.map((mentor, i) => (
              <div key={i} className="border rounded-lg p-6">
                <div className="aspect-square rounded-full mb-4 overflow-hidden">
                  <img
                    src={mentor}
                    alt={`mentor-${i + 1}`}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="font-semibold">Lorem Ipsum</h3>
                <p className="text-sm text-gray-600">Project Head</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded w-full md:w-auto">
              View More
            </button>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Upcoming Bootcamps
          </h2>
          <div className="grid gap-4">
            {[
              {
                date: "03 Jul 2024",
                title: "Tech Talk",
                time: "8:30 AM - 12:30 PM, Sunday",
                location: "Zoom Call",
              },
              {
                date: "24 Aug 2024",
                title: "Tech Talk",
                time: "8:30 AM - 12:30 PM, Sunday",
                location: "Zoom Call",
              },
              {
                date: "30 Jul 2024",
                title: "Tech Talk",
                time: "8:30 AM - 12:30 PM, Sunday",
                location: "Zoom Call",
              },
            ].map((event, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center">
                  <div className="mr-4">
                    <Calendar className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold">{event.title}</p>
                    <p className="text-sm text-gray-600">
                      {event.date} | {event.time}
                    </p>
                    <p className="text-sm text-gray-600">{event.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded w-full md:w-auto">
              All Events
            </button>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Hear From Our Team & Students
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              "Peershala transformed my learning experience. The interactive community and expert mentorship have been invaluable.",
              "Thanks to Peershala, I've developed skills that have greatly enhanced my academic and professional journey.",
              "The dynamic learning environment at Peershala has empowered me to achieve more than I ever thought possible.",
            ].map((testimonial, i) => (
              <div key={i} className="border rounded-lg p-6">
                <p className="mb-4">{testimonial}</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold">Lorem Ipsum</p>
                    <p className="text-sm text-gray-600">Student</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Peershala</h3>
              <p className="text-sm">Building skills together.</p>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
              <ul className="text-sm">
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Mentors
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Students
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Get Involved
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
              <p className="text-sm flex items-center mb-2">
                <Mail className="mr-2 h-4 w-4" />
                peershalabatch@gmail.com
              </p>
              <p className="text-sm flex items-center">
                <Users className="mr-2 h-4 w-4" />
                Join Our Free Webinars
              </p>
            </div>
            <div className="w-full md:w-1/4">
              <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
              <div className="flex space-x-4">
                {/* Add social media icons here */}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-center">
            <p>&copy; 2024 Peershala. All rights reserved.</p>
            <p>
              <a href="#" className="hover:text-gray-300">
                Terms of Service
              </a>{" "}
              |
              <a href="#" className="hover:text-gray-300">
                Privacy Policy
              </a>{" "}
              |
              <a href="#" className="hover:text-gray-300">
                Cookies
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
