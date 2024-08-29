import React, { useState, useCallback } from "react";
import Tilt from "react-parallax-tilt";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import truncateText from "@/utils/truncate";
import GithubLogo from "./../public/assets/icons/github.svg";
import RocketLogo from "./../public/assets/icons/rocket.svg";

const PROJECTS_PER_PAGE = 3;
const ANIMATION_DURATION = 0.3;

const projectVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: ANIMATION_DURATION,
      ease: "easeOut"
    }
  },
  exit: { 
    opacity: 0, 
    y: -50,
    transition: {
      duration: ANIMATION_DURATION,
      ease: "easeIn"
    }
  }
};

const ProjectCard = React.memo(function ProjectCard({
  name,
  description,
  tags,
  image,
  source_code_link,
  deployed_link,
}) {
  const CHAR_LIMIT = 380;

  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      className="dark:bg-bgSecondaryDark bg-bgSecondaryLight p-5 rounded-2xl sm:w-[370px] w-full h-fit min-h-[590px] shadow-sm shadow-primary"
    >
      <div className="relative w-full h-[230px]">
        <div className="w-full h-full object-cover rounded-2xl relative">
          <Image
            src={image}
            alt="project_image"
            fill={true}
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 flex justify-start m-3 card-img_hover">
          <div
            onClick={() => window.open(deployed_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <RocketLogo className="w-1/2 h-1/2 mr-[2px] z-10" />
          </div>
        </div>
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <GithubLogo className="w-2/3 h-2/3 z-10" />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="dark:text-ctnPrimaryDark text-ctnPrimaryLight font-bold text-[24px]">
          {name}
        </h3>
        <p className="mt-2 dark:text-ctnSecondaryDark text-ctnSecondaryLight text-[14px]">
          {truncateText(description, CHAR_LIMIT)}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p
            key={`${name}-${tag.name}`}
            className={`text-[14px] ${tag.color}`}
          >
            #{tag.name}
          </p>
        ))}
      </div>
    </Tilt>
  );
});

function Works() {
  const [visibleProjects, setVisibleProjects] = useState(PROJECTS_PER_PAGE);

  const showMoreProjects = useCallback(() => {
    setVisibleProjects(prev => Math.min(prev + PROJECTS_PER_PAGE, projects.length));
  }, []);

  return (
    <section className="xl:my-36 md:mx-36 p-8" id="projects">
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <br />
        <br />
        <h2 className="sectionHeadText">Kişisel Projelerim</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 dark:text-ctnPrimaryDark text-ctnSecondaryLight text-[17px] max-w-3xl leading-[30px]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          Yazılım geliştirme tutkumla hobi olarak çeşitli projeler geliştirdim
          ve github sayfamda paylaştım. Şimdi bu projeleri web sitemde sergiliyorum.
          Her proje, öğrendiğim yeni teknikleri uygulayarak kendimi
          geliştirdiğim bir deneyimi temsil ediyor. Projelerimi inceleyerek
          ilham alabilir canlı olarak görebilir ve github sayfamda detaylarına göz atabilirsiniz.
        </motion.p>
      </div>

      <div className="md:mt-10 mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 justify-items-center">
        <AnimatePresence>
          {projects.slice(0, visibleProjects).map((project, index) => (
            <motion.div
              key={project.name}
              variants={projectVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              custom={index}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {visibleProjects < projects.length && (
        <motion.div 
          className="mt-10 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: ANIMATION_DURATION }}
        >
          <button
            onClick={showMoreProjects}
            className="px-6 py-3 bg-primary text-white rounded-full hover:bg-secondary transition duration-300"
          >
            Devamını Göster
          </button>
        </motion.div>
      )}
    </section>
  );
}

export default Works;