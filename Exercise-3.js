function makanTerusRekursif(waktu) {


    //cara biasa 
    
    // if (waktu == 0) {

    //     return 0
    // }
    // else if ( waktu < 15 && waktu > 0 ) {
        
    //     return 1
    // }

    // else {

    //     return waktu = Math.ceil(waktu/15)
    // }
   
    //Rekursif

    //Base

    if (waktu <= 0 ) {

        return 0    
    }
    else {

        //console.log(waktu)
        return makanTerusRekursif(waktu - 15) + 1
        
    }

    }
  
  
  // TEST CASES
  console.log(makanTerusRekursif(66)); // 5
  console.log(makanTerusRekursif(100)); // 7
  console.log(makanTerusRekursif(90)); // 6
  console.log(makanTerusRekursif(10)); // 1
  console.log(makanTerusRekursif(0)); // 0