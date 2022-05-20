import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Modal from "./Modal";
import AnimateCSS from "./animate.module.css"

const Animate = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const open = () => setModalOpen(true);
  const close = () => setModalOpen(false);

  return (
    <div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={AnimateCSS.savebutton}
        onClick={() => (modalOpen ? close() : open())}
      >
        Launch Modal
      </motion.button>
      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
      </AnimatePresence>
    </div>
  );
};

export default Animate;
