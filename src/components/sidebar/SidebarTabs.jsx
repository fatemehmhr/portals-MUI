import { Tabs, Tab } from '@mui/material';
import { useContext } from 'react';
import MainContext from "../../context";
import { tabsData } from "../../constants/tabsData"
import { useTheme } from "@mui/material/styles";

const SidebarTabs = () => {

    const { pageNumber, handlePageNumber, setDrawerOpen } = useContext(MainContext);
    const data = tabsData();
    const theme = useTheme();

    return (
        <Tabs
            orientation="vertical"
            variant="scrollable"
            scrollButton="auto"
            textColor={theme.palette.mode === "dark" ? "primary" : "secondary"} 
            indicatorColor={theme.palette.mode === "dark" ? "primary" : "secondary"} 
            allowScrollButtonsMobile
            value={pageNumber}
            onChange={handlePageNumber}
        >
            {data.map((tab, index) => (
                <Tab
                    key={index}
                    label={tab.label}
                    icon={tab.icon}
                    iconPosition='start'
                    sx={{
                        justifyContent: 'left',
                         ml: 2,
                         color: "text.primary",  
                        "&.MuiTab-root": {
                            minHeight: 60
                        }
                    }}
                    onClick={() => setDrawerOpen(false)}
                    {...tab}
                />

            ))}






        </Tabs>
    )
}
export default SidebarTabs;