
import { useState } from "react";
import Navbar from "../../components/Layout/Navbar";
import ReactDOM  from "react-dom";
import NestedModal from "../../components/LoginComponent";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Sidebar from "../../components/Layout/Sidebar";

import livebidlist from '../../localJson/livebidlist.json'
import React from "react";
const Livebidding=(props)=>{

    const [open,setOpen]=useState(false);
    const [expanded, setExpanded] = useState(false);
    const clickfun=()=>{
      console.log("clicked ")
      increment();
    }

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
    return <>
        <Navbar openlogin={(val)=>{console.log("setopen value changed ");setOpen(val)}}/>
      <Sidebar title="Live Bidding"/>
        { open ? <NestedModal modalopenstatus={(val)=>{setOpen(val)}}/>:null}
    </>
}
export default Livebidding;