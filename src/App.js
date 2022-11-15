import logo from './logo.svg';
import './App.css';
import Add from './components/todo/Add';
import List from './components/todo/List';
import Filter from './components/todo/Filter';

function App() {
  return (
    <div className="App">
      <Add/>
      <List/>
      <Filter/>
    </div>
  );
}

export default App;
