import React from "react";
import MainBox from "../components/MainBox";
import HeaderWrapper from "../components/HeaderWrapper";
import { Button, IconButton } from "@mui/material";
import TopNav from "../components/TopNav";
import { AiOutlineHome } from "react-icons/ai";
import ContentWrapper from "../components/ContentWrapper";
import { XButton2 } from "../components/Buttons";
import { useNavigate } from "react-router-dom";

const makeId = (length: number): string => {
  let result = "";
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export default function Main() {
  const navigate = useNavigate();
  function create() {
    const id = makeId(4);
    navigate(`/room/${id}`);
  }
  
  return (
    <MainBox>
      <HeaderWrapper>
        <IconButton>
          <AiOutlineHome />
        </IconButton>
        <TopNav>
          <Button sx={{ color: "initial" }}>Main</Button>
        </TopNav>
      </HeaderWrapper>
      <ContentWrapper>
        <XButton2 onClick={create}>Create room</XButton2>
      </ContentWrapper>
    </MainBox>
  );
}
