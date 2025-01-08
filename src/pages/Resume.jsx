import { Helmet } from "react-helmet-async";
import {
    Card,
    CardContent,
} from "@mui/material";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { CustomDivider } from "../components/commons";
import { DevEduTimeline,DevExpTimeline } from "../components/pages";

const Resume = ({ helmetTitle }) => {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        return () => {
            setLoading(false);
        }
    }, [])

    return (
        <Card
            sx={{
                height: "100vh",
                backgroundColor: "whitesmoke",
                overflowY: "scroll",
            }}
        >
            <Helmet>
                <title>{helmetTitle}</title>
            </Helmet>
            <CardContent>
                <CustomDivider
                    bColor="error"
                    cColor="error"
                    // icon={}
                    align="center"
                    text="رزومه من"
                />

                <Grid container sx={{ mt: 4 }}>
                    <Grid xs={6}>
                        <CustomDivider
                            bColor="warning.main"
                            cColor="warning"
                            // icon={}
                            align="center"
                            text="تجربیات"
                        />

                       <DevExpTimeline loading={loading} />
                    </Grid>


                    {/* ///////////////////////////////////////////////////////////////////////////////////// */}

                    <Grid xs={6}>

                        <CustomDivider
                            bColor="info.main"
                            cColor="info"
                            // icon={}
                            align="center"
                            text="تحصیلات"
                        />
                        <DevEduTimeline loading={loading} />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}
export default Resume;