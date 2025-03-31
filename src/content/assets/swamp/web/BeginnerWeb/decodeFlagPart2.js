const CryptoJS = require("crypto-js");

function decodeFlagPart2() {
  const encryptedText = "U2FsdGVkX1/oCOrv2BF34XQbx7f34cYJ8aA71tr8cl8="; // r 的值
  const key = "flagPart2_3"; // n 的值

  // 解碼
  const decryptedText = CryptoJS.AES.decrypt(encryptedText, key).toString(
    CryptoJS.enc.Utf8
  );

  console.log("Decoded flagPart2:", decryptedText);
}

decodeFlagPart2();
