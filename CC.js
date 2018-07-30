var alphabet = createLetters();

console.log(alphabet);

function createLetters() {
  var upper = [];
  for (var i = 0; i < 26; i++) {
    upper.push(String.fromCharCode(i+65))
  }
  return upper.concat(upper.map(function(letter) { return letter.toLowerCase() }));
}

function caesarCipher(shift) {
  for (var x = 0; x < alpahbet.length; x++) {
      console.log(alphabet[x]);
  }
}

function encrypt(text, shift) {
  // encrypt the text
}

function decrypt(text, shift) {
  // decrypt the text
}


// testing. note that we can shift no more than 52.
for (var i = 0; i < 53; i++) {
  console.log("Test Number: ", i);
  var text = "This is a test";
  var test = encrypt(text, i);
  console.log(test);
  console.log(decrypt(test, i) + "\n\n\n");
}

// Decrypt the following message using a shift of 33:
// mAx uxLM MABGz tuHNM t uHHExtG BL xOxG By RHN tKx PKHGz, RHN tKx HGER Hyy uR t uBM. - (TGHGRFHNL)



var alphabet = createLetters();

console.log(alphabet);

function createLetters() {
  var upper = [];
  for (var i = 0; i < 26; i++) {
    upper.push(String.fromCharCode(i+65))
  }
  return upper.concat(upper.map(function(letter) { return letter.toLowerCase() }));
}


function caesarCipher(shift) {
  var length = alphabet.length - shift;
  var newalpha = alphabet.slice(length).concat(alphabet)
  newalpha.splice(-shift,shift)
  console.log(newalpha)
  return newalpha
}
caesarCipher(33);

function encrypt(text, shift) {
  var passtext = caesarCipher(shift);
  var newtext = text.split("");
  for (var y = 0; y < newtext.length;){
    for (var z = 0; z < alphabet.length; z++){
      if(newtext[y]== alphabet[z]){
        newtext[y] = passtext[z];
        y++;
      }
    }
  }
  var secret = newtext.join('');
  console.log(secret)
}
encrypt("hello", 33)

function decrypt(text, shift) {
  var openpass = caesarCipher(shift);
  var secret = text.split("");
  for (var y = 0; y < secret.length;){
    for (var z = 0; z < openpass.length; z++){
      if(secret[y]== openpass[z]){
        secret[y] = alphabet[z];
        y++;
      }
    }
  }
  var answer = secret.join('');
  console.log(answer)
}
decrypt("AxEEH", 33)

decrypt("mAxuxLMMABGztuHNMtuHHExtGBLxOxGByRHNtKxPKHGzRHNtKxHGERHyyuRtuBMTGHGRFHNL", 33)