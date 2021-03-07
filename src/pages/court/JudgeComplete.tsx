import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../components/Common/Button";

const CourtWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const JudgeCompleteWrapper = styled.div`
  width: calc(100% - 586px);
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 96px 110px;
`;

const JudgeCompleteSelectWrapper = styled.div`
  width: 586px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(229, 229, 229, 0.48);
`;

const JudgeWaitBoldText = styled.span`
  font-weight: bold;
  font-size: 44px;
  color: #11376d;
`;

const TalkBubbleWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

const TalkBubble = styled.div`
  width: 580px;
  height: 220px;
  background: #ffffff;
  border: 1px solid #134eb0;
  border-radius: 30px;
  padding: 46px 68px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TalkBubbleFakeImage = styled.div`
  width: 120px;
  height: 120px;
  background-color: blue;
`;

const TalkBubbleTextWrapper = styled.div`
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TalkBubbleText = styled.span`
  font-weight: 500;
  font-size: 24px;
  color: #333333;
  margin: 5px 0px;
`;

const TalkBubbleBoldText = styled.span`
  font-weight: bold;
  font-size: 44px;
  color: #11376d;
`;

const JudgeCompleteSelectBox = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const JudgeCompleteSelectHr = styled.div`
  width: 90%;
  height: 2px;
  background-color: #777777;
  border-radius: 25px;
`;

const JudgeCompleteSelectText = styled.div`
  font-weight: 500;
  font-size: 24px;
  color: #333333;
`;

const JudgeComplete: React.FC = () => {
  const HangsoButtonData = {
    text: "항소하기",
    size: "M",
    onClick: () => console.log("test"),
  };

  const ConfirmButtonData = {
    text: "승인",
    size: "M",
    onClick: () => console.log("test"),
  };

  return (
    <CourtWrapper>
      <JudgeCompleteWrapper>
        <JudgeWaitBoldText>오늘의 판결이 정해졌습니다.</JudgeWaitBoldText>
        <TalkBubbleWrapper>
          <TalkBubble>
            <TalkBubbleFakeImage></TalkBubbleFakeImage>
            <TalkBubbleTextWrapper>
              <TalkBubbleText>오늘의 메뉴는</TalkBubbleText>
              <TalkBubbleText>쫄깃한 식감을 느낄 수 있는</TalkBubbleText>
              <TalkBubbleText>
                <TalkBubbleBoldText>중국집</TalkBubbleBoldText>이 좋겠군!
              </TalkBubbleText>
            </TalkBubbleTextWrapper>
          </TalkBubble>
        </TalkBubbleWrapper>
      </JudgeCompleteWrapper>
      <JudgeCompleteSelectWrapper>
        <JudgeCompleteSelectBox>
          <JudgeCompleteSelectText>말도안돼! 이런 법이 어디있어?</JudgeCompleteSelectText>
          <br />
          <JudgeCompleteSelectText style={{ marginBottom: "40px" }}>인정할 수 없어!</JudgeCompleteSelectText>
          <Button item={HangsoButtonData} />
        </JudgeCompleteSelectBox>
        <JudgeCompleteSelectHr></JudgeCompleteSelectHr>
        <JudgeCompleteSelectBox>
          <JudgeCompleteSelectText style={{ marginBottom: "40px" }}>그래! 이런 게 법이지.</JudgeCompleteSelectText>
          <Button item={ConfirmButtonData} />
        </JudgeCompleteSelectBox>
      </JudgeCompleteSelectWrapper>
    </CourtWrapper>
  );
};

export default JudgeComplete;
