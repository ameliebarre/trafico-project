import Image from "next/image";
import { motion } from "framer-motion";

import {
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  staggerTextContainer,
} from "../variants";

const How = ({ howData, aboutData }) => {
  // const { title, subtitle, girlImg } = howData;
  const { title, subtitle, girlImg } = howData;

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
          <motion.div variants={fadeInRight} className="flex-1">
            <Image src={girlImg} width={575} height={480} alt="Boy" />
          </motion.div>
          <motion.div variants={fadeInLeft} className="flex-1 flex justify-end">
            <div className="max-w-[455px]">
              <h3 className="h3">{title}</h3>
              <p className="lead mb-[70px]">{subtitle}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default How;
