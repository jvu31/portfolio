import { FaEnvelope, FaDownload, FaBook } from "react-icons/fa";
import { about, education } from "./data";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="page">
      {/* Header */}
      <div className="flex py-20">
        <div className="space-y-4 w-1/3 text-left">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.25 }}
          >
            Hi, I'm Jimmy Vu
          </motion.h1>
          <h2 className="bg-gradient-to-r from-red-600 to-indigo-600 bg-clip-text text-transparent">
            Machine Learning Engineer & Fullstack Developer
          </h2>
          <div>
            I build intelligent applications that solve real-world problems
            using cutting edge ML techniques and robust fullstack architectures
          </div>
          <div className="flex space-x-4">
            <button className="bg-purple hover:bg-indigo-700 text-white py-2 px-4 rounded flex items-center space-x-2 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
              <span>Contact Me</span>
              <FaEnvelope />
            </button>
            <button className="bg-purple hover:bg-indigo-700 text-white py-2 px-4 rounded flex items-center space-x-2 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
              <span>Resume</span>
              <FaDownload />
            </button>
          </div>
        </div>
        <div className="w-2/3 flex justify-center">
          <img
            src="/csmajor.png"
            alt="Profile picture of Jimmy Vu"
            className="rounded-full size-72 shadow-2xl border border-white"
          />
        </div>
      </div>
      <div className="flex flex-row space-x-4">
        {/* What I Do Section */}
        <div className="section justify-center space-y-4 w-2/3">
          <h2 className="text-center">What I Do</h2>
          <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 pt-4">
            {about.map((about) => (
              <div
                className="card bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition space-y-4 text-left"
                key={about.id}
              >
                <div className="bg-indigo-200 p-3 rounded-full">
                  <about.icon className="text-purple" size={16} />
                </div>
                <h3>{about.name}</h3>
                <div>{about.description}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Education */}
        <div className="section justify-center space-y-4 w-1/3">
          <h2>Education</h2>
          <div className="space-y-4">
            {education.map((education) => (
              <div className="space-y-2" key={education.id}>
                <div className="flex justify-between items-center">
                  <h3>{education.school}</h3>
                  <img
                    src={education.image}
                    alt={`${education.school} logo`}
                    className="align-middle h-8"
                  />
                </div>
                <div className="flex justify-between">
                  <h4>{education.level}</h4>
                  <h4 className="italic">{education.year}</h4>
                </div>
                <div className="flex space-x-2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
