function totalDigitRekursif(angka) {
    
    if (angka === 0 ){
        
        return 0
    }
    else {
        //console.log(angka)
        return (angka %10) + totalDigitRekursif(angka/10) // you can only write your code here!
  }
  
}
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5