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

      <motion.div
        variants={fadeIn("up", "spring")}
        initial="hidden"
        whileInView={!loading && "show"}
        viewport={{ once: true, amount: 0.25 }}
        className="w-full md:h-[800px] sm:h-[300px] h-[200px] absolute md:top-[170px] sm:top-[280px] top-[350px]"
      >
        <ComputersCanvas isMobile={isMobile} />
      </motion.div>
      <div className="absolute xs:bottom-2 bottom-12 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[45px] rounded-full border-8 border-secondary flex justify-center items-start animate-bounce">
            <Image
              src="/assets/scroll-down.svg"
              alt="Mail Yolla"
              width={35}
              height={45}
            />
          </div>
        </a>
      </div>
    </section>
  );
}

export default Hero;
