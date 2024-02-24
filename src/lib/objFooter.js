import {FaMailBulk, FaPhone, FaRegCopyright} from "react-icons/fa";
import ScissorsIcon from "../../public/icons/logo";

export const rightFooterLinks = [
    {
        icon: <FaRegCopyright/>,
        title: " 2024 project Inc. All rights reserved.",
    },
];

export const middleFooterLinks = [
    {
        icon: <ScissorsIcon/>,
        title: "Embroidery Enterprises",
        path: "/",
        id: "logo-link"
    },
];

export const leftFooterLinks = [
    {
        icon: <FaPhone/>,
        title: "+91 9757208990",
    },
    {
        icon: <FaMailBulk/>,
        title: "abc@gmail.com",
    },
]