import Background from "./Background";
import "./App.css";

function App() {
  return (
    <Background>
      <div className="w-screen h-screen relative">
        <div className="w-20 h-20 border border-solid border-black"></div>
        <div className="relative left-20 w-20 h-20 border border-solid border-black"></div>
        <div className="relative left-40 w-20 h-20 border border-solid border-black"></div>
        <div className="relative left-60 w-20 h-20 border border-solid border-black"></div>
      </div>
    </Background>
  );
}

export default App;
