import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Typed from 'react-typed';
import {
    Typography,
    Avatar,
    Grid,
    Box
} from "@material-ui/core";
import avatar from "../avatar.png";

// CSS STYLES
const useStyles = makeStyles(theme=> ({
    avatar: {
        width: theme.spacing(30),
        height: theme.spacing(30),
        margin: theme.spacing(1)
    },

    title: {
        color: "white"

    },
    subtitle: {
        color: "#4682B4",
        marginBottom: "3rem"
    },

    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1
    }

}))

const Header = () => {
    const classes = useStyles()
  return (
    <Box className = {classes.typedContainer}>
      <Grid container justify ="center">
      <Avatar className = {classes.avatar} src={avatar} alt= "Sari Abu-Hamad"/>
      </Grid>
        <Typography className = {classes.title} variant="h4">
            <Typed strings= {["Sari Abu-Hamad"]} typeSpeed={40} />
        </Typography>
        <br/>
        <Typography className = {classes.subtitle} variant="h5">
            <Typed 
            strings= {["Software Engineer", "Project Manager", "Senior Analyst", "Web Developer"]}
            typeSpeed={40} 
            backSpeed={60}
            loop
            />
        </Typography>
    </Box>
        
  );
};

export default Header
