import Header from "./components/Header.jsx";
import { useState } from "react";
import Results from "./components/Results.jsx"
import UserInput from "./components/UserInput.jsx";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue, 
      };
    });
  }

  return (
    <>
      <Header></Header>
      <UserInput userInput = {userInput} onChange={handleChange} />
      <Results input = {userInput}></Results>
    </>
  );
}

export default App;
