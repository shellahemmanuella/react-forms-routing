import React from "react";
import { useState } from "react";

function Form() {
  const [textarea, setTextarea] = useState(
    "Kindly enter your feedback"
  );
  const [email, setEmail] = useState("");
  const [names, setName] = useState("")

  const handleChange = (event) => {
    setTextarea(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`email: ${email}`);
    console.log(`comment: ${textarea}`)
  };

  return (
    <div className="container1">
    <form onSubmit={handleSubmit} className="form1">
      <h3>Form text area</h3>

      <label>
            Enter your Username:
            <input
              type="text"
              value={names}
              onChange={(e) => setName(e.target.value)}
              className="form-input"
            />
          </label> 


      
      <label>
            Enter your email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
            />
          </label> 
      <textarea value={textarea} onChange={handleChange} />
      <br></br>
      <input type="submit" className="form-sub" />
      
    </form>
    </div>
  );
}

export { Form };

