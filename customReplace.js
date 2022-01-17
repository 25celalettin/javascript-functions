let text = "Merhaba arkadaşlar kanalıma arkadaşlar hoş geldiniz arkadaşlar";
// 8 9 10 11 12 13 14 15 16 17
// 28 29 30 31 32 33 34 35 36 37
// 52, 53, 54, 55, 56, 57, 58, 59, 60, 61
let find_string = "arkadaşlar";
let replace_string = "uzaylılar";


function customReplace(string, find, replace) {
  let str = '';
  let find_cursor = 0;
  let find_index_array = [];
  let finded_indexes = [];

  
  for (let i = 0; i < string.length; i++) {
    
    if (find_index_array.length > 0) {
      
      if (string[i] == find[find_cursor]) {
        
        find_index_array.push(i)
        find_cursor++
        str += string[i]
        
        // console.log(find_cursor+1, ". karakteri de bulduk", string[i], i)
        
        if (str == find) {
          // console.log("racon bitmiştir", str)
          
          finded_indexes.push(find_index_array)
          find_index_array = []
          find_cursor = 0;
          str = ''
          
        }
        
      } else {
        
        if (find_index_array[find_index_array.length-1] + 1 == i) {
          // console.log(i, ". indexte sıfırlama işlemi")
          find_index_array = []
          find_cursor = 0;
          str = ''
          
        }
        
      }
      
    } else {
      if (string[i] == find[find_cursor]) {
        find_index_array.push(i)
        find_cursor++
        str = string[i]
        
        // console.log("ilk karakteri bulduk", string[i], i)
        
        if (str == find) {
          // console.log("racon bitmiştir", str)
          
          finded_indexes.push(find_index_array)
          find_index_array = []
          find_cursor = 0;
          str = ''
          
        }
        
      }
    }
    
  }
  
  if (finded_indexes.length == 0) {
    // değiştirilecek metnin içersinde böyle bir ifade bulunmuyor
    return false
  }
  
  let changeCharIndex = 0;
  let newString = '';
  let fark = 0;

  // 8 9 10 11 12 13 14 15 16 17
  
  // 28 29 30 31 32 33 34 35 36 37 -> (fark kadar geri gitcek)
  // 27 28 29 30 31 32 33 34 35 36
  
  // 52, 53, 54, 55, 56, 57, 58, 59, 60, 61 -> (fark kadar geri gitcek)
  // 50, 51, 52, 53, 54, 55, 56, 57, 58, 59
  
  // Merhaba arkadaşlar kanalıma arkadaşlar hoş geldiniz
    
  finded_indexes.forEach((charArray, index) => {
    
    for (let i = 0; i < string.length; i++) {
      
      if (i == charArray[0]+fark) {
        // console.log("ilk harfler eşleşti", i)
        newString += replace
        changeCharIndex++
      } else if (i == charArray[changeCharIndex]+fark) {
        changeCharIndex++
      } else {
        changeCharIndex = 0
        newString += string[i]
      }
      
    }
    
    
    
    fark += replace.length - find.length
    
    string = newString
    newString = ''
    
    // console.log(newString)
    
  })
  
  return string
}

let replaced_string = customReplace(text, find_string, replace_string)
console.log(replaced_string)
