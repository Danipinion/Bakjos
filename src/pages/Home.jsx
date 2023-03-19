import { Link } from "react-router-dom";
import React from "react";
import Typewriter from "typewriter-effect";

import bakso from "../assets/bakso.webp";
import isi from "../assets/isi.webp";
import cuka from "../assets/cuka.webp";
import sambal from "../assets/sambal.webp";
import text1 from "../assets/text1.webp";
import text2 from "../assets/text2.webp";
import text3 from "../assets/text3.webp";

const Home = () => {
  return (
    <div className="sm:h-screen sm:pt-16 pt-20 px-5 flex flex-col sm:flex-row sm:justify-evenly justify-between sm:gap-0 gap-10 bg-yellow-100 overflow-hidden">
      <div className="left  flex flex-col justify-center gap-5 flex-wrap font-poppins">
        <div className="text">
          <Typewriter
            options={{
              autoStart: true,
              loop: false,
              strings: ["Selamat datang di Baksojos"],
            }}
          />
        </div>
        <h1 className="sm:text-3xl text-xl font-bold">
          Bakso adalah makanan tradisional <br />
          yang terbuat dari daging sapi Pilihan.
        </h1>
        <Link className="bg-yellow-300 w-32 text-center h-12 p-3 rounded-md z-10 hover:w-40 hover:h-44 transition-all group hover:text-center">
          Beli Bakso
          <img src={isi} alt="isi" className="scale-0 group-hover:scale-100" />
        </Link>
      </div>
      <div className="right relative w-80 bottom-0 pt-96 self-center sm:self-end ">
        <img
          src={bakso}
          alt="bakso"
          className="absolute sm:w-80 w-48 bottom-60 sm:bottom-36 sm:right-0 right-20"
          data-aos="zoom-in"
        />
        <img
          src={cuka}
          alt="cuka"
          className="absolute w-20 sm:bottom-32  bottom-60"
          data-aos="fade-up"
        />
        <img
          src={sambal}
          alt="sambal"
          className="absolute w-20 sm:bottom-32  bottom-56 left-40"
          data-aos="fade-up"
          data-aos-delay="100"
        />
        <img
          src={text1}
          alt="text1"
          className="absolute w-20 bottom-40  left-60 hidden sm:block"
          data-aos="fade-left"
          data-aos-delay="500"
        />
        <img
          src={text2}
          alt="text2"
          className="absolute w-20 sm:bottom-80 sm:left-60 bottom-72 left-52"
          data-aos="fade-left"
          data-aos-delay="550"
        />
        <img
          src={text3}
          alt="text3"
          className="absolute w-20 bottom-80"
          data-aos="fade-down"
          data-aos-delay="600"
        />
      </div>
    </div>
  );
};

export default Home;
