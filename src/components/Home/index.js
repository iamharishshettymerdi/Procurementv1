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
import { useEffect, useState } from "react";
import axios  from "axios";
import { styled } from '@mui/material/styles';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const HomeComponent=()=>{

    const [products,setProduct]=useState([])
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
        <Navbar/>
    <img src={mainimage} style={{maxWidth: '100%',
  height: '400px',width:'100%'}}/>

{buztype.map((m,index)=>
    <Card key={index} sx={{ minWidth: 240 ,width:100,display: 'inline-block',margin:1,
    height: 200,backgroundColor: '#CCCCFF'
}}>
    <CardContent>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {m.name}
      </Typography>
      <Typography variant="body2">
        {m.description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Register</Button>
    </CardActions>
  </Card>

)}
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
        {m.description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">View More</Button>
    </CardActions>
  </Card>

  )}
        </Box>

     </Container>
    </>)
}
export default HomeComponent;