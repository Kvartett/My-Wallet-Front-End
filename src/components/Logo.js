import styled from "styled-components"

export default function Logo() {
    return (
        <LogoContainer>
            MyWallet
        </LogoContainer>
    )
}

const LogoContainer = styled.h1`
    width: 147px;
    height: 50px;
    font-family: Saira Stencil One;
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 50px;
    color: #FFFFFF;
`