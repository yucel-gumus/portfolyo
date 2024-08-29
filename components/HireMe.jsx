import React from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../constants";
import Image from "next/image";

const HireMe = () => {
  return (
    <motion.div
      initial={{ opacity: 2, y: -40 }}
      animate={{ opacity: 2, y: 0 }}
      transition={{ duration: 2.5, ease: "easeOut" }}
      whileHover={{ scale:1}}
      className="fixed left-4 bottom-4 lg:flex hidden justify-center items-center"
    >
      <div className="w-24 h-24 relative">
        <div className="border-t-4 border-l-4 rounded-full border-t-primary border-primary motion-safe:animate-spin absolute inset-3"></div>
        <a
          href={`mailto:${personalInfo.email}`}
          className="flex justify-center items-center absolute left-4 top-4  w-16 h-16 "
          target="_blank"
        >
           <Image src="/assets/mailsend.png" width={44} height={44} alt="Mail Yolla"></Image>
        </a>
      </div>
    </motion.div>
  );
};

export default HireMe;