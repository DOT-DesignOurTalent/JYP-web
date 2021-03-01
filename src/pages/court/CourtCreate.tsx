import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../components/Common/Button";

const CourtWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 40px 0px;
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

const MiddleText = styled.div`
  font-size: 25px;
  font-weight: 600;
  line-height: 34px;
  color: #15366d;
`;

const LinkDescriptionText = styled.div`
  font-weight: 300;
  font-size: 16px;
  line-height: 22px;
  color: #333333;
`;

const LinkBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  background-color: rgba(229, 229, 229, 0.48);
  border-radius: 20px;
  margin-top: 15px;
  padding: 0px 18px;
`;

const LinkBox = styled.span`
  font-weight: 500;
  font-size: 16px;
  color: #777777;
`;

const Letter = styled.div`
  width: 450px;
  height: 500px;
  background-color: yellow;
`;

const CourtCreate: React.FC = () => {
  // 리덕스 사용 전에 임시로 만들어둔 페이지 이동 수단입니다.
  const [page, setPage] = useState(false);

  const ButtonData = {
    text: "확인",
    size: "M",
    onClick: () => setPage(!page),
  };

  return (
    <CourtWrapper>
      <MainIcon>법과 점심</MainIcon>
      <DescriptionWrapper>
        {page ? (
          <>
            <MiddleText>재판 예약이 완료되었습니다.</MiddleText>
            <LinkDescriptionText>이제 피고인들에게 아래의 링크를 발송해주세요.</LinkDescriptionText>
            <LinkBoxWrapper>
              <LinkBox>https://app.slack.com/client/T01F9J2G07/C01FQJC084T</LinkBox>
            </LinkBoxWrapper>
          </>
        ) : (
          <>
            <BigText>아직 진행중인 재판이 없습니다.</BigText>
            <BigText>재판을 예약하고 열어주세요!</BigText>
          </>
        )}
      </DescriptionWrapper>
      <Letter />
      <Button item={ButtonData} />
    </CourtWrapper>
  );
};

export default CourtCreate;
