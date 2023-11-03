const arrayUtama = [];
const arrayGenap = [];
const arrayGanjil = [];

function nilaiMinArray(array) {
  let minArray = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < minArray) {
      minArray = array[i];
    }
  }
  return minArray;
}

function nilaiMaxArray(array) {
  let maxArray = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > maxArray) {
      maxArray = array[i];
    }
  }
  return maxArray;
}

function nilaiTotalArray(array) {
  let totalArray = 0;
  for (let i = 0; i < array.length; i++) {
    totalArray += array[i];
  }
  return totalArray;
}

function nilaiRata2Array(array) {
  const total = nilaiTotalArray(array);
  const average = total / array.length;
  return average;
}

function buatArray100() {
    let penghitungGenap = 0;
    let penghitungGanjil = 0;
  
    while (penghitungGenap < 50 || penghitungGanjil < 50) {
      const randomNumber = Math.floor(Math.random() * 100) + 1;
      arrayUtama.push(randomNumber);
  
      if (randomNumber % 2 === 0 && penghitungGenap < 50) {
        arrayGenap.push(randomNumber);
        penghitungGenap++;
      } else if (randomNumber % 2 !== 0 && penghitungGanjil < 50) {
        arrayGanjil.push(randomNumber);
        penghitungGanjil++;
      }
    }



//   menampilkan output yang dibutuhkan via console

// array utama dengan 100 index, array genap dan ganjil dengan masing-masing 50 index
  console.log('Array Utama:', arrayUtama);
  console.log('Array Genap:', arrayGenap);
  console.log('Array Ganjil:', arrayGanjil);

//   min, max, total, rata rata dari tiap array
  console.log(`Nilai Minimal Array Genap: ${nilaiMinArray(arrayGenap)}`);
  console.log(`Nilai Maksimal Array Genap: ${nilaiMaxArray(arrayGenap)}`);
  console.log(`Nilai Total Array Genap: ${nilaiTotalArray(arrayGenap)}`);
  console.log(`Nilai Rata-rata Array Genap: ${nilaiRata2Array(arrayGenap)}`);
  
  console.log(`Nilai Minimal Array Ganjil: ${nilaiMinArray(arrayGanjil)}`);
  console.log(`Nilai Maksimal Array Ganjil: ${nilaiMaxArray(arrayGanjil)}`);
  console.log(`Nilai Total Array Ganjil: ${nilaiTotalArray(arrayGanjil)}`);
  console.log(`Nilai Rata-rata Array Ganjil: ${nilaiRata2Array(arrayGanjil)}`);

  
// perbandingan antara 2 array 
  console.log(`Nilai minimal dari array ganjil adalah ${nilaiMinArray(arrayGanjil)}, dan minimal dari genap adalah ${nilaiMinArray(arrayGenap)}`);
  console.log(`nilai maksimal dari array ganjil adalah ${nilaiMaxArray(arrayGanjil)}, dan maksimal dari genap adalah ${nilaiMaxArray(arrayGenap)}`);
  console.log(`Nilai total dari array ganjil adalah ${nilaiTotalArray(arrayGanjil)}, dan total dari genap adalah ${nilaiTotalArray(arrayGenap)}`);
  console.log(`Nilai Ratarata dari array ganjil adalah ${nilaiRata2Array(arrayGanjil)}, dan rata-rata dari genap adalah ${nilaiRata2Array(arrayGenap)}`);
}

buatArray100();


