import ColorPaletteProvider from './components/ColorPaletteProvider';
import ColorList from './components/ColorList';
import AddColorForm from './components/AddColorForm';

const App = () => (
  <ColorPaletteProvider>
    <h1>Spalvų paletė</h1>
    <AddColorForm />
    <ColorList />
  </ColorPaletteProvider>
);

export default App;
