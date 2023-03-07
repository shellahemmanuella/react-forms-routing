import React from "react";
import { useState } from "react";

function MyForm1() {
  const [myCar, setMyCar] = useState("");

  const handleChange = (event) => {
    setMyCar(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`name: ${myCar}`);
  };
  return (
    <div className="container1">
      <h3>Select drop down Form</h3>
      <p>Kindly select your car</p>
     
    <form onSubmit={handleSubmit} className="form1">
      <select value={myCar} onChange={handleChange} className="form-input">
        <option value="Ford">Ford</option>
        <option value="BMW">BMW</option>
        <option value="Prado">Prado</option>
        <option value="Mercedes">Mercedes</option>
        <option value="Mini">Mini</option>
        <option value="Nissan">Nissan</option>
        <option value="Toyota">Toyota</option>
      </select>

      <input type="submit" className="form-sub" />
    </form>
    </div>
  );
}

export { MyForm1 };

