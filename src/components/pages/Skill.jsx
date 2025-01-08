import { Divider, Chip, Box, Typography, LinearProgress, Badge } from "@mui/material"

const Skill = ({icon,color,name,value}) => {
    return (
        <>
            <Divider textAlign="right" sx={{
                "&::before,&::after": {
                    borderColor: `${color}.main`
                }
            }}> 
                <Chip 
            //     icon={
            //         <Box component="img" src={require("...")}
            //         sx={{height: 30}}
            //         />
            //    } 
                color={color} label={name} sx={{color: '#000', p:3, mt:2}} />
            </Divider>
            <Box sx={{display: "flex", alignItems: "center"}}>
                <Box sx={{ minWidth: 35, mr: 1}}>
                    <Typography variant="body2" color="black">
                        <Badge variant="standard" badgeContent={`${Math.round(value)}%`} color={color}  />
                    </Typography>
                </Box>
                <Box sx={{width: "100%" , mr:1}}>
                    <LinearProgress variant="determinate"
                    value={value} 
                    color={color}
                    sx={{height: 10, borderRadius: 2}}
                    />

                </Box>
            </Box>
        </>
    )
}
export default Skill;