// import './MainArea.css'
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Rubik", "sans-serif"].join(","),
  },
});

function MainArea() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://elephant-api.herokuapp.com/elephants")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.slice(0, 47));
        setData(data.slice(0, 47));
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    console.log("%cSe acutalizó el componente", "color: yellow");
  }, [data]);

  useEffect(() => {
    return () => console.log("%cSe desmontó el componente", " color: red");
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box
        py={2.5}
        display="flex"
        flexDirection="column"
        bgcolor="#e9ecef"
        alignItems="center"
        justifyContent="center"
      >
        <img
          src="https://elephant-api.herokuapp.com/images/elephant-api.png"
          alt="Logo"
          width="200"
          align="center"
        />
        <Typography variant="h2" mt={2} gutterBottom textAlign="center">
          The Elephant App
        </Typography>
        <Typography variant="subtitle" gutterBottom textAlign="center">
        These are <strong>REAL</strong> elephants! If you don't believe me, check them out on <Link underline="hover" rel="noreferrer" href="https://en.wikipedia.org/wiki/List_of_individual_elephants">Wikipedia</Link>.
        </Typography>
      </Box>
      <Grid container spacing={3} my={2} px={2}>
        {data.map((elephant, i) => {
          return (
            <Grid item key={i} xs={12} sm={6} md={4} align="center">
              <Box>
                <Card variant="outlined" sx={{ maxWidth: 545 }}>
                  <CardMedia
                    component="img"
                    height="540"
                    image={elephant.image}
                    alt="Elephant image"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      align="left"
                    >
                      {elephant.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      align="left"
                    >
                      {elephant.note}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button variant="contained" size="small">
                      More info
                    </Button>
                  </CardActions>
                </Card>
              </Box>
            </Grid>
          );
        })}
      </Grid>
      {/* <Box
        sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 3 }}
      >
        {data.map((elephant, i) => {
          return (
            <Card sx={{ maxWidth: 545 }}>
              <CardMedia
                component="img"
                height="340"
                image={elephant.image}
                alt="Elephant image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {elephant.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {elephant.note}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">More info</Button>
              </CardActions>
            </Card>
          );
        })}
      </Box> */}
    </ThemeProvider>
  );
}

export default MainArea;
