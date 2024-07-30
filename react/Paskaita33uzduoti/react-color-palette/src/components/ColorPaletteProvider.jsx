import { useReducer } from 'react';
import colorPaletteReducer from '../reducers/colorPaletteReducer';
import { ColorPaletteProvider as Provider } from '../context/colorPaletteContext';

const initialState = [
  { id: 1, name: 'Mėlynas', hex: '#0000ff' }
];

const ColorPaletteProvider = ({ children }) => {
  const [state, dispatch] = useReducer(colorPaletteReducer, initialState);

  return (
    <Provider value={state} dispatch={dispatch}>
      {children}
    </Provider>
  );
};

export default ColorPaletteProvider;
