import { useEffect, useState } from "react";
import { useParams } from "react-router";

function MultiChildForm() {
  const [formData, setFormData] = useState({
    name: "Default Name",
    email: "abc@xyz.com",
    message: "This is a message",
  });

  let { name, message } = useParams();

  useEffect(() => {
    let newState = {
      name: name,
      email: formData.email,
      message: message,
    };
    setFormData(newState);
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(
    //   `Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`
    // );

    console.log(
      "{",
      formData.name,
      ", ",
      formData.email,
      ", ",
      formData.message,
      "}"
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      {name}, {message}
      <br />
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

/*
function MultiChildForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function submitForm(event) {
    console.log("Submiting form");
    console.log("{", name, ",", email, ",", password, "}");
    event.preventDefault();
  }

  return (
    <form onSubmit={submitForm}>
      <h3>Login Form</h3>
      <label htmlFor="name">Name: </label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.value);
        }}
      />
      <br />
      <label htmlFor="email">E-Mail: </label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.value);
        }}
      />
      <br />
      <label htmlFor="password">Password: </label>
      <input
        id="password"
        type="text"
        value={password}
        onChange={(e) => {
          setPassword(e.value);
        }}
      />
      <br />
      <input type="submit" value="Submit Form" />
    </form>
  );
}
*/
export default MultiChildForm;
