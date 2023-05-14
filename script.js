// complete the given function

function palindrome(str){
str = ''.join(ch.lower() for ch in str if ch.isalnum())
}
module.exports = palindrome
