const CryptoJS = require("crypto-js");
const JSMd5 = require("js-md5");
function hmacsha256(str, secret) {
  const sign = CryptoJS.HmacSHA256(str, secret);
  return CryptoJS.enc.Base64.stringify(sign);
}

function md5(str) {
  return CryptoJS.MD5(str).toString().toUpperCase();
}

function base64Md5(str) {
  return CryptoJS.enc.Base64.stringify(CryptoJS.MD5(str));
}

function hmacsha256_bymd5(str, secret) {
  const sign = CryptoJS.HmacSHA256(str, secret);
  return CryptoJS.enc.Base64.stringify(sign);
}

function md5_bymd5(str) {
  return JSMd5(str).toUpperCase();
}
const { Base64 } = require("js-base64");
function base64Md5_bymd5(str) {
  return Base64.encode(JSMd5.arrayBuffer(str));
}
let s = "你好";
let res = [hmacsha256(s, s), md5(s), base64Md5(s)];
let res2 = [hmacsha256_bymd5(s, s), md5_bymd5(s), base64Md5_bymd5(s)];
console.log(res, res2);
