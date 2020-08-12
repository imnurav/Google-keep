import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Createnote from "./Createnote";
import Note from "./Note";
const App = () => {
  const [addItem, setaddItem] = useState([]);
  const addnote = (note) => {
    // alert("i am clicked");
    setaddItem((oldData) => {
      return [...oldData, note];
    });
  };
  const onDelete = (id) => {
    setaddItem((prevData) => {
      return prevData.filter((currentdata, indx) => {
        return indx !== id;
      });
      
    });
  };

  return (
    <>
      <Header />
      <Createnote passNote={addnote} />
      {addItem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
        );
      })}
      <Footer />
    </>
  );
};
export default App;
