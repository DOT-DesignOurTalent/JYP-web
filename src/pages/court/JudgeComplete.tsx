import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../components/Common/Button";

const CourtWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 70px 100px;
  background-color: #ffffff;
`;

const JudgeCompleteBoldText = styled.span`
  font-weight: bold;
  font-size: 44px;
  color: #11376d;
`;

const JudgeCompleteContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 120px;
  padding-bottom: 120px;
  border-bottom: 1px solid #777777;
`;

const JudgeCompleteSelectedMenu = styled.div`
  display: flex;
  align-items: center;
`;

const FakeFood = styled.div`
  width: 120px;
  height: 120px;
  background-color: yellow;
  margin-right: 84px;
`;

const JudgeCompleteSelectedMenuText = styled.span`
  font-weight: 500;
  font-size: 24px;
  color: #333333;
  line-height: 40px;
`;

const JudgeCompleteSelectedMenuTextBold = styled.span`
  font-weight: 700;
  font-size: 36px;
  color: #11376d;
`;

const JudgeCompleteButtonWrapper = styled.div`
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const FakeGIF = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 532px;
  height: 400px;
  background-color: red;
`;

const JudgeComplete: React.FC = () => {
  const FindButtonData = {
    text: "식당찾기",
    size: "M",
    onClick: () => console.log("test"),
  };

  const ConfirmButtonData = {
    text: "확인",
    size: "M",
    onClick: () => console.log("test"),
  };

  return (
    <CourtWrapper>
      <JudgeCompleteBoldText>오늘의 판결이 정해졌습니다.</JudgeCompleteBoldText>
      <JudgeCompleteContentWrapper>
        <JudgeCompleteSelectedMenu>
          <FakeFood></FakeFood>
          <JudgeCompleteSelectedMenuText>
            오늘의 메뉴는 <br /> 쫄깃한 식감을 느낄 수 있는 <br /> <JudgeCompleteSelectedMenuTextBold>중국집</JudgeCompleteSelectedMenuTextBold>이 좋겠군!
          </JudgeCompleteSelectedMenuText>
        </JudgeCompleteSelectedMenu>
        <JudgeCompleteButtonWrapper>
          <Button item={FindButtonData} />
          <Button item={ConfirmButtonData} />
        </JudgeCompleteButtonWrapper>
      </JudgeCompleteContentWrapper>
      <FakeGIF />
    </CourtWrapper>
  );
};

export default JudgeComplete;
