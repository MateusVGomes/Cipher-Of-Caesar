function translateCipher(str) {

    str = str.toUpperCase();

    let translated = "", actual;
  
    for (let i = 0; i < str.length; i++) {
  
      actual = convertLetterToAsc(str.charAt(i));
  
      if (actual - 13 < 65) {
  
        if (actual >= 33 && actual <= 64) {
  
          translated += convertAscToLetter(actual);
  
        }
        else {
          translated += convertAscToLetter(actual + 13);
        }
      }
      else {
  
        translated += convertAscToLetter(actual - 13);
  
      }
    }
  
    return translated.replaceAll("-", " ");
  
  }
  
  function convertLetterToAsc(letter) {
  
    return letter.charCodeAt(0)
  
  }
  function convertAscToLetter(asc) {
  
    return String.fromCharCode(asc);
  
  }