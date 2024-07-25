import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 514,
  bgcolor: 'background.paper',
  borderRadius: '15px',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({steps,setSteps,GenrateModal,setGenrateModal,setLoading}) {
  const handleGenrate = () =>{
    setSteps(steps+1)
    setGenrateModal(false); 
    GenrateRoiApi()
  }
  async function GenrateRoiApi(){
    try{
    let roiId = JSON.parse(localStorage.getItem("roiId"))
    let res = await Axios.post("http://localhost:8000/api/product/calcTimeline",{roiId:roiId})
    if(res.status==200){
      setLoading(true)
     let timeLineRes =  await Axios.post("http://localhost:8000/api/product/roi",{roiId:roiId})
    if(timeLineRes.status==200){
      setLoading(false)
    }
    }
  }
  catch(error){
  }
  }
  const handleClose = () => setGenrateModal(false);
  return (
    <div>
      <Modal
        open={GenrateModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
             Are you sure?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Are you sure you want to genrate ROI report of this estimate? you can 
            not edit it once ROI is genrated
          </Typography>
          <Box style={{display:"flex",justifyContent:"right",marginTop:"20px",gap:"10px"}}>
          <Button style={{ height: "24px", width: "110px", fontSize: "11px", backgroundColor: "#e10098", borderRadius: "12px", textTransform: "none" }} variant="contained"  onClick={handleClose}>No,Cancel</Button>
          <Button style={{ height: "24px", width: "104px", fontSize: "11px", backgroundColor: "#584bae", borderRadius: "12px", textTransform: "none" }} variant="contained"  onClick={handleGenrate}>Yes,I'Sure</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}


