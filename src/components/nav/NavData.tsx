import React from "react";
import { Beopjeom } from "../../assets/images/beopjeom";
import { Judge } from "../../assets/images/judge";
import { Home } from "../../assets/images/home";
import { Help } from "../../assets/images/help";
import { NavbarItem } from "../../interfaces/NavbarItem";
import { ReactComponent as SVGIcon } from "../../assets/images/judge.svg";

export const NavData: NavbarItem[] = [
  {
    title: "홈",
    path: "/home",
    icon: <Home />,
  },
  {
    title: "법점",
    path: "/Court",
    icon: <Judge />,
  },
  {
    title: "도움말",
    path: "/help",
    icon: <Help />,
  },
];
