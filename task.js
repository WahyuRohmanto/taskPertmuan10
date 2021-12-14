/**
 * Fungsi untuk menampilkan hasil download
 * @param {string} result - Nama file yang didownload
 */
const showDownload = (result) => {
  console.log("Download selesai");
  console.log("Hasil Download: " + result);
};
/**
 * Fungsi untuk download file
 * @param {function} callback - Function callback show
 */
//   function download(callShowDownload) {
//     setTimeout(function () {
//       const result = "windows-10.exe";
//       callShowDownload(result);
//     }, 3000);
//   }

const download = () => {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const result = "windows-10.exe";
      const status = true;
      if (status) {
        resolve(result);
      } else {
        reject("download gagal");
      }
    }, 3000);
  });
};

download()
  .then(function (result) {
    return showDownload(result);
  })
  .catch(function (err) {
    console.log(err);
  });

/**
 * TODO:
 * - Refactor callback ke Promise atau Async Await
 * - Refactor function ke ES6 Arrow Function
 * - Refactor string ke ES6 Template Literals
 */
