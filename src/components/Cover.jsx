import React from "react"
import { Container } from "@material-ui/core"
import { UIStyle } from "../constants/config"
import styled from "styled-components"
const ConverContainerImage = styled.div`
    width: auto;
    height: inherit;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 1;
`
const CoverContainer = styled.div`
    width: auto;
    height: 800px;
    background: #0049b7;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    z-index: 2;
`
const ChildrenWrapper = styled.div`
    padding-block-start: 6vh;
    margin-block-start: 4vh;
    background-color: #f75990;
    border-radius: 20px;
    padding-block-end: 6vh;
    margin-left: 2vw;
    margin-right: 2vw;
`
const Cover = ({ children }) => {
    return (
        <ConverContainerImage className="cover-image">
            <CoverContainer>
                <Container disableGutters>
                    <ChildrenWrapper>{children}</ChildrenWrapper>
                </Container>
            </CoverContainer>
        </ConverContainerImage>
    )
}
export { Cover }
