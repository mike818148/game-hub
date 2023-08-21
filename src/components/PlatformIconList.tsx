import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { Platform } from "../services/game-service";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    // Annotation for element implicity
    // name: PlayStation
    // slug: playstation (not supposed to change)
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    andriod: FaAndroid,
    ios: MdPhoneIphone,
    nintendo: SiNintendo,
    web: BsGlobe,
  };
  return (
    <>
      <HStack marginY={1}>
        {platforms.map((platform) => {
          return <Icon as={iconMap[platform.slug]} color="gray.500" />;
        })}
      </HStack>
    </>
  );
};

export default PlatformIconList;
