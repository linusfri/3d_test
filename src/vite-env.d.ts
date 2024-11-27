/// <reference types="vite/client" />
import { ModelViewerElement } from "@google/model-viewer";

type ModelViewerElementProps = Partial<ModelViewerElement> & Partial<{
  src: string;
  children: any;
  id: any;
  ref: any;
  class: string;
  alt: string;
  ar: boolean;
}>;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": ModelViewerElementProps;
    }
  }
}
