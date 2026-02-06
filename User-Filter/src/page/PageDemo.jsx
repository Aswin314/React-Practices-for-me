import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Modal from "../components/Modal";

const PageDemo = () => {
  const [name, setName] = useState("");
  const [Open, setOpen] = useState(false);
  return (
    <div>
      <h2>Reuseable Components</h2>
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <Button text="Open Model" onClick={() => setOpen(true)} />
      <Modal isOpen={Open} onClose={() => setOpen(false)}>
        <h3>hello {name}</h3>
      </Modal>
    </div>
  );
};

export default PageDemo;
