import "@google/model-viewer";
import "../App.css";

type Model3DProps = {
  src: string;
  alt: string;
  exposure: number;
  cameraControls: boolean;
  ar?: boolean;
  arModes?: string;
  modelref?: any;
};

function Model3D({
  src,
  alt,
  exposure,
  cameraControls,
  ar,
  arModes,
  modelref
}: Model3DProps) {
  return (
    <model-viewer
      class="model-viewer"
      src={src}
      alt={alt}
      exposure={exposure}
      camera-controls={cameraControls}
      ar={ar ?? false}
      ar-modes={arModes ?? "webxr"}
      ref={(ref: any) => {
        modelref && (modelref.current = ref);
      }}
    ></model-viewer>
  );
}

export default Model3D;
