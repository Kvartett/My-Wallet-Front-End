import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { useAuth } from "../../providers/Auth"
import AddForm from "./AddForm"


export default function AdditionPage() {
    const { user } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (user.token === "") {
            navigate("/")
        }
    }, [])

    return (
        <PageContainer>
            <Content>
                <h1>New Add</h1>
                <AddForm />
            </Content>
        </PageContainer>
    )
}

const PageContainer = styled.div`
    background-color: #9400D3;
    height: 100vh;
    padding: 25px 25px 0 25px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Content = styled.div`
    h1 {
        text-align: center;
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;
    }
`