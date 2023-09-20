import styled from "styled-components";

export const CardStyle = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  border: solid 1.8px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  text-align: center;
  margin: 15px;
  padding: 5px;
  color: white;
  width: 15vw; /* Defina a largura fixa em pixels ou outra unidade de sua escolha */
  height: 14vh; /* Defina a altura fixa em pixels ou outra unidade de sua escolha */
  overflow-wrap: break-word; /* Permite a quebra de linha quando o texto não couber na largura */
`;
