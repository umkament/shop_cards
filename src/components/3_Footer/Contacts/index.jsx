import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from "@mui/material/IconButton";



export const Contacts = () => {
  return (
         <div className='footer'>
           <IconButton>
             <FacebookIcon/>
           </IconButton>
           <IconButton>
             <InstagramIcon/>
           </IconButton>
           <IconButton>
             <TwitterIcon/>
           </IconButton>
           <IconButton>
             <GitHubIcon/>
           </IconButton>
           <IconButton>
             <LinkedInIcon/>
           </IconButton>
         </div>
  )
}