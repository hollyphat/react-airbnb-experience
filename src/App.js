import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Hero /> */}
      <Card
        img="katie-zaferes.png"
        rating="5.0"
        reviewCount={6.0}
        country="Austria"
        title="Life lessons with Katie Zaferes"
        price={136}
       />
      
    </div>
  );
}

export default App;
