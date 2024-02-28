import type { ComponentProps } from "react";

import {
  kirill_image,
  lulllia_image,
  masha_image,
  nico_image,
  oleg_image,
  pavel_image,
  roman_image,
} from "./images";
import type { TeamMember } from "./team-member";

const TEAM_LIST: Array<ComponentProps<typeof TeamMember>> = [
  {
    title: "Kirill",
    description: "Backend guy",
    image: kirill_image,
    link: {
      title: "Twitch",
      href: "",
    },
  },
  {
    title: "Pavel",
    description: "Frontend boss",
    image: pavel_image,
    link: {
      title: "Linkedin",
      href: "https://www.linkedin.com/in/pavel-shapov-79b3bb251/",
    },
  },
  {
    title: "Oleg",
    description: "Frontend boss too... but joined later",
    image: oleg_image,
    link: {
      title: "GitHub",
      href: "",
    },
  },
  {
    title: "Roman",
    description: "Delivered VERY smart contracts",
    image: roman_image,
    link: {
      title: "Link",
      href: "",
    },
  },
  {
    title: "Masha",
    description: "The first reason why promoshock looks awesome",
    image: masha_image,
    link: {
      title: "Link",
      href: "",
    },
  },
  {
    title: "Julia",
    description: "The second reason why promoshock looks awesome",
    image: lulllia_image,
    link: {
      title: "Link",
      href: "",
    },
  },
  {
    title: "Nico",
    description: "will be fired if we won’t win hackathon",
    image: nico_image,
    link: {
      title: "Link",
      href: "",
    },
  },
];

export { TEAM_LIST };
