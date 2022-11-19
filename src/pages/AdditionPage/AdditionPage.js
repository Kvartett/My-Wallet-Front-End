import styled from "styled-components"
import AddForm from "./AddForm"

export default function AdditionPage() {
    return (
        <PageContainer>
            <h1>New Add</h1>
            <AddForm />
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