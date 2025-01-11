import { Box, Typography, Card, CardContent, Divider, Chip, Avatar } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import avatar from "../assets/avatar.jpg";
import { DevInfo ,Skills } from "../components/pages";

import { Helmet } from "react-helmet-async";
import { CustomAvatar, CustomDivider } from "../components/commons"



const About = ({ helmetTitle }) => {

    return (
        <Box color="whitesmoke" >
            <Card sx={{
                height: "100vh",
                backgroundColor: "whitesmoke",
                overflowY: "scroll"
            }}>
                <>
                    <Helmet>
                        <title>{helmetTitle}</title>
                    </Helmet>
                </>
                <CardContent >
                    <Grid container sx={{ mx: 3, display: 'flex' }}>

                        <Grid
                            xs={12}
                            sm={12}
                            md={8}
                            lg={8}
                            xl={8}
                        >
                            <CustomDivider
                                bColor="primary.main"
                                cColor="primary"
                                align="right"
                                text="مشاور امنیت اطلاعات"
                            />
                            <DevInfo />
                        </Grid>
                        <Grid
                            xs={0}
                            sm={0}
                            md={4}
                            lg={4}
                            xl={4}
                        >
                            <CustomAvatar
                                avatar={avatar}
                                size={250}
                                fallback="ME"
                            />
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid sx={{ width: 1, mt: 3 }}>
                            <CustomDivider
                                bColor="primary.main"
                                cColor="primary"
                                align="center"
                                text="مهارت های من"
                            />
                            <Skills />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    )
}
export default About;