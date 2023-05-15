import Navbar from "../Layout/Navbar";
import mainimage from '../../assets/mainimage.jpg'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import buztype from '../../local_json/business_type.json'
import React, { useEffect, useState } from "react";
import ReactDOM  from "react-dom";
import axios  from "axios";
import { styled } from '@mui/material/styles';
import NestedModal from "../Logincomponent";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const HomeComponent=()=>{

    const [products,setProduct]=useState([])
    const [open,setOpen]=useState(false);
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => {
        setOpenModal(!openModal);
    }
    console.log("home index file renders")
    async function getProducts()
    {
        const productresponse=await axios.get("https://dummyjson.com/products")
        .catch((err)=>console.log(err))
        setProduct(productresponse.data.products)
       
    }
    useEffect(()=>{
        getProducts()
        console.log("products ",products)
    },[])

    return(<>
     <Container maxWidth="xl">
        <Box>
        <Navbar openlogin={(val)=>{console.log("setopen value changed ");setOpen(val)}}/>
    <img src={mainimage} style={{maxWidth: '100%',
  height: '400px',width:'100%'}}/>
  
  <Box >
  <Grid container spacing={10}>
    {buztype.map((m,index)=>
      <Grid item xs={12} md>
          <Item>
            <Card key={index} sx={{ 
              height: '100%',backgroundColor: '#CCCCFF'}}>
              <CardContent>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {m.name}
                </Typography>
                <Typography variant="body2">
                  {m.description.slice(0,80)}{m.description.split(" ").length>9?'...':''}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={()=>setOpen(true)}>Register</Button>
              </CardActions>
            </Card>
          </Item>
    </Grid>
    )}

</Grid>
  </Box>

<h3>Products</h3>

  {products.map((m,index)=>
    <Card key={index} sx={{ minWidth: 240 ,width:100,display: 'inline-block',margin:1,
    height: 200,backgroundColor: '#CCCCFF'
}}>
    <CardContent>
        <img src={m.images[0]} height={100} width={200}/>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {m.title}
      </Typography>
      <Typography variant="body2">
        {m.description.slice(0,80)}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">View More</Button>
    </CardActions>
  </Card>
  )}

        </Box>
     </Container>
     { open && ReactDOM.createPortal(<NestedModal modalopenstatus={(val)=>{setOpen(val)}}/>,document.getElementById('loginpopup'))}
     
    </>)
}
export default HomeComponent;
