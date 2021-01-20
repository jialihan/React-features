import logo from './logo.svg';
import './App.css';
import InlineCSSComponent from './component/inlineComponent';
import Normalcsscomponent from './component/NormalCSSComponent';
import Styledcsscomponent from './component/StyledCSSComponent';

function App() {

  return (
    <div>
      <InlineCSSComponent />
      <Normalcsscomponent />
      <Styledcsscomponent />
    </div>
  );
}

export default App;
