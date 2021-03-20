import React, { useRef } from "react";
import styled from "styled-components";
import CopyPaste from "../../assets/images/CopyPaste";
import Button from "../../components/Common/Button";

const CourtWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 70px 100px;
  background-color: #ffffff;
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

const JudgeWaitLink = styled.div`
  width: 500px;
  height: 40px;
  background-color: rgba(229, 229, 229, 0.48);
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 15px 0px 18px;

  font-weight: 500;
  font-size: 16px;
  color: #777777;
`;

const JudgeWaitContents = styled.div`
  display: flex;
  width: 100%;
  margin-top: 30px;
`;

const JudgeWaitMenuAndChatWrapper = styled.div`
  width: 100%;
`;

const JudgeWaitMenuWrapper = styled.div`
  width: 100%;
`;

const JudgeWaitMenuAndChatTitle = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  color: #11376d;
  width: 690px;
  height: 67px;
  display: flex;
  align-items: center;
`;

const JudgeWaitMenuBox = styled.div`
  width: 690px;
  height: 336px;
  background-color: rgba(229, 229, 229, 0.2);
  border: 1px solid #e0e0e0;
  border-radius: 30px;
`;

const JudgeWaitChatWrapper = styled.div`
  width: 100%;
  margin-top: 30px;
`;

const JudgeWaitChatBox = styled.div`
  width: 690px;
  height: 60px;
  border: 1px solid #e0e0e0;
  border-radius: 30px;
  display: flex;
  align-items: center;
`;

const JudgeWaitChat = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 16px;
  font-weight: bold;
  color: #333333;

  &:hover {
    background-color: rgba(19, 78, 176, 0.1);
    color: #11376d;
  }

  &:first-child {
    border-radius: 30px 0px 0px 30px;
  }

  &:last-child {
    border-radius: 0px 30px 30px 0px;
  }
`;

const JudgeWaitChatText = styled.span`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #e0e0e0;
`;

const JudgeWaitUserWrapper = styled.div`
  width: 100%;
`;

const JudgeWaitUserTop = styled.div`
  width: 100%;
  margin-bottom: 80px;
  display: flex;
`;

const JudgeWaitUserBottom = styled.div`
  width: 100%;
  display: flex;
`;

const JudgeWaitUserBox = styled.div`
  width: 203px;
  height: 260px;
  margin-left: 65px;
  background-color: red;
`;

const JudgeModalBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 15;
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
  const modalBackground = useRef<HTMLDivElement>(null);
  const modal = useRef<HTMLDivElement>(null);

  const openModal = () => {
    if (modalBackground.current) {
      modalBackground.current.style.display = "flex";
    }
  };

  const closeModal = (e: any) => {
    if (modalBackground.current && !modal.current?.contains(e.target)) {
      modalBackground.current.style.display = "none";
    }
  };

  const ButtonData = {
    text: "판결 요청",
    size: "M",
    onClick: openModal,
  };

  return (
    <CourtWrapper>
      <JudgeWaitHeader>
        <JudgeWaitBoldText>오늘의 판결은 무엇인가요?</JudgeWaitBoldText>
        <Button item={ButtonData} />
      </JudgeWaitHeader>
      <JudgeWaitLink>
        http://app.slack.com/client/T01F9J2SG07/C01FQJC084T
        <CopyPaste />
      </JudgeWaitLink>
      <JudgeWaitContents>
        <JudgeWaitMenuAndChatWrapper>
          <JudgeWaitMenuWrapper>
            <JudgeWaitMenuAndChatTitle>참여자들이 선택한 오늘의 메뉴들이에요!</JudgeWaitMenuAndChatTitle>
            <JudgeWaitMenuBox></JudgeWaitMenuBox>
          </JudgeWaitMenuWrapper>
          <JudgeWaitChatWrapper>
            <JudgeWaitMenuAndChatTitle>참여자들과 소통해보세요!</JudgeWaitMenuAndChatTitle>
            <JudgeWaitChatBox>
              <JudgeWaitChat>
                <JudgeWaitChatText>안녕하세요</JudgeWaitChatText>
              </JudgeWaitChat>
              <JudgeWaitChat>
                <JudgeWaitChatText>배고파요..</JudgeWaitChatText>
              </JudgeWaitChat>
              <JudgeWaitChat>
                <JudgeWaitChatText>시작해요!</JudgeWaitChatText>
              </JudgeWaitChat>
              <JudgeWaitChat>
                <JudgeWaitChatText>좋아요~</JudgeWaitChatText>
              </JudgeWaitChat>
              <JudgeWaitChat>
                <JudgeWaitChatText style={{ borderRight: "none" }}>기다려주세요!</JudgeWaitChatText>
              </JudgeWaitChat>
            </JudgeWaitChatBox>
          </JudgeWaitChatWrapper>
        </JudgeWaitMenuAndChatWrapper>
        <JudgeWaitUserWrapper>
          <JudgeWaitUserTop>
            <JudgeWaitUserBox></JudgeWaitUserBox>
            <JudgeWaitUserBox></JudgeWaitUserBox>
            <JudgeWaitUserBox></JudgeWaitUserBox>
          </JudgeWaitUserTop>
          <JudgeWaitUserBottom>
            <JudgeWaitUserBox></JudgeWaitUserBox>
            <JudgeWaitUserBox></JudgeWaitUserBox>
            <JudgeWaitUserBox></JudgeWaitUserBox>
          </JudgeWaitUserBottom>
        </JudgeWaitUserWrapper>
      </JudgeWaitContents>
      <JudgeModalBackground ref={modalBackground} onClick={closeModal}>
        <JudgeModal ref={modal}>
          <FakeModalImage></FakeModalImage>
          <JudgeWaitBoldText>판결중</JudgeWaitBoldText>
          <PleaseWaitText>잠시만 기다려주세요.</PleaseWaitText>
        </JudgeModal>
      </JudgeModalBackground>
    </CourtWrapper>
  );
};

export default JudgeWait;
