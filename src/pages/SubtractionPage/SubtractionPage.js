import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { useAuth } from "../../providers/Auth"
import SubForm from "./SubForm"

export default function SubtractionPage() {
    const { user } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (user.token === "") {
            navigate("/")
        }
    }, [])

    return (
        <PageContainer>
            <h1>New Subtraction</h1>
            <SubForm />
        </PageContainer>
    )
}

const PageContainer = styled.div`
    background-color: #9400D3;
    height: 100vh;
    padding: 25px 25px 0 25px;
    h1 {
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;
    }
`