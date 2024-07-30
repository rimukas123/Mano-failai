import { useState } from 'react';
import { useColorPaletteDispatch } from '../context/colorPaletteContext';

const AddColorForm = () => {
  const [name, setName] = useState('');
  const [hex, setHex] = useState('');
  const dispatch = useColorPaletteDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_COLOR', payload: { id: Date.now(), name, hex } });
    setName('');
    setHex('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Spalvos pavadinimas"
      />
      <input 
        type="text" 
        value={hex} 
        onChange={(e) => setHex(e.target.value)} 
        placeholder="Šešioliktainis kodas"
      />
      <button type="submit">Pridėti spalvą</button>
    </form>
  );
};

export default AddColorForm;
