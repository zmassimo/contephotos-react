import { Alert } from "@mui/material";
import React from "react";


import logo from './logo.svg';
// import './App.css';
import CardPhotos from '../../Components/CardsPhoto/index';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

import { STORE_DATA } from '../../mock-data/store-data';
import CardDetail from '../../Components/CardsPhoto/indexDetail';

import MonacoBambino from '../../Images/IlBambinoEdIlMonaco/EtzyFullFrame.jpg';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 460,
    lineHeight: '60px',
}));

const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });



const Dashboard = () => {

    return (

        <React.Fragment>


            <div className="App">
                <header className="App-header">
                    <img src={MonacoBambino} className="App-logo" />

                    <p>
                        Sito <code>Conte Photo</code> in allestimento.
                    </p>



                    <Grid container spacing={2} style={{ paddingLeft: "60px" }} >
                        {[darkTheme].map((theme, index) => (
                            <Grid item xs={11} key={index}>
                                <ThemeProvider theme={theme}>
                                    <Box
                                        sx={{
                                            paddingLeft: 2,
                                            paddingTop: 3,
                                            bgcolor: 'background.default',
                                            display: 'grid',
                                            gridTemplateColumns: { md: '1fr 1fr 1fr' },
                                            gap: 1,
                                        }}
                                    >
                                        {STORE_DATA.map(card => (
                                            <Item key={card.id} elevation={0}>
                                                <CardPhotos
                                                    title={card.name}
                                                    description={card.description}
                                                    image={card.image}
                                                    etsy={card.etsy}
                                                />

                                            </Item>
                                        ))}
                                    </Box>
                                </ThemeProvider>
                            </Grid>
                        ))}
                    </Grid>





                </header>


            </div>
        </React.Fragment>

    )
}

export default Dashboard;