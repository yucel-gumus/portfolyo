import React from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../constants";
import Image from "next/image";

const HireMe = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.25, ease: "easeInOut" }} // Daha hızlı animasyon
      whileHover={{ scale: 1.05 }} // Hover'da biraz daha büyük olmasını sağladık
      className="fixed left-4 bottom-4 lg:flex hidden justify-center items-center"
    >
      <div className="w-24 h-24 relative">
        <div className="border-t-4 border-l-4 rounded-full border-t-primary border-primary motion-safe:animate-spin absolute inset-3"></div>
        <a
          href={`mailto:${personalInfo.email}`}
          className="flex justify-center items-center absolute left-4 top-4 w-16 h-16"
          target="_blank"
        >
          <Image
            src="/assets/mailsend.png"
            width={44}
            height={44}
            alt="Mail Yolla"
            priority
            loading="eager"
          />
        </a>
      </div>
    </motion.div>
  );
};

export default HireMe;
