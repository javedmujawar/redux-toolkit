import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { increment,decrement } from './redux/counter';

function App() {
  const {count} = useSelector(state=> state.counter) 
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>The Count Is: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;
