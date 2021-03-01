import React from "react";
import styled from "styled-components";
import Button from "../../components/Common/Button";

const CourtWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 50px 0px;
`;

const MainIcon = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: blue;
  color: white;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BigText = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: #15366d;

  &:last-child {
    margin-top: 20px;
  }
`;

const Letter = styled.div`
  width: 450px;
  height: 500px;
  background-color: yellow;
`;

const ButtonData = {
  text: "확인",
  size: "M",
};

export const Court: React.FC = () => {
  return (
    <CourtWrapper>
      <MainIcon>법과 점심</MainIcon>
      <DescriptionWrapper>
        <BigText>아직 진행중인 재판이 없습니다.</BigText>
        <BigText>재판을 예약하고 열어주세요!</BigText>
      </DescriptionWrapper>
      <Letter />
      <Button item={ButtonData} />
    </CourtWrapper>
  );
};
