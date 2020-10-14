import React from 'react';

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Button,
  Platform
} from 'react-native';
import { BarChart, Grid } from 'react-native-svg-charts';

import generateArray from '../utils/generateArray';
import sleep from '../utils/sleep';
import colorScale from '../utils/colorScale';

class Heap extends React.Component {
  state = {
    data: [],
    arrSize: 'big',
    speed: 50,
  };

  componentDidMount() {
    const { arrSize } = this.state;
    var data = generateArray(arrSize);
    this.setState({ data });
  }

  onShuffle = () => {
    const { arrSize } = this.state;
    var data = generateArray(arrSize);
    this.setState({ data });
  };

  onCostum = () => {
    //todo : add costum Input
  };

  onSort = async () => {
    console.log('sdsd');
    const { data, speed } = this.state;
    var tmpArr = data.map((item) => {
      return item;
    });
    var n = tmpArr.length;
    for (var i = 0; i < n - 1; i++) {
      for (var j = 0; j < n - i - 1; j++) {
        console.log('sdsdsd');
        tmpArr[j].svg.fill = 'black';
        tmpArr[j + 1].svg.fill = 'black';
        //await sleep(50);
        if (tmpArr[j].value > tmpArr[j + 1].value) {
          var tmp = tmpArr[j];
          tmpArr[j] = tmpArr[j + 1];
          tmpArr[j + 1] = tmp;
          this.setState({ data: tmpArr });
          await sleep(speed);
        }

        tmpArr[j].svg.fill = colorScale(tmpArr[j].value);
        tmpArr[j + 1].svg.fill = colorScale(tmpArr[j + 1].value);
        this.setState({ data: tmpArr });
      }
    }
  };

  render() {
    const { data } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Heap Sort</Text>
        <View style={styles.divider} />
        <ScrollView style={styles.ScrollView}>
          <View>
            <BarChart
              style={styles.chart}
              data={data}
              yAccessor={({ item }) => item.value}
              contentInset={{ top: 30, bottom: 30 }}
              animate={true}
            >
              <Grid />
            </BarChart>
            <View style={styles.divider} />
            <View>
              <Text style={styles.description}>Description</Text>
              <Text style={styles.descriptions}>
                Bubble sort, sometimes referred to as sinking sort, is a simple
                sorting algorithm that repeatedly steps through the list,
                compares adjacent elements and swaps them if they are in the
                wrong order. The pass through the list is repeated until the
                list is sorted. The algorithm, which is a comparison sort, is
                named for the way smaller or larger elements "bubble" to the top
                of the list. This simple algorithm performs poorly in real world
                use and is used primarily as an educational tool.
              </Text>
            </View>
            <View style={styles.divider} />
            <View>
              <Text style={styles.description}>Complexity</Text>
              <View>
                <View style={styles.compItem}>
                  <Text style={styles.compTitle}>Worst case</Text>
                  <Text style={styles.compVal}>O(n^2)</Text>
                </View>
                <View style={styles.compItem}>
                  <Text style={styles.compTitle}>Average case</Text>
                  <Text style={styles.compVal}>O(n^2)</Text>
                </View>
                <View style={styles.compItem}>
                  <Text style={styles.compTitle}>Best case</Text>
                  <Text style={styles.compVal}>O(n)</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={styles.divider} />
        <View style={styles.buttons}>
          <View style={styles.shuffle}>
            <Button title="Shuffle" onPress={this.onShuffle} />
          </View>
          <View style={styles.sort}>
            <Button title="Sort" onPress={this.onSort} />
          </View>
          <View style={styles.costum}>
            <Button
              title="Costum input"
              color="#841584"
              onPress={this.onCostum}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default Heap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    paddingTop: 10,
  },
  ScrollView: {
    padding: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  divider: {
    height: 1,
    backgroundColor: '#c0c0c0',
    marginBottom: 5,
    marginTop: 0,
    paddingTop:0,
  },
  chart: {
    height: 300,
    marginLeft: 5,
    marginRight: 5,
  },
  buttons: {
    flexDirection: 'row',
  },
  shuffle: {
    flex: 1,
  },
  sort: {
    flex: 1,
  },
  costum: {
    flex: 1.1,
  },
  description: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 8,
  },
  descriptions: {
    paddingTop: 5,
    paddingBottom: 10,
  },
  compItem: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
  },
  compTitle: {
    flex: 1,
  },
  compVal: {
    color: 'grey',
    fontFamily: 'Al Nile',
  },
});
