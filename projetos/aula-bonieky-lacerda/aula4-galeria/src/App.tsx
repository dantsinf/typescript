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
          {loading &&
            <C.ScreenWarning>
              <div className="emoji">🖐</div>
              <div>Carregando...</div>
            </C.ScreenWarning>
          }

          {!loading && photos.length>0 &&
            <C.PhotoList>
              {photos.map((item, index)=>(
                <div>{item.name}</div>
              ))}
            </C.PhotoList>

          }

          {!loading && photos.length === 0 &&
            <C.ScreenWarning>
            <div className="emoji">☹️</div>
            <div>Não há fotos cadastradas</div>
          </C.ScreenWarning>
          }

        </C.Area>
      </C.Container>
    </div>
  );
}

export default App;
