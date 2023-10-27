import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import {Typography, Box} from "@material-ui/core";
import Navbar from "./Navbar";
import Typed from 'react-typed';
/*<a href="https://www.freepik.com/free-vector/abstract-black-texture-background-hexagon_18702139.htm#page=2&query=dark%20gray%20tech%20background&position=17&from_view=search&track=ais">Image by almumtazza</a> on Freepik*/
import back from '../hexagon.jpg'

const useStyles = makeStyles(theme=>({
    mainContainer: {
        backgroundImage: `url(${back})`,
        backgroundRepeat: 'repeat-y', // Repeat the image vertically
        backgroundSize: '100% auto', // Fit the width of the screen and maintain aspect ratio
        backgroundPosition: 'center',
    },
    timeLine: {
        position: "relative",
        padding: "1rem",
        margin: "0 auto",
        "&:before": {
            content: "''",
            position: "absolute",
            height: "100%",
            border: "1px solid gray",
            right: "40px",
            top: 0
        },
        "&:after": {
            content: "''",
            display: "table",
            clear: "both"
        },
        [theme.breakpoints.up("md")]:{
            padding: "2rem",
            "&:before": {
                left: "calc(50% - 1px)",
                right: "auto"
            }
        }
    },
    timeLineItem: {
        transition: 'transform 0.2s ease-in-out',
        '&:hover': {
            transform: 'scale(1.05)',
        },
        padding: "1rem",
        borderBottom: "2px solid white",
        position: "relative",
        margin: "1rem 3rem 1rem 1rem",
        clear: "both",
        "&:after": {
            content: "''",
            position: "absolute"
        },
        "&:before": {
            content: "''",
            position: "absolute",
            right: "-0.625rem",
            top: "calc(50% - 5px)",
            borderStyle: "solid",
            borderColor: "gray gray transparent transparent",
            borderWidth: "0.625rem",
            transform: "rotate(45deg)"
        },
        [theme.breakpoints.up("md")]: {
            width: "44%",
            margin: "1rem",
            "&:nth-of-type(2n)": {
                float: "right",
                margin: "1rem",
                borderColor: "#4682B4"
            },
            "&:nth-of-type(2n):before": {
                right: "auto",
                left: "-0.625rem",
                borderColor: "transparent transparent gray gray"
            }
        }
    },
    timeLineYear:{
        textAlign: "center",
        maxWidth: "9.375rem",
        margin: "0 3rem 0 auto",
        fontSize: "1.8rem",
        background: "gray",
        color: "white",
        lineheight: 1,
        padding: "0.5rem 0 1rem",
        "&:before": {
            display: "none"
        },
        [theme.breakpoints.up("md")]: {
            textAlign: "center",
            margin: "0 auto",
            "&:nth-of-type(2n)":{
                float: "none",
                margin: "0 auto"
            },
            "&:nth-of-type(2n):before": {
                display: "none"
            }
        }
    },
    heading: {
        color: "white",
        align: "center",
        padding: "3rem 0",
        textTransform: "uppercase"
    },
    subHeading: {
        color: "white",
        padding: "0",
        textTransform: "uppercase"
    },
    company: {
        color: "#4682B4"
    },
    description: {
        color: "white"
    }
}));

