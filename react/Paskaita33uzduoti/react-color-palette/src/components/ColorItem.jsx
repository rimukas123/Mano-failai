import { useColorPaletteDispatch } from '../context/colorPaletteContext';
import { useState } from 'react';

const ColorItem = ({ color }) => {
  const dispatch = useColorPaletteDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(color.name);
  const [hex, setHex] = useState(color.hex);

  const handleEdit = () => {
    dispatch({ type: 'EDIT_COLOR', payload: { id: color.id, name, hex } });
    setIsEditing(false);
  };

  const handleDelete = () => {
    dispatch({ type: 'REMOVE_COLOR', payload: { id: color.id } });
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
          <input 
            type="text" 
            value={hex} 
            onChange={(e) => setHex(e.target.value)} 
          />
          <button onClick={handleEdit}>Išsaugoti</button>
        </>
      ) : (
        <>
          <span>{color.name} - {color.hex}</span>
          <button onClick={() => setIsEditing(true)}>Redaguoti</button>
          <button onClick={handleDelete}>Pašalinti</button>
        </>
      )}
    </div>
  );
};

export default ColorItem;
