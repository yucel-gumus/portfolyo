import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "@/utils/motion";

const techCategories = [
  { name: "Languages", techList: technologies.languages },
  { name: "Frameworks", techList: technologies.frameworks },
  { name: "Libraries", techList: technologies.libraries },
  { name: "Databases", techList: technologies.databases },
  { name: "Tools", techList: technologies.tools },
  { name: "Environments", techList: technologies.environments }
];

function Tech() {
  return (
    <section className="w-full h-fit p-8 mt-20" id="skills">
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="text-center mx-auto"
      >
        <br />
        <br />
        <h2 className="sectionHeadText">Yeteneklerim</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-4 dark:text-ctnSecondaryDark text-ctnSecondaryLight dark:bg-bgSpecialDark bg-bgSecondaryLight text-[17px] md:w-fit md:min-w-[60%] w-full h-full leading-[30px] flex md:flex-row flex-col gap-4 p-8 md:px-16 mx-auto rounded-lg justify-between backdrop-filter backdrop-blur-xl bg-opacity-10 shadow-sm shadow-primary"
      >
        {/* Tech Categories Names */}
        <motion.div
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col justify-between h-full gap-5"
        >
          {techCategories.map((category, index) => (
            <h3
              key={index}
              className="h-[50px] md:flex items-center hidden dark:text-ctnPrimaryDark text-ctnPrimaryLight"
            >
              {category.name}
            </h3>
          ))}
        </motion.div>

        <div className="w-[2px] h-[400px] dark:bg-ctnSecondaryDark bg-ctnSecondaryLight rounded-lg md:flex hidden mx-8" />

        {/* Tech Icons */}
        <div className="md:w-[80%] w-full pl-2 h-full flex flex-col gap-8">
          {techCategories.map((category, index) => (
            <div className="w-full h-fit flex gap-2 md:flex-row flex-col" key={index}>
              <h3 className="md:hidden">{category.name}</h3>
              <motion.div
                className="w-full flex flex-row flex-wrap gap-2"
                variants={fadeIn("right", "spring", 0.75)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
              >
                {category.techList.map((tech) => (
                  <div
                    key={tech.name}
                    className="w-[40px] h-[40px] relative flex items-center group cursor-pointer"
                  >
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      fill={true}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
                    />
                    <div className="opacity-0 w-fit min-w-[80px] bg-bgPrimaryLight dark:bg-bgPrimaryDark text-ctnPrimaryLight dark:text-ctnPrimaryDark text-center text-xs rounded-lg py-2 absolute z-10 group-hover:opacity-100 px-3 -top-3/4 -left-1/3 pointer-events-none">
                      {tech.name}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default SectionWrapper(Tech, "tech");
