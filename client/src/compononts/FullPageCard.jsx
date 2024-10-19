import React from "react";
import AlbumCard from "./AlbumCard";
import { useNavigate } from "react-router-dom";
import DeleteButton from "./DeleteButton";
import { CloseButton } from "react-bootstrap";
import editIcon from "../assets/images/editIcon.svg";


function FullPageCard(props) {
  const navigate = useNavigate()
  const card_data = {id:props.id}
  //console.log(card_data);id={clickedCardData.imgId}
          //imgSrc={clickedCardData.imgSrc}
          //imgTitle={clickedCardData.imgTitle}
          //imgDes={clickedCardData.imgDes}
  
  return (
    <div className="album-bg ">
      <div className="full-page-card-menu">
        <div className="close-button">
          <CloseButton
            onClick={() => {
              props.cardUnselect();
            }}
          />
        </div>

        <div onClick={()=>{navigate("/edit", { state: card_data});}} className="edit-button">
          <img src={editIcon} />
        </div>

        <div className="delete-button">
          <DeleteButton clicked={props.cardUnselect} id={props.id} />
        </div>
      </div>
      <div className="s-card-center">
        <AlbumCard
          img={props.imgSrc}
          title={props.imgTitle}
          description={props.imgDes}
        />
      </div>
      <div className="full-page-des">
        <h2>{props.imgDes}</h2>
      </div>
    </div>
  );
}

export default FullPageCard;
