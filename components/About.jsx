import Link from "next/link";
import { motion } from "framer-motion";

import { socials } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import EmailIcon from "./../public/assets/icons/email.svg";

function About() {
  return (
    <section
      className="md:my-36 md:w-2/3 w-full h-full xl:ml-36 lg:ml-12 p-8 md:mt-[40svh] xl:mt-[150px]"
      id="about"
    >
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
       <br></br>
       <br></br>
        <h2 className={"sectionHeadText text-white"}>Ön Yazı</h2>
      </motion.div>
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-4 dark:text-ctnPrimaryDark text-gray-300 text-[17px] w-full leading-[30px] flex flex-col justify-between gap-6"
      >
        <div>
          Düzce Üniversitesi Bilgisayar Mühendisliği bölümünden mezun olduktan
          sonra, Turkuvaz Medya Grubu ve Interdata (Pavo Group) gibi firmalarda
          yazılım geliştirme alanında deneyim kazandım. Web ve mobil uygulama
          geliştirme, API entegrasyonu ve coğrafi bilgi sistemleri (CBS) üzerine
          çalıştım. Özellikle, ASP.NET Core , React.js ve Javascript gibi
          teknolojilerde yetkinim. Hobi olarak Python ile kişisel projeler
          yaparak kendimi geliştirmeye devam ediyorum.
          <br />
          Yazılım geliştirme tutkumla hobi olarak çeşitli projeler geliştirdim
          ve GitHub&apos;da paylaştım. Şimdi bu projeleri web sitemde
          sergiliyorum. Her proje, öğrendiğim yeni teknikleri uygulayarak
          kendimi geliştirdiğim bir deneyimi temsil ediyor. Projelerimi
          inceleyerek ilham alabilir ve GitHub&apos;daki detaylarına göz
          atabilirsiniz.
        </div>

        <div className="w-fit break-words">
          <Link
            href="mailto:yucelgumus61@yahoo.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary w-full transition-all duration-100 ease-in flex md:items-center gap-2 md:flex-row flex-wrap word-break hover:-translate-y-2"
          >
            <EmailIcon className="w-[30px] h-[30px]" />
            yucelgumus61@yahoo.com
          </Link>
        </div>
        <div className="flex gap-5 items-center">
          {socials.map((social) => (
            <Link
              href={social.link}
              target="_blank"
              key={social.id}
              className="w-8 h-8 hover:-translate-y-2 ease-in transition-all duration-100 cursor-pointer"
            >
              {social.icon}
            </Link>
          ))}
        </div>
        <Link
          href="document/Yucel_GUMUS_CV.pdf"
          target="_blank"
          rel="noreferrer"
          className="w-fit"
        >
          <div className="btn w-fit bg-tertiary text-white px-7 py-2 rounded-md overflow-hidden relative cursor-pointer">
            <div className="original bg-primary text-white px-7 py-2">
              Resume
            </div>
            <div className="letters">
              <span>R</span>
              <span>e</span>
              <span>s</span>
              <span>u</span>
              <span>m</span>
              <span>e</span>
            </div>
          </div>
        </Link>
      </motion.div>
    </section>
  );
}

export default About;
