import React, { useEffect, useState } from 'react'
import Header from './commonComponent/header'
import TemporaryDrawer from './commonComponent/Drawer'
// import LineChartComponent from './commonComponent/lineChart'
import { Box, Grid, Paper, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import BasicCard from './commonComponent/carts';
import Spacer from './commonComponent/spacer';
import LineChartComponent from './commonComponent/lineChart';
import BarChartComponent from './commonComponent/barchart';
import DashboardTable from './component/dashboard/dashboardTable';
import { MenuImage, calculatorImage, MultiUserImage } from './assets/assets';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useNavigate } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Dashboard() {
  const [dashCards, setCards] = useState([{
    count: 64,
    name: "Users"
  },
  {
    count: 44,
    name: "ROIs"
  },
  {
    count: 144,
    name: "Accounts"
  },
  {
    price: "$164M",
    name: "Savings"
  },
  {
    price: "$123M",
    name: "TCV"
  },
  {
    percentage: "523%",
    name: "Average ROI"
  },
  {
    months: "5 Months",
    name: "Average payback"
  }]
  )
  const [isHovered, setIsHovered] = useState(false);
  const baseStyle = {
    height: '70px',
    width: '71px',
    borderRadius: '10px',
    transition: 'opacity 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    opacity: isHovered ? 1 : 0.8,
    cursor: 'pointer',
    boxShadow: isHovered
      ? '0px 4px 8px rgba(0, 0, 0, 0.5)'
      : '0px 2px 4px rgba(0, 0, 0, 0.1)' 
  };
  const downloadPDF = (pdfId) => {
  const input = document.getElementById(pdfId);
  html2canvas(input, { scrollY: -window.scrollY }).then((canvas) => {
    const imgData = canvas.toDataURL('image/png');
    const customPageSize = {
      width: 150,
      height: 190
    };
    const pdf = new jsPDF('p', 'mm',[customPageSize.width,customPageSize.height]);
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();   
    const widthRatio = pageWidth / canvas.width;
    const heightRatio = pageHeight / canvas.height;
    const ratio = widthRatio > heightRatio ? heightRatio : widthRatio;

    const canvasWidth = canvas.width * ratio;
    const canvasHeight = canvas.height * ratio;

    const marginX = (pageWidth - canvasWidth) / 2;
    const marginY = (pageHeight - canvasHeight) / 2;
    pdf.addImage(imgData, 'PNG', marginX, marginY, canvasWidth, canvasHeight);
    pdf.save('document.pdf');
  }); 
};
const navigation = useNavigate()
const [hoveredId, setHoveredId] = useState(null);

  return (
    <div style={{ overflow: "auto", maxHeight: 'calc(100vh - 10px)' }}>
      <Header />
      <TemporaryDrawer />
      <div style={{ marginTop: '95px', marginLeft: "100px" }}>
          <Typography style={{marginBottom:"40px",fontWeight:"bold", marginTop:-10}}>Insights</Typography>
        <Grid container item spacing={3}>
          {dashCards.map((item, index) => {
            const isHovered = hoveredId === index;
            const baseStyle = {
              height: '70px',
              width: '71px',
              borderRadius: '10px',
              transition: 'opacity 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
              opacity: isHovered ? 1 : 0.8,
              cursor: 'pointer',
              boxShadow: isHovered
                ? '0px 4px 8px rgba(0, 0, 0, 0.5)'
                : '0px 2px 4px rgba(0, 0, 0, 0.1)',
            };
            return (
              <Grid item xs={1.7} key={item}>
                <Item
                  style={baseStyle}
                  onMouseEnter={() => setHoveredId(index)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <span style={{ display: "flex", alignItems: "baseline", flexDirection: "column", marginTop: 10 }}>
                    <span style={{ fontSize: 11, fontWeight: 900 }}>{item?.count}</span>
                    <span style={{ fontSize: 11, fontWeight: 900 }}>{item?.months} </span>
                    <span style={{ fontSize: 11, fontWeight: 900 }}>{item?.price}</span>
                    <span style={{ fontSize: 11, fontWeight: 900 }}>{item?.percentage}</span>
                    <span style={{ fontSize: 11 }}>{item.name}</span>
                  </span>
                </Item>
              </Grid>
            );
          })}
        </Grid>
        <Spacer height={50} />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ width: "50%" }}>
            <BasicCard  downloadId="downloadPdf1" propWidth={505} propHeight={270}   downloadPDF={downloadPDF} groupsIcon={MultiUserImage} component={<LineChartComponent />} headerContent="ROIs Over Time" />
          </Box>
          <Box sx={{ width: "50%" }}>
            <BasicCard downloadId="downloadPdf2" propWidth={505} propHeight={270}  downloadPDF={downloadPDF} groupsIcon={calculatorImage} component={<BarChartComponent />} headerContent="Users Over Time" />
          </Box>
        </div>
        <Spacer height={60} />
        <div>
          <BasicCard downloadId="downloadPdf3" propWidth={1100} propHeight={270} downloadPDF={downloadPDF} groupsIcon={MenuImage} component={<DashboardTable />} headerContent="ROIs Over Time" />
        </div>
        <Spacer height={20} />
      </div>
    </div>
  )
}

export default Dashboard
