import React from 'react'
import { downloadImage } from '../assets/assets'

function Bagedwithtitle({ groupsIcon,headerContent,downloadPDF,downloadId}) {
  return (
    <div style={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      marginLeft: "30px",
      justifyContent: "space-between"
    }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img height={20} width={20} style={{ marginRight: "10px",marginTop:"5px" }} src={groupsIcon}/>
        <div style={{marginTop:"-8px"}}>
          <h6 style={{ marginBottom: 0, fontSize: 12 }}>{headerContent}</h6>
          <p style={{ fontSize: 10, marginTop: 0 }}>
            The number of individual users of the ROI Navigator over a period of time
          </p>
        </div>
      </div>
      <div >
          <img style={{ marginLeft: "-34px", cursor:"pointer",position:"relative", zIndex:999}} height={20} width={20} src={downloadImage} onClick={()=>{downloadPDF(downloadId)}} />
      </div>
    </div>
    
  )
}

export default Bagedwithtitle
