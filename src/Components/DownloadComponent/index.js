import React from "react";
import { MainContainer } from "../styles/auth.styled";
import { QRCodeCanvas } from "qrcode.react";
import { FlexCol } from "../styles/question.styled";
import { QrCodeButton } from "../styles/qr.styled";

const DownloadComponent = () => {
  const qrCodeValue = "https://example.com";
  return (
    <MainContainer>
      <FlexCol>
        {" "}
        <QRCodeCanvas value={qrCodeValue} width="100" />
        <QrCodeButton to="/dashboard">Download</QrCodeButton>
      </FlexCol>
    </MainContainer>
  );
};

export default DownloadComponent;
