import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { Change, DEC, INS } from './action/action';
function App() {
  const newState = useSelector((state) => state.changeNumber)
  const dispatch = useDispatch()
  console.log(typeof newState)
  return (
    <div className="App">
      <h1>redux with increment,decrement</h1>
      <button style={{ background: "blue", color: "white", textAlign: "center", padding: "0", width: "40px", height: "30px", }} onClick={() => dispatch(DEC())}>-</button>
      <input type='text' style={{ textAlign: "center", width: "150px", height: "30px", }} value={newState} onChange={(event) => { return dispatch(Change(event)) }}></input>
      <button style={{ background: "red", color: "white", textAlign: "center", padding: "0", width: "40px", height: "30px", }} onClick={() => dispatch(INS())}>+</button>
    </div>
  );
}
export default App;
