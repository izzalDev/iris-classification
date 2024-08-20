// Mengimpor style.css untuk styling elemen HTML
import "./style.css";
// Mengimpor semua fungsi dari onnxruntime-web sebagai ort
import * as ort from "onnxruntime-web";

// Fungsi utama yang akan dijalankan setelah halaman selesai dimuat
async function main(): Promise<void> {
  // Mendapatkan elemen div dengan id "result" untuk menampilkan hasil prediksi
  const result: HTMLDivElement = document.getElementById("result") as HTMLDivElement;
  
  // Mendapatkan elemen form dengan id "form"
  const form: HTMLFormElement = document.getElementById("form") as HTMLFormElement;
  
  // Mendapatkan input dari form berdasarkan id yang diberikan (sepal-length, sepal-width, petal-length, petal-width)
  const formInput: HTMLInputElement[] = ["sepal-length", "sepal-width", "petal-length", "petal-width"]
    .map(id => document.getElementById(id) as HTMLInputElement);

  try {
    // Membuat sesi inferensi ONNX dari file model "model.onnx"
    const session: ort.InferenceSession = await ort.InferenceSession.create("./model.onnx");

    // Menambahkan event listener untuk menangani submit form
    form.addEventListener("submit", async (event) => {
      // Mencegah form agar tidak melakukan reload halaman saat di-submit
      event.preventDefault();

      // Menjalankan sesi inferensi dengan input dari form, mengonversi nilai input menjadi float32
      const output: ort.InferenceSession.OnnxValueMapType = await session.run({
        X: new ort.Tensor(
          "float32",                              // Tipe data tensor
          formInput.map(input => parseFloat(input.value)), // Mengambil nilai dari input dan mengonversinya menjadi float
          [1, 4]                                  // Ukuran tensor [batch size, input size]
        )
      });

      // Menampilkan hasil prediksi pada elemen div dengan id "result"
      result.innerText = output.label.data[0].toString();
    });
  } catch (e) {
    // Menampilkan pesan error jika terjadi kesalahan saat menjalankan model
    document.write(`Error: ${e}.`);
  }
}

// Menjalankan fungsi main setelah halaman selesai dimuat (DOMContentLoaded)
document.addEventListener("DOMContentLoaded", main);
