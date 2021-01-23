import './App.css';
import AnimationModal from './components/AnimationModal/AnimationModal';
import TransitionComponent from './components/SimpleTransitionComponentExample/TransitionComponent.jsx'
import List from './components/List/List'
import TransitionGroupList from './components/List/TransitionGroupList';
function App() {
  return (
    <div className="App">
      <TransitionComponent />
      <AnimationModal />
      <h1>Animating Lists</h1>
      <TransitionGroupList />
    </div>
  );
}

export default App;
