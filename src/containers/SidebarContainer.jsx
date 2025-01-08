import Grid from '@mui/material/Unstable_Grid2';
import { grey } from '@mui/material/colors';
import { useTheme } from "@mui/material/styles";

const SidebarContainer = ({ children }) => {

    const theme = useTheme();

    return (
        <Grid
            xs={0}
            sm={0}
            md={3}
            lg={2}
            xl={2}
            sx={{
                backgroundColor: theme.palette.mode === "dark" ? grey[900] : grey[400],
                height: '100vh',
                overflowX: 'hidden',
                overflowY: "auto"
            }}>
            {children}
        </Grid>
    )
}
export default SidebarContainer;