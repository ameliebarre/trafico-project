import Image from "next/image";
import { motion } from "framer-motion";

import Accordion from "../components/Accordion";
import {
  fadeInLeft,
  fadeInRight,
  staggerAccordionContainer,
  staggerTextContainer,
} from "../variants";

const Faq = ({ faqData }) => {
  const { pretitle, title, boyImg, accordions } = faqData;
  return (
    <section className="min-h-[1150px] lg:bg-faq bg-no-repeat bg-right-top lg:pt-40 lg:pb-24 mb-[60px] lg:mb-[160px]">
      <div className="container mx-auto">
        <motion.div
          variants={staggerTextContainer}
          initial="initial"
          whileInView={"animate"}
          viewport={{ once: true }}
          className="relative flex flex-col lg:flex-row justify-center lg:justify-start items-center pt-8 lg:pt-16 lg:pb-32"
        >
          <motion.div variants={fadeInRight} className="lg:max-w-[45%]">
            <h3 className="h3">{pretitle}</h3>
            <h2 className="h2 mb-6 lg:mb-12">{title}</h2>
          </motion.div>
          <motion.div
            variants={fadeInLeft}
            className="lg:absolute lg:-right-16 lg:-top-16 mb-12"
          >
            <Image src={boyImg} width={708} height={498} alt="Boy" />
          </motion.div>
        </motion.div>
        <motion.div
          variants={staggerAccordionContainer}
          initial="initial"
          whileInView={"animate"}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-x-[20px] gap-y-[10px]"
        >
          {accordions.map((accordion, idx) => {
            return <Accordion accordion={accordion} key={idx} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Faq;
