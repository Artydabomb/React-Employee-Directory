import './App.css';
import Title from './components/Title';
import Body from "./components/Body";
import './components/Title.css';

function App() {
  return (
    <>
      <div className="Title">
        <Title />
      </div>
      <div className="Body">
        <Body />
      </div>
    </>

  );
}

export default App;
