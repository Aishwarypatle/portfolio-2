'use client'
import { Box, Button, Card, Grid} from '@mui/material'
import { SocialMenu } from '../../constant/constant'
import React from 'react'


const Foooter = () => {
  const handleClick = (link) => {
    link?.includes("@") ? window.location.href = 'mailto:' + link : window.open(link,"_blank"); 
  }
  return (
        <>
          <Box className='bg-slate-900 w-screen p-10'>
            <Grid container direction={"row"} justifyContent={"center"}>
              {
                SocialMenu?.map((item,index) => (
                    <Button key={index} onClick={() => handleClick(item?.link)}>
                        {item?.icon}
                    </Button>
                ))
              }
            </Grid>
            <p className='flex justify-center text-white mt-2 font-sans'>harshal&nbsp;&nbsp;©&nbsp;&nbsp;2024</p>
          </Box>
        </>
  )
}

export default Foooter
