import React from 'react';

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Button,
} from 'react-native';
import { BarChart, Grid } from 'react-native-svg-charts';

import generateArray from '../utils/generateArray';
import sleep from '../utils/sleep';
import colorScale from '../utils/colorScale';

class Bubble extends React.Component {
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
        tmpArr[j + 1].svg.fill = 'blue';
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
        
      }
      
    }
  };

  render() {
    const { data } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>BubbleSort</Text>
        <View style={styles.divider} />
        <ScrollView>
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

export default Bubble;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    marginTop: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  divider: {
    height: 1,
    backgroundColor: '#c0c0c0',
    marginBottom: 5,
    marginTop: 5,
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
    flex: 1,
  },
});
