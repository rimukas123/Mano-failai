import { useColorPalette } from '../context/colorPaletteContext';
import ColorItem from './ColorItem';

const ColorList = () => {
  const colors = useColorPalette();

  return (
    <div>
      {colors.map(color => (
        <ColorItem key={color.id} color={color} />
      ))}
    </div>
  );
};

export default ColorList;
