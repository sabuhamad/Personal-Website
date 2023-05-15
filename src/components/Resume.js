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
                Relevant Courses: Algorithms and Complexity, Software Construction, Object-Oriented Programming, Data structures (Intro to CS I and II), Programming Languages, Probability, Discrete Structures, Linear Algebra
                </Typography>
            </Box>
            <Box component="div" className = {classes.timeLineItem}>
                <Typography variant= "h5" align= "center" className = {classes.subHeading}>
                    Top-Rated Seller
                </Typography>
                <Typography variant= "body1" align= "center" className = {classes.company}>
                    eBay
                </Typography>
                <Typography variant= "subtitle1" align= "center" className = {classes.description}>
                Generated $13,000 in revenue from an initial $300 investment by utilizing data-driven price-point analysis and strategic buying/selling techniques
                Maintained a 100% positive feedback score with 188 reviews 

                </Typography>
            </Box>
            <Box component="div" className = {classes.timeLineItem}>
                <Typography variant= "h5" align= "center" className = {classes.subHeading}>
                    Web3 Investment
                </Typography>
                <Typography variant= "body1" align= "center" className = {classes.company}>
                    Self-Employed
                </Typography>
                <Typography variant= "subtitle1" align= "center" className = {classes.description}>
                Managed a portfolio of $60,000+ in web3 assets from an initial investment of $2,000, conducting daily market analysis and project evaluation to identify and capitalize on lucrative web3 industry opportunities
                Utilized data-driven insights to optimize investments and generate substantial returns
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
                <Typography variant= "subtitle1" align= "center" className = {classes.description}>
                Demonstrated excellence as a Senior Analyst at two venture capital firms: Hamilton Ventures and Redbund Brands
                Acquired valuable knowledge in venture capital and private investing through a rigorous associate training program, optimizing Go-To-Market strategies and developing roadmaps for numerous startups
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
                <Typography variant= "subtitle1" align= "center" className = {classes.description}>
                Devised and implemented customer acquisition strategies, transforming a local dessert business into a franchisable brand. Achieved a 100% increase in customer acquisition by refining marketing strategies and optimizing in-store customer experience
                </Typography>
            </Box>
            <Box component="div" className = {classes.timeLineItem}>
                <Typography variant= "h5" align= "center" className = {classes.subHeading}>
                    Web3 Consultant & Community Expert
                </Typography>
                <Typography variant= "body1" align= "center" className = {classes.company}>
                    Nastie Labs
                </Typography>
                <Typography variant= "subtitle1" align= "center" className = {classes.description}>
                    Hired as an advisor at Nastie Labs, a software development startup that focuses on blockchain technology to develop community-focused NFTs, Play-and-Earn gaming, and other projects
                </Typography>
            </Box>
            <Box component="div" className = {classes.timeLineItem}>
                <Typography variant= "h5" align= "center" className = {classes.subHeading}>
                    CEO & Cofounder
                </Typography>
                <Typography variant= "body1" align= "center" className = {classes.company}>
                    Non-Fungible Studio
                </Typography>
                <Typography variant= "subtitle1" align= "center" className = {classes.description}>
                Spearheaded the creation of a web3 management and incubation service platform for innovative NFT projects and companies
                Formed a strategic partnership with Dissrup, an industry-leading curated art marketplace, driving $1 million+ in revenue
                Boosted Dissrup’s conversion rate by 25% through marketing and business development consultation

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
                <Typography variant= "subtitle1" align= "center" className = {classes.description}>
                Headed a 7-person team to collect data on the target audience in addition to devising a method to quantitatively analyze the data for Genies, a web3 avatar creation startup valued at $1 billion (investors and board members such as former CEO of Disney, Robert Iger). Presented a final deliverable encompassing the 10 weeks of research to the CEO along with the head of R&D 
                </Typography>
            </Box>
            <Box component="div" className = {classes.timeLineItem}>
                <Typography variant= "h5" align= "center" className = {classes.subHeading}>
                    Software Engineer
                </Typography>
                <Typography variant= "body1" align= "center" className = {classes.company}>
                    X1 Robotics
                </Typography>
                <Typography variant= "subtitle1" align= "center" className = {classes.description}>
                Engaged in cutting-edge robotics projects as a software engineer within UCLA’s prestigious robotics club under ASME (American Society of Mechanical Engineers)
                </Typography>
            </Box>
            <Box component="div" className = {classes.timeLineItem}>
                <Typography variant= "h5" align= "center" className = {classes.subHeading}>
                    Project Manager
                </Typography>
                <Typography variant= "body1" align= "center" className = {classes.company}>
                    Visa
                </Typography>
                <Typography variant= "subtitle1" align= "center" className = {classes.description}>
                Directed a team of 6 in a comprehensive analysis of cybersecurity, focusing on threat detection, hunting techniques, and key industry players for Visa, the global leader in digital payment solutions
                </Typography>
            </Box>
        </Box>
    </Box>
    </>
    
  );
};

export default Resume
