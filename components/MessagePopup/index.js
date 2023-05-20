import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import React, { useEffect, useState } from 'react';
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  
const Notification=(props)=>{
    console.log("renders ")
    const [open,setopen]=useState(true)
    const handleClosesuccess = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setopen(false);
        props.closePOPup(false);
      };

    return <>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClosesuccess}  anchorOrigin={{  vertical: 'top', horizontal: 'right' }}>
        <Alert onClose={()=>{setopen(false),props.closePOPup(false);}} severity="success" sx={{ width: '100%' }}>
          {props.message}
        </Alert>
      </Snackbar>
    </>
}
export default Notification;