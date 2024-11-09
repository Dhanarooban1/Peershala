import React, { useState } from "react";
import { Calendar, Mail, Users } from "lucide-react";
import { Instagram, Linkedin, Facebook, ChevronLeft, ChevronRight, MailIcon, UsersIcon, Menu, X, Twitter } from "lucide-react";

import mentor1 from "../assets/Photos/Mentors/mentor1.jpeg"
import mentor2 from "../assets/Photos/Mentors/mentor2.jpeg";
import mentor3 from "../assets/Photos/Mentors/mentor3.jpeg";
import mentor4 from "../assets/Photos/Mentors/mentor4.jpeg";
import Logo from "../assets/Logo.png";

import Page3 from "./SlideshowPages/Page3";
import Page1 from "./SlideshowPages/Page1";
import Page2 from "./SlideshowPages/Page2";

import Image1 from "../assets/Photos/Images/Image1.jpeg";
import Image2 from "../assets/Photos/Images/Image2.jpeg";
import Image3 from "../assets/Photos/Images/Image3.jpeg";
import Image4 from "../assets/Photos/Images/Image4.jpeg";
import Image5 from "../assets/Photos/Images/Image5.jpeg";
import Image6 from "../assets/Photos/Images/Image6.jpeg";
import { GiFastBackwardButton } from "react-icons/gi";
import { GiFastForwardButton } from "react-icons/gi";
import '../App.css'

const GI = [Image1, Image2, Image3, Image4, Image5, Image6];
const mentors = [mentor1, mentor2, mentor3, mentor4];

