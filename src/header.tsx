import { ShoppingCart } from "@mui/icons-material";
import { Box, Tooltip } from "@mui/material";
import { NavLink } from "react-router-dom";





export default function Header() {
  

  return (  <Box sx={{background: 'black', color: 'white', width: '100%', display:'flex', flexDirection: 'column' ,justifyContent:'center', alignItems: 'center', height:'7rem', }}>
  <Box sx={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}> 
    <Box sx={{marginLeft: 'auto', fontSize: '40px'}}>SNÖSKOTERSHOPPEN </Box>
      <Box sx={{  color: 'Grey', fontSize:'2rem', marginLeft: 'auto', marginRight: '1rem'}}>
        <Tooltip title="Kundvagn">
            <NavLink to="./confirmorder"><ShoppingCart />
            </NavLink>
          </Tooltip>
      </Box>
      
  </Box>


  <Box sx={{width: '100%', display: 'flex', justifyContent: 'space-between', padding: '0 1rem', textDecoration: 'none', color: 'white'}}>
    <NavLink to="./">Start</NavLink>
    <NavLink to="./confirmbooking">Kassa</NavLink>
    <NavLink to="./admin">Admin</NavLink>
    

  </Box>
       
  </Box>
  )
}