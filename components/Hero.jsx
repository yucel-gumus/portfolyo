import { motion } from "framer-motion";
import { ComputersCanvas } from "./canvas";
import { fadeIn } from "@/utils/motion";
import Image from "next/image";

function Hero({ loading, isMobile }) {
  return (
    <section
      className={`relative w-full h-[100svh] md:max-h-[800px] max-h-[600px] mx-auto flex flex-col`}
    >
      <div
        className={`absolute inset-0 top-[120px] dark:text-ctnSpecialDark max-w-7xl mx-auto paddingX flex flex-row items-start gap-5`}
      >
        <p className="text-lg md:text-xl lg:text-2xl italic">
          Dijital dünyada tarihi bir iz bırakmak için çalışıyorum.
        </p>
      </div>

      {/* 3D Animasyonlu Canvas */}
      <motion.div
        variants={fadeIn("up", "spring")}
        initial="hidden"
        whileInView={!loading && "show"}
        viewport={{ once: true, amount: 0.25 }}
        className="w-full md:h-[800px] sm:h-[300px] h-[200px] absolute md:top-[170px] sm:top-[280px] top-[350px]"
        transition={{ duration: 0.75, ease: "easeInOut" }} // Animasyon hızını arttırdık
      >
        <ComputersCanvas isMobile={isMobile} />
      </motion.div>

      {/* Scroll Down Indicator */}
      <div className="absolute xs:bottom-2 bottom-12 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[45px] rounded-full border-8 border-secondary flex justify-center items-start animate-bounce">
            <Image
              src="/assets/scroll-down.svg"
              alt="Scroll Down"
              width={35}
              height={45}
              priority
              loading="eager"
              sizes="(max-width: 768px) 50px, (max-width: 1200px) 35px, 35px"
            />
          </div>
        </a>
      </div>
    </section>
  );
}

export default Hero;
