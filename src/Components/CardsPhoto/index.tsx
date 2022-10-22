import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Url } from 'url';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import DoneIcon from '@mui/icons-material/Done';
import DetailCard from './indexDetail';


import Link from '@mui/material/Link';
import Box from '@mui/material/Box';



type CardPhotosProps = {
    title?: string;
    description?: string;
    image?: string;
    etsy?: string;
    // openCloseState: boolean;
    // setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
};


export default function MediaCard(props: CardPhotosProps) {



    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={props.image}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Altezza: 70 cm <br></br>
                    Larchezza: 55 cm <br></br>
                    200 Euro la stampa <br></br>
                    500 Euro con cornice <br></br>
                </Typography>

                <a href={props.etsy} target="_blank">
                    <Chip
                        label="Spedizione GRATUITA"
                        component="a"
                        href={props.etsy}
                        variant="outlined"
                        clickable
                        icon={<ShoppingCartTwoToneIcon />}
                        color="error"
                    />
                </a>



            </CardContent>
            <CardActions>
                {/* <Link href="/DetailCard/3" component={DetailCard}>Detail</Link> */}

                {/* <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
                 */}
            </CardActions>
        </Card>
    );
}
