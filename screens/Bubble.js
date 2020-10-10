import React, { useState, useEffect } from 'react';

import { Button, Text, SafeAreaView, StyleSheet } from 'react-native';

import Chart from '../components/Chart';
import generateArray from '../utils/generateArray';

function Bubble() {
  const [array, setArray] = useState([]);
  const [size, setSize] = useState('small');

  useEffect(() => {
    if (array.length == 0) {
      const newArr = generateArray(size);
      console.log(newArr);
      setArray(newArr);
    }
  }, []);

  onSort = () => {
    sortArray();
  };

  async function sortArray() {
    console.log('sortArray');
    for (var i = 0; i < array.length - 1; i++) {
      for (var j = i + 1; j < array.length; j++) {
        console.log(array[i] + ' > ' + array[j]);
        if (array[i] > array[j]) {
          console.log('>');
          var a = array[i];
          array[i] = array[j];
          array[j] = a;
          await wait(100);
          setArray(array);
        } else {
          console.log('=');
          await wait(100);
        }
      }
    }
    console.log(array)
  }

  async function wait(n) {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve('result');
      }, n)
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>BubbleSort</Text>
      <Chart data={array} />
      <Button title="sort" onPress={onSort} />
    </SafeAreaView>
  );
}

export default Bubble;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
