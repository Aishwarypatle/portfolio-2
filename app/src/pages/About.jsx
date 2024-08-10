'use client'
import styled from '@emotion/styled'
import { Box, Card, Grid, useTheme } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import user from '../assets/images/user.jpeg'
import "../app/globals.css";
import CustomHeader from '../common/CustomHeader'


const About = () => {
  const theme = useTheme()
  return (
    <Box
      sx={{boxShadow:"none"}}
      className='flex flex-col justify-center items-center w-fit lg:w-full md:w-full'
    >
      <CustomHeader text={"ABOUT"} />
      <Grid container className='mt-10 md:mt-20' direction={"row"} justifyContent={"center"} sx={{zIndex:10}}>
          <Grid item md={4} className='flex justify-center' sm={12}>
            <ImageContainer >
              <Image 
                src={user}
                alt={"Harshal Rahangdale"}
                width={200}
                height={200}
              />
            </ImageContainer>
          </Grid>
          <Grid item md={8} sm={12} sx={{padding:"10px"}}>
            <article className='font-normal text-lime-50 font-mono'>
              Hi, I'm Harshal, a self-taught passionate Software Engineer and a Btech graduate from India, currently learning Java And Cloud technologies . I've made countless side projects and I also posses magical powers of using react to build delightful user interfaces. I also love doing open source development, It gives me a wonderful feeling of achievement and joy which I cannot explain in words. 
              <br /><br />I have a deep understanding of Data structures and algorithms as well as SOLID principles.            
            </article>
          </Grid>
      </Grid>
      <Grid container className='md:m-12' spacing={4} sx={{zIndex:10}} direction={"row"} justifyContent={"center"}>
          <Grid item  className='flex justify-center'> 
            <CardHolder>
              <p className='font-normal text-sm font-mono'>“Simplicity is the baddest choice to be the best.“</p>
              <br /><br />
              <i className='mt-16 flex justify-end'>-Harshal Rahangdale</i>
            </CardHolder>
          </Grid>
          <Grid item  className='flex justify-center'>
            <CardHolder>
              <p className='font-normal text-sm font-mono'>“I know I’m not successful enough,but I’m passionate enough not to worry about success.“</p>
              <br /><br />
              <i className='mt-8 flex justify-end'>-Harshal Rahangdale</i>
            </CardHolder>
          </Grid>
          <Grid item  className='flex justify-center'>
            <CardHolder>
              <p className='font-normal text-sm font-mono'>“Creativity is the driver of an unstoppable train called Passion.”</p>
              <br /><br />
              <i className='mt-8 flex justify-end'>-Harshal Rahangdale</i>
            </CardHolder>
          </Grid>
      </Grid>
      <BackgroundShadow></BackgroundShadow>
    </Box>
  )
}
const ImageContainer = styled(Box)(() => ({
  border : "4px solid white",
  borderRadius : "50%",
  overflow:"hidden",
  width : "fit-content"
}))
const CardHolder = styled(Box)(({theme}) => ({
  display :"flex",
  flexDirection :"column",
  justifyContent :"space-between",
  backgroundColor: "rgb(248, 248, 248)",
  boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 10px",
  borderRadius : "20px",
  padding :"15px",
  minHeight :"170px",
  maxWidth :"275px",
  color :"#65c3c8",
}))
const BackgroundShadow = styled(Box)(({theme}) => ({
  position: "relative",
  left: "0px",
  width: "100%",
  minHeight: "500px",
  background: "#65c3c8",
  transform: "skewY(-2deg)",
  // zIndex: -1,
  pointerEvents: "none",
  bottom : "1150px",
  [theme.breakpoints.up('sm')]: {
    bottom: "730px",
  }
}))
export default About
