import React from 'react';
import { withExperiment } from "../../probat/runtime";
import { PROBAT_COMPONENTS, PROBAT_REGISTRIES } from "../../probat/index";
import {makeStyles} from "@material-ui/core/styles";
import Typed from 'react-typed';
import {
    Typography,
    Avatar,
    Grid,
    Box
} from "@material-ui/core";
import avatar from "../avatar.png";

const __PROBAT_KEY__ = "src/components/Header.js";

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

export default (() => {
  const meta = PROBAT_COMPONENTS[__PROBAT_KEY__];
  const reg  = PROBAT_REGISTRIES[__PROBAT_KEY__] as Record<string, React.ComponentType<any>> | undefined;
  return (meta?.proposalId && reg)
    ? withExperiment<any>(Header as any, { proposalId: meta.proposalId, registry: reg })
    : Header;
})();
