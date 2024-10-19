import React from 'react'
import {Card} from "react-bootstrap";

function GallaryMainContent() {
  return (
    <div className="bg-div">
      <div>
        <div>
          <div className="intro">
            <h2>
              Upload pics and descriptions along with your personal identidy
              which has been beyond your imagination.
            </h2>
          </div>
        </div>
      </div>
      <Card className="main-page-div">
        <Card.Img
          className="main-page-pic"
          variant="top"
          src="https://t4.ftcdn.net/jpg/06/41/42/69/360_F_641426931_sJkCqdIkiI5GPtbBQ92S7xIJk9akRo33.jpg"
        />
        <Card.Body>
          
              <h6 className='img-intro'>
                Here you can upload a high-quality images for the best possible
                results to create a lasting memory with our high-quality photo
                albums.
              </h6>
          
        </Card.Body>
      </Card>
      <a className="form-button btn" href='/creater'>Create Album</a>
    </div>
  );
}

export default GallaryMainContent