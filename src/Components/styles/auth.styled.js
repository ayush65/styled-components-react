import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 500px;
  height: 430px;
  max-height: 100%;
  background: #c1dbe3;
  max-width: 100%;
  border-radius: 25px;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  @media (max-width: 478px) {
    width: 350px;
  }

  @media (max-width: 378px) {
    width: 300px;
  }
`;

export const StyledLogoImage = styled.img`
  width: 100px;
  height: 100px;
  margin-top: 1rem;

  @media (max-width: 478px) {
    width: 80px;
    height: 80px;
  }

  @media (max-width: 378px) {
    width: 60px;
    height: 60px;
  }
`;
export const Flex = styled.div`
  display: flex;
  align-items:center;
  gap: 0.5rem;

  @media (max-width: 378px) {
    font-size: 0.8rem;
  }
`;

export const StyledAuthText = styled.p``;

export const StyledHighlightedText = styled.p`
  font-weight: 500;
`;

export const StyledAuthInput = styled.input`
  width: 80%;
  height: 30px;
  outline: none;
  border: none;
  padding: 0.6rem 0.5rem;
`;

export const StyledHighlightedTextLink = styled(Link)`
  text-decoration: none;
  font-weight: 500;
`;

export const StyledAuthButton = styled(Link)`
  padding: 0.8rem 2rem;
  border: none;
  background: #264653;
  color: white;
  border-radius: 25px;
  cursor: pointer;
  margin: 0.5rem 0;
  text-decoration: none;

  &:hover {
    background: #14213d;
  }
`;
