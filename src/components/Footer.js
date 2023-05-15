import React from 'react'
import {makeStyles} from "@material-ui/styles"
import {BottomNavigation, BottomNavigationAction} from "@material-ui/core"
import LinkedIn from "@material-ui/icons/LinkedIn";
import Twitter from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles({
    root: {
        "& .MuiBottomNavigationAction-root": {
            minWidth: 0,
            maxWidth: 250
        },
        "& .MuiSvgIcon-root": {
            fill: "#4682B4",
            "&:hover": {
                fill: "white",
                fontSize: "1.8rem"
            }
        },
    },
});

const Footer = () => {
    const classes = useStyles();

    const redirect = (url) => {
        window.location.href = url;
    }

  return (
   <BottomNavigation width="auto" style = {{background: "#222"}}>
    <BottomNavigationAction
        className={classes.root}
        style={{padding: 0}}
        icon={<LinkedIn/>}
        onClick={() => redirect("https://www.linkedin.com/in/sari-abu-hamad/")}
    />
    <BottomNavigationAction
        className={classes.root}
        style={{padding: 0}}
        icon={<Twitter/>}
        onClick={() => redirect("https://twitter.com/UnecessariNFTs")}
    />
    <BottomNavigationAction
        className={classes.root}
        style={{padding: 0}}
        icon={<GitHubIcon/>}
        onClick={() => redirect("https://github.com/sabuhamad")}
    />

   </BottomNavigation>
  );
};

export default Footer
