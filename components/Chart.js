import React from 'react';
import { BarChart, Grid } from 'react-native-svg-charts';


import colorScale from '../utils/colorScale';

function Chart(props) {
  const fill = 'rgb(255, 255, 255)';
  const selected = 'rgb(0, 0, 0)';
  

  const data = props.data;
  console.log('got new Array');
  console.log(data);
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
    <BarChart
      style={{ height: 250 }}
      data={dataset}
      yAccessor={({ item }) => item.value}
      contentInset={{ top: 30, bottom: 30 }}
      animate={true}
    >
      <Grid />
      
    </BarChart>
  );
}

export default Chart;
