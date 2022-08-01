import { useState } from "react";
import { axios } from "axios";

const Signup = ({ handleToken }) => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [newsLetter, setNewsLetter] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          email: email,
          username: userName,
          password: password,
          newsletter: newsLetter,
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <h1>S'inscrire</h1>

      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="username"
        value={userName}
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <input
        type="checkbox"
        checked={newsLetter}
        onChange={() => {
          setNewsLetter(!newsLetter);
        }}
      />
      <input className="submit-input" type="submit" value="S'inscrire" />
    </form>
  );
};

export default Signup;
