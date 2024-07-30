const colorPaletteReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_COLOR':
        return [...state, action.payload];
      case 'REMOVE_COLOR':
        return state.filter(color => color.id !== action.payload.id);
      case 'EDIT_COLOR':
        return state.map(color => 
          color.id === action.payload.id ? { ...color, ...action.payload } : color
        );
      default:
        throw new Error(`Unknown action: ${action.type}`);
    }
  };
  
  export default colorPaletteReducer;
  