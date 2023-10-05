"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-[#FC8AFE] text-3xl md:text-6xl bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hi, I &apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Kar Rakib",
                1500,
                "Web Developer",
                1500,
                "Full Stack",
                1500,

              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I'm MERN (MongoDB, Express, React, NodeJS) stack developers,
          </p>
          <div>
            <Link
              href="/contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 text-white hover:bg-slate-200 hover:text-black"
            >
              Hire Me
            </Link>
            <a href="https://docs.google.com/document/d/1D55hLnnhG-_w_mSkv8vLHD7DA2wqeRVx/edit?usp=sharing&ouid=109567756374762240746&rtpof=true&sd=true"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
              target='_blank' rel="noreferrer">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 BTN py-2">
                Download CV
              </span>

            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="https://i.ibb.co/s2Kw1ph/1.png"
              alt="hero image"
              className="absolute rounded-full w-[245px] h-[245px] lg:w-[390px] lg:h-[390px] transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
