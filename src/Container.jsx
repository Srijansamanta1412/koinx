import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import InnerTaxContent from './Tax-Inner-Content';
export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container style={{minWidth:'85vw'}}>
        <Box sx={{ bgcolor: '#cfe8fc', height: 'auto' ,borderRadius:5,padding:3}}>
        <InnerTaxContent></InnerTaxContent>
        </Box>
        
      </Container>
    </React.Fragment>
  );
}
