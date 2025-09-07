"use client";
import React, { useState } from 'react';
import Modal from './modal';
import styles from "./page.module.css";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className={styles.main}>
      <button onClick={() => setShowModal(true)}>Show Modal</button>
      <Modal title="Modal Dialog" open={showModal} onClose={() => setShowModal(false)}>
        One morning, when Gregor Samsa woke from troubled dreams, he found
        himself transformed in his bed into a horrible vermin. He lay on his
        armour-like back, and if he lifted his head a little he could see his
        brown belly, slightly domed and divided by arches into stiff sections.
      </Modal>
    </section>
  );
};

export default App;