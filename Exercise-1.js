

    function sorting(arrNumber) {
        for(var i = 0; i < arrNumber.length; i++){
          var hasilSort = arrNumber[i]
    
          //console.log('ini target', target)
          for(var j = i -1 ; j >= 0 && (arrNumber[j] < hasilSort); j--){
              arrNumber[j +1] = arrNumber[j]
            //console.log('ini i: ', i, 'ini j :', j,'ini target :',target, 'ini result j :', arrNumber[j])
            
          }
          //console.log(' j ke 2',j,'ini result j+1 :', arrNumber[j +1])
          arrNumber[j+1] = hasilSort
        //   console.log('hasil:',arrNumber[j+1])
        //   console.log('arr number', arrNumber)
        }
        return arrNumber
      }

    
  
    function getTotal(arrNumber) {

        var calc = 0;
        
        for ( var k = 0 ; k<arrNumber.length ; k++) {
    
            if(arrNumber[0] === arrNumber[k]) {
    
                calc ++
            }
        }
        
        if ( calc === 0 ) {
    
            return "''";
        }
        else {
    
            return 'angka paling besar adalah' + arrNumber[0] + ' dan jumlah kemunculan sebanyak ' + calc + ' kali'
        }
        // code di sini
      }
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''