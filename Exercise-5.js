function kaliTerusRekursif(angka) {

   var numStr = String(angka)
   var result = numStr[0]
    
    if (angka < 10 ) {
    
    return Math.floor(angka)
    
    }

    //atau 
    /*
    if (numStr === 1) {

        return numStr
    }
    
    */
    
    else {

        for (var i = 1 ; i< numStr.length ; i++) {

            result *= numStr[i] 
        }
      
        return kaliTerusRekursif(result)
    }// you can only write your code here!
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6