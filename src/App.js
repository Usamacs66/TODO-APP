import logo from './logo.svg';
import './App.css';
import Add from './components/todo/Add';
import List from './components/todo/List';
import Filter from './components/todo/Filter';

function App() {
  return (
    <div className="App page-content page-container">
        <div className="padding">
            <div className="row h-100 justify-content-center align-items-center">
                <div className="col-md-6">
                    <div className="card px-3">
                        <div className="card-body">
                          <h4 className="card-title">Todo list</h4>
                          <Add/>
                          <Filter/>
                          <List/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
