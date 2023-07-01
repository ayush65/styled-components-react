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

const SignupComponent = () => {
  return (
    <MainContainer>
      <Container>
        <StyledLogoImage
          src="https://www.freeiconspng.com/uploads/angry-birds-png-images-free-download-1.png"
          alt="boom-image"
        />
        <Flex>
          <StyledAuthText>Please Signup with your </StyledAuthText>
          <StyledHighlightedText>Personal Email</StyledHighlightedText>
          <StyledAuthText> account</StyledAuthText>
        </Flex>
        <StyledAuthInput placeholder="Email" type="text" />
        <StyledAuthInput placeholder="Password" type="password" />
        <Flex>
          <StyledAuthText>Already have an account ? </StyledAuthText>
          <StyledHighlightedTextLink to="/signin">Signin</StyledHighlightedTextLink>
        </Flex>
        <StyledAuthButton to="/questions">Signup</StyledAuthButton>
      </Container>
    </MainContainer>
  );
};

export default SignupComponent;
