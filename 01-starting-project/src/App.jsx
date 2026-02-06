import Header from "./components/Header.jsx";
import JSXimg from "./assets/jsx-ui.png";
import stateImg from "./assets/state-mgmt.png";
import propsImg from "./assets/config.png";
import componentsImg from "./assets/components.png";
import CoreConcepts from "./components/Components.jsx"




function App() {
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
      </main>
    </div>
  );
}

export default App;
