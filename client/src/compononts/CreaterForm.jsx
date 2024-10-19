import React, { useState } from 'react';
import axios from "axios";
import "../assets/App.css";
import FromInput from './FromInput';
import TextAreaInput from './TextAreaInput';

function CreaterForm() {
    const [ popUp, setPopUp ] = useState(null)
    const [formData, setFormData] = useState({
        "imageUrl":"",
        "title":"",
        "description":""
    })
    function changing(event){
      const {name, value} = event.target
      //console.log(value);
      

      setFormData((preValue)=>{
      return {...preValue,
        [name]:value
       }

      })
    }
    async function submit(event){
      event.preventDefault()
      try {
        //console.log(formData);
        
        const response = await axios.post(
          import.meta.env.VITE_REACT_APP_API_URL,
          formData
        );
        //console.log(response.data);
        const feedBack = await response.data
        setPopUp(feedBack.message)
        setTimeout(() => {

            setPopUp(null)
            setFormData({
              imageUrl: "",
              title: "",
              description: "",
            });
      
        }, 2000);
      

      } catch (error) {
        console.log(`This is the  ----------------${error}`);
      }
    }
    function popupTab(){
    return (
      <div className="pop">
        <h6>{popUp}</h6>
      </div>
    )
    }

  return (
    <div className="form-top">
      {popUp ? popupTab() : null}
      <div>
        <h3>To Create Your Own Album</h3>
      </div>

      <div className="form-inputs">
        <form onSubmit={submit}>
          <FromInput
            changing={changing}
            name="imageUrl"
            placeholder="Image Url"
            value={formData.imageUrl}
            required={true}
          />

          <FromInput
            changing={changing}
            name="title"
            placeholder="Enter Title"
            value={formData.title}
            required={true}
          />

          <TextAreaInput
            changing={changing}
            name="description"
            placeholder="Enter Your Description"
            value={formData.description}
            required={true}
          />
          <button className="form-button" type="submit">
            Create
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreaterForm