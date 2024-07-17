import React from 'react';
import ReactEcharts from 'echarts-for-react';

const  BarChartComponent = () => {
  const grid = {
    left: 100,
    right: 100,
    bottom: 80  
  };
  let series=[
    {
      name: 'NPM',
      type: 'bar',
      stack: 'total',
      data: [100, 302, 301, 334, 390, 330, 320],
    },
    {
      name: 'Aternity',
      type: 'bar',
      stack: 'total',
      data: [0, 32, 87, 34, 90, 30, 21],
      // color: "orange"
    },
    {
      name: 'IQ',
      type: 'bar',
      stack: 'total',  
      data: [0, 82, 91, 34, 90, 33, 31],
      // color:"Sky Blue"
    },
    {
      name: 'Aternity NPM IQ',
      type: 'bar',
      stack: 'total',
      data: [0, 12, 21, 54, 90, 33, 41],
      // color:"green"
    },
    {
      name: 'NPM IQ',
      type: 'bar',
      stack: 'total',
      data: [0, 82, 90, 94,90, 87, 80],
      // color:"Electric Purple"
     
    },
    {
      name: 'All',
      type: 'bar',
      stack: 'total',
      data: [0, 94,90, 87, 21, 3, 41],
      // color:"Dark Midnight Blue"
    },
    {
      name: 'Total',
      type: 'bar',
      stack: 'total',
      data: [0,0, 82,94,90, 87, 80],
     
    }
  ]
 let option = {
    legend: {
      selectedMode: true,
       bottom: 20,
       width:470,
       textStyle:{
        fontSize:'8px',
        itemWidth: 15,
        itemHeight: 8
       }
    },
    grid,
    yAxis: {
      type: 'value',
      splitLine:{
       show : false
      },
    },
    xAxis: {
      type: 'category',
      data: ['12/4/24', '13/4/24', '14/4/24', '15/4/24','16/4/24','12/4/24', '13/4/24'],
      
    },
    legendHoverLink: true,
    toolbox: {
      show: true,
      right:63,
      zIndex:999,
      // feature: {
      //   saveAsImage: {
      //     pixelRatio: 2,
      //     title:"Download"      
      //   }
      // }
    },
    series
  };
  return (
    <div id="downloadPdf2">
    <ReactEcharts
      option={option}
      style={{ width: '600px', height: '270px', marginTop:"-40px", marginLeft:"-46px" }}
    />
    </div>
  );
};

export default BarChartComponent;