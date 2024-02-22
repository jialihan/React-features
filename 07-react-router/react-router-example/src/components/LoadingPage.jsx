import React from "react";
import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";

const Wrapper = styled.div`
  padding: 4em;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingPage = () => {
  return (
    <Wrapper>
      <CircularProgress />
    </Wrapper>
  );
};

export default LoadingPage;