const Home = () => {
  const menuItems = ['HOME', 'ABOUT US', 'EVENTS', 'MENTORS', 'STUDENTS', 'GET INVOLVED'];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [page, setPage] = useState(1);
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
  
  const stats = [
    { value: "99%", label: "Members" },
    { value: "100+", label: "Workshops" },
    { value: "15K+", label: "Beneficiaries" },
    { value: "15K+", label: "Volunteers" }
  ];


  const navigationLinks = [
    "HOME", "ABOUT US", "EVENTS", "MENTORS", "STUDENTS", "GET INVLOVED"
  ];
  const featuredEvent = {
    image: '/path/to/tech-talk-image.jpg',
    title: 'Tech Talk',
    date: '03 Jul 2024',
    time: '8:30 AM - 12:30 PM, Sunday',
    location: 'Zoom Call'
  };

  const upcomingEvents = [
    {
      day: '03',
      month: 'Jul',
      year: '2024',
      title: 'Tech Talk',
      time: '8:30 AM - 12:30 PM, Sunday',
      location: 'Zoom Call'
    },
    {
      day: '24',
      month: 'Aug',
      year: '2024',
      title: 'Tech Talk',
      time: '8:30 AM - 12:30 PM, Sunday',
      location: 'Zoom Call'
    },
    {
      day: '30',
      month: 'Jul',
      year: '2024',
      title: 'Tech Talk',
      time: '8:30 AM - 12:30 PM, Sunday',
      location: 'Zoom Call'
    }
  ];


  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-black shadow">
        <nav className="bg-white">

          <div className="bg-slate-900 py-3 text-white">
            <div className="container mx-auto px-4">
              <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
                <span className="text-sm flex items-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <span>peershalabatch@gmail.com</span>
                </span>
                <div className="flex space-x-4">
                  <Instagram className="w-5 h-5 hover:text-gray-300 cursor-pointer" />
                  <Linkedin className="w-5 h-5 hover:text-gray-300 cursor-pointer" />
                  <Facebook className="w-5 h-5 hover:text-gray-300 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>

          {/* Main navigation */}
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-3">

              <img
                src={Logo}
                alt="Logo"
                className="site-logo w-40 sm:w-60 h-8 sm:h-12 border border-gray-300"
              />

              {/* Mobile menu button */}
              <button
                className="lg:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>

              {/* Desktop menu */}
              <div className="hidden lg:flex items-center space-x-8">
                {menuItems.map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-black font-bold hover:text-black-500 relative group"
                  >
                    {item}
                    <span className="absolute left-0 bottom-[-4px] w-full h-0.5 bg-blue-500 transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                  </a>
                ))}
                <button className="bg-[#C45C27] text-white px-6 sm:px-10 py-2 hover:bg-[#B54D18] transition-colors">
                  REGISTER
                </button>
              </div>
            </div>

            {/* Mobile menu */}
            <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
              <div className="py-2 space-y-2">
                {menuItems.map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block px-4 py-2 text-black font-bold hover:bg-gray-100"
                  >
                    {item}
                  </a>
                ))}
                <div className="px-4 py-2">
                  <button className="w-full bg-[#C45C27] text-white px-6 py-2 hover:bg-[#B54D18] transition-colors">
                    REGISTER
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main >

        
      <div className="relative bg-red-100">
          <button
            onClick={backward}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-3xl text-white hover:text-black  z-10"
          >
            <GiFastBackwardButton />
          </button>
          <button
            onClick={forward}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-3xl text-white hover:text-"
          >
            <GiFastForwardButton />
          </button>
          {page === 1 ? <Page1 /> : page === 2 ? <Page2 /> : <Page3 />}
        </div>


        <section className="min-h-screen flex flex-col md:flex-row py-20 px-4 md:px-16">
          {/* Left Content Section */}
          <div className="flex flex-col w-full md:w-[60%] space-y-8">
            {/* Header Section */}
            <div className="space-y-6">
              <h1 className="text-lg font-medium text-orange-500">
                - ABOUT US
              </h1>
              <h2 className="text-4xl font-bold text-navy-900">
                Our Aspirations & Goals
              </h2>
              <h3 className="text-2xl font-semibold text-blue-600">
                Peershala: Building skills together.
              </h3>
              <p className="text-gray-700 text-lg max-w-2xl">
                Peershala empowers students through dynamic, peer-driven learning and cutting-edge tools for academic and future success.
              </p>
            </div>
            {/* Mission & Vision Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="p-6 rounded-lg border border-gray-200">
                <h3 className="text-2xl font-semibold mb-4">
                  Mission
                </h3>
                <p className="text-gray-600">
                  Peershala's mission is to empower students with skills, foster a dynamic learning community, and provide mentorship for academic and professional success.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-gray-200">
                <h3 className="text-2xl font-semibold mb-4">
                  Vision
                </h3>
                <p className="text-gray-600">
                  Peershala envisions limitless education, fostering lifelong learning and growth to develop adaptable leaders through mentorship and knowledge sharing.
                </p>
              </div>
            </div>
          </div>
          {/* Right Image Section */}
          <div className="max-w-2xl mx-auto p-4 md:mt-0 mt-12 hidden md:block">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Left column */}
              <div className="space-y-6">
                <div className="rounded-3xl overflow-hidden h-96">
                  <img
                    src={Image4}
                    alt="Student walking with backpack"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-yellow-300 h-20 rounded-tl-lg "
                  style={{
                    borderBottomLeftRadius: '100px'
                  }} />
              </div>
              {/* Right column */}
              <div className="space-y-6 pt-16">
                <div className="bg-blue-300 h-20 rounded-tl-lg "
                  style={{
                    borderTopRightRadius: '100px'
                  }} />
                <div className="rounded-3xl overflow-hidden h-96">
                  <img
                    src={Image1}
                    alt="Students studying"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="relative py-12 md:py-24 bg-orange-200">
          {/* Background Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-orange-200 to-orange-300 opacity-90" />

          {/* Content Container */}
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
            {/* Header */}
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-gray-600 text-base md:text-lg font-medium mb-3 md:mb-4">
                - MILESTONE
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-navy-900">
                Achievements
              </h3>
            </div>

            {/* Stats Container */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl py-8 md:py-12 px-4 md:px-8 shadow-lg">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-900 mb-2">
                      {stat.value}
                    </p>
                    <p className="text-blue-600 text-base md:text-lg">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto py-16 px-4">
          {/* Header Section */}
          <div className="flex justify-between items-start mb-12">
            <div className="space-y-4">
              <h2 className="text-orange-500 font-medium">- GALLERY</h2>
              <h3 className="text-4xl font-bold text-navy-900">Our Gallery</h3>
            </div>

            <div className="max-w-xl">
              <p className="text-gray-600 text-lg">
                Browse through our gallery to see highlights from our webinars, seminars, and mentorship programs, showcasing the positive impact we've made.
              </p>
            </div>
          </div>

          {/* Gallery Navigation */}
          <div className="flex justify-end gap-2 mb-8">
            <button className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
              <ChevronLeft size={24} />
            </button>
            <button className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-4 gap-6 mb-12">
            {GI?.map((image, index) => (
              <div key={index} className="aspect-square rounded-3xl overflow-hidden">
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="flex justify-center">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              View More
            </button>
          </div>
        </section>


        <section className="mb-16">
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="mb-16">
              <div className="flex items-center justify-center mb-8">
                <span className="text-gray-600 uppercase text-sm">- TEAM</span>
              </div>

              <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
                Meet Our Team
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {mentors.map((member, index) => (
                  <div key={index} className="group relative bg-white rounded-2xl p-4 hover:shadow-lg transition-shadow duration-300">
                    <div className="relative">
                      <div className="aspect-square rounded-xl overflow-hidden mb-4">
                        <img
                          src={mentor1}
                          alt={`${member}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                        <span className="text-gray-400 text-xl">+</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="font-semibold text-gray-900">{member.name}</h3>
                      <p className="text-sm text-gray-600">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <button className="px-8 py-2.5 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors duration-300">
                  View More
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto py-16 px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-orange-500 font-medium mb-4">- EVENTS</h2>
            <h3 className="text-4xl font-bold text-navy-900">Upcoming Bootcamps</h3>
          </div>
          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Featured Event Card */}
            <div className="col-span-1 md:col-span-3 relative rounded-3xl overflow-hidden">
              <img
                src={featuredEvent.image}
                alt="Featured event"
                className="w-full h-full object-cover"
              />
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0 p-8 flex flex-col justify-end text-white">
                {/* Date Tag */}
                <div className="absolute top-6 right-6 bg-yellow-400 text-navy-900 rounded-lg py-2 px-4 text-sm font-medium">
                  <div>03</div>
                  <div>Jul</div>
                  <div>2024</div>
                </div>
                <h4 className="text-2xl font-bold mb-2">Tech Talk</h4>
                <div className="space-y-1 text-sm text-gray-200">
                  <p>8:30 AM - 12:30 PM, Sunday</p>
                  <p>Zoom Call</p>
                </div>
              </div>
            </div>
            {/* Upcoming Events List */}
            <div className="col-span-1 md:col-span-2 bg-orange-50 rounded-3xl p-6">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 py-4 border-b last:border-b-0 border-orange-200"
                >
                  {/* Date */}
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{event.day}</div>
                    <div className="text-sm text-gray-600">{event.month}</div>
                    <div className="text-sm text-gray-600">{event.year}</div>
                  </div>
                  {/* Event Details */}
                  <div className="flex-1">
                    <h5 className="font-semibold text-navy-900 mb-1">{event.title}</h5>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p>{event.time}</p>
                      <p>{event.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* All Events Button */}
          <div className="flex justify-center mt-12">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              All Events
            </button>
          </div>
        </section>

        <section className="mb-16 bg-[#FAEBD7] py-16">
          <h2 className="text-center text-xl md:text-2xl text-[#D16B00] font-semibold mb-2">
            - TESTIMONIALS -
          </h2>
          <h2 className="text-center text-2xl md:text-3xl font-bold text-[#1D2D50] mb-10">
            Hear From Our Team & Students
          </h2>
          <div className="grid md:grid-cols-3 gap-6 px-4 md:px-0 max-w-5xl mx-auto">
            {[
              {
                testimonial:
                  "Peershala transformed my learning experience. The interactive community and expert mentorship have been invaluable.",
                name: "Lorem Ipsum",
                role: "Student",
                imageUrl: "/path-to-image1.jpg",
              },
              {
                testimonial:
                  "Thanks to Peershala, I've developed skills that have greatly enhanced my academic and professional journey.",
                name: "Lorem Ipsum",
                role: "Student",
                imageUrl: "/path-to-image2.jpg",
              },
              {
                testimonial:
                  "The dynamic learning environment at Peershala has empowered me to achieve more than I ever thought possible.",
                name: "Lorem Ipsum",
                role: "Student",
                imageUrl: "/path-to-image3.jpg",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center"
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-16 h-16 rounded-full mb-4"
                />
                <p className="text-gray-600 italic mb-4">{`"${item.testimonial}"`}</p>
                <p className="text-[#FF5733] text-xl mb-2">★★★★★</p>
                <p className="font-semibold text-[#1D2D50]">{item.name}</p>
                <p className="text-gray-500 text-sm">{item.role}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-[#1D2D50] text-white">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-6 md:mb-0">
              <img
                src={Logo}
                alt="Peershala"
            className="site-logo w-40 sm:w-60 h-8 sm:h-12 "
              />
            </div>

            {/* Navigation Links - Now Horizontal */}
            <div className="mb-6 md:mb-0">
              <nav>
                <ul className="flex flex-wrap justify-center space-x-6">
                  {navigationLinks.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm hover:text-gray-300 transition-colors whitespace-nowrap"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Social Links */}
            <div className="text-center md:text-left">
              <h3 className="text-sm mb-4">Get Social Links</h3>
              <div className="flex items-center space-x-4">
                <a href="#" className="hover:text-gray-300 transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-700 pt-4">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm">
              <div className="mb-2 md:mb-0">
                © 2024 Peershala. All rights reserved.
              </div>
              <div className="flex items-center space-x-4">
                <a href="#" className="hover:text-gray-300 transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Home;
