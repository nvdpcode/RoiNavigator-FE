import React, { useEffect, useState } from 'react'
import { CircularProgress, Grid, Paper, styled } from '@mui/material';
import ChildTable from '../../commonComponent/childtable';
import Roisaving from './roisaving';
import { calculationdata } from './calculation';
import Axois from 'axios'
import Genrateroi from './genrateRoi';
import { dataNotFoundImage } from '../../assets/assets';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  borderRadius: "20px 20px 1px 1px",
  color: theme.palette.text.secondary,
}));
function CalculateSaving({setToaster}) {
  const [activeTab, setActiveTab] = React.useState(0);
  const [calculationApiData, setcalculation] = useState(calculationdata)
  const [isLoading, setIsLoading] = useState(true)
  let count=0
  useEffect(() => {
    if(count==0){
      apiCallfunction()
      count=1
    }
  }, [])

  const apiCallfunction = async () => {
    let roiId =  JSON.parse(localStorage.getItem("roiId"))
    try{
    const calData = await Axois.post("http://localhost:8000/api/product/calculation", {roiId:roiId})
    if (calData.status == 200) {
      const savingsData = await Axois.post("http://localhost:8000/api/product/calcDetails", {roiId:roiId})
      setcalculation(savingsData.data)
      setIsLoading(false)
    }
  }catch(e){
    setToaster({
      open:true,
      massage: e?.response?.data?.error ?? "error",
      msgSaverity:"error"
    }) 
  }
  }
  const handleClick = (item, index) => {
    setActiveTab(index);
  };

  const { withAlluvio, withoutAlluvio ,savings } = calculationApiData
  const withAlluvioFormat = [
    {
      name: ["L1DesktopSupport" , "Number Of Tickets", "Cost Per Tickets", "Cost Per Annum"],
      data: withAlluvio.L1DesktopSupport
    },
    {
      name: ["L2DesktopSupport" , "Number Of Tickets", "Cost Per Tickets", "Cost Per Annum"],
      data: withAlluvio.L2DesktopSupport
    },
    {
      name:  ["L3DesktopSupport" , "Number Of Tickets", "Cost Per Tickets", "Cost Per Annum"],
      data: withAlluvio.L3DesktopSupport
    },
    {
      name: ["Device Refresh", "Number of Device on 4 Year cylce", "Cost Per Device", "costPerAnnum"],
      data: withAlluvio.DeviceRefresh
    },
    {
      name: ["Software License", "No Of Users", "Cost Of Software", "costPerAnnum"],
      data: withAlluvio.softwareLicence
    },
    {
      name: ["User Productivity", "Wait Time Hrs", "Cost Per Hour", "costPerAnnum"],
      data: withAlluvio.userProductivity
    }
  ]
  const withoutAlluvioFormat = [
    {
      name: ["L1DesktopSupport" , "Number Of Tickets", "Cost Per Tickets", "Cost Per Annum"],
      data: withoutAlluvio.L1DesktopSupport
    },
    {
      name: ["L2DesktopSupport" , "Number Of Tickets", "Cost Per Tickets", "Cost Per Annum"],
      data: withoutAlluvio.L2DesktopSupport
    },
    {
      name: ["L3DesktopSupport" , "Number Of Tickets", "Cost Per Tickets", "Cost Per Annum"],
      data: withoutAlluvio.L3DesktopSupport
    },
    {
      name: ["Device Refresh", "Number of Device on 4 Year cylce", "Cost Per Device", "costPerAnnum"],
      data: withoutAlluvio.DeviceRefresh
    },
    {
      name: ["Software License", "No Of Users", "Cost Of Software", "costPerAnnum"],
      data: withoutAlluvio.softwareLicence
    },
    {
      name: ["User Productivity", "Wait Time Hrs", "Cost Per Hour", "costPerAnnum"],
      data: withoutAlluvio.userProductivity
    }
  ]
  const savingsFormat = Object.keys(savings).map(key => ({
     name:Object.keys(key),
     data: savings[key]
  }));
  return (
    <>
      {
        isLoading ?
          <div style={{display:"flex",justifyContent:"center",marginTop:"64px"}}>
            <img src={dataNotFoundImage} width="92px"></img>
          </div>
          :
          <div style={{ display: "flex", alignItems: "center", flexDirection: "column", gap: "12px", width: "100%", marginTop: "50px" }}>
            <div style={{ display: 'flex', flexDirection: "row", gap: "10px", width: "80%" }}>
              {['Without Alluvio Aternity', 'With Alluvio Aternity', 'Saving'].map((item, index) => (
                <Grid style={{ width: "100%" }} >
                  <Item
                    style={activeTab === index ? {
                      cursor: "pointer",
                      color: "#ffffff",
                      backgroundColor: "#4e4fa9",
                    } : { cursor: "pointer" }}
                    onClick={() => handleClick(item, index)}
                  >{item}</Item>
                </Grid>
              ))}
            </div>

            {
              activeTab == 2 &&
              <>
              {
              savingsFormat.map((item)=>{
                return(
               <Roisaving savings={item}/>
                )
              })}
              </>
            }
            {
              activeTab == 1 &&
              <>
                {withAlluvioFormat.map((item) => {
                  return (
                    <ChildTable withAlluvio={item} />
                  )
                })}
              </>
            }
            {
              activeTab == 0 &&
              <>
                {withoutAlluvioFormat.map((item) => {
                  return (
                    <ChildTable withAlluvio={item} />
                  )
                })}
              </>
            }
          
          </div>
      }
    </>
  )
}

export default CalculateSaving;
