import { set } from 'react-native-reanimated';

async function sortArray(array, setArray) {
  for (var i = 0; i < array.length - 1; i++) {
    for (var j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        var a = array[i];
        array[i] = array[j];
        array[j] = a;
        await wait(1000);
        setArray(array);
      } else {
        await wait(1000);
      }
    }
  }
}

async function wait(n) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve('result');
    }, n)
  );
}

export { sortArray };
