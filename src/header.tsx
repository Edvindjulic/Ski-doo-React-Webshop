import { ShoppingCart } from "@mui/icons-material";
import { Box, Tab, Tooltip } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

interface LinkTabProps {
  label?: string;
  href?: string;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      sx={{color: 'white'}}
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}


export default function Header() {
  
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (  <Box sx={{background: 'black', color: 'white', width: '100%', display:'flex', flexDirection: 'column' ,justifyContent:'center', alignItems: 'center', height:'7rem', }}>
  <Box sx={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}> 
    <Box sx={{marginLeft: 'auto', fontSize: '40px'}}>SNÖSKOTERSHOPPEN </Box>
      <Tooltip title="Kundvagn">
        <ShoppingCart sx={{  color: 'Grey', fontSize:'2rem', marginLeft: 'auto', marginRight: '1rem',}}
        />
      </Tooltip>
  </Box>


  <Box sx={{width: '100%', display: 'flex', justifyContent: 'space-between', padding: '0 1rem', textDecoration: 'none', color: 'white'}}>
    <NavLink to="./">Start</NavLink>
    <NavLink to="./confirmbooking">Kassa</NavLink>
    <NavLink to="./admin">Admin</NavLink>
    

  </Box>
       
  </Box>
  )
}