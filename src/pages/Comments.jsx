import { Helmet } from "react-helmet-async";
import {
    Box,
    Card,
    CardContent,
} from "@mui/material";
import { CustomDivider } from "../components/commons";
import { CommentsSlider } from "../components/pages";


const Comments = ({ helmetTitle }) => {

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
                <CustomDivider
                    bColor="success.main"
                    cColor="success"
                    align="center"
                    text="نظرات دانشجویان دوره های من"
                />
                <Box
                    component="div"
                    sx={{
                        mt: 10,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <CommentsSlider />
                </Box>
            </CardContent>
        </Card>
    );
};

export default Comments;