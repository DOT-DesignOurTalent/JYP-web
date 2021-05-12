import React, { useRef, useState } from "react";
import styled from "styled-components";
import Button from "../../components/Common/Button";
import mainIcon from "../../assets/images/starLogo.png";
import Envelope from "../../assets/images/Envelope";
import CopyPaste from "../../assets/images/CopyPaste";
import { useHistory } from "react-router";
import Pizza from "../../assets/images/Pizza";

const CourtWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0px;
  background-color: #ffffff;
`;

const MainIcon = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 27px;
`;

MainIcon.defaultProps = {
  src: mainIcon,
};

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;

const LargeText = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: #15366d;

  &:last-child {
    margin-top: 20px;
  }
`;

const LettersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1000px;
`;

const LetterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Letter = styled.div`
  width: 420px;
  height: 490px;
  background-color: #ffffff;
  border: 1px solid #c4c4c4;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.08);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LetterTitle = styled.span`
  font-weight: bold;
  font-size: 32px;
  color: #11376d;
  margin-top: 45px;
`;

const LetterDescription = styled.span`
  font-weight: 300;
  font-size: 16px;
  color: #777777;
  margin-top: 14px;
`;

const LetterBlackText = styled.span`
  font-weight: bold;
  font-size: 18px;
  color: #333333;
  margin-top: 24px;
`;

const LetterNoProblem = styled.span`
  position: absolute;
  top: 574px;
  font-family: Noto Sans;
  font-weight: 300;
  font-size: 16px;
  text-decoration-line: underline;
  color: #777777;
  cursor: pointer;
  z-index: 11;
`;

const LetterPlusButton = styled.span`
  color: #cccccc;
  font-size: 31px;
  width: 36px;
  height: 36px;
  border: 1px solid #cccccc;
  border-radius: 50px;
  margin-top: 30px;
  cursor: pointer;
  z-index: 11;
  text-align: center;
  margin-bottom: 50px;
`;

const LetterLinkWrapper = styled.div`
  width: 260px;
  height: 36px;
  background: #ffffff;
  border: 0.5px solid #15366d;
  border-radius: 25px;
  margin-top: 60px;
  margin-bottom: 60px;
  z-index: 11;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 8px 8px 16px;
`;

const LetterLink = styled.input`
  font-size: 15px;
  color: #333333;
`;

const SelectMenuModalBackground = styled.div`
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

const SelectMenuModal = styled.div`
  padding: 30px 50px 50px 50px;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 30px;
  z-index: 15;
`;

const SelectMenuModalTitle = styled.div`
  height: 50px;
  font-weight: bold;
  font-size: 20px;
  color: #11376d;
  display: flex;
  align-items: center;
`;

const SelectMenuModalMenuWrapper = styled.div`
  width: 590px;
  padding: 30px 30px 0px 30px;
  svg:not(:nth-child(4n-3)) {
    margin-left: 30px;
  }
  svg:hover {
    background-color: rgba(0, 255, 255, 0.2);
    border: 1px solid #00ffff;
    box-sizing: border-box;
  }
`;

const SelectMenuModalMenus = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: -8px;
`;

const CourtCreate: React.FC = () => {
  const modalBackground = useRef<HTMLDivElement>(null);
  const modal = useRef<HTMLDivElement>(null);

  const history = useHistory();
  const ButtonData = {
    text: "확인",
    size: "S",
    onClick: () => history.push("/court/judge"),
  };

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

  return (
    <CourtWrapper>
      <MainIcon />
      <DescriptionWrapper>
        <LargeText>아직 진행중인 재판이 없습니다.</LargeText>
        <LargeText>재판을 예약하고 열어주세요!</LargeText>
      </DescriptionWrapper>
      <LettersWrapper>
        <LetterWrapper>
          <Letter>
            <LetterTitle>법정 생성</LetterTitle>
            <LetterDescription>법정을 생성해 친구들을 초대해 보세요!</LetterDescription>
            <LetterBlackText>가고싶은 음식점</LetterBlackText>
            <LetterPlusButton onClick={openModal}>+</LetterPlusButton>
            <LetterNoProblem>어떤 메뉴든 상관 없어요</LetterNoProblem>
            <Button item={ButtonData} />
          </Letter>
          <Envelope />
        </LetterWrapper>
        <LetterWrapper>
          <Letter>
            <LetterTitle>코드 입장</LetterTitle>
            <LetterDescription>법정을 생성해 친구들을 초대해 보세요!</LetterDescription>
            <LetterLinkWrapper>
              <LetterLink />
            </LetterLinkWrapper>
            <Button item={ButtonData} />
          </Letter>
          <Envelope />
        </LetterWrapper>
      </LettersWrapper>
      <SelectMenuModalBackground ref={modalBackground} onClick={closeModal}>
        <SelectMenuModal ref={modal}>
          <SelectMenuModalTitle>원하는 메뉴를 선택해주세요.</SelectMenuModalTitle>
          <SelectMenuModalMenuWrapper>
            <SelectMenuModalMenus>
              <Pizza />
              <Pizza />
              <Pizza />
              <Pizza />
              <Pizza />
              <Pizza />
              <Pizza />
              <Pizza />
              <Pizza />
              <Pizza />
              <Pizza />
              <Pizza />
            </SelectMenuModalMenus>
            <SelectMenuModalMenus></SelectMenuModalMenus>
          </SelectMenuModalMenuWrapper>
        </SelectMenuModal>
      </SelectMenuModalBackground>
    </CourtWrapper>
  );
};

export default CourtCreate;
