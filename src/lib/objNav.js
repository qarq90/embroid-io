import {FaMessage, FaWandMagicSparkles} from "react-icons/fa6";
import {FaHome, FaQuestionCircle} from "react-icons/fa";
import ScissorsIcon from "../../public/icons/logo";

export const NavLinks = [
    {
        icon: <ScissorsIcon/>,
        title: "Kingdom Enterprises",
        path: "/",
        id: "logo-link"
    },
    {
        icon: <FaHome/>,
        title: "Home",
        path: "/",
        id: "home-link"
    },
    {
        icon: <FaWandMagicSparkles/>,
        title: "Works",
        path: "/works",
        id: "works-link"
    },
    {
        icon: <FaQuestionCircle/>,
        title: "About",
        path: "/about",
        id: "about-link"
    },
    {
        icon: <FaMessage/>,
        title: "Contact",
        path: "/contact",
        id: "contact-link"
    },
];
