module.exports = function check(str, bracketsConfig) {

  let arrayJoin = bracketsConfig.map(function (item) {
    return item.join('');
  });

  for (let i = 0; i < arrayJoin.length; i++) {
    if (str.includes(arrayJoin[i]) == true) {
      str = str.replace(arrayJoin[i], '');
      i = -1;
    }
  }
  return str == '' ? true : false;
}
