import React from "react";
import styled from "styled-components";

const ContainerBodyWrapper = styled.div`
  height: 85vh;
  border: 1px solid #ccc;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 20px;
  background-color: #05643d;
`;

interface ContainerBodyProps {
  children: React.ReactNode;
}

const ContainerBody: React.FC<ContainerBodyProps> = ({ children }) => {
  return <ContainerBodyWrapper>{children}</ContainerBodyWrapper>;
};

export default ContainerBody;
