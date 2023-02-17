import { CharacterList } from "./components/CharacterList";
import './App.css'

function App() {
  return <div className="bg-dark text-white">
    <h1 className="title text-info text-center display-1 py-4 ">Rick and Morty</h1>
    <CharacterList/>
  </div>;
}

export default App;
