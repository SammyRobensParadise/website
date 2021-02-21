import React from "react"
import { Container } from "@material-ui/core"
import { UIStyle } from "../constants/config"
import styled from "styled-components"
const ConverContainerImage = styled.div`
    width: auto;
    height: inherit;

    background-repeat: no-repeat;
    z-index: 1;
`
const CoverContainer = styled.div`
    width: auto;
    height: 800px;
    background: ${UIStyle.UIColors.primary};
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    z-index: 2;
`
const ChildrenWrapper = styled.div`
    padding-block-start: 6vh;
    margin-block-start: 4vh;
    background-color: ${UIStyle.UIColors.secondary};
    border-right-style: solid;
    border-right-width: 10px;
    border-right-color: ${UIStyle.UIColors.compBlue};
    border-top-style: solid;
    border-top-width: 10px;
    background-size: contain;
    overflow-x: hidden;
    border-top-color: ${UIStyle.UIColors.compBlue};
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
