import Image from "next/image";
import { motion } from "framer-motion";

import { fadeInDown, fadeInUp, staggerTextContainer } from "../variants";

const About = ({ aboutData }) => {
  const { title, subtitle, text, boyImg } = aboutData;

  return (
    <section className="mb-[60px] lg:mb-[160px]">
      <div className="container mx-auto">
        <motion.div
          variants={staggerTextContainer}
          initial="initial"
          whileInView={"animate"}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row gap-x-[20px] items-center"
        >
          <motion.div variants={fadeInDown} className="flex-1 mt-[74px]">
            <h3 className="h3">{title}</h3>
            <p className="lead mb-[70px]">{subtitle}</p>
            <div className="bg-accent/10 border-l-[10px] border-accent max-w-[570px] h-[160px] flex items-center justify-center mb-8 lg:mb-0">
              <p className="text-[20px] leading-normal lg:text-[24px] lg:leading-[32px] font-medium max-w-[320px] lg:max-w-[460px]">
                {text}
              </p>
            </div>
          </motion.div>
          <motion.div variants={fadeInUp} className="flex-1">
            <Image src={boyImg} width={575} height={480} alt="Boy" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
