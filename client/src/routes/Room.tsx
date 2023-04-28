import React, { Fragment } from "react";
import { Button, IconButton } from "@mui/material";
import { AiOutlineLeft } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import ContentWrapper from "../components/ContentWrapper";
import TopNav from "../components/TopNav";
import MainBox from "../components/MainBox";
import HeaderWrapper from "../components/HeaderWrapper";
import RoomContainer from "../components/RoomContainer";

export default function Room() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <Fragment>
      <MainBox>
        <HeaderWrapper>
          <IconButton sx={{ pl: 0 }} onClick={() => navigate("/")}>
            <AiOutlineLeft />
          </IconButton>
          <TopNav>
            <Button sx={{ color: "initial" }}>Room</Button>
          </TopNav>
        </HeaderWrapper>
        <ContentWrapper>{id ? <RoomContainer id={id} /> : null}</ContentWrapper>
      </MainBox>
    </Fragment>
  );
}
