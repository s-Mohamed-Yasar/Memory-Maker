import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../compononts/Header";
import Footer from "../compononts/Footer";
import "../assets/App.css";
import AlbumCard from "../compononts/AlbumCard";
import FullPageCard from "../compononts/FullPageCard";

function AlbumPage() {
  //console.log(import.meta.env.VITE_REACT_APP_API_URL);
  
  const [clickedImg, setClickedImg] = useState(false);
  const [clickedCardData, setClickedCardData] = useState([
    {
      imgId: "",
      imgSrc: "",
      imgTitle: "",
      imgDes: "",
    },
  ]);
  const [albumData, setAlbumData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get("/api/data/");

      setAlbumData(response.data);

      //return response.data
    }
    getData();
  }, [albumData]);
  function CardSelected(imgUrl, imgTitle, imgDescription, imgId) {
    //console.log(`${imgUrl} ${imgTitle} ${imgDescription} is clicked`);
    setClickedCardData(() => {
      return {
        imgId: imgId,
        imgSrc: imgUrl,
        imgTitle: imgTitle,
        imgDes: imgDescription,
      };
    });
    setClickedImg(true);
  }
  function UnSelected() {
    setClickedImg(false);
  }

  return (
    <div>
      <Header />
      {clickedImg ? (
        <FullPageCard
          key={clickedCardData.imgId}
          id={clickedCardData.imgId}
          imgSrc={clickedCardData.imgSrc}
          imgTitle={clickedCardData.imgTitle}
          imgDes={clickedCardData.imgDes}
          cardUnselect={UnSelected}
        />
      ) : (
        <div className="album-bg">
          {albumData.map((singlePic) => {
            return (
              <AlbumCard
                key={singlePic._id}
                id={singlePic._id}
                img={singlePic.imageUrl}
                title={singlePic.title}
                description={singlePic.description}
                toClick={CardSelected}
              ></AlbumCard>
            );
          })}
        </div>
      )}

      <Footer />
    </div>
  );
}

export default AlbumPage;
