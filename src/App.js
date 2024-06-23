import HomePage from "./pages/HomePage";
import data from '../src/data.json'

function App() {
  return (
    <div className="App">
      <HomePage data={data} />
    </div>
  );
}

export default App;
