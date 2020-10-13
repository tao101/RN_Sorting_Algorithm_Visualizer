import React from 'react';
import { BarChart, Grid } from 'react-native-svg-charts';
import { View, Button } from 'react-native';

import colorScale from '../utils/colorScale';

class Chart extends React.Component {
  state={
    data :[90, 80, 50, 10, 30, 40, 20,63, 31, 19, 15, 60, 4, 11, 52, 9, 53, 92, 24, 50, 57, 14, 47, 81, 46, 19, 48, 42, 99, 24, 39, 82, 70, 35, ],
    selected:[],
  }

  

  onSort = async ()=>{
    const {data} = this.state;
    const newArr = data.map((item)=>{return item});
    for(var a = 0 ; a<newArr.length;a++){
      for(var i = 0;i<newArr.length;i++){
        console.log('a>i')
        if(newArr[a]<newArr[i]){
          var tmp = newArr[a];
          newArr[a] = newArr[i];
          newArr[i] = tmp;
          this.setState({data:newArr});
          await this.wait(100);
        }
      }
    }
    console.log('finished')
  }

  wait = async function (n) {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve('result');
      }, n)
    );
  }

  render() {
    const fill = 'rgb(255, 255, 255)';
    const selected = 'rgb(0, 0, 0)';

    const {data} = this.state;

    var dataset = [];
    data.map((item) => {
      dataset.push({
        value: item,
        svg: {
          fill: colorScale(item),
        },
      });
    });
 
    

    return (
      <View style={{ margin: 5 }}>
        <BarChart
          style={{ height: 250 }}
          data={dataset}
          yAccessor={({ item }) => item.value}
          contentInset={{ top: 30, bottom: 30 }}
          animate={true}
        >
          <Grid />
        </BarChart>
        <Button title="sort" onPress={this.onSort} />
      </View>
    );
  }
}

export default Chart;
