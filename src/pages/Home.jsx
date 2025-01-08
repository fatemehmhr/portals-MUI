import web1 from "../assets/web1.jpg";
import { Box, Typography } from "@mui/material";
import { useEffect, useRef, useCallback } from "react";
import Typed from "typed.js";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { firefly, links } from "../constants/Particles";
import { Helmet } from "react-helmet-async";

const Home = ({helmetTitle}) => {

    const nameEl = useRef(null);
    const infoEl = useRef(null);

    const strings = [
        "من مشاور امنیت اطلاعات هستم",
        "من مشاور دواپس هستم",
        "من مشاور وب هستم"
    ]

    useEffect(() => {
        const typedName = new Typed(
            nameEl.current,
            {
                strings: ["مجید خیاط ارشادی"],
                typeSpeed: 50,
                backSpeed: 20,
                backDelay: 10,
                showCursor: false
            }
        )

        const typedInfo = new Typed(infoEl.current,
            {
                strings: strings,
                startDelay: 1500,
                typeSpeed: 80,
                backSpeed: 50,
                backDelay: 50,
                loop: true,
                showCursor: false
            }
        )

        return () => {
            typedName.destroy();
            typedInfo.destroy();
        }

    }, [])

    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, [])

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, [])

    return (
        <Box sx={{
            backgroundImage: `url(${web1})`,
            height: '100vh',
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            // opacity: "50%"
        }} >
            <>
                <Helmet>
                    <title>{helmetTitle}</title>
                </Helmet>
            </>
            <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={links} />
            <Typography ref={nameEl} variant="h3" sx={{ color: "whitesmoke", pb: 2 }}>
            </Typography>
            <Typography ref={infoEl} variant="h5"
                sx={{
                    color: "whitesmoke",
                    textDecoration: "underline",
                    textDecorationColor: "#1976d2",
                    textUnderlineOffset: 15,
                }}>
            </Typography>

        </Box>
    )
}
export default Home;