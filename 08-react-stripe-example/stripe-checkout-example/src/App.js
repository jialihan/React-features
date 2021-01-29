import logo from './logo.svg';
import './App.css';
import StripeCheckoutButton from './components/StripeCheckoutButton';

function App() {
  const price = 99.99;
  return (
    <div className="App">
      <h1> your total is ${price}</h1>
      <StripeCheckoutButton price={price} />
      <p className="warning-message">
        *Please use test credit card for payments*
        <br />
        4242424242424242 |	Visa |	Any 3 digits|	Any future date
      </p>
    </div>
  );
}

export default App;
