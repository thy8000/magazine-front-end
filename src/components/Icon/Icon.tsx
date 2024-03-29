import React from "react";
import Facebook from "../../assets/icons/facebook.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Linkedin from "../../assets/icons/linkedin.svg";
import Twitter from "../../assets/icons/twitter.svg";
import Youtube from "../../assets/icons/youtube.svg";
import CloseMenu from "../../assets/icons/close-menu.svg";
import OpenMenu from "../../assets/icons/open-menu.svg";

interface IconProps {
  name: keyof typeof iconTypes;
  [key: string]: any;
}

const iconTypes: { [key: string]: React.ComponentType<any> } = {
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
  twitter: Twitter,
  youtube: Youtube,
  closeMenu: CloseMenu,
  openMenu: OpenMenu,
};

const IconComponent: React.FC<IconProps> = ({ name, ...props }) => {
  const Icon = iconTypes[name];
  if (!Icon) return null;
  return <Icon {...props} />;
};

export default IconComponent;
