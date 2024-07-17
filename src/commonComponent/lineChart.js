import React from 'react';
import ReactEcharts from 'echarts-for-react';

const LineChartComponent = () => {
  let option = {
    xAxis: {
      type: 'category',
      data: ['12/3/24', '14/3/24', '16/3/24', '17/3/24', '19/3/24'],
      
    },
    yAxis: {
      type: 'value',
      splitLine:{
        show : false
       },
    },
    toolbox:{
      feature:{
      show:true,
      // saveAsImage: {
      //   pixelRatio: 2,
      //    title:"Download"
      // },
     }
    },
    // color:"red",
    series: [
      {
        data: [1,1, 3, 4, 5, 7, 8,6],
        type: 'line',
        showSymbol: false,
      },
     
    ] 
  };

  return (
    <div id="downloadPdf1">
    <ReactEcharts
      option={option}
      style={{ width: '500px', height: '270px', marginTop:-40,marginBottom:-21 }}
    />
    </div>
  );
};

export default LineChartComponent;
