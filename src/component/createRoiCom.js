import React, { useState } from 'react'
import CustomizedSteppers from '../commonComponent/stepper';
import CustomerInfo from './reportDetail/CustomerInfo';
import Spacer from '../commonComponent/spacer';
import CalculateSaving from './reportDetail/CalculateSaving';
import PhaseDeleviry from './reportDetail/phasedelivery';
import { Button, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';
import EnvormentInfo from './reportDetail/EnvormentInfo';
import AdditionalInfo from './reportDetail/additionalInfo';
import Header from '../commonComponent/header';
import { configDetails } from './reportDetail/alldataJson';
import Reportheader from './reportDetail/reportheader';
import TemporaryDrawer from '../commonComponent/Drawer';
import Axois from 'axios'
import Toaster from '../commonComponent/toaster';
import TimeLineRoi from './reportDetail/genrateRoi';
import BasicModal from './RoiEstimate/createRoi';


function CreateRoiCom() {
  const [steps, setSteps] = useState(0)
  const [isLoading, setLoading] = useState(false)
  const [manual, setManual] = useState(false)
  const { inputsdata } = useSelector((state) => state.InputsReducer);
  const [mainSelectedValue, setMainSelectValue] = useState("industryLow")
  const [toaster,setToaster] = useState({
    open:false,
    massage:"",
    msgSaverity:""
  })
  const [GenrateModal, setGenrateModal] = React.useState(false);
  const [inputErrors, setInputErrors] = useState({
    addressPrice: false,
    implementationAndTraining: false,
    licensePrice: false,
    roiName: false,
    roiName2: false,
    roiName3: false,
    roiName4: false,

  });
  const {
    configLicence,
    configServiceDesk,
    configDesktopSupport,
    configHardware,
    configUserProductivity,
    configSoftware,
    reductionInMTR,
    reductionInDesktopSupportTickets,
    reductionInSoftware,
    phasedDelivery,
    reductionInRefresh,
    reductionInWaitTime
  } = configDetails
    const [AdditionalOptions, setAdditionalOptions] = useState(
      {
        "reductionInMTR": {
          "subsYear": { "industryLow": 1 },
          "firstYear": { "industryLow": 1 },
        },
        "reductionInDesktopSupportTickets": {
          "subsYear": { "industryLow": 1 },
          "firstYear": { "industryLow": 1 },
        },
        "reductionInSoftware": {
          "firstYear": { "industryLow": 1 },
        },
        "reductionInRefresh": {
          "firstYear": { "industryLow": 20 },
        },
        "reductionInWaitTime": {
          "firstYear": { "industryLow": 10 },
        }
      }
    );
 
  const initializeSelectedOptions = () => {
    const initialOptions = {
      "deviceRefresh": { "industryLow": 10 },
      "deviceCost": { "industryLow": 10 },
      "tL1Cost": { "industryHigh": 10 },
      "tL2Cost": { "industryHigh": 10 },
      "tL3Cost": { "industryHigh": 10 },
      "noOfL3TicketsPerUM": { "industryAvg": 1 },
      "noOfL2TicketsPerUM": { "industryAvg": 1 },
      "noOfL1TicketsPerUM": { "industryAvg": 1 },
      "desktopSupportTicketPerc": { "industryLow": 4.24 },
      "costPerUser": { "industryHigh": 1 },
      "avgTimeSpentonPc": { "industryHigh": 1 },
      "waitTime": { "industryLow": 1 },
      "hourlyPrice": { "industryLow": 1 },
      "noOfEps": {
        "industryAvg": 1
      },
      "licenceTerm": {
        "industryAvg": 1
      },
      "desktopSupport": { "industryAvg": 1 },
      "deviceRefresh": { "industryAvg": 1 },
      "softwareLicence": { "industryAvg": 1 },
      "userProductivity": { "industryAvg": 1 },
    }
    for (const key in initialOptions) {
      if (phasedDelivery && phasedDelivery[key]) {
        initialOptions[key] = phasedDelivery[key][0];
      }
      if (configServiceDesk && configServiceDesk[key]) {
        initialOptions[key] = configServiceDesk[key][0];
      } else if (configDesktopSupport && configDesktopSupport[key]) {
        initialOptions[key] = configDesktopSupport[key][0];
      }
      else if (configHardware && configHardware[key]) {
        initialOptions[key] = configHardware[key][0];
      }
      else if (configSoftware && configSoftware[key]) {
        initialOptions[key] = configSoftware[key][0];
      }
      else if (configUserProductivity && configUserProductivity[key]) {
        initialOptions[key] = configUserProductivity[key][0];
      }
    }

    return initialOptions;
  };
  const [selectedOptions, setSelectedOptions] = useState(initializeSelectedOptions);

  const customerInformation = [
    {
      name: "ROI"
    },
    {
      name: "Customer"
    },
    {
      name: "License",
      configLicence: configLicence
    }
  ]
  const EnvoermentInformation = [
    {
      name: "Service Desk",
      configServiceDesk: configServiceDesk
    },
    {
      name: "Desktop Support",
      configDesktopSupport: configDesktopSupport
    },
    {
      name: "Hardware",
      configHardware: configHardware
    },
    {
      name: "Software",
      configSoftware: configSoftware
    },
    {
      name: "Productivity",
      configUserProductivity: configUserProductivity
    }
  ]
  // mocked data for envorment info
  const AdditionalInformation = [
    { name: "reductionInMTR", reductionInMTR: reductionInMTR },
    { name: "reductionInDesktopSupportTickets", reductionInDesktopSupportTickets: reductionInDesktopSupportTickets },
    { name: "reductionInSoftware", reductionInSoftware: reductionInSoftware },
    { name: "reductionInRefresh", reductionInRefresh: reductionInRefresh },
    { name: "reductionInWaitTime", reductionInWaitTime: reductionInWaitTime }
  ];
  const PhaseDel = [
    { name: "Reduction in MTTR", phasedDelivery: phasedDelivery },
  ]
  const sumbitData = () => {
        
    if (steps == 0) {
      if (checkValidation()) {
        const customerInfo = {
          name: inputsdata.customerName,
          contactName: inputsdata.contactName,
          employees: parseInt(inputsdata.numberOfEps),
          eps: (Object.values(selectedOptions["noOfEps"])[0]),
          date: inputsdata.date,
          licenceTerm: (Object.values(selectedOptions["licenceTerm"])[0]),
          licencePrice: inputsdata.licencePrice,
          addonPrice: parseInt(inputsdata.addOnPrice),
          impleandTraining: parseInt(inputsdata.Implementationandtraining),
          residentPs: parseInt(inputsdata.residentPs),
          roiName: inputsdata.roiName
        }
        let url = "http://localhost:8000/api/customer/create"

        callRoiApis(url, customerInfo)
      }
    }
    if (steps == 1 && checkValidation()) {
      const EnvormentInfo = {
        roiId: JSON.parse(localStorage.getItem("roiId")),
        l1TicketCost: (Object.values(selectedOptions["tL1Cost"])[0]),
        l2TicketCost: (Object.values(selectedOptions["tL2Cost"])[0]),
        l3TicketCost: (Object.values(selectedOptions["tL3Cost"])[0]),
        noOfL1Tickets: (Object.values(selectedOptions["noOfL1TicketsPerUM"])[0]),
        noOfL2Tickets: (Object.values(selectedOptions["noOfL2TicketsPerUM"])[0]),
        noOfL3Tickets: (Object.values(selectedOptions["noOfL3TicketsPerUM"])[0]),
        percentDeskSupportTicket: (Object.values(selectedOptions["desktopSupportTicketPerc"])[0]),
        cost: (Object.values(selectedOptions["deviceCost"])[0]),
        hardwareRefresh: (Object.values(selectedOptions["deviceRefresh"])[0]),
        costPerUser: (Object.values(selectedOptions["costPerUser"])[0]),
        waitTime: (Object.values(selectedOptions["waitTime"])[0]),
        avgTimeSpent: (Object.values(selectedOptions["avgTimeSpentonPc"])[0]),
        hourlyPrice: (Object.values(selectedOptions["hourlyPrice"])[0]),
      };
      let url = "http://localhost:8000/api/product/addEnv"
      callRoiApis(url, EnvormentInfo)
    }
    if (steps == 2 && checkValidation()) {
      const additionalInfoValue = {
        roiId: JSON.parse(localStorage.getItem("roiId")),
        mttr: {
          firstYear: (Object.values(AdditionalOptions["reductionInMTR"]["firstYear"])[0]),
          subsYear: (Object.values(AdditionalOptions["reductionInMTR"]["subsYear"])[0]),
        },
        desktopSupportTickets: {
          firstYear: (Object.values(AdditionalOptions["reductionInDesktopSupportTickets"]["firstYear"])[0]),
          subsYear: (Object.values(AdditionalOptions["reductionInDesktopSupportTickets"]["subsYear"])[0])
        },

        refresh: (Object.values(AdditionalOptions["reductionInRefresh"]["firstYear"])[0]),
        software: (Object.values(AdditionalOptions["reductionInSoftware"]["firstYear"])[0]),
        waitTime: (Object.values(AdditionalOptions["reductionInWaitTime"]["firstYear"])[0])
      };
      let url = "http://localhost:8000/api/product/additionals"
      callRoiApis(url, additionalInfoValue)
    }
    if (steps == 3 && checkValidation()) {
      let phasevalue =
      {
        roiId: JSON.parse(localStorage.getItem("roiId")),
        deskSupport: (Object.values(selectedOptions["desktopSupport"])[0]),
        deviceRefresh: (Object.values(selectedOptions["deviceRefresh"])[0]),
        softwareLicence: (Object.values(selectedOptions["softwareLicence"])[0]),
        userProductivity: (Object.values(selectedOptions["userProductivity"])[0])

      }
      callRoiApis("http://localhost:8000/api/product/phase", phasevalue)
    }
    if(steps==4){
      setGenrateModal(true)
    }
  }
  const checkValidation = () => {
    let isValid = true;
    if(steps==0){
    let errors = { ...inputErrors };
  
    const requiredFields = [
      'Implementationandtraining',
      'licensePrice',
      'roiName',
      'customerName',
      'contactName',
      'numberOfEps'
    ];
  
    const regex = /^[A-Za-z]+$/;
  
    requiredFields.forEach(field => {
      if (inputsdata[field] === "" && typeof(inputsdata[field]) === "string") {
        errors[field] = true;
        isValid = false;
        setToaster({
          open:true,
          massage:"Please Check All Inputs",
          msgSaverity:"error"
        })
      } else if (['roiName', 'customerName', 'contactName'].includes(field) && !regex.test(inputsdata[field])) {
        errors[field] = true;
        isValid = false;
      } else {
        errors[field] = false;
      }
    });
  
    setInputErrors(errors);
  }
  if(steps==1 || steps==3){
    Object.keys(selectedOptions).forEach((item) => {
      const value = Object.values(selectedOptions[item])
      if (isNaN(...value)) {
        isValid = false;
      }
    });
  }
  if(steps==2){
    Object.keys(AdditionalOptions).forEach((key) => {
      Object.keys(AdditionalOptions[key]).forEach((subKey) => {
        const industryLowValue = Object.values(AdditionalOptions[key][subKey])
        if (isNaN(...industryLowValue)) { 
          isValid = false;
        }
      });
    });
  }
    return isValid;
  };
  

  const callRoiApis = async (url, data) => {
    try{
    const apisColletion = await Axois.post(url, data)
      console.log(apisColletion,"apisColletion")
    if(apisColletion.status==200){
      if(steps==0){
        localStorage.setItem("roiId",JSON.stringify(apisColletion.data.roiId))
      }
      setToaster({
        open:true,
        massage: apisColletion.data.message  ?? "Data inserted succesfully",
        msgSaverity:"success"
      })
      setSteps(steps+1)
    }
  }
  catch(error){
    setToaster({
      open:true,
      massage: error?.response?.data?.error ?? "error",
      msgSaverity:"error"
    }) 
     }
     setTimeout(() => {
      setToaster({open:false});
    }, 3000)
  }
  
  const handleChangeInput=(e,item,parObj)=>{
    const { value } = e.target;
    if(steps==2){
      setAdditionalOptions(prevState => ({
        ...prevState,
        [parObj]: {
          ...prevState[parObj],
          [item]: {
            ...prevState[parObj][item],
            manual: parseFloat(value)
          }
        }
      }));
    }
  else{
    setSelectedOptions(prevState => ({
      ...prevState,
      [item]: {
        ...prevState[item], 
        manual: parseFloat(value)
      }
    }));
  }
}
 ;
  const handleChange = (event, selector, ParentObj) => {
    const selectedValue = event.target.value;
    if (selector == 'Assumptions') {
      setMainSelectValue(selectedValue)
      setManual(true)
      // [configServiceDesk,configDesktopSupport,configHardware,
      //   configSoftware,configUserProductivity]
      const updatedOptions = Object.keys(selectedOptions).reduce((acc, key, index) => {
        if (typeof selectedOptions[key] === 'object') {
          acc[key] = selectedValue=="manaul" ?  { manual: "" } : { [selectedValue]: selectedOptions[key][Object.keys(selectedOptions[key])[0]] };
        } else {
          acc[key] = selectedValue;
        }
        return acc;
      }, {});
      setSelectedOptions(updatedOptions);
      return true
    }
    if(selector == "additionAssumptions"){
      setMainSelectValue(selectedValue);
      const updatedOptions = Object.keys(AdditionalOptions).reduce((acc, key) => {
        const innerKeys = Object.keys(AdditionalOptions[key]);
        acc[key] = innerKeys.reduce((innerAcc, innerKey) => {
          const optionKeys = ["industryHigh","industryAvg","industryLow","manual",]
          if (optionKeys.includes(selectedValue)) {
            innerAcc[innerKey] = { [selectedValue]: AdditionalOptions[key][innerKey][selectedValue] };
          } else {
            innerAcc[innerKey] = AdditionalOptions[key][innerKey];
          }
          return innerAcc;
        }, {});
        return acc;
      }, {});    
      setAdditionalOptions(updatedOptions);
      return true;
    }
    else {
      let configToUpdate;
      switch (ParentObj) {
        case "License":
          configToUpdate = configLicence;
          break;
        case "Service Desk":
          configToUpdate = configServiceDesk;
          break;
        case "Desktop Support":
          configToUpdate = configDesktopSupport;
          break;
        case "Hardware":
          configToUpdate = configHardware;
          break;
        case "Software":
          configToUpdate = configSoftware;
          break;
        case "Productivity":
          configToUpdate = configUserProductivity;
          break;
        case "start_month":
          configToUpdate = phasedDelivery
          break;
          case "reductionInMTR":
          configToUpdate = reductionInMTR;
          break;
        case "reductionInDesktopSupportTickets":
          configToUpdate = reductionInDesktopSupportTickets
          break;
        case "reductionInSoftware":
          configToUpdate = reductionInSoftware
          break;
        case "reductionInRefresh":
          configToUpdate = reductionInRefresh
          break;
        case "reductionInWaitTime":
           configToUpdate = reductionInWaitTime
           break;
        default:
          configToUpdate = {};
          break;
      }
     { 
      steps===2 ?
      setAdditionalOptions(prevOptions => ({
        ...prevOptions,
        [ParentObj]: {
          ...prevOptions[ParentObj],
          [selector]: selectedValue === 'manual' ? { manual: "" } : {
            [selectedValue]: configToUpdate[selector].find(obj => Object.keys(obj)[0] === selectedValue)[selectedValue]
          }
        }
      }))
      :
      setSelectedOptions(prevState => ({
        ...prevState,
        [selector]: selectedValue === 'manual'
          ? { manual: "" }: {
            [selectedValue]: configToUpdate[selector].find(obj => Object.keys(obj)[0] === selectedValue)[selectedValue]
          },
      }));}
    }
  };
  return (
    <div>
      <TemporaryDrawer />
      <Header />
      {steps != 4 &&
      <Toaster setToaster={setToaster} toaster={toaster}/>
   }
      <div style={{ overflow: 'auto', overflowX: "hidden", maxHeight: 'calc(100vh - 50px)' }}>      {
        isLoading ?
          <div style={{ display: "flex", height: "100%", justifyContent: "center", marginTop: '100px' }}>
            <CircularProgress style={{ marginTop: "16%" }} />
          </div>
          :
          <>
            <CustomizedSteppers steps={steps} setSteps={setSteps} />
            {steps == 0 &&
              <div style={{ marginTop: "43px", marginLeft: "58px" }}>
                 <Reportheader
                    mainSelectedValue={mainSelectedValue}
                    handleChange={handleChange} 
                    headingName={'Create New ROI'}
                  />
                    <Spacer height={20} />
                {
                  customerInformation.map((item) => {
                    return (
                      <>
                        <CustomerInfo
                          errorName={inputErrors} item={item}
                          selectedOptions={selectedOptions}
                          handleChange={handleChange}
                          handleChangeInput={handleChangeInput}
                        />
                        <Spacer height={20} />
                      </>
                    )
                  })
                }
              </div>
            }
            {steps == 1 &&
              <div style={{ marginTop: "43px", marginLeft: "58px" }}>
                <Reportheader 
                   mainSelectedValue={mainSelectedValue}
                   handleChange={handleChange} 
                   Assumptions={'Assumptions'}
                   headingName={'Without Alluvio Aternity'}
                  />
                <Spacer height={20} />
                {
                  EnvoermentInformation.map((item, index) => {
                    return (
                      <>
                        <EnvormentInfo 
                        manual={manual} 
                        handleChangeInput={handleChangeInput}
                        selectedOptions={selectedOptions} 
                        setSelectedOptions={setSelectedOptions}
                        handleChange={handleChange} 
                        envprops={item} 
                        index={index}
                         />
                        <Spacer height={20} />
                      </>
                    )
                  })
                }
              </div>
            }
            {steps == 2 &&
              <div style={{ marginTop: "43px", marginLeft: "58px" }}>
                <Reportheader
                    mainSelectedValue={mainSelectedValue}
                    handleChange={handleChange} 
                    Assumptions={'additionAssumptions'}
                    headingName={'Difference with Alluvio Aternity'}

                  />
                    <Spacer height={20} />
                {
                  AdditionalInformation.map((item) => {
                    return (
                      <div>
                        <AdditionalInfo 
                           handleChangeInput={handleChangeInput}
                           setAdditionalOptions={setAdditionalOptions}
                           handleChange={handleChange} 
                           AdditionalOptions={AdditionalOptions}
                           Addtionalprops={item} 
                          />
                        <Spacer height={20} />
                      </div>
                    )
                  })
                }
              </div>
            }
            {steps == 3 &&
              <div style={{ marginTop: "43px", marginLeft: "58px" }}>
                <PhaseDeleviry
                  steps={steps}
                  mainSelectedValue={mainSelectedValue}
                  PhaseDel={PhaseDel}
                  manual={manual} 
                  selectedOptions={selectedOptions}
                  handleChange={handleChange}
                  handleChangeInput={handleChangeInput}
                />
              </div>
            }
            {
              steps == 4 &&
              <CalculateSaving />
            }
  
        {
              steps == 5&& 
              <>
              <TimeLineRoi />
              </>

            }
          <BasicModal steps={steps} setSteps={setSteps} GenrateModal={GenrateModal} setGenrateModal={setGenrateModal}/>
          </>
      
      }
      </div>
   { steps!==5 &&
     <div style={{ display: "flex", justifyContent: "flex-end", marginRight: "40px", gap: "10px" }}>
        <Button style={{ height: "24px", width: "104px", fontSize: "11px", borderRadius: "12px", textTransform: "none" }} variant="outlined" disabled={steps == 0 ? true : false} onClick={() => setSteps(steps - 1)}>Back</Button>
        {
          steps == 4 ?
            <Button style={{ height: "24px", width: "140px", fontSize: "11px", backgroundColor: "#e10098", borderRadius: "12px", textTransform: "none" }} variant="contained" disabled={steps == 5 ? true : false} onClick={() => sumbitData()}>Generate Roi Report</Button>
            :
            <Button style={{ height: "24px", width: "104px", fontSize: "11px", backgroundColor: "#584bae", borderRadius: "12px", textTransform: "none" }} variant="contained" disabled={steps == 5 ? true : false} onClick={() => sumbitData()}>Next</Button>

        }
      </div>
      }
    </div>
  )
}

export default CreateRoiCom
