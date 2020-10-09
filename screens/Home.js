import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

function Home() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="blue" barStyle='dark-content' />
      <Text style={styles.title}>Sorting Algorithm Visualizer</Text>
      <View style={styles.divider} />
      <View style={styles.listContainer}>
        <View style={styles.row}>
          <TouchableOpacity style={[styles.item, styles.bubbleBg]}>
            <Text style={styles.algoType}>Bubble sort</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.item, styles.insertionBg]}>
            <Text style={styles.algoType}>Insertion sort</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={[styles.item, styles.quickBg]}>
            <Text style={styles.algoType}>Quick sort</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.item, styles.heapBg]}>
            <Text style={styles.algoType}>Heap sort</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={[styles.item, styles.selectionBg]}>
            <Text style={styles.algoType}>Selection sort</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.item, styles.shellBg]}>
            <Text style={styles.algoType}>Shell sort</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Home;

const StatusBarHeight =
  Platform.OS === 'android' ? StatusBar.currentHeight : 50;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingTop: getStatusBarHeight() + 8,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  divider: {
    height: 1,
    backgroundColor: '#c0c0c0',
    marginBottom: 5,
    marginTop: 5,
  },
  listContainer: {
    flex: 1,
    marginTop: 10,
    marginBottom: 20,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'red',
    margin: 10,
    marginTop: 0,
    marginBottom: 30,
    borderRadius: 10,
  },
  bubbleBg: {
    backgroundColor: '#A0C1B9',
  },
  insertionBg: {
    backgroundColor: '#70A0AF',
  },
  quickBg: {
    backgroundColor: '#706993',
  },
  heapBg: {
    backgroundColor: '#331E38',
  },
  selectionBg: {
    backgroundColor: '#2E2D4D',
  },
  shellBg: {
    backgroundColor: '#CB48B7',
  },
  algoType: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
