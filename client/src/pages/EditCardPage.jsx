import React, { useState } from "react";
import { useLocation, useNavigate} from "react-router-dom";
import Header from "../compononts/Header";
import Footer from "../compononts/Footer";
import FromInput from "../compononts/FromInput";
import TextAreaInput from "../compononts/TextAreaInput";
import axios from "axios";

function EditCardPage() {
  const navigate = useNavigate()
    const location = useLocation();
    const del_card_id = location.state.id
    //history.pushState(null, null, location.pathname);

  const [popUp, setPopUp] = useState(null);
  const [formEditData, setFormEditData] = useState([
    {
      title: "",
      description: "",
    },
  ]);

  function changing(event) {
    const { name, value } = event.target;
    //console.log(value);

    setFormEditData((preValue) => {
      return { ...preValue, [name]: value };
    });
  }
  async function submit(event){
    event.preventDefault()
    try {
      const res = await axios.patch(
        `${import.meta.env.VITE_REACT_APP_API_URL}${del_card_id}`,
        formEditData
      );
      //console.log(res.data.message);

      setPopUp(res.data.message);

      setTimeout(() => {
        setPopUp(null);
        navigate("/album");
      }, 2000);
    } catch (error) {
      console.log(error);
      
    }
  }
  function popupTab() {
    return (
      <div className="pop">
        <h6>{popUp}</h6>
      </div>
    );
  }
  return (
    
    

    <div>

      <Header />
      <div className="form-top">
        {popUp ? popupTab() : null}
        <div>
          <h3>anyone of the field should be filled</h3>
        </div>

        <div className="form-inputs edit-form">
          <form onSubmit={submit}>
            <FromInput
              changing={changing}
              name="title"
              placeholder="Enter new Title"
              value={formEditData.title}
              required={false}
            />

            <TextAreaInput
              changing={changing}
              name="description"
              placeholder="Enter new Description"
              value={formEditData.description}
              required={false}
            />

            <button className="form-button" type="submit">
              Update
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default EditCardPage;
