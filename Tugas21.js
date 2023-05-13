var kalimat = "Saya belajar masak nasi goreng";

function mengganti(){
  console.log(kalimat);
  var ganti = kalimat.replace(/masak/, 'makan');
  return ganti;
}

console.log(mengganti());
