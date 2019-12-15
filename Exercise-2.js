function changeVocals (str) {
    
    var vocal = 'aiueoAIEO'
    var newVocal = 'bjvfpBJVFP' ;

    var newWord = ''
    
    for ( var i = 0 ; i < str.length ; i++) {

        var flag = false 

        for (var j = 0 ; j<vocal.length ; j++) {

            if (str[i] === vocal[j]) {

                newWord += newVocal[j]

                flag = true 

            }
        }

        if (flag === false) {

            newWord += str[i]
        }
       
    }
    //str = newWord
    return newWord //code di sini
  }
  
  function reverseWord (str) {
    
    var newRev = ''
    
    for ( var j = 0 ; j<str.length ; j++) {

        newRev = str[j] + newRev
    }

    //str = newRev
    return newRev
    //code di sini
  }
  
  function setLowerUpperCase (str) {
    var changeLetter = '' ;
    
    for ( var k = 0 ; k< str.length ;k++) {

        if ( str[k] === str[k].toLowerCase()) {

            changeLetter += str[k].toUpperCase()
        }

        else if ( str[k] === str[k].toUpperCase()) {
            
            changeLetter += str[k].toLowerCase()
        }
    }
    
    //str = changeLetter
    return changeLetter
    //code di sini
  }
  
  function removeSpaces (str) {
    
    var noSpace = '';

    for ( var l = 0 ; l<str.length ; l++) {

        if ( str[l] === ' ') {

            noSpace += ''
        }
        else {
            noSpace += str[l]
        }
    }
   //str = noSpace
   return noSpace//code di sini
  }
  
  function passwordGenerator (name) {

    var resultChangeVocal = changeVocals(name)
    var resultReversedWord = reverseWord (resultChangeVocal)
    var resultChangeLetter = setLowerUpperCase (resultReversedWord)
    var resultRemoveSpace = removeSpaces(resultChangeLetter)
    if (name.length < 5) {
        
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
        
    }
    
    return resultRemoveSpace  //code di sini
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
  