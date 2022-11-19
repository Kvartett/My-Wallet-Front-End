import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import Logo from "../../components/Logo.js"
import RegisterForm from "./RegisterForm"

export default function RegisterPage() {
    const navigate = useNavigate()

    function goToLogin() {
        navigate("/")
    }

    return (
        <PageContainer>
            <Logo />
            <RegisterForm />
            <p onClick={goToLogin} >Already have an account, Log in</p>
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
        text-align: center;
        color: #FFFFFF;
        margin-top: 32px;
    }
`