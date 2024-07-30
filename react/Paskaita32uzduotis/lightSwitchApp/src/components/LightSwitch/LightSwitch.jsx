// LightSwitch.jsx
import React from "react";
import { useReducer } from "react";

// Iniciali būklė
const initialState = { isOn: false };

// Reducer funkcija
function reducer(state, action) {
  switch (action.type) {
    case 'TURN_ON':
      return { isOn: true };
    case 'TURN_OFF':
      return { isOn: false };
    case 'TOGGLE':
      return { isOn: !state.isOn };
    default:
      throw new Error();
  }
}

const LightSwitch = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div
      style={{
        width: '200px',
        height: '100px',
        backgroundColor: state.isOn ? 'yellow' : 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: state.isOn ? 'black' : 'white',
        borderRadius: '8px',
        margin: '20px auto',
        textAlign: 'center'
      }}
    >
      <h1>{state.isOn ? 'Šviesa įjungta' : 'Šviesa išjungta'}</h1>
      <div>
        <button onClick={() => dispatch({ type: 'TURN_ON' })}>Įjungti</button>
        <button onClick={() => dispatch({ type: 'TURN_OFF' })}>Išjungti</button>
        <button onClick={() => dispatch({ type: 'TOGGLE' })}>Perjungti</button>
      </div>
    </div>
  );
}

export default LightSwitch;
