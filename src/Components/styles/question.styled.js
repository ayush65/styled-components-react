import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
`;

export const StyledQuestionContainer = styled.div`
  width: 500px;
  max-width: 100%;
  height: 800px;
  max-height: 100%;
  padding: 1.5rem;
  border: 1px solid black;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 10px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f1f1; 
  }
   
  ::-webkit-scrollbar-thumb {
    background: #888; 
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }

  @media (max-width: 580px) {
    height: 600px;
  }

  @media (max-width: 540px) {
    width: 400px;
    height: 560px;
  }

  @media (max-width: 450px) {
    width: 300px;
    height: 560px;
  }
`;

export const StyledQuestionsButton = styled(Link)`
  padding: 0.8rem 2rem;
  background: #0b3142;
  color: white;
  border: none;
  border-radius: 25px;
  text-decoration: none;
`;
