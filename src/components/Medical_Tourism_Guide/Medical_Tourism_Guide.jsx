import React from 'react'
import './Medical_Tourism_Guide.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const Medical_Tourism_Guide = () => {
    return (
        <>
           
             <div className='medicalTourism_Page'>
               <div className='section_1'>
                 <div className='tourism_heading'> Medical Tourism Guide</div>
                 <div className='tourism_info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad mollitia ratione totam veniam impedit minus alias aperiam tempore possimus? Inventore quibusdam tempora suscipit. Itaque quam quaerat praesentium nisi numquam. Excepturi?</div>
               </div>
               <div className='section_2'>
                    <div className='cards'>
                        <Card  className='card_1'  >
                        <CardActionArea >
                            
                            <CardContent>
                            <Typography gutterBottom variant="h6" component="div" >
                               Checking out the doctor
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                A guide for what you should ask the doctor or surgeon in order to select 
                                the right one for your needs.<br></br><br></br>
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary"  sx={{ color: 'red' }}>
                               Read More
                            </Button>
                        </CardActions>
                        </Card>
                        
                        {/* <Card className='card_1' sx={{ maxWidth: 200 }}> */}
                             <Card className='card_1'>
                            
                        <CardActionArea >
                          
                            <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                Checking out the doctor
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                               A guide for what you should ask the doctor or surgeon in order to select 
                                the right one for your needs.<br></br><br></br>
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary"  sx={{ color: 'red' }}>
                              Read More
                            </Button>
                        </CardActions>
                        </Card>
                        <Card  className='card_1' >
                        <CardActionArea>
                            
                            <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                               Checking out the doctor
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                               A guide for what you should ask the doctor or surgeon in order to select 
                                the right one for your needs.<br></br><br></br>
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button  color='secondary' aria-label="outlined danger"  sx={{ color: 'red' }}>
                            Read More
                            </Button>
                        </CardActions>
                        </Card>

                    </div>                    
                </div>  
                <div className='button1'>
                    <button className='button_red1'></button>
                    <button className='button_red1'></button>
                    <button className='button_red1'></button>
                </div>
              

                
             </div>
        </>
    
  )
}

export default Medical_Tourism_Guide

//  sx={{ maxWidth: 200 }}