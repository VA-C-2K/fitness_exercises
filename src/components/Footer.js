import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const Footer = () => (
  <Box mt="50px" bgcolor="#FFF3F4" width="100%">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="30px" pt="20px">
    <Typography sx={{ color:"#FF2625", fontFamily:'Amita',fontWeight:"500",fontSize:{lg:'46px',xs:'26px'} }} mt="20px" mb="30px">Jagdamb </Typography>
    </Stack>
    <Stack justifyContent="space-evenly" direction="row">
      <a
        className='social-icon-link linkedin'
        href='https://www.linkedin.com/in/viraj-agharkar-1232k/'
        target='_blank'
        aria-label='LinkedIn'
        rel="noopener noreferrer"
      >
        <Typography sx={{ color:"#000",fontWeight:"500",fontSize:{lg:'22px',xs:'12px'} }}>
        <i className='fab fa-linkedin'/>
        </Typography>
      </a>
      <a
        className='social-icon-link youtube'
        href='https://www.youtube.com/channel/UCB_ZNGblkA5Nx-3UEjPPkfA'
        target='_blank'
        aria-label='YouTube'
        rel="noopener noreferrer"
      >
        <Typography sx={{ color:"#000",fontWeight:"500",fontSize:{lg:'22px',xs:'12px'} }}>
          <i className='fab fa-youtube' />
        </Typography>
      </a>
      <Typography sx={{ color:"#000",fontWeight:"500",fontSize:{lg:'22px',xs:'12px'} }}>VA_C_2K© 2022</Typography>
      <a
        className='social-icon-link instagram'
        href='https://www.instagram.com/vac_2k'
        target='_blank'
        rel="noopener noreferrer"
        aria-label='Instagram'
      >
        <Typography sx={{ color:"#000",fontWeight:"500",fontSize:{lg:'22px',xs:'12px'} }}>
          <i className='fab fa-instagram' />
        </Typography>
      </a>
      <a
        className='social-icon-link github'
        href='https://github.com/VA-C-2K'
        target='_blank'
        rel="noopener noreferrer"
        aria-label='GitHub'
      >
        <Typography sx={{ color:"#000",fontWeight:"500",fontSize:{lg:'22px',xs:'12px'} }}>
          <i className='fab fa-github' />
        </Typography>
      </a>
      </Stack>
    </Box>
);

export default Footer;