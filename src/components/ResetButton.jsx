// import { h } from 'preact';
import './ResetButton.css'
const ResetButton = ({ onReset }) => (
  <button className='ResetButton' onClick={onReset}>Reset Game</button>
);

export default ResetButton;
