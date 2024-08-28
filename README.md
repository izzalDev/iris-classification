<div align="center">
    <img src="https://socialify.git.ci/izzalDev/iris-classification/image?forks=1&issues=1&language=1&name=1&owner=1&pattern=Solid&pulls=1&stargazers=1&theme=Light" alt="secondhand-car-valuation" width="1280"/>    
</div>

# 🤖 Klasifikasi Bunga Iris dengan Algoritma Random Forest

Proyek ini menunjukkan bagaimana klasifikasi bunga iris menggunakan `scikit-learn` dengan menggunakan algoritma random forest. Contoh implementasi di [link ini](https://izzalDev.github.io/iris-classification).

## Struktur Direktori

```bash
├── .github                        # Folder untuk konfigurasi GitHub Actions
│   └── workflows                  # Folder untuk definisi workflow CI/CD
│       ├── docker.yml             # Workflow untuk build dan deploy Docker ke Github Package
│       └── static.yml             # Workflow untuk build dan deploy web ke Github Pages
├── .gitignore                     # File untuk mengabaikan file dan folder dari Git
├── LICENSE                        # File lisensi proyek
├── README.md                      # File README untuk dokumentasi proyek
├── data                           # Folder untuk data
│   └── raw                        
│       └── Iris.csv               # Dataset Iris dalam format CSV
├── environment.yml                # File konfigurasi conda environment
├── models                         # Folder untuk model yang sudah dilatih
│   └── model.onnx                 # Model ONNX yang sudah dilatih
├── notebook                       # Folder untuk notebook Jupyter
│   └── classification.ipynb       # Notebook untuk klasifikasi
└── web                            # Folder untuk implementasi di web
    ├── .gitignore                 # File .gitignore khusus untuk folder web
    ├── Dockerfile                 # File Dockerfile untuk membangun image Docker
    ├── README.md                  # README khusus untuk bagian web
    ├── index.html                 # File HTML utama untuk aplikasi web
    ├── package-lock.json          
    ├── package.json               # File konfigurasi npm untuk dependensi
    ├── postcss.config.js          # Konfigurasi PostCSS
    ├── public                     # Folder untuk aset publik
    │   ├── background.jpg         
    │   ├── model.onnx             # Model ONNX (juga di folder models)
    │   └── vite.svg               
    ├── src                        # Folder untuk kode sumber
    │   ├── main.ts                # File utama TypeScript
    │   ├── style.css              # File CSS untuk styling
    │   └── typescript.svg         # Logo TypeScript
    ├── tailwind.config.ts         # Konfigurasi Tailwind CSS
    ├── tsconfig.json              # Konfigurasi TypeScript
    └── vite.config.ts             # Konfigurasi Vite

```

## Instalasi

1. Clone repositori ini:

    ```bash
    git clone https://github.com/izzalDev/iris-classification.git
    cd iris-classification
    ```

2. Instal Conda:

    Ikuti petunjuk pada halaman instalasi Conda untuk menginstal Conda di sistem Anda. Conda adalah manajer paket yang membantu Anda mengelola dependensi untuk proyek Anda.

3. Buat dan aktifkan virtual environment Conda:

    Buat virtual environment Conda baru berdasarkan file `environment.yml` yang disediakan dan aktifkan:

    ```bash
    conda env create -f environment.yml
    conda activate iris-classification
    conda env config vars set MLFLOW_TRACKING_PASSWORD=password
    ```

    Ini akan menginstal semua dependensi yang diperlukan untuk proyek.

## Penggunaan

Setelah Anda menyelesaikan langkah-langkah instalasi, Anda dapat mulai menggunakan dan memodifikasi notebook yang sudah ada.

## Dukungan

<div align="center" style="display: flex; justify-content: center; align-items: center;">
    <a href="https://www.nihbuatjajan.com/_qviyxykh" target="_blank">
    <img src="https://d4xyvrfd64gfm.cloudfront.net/buttons/default-cta.png" alt="Nih buat jajan" height="40"></a><span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
    <a href="https://trakteer.id/izzalDev/tip" target="_blank">
    <img id="wse-buttons-preview" src="https://cdn.trakteer.id/images/embed/trbtn-red-1.png?date=18-11-2023" height="40" style="border:0px;height:40px;" alt="Trakteer Saya"></a><span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
    <a href='https://ko-fi.com/B0B2ZCON1' target='_blank'>
    <img height='40' style='border:0px;height:40px;' src='https://storage.ko-fi.com/cdn/kofi1.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
</div>
