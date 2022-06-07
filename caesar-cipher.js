export default function caesarCipher(text) {
  const alphabet_small = "abcdefghijklmnopqrstuvwxyz";
  const alphabet_capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  function encode(message, n) {
    let result = "";

    for (let i = 0; i < message.length; i++) {
      const character_charCode = message.charCodeAt(i);
      if (character_charCode >= 65 && character_charCode < 65 + 26) {
        const index = alphabet_capital.indexOf(message[i]);
        const offset = (index + n) % alphabet_capital.length;
        result += alphabet_capital[offset];
      } else if (character_charCode >= 97 && character_charCode < 97 + 26) {
        const index = alphabet_small.indexOf(message[i]);
        const offset = (index + n) % alphabet_small.length;
        result += alphabet_small[offset];
      } else {
        result += message[i];
      }
    }
    return result;
  }

  return {
    encode,
  };
}
