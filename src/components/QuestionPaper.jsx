import React from "react";
import { QuizData } from "../jsonData.js";
import styled from "styled-components";
import Header from "./Header";

const QuestionPaper = () => {
  return (
    <>
      <Header />
      <MainContainer>
        {QuizData.map((question, index) => (
          <Container>
            <QuestionBlocks key={index}>
              <QuestionText>
                <Span>{question.Quest} </Span>
                <Span1> {question.UQuest} </Span1>
              </QuestionText>

              <OptionsList>
                <Option>
                  {" "}
                  A) {question.Op1} {question.UOp1}{" "}
                </Option>
                <Option>
                  {" "}
                  B) {question.Op2} {question.UOp2}{" "}
                </Option>
                <Option>
                  {" "}
                  C) {question.Op3} {question.UOp3}{" "}
                </Option>
                <Option>
                  {" "}
                  D) {question.Op4} {question.UOp4}{" "}
                </Option>
              </OptionsList>
            </QuestionBlocks>
            <QuestionBlock>{index + 1}</QuestionBlock>
          </Container>
        ))}
      </MainContainer>
    </>
  );
};

export default QuestionPaper;

const Container = styled.div`
  display: flex;
`;

const Span = styled.span`
  font-weight: bold;
  width: 40%;
  display: inline-block;
`;
const Span1 = styled.span`
  font-weight: bold;
  width: 40%;
  display: inline-block;
  float: right;
`;

const MainContainer = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #000;
  border-radius: 10px;
  width: 210mm; /* A4 width */
  height: 297mm; /* A4 height */
  margin: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media print {
    width: auto;
    height: auto;
    margin: 0;
    box-shadow: none;
    background-color: #fff;
  }
`;

const QuestionBlocks = styled.div`
  width: -webkit-fill-available;
  border: 1px solid #000;
  background-color: #fff;
`;

const QuestionBlock = styled.div`
  text-align: center;
  width: 5%;
  border: 1px solid #000;
  background-color: #fff;
`;

const QuestionText = styled.p`
  font-size: 16px;
  font-weight: bold;
  display: inline-block;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const OptionsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-between;
  overflow-break: break-word;
`;

const Option = styled.li`
  font-size: 14px;
  fweight: bold;
  align-items: center;
  margin-bottom: 5px;
  max-width: 70%;
`;

const Circle = styled.span`
  width: 16px;
  height: 16px;
  border: 1px solid #000;
  border-radius: 50%;
  display: inline-block;
  margin-right: 10px;
`;
