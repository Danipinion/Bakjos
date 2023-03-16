import { motion } from "framer-motion";
import isi from "../assets/isi.png";

const About = () => {
  return (
    <div className="h-screen pt-16 px-5 bg-yellow-100">
      <motion.div className="right fixed w-full h-full bg">
        <motion.img
          src={isi}
          alt="isi"
          className="absolute w-16 bottom-40 left-10 sm:left-40 blur-sm sm:blur-none"
          initial={{ opacity: 0 }}
          animate={{ y: [-1000, 0], opacity: 1, rotate: 360 }}
          transition={{ type: "spring", duration: 2 }}
        />
        <motion.img
          src={isi}
          alt="isi"
          className="absolute w-16 sm:top-10 top-16 sm:right-60 right-10 blur-sm sm:blur-none"
          initial={{ opacity: 0 }}
          animate={{ y: [-1000, 0], opacity: 1, rotate: 360 }}
          transition={{ type: "spring", duration: 2 }}
        />
      </motion.div>
      <div className="bg-yellow-400 h-full p-10 font-poppins flex flex-col justify-center items-center">
        <h1 className="text-3xl text-center bg-center z-10">
          ABOUT{" "}
          <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-yellow-600 relative inline-block">
            <span class="relative text-white">baksojos</span>
          </span>
        </h1>
        <p className=" mt-5 sm:w-1/2 w-full sm:text-justify text-center z-10">
          Baksojos adalah sebuah bisnis kuliner yang bergerak di bidang makanan
          tradisional berupa bakso. Baksojos didirikan pada tahun 2010 oleh
          Bapak Joko dan Ibu Siti dengan tujuan untuk memberikan pilihan kuliner
          yang nikmat dan bergizi bagi masyarakat.Baksojos memperhatikan
          kualitas produknya dengan seksama. Bahan baku yang digunakan diambil
          dari bahan berkualitas tinggi sehingga menghasilkan bakso yang lezat
          dan bergizi. Baksojos juga mengutamakan kebersihan dan keamanan dalam
          memproduksi makanan untuk menjaga kesehatan pelanggan.
        </p>
      </div>
    </div>
  );
};

export default About;
