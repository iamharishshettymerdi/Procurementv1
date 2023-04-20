import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import CloseIcon from '@mui/icons-material/Close';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  width:'60%'
};

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Forgot Password</Button>
     
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">Text in a child modal</h2>
          <p id="child-modal-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function NestedModal(props) {


    const [userdetails,setuserdetails]=React.useState({
        fname:'',
        lname:'',
        email:'',
        phone:'',
        password:''
    })
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(true);
      };
    const formonchange=(event)=>{
        // console.log(event.target.id)
        const elename=event.target.id;
        const elevalue=event.target.value;
        setuserdetails((prev)=>
        {
            return {...prev,[elename]:elevalue}
        })

        console.log(userdetails)
    }


    const userdetailssubmit=()=>{
       
        console.log("submited")
        console.log(userdetails)
        setOpen(true);
        // closemodalbtncliked();
    }
    const handleClosesuccess = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };

    const [isOpen, setIsOpen] = React.useState(true);
  const handleClose = () => {
    setIsOpen(false);
  };

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const closemodalbtncliked=()=>{
    props.modalopenstatus(false);
  }

  return (
    <div>
      {isOpen}
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style,maxWidth:450}}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                <div style={{width: '100%',textAlign: 'end'}}>
                <CloseIcon style={{cursor:'pointer'}} onClick={closemodalbtncliked}/>
                </div>
                <div>
                <form >
                <TextField id="fname" label="First Name" variant="standard" sx={{margin:'5px 10px'}} onChange={(event)=>formonchange(event)}/>
                <TextField id="lname" label="Last Name" variant="standard" sx={{margin:'5px 10px'}} onChange={(event)=>formonchange(event)}/>
                <TextField id="email" label="Email" variant="standard"  sx={{margin:'5px 10px'}} onChange={(event)=>formonchange(event)}/>
                <TextField id="phone" label="Phone Number" variant="standard"  sx={{margin:'5px 10px'}} onChange={(event)=>formonchange(event)}/>
                <TextField
          id="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
          sx={{margin:'10px 10px'}}
          onChange={(event)=>formonchange(event)}
        />

                    <FormControl sx={{ width: '25ch' }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password" sx={{margin:'0px 10px',padding:'6px'}}>Password</InputLabel>
                    <Input sx={{margin:'5px 10px',padding:'5px'}}
                        id="standard-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                    />
                    </FormControl>
                    
                </form>
              
                </div>
            </Box>
          <ChildModal />
          <Button variant="contained" color="success" sx={{margin: '0px 60px'}} onClick={userdetailssubmit}>Submit</Button>
        </Box>
      </Modal>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClosesuccess}  anchorOrigin={{  vertical: 'top', horizontal: 'right' }}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Registration Success
        </Alert>
      </Snackbar>
    </div>

      );
}