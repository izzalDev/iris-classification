import "./style.css";
import * as ort from "onnxruntime-web";

async function main(): Promise<void> {
  const result: HTMLDivElement = document.getElementById("result") as HTMLDivElement;
  const form: HTMLFormElement = document.getElementById("form") as HTMLFormElement;
  const formInput: HTMLInputElement[] = ["sepal-length", "sepal-width", "petal-length", "petal-width"]
  .map(id => document.getElementById(id) as HTMLInputElement);

  try {
    // Membuat sesi baru dan memuat model ONNX tertentu.
    const session: ort.InferenceSession = await ort.InferenceSession.create("./model.onnx");

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      // Memasukkan input dan menjalankan model
      const output: ort.InferenceSession.OnnxValueMapType = await session.run({X: new ort.Tensor(
        "float32",
        formInput.map(input => parseFloat(input.value)),
        [1, 4]
      )});

      result.innerText = output.label.data[0].toString();
    });
  } catch (e) {
    document.write(`Error: ${e}.`);
  }
}

document.addEventListener("DOMContentLoaded", main);
