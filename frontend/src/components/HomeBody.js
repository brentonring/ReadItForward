import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { CurrentBooksContext } from '../contexts/BooksContext';
import { useContext, useEffect, useState } from 'react'



const theme = createTheme();

function HomeBody() {
    const [fullDesc, setFullDesc] = useState(false)
    const { currentBooks } = useContext(CurrentBooksContext)
    console.log('consume', currentBooks)

    const handleDescClick = () => {
        setFullDesc(!fullDesc)
        console.log('fullDesc', fullDesc)
        let description
        let button
        if (fullDesc) {
            description = `{book?.volumeInfo?.description}`
            button = <ArrowDropUpIcon />
        } else {
            description = `{book?.volumeInfo?.description?.substring(0,200) + '...'}`
            button = <ArrowDropDownIcon />
        }
    }

    // const ShowFull = () => {
    //     return (
    //         {book?.volumeInfo?.description}
    //         <br />
    //         <Button onClick={handleDescClick} style={{justifyContent: 'center'}}>
    //             <ArrowDropUpIcon />
    //             {/* {button} */}
    //         </Button>
    //     )
    // }

    // const ShowShort = () => {
    //     return (
    //         `{book?.volumeInfo?.description?.substring(0,200) + '...'}
    //         <br />
    //         <Button onClick={handleDescClick} style={{justifyContent: 'center'}}>
    //             <ArrowDropDownIcon />
    //             {/* {button} */}
    //         </Button>`
    //     )
    // }

    // const Description = () => {
    //     if (fullDesc) {
    //         return <ShowFull />
    //     } else {
    //         return <ShowShort />
    //     }
    // }

    return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <main>
        <Container maxWidth="lg" >
            <Grid container spacing={4}>
            {currentBooks?.map((book) => (
                <Grid item key={book?.id} xs={12} md={4}>
                <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                    <CardMedia
                        component="img"
                        image={book?.volumeInfo?.imageLinks?.thumbnail}
                        alt="book cover"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h2" style={{ fontSize: 34, color: '#0B295B' }}>
                            {book?.volumeInfo?.title}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h3" style={{ fontSize: 24, color: '#0B295B' }}>
                            {book?.volumeInfo?.authors}
                        </Typography>
                        <Typography style={{ fontSize: 14, color: '#2F4858' }}>
                            {book?.volumeInfo?.description?.substring(0,200) + '...'}
                            <br />
                            <Button onClick={handleDescClick} style={{justifyContent: 'center'}}>
                                {/* if (fullDesc) {
                                    return <ArrowDropUpIcon />
                                } */}
                                <ArrowDropDownIcon />
                                {/* {button} */}
                            </Button>
                            {/* <Description /> */}
                        </Typography>
                    </CardContent>
                    <CardActions style={{justifyContent: 'center'}}>
                        <Button sx={{ color: '#EC412F' }} size="small" href="https://google.com">
                            <AutoStoriesIcon/>
                        </Button>
                        <Button>
                            <FavoriteIcon sx={{ color: '#EC412F' }} />
                        </Button>
                    </CardActions>
                </Card>
                </Grid>
            ))}
            </Grid>
        </Container>
        </main>
    </ThemeProvider>
    );
}

export default HomeBody;
