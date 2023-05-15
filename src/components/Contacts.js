import React from 'react'
import {makeStyles, withStyles} from "@material-ui/core/styles";
import {TextField, Typography, Button, Grid, Box} from "@material-ui/core"
import SendIcon from "@material-ui/icons/Send"
import Navbar from './Navbar';
import emailjs from 'emailjs-com';
import Typed from 'react-typed';
import ParticleBackground from './ParticleBackground';

const useStyles = makeStyles(theme=>({
    form: {
        top: "50%",
        left:"50%",
        transform: "translate(-50%, -50%)",
        position: "absolute"
    },
    button: {
        marginTop: "1rem",
        color: "#4682B4",
        borderColor: "#4682B4",
        "&:hover": {
            backgroundColor: "white",
            borderColor: "white",
          },
    },
    largeInput: {
        "& .MuiOutlinedInput-input": {
          height: "150px", // Adjust the height as desired
          padding: "10px", // Add padding for better appearance
        },
    }

}));

const InputField = withStyles({
    root: {
        "& label.Mui-focused":
        {
        color: "#4682B4",
        },
        "& label": {
            color: "gray"
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "gray"
            },
            "&:hover fieldset": {
                borderColor: "white"
            },
            "&.Mui-focused fieldset": {
                borderColor: "white"
            }
        }


    },
})(TextField);

const ParagraphField = withStyles({
    root: {
        "& label.Mui-focused":
        {
        color: "#4682B4",
        },
        "& label": {
            color: "gray"
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "gray"
            },
            "&:hover fieldset": {
                borderColor: "white"
            },
            "&.Mui-focused fieldset": {
                borderColor: "white"
            }
        }
    },
})(props => <TextField {...props} multiline rows={4} />);

const Contacts = () => {
    const classes = useStyles();
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [organization, setOrganization] = React.useState('');
    const [message, setMessage] = React.useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.send("service_kjfbcwh", "template_kceqcrr", {
            from_name: name,
            from_email: email,
            organization: organization,
            message: message
        }, 'f-0M0Dv-MlkQHrTIa')
        .then((response) => {
           console.log('SUCCESS!', response.status, response.text);
           setName('');
           setEmail('');
           setOrganization('');
           setMessage('');
        }, (err) => {
           console.log('FAILED...', err);
        });
    }
  return (
    <>
    <Navbar/>
    <ParticleBackground/>
    <Box component="div">
        <Grid container justify="center">
            <Box component= "form" className = {classes.form} onSubmit={sendEmail}>
                <Typography variant="h5" style={{color: "white", textAlign: "center", textTransform: "uppercase"}}>
                <Typed strings= {["Contact Me"]} typeSpeed={40} />
                </Typography>
                <br />
                <InputField fullWidth={true} label="Name..." variant="outlined" value={name} onChange={(e) => setName(e.target.value)} inputProps={{style:{color: "#4682B4"}}} margin="dense" size="medium" />
                <br />
                <InputField fullWidth={true} label="Email..." variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} inputProps={{style:{color: "#4682B4"}}} margin="dense" size="medium" />
                <br />
                <InputField fullWidth={true} label="Organization..." variant="outlined" value={organization} onChange={(e) => setOrganization(e.target.value)} inputProps={{style:{color: "#4682B4"}}} margin="dense" size="medium" />
                <br />
                <ParagraphField fullWidth={true} label="Message..." variant="outlined" value={message} onChange={(e) => setMessage(e.target.value)} inputProps={{ style: { color: "#4682B4" } }} margin="dense" size="medium" className={classes.largeInput} />
                <br />
                <Button type="submit" variant="outlined" className={classes.button} fullWidth={true} endIcon={<SendIcon />}>
                    contact me
                </Button>
            </Box>
        </Grid>
    </Box>
    </>
  )
};

export default Contacts
