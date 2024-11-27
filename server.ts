// @deno-types="npm:@types/express@5.0"
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(cors());

// WORK IN PROGRESS
app.get('/models', async (req, res) => {
  res.json(await getModels());
});

app.listen(8000, () => {
  console.log('Server is running on http://localhost:8000');
});

async function getModels() {
  const gltfFiles: GLTFFile[] = [];
  for await (const entry of Deno.readDir('./3dmodels')) {
    if (entry.isDirectory && (await Deno.stat(`./3dmodels/${entry.name}`)).isDirectory) {
      try {
        const gltfFileContent = await Deno.readFile(`./3dmodels/${entry.name}/glTF/${entry.name}.gltf`);
        const decoder = new TextDecoder();
        // const gltfFileContentString = decoder.decode(gltfFileContent);
        // console.log(gltfFileContentString);
        gltfFiles.push({
          content: gltfFileContent,
        });
      } catch (error: unknown) {
        console.error(error);
      }
    }
  }

  return gltfFiles;
}

type GLTFFile = {
  content: Uint8Array;
};