import colorScale from './colorScale';

//generates random Array of  numbers from 0,99 depending on size
export default function generateArray(size) {
  const len = size === 'small' ? 15 : size === 'big' ? 45 : 30;
  var newArr = [];
  for (var i = 0; i < len; i++) {
    do {
      var randomNum = Math.floor(Math.random() * 99 + 1);
    } while (newArr.indexOf(randomNum) != -1);
    var obj = {
      value: randomNum,
      svg: {
        fill: colorScale(randomNum),
      },
    };
    newArr.push(obj);
  }

  return newArr;
}
