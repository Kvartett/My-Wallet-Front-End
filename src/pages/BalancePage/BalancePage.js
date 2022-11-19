import styled from "styled-components"
import { useAuth } from "../../providers/Auth.js"
import Options from "./Options.js"
import Content from "./Content.js"

export default function BalancePage() {
    const { user } = useAuth()

    return (
        <PageContainer>
            <NavBar>
                <h2>Hello, Fulano </h2>
                <ion-icon name="log-out-outline"></ion-icon>
            </NavBar>
            <Content />
            <Options />
        </PageContainer>
    )
}

const PageContainer = styled.div`
    background-color: #9400D3;
    height: 100vh;
    padding: 25px 25px 16px 25px;
`

const NavBar = styled.div`
    display: flex;
    justify-content: space-between;
    h2 {
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;
        margin-bottom: 22px;
    }
    ion-icon {
        font-size: 30px;
        color: #FFFFFF;
    }
`