import React from 'react'
import { useCallback } from "react";
import Particles from "react-tsparticles"
import {loadFull} from "tsparticles";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme=> ({
    particle: {
        position: "fixed",
        width: "100%",
        height: "100%",
        margin: 0,
        padding: 0,
        top: 0,
        zIndex: -1,
        opacity: 0.3
    }
}))

const ParticleBackground = () => {
    const classes = useStyles()
    const particlesInit = useCallback(async engine => {
        //console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
  
    return (
        <Particles
            className = {classes.particle}
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    image:{
                        src: "..tech.jpg"
                    }
                },
                fullScreen: { enable: false },
                fpsLimit: 60,
                interactivity: {
                    events: {
                        onClick: {
                            enable: false,
                            mode: "push",
                        },
                        onHover: {
                            enable: false,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 150,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 200,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: false,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 1,  // Lowered speed
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 35,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
  );
};

export default ParticleBackground
