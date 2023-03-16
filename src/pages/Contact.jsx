import React, { useState } from "react";
import isi from "../assets/isi.png";
import Wave from "react-wavify";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
const Contact = () => {
  const control = useAnimation();
  return (
    <>
      <div className="h-screen pt-16 relative bg-yellow-100 overflow-hidden">
        <div className="px-5 py-5 relative z-20">
          <h1 className=" text-center text-xl font-bold font-poppins">
            PESAN BAKSOJOS
          </h1>
          <form className="flex flex-col items-center justify-center gap-5 w-full sm:w-1/2 mx-auto p-5 rounded-lg glass font-lobster">
            <input
              type="text"
              className="w-full sm:w-1/2 p-2 rounded-md "
              placeholder="Masukkan Nama"
            />
            <textarea
              type="text"
              className="w-full sm:w-1/2 p-2 rounded-md"
              placeholder="Masukkan Alamat"
            />
            <Link
              className="bg-yellow-300 w-32 text-center h-12 p-3 rounded-md  hover:w-40 hover:h-44 transition-all group hover:text-center font-lobster"
              onClick={() => {
                control.start({
                  y: 1000,
                  transition: { duration: 2, repeat: 1 },
                });
              }}
            >
              Pesan Bakso
              <img
                src={isi}
                alt="isi"
                className="scale-0 group-hover:scale-100"
              />
            </Link>
          </form>
        </div>
        <div className="absolute top-0 h-full overflow-hidden left-1/2 -translate-x-1/2">
          <motion.img
            src={isi}
            alt="isi"
            initial={{ y: -150 }}
            animate={control}
          />
        </div>
        <Wave
          className="absolute bottom-0"
          fill="#f79902"
          paused={false}
          options={{
            height: 20,
            amplitude: 20,
            speed: 0.15,
            points: 3,
          }}
        />
      </div>
    </>
  );
};

export default Contact;
