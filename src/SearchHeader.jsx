import React, { useState } from "react";

export const SearchHeader = ({ search }) => {
    const [valueI, setvalue] = useState("")
  const handleFormSubmit = (event) => {
    event.preventDefault();
    search(valueI);
  };
  const handleChange = (event)=>{
   setvalue(event.target.value);//ınputtan aldığımız deger
  }
  return (
    <div className="searchDiv">
      <form onSubmit={handleFormSubmit}>
        <label>Ne Arıyorsunuz</label>
        <input value={valueI} onChange={handleChange}/>
      </form>
    </div>
  );
};
