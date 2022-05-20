import { motion } from "framer-motion";
import React from "react";
import Backdrop from "./Backdrop";
import AnimateCSS from "./animate.module.css"

const dropIn = {
  hidden: {
    x: "-100vw",
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    x: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    x: "-100vw",
    opacity: 0,
  },
};

const Modal = ({ handleClose, text }) => {
  return (
    // <div>
    //   <motion.button
    //     whileHover={{ scale: 1.1 }}
    //     whileTap={{ scale: 0.9 }}
    //     className="save-button"
    //     onClick={() => null}
    //   >
    //     Launch Modal
    //   </motion.button>
    // </div>

    <Backdrop onClick={handleClose}>
      <motion.div
        drag
        onClick={(e) => e.stopPropagation()}
        className={`${AnimateCSS.modal} ${AnimateCSS.orangegradient}`}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <p>{text}</p>
        <button onClick={handleClose}>Close</button>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
