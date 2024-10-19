import React from "react";
import deleteIcon from "../assets/images/deleteIcon.svg";
import axios from "axios";

function DeleteButton(props) {
  async function Delete() {
    try {
      const res = await axios.delete(`/api/data/${props.id}`);
      console.log(res);
      await props.clicked();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div onClick={Delete}>
      <img src={deleteIcon} />
    </div>
  );
}

export default DeleteButton;
