import React, { useEffect, useState } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, styled, tableCellClasses } from '@mui/material';
import Axios from 'axios';
import Timelinetable from './timeLineTable';

const years = ["Year 0 2022", "Year 1 2023", "Year 2 2024", "Year 3 2025", "Year 4 2026", "Year 5 2027"];

function TimeLineRoi() {
  const [timeLines, setTimeLines] = useState({})
  const subTitle= ["Digital Workplace Benefits","Non-Digital Workplace Benefits","One-time Technology Costs","Ongoing Technology Costs"]

  useEffect(() => {
    getTimeLines();
  }, [])
  async function getTimeLines() {
    try {
      let roiId = JSON.parse(localStorage.getItem("roiId"))
      let res = await Axios.post("http://localhost:8000/api/product/getRoi", { roiId })
      setTimeLines(res.data);

    }
    catch (error) {
    }
  }
  const result = [];
  const dict1 = timeLines?.digitalWorkspaceBenefits?.serviceDesk[0]
  const dict2 = timeLines?.digitalWorkspaceBenefits?.softwareLicence[0]
  const dict3 = timeLines?.nondigitalWorkspaceBenefits?.userProductivity[0]

  const combinedDict = {};

  for (const key in dict1) {
      if (dict1.hasOwnProperty(key) && dict2.hasOwnProperty(key)) {
          const combinedValue = dict1[key].value + dict2[key].value;
          combinedDict[key] = {
              date: dict1[key].date,
              value: combinedValue
          };
      }
  }
  result.push(combinedDict);

  

const result2 = [];
const combinedDict2 = {};
function sumValues(keys, ...dicts) {
    for (const key of keys) {
        let combinedValue = 0;
        for (const dict of dicts) {
            if (dict && dict[key]) {
                combinedValue += dict[key].value;
            }
        }
        combinedDict2[key] = {
            date: dict1[key].date,
            value: combinedValue
        };
    }
}

// const keys = ['Year0', 'Year1', 'Year2', 'Year3', 'Year4', 'Year5'] ;
const keys = dict1 && Object.keys(dict1)

 dict1 && sumValues(keys, dict1, dict2, dict3);
result2.push(combinedDict2);
  return (
    <>
     <Timelinetable
      positiveBenefits
      profitTitle={"Benefit in Positive $"} 
      subTitle={subTitle.slice(0,2)}
      years={years} 
      timeLines={timeLines}
      firstRow={timeLines?.digitalWorkspaceBenefits?.serviceDesk}
      secondRow={timeLines?.digitalWorkspaceBenefits?.softwareLicence}
      thirdRow={timeLines.nondigitalWorkspaceBenefits?.userProductivity}
      totalfirst={result}
      totalBen={result2}
      />
     {/* <Typography>ROI Cost Projection</Typography> */}
     <Timelinetable 
      subTitle={subTitle.slice(2,4)}
      profitTitle={"Cost in Negative $"}
      years={years} 
      timeLines={timeLines}
      firstRow={timeLines?.oneTimeTechCost?.professionalServices}
      thirdRow={timeLines?.ongoingTechCost?.professionalServices}
      fourthRow={timeLines?.ongoingTechCost?.licence}
      fivth={timeLines?.ongoingTechCost?.addOns}
      />
     </>
  );
}

export default TimeLineRoi;
