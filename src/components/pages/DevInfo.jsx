import { Typography } from "@mui/material";


const Info = ({ children }) => {
    return (
        <Typography variant="body1" color="black" textAlign="left" sx={{ mt: 2 }}>
            {children}
        </Typography>
    )
}

const DevInfo = () => {
    return (
        <>
            <Info>نام و نام خانوادگی: مجید خیاط ارشادی</Info>
            <Info>متولد: 1373</Info>
            <Info>شهر: تهران</Info>
            <Info> majidershadi@gmail.com :ادرس ایمیل</Info>
            <Info>شماره موبایل: 09010300877</Info>
        </>
    )
}
export default DevInfo;