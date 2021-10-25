import { useState, useEffect } from 'react'; 
import './App.css';
import * as C from './App.styles';
import * as Photos from './services/photos';


function App() {

  const [loading, setLoading] = useState(false);

  return (
    <div className="App">
      <C.Container>
        <C.Area>
          <C.Header>Galeria de Fotos</C.Header>
          {/* Área de upload */}
          {/* Lista de fotos */}
        </C.Area>
      </C.Container>
    </div>
  );
}

export default App;
