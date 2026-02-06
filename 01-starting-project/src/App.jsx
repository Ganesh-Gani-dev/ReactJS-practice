import Header from "./components/Header.jsx";
import JSXimg from "./assets/jsx-ui.png";
import stateImg from "./assets/state-mgmt.png";
import propsImg from "./assets/config.png";
import componentsImg from "./assets/components.png";
import CoreConcepts from "./components/Components.jsx"
import TabButton from "./components/TabButton .jsx"
import { useState } from "react";
import {EXAMPLES} from "./data.js"



function App() {
  const[selectedTopic,setSelectedTopic] = useState("components");
  function handleSelect(selectedButton)
  {
    setSelectedTopic(selectedButton)
    console.log(`${selectedButton} has been clicked`); 
  }
  return (
    <div>
      <Header> </Header>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts
              title="Components"
              description="The core UI building block"
              image={componentsImg}
            />
            <CoreConcepts
              title="JSX"
              description="Return dynamic HTMLish code to define the actual markup"
              image={JSXimg}
            />
            <CoreConcepts
              title="Props"
              description="Make Components configurable"
              image={propsImg}
            />
            <CoreConcepts
              title="State"
              description="React-managed data which,when changed causes the component to re-render"
              image={stateImg}
            />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === "components"} onSelect={()=>{
              //console.log('on select function is under execution')
              handleSelect("components")
              }}>Components</TabButton>
            <TabButton isSelected={selectedTopic === "jsx"} onSelect={()=>{handleSelect("jsx")}}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === "props"} onSelect={()=>handleSelect("props")}>Props</TabButton>
            <TabButton isSelected={selectedTopic === "state"} onSelect={()=>handleSelect("state")}>State</TabButton>
          </menu>
           <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <br />
            <code>
              {EXAMPLES[selectedTopic].code}
            </code>
           </div>
          
        </section>
      </main>
    </div>
  );
}

export default App;
