import { Box, Fab } from '@mui/material';
import { MdMenu } from "react-icons/md";
import { useContext } from 'react';
import MainContext from "../../context";

const DrawerActionButton = () => {

    const { setDrawerOpen } = useContext(MainContext);

    return (
        <Box
            sx={{
                position: 'absolute',
                display: {
                    xs: "block",
                    sm: "block",
                    md: "none",
                    lg: "none",
                    xl: "none"
                }
            }}
        >
            <Fab
                aria-label='sidebar'
                size='small'
                sx={{ m: 2 }}
                onClick={() => setDrawerOpen(true)} >
                <MdMenu />
            </Fab>
        </Box>

    )
}
export default DrawerActionButton;