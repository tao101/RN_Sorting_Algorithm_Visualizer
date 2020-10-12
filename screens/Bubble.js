import React, { useState, useEffect } from 'react';

import { Button, Text, SafeAreaView, StyleSheet } from 'react-native';

import Chart from '../components/Chart';
import generateArray from '../utils/generateArray';

import useStateWithPromise from '../utils/useStateWithPromise';

function Bubble() {
  const [array, setArray] = useState([]);
  const [size, setSize] = useState('small');

  useEffect(() => {
    if (array.length == 0) {
      const newArr = generateArray(size);

      setArray(newArr);
    }
  }, []);

  onSort = () => {
    sortArray();
  };

  async function sortArray() {
    var tmpArray = array.map((item) => {
      return item;
    });
    console.log('sss');
    for (var i = 0; i < tmpArray.length - 1; i++) {
      for (var j = i + 1; j < tmpArray.length; j++) {
        console.log('sdsd');
        if (tmpArray[i] > tmpArray[j]) {
          
          var a = tmpArray[i];
          tmpArray[i] = tmpArray[j];
          tmpArray[j] = a;
          setArray(tmpArray);
          await wait(100);
        } else {
          await wait(100);
        }
      }
    }
    console.log('finished sorting array');
    console.log(array);
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
