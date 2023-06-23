import React, { HTMLAttributes } from "react";
import styled from "styled-components";

const UiButton = styled.button`
  display: inline-block;
  background-color: #3e8e41;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: red;
  }

  > :active {
    background-color: #3e8e41;
  }

  > :focus {
    outline: none;
  }
`;

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  label: string;
}

export const Button = ({ label, ...rest }: IButtonProps) => {
  return <UiButton {...rest}>{label}</UiButton>;
};
