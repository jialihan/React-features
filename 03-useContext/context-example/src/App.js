import logo from './logo.svg';
import './App.css';
import { Authcomponent } from './component/AuthComponent';
import { AuthComponent_consumer } from './component/AuthComponent_consumer';

function App() {
  return (
    <div className="App">
      <h1>React Context Example</h1>
      <Authcomponent />
      <AuthComponent_consumer />
    </div>
  );
}

export default App;