const Resume = () => {
    const classes = useStyles();
  return (
    <>
    <Navbar />
    <Box component="header" className={classes.mainContainer}>
        <Typography variant="h4" align = "center" className = {classes.heading}>
        <Typed strings= {["Work Experience"]} typeSpeed={40} />
        </Typography>
        <Box component= "div" className ={classes.timeLine}>
        <Typography variant="h2" 
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                2020
            </Typography>
            <Box component="div" className = {classes.timeLineItem}>
                <Typography variant= "h5" align= "center" className = {classes.subHeading}>
                    UCLA Computer Science B.S.
                </Typography>
                <Typography variant= "body1" align= "center" className = {classes.company}>
                 Technology Management Technical Breadth
                </Typography>
                <Typography variant= "subtitle1" align= "center" className = {classes.description}>
                Relevant Courses: Theory of Computing, Algorithms and Complexity, Software Construction, Object-Oriented Programming, Data structures (Intro to CS I and II), Programming Languages, Probability, Discrete Structures, Linear Algebra
                </Typography>
            </Box>
            <Box component="div" className={classes.timeLineItem}>
                <Typography variant="h5" align="center" className={classes.subHeading}>
                    Top-Rated Seller
                </Typography>
                <Typography variant="body1" align="center" className={classes.company}>
                    eBay
                </Typography>
                <Typography variant="subtitle1" align="left" className={classes.description} component="ul">
                    <li>Closed to-date $15,000+ in revenue by buying and selling Pokemon trading cards on eBay from an initial investment of $300 (current value of assets if liquidated: around $45,000).</li>
                    <li>Maintained 100% positive feedback over 190 reviews and 400+ products sold.</li>
                    <li>Analyzed optimal price-points to purchase and sell various products and effectively marketed them to close sales.</li>
                </Typography>
            </Box>

            <Box component="div" className = {classes.timeLineItem}>
                <Typography variant= "h5" align= "center" className = {classes.subHeading}>
                    Web3 Investment
                </Typography>
                <Typography variant= "body1" align= "center" className = {classes.company}>
                    Self-Employed
                </Typography>
                <Typography variant= "subtitle1" align= "left" className = {classes.description} component="ul">
                <li>Managed a portfolio of $60,000+ in web3 assets from an initial investment of $2,000, conducting daily market analysis and project evaluation to identify and capitalize on lucrative web3 industry opportunities</li>
                <li>Utilized data-driven insights to optimize investments and generate substantial returns</li>
                </Typography>
            </Box>
            <Typography variant="h2" 
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                2021
            </Typography>
            <Box component="div" className = {classes.timeLineItem}>
                <Typography variant= "h5" align= "center" className = {classes.subHeading}>
                    Senior Analyst
                </Typography>
                <Typography variant= "body1" align= "center" className = {classes.company}>
                    Bruin Ventures
                </Typography>
                <Typography variant= "subtitle1" align= "left" className = {classes.description} component="ul">
                <li>Conducted a deep-dive analysis into dozens of startups that showed promise as potential investments within the industries of two venture capital firms: Redbud Brands (Medical) and Hamilton Ventures (Home Appliances) & presented the findings to general partners at each firm.</li>
                <li>Awarded the BV "Moonshot Award" in recognition of exceptional contributions in club involvement and outstanding project leadership</li> 

                </Typography>
            </Box>
            <Typography variant="h2" 
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                 2022
            </Typography>
            <Box component="div" className = {classes.timeLineItem}>
                <Typography variant= "h5" align= "center" className = {classes.subHeading}>
                    Business Development & Marketing Manager
                </Typography>
                <Typography variant= "body1" align= "center" className = {classes.company}>
                    Dipnmix
                </Typography>
                <Typography variant= "subtitle1" align= "left" className = {classes.description} component = "ul">
                <li>Devised and implemented customer acquisition strategies, transforming a local dessert business into a recognizable brand at UCLA </li>
                <li>Achieved a 100% increase in customer acquisition by refining marketing strategies and optimizing the in-store customer experience</li>

                </Typography>
            </Box>
            <Box component="div" className = {classes.timeLineItem}>
                <Typography variant= "h5" align= "center" className = {classes.subHeading}>
                    Web3 Business Development Intern
                </Typography>
                <Typography variant= "body1" align= "center" className = {classes.company}>
                    Nastie Labs
                </Typography>
                <Typography variant= "subtitle1" align= "left" className = {classes.description} component="ul">
                <li>Advised a software development startup specializing in community-driven NFTs & Play-to-Earn gaming on company growth strategies.</li> 
                <li>Collaborated with workers from Animoca Brands and ex-Marvel artist Walter McDaniels to integrate blockchain technology into the movie production industry and helped them leverage their backgrounds to grow the company</li>
                </Typography>
            </Box>
            <Box component="div" className = {classes.timeLineItem}>
                <Typography variant= "h5" align= "center" className = {classes.subHeading}>
                    CEO & Cofounder
                </Typography>
                <Typography variant= "body1" align= "center" className = {classes.company}>
                    Non-Fungible Studio
                </Typography>
                <Typography variant= "subtitle1" align= "left" className = {classes.description} component = "ul">
                <li>Spearheaded the creation of a web3 management and incubation service platform for innovative NFT projects and companies.</li>
                <li>Formed a strategic partnership with Dissrup, an industry-leading curated art marketplace, boosting their conversion rate by around 50%</li> 


                </Typography>
            </Box>
            <Typography variant="h2" 
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                2023
            </Typography>
            <Box component="div" className = {classes.timeLineItem}>
                <Typography variant= "h5" align= "center" className = {classes.subHeading}>
                    Project Manager
                </Typography>
                <Typography variant= "body1" align= "center" className = {classes.company}>
                    Genies
                </Typography>
                <Typography variant = "subtitle1" align = "center" className = {classes.descriptiion}>
                Genies is a web3 avatar creation startup valued at $1 billion (investors and board members such as former CEO of Disney, Robert Iger).
                </Typography>
                <Typography variant= "subtitle1" align= "left" className = {classes.description} component = "ul">
                <li>Led a 7-person team tasked with determining the most influential subgroup of Genies' target audience</li>
                <li>Divided the GenZ target audience into subgroups and developed a method to quantitatively analyze social media influence across these groups, conducted SWOT analysis on key competitors, and presented findings to the CEO & Head of R&D</li>

                </Typography>
            </Box>
            <Box component="div" className = {classes.timeLineItem}>
                <Typography variant= "h5" align= "center" className = {classes.subHeading}>
                    Software Engineer
                </Typography>
                <Typography variant= "body1" align= "center" className = {classes.company}>
                    X1 Robotics
                </Typography>
                <Typography variant= "subtitle1" align= "left" className = {classes.description} component = "ul">
                <li>Engaged in cutting-edge robotics projects as a software engineer within UCLA’s prestigious robotics club under ASME (American Society of Mechanical Engineers)</li>
                </Typography>
            </Box>
            <Box component="div" className = {classes.timeLineItem}>
                <Typography variant= "h5" align= "center" className = {classes.subHeading}>
                    Project Manager
                </Typography>
                <Typography variant= "body1" align= "center" className = {classes.company}>
                    Visa
                </Typography>
                <Typography variant= "subtitle1" align= "left" className = {classes.description} component = "ul">
                <li>Led a 6-person team in a comprehensive analysis of cybersecurity, focusing on threat detection and hunting techniques in addition to the identification of key companies and recent innovations in the field which could directly be applied to Visa</li>
                <li>Analyzed strategies for threat detection/hunting involving AI and data science techniques (SOAR, Autonomous Anomaly Response, etc.) and ranked them by importance to Visa; presented findings to the entire cybersecurity team</li>
                </Typography>
            </Box>
            <Box component="div" className = {classes.timeLineItem}>
                <Typography variant= "h5" align= "center" className = {classes.subHeading}>
                    Business Development Intern
                </Typography>
                <Typography variant= "body1" align= "center" className = {classes.company}>
                    Azimov, Inc.
                </Typography>
                <Typography variant= "subtitle1" align= "left" className = {classes.description} component = "ul">
                <li>Led the development of a pitch deck for VC fundraising: summarized the value proposition of Otherhalf, Azimov’s 3D AI Companion app, conducted competitor analysis, and estimated projected revenue based on calculations of TAM, SAM, number of active users, and MoM growth</li>
                <li>Secured Azimov's acceptance into the Nvidia Inception Program, facilitating access to valuable resources and networks, and enhancing the startup’s credibility and visibility in the AI space</li>
                <li>Conceptualized and designed the complete UI/UX for the web application, leveraging competitor traffic data to identify and implement features proven to drive organic growth</li>
                </Typography>
            </Box>
        </Box>
    </Box>
    </>
    
  );
};

export default Resume
