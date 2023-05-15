import React from 'react'
import Navbar from './Navbar';
import ArrowForward from '@material-ui/icons/ArrowForward';
import { makeStyles } from '@material-ui/core/styles';
import {
    Box,
    Grid,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from "@material-ui/core";
import dna from "../images/3217_portrait.jpeg"
import transcription from "../images/transcription.jpeg"
import code from "../images/coding.jpeg"
import quadruped from "../images/quadruped.jpeg"
import tunnelman from "../images/tunnelman.jpg"
import website from "../images/website.jpg"
import spaceinvaders from "../images/spaceinvaders.jpg"
import binary from "../images/binary.jpg"
import tic_tac_toe from "../images/tic-tac-toe.jpg"
import lisp from "../images/lisp.jpg"
import git from "../images/git.jpg"
import makefile from "../images/makefile.jpg"
//<a href="https://www.freepik.com/free-vector/abstract-blue-light-pipe-speed-zoom-black-background-technology_32903009.htm#page=2&query=dark%20gray%20tech%20background&position=39&from_view=search&track=ais">Image by flatart</a> on Freepik
import back from "../portfolio.jpg"
const useStyles = makeStyles({
    mainContainer: {
        backgroundImage: `url(${back})`,
        backgroundRepeat: 'repeat-y', // Repeat the image vertically
        backgroundSize: '100% auto', // Fit the width of the screen and maintain aspect ratio
        backgroundPosition: 'center',
    },
    cardContainer: {
        maxWidth: 345,
        margin: "5rem auto",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)", // Add the box shadow style
        transition: 'transform 0.3s ease-in-out',  // Add this for a smooth transition on hover
        '&:hover': {
            transform: 'scale(1.03)',  // Scale up the card slightly on hover
            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",  // Increase the box shadow on hover
        }
    },
    customButton: {
        background: '#4682B4', // Set your desired background color
        borderColor: '#4682B4', // Set your desired border color
        color: '#fff', // Set your desired text color
        transition: 'background-color 0.3s',
        '&:hover': {
          background: '#335b7a', // Set your desired hover background color
          borderColor: '#335b7a', // Set your desired hover border color
        }
    }
});

