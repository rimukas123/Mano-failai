import { createContext, useContext } from 'react';

const ColorPaletteContext = createContext();
const ColorPaletteDispatchContext = createContext();

export const useColorPalette = () => useContext(ColorPaletteContext);
export const useColorPaletteDispatch = () => useContext(ColorPaletteDispatchContext);

export const ColorPaletteProvider = ({ children, value, dispatch }) => (
  <ColorPaletteContext.Provider value={value}>
    <ColorPaletteDispatchContext.Provider value={dispatch}>
      {children}
    </ColorPaletteDispatchContext.Provider>
  </ColorPaletteContext.Provider>
);
