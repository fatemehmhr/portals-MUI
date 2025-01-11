import { useFormik } from "formik";
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import {
    Typography,
    CardContent,
    TextField,
    InputAdornment,
    CardActions,
    Button,
} from "@mui/material";

import {
    Face6Rounded,
    SubjectRounded,
    EmailRounded,
} from "@mui/icons-material";


import { contactValidationSchema } from "../../pages/validations/contactValidation";
import ReCAPTCHA from "react-google-recaptcha";

function ContactForm() {

    const theme = useTheme();

    const contactInputNames = {
        fullname: "",
        email: "",
        subject: "",
        message: "",
        recaptcha: ""
    }

    const formik = useFormik({
        initialValues: contactInputNames,
        onSubmit: values => {
            console.log("form values:", values);
        },
        validationSchema: contactValidationSchema
    })

    return (
        <form autoComplete="off" onSubmit={formik.handleSubmit}>
            <CardContent>
                <div style={{ padding: 20 }}>
                    <Grid container spacing={2} sx={{ direction: "ltr" }}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="نام و نام خانوادگی"
                                variant="outlined"
                                color="warning"
                                name="fullname"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment postion="end">
                                            <Face6Rounded />
                                        </InputAdornment>
                                    ),
                                }}
                                helperText={
                                    formik.touched.fullname ? formik.errors.fullname : null
                                }
                                error={
                                    Boolean(formik.touched.fullname && formik.errors.fullname)
                                }
                                value={formik.values?.fullname}
                                onChange={formik.handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="آدرس ایمیل"
                                variant="outlined"
                                color="warning"
                                name="email"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment postion="end">
                                            <EmailRounded />
                                        </InputAdornment>
                                    ),
                                }}
                                helperText={
                                    formik.touched.email ? formik.errors.email : null
                                }
                                error={
                                    Boolean(formik.touched.email && formik.errors.email)
                                }
                                value={formik.values?.email}
                                onChange={formik.handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="عنوان"
                                variant="outlined"
                                color="warning"
                                name="subject"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment postion="end">
                                            <SubjectRounded />
                                        </InputAdornment>
                                    ),
                                }}
                                helperText={
                                    formik.touched.subject ? formik.errors.subject : null
                                }
                                error={
                                    Boolean(formik.touched.subject && formik.errors.subject)
                                }
                                value={formik.values?.subject}
                                onChange={formik.handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="متن پیام"
                                variant="outlined"
                                multiline
                                rows={4}
                                color="warning"
                                name="message"
                                helperText={
                                    formik.touched.message ? formik.errors.message : null
                                }
                                error={
                                    Boolean(formik.touched.message && formik.errors.message)
                                }
                                value={formik.values?.message}
                                onChange={formik.handleChange}

                            />
                        </Grid>
                    </Grid>
                </div>

            </CardContent>
            <CardActions
                sx={{
                    alignItems: "end",
                    flexDirection: "column",
                }}
            >
                <ReCAPTCHA
                    sitekey={
                        process.env
                            .REACT_App_RECAPTCHA_SIT_KEY
                    }
                    theme={theme.palette.mode}
                    hl="fa"
                    onChange={(value) => formik.setFieldValue("recaptcha", value)}
                    style={{ marginRight: '30px' }}
                />
                {formik.errors.recaptcha &&
                    formik.touched.recaptcha && (
                        <Typography
                            variant="caption"
                            color="error"
                        >
                            {formik.errors.recaptcha}
                        </Typography>
                    )}
                <Button
                    type="submit"
                    color="success"
                    variant="contained"
                    sx={{ mt: 2 }}
                    fullWidth
                >
                    ارسال کن
                </Button>
            </CardActions>
        </form>
    )
}

export default ContactForm