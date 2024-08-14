import "./style.css";
import * as ort from "onnxruntime-web";

async function main(): Promise<void> {
  try {
    // Membuat sesi baru dan memuat model ONNX tertentu.
    const session: ort.InferenceSession = await ort.InferenceSession.create(
      "./model.onnx",
    );

    // Menyiapkan input. Tensor memerlukan TypedArray yang sesuai sebagai data.
    const input: ort.Tensor = new ort.Tensor(
      "float32",
      [5.1, 3.5, 1.4, 0.2],
      [1, 4]
    );

    // Memasukkan input dan menjalankan model
    const output: ort.InferenceSession.OnnxValueMapType = await session.run({
      X: input,
    });

    // Membaca hasil dari output
    const label: ort.Tensor = output.label;
    const probabilities: ort.Tensor = output.probabilities;

    const maxProbability: number = Math.max(
      ...(probabilities.data as Float32Array)
    );

    console.log(
      `Label: ${label.data} Probabilitas Maksimum: ${maxProbability * 100}%`
    );
  } catch (e) {
    document.write(`failed to inference ONNX model: ${e}.`);
  }
}

main();
