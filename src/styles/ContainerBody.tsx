import React from "react";
import styled from "styled-components";

const ContainerBodyWrapper = styled.div`
  height: auto;
  width: auto;
  border: 1px solid #ccc;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 20px;
  background-color: #05643d;
`;

const CustomH1 = styled.h1`
  color: white;
  font-size: 35px;
`;

interface ContainerBodyProps {
  children: React.ReactNode;
}

const ContainerBody: React.FC<ContainerBodyProps> = ({ children }) => {
  return <ContainerBodyWrapper>{children}</ContainerBodyWrapper>;
};

export { ContainerBody, CustomH1 };
