import GreetingCard from "./GreetingCard";
import './App.css'

function App() {
  return (
    <div id="wwe">
      <h1 style={{ textAlign: "center" }}> Greeting Cards </h1>

      <GreetingCard
        name="Tunde Muiz"
        message="Have a great day!"
        color="lightgreen"
      />

      <GreetingCard
        name="Arike Ojo"
        message="Keep shining bright!"
        color="lightblue"
      />

      <GreetingCard
        name="Samuel"
        message="You're doing amazing!"
        
      />
    </div>
  );
}

export default App;
