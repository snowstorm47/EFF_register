import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';
import Link from 'next/link';
import SignUp from '../authentication/signup';

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    marginTop:"3rem",
    marginLeft:"9rem",
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));
  

const Getstarted_button = () => {
    return ( 
        <Link href='/authentication/signup'>
       <ColorButton variant="contained">Get Started</ColorButton>
        </Link>
     );
}
 
export default Getstarted_button;