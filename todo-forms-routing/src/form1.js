import React from "react";
import { useState } from "react";

function MyForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`name: ${name}`);
    console.log(`email: ${email}`);
    console.log(`password: ${pass}`);
  };

  return (
    <div className="container">
      <div className="container1">
        <h3>Registration Form</h3>
        
        <form onSubmit={handleSubmit} className="form1">
          
          <label>
            Enter your name:
            <input
              type="text"
              value={name}
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
          
          <label>
            Enter your password:
            <input
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              className="form-input"
            />
            </label>
          

          

          <input type="submit" className="form-sub" />
        </form>
      </div>
    </div>
  );
}

export { MyForm };

