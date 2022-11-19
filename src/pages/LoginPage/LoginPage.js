import styled from "styled-components"
import Logo from "../../components/Logo.js"
import LoginForm from "./LoginForm.js"
import { useNavigate } from "react-router-dom"

export default function LoginPage() {
    const navigate = useNavigate()

    function goToRegister() {
        navigate("/register")
    }

    return (
        <PageContainer>
            <Logo />
            <LoginForm />
            <p onClick={goToRegister}>Create an account!</p>
        </PageContainer>
    )
}

const PageContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #9400D3;
    p {
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        color: #FFFFFF;
    }
`