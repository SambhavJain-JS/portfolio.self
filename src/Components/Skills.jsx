import React from "react";
import { FaServer, FaRobot, FaCode, FaMicrochip, FaTools, FaLaptopCode, FaReact } from "react-icons/fa";
// import { FaFlutter } from "react-icons/fa6";
import { SiCplusplus, SiPython, SiArduino, SiGit, SiAutodesk, SiJavascript, SiFlutter  } from "react-icons/si";
import { DiMysql } from "react-icons/di";

import { MdDeveloperBoard } from "react-icons/md";
import SkillCard from "./SkillCard";

export default function Skills() {
  return (
    <section id="skills" className="relative">
      <div className="min-h-screen py-20 px-4 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x mb-6 leading-tight">
              Technical Expertise
            </h1>
            <p className="text-gray-400 text-lg md:text-xl">
              Specialized in Embedded Systems & IoT Development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h2 className="text-3xl font-semibold text-white mb-8 flex items-center gap-4">
                <span className="bg-blue-500/20 p-3 rounded-xl">
                  <FaLaptopCode className="text-blue-400 text-2xl" />
                </span>
                Programming Languages
              </h2>
              <div className="grid grid-cols-2 gap-6">
                <SkillCard icon={<SiCplusplus />} name="C/C++" level="Advanced" />
                <SkillCard icon={<SiPython />} name="Python" level="Intermediate" />
                <SkillCard icon={<FaCode />} name="HTML & CSS" level="Intermediate" />
                <SkillCard icon={<SiJavascript  />} name="Java Script" level="Intermediate" />
                <SkillCard icon={<FaReact />} name="React-JS" level="Intermediate" />
                {/* <SkillCard icon={<SiArduino />} name="Arduino Language" level="Advanced" /> */}
                {/* <SkillCard icon={<SiEspressif />} name="ESP32 Language" level="Advanced" /> */}
                {/* <SkillCard icon={<IoHardwareChip />} name="Embedded C" level="Intermediate" /> */}
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl font-semibold text-white mb-8 flex items-center gap-4">
                <span className="bg-purple-500/20 p-3 rounded-xl">
                  <FaMicrochip className="text-purple-400 text-2xl" />
                </span>
                Core Skills
              </h2>
              <div className="grid grid-cols-2 gap-6">
                <SkillCard icon={<FaRobot />} name="IoT Systems" level="Advanced" />
                <SkillCard icon={<MdDeveloperBoard />} name="Digital Electronics" level="Basic" />
                <SkillCard icon={<FaServer />} name="Embedded Systems" level="Intermidiate" />
                <SkillCard icon={<FaCode />} name="DSA" level="Intermidiate" />
                <SkillCard icon={<DiMysql />} name="MySQL" level="Basic" />
                <SkillCard icon={<SiFlutter   />} name="Flutter" level="Basic" />
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-semibold text-white mb-8 flex items-center gap-4">
              <span className="bg-green-500/20 p-3 rounded-xl">
                <FaTools className="text-green-400 text-2xl" />
              </span>
              Tools & Technologies
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* <SkillCard icon={<IoHardwareChip />} name="RFID Sensors" level="Advanced" /> */}
              {/* <SkillCard icon={<FaMicrochip />} name="HC-05 Module" level="Advanced" /> */}
              {/* <SkillCard icon={<FaTools />} name="L298 Driver" level="Advanced" /> */}
              {/* <SkillCard icon={<MdDeveloperBoard />} name="I2C LCD" level="Advanced" /> */}
              {/* <SkillCard icon={<FaCode />} name="NeoPixel LEDs" level="Advanced" /> */}

              <SkillCard icon={<SiArduino />} name="Arduino" level="Advanced" />
              <SkillCard icon={<FaMicrochip  />} name="ESP-32" level="Advanced" />
              <SkillCard icon={<SiArduino />} name="Arduino IoT Cloud" level="Intermediate" />
              <SkillCard icon={<SiGit />} name="Git/GitHub" level="Intermediate" />
              <SkillCard icon={<SiAutodesk />} name="Fusion360" level="Intermediate" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
