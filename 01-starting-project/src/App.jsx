import reactImg from "./assets/react-core-concepts.png";
import JSXimg from "./assets/jsx-ui.png";
import stateImg from "./assets/state-mgmt.png";
import propsImg from "./assets/config.png";
import componentsImg from "./assets/components.png";

const reactDescriptions = ["Fundamental", "Core", "Crucial"];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescriptions[getRandomInt(2)]} React concepts you will need for
        almost any app you are going to build!
      </p>
    </header>
  );
}

function CoreConcepts(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

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
