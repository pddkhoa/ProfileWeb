import React from "react";
import { useState } from "react";
import ModalProject from "../modalProject/modalProject";
import "./cardProduct.scss";

import avaPro12 from "../../static/project1/2.png";
import avaPro123 from "../../static/project1/3.png";
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
            <span className="heading">NAME</span>
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
