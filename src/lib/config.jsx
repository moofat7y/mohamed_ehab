import { FaInstagram, FaFacebook } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.jpg";

export const socialMediaLinks = [
  {
    link: "https://www.facebook.com/share/1DoVe2gggG/?mibextid=LQQJ4d",
    icon: <FaFacebook />,
    color: "#0866ff",
  },
  {
    link: "https://www.instagram.com/elbob.films1/profilecard/?igsh=MWs1bnN6YjM2NHFnZw==",
    icon: <FaInstagram />,
    color: "#b630a8",
  },
  {
    link: "mailto:business.muhaammad90@gmail.com",
    icon: <BiLogoGmail />,
    color: "#e62320",
  },
];

export const mediaImages = [image1, image2, image3];
