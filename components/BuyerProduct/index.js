import Navbar from "../Layout/Navbar";
import Sidebar from "../Layout/Sidebar";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

//start 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import PublicIcon from '@mui/icons-material/Public';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

import Notification from "../MessagePopup";
import { useState } from "react";
const BuyerProduct=()=>{

    const [openpop,setopen]=useState(false);
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        color: theme.palette.text.secondary,
        boxShadow: 'none',
      }));

    const submitData=(e)=>{
        console.log("Submitted")
        e.preventDefault();
        setopen(true)
    }

    return <>
    <Navbar/>
    <Sidebar title="Create Product"/>

    <Card sx={{ minWidth: 100,margin:'auto',width:'65%'}}>
      <CardContent>
      <Grid container spacing={2}>
        <Grid item xs={6} >
          <Item>
            <label htmlFor="Productname" style={{width: '150px',
    display: 'inline-block'}}>Product name</label>
            <TextField  hiddenLabel id="Productname" variant="outlined" size="small"/>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <label htmlFor="Productname"  style={{width: '150px',
    display: 'inline-block'}}>Product Code</label>
            <TextField  hiddenLabel id="Productname" variant="outlined" size="small"/>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <label htmlFor="Productname"  style={{width: '150px',
    display: 'inline-block'}}>Product Description</label>
            <TextField  hiddenLabel id="Productname" variant="outlined" size="small"  multiline
          rows={4} fullWidth />
          </Item>
        </Grid>

        <Grid item xs={6}>
          <Item>
            <label htmlFor="Productname" style={{width: '150px',
    display: 'inline-block'}}>Product Quantity</label>
            <TextField  hiddenLabel id="Productname" variant="outlined" size="small"/>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <label htmlFor="Productname"  style={{width: '150px',
    display: 'inline-block'}}>Product Department</label>
            <TextField  hiddenLabel id="Productname" variant="outlined" size="small"/>
          </Item>
        </Grid>

        <Grid item xs={6}>
          <Item>
            <label htmlFor="Productname" style={{width: '150px',
    display: 'inline-block'}}>Product Category</label>
            <TextField  hiddenLabel id="Productname" variant="outlined" size="small"/>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <label htmlFor="Productname"  style={{width: '150px',
    display: 'inline-block'}}>UOM</label>
            <TextField  hiddenLabel id="Productname" variant="outlined" size="small"/>
          </Item>
        </Grid>

        <Grid item xs={6}>
          <Item>
            <label htmlFor="Productname" style={{width: '150px',
    display: 'inline-block'}}>Payment Term</label>
            <TextField  hiddenLabel id="Productname" variant="outlined" size="small"/>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <label htmlFor="Productname"  style={{width: '150px',
    display: 'inline-block'}}>Delivery Term</label>
            <TextField  hiddenLabel id="Productname" variant="outlined" size="small"/>
          </Item>
        </Grid>
      </Grid>
      <Box>
      <Stack direction="row" spacing={2} sx={{m:3,float: 'right'}}>
      <Button variant="outlined" startIcon={<PublicIcon />} onClick={(event)=>submitData(event)}>
            Post Publicly
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
            Send to vendors
        </Button>
      </Stack>
       
      </Box>
     
      </CardContent>
    </Card>

    {openpop && <Notification message="Product Added Waitng for Approval" closePOPup={(val)=>{console.log("Val ",val),setopen(val)}}/>}

    </>
}
export default BuyerProduct;