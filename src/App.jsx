import { CharacterList } from "./components/CharacterList";
import { Footer } from "./components/Footer";
import './App.css';
import './components/Footer.css';

function App() {
  return <div className="bg-dark text-white">
    <h1 className="title text-info text-center display-1 py-4 ">Rick and Morty</h1>
    <CharacterList/>

    <Footer />
  </div>;
}

export default App;
