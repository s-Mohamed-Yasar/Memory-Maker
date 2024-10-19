import React from "react";
import "../assets/App.css";

function AlbumCard(props) {
  
  return (
    <div onClick={(event)=>{
      
      props.toClick(event.target.src, props.title, props.description, props.id);
      
    }} className="album-card">
      <div className="card-img ">
        <img src={props.img}></img>
      </div>
      <div className="card-img-title">
        <div id="al-ti">
          <h6>{props.title}</h6>
        </div>
      </div>
    </div>
  );
}

export default AlbumCard;
