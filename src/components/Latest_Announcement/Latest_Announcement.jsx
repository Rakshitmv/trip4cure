import React from 'react'
import './Latest_Announcement.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import blog1 from './Images/Blog1.png';
import blog2 from './Images/Blog2.png';
import blog3 from './Images/Blog3.png';
import colorwhite from './Images/Color-white.jpg'

const Latest_Announcement = () => {
  return (
      <div className='announce_container'>
          <div className='announce_Page'>
              <div className='section1'>
                <div className='announce_heading'>Latest Announcements</div>
                <div className='announce_info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad mollitia ratione totam veniam impedit minus alias aperiam tempore possimus? Inventore quibusdam tempora suscipit. Itaque quam quaerat praesentium nisi numquam. Excepturi?</div>
              </div>
              <div className='hotel_cards'>
                  <div className='hotel_card '>
                      <Card  sx={{ minWidth: 290}}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="220"
                            width="250"
                            image={blog1}
                            alt="green iguana"
                            />
                          
                        </CardActionArea>
                        </Card> 
                        <Card sx={{ minWidth: 290 }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            width="290"
                            height="220"
                            image={blog2}
                            alt="green iguana"
                            />
                            
                        </CardActionArea>
                        </Card> 
                        <Card sx={{ minWidth: 290 }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="220"
                            width="290"
                            image={blog3}
                            alt="green iguana"
                            />
                          
                        </CardActionArea>
                        </Card>                       
                  </div>
                </div>
                <div className='hotel_cards_info' >
                    <div className='announce_cards'>
                        <Card  className='announce_card_1'  >
                        <CardActionArea >
                            
                            <CardContent>
                            <Typography gutterBottom variant="h6" component="div" >
                               Our New Miami Beach Hotel Is Open!
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                               A guide for what you should ask the doctor or surgeon in order to select 
                                the right one for your needs.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" sx={{ color: 'red' }}>
                               Read More
                            </Button>
                        </CardActions>
                        </Card>
                             <Card className='announce_card_1'>
                        <CardActionArea >                        
                            <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                Know the secret of Resort
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                               <br></br> A guide for what you should ask the doctor or surgeon in order to select 
                                the right one for your needs.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary"  sx={{ color: 'red' }}>
                              Read More
                            </Button>
                        </CardActions>
                        </Card>
                        <Card  className='announce_card_3' >
                        <CardActionArea>
                            
                            <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                               How to book a Resort in best price on Mountain
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                A guide for what you should ask the doctor or surgeon in order to select 
                                the right one for your needs.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button  color='secondary' aria-label="outlined danger" sx={{ color: 'red' }}  >
                            Read More
                            </Button>
                        </CardActions>
                        </Card>

                    </div>                    
                </div>  
                <div className='announce_button'>
                    <button className='announce-btn'>View All Announcement</button>
                </div>      
              
          </div>
      </div>
  )
}

export default Latest_Announcement;