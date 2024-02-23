import {FaMessage, FaWandMagicSparkles} from "react-icons/fa6";
import {FaHome, FaQuestionCircle} from "react-icons/fa";

export const NavLinks = [
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
