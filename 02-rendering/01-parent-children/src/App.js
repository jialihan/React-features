
import './App.css';
import { Child } from './components/Child/Child';
import { Container } from './components/Container/Container';

function App() {
  return (
    <div className="App">
      <Container>
        <Child />
      </Container>
    </div>
  );
}

export default App;
