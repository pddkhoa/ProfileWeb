import React from "react";
import { useState } from "react";
import ModalProject from "../modalProject/modalProject";
import "./cardProduct.scss";

function CardProduct(props) {
  const { data, ava } = props;

  const [showModal, setShowModal] = useState(false);
  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <div>
      <div className="card-container" onClick={() => setShowModal(true)}>
        <div className="card">
          <div className="img-content">
            <img src={data.ava} />
          </div>
          <div className="content">
            <span className="heading">{data.name}</span>
          </div>
        </div>
      </div>
      <ModalProject
        handleClose={handleClose}
        dataProject={data}
        show={showModal}
      />
    </div>
  );
}
export default CardProduct;
