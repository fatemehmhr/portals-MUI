import { Box } from '@mui/material';
import { SidebarHeader, SidebarTabs } from '.' ;

const SidebarContent = () => {
    return (
        <Box sx={{ textAlign: "center", justifyContent: "center", mt: 2 }} >
            <SidebarHeader />
            <SidebarTabs />
        </Box>
    )
}
export default SidebarContent;