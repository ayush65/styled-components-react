import React from "react";
import {
  Container,
  Flex,
  MainContainer,
  StyledAuthButton,
  StyledAuthInput,
  StyledAuthText,
  StyledHighlightedText,
  StyledHighlightedTextLink,
  StyledLogoImage,
} from "../styles/auth.styled";

const SigninComponent = () => {
  return (
    <MainContainer>
      <Container>
        <StyledLogoImage
          src="https://www.freeiconspng.com/uploads/angry-birds-png-images-free-download-1.png"
          alt="boom-image"
        />
        <Flex>
          <StyledAuthText>Please Signin with your </StyledAuthText>
          <StyledHighlightedText>Personal Email</StyledHighlightedText>
          <StyledAuthText> account</StyledAuthText>
        </Flex>
        <StyledAuthInput placeholder="Email" type="text" />
        <Flex>
          <StyledAuthText>Don't have an account  ? </StyledAuthText>
          <StyledHighlightedTextLink to="/">Signup</StyledHighlightedTextLink>
        </Flex>

        <StyledAuthButton to="/">Signin</StyledAuthButton>
      </Container>
    </MainContainer>
  );
};

export default SigninComponent;
