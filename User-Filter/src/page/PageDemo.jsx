import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Modal from "../components/Modal";
import Form from "../components/form";
import FetchApi from "../components/FetchApi";

const PageDemo = () => {
  const [name, setName] = useState("");
  const [Open, setOpen] = useState(false);
  return (
    <div>
      {/* <h2>Reuseable Components</h2>
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <Button text="Open Model" onClick={() => setOpen(true)} />
      <Modal isOpen={Open} onClose={() => setOpen(false)}>
        <h3>Hello {name}</h3>
      </Modal>
      <Form /> */}
      <FetchApi/>
    </div>
  );
};

export default PageDemo;
