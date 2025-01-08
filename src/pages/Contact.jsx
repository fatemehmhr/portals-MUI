import { useState, useEffect } from "react";

import { useTheme } from "@mui/material/styles";
import {
    Divider,
    Chip,
    Typography,
    Card,
    CardContent,
    Slide,
    TextField,
    InputAdornment,
    CardActions,
    Button,
    Box
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {
    AccountCircle,
    Face6Rounded,
    SubjectRounded,
    EmailRounded,
} from "@mui/icons-material";
import { Helmet } from "react-helmet-async";

import worldMap from "../assets/map.svg";

const Contact = ({ helmetTitle }) => {
    const [loading, setLoading] = useState(false);

    const theme = useTheme();

    useEffect(() => {
        setLoading(true);

        return () => {
            setLoading(false);
        };
    }, []);

    return (
        <Card
            sx={{
                height: "100vh",
                backgroundColor: "whitesmoke",
                overflowY: "scroll",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Helmet>
                <title>{helmetTitle}</title>
            </Helmet>
            <CardContent>
                <Divider
                    textAlign="center"
                    sx={{
                        mt: 2,
                        "&::before, &::after": {
                            borderColor: "warning.main",
                        },
                    }}
                >
                    <Chip
                        icon={<AccountCircle />}
                        color="warning"
                        label={
                            <Typography
                                variant="body1"
                                color="black"
                                sx={{ textAlign: "center" }}
                            >
                                ارتباط با من
                            </Typography>
                        }
                        sx={{ p: 3 }}
                    />
                </Divider>
                {/* ////////////////////////grid/////////////////////////////////// */}
                <Grid container sx={{ mt: 5 }}>
                    <Slide
                        direction="up"
                        in={loading}
                        style={{
                            transitionDelay: loading ? "200ms" : "0ms",
                        }}
                    >
                        <Grid xs={12} sx={12} md={8}>
                            <Card
                                sx={{
                                    justifyContent: "center",
                                    alignItems: "center",

                                }}
                            >
                                {/* ///////////////form/////////////////////////////// */}
                                <form autoComplete="off" >
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
                                {/* ///////////////form/////////////////////////////// */}
                            </Card>
                        </Grid>
                    </Slide>
                    <Slide
                        direction="up"
                        in={loading}
                        style={{
                            transitionDelay: loading ? "200ms" : "0ms",
                        }}
                    >
                        <Grid
                            xs={0}
                            sm={0}
                            md={4}
                            sx={{
                                textAlign: "center",
                                backgroundImage: `url(${worldMap})`,
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                            }}
                        >
                            <Typography
                                variant="h6"
                                color="black"
                                sx={{
                                    fontFamily: "vazir",
                                    mt: 4,
                                    display: {
                                        xs: "none",
                                        sm: "none",
                                        md: "block",
                                    },
                                }}
                            >
                                بیا در مورد همه چیز باهم صحبت کنیم
                            </Typography>
                            <Typography
                                variant="body1"
                                color="black"
                                sx={{
                                    mt: 2,
                                    display: {
                                        xs: "none",
                                        sm: "none",
                                        md: "block",
                                    },
                                }}
                            >
                                👋{" "}
                                <a
                                    href="mailto:96mehri@gmail.com"
                                    alt="email"
                                    style={{
                                        color: "tomato",
                                    }}
                                >
                                    ایمیل
                                </a>{" "}
                                بزن به من
                            </Typography>
                        </Grid>
                    </Slide>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default Contact;
