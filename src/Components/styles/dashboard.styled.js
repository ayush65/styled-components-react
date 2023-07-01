import { styled } from "styled-components";

export const DashBoardHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledDashBoardImage = styled.img`
  margin: 1rem;
`;

export const StyledDashBoardIconsConatiner = styled.div`
  margin: 0 1rem;
  font-size: 1.7rem;
  display: flex;
  gap: 1.8rem;
  color: grey;
`;

export const StyledDashBoardContentContainer = styled.div`
  display: flex;
`;

export const StyledDashBoardSidebar = styled.div`
  width: 210px;
  height: 94vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;

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
`;

export const StyledIconsDiv = styled.div`
  display: flex;
  padding: 0 2rem;
  align-items: center;
  gap: 1rem;
  font-size: 1rem;
  color: grey;
  cursor: pointer;

  &:hover {
    color: red;
  }
`;

export const StyledDashBoardData = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledDashboardConatinerDiv = styled.div`
  width: 87vw;
  background: #219ebc;
  height: 200px;
`;

export const StyledDashboardContentHeader = styled.div`
  display: flex;
  width: 95%;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;

  & > h1{
    color: white;
  }

  & > button {
    padding: 0.6rem; 1.8rem;
    border: none;
    backgreound: white;
    border-radius: 10px;
    font-size: 1.1rem;
    cursor: pointer;
  }
`;

export const StyledContentCardContainer = styled.div`
  display: flex;
  width: 95%;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
`;

export const StyledContentCard = styled.div`
  width: 300px;
  height: 170px;
  background: white;
  border-radius: 25px;
  padding: 1rem;
  box-shadow: 0px 7px 0px 0px lightblue;
  cursor: pointer;
`;

export const StyledContentCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div {
    font-size: 1.3rem;
    background: #BDE0FE; 
    color: #023047;
    padding: 0.5rem;
    border-radius: 5px;
  }
`;