const Portfolio = () => {
    const classes = useStyles();

    const redirect = (url) => {
        window.location.href = url;
    }

  return (
    <Box component="div" className={classes.mainContainer}>
    <Navbar/>
    <Grid container justify="center">
        {/* Project 1 */}
        <Grid item xs={12} sm={6} md={4}>
        <Card className = {classes.cardContainer}>
                <CardMedia
                component = "img"
                alt= "Project 1"
                height="140"
                image = {website}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5">
                      This Website
                    </Typography>
                    <Typography variant="body2" color="textSecondary" components="p">
                    Developed this personal website from scratch using react as a development environment because of its component-based architecture and efficient updates and rendering along with coding in javascript. Implemented functioning client-side emails through the use of emailjs.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button className = {classes.customButton} borderColor ="#4682B4" endIcon ={<ArrowForward/>}onClick={() => redirect("https://github.com/sabuhamad/Personal-Website/tree/main")}>
                        View Code
                    </Button>
                </CardActions>
        </Card>
        </Grid>
        {/* Project 1 */}
        <Grid item xs={12} sm={6} md={4}>
        <Card className = {classes.cardContainer}>
                <CardMedia
                component = "img"
                alt= "Project 1"
                height="140"
                image = {quadruped}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5">
                      Quadruped Robot
                    </Typography>
                    <Typography variant="body2" color="textSecondary" components="p">
                    Led a team of engineers to design, construct, and program a sophisticated, walking quadruped robot using Python for the software, 3D printed materials for the body, and a Raspberry Pi as the motherboard
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button className = {classes.customButton} borderColor ="#4682B4" endIcon ={<ArrowForward/>}onClick={() => redirect("https://github.com/UCLAX1/Boelt-Software")}>
                        View Code
                    </Button>
                </CardActions>
        </Card>
        </Grid>
        {/*Project 2*/}
        <Grid item xs={12} sm={6} md={4}>
        <Card className = {classes.cardContainer}>
                <CardMedia
                component = "img"
                alt= "Project 2"
                height="140"
                image = {spaceinvaders}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5">
                      Space Invaders Full-Stack Web App
                    </Typography>
                    <Typography variant="body2" color="textSecondary" components="p">
                    Developed the frontend and backend for a full-stack web app from scratch with the goal of modernizing the classic space invaders arcade game using React and material UI for the frontend and Firebase for the backend 
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button className = {classes.customButton}  endIcon ={<ArrowForward/>}onClick={() => redirect("https://github.com/sabuhamad/Space-Invaders")}>
                        View Code
                    </Button>
                </CardActions>
           
        </Card>
        </Grid>
        {/*Project 3*/}
        <Grid item xs={12} sm={6} md={4}>
        <Card className = {classes.cardContainer}>
                <CardMedia
                component = "img"
                alt= "Project 3"
                height="140"
                image = {tunnelman}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5">
                      Tunnelman
                    </Typography>
                    <Typography variant="body2" color="textSecondary" components="p">
                    Created a fully functional, endless video game in C++ called Tunnelman using Object-Oriented programming with animated sprites, sound effects, and a depth-first search (DFS) algorithm for enemy movement
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button className = {classes.customButton}  endIcon ={<ArrowForward/>}onClick={() => redirect("https://github.com/sabuhamad/CS32-Intro-to-CS-II/tree/main/Project%204%20-%20Fully%20Functional%20Video%20Game%20(Tunnelman)")}>
                        View Code
                    </Button>
                </CardActions>
           
        </Card>
        </Grid>
        {/*Project 4*/}
        <Grid item xs={12} sm={6} md={4}>
        <Card className = {classes.cardContainer}>
                <CardMedia
                component = "img"
                alt= "Project 4"
                height="140"
                image = {dna}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5">
                      DNA Sequence Mutation Analysis
                    </Typography>
                    <Typography variant="body2" color="textSecondary" components="p">
                    Developed a C++ program to identify mutations in DNA by comparing paired-end reads with sequencing errors to a reference genome,  achieving the 6th overall rank in terms of efficiency and effectiveness among 250 undergraduate and graduate students in a cross-listed course. Optimized the alignment process using dynamic programming to improve computational efficiency
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button className = {classes.customButton}  endIcon ={<ArrowForward/>}onClick={() => redirect("https://github.com/sabuhamad/CM122-Algorithms-In-Bioinformatics/tree/main/Project%201%20-%20DNA%20Sequence%20Mutation%20Analysis")}>
                        View Code
                    </Button>
                </CardActions>
           
        </Card>
        </Grid>
        {/*Project 5*/}
        <Grid item xs={12} sm={6} md={4}>
        <Card className = {classes.cardContainer}>
                <CardMedia
                component = "img"
                alt= "Project 5"
                height="140"
                image = {transcription}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5">
                      Transcription Factor Binding Sequence Prediction
                    </Typography>
                    <Typography variant="body2" color="textSecondary" components="p">
                    Designed and implemented a C++ program for the analysis and prediction of transcription factor binding sites in genomic sequences.
                    Developed algorithms for parsing DNA sequences from FASTA files and calculating reverse complements of DNA sequences.

                    Incorporated Position Weight Matrix (PWM) for the prediction of transcription factor binding sites in the given DNA sequences.

                    Created a scoring system based on PWM to rank sequences and determine their likelihood of being bound by a transcription factor.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button className = {classes.customButton}  endIcon ={<ArrowForward/>}onClick={() => redirect("https://github.com/sabuhamad/CM122-Algorithms-In-Bioinformatics/tree/main/Project%202%20-%20Transcription%20Factor%20Binding%20Sequence%20Prediction")}>
                        View Code
                    </Button>
                </CardActions>
           
        </Card>
        </Grid>
        {/*Project 4*/}
        <Grid item xs={12} sm={6} md={4}>
        <Card className = {classes.cardContainer}>
                <CardMedia
                component = "img"
                alt= "Project 4"
                height="140"
                image = {code}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5">
                      General-Purpose Language Interpreter 
                    </Typography>
                    <Typography variant="body2" color="textSecondary" components="p">
                    Created an interpreter in Python for a custom general-purpose language enabling object-oriented programming with classes, methods, fields, and control structures. The project involved parsing input programs, building an abstract syntax tree, and evaluating the tree to execute the program
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button className = {classes.customButton}  endIcon ={<ArrowForward/>}onClick={() => redirect("https://github.com/sabuhamad/CS131-Programming-Languages/tree/main/Project%201%20-%20Brewin%20Interpreter")}>
                        View Code
                    </Button>
                </CardActions>
           
        </Card>
        </Grid>
        {/* Project 1 */}
        <Grid item xs={12} sm={6} md={4}>
        <Card className = {classes.cardContainer}>
                <CardMedia
                component = "img"
                alt= "Project 1"
                height="140"
                image = {binary}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5">
                      Floating-Point Conversion
                    </Typography>
                    <Typography variant="body2" color="textSecondary" components="p">
                    Designed a floating-point converter in verilog using ISE which takes in a two's-complement number and returns the floating point value through conversion to signed magnitude, linear expansion, and rounding. Dealt with edge-cases through extensive testing using testbench code I developed. 
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button className = {classes.customButton} borderColor ="#4682B4" endIcon ={<ArrowForward/>}onClick={() => redirect("https://github.com/sabuhamad/CSM152A-Digital-Design-Laboratory/tree/main/Lab%202%20-%20Floating%20Point%20Conversion")}>
                        View Code
                    </Button>
                </CardActions>
        </Card>
        </Grid>
        {/* Project 1 */}
        <Grid item xs={12} sm={6} md={4}>
        <Card className = {classes.cardContainer}>
                <CardMedia
                component = "img"
                alt= "Project 1"
                height="140"
                image = {tic_tac_toe}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5">
                      Chorus-Lapilli (Tic-Tac-Toe) Multiplayer React App
                    </Typography>
                    <Typography variant="body2" color="textSecondary" components="p">
                    Built a React app that allows the user to play a multiplayer version of Chorus-Lapilli, a variant on the modern tic-tac-toe game that was widely popular in ancient Rome.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button className = {classes.customButton} borderColor ="#4682B4" endIcon ={<ArrowForward/>}onClick={() => redirect("https://github.com/sabuhamad/CS35L-Software-Construction/tree/main/Chorus%20Lapilli")}>
                        View Code
                    </Button>
                </CardActions>
        </Card>
        </Grid>
               {/* Project 1 */}
               <Grid item xs={12} sm={6} md={4}>
        <Card className = {classes.cardContainer}>
                <CardMedia
                component = "img"
                alt= "Project 1"
                height="140"
                image = {lisp}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5">
                      Lisp and Python Scripting
                    </Typography>
                    <Typography variant="body2" color="textSecondary" components="p">
                        Created a lisp script called gps-line.el that tells the user which line they are on in the code and imported the script into Emacs. Developed a python script shuf.py in the style
                        of randline.py but using Python 3 instead, supporting options such as --echo, --input-range, --head-count, and --repeat 
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button className = {classes.customButton} borderColor ="#4682B4" endIcon ={<ArrowForward/>}onClick={() => redirect("https://github.com/sabuhamad/CS35L-Software-Construction/tree/main/Lisp%20and%20Python%20Scripting")}>
                        View Code
                    </Button>
                </CardActions>
        </Card>
        </Grid>
                   {/* Project 1 */}
                   <Grid item xs={12} sm={6} md={4}>
        <Card className = {classes.cardContainer}>
                <CardMedia
                component = "img"
                alt= "Project 1"
                height="140"
                image = {git}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5">
                      Git Repository Organization Script
                    </Typography>
                    <Typography variant="body2" color="textSecondary" components="p">
                    Developed a script in Python called topo_order_commits.py which gets the list of local branch names of a git repository, uses depth-first-search to build the commit graph, processes the topological order of the commits, and then prints the commit
	                hashes in order 
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button className = {classes.customButton} borderColor ="#4682B4" endIcon ={<ArrowForward/>}onClick={() => redirect("https://github.com/sabuhamad/CS35L-Software-Construction/tree/main/Git%20Repository%20Organization")}>
                        View Code
                    </Button>
                </CardActions>
        </Card>
        </Grid>
                   {/* Project 1 */}
                   <Grid item xs={12} sm={6} md={4}>
        <Card className = {classes.cardContainer}>
                <CardMedia
                component = "img"
                alt= "Project 1"
                height="140"
                image = {makefile}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5">
                      Low-level Refactoring and Performance
                    </Typography>
                    <Typography variant="body2" color="textSecondary" components="p">
                    Tuned and refactored a given program in order to optimize its functionality in addition to formulating test cases for the program and testing them using a makefile
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button className = {classes.customButton} borderColor ="#4682B4" endIcon ={<ArrowForward/>}onClick={() => redirect("https://github.com/sabuhamad/CS35L-Software-Construction/tree/main/Low-level%20Refactoring%20and%20Performance")}>
                        View Code
                    </Button>
                </CardActions>
        </Card>
        </Grid>
    </Grid>
    </Box>
  );
};

export default Portfolio
