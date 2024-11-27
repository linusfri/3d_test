import "@google/model-viewer";
import "./App.css";
import Model3D from "./components/Model3D.tsx";
import { useEffect, useState } from "react";

function App() {
  const [models, setModels] = useState<any>([])

  // WORK IN PROGRESS
  // async function fetchModels() {
  //   const response = await fetch('http://localhost:8000/models')
  //   const models = await response.json()

  //   const files3D = models.map((model: any) => {
  //     const blob = new Blob([model.content], { type: 'application/octet-stream' });
  //     const url = URL.createObjectURL(blob);
  //     return url;
  //   });

  //   setModels(files3D)
  // }
  // useEffect(() => {
  //   fetchModels()
  // }, [])

  // const models3D = models.map((model: any, index: number) => {
  //   return (
  //     <Model3D
  //       key={index}
  //       src={model}
  //       alt="A rock"
  //       exposure={0.2}
  //       cameraControls={true}
  //     />
  //   )
  // });
  return (
    <>
      <div className="fuck-it">
        <Model3D
          src={'../3dmodels/Avocado/glTF/Avocado.gltf'}
          alt="Avocado"
          exposure={0.2}
          cameraControls={true}
        />

        <Model3D
          src={'../3dmodels/AntiqueCamera/glTF/AntiqueCamera.gltf'}
          alt="Avocado"
          exposure={0.2}
          cameraControls={true}
        />
        
        <Model3D
          src={'../3dmodels/Fox/glTF/Fox.gltf'}
          alt="Avocado"
          exposure={0.2}
          cameraControls={true}
        />

        <Model3D
          src={'../3dmodels/ABeautifulGame/glTF/ABeautifulGame.gltf'}
          alt="Avocado"
          exposure={0.2}
          cameraControls={true}
        />

        <Model3D
          src={'../3dmodels/BoomBox/glTF/BoomBox.gltf'}
          alt="Avocado"
          exposure={0.2}
          cameraControls={true}
        />
        
        <Model3D
          src={'../3dmodels/GlassVaseFlowers/glTF/GlassVaseFlowers.gltf'}
          alt="Avocado"
          exposure={0.2}
          cameraControls={true}
        />
      </div>
    </>
  );
}

export default App;
