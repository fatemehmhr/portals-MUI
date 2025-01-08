import { icon } from "../constants/icons";
import { Box ,IconButton } from '@mui/material';

const SocialMediaIcons = () =>{
    return(
        <Box component="section" sx={{ mt: 1 }} >
        {

                icon.map((item, index) => (
                    <IconButton key={index} >
                        <a href={item.adress}  target='_blank' rel='noopener noreferrer' style={{
                            alignItems: 'center',
                            display:'flex',
                            justifyContent: 'center',
                        }}>
                            {item.icon}
                        </a>
                    </IconButton>
                ))
            }

        </Box>
    )
}
export default SocialMediaIcons;