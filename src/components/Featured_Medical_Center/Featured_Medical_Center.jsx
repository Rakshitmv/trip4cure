import React from 'react'
import './Featured_Medical_Center.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import img1 from './Images/Galencia.png';
import img2 from './Images/Apollo.png';
import img3 from './Images/Austral.png';
import img4 from './Images/Kpj.png';
import WebFont from 'webfontloader';


const Featured_Medical_Center = () => {
  return (
      <>
          <div className='featured_Page'>
              <div className='part_1'>
                <div className='medical_heading'>Featured Medical Centers</div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad mollitia ratione totam veniam impedit minus alias aperiam tempore possimus? Inventore quibusdam tempora suscipit. Itaque quam quaerat praesentium nisi numquam. Excepturi?</div>
              </div>
              <div className='section2'>
                  <div className='medical_card'>
                      <Card  sx={{ maxWidth: 300, minWidth: 300 }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="200"
                        // width="250"
                        image={img1}
                        alt="Hospital"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h6" component="div" sx={{fontFamily: 'Centaur', fontWeight: '900'}}>
                            Galenia Hospital
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx= {{fontFamily: 'Poppins'}}>
                          <p>Mexico- 16 specialties</p>
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card> 
                    <Card sx={{ maxWidth: 300, minWidth: 300}}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="200"
                        image={img2}
                        alt="Hospital"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h6" component="div" sx={{fontFamily: 'Centaur', fontWeight: '900'}}>
                            Apollo Hospital Chennai
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx= {{fontFamily: 'Poppins'}}>
                            India- 25 Specialties
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card> 
                    <Card sx={{ maxWidth: 300, minWidth: 300 }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="200"
                        image={img3}
                        alt="hospital"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h6" component="div" sx={{fontFamily: 'Centaur', fontWeight: '900'}}>
                            Hospital Universitario Austral
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx= {{fontFamily: 'Poppins'}}>
                           Argentina- 3 specialties
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card> 
                    <Card sx={{ maxWidth: 300, minWidth: 300 }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="200"
                        image={img4}
                        alt="green iguana"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h6" component="div" sx={{fontFamily: 'Centaur', fontWeight: '900'}}>
                            KPJ Damansara Specialist Hospital
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx= {{fontFamily: 'Poppins'}}>
                         Malayasia- 28 specialties
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card> 
                    <Card sx={{ maxWidth:300, minWidth: 300 }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="200"
                        image={img2}
                        alt="green iguana"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h6" component="div" sx={{fontFamily: 'Centaur', fontWeight: '900'}} >
                            Apollo Hospital Chennai
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx= {{fontFamily: 'Poppins'}}>
                           India- 25 specialties
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card> 
                    <Card sx={{ maxWidth: 300, minWidth: 300 }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="200"
                        image={img3}
                        alt="green iguana"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h6" component="div"  sx={{fontFamily: 'Centaur', fontWeight: '900'}} >
                           Hospital Universitario Austral
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx= {{fontFamily: 'Poppins'}}>
                            Argenitina- 3 specialties
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card> 
                                       
                  </div>
              </div>
              <div className='button_red'>
                  <button></button>
                  <button></button>
                  <button></button>
              </div>
          </div>
      </>
  )
}

export default Featured_Medical_Center;