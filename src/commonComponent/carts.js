import * as React from 'react';
import { Card } from '@mui/material';
import Bagedwithtitle from './Bagedwitht';



export default function BasicCard({ groupsIcon, component, headerContent, propWidth, propHeight,downloadPDF,downloadId}) {

  return (
    <Card sx={{ maxWidth: propWidth, height: propHeight, borderRadius: "35px", display: "flex", justifyContent: "center", flexDirection: "column" }}>
      <Bagedwithtitle
        groupsIcon={groupsIcon}
        headerContent={headerContent}
        downloadPDF={downloadPDF}
        downloadId={downloadId}
      />
      {component}
    </Card>
  );
}




