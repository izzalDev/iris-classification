import './style.css'
import * as ort from 'onnxruntime-web';

ort.env.wasm.wasmPaths = '../node_modules/onnxruntime-web/dist/';

async function main() {
    try {
        // create a new session and load the specific model.
        await ort.InferenceSession.create('./model.onnx')

        // prepare inputs. a tensor need its corresponding TypedArray as data
        // const dataA = Float32Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
        // const tensorA = new ort.Tensor('float32', dataA, [3, 4]);

        // // prepare feeds. use model input names as keys.
        // const feeds = { X: tensorA };

        // // feed inputs and run
        // const results = await session.run(feeds);

        // // read from results
        // const dataC = results.c.data;
        // document.write(`data of result tensor 'c': ${dataC}`);

    } catch (e) {
        document.write(`failed to inference ONNX model: ${e}.`);
    }
}

main();