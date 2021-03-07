import React from "react";
import CourtCreate from "./CourtCreate";
import JudgeComplete from "./JudgeComplete";
import JudgeWait from "./JudgeWait";

export const Create: React.FC = () => {
  return <CourtCreate />;
};
export const Judge: React.FC = () => {
  return <JudgeWait />;
};
export const Complete: React.FC = () => {
  return <JudgeComplete />;
};
