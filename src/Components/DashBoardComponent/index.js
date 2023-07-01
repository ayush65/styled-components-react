import React from "react";
import {
  DashBoardHeader,
  StyledContentCard,
  StyledContentCardContainer,
  StyledContentCardHeader,
  StyledDashBoardContentContainer,
  StyledDashBoardData,
  StyledDashBoardIconsConatiner,
  StyledDashBoardImage,
  StyledDashBoardSidebar,
  StyledDashboardConatinerDiv,
  StyledDashboardContentHeader,
  StyledIconsDiv,
} from "../styles/dashboard.styled";
import { RxAvatar } from "react-icons/rx";
import { AiFillBell, AiFillHome, AiFillShopping } from "react-icons/ai";
import { BsFillSunFill, BsFillChatFill } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";

const DashBoardComponent = () => {
  return (
    <>
      <DashBoardHeader>
        <StyledDashBoardImage
          src="https://dashui.codescandy.com/dashuipro/assets/images/brand/logo/logo-2.svg"
          alt=""
        />

        <StyledDashBoardIconsConatiner>
          <BsFillSunFill />
          <AiFillBell />
          <RxAvatar />
        </StyledDashBoardIconsConatiner>
      </DashBoardHeader>

      <StyledDashBoardContentContainer>
        <StyledDashBoardSidebar>
          <StyledIconsDiv>
            <AiFillHome /> Dashboard{" "}
          </StyledIconsDiv>
          <StyledIconsDiv>
            <SlCalender /> Calender{" "}
          </StyledIconsDiv>
          <StyledIconsDiv>
            <BsFillChatFill /> Chat{" "}
          </StyledIconsDiv>
          <StyledIconsDiv>
            <AiFillShopping /> Shopping{" "}
          </StyledIconsDiv>
          <StyledIconsDiv>
            <AiFillHome /> Dashboard{" "}
          </StyledIconsDiv>
          <StyledIconsDiv>
            <SlCalender /> Calender{" "}
          </StyledIconsDiv>
          <StyledIconsDiv>
            <BsFillChatFill /> Chat{" "}
          </StyledIconsDiv>
          <StyledIconsDiv>
            <AiFillShopping /> Shopping{" "}
          </StyledIconsDiv>
          <StyledIconsDiv>
            <AiFillHome /> Dashboard{" "}
          </StyledIconsDiv>
          <StyledIconsDiv>
            <SlCalender /> Calender{" "}
          </StyledIconsDiv>
          <StyledIconsDiv>
            <BsFillChatFill /> Chat{" "}
          </StyledIconsDiv>
          <StyledIconsDiv>
            <AiFillShopping /> Shopping{" "}
          </StyledIconsDiv>
          <StyledIconsDiv>
            <AiFillHome /> Dashboard{" "}
          </StyledIconsDiv>
          <StyledIconsDiv>
            <SlCalender /> Calender{" "}
          </StyledIconsDiv>
          <StyledIconsDiv>
            <BsFillChatFill /> Chat{" "}
          </StyledIconsDiv>
          <StyledIconsDiv>
            <AiFillShopping /> Shopping{" "}
          </StyledIconsDiv>
          <StyledIconsDiv>
            <AiFillHome /> Dashboard{" "}
          </StyledIconsDiv>
          <StyledIconsDiv>
            <SlCalender /> Calender{" "}
          </StyledIconsDiv>
          <StyledIconsDiv>
            <BsFillChatFill /> Chat{" "}
          </StyledIconsDiv>
          <StyledIconsDiv>
            <AiFillShopping /> Shopping{" "}
          </StyledIconsDiv>
        </StyledDashBoardSidebar>
        <StyledDashBoardData>
          <StyledDashboardConatinerDiv>
            <StyledDashboardContentHeader>
              <h1>Projects</h1>
              <button>Create New Project</button>
            </StyledDashboardContentHeader>
            <StyledContentCardContainer>
              <StyledContentCard>
                <StyledContentCardHeader>
                  <h3>Projects</h3>
                  <div>
                    <AiFillBell />
                  </div>
                </StyledContentCardHeader>
                <h1>18</h1>
                <p>2 Completed</p>
              </StyledContentCard>


              <StyledContentCard>
                <StyledContentCardHeader>
                  <h3>Active Tasks</h3>
                  <div>
                    <AiFillBell />
                  </div>
                </StyledContentCardHeader>
                <h1>28</h1>
                <p>9 Completed</p>
              </StyledContentCard>


              <StyledContentCard>
                <StyledContentCardHeader>
                  <h3>Teams</h3>
                  <div>
                    <AiFillBell />
                  </div>
                </StyledContentCardHeader>
                <h1>108</h1>
                <p>100 Completed</p>
              </StyledContentCard>

              <StyledContentCard>
                <StyledContentCardHeader>
                  <h3>Productivity</h3>
                  <div>
                    <AiFillBell />
                  </div>
                </StyledContentCardHeader>
                <h1>97%</h1>
                <p>5% Completed</p>
              </StyledContentCard>
            </StyledContentCardContainer>
          </StyledDashboardConatinerDiv>
        </StyledDashBoardData>
      </StyledDashBoardContentContainer>
    </>
  );
};

export default DashBoardComponent;
