import React, { ReactNode } from "react";
import styled from "styled-components";

const UiCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 10px;
`;

const UiCardHeader = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

const UiCardBody = styled.div`
  margin-bottom: 5px;
`;

interface CardProps {
  header: string;
  children: ReactNode;
}

export const Card = ({ header, children }: CardProps) => {
  return (
    <UiCard>
      <UiCardHeader>{header}</UiCardHeader>
      <UiCardBody>{children}</UiCardBody>
    </UiCard>
  );
};
