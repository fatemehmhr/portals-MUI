import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineContent, TimelineConnector } from "@mui/lab";
import { devWorkInfo } from "../../constants/devWorkInfo";
import {
    Typography,
    Slide
} from "@mui/material";
import { IoSchoolOutline } from "react-icons/io5";


const DevEduTimeline = ({ loading }) => {

    return (
        <>
            <Timeline position="right" sx={{ direction: "ltr" }}>
                {devWorkInfo.map((item, index) => (
                    <Slide key={index} direction="up" in={loading} style={{
                        transitionDelay: loading ? `${index + 3}99ms` : "0ms"
                    }} >
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot
                                    color="info"
                                    variant="outlined"
                                >
                                    <IoSchoolOutline style={{ color: 'black' }} />
                                </TimelineDot>
                                {index !== 3 ? (
                                    <TimelineConnector />
                                ) : null}
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography
                                    variant="caption"
                                    color="gray"
                                >
                                    {item.year}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    color="black"
                                >
                                    {item.cert}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="black"
                                >
                                    {item.major}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="black"
                                >
                                    {item.place}
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                    </Slide>
                ))}
            </Timeline>
        </>
    )
}
export default DevEduTimeline;