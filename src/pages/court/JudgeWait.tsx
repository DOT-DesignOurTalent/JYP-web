import React from "react";
import styled from "styled-components";
import Button from "../../components/Common/Button";

const CourtWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 96px 110px;
`;

const JudgeWaitHeader = styled.header`
  width: 100%;
  height: 68px;
  display: flex;
  justify-content: space-between;
`;

const JudgeWaitBoldText = styled.span`
  font-weight: bold;
  font-size: 44px;
  color: #11376d;
`;

const JudgeWaitContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 110px;
`;

const JudgeModalBackground = styled.div`
  width: calc(100% - 150px);
  height: 100%;
  position: absolute;
  top: 0;
  left: 150px;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const JudgeModal = styled.div`
  width: 580px;
  height: 686px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  border-radius: 30px;
`;

const FakeModalImage = styled.div`
  width: 230px;
  height: 230px;
  background-color: blue;
  margin-top: 136px;
  margin-bottom: 120px;
`;

const PleaseWaitText = styled.span`
  font-weight: 300;
  font-size: 16px;
  color: #333333;
  margin-top: 20px;
`;

const JudgeWait: React.FC = () => {
  const ButtonData = {
    text: "판결 시작",
    size: "M",
    onClick: () => console.log("test"),
  };

  return (
    <CourtWrapper>
      <JudgeWaitHeader>
        <JudgeWaitBoldText>오늘의 판결은 무엇인가요?</JudgeWaitBoldText>
        <Button item={ButtonData} />
      </JudgeWaitHeader>
      <JudgeWaitContentWrapper>혜원님이 열심히 수정중입니다...</JudgeWaitContentWrapper>
      <JudgeModalBackground>
        <JudgeModal>
          <FakeModalImage></FakeModalImage>
          <JudgeWaitBoldText>판결중</JudgeWaitBoldText>
          <PleaseWaitText>잠시만 기다려주세요.</PleaseWaitText>
        </JudgeModal>
      </JudgeModalBackground>
    </CourtWrapper>
  );
};

export default JudgeWait;
