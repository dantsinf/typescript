import { useState, useEffect } from 'react'; 
import './App.css';
import * as C from './App.styles';
import * as Photos from './services/photos';
import {Photo} from './types/Photos'


function App() {

  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(()=>{
    const getPhotos = async()=>{
      setLoading(true);
      //let photos = await Photos.getAll();
      setPhotos(await Photos.getAll())
      setLoading(false);
    }
    getPhotos();
  },[])

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
