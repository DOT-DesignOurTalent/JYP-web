import React from "react";
import styled from "styled-components";
import { ButtonItem } from "../../interfaces/ButtonItem";

type ButtonProps = {
  item: ButtonItem;
};

interface CommonButtonType {
  size: string;
}

const CommonButton = styled.button<CommonButtonType>`
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  background-color: #15366d;
  border-radius: 35px;
  height: 48px;

  width: ${(props) => (props.size > "M" ? "280px" : "300px")};
`;

const Button: React.FC<ButtonProps> = ({ item }: ButtonProps) => {
  return <CommonButton size={item.size}>{item.text}</CommonButton>;
};

export default Button;