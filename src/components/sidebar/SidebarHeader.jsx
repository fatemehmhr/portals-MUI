import { Typography } from '@mui/material';
import avatar from "../../assets/avatar.jpg";
import ThemeActionButton from '../ThemeActionButton';
import { useTheme } from "@mui/material/styles";
import { CustomAvatar } from "../commons";
import SocialMediaIcons from '../SocialMediaIcons';



const SidebarHeader = () => {

    const theme = useTheme();

    return (
        <>
            <ThemeActionButton />
            <CustomAvatar
                avatar={avatar}
                size={200}
                fallback="ME"
             />
            <Typography sx={{ mt: 1.5 }} color={theme.palette.mode === "dark" ? "whitesmoke" : "secondary"} variant="h6" >
                مجید خیاط ارشادی
            </Typography>
            <Typography variant='caption' color={theme.palette.mode === "dark" ? "whitesmoke" : "secondary"}   >
                مشاور امنیت اطلاعات
            </Typography>
            <SocialMediaIcons />
        </>

    )
}
export default SidebarHeader;