import { MdHome, MdFace, MdOutlineTextSnippet, MdOutlineMessage, MdOutlineConnectWithoutContact } from "react-icons/md";
import { BsTerminal } from "react-icons/bs";

const tabProps = (index) => {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    }
}

export const tabsData = () => {
    const tabs = [
        {
            label: "صفحه اصلی",
            icon: <MdHome style={{ fontSize: '1.5em' }} />,
            ...tabProps(0),
        },
        {
            label: "درباره من",
            icon: <MdFace style={{ fontSize: '1.5em' }} />,
            ...tabProps(1),
        },
        {
            label: " رزومه من",
            icon: <MdOutlineTextSnippet style={{ fontSize: '1.5em' }} />,
            ...tabProps(2),
        },
        {
            label: "نمونه کارها",
            icon: <BsTerminal style={{ fontSize: '1.5em' }} />,
            ...tabProps(3),
        },
        {
            label: "نظرات دانشجویان",
            icon: <MdOutlineMessage style={{ fontSize: '1.5em' }} />,
            ...tabProps(4),
        },
        {
            label: "ارتباط با من",
            icon: <MdOutlineConnectWithoutContact style={{ fontSize: '1.5em' }} />,
            ...tabProps(5),
        }
    ]

    return tabs;
}