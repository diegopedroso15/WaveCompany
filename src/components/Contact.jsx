import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {};

  const handleSubmit = (e) => {};

  return (
    <div className="xl:mt-12 xl:flex-row xl:md-10 flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 rounded-2xl p-8"
      >
        <p className={styles.sectionSubText}>Entrar em contato</p>
        <h3 className={styles.sectionHeadText}>Contato</h3>

        <p className="text-white-100 text-[16px] pl-1 tracking-wider mb-5">
          Esqueça mensagens perdidas em caixas de spam, ao contrário de nossos
          concorrentes, valorizamos seu tempo e a sua empresa. Clique no botão
          abaixo e converse diretamente com um dos nossos consultores
          especializados. Lembre-se, o orçamento é gratuito!
        </p>
        <a href="https://wa.me/5516994580303?text=Olá%20Wave%20Software%20Company,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20prestados." target="_blank">
        <button className="py-3 px-8 outline-none w-fit font-bold text-white shadow-md shadow-primary rounded-xl bg-green-400">
          {loading ? "Contatando..." : "Fale conosco"}
        </button>
        </a>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
