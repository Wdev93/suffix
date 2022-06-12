//React imports
import React, { useState } from "react";
import { useForm } from "react-hook-form";
//Yup schema for validation
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
//Material UI imports
import { Box, Container, TextField, Button, Typography } from "@mui/material";

// Yup schema
const schema = yup.object().shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    textArea: yup.string(),
});

const Form = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [textArea, setTextArea] = useState("");

    // React Hook Form with destructuring
    const { register, handleSubmit, formState: { errors }, } = useForm({
        resolver: yupResolver(schema),
    });

    const submitForm = (data) => {
        console.log(data);

        //clear all input values in the form
        setFirstName("");
        setLastName("");
        setEmail("");
        setTextArea("");
    };

    return (
        <>
            <Box>
                <Container
                    maxWidth="xs"
                    sx={{
                        mt: 12,
                        boxShadow: 6,
                        p: 3,
                        borderRadius: 2,
                        bgcolor: "#fff",
                    }}
                >
                    <form onSubmit={handleSubmit(submitForm)}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            autoFocus
                            label={"First Name"}
                            name="firstName"
                            margin="normal"
                            autoComplete="off"
                            {...register("firstName", { required: true })}
                            value={firstName}
                            onChange={(event) => setFirstName(event.target.value)}
                        />
                        <Typography variant="caption" color="error">
                            {errors.firstName?.type === "required" &&
                                "First name is required"}
                        </Typography>
                        <TextField
                            variant="outlined"
                            fullWidth
                            autoFocus
                            label={"Last Name"}
                            name="lastName"
                            margin="normal"
                            autoComplete="off"
                            {...register("lastName", { required: true })}
                            value={lastName}
                            onChange={(event) => setLastName(event.target.value)}
                        />
                        <Typography variant="caption" color="error">
                            {errors.lastName?.type === "required" && "Last name is required"}
                        </Typography>
                        <TextField
                            variant="outlined"
                            fullWidth
                            autoFocus
                            label={"Enter email"}
                            name="email"
                            margin="normal"
                            autoCapitalize="off"
                            {...register("email", { required: true })}
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <Typography variant="caption" color="error">
                            {errors.email?.type === "required" && "Email is required"}
                        </Typography>
                        <TextField
                            id="filled-multiline-flexible"
                            fullWidth
                            multiline
                            maxRows={4}
                            variant="filled"
                            sx={{ mt: 2 }}
                            label={"Text Area"}
                            name="textArea"
                            margin="normal"
                            {...register("textArea", { required: true })}
                            value={textArea}
                            onChange={(event) => setTextArea(event.target.value)}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            disableRipple
                            sx={{ mt: 4, height: 50 }}
                        >
                            <Typography variant="h6">Request a Demo</Typography>
                        </Button>
                    </form>
                </Container>
            </Box>
        </>
    );
};

export default Form;
