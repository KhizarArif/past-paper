import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <HeaderContainer>
            <TitleContainer>
                <Subject>PHYSICS</Subject>
                <UrduSubject>فزکس</UrduSubject>
            </TitleContainer>
            <PaperInfoContainer>
                <InfoBlock>
                    <Label>Q Paper (Objective Type)</Label>
                    <UrduLabel>سوالیہ پرچہ (معروضی قسم)</UrduLabel>
                </InfoBlock>
                <InfoBlock>
                    <Label>Time Allowed 15 Minutes</Label>
                    <UrduLabel>وقت کی اجازت 15 منٹ</UrduLabel>
                </InfoBlock>
                <InfoBlock>
                    <Label>Maximum Marks 12</Label>
                    <UrduLabel>زیادہ سے زیادہ نمبر 12</UrduLabel>
                </InfoBlock>
                <InfoBlock>
                    <Label>PAPER CODE = 5471</Label>
                    <UrduLabel>پرچہ کوڈ = 5471</UrduLabel>
                </InfoBlock>
            </PaperInfoContainer>
            <Note>
                Note: Four possible answers A, B, C, and D to each question are given. The choice which you think is correct, fill that circle in front of that question with Marker or Pen ink in the answer-book.
                <br />
                نوٹ: ہر سوال کے چار ممکنہ جوابات A، B، C، اور D دیے گئے ہیں۔ جس انتخاب کو آپ صحیح سمجھتے ہیں، اس سوال کے سامنے والے دائرے کو مارکر یا پین کی سیاہی سے پر کریں۔
            </Note>
        </HeaderContainer>
    );
};

export default Header;

const HeaderContainer = styled.div`
    width: 50%;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 20px;
`;

const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`;

const Subject = styled.div`
    font-size: 24px;
    font-weight: bold;
`;

const UrduSubject = styled.div`
    font-size: 24px;
    font-weight: bold;
`;

const PaperInfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const InfoBlock = styled.div`
    width: 48%;
    margin-bottom: 10px;
    text-align: left;
`;

const Label = styled.div`
    font-size: 16px;
`;

const UrduLabel = styled.div`
    font-size: 16px;
`;

const Note = styled.div`
    font-size: 14px;
    text-align: left;
    margin-top: 10px;
`;
