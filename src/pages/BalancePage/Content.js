import styled from "styled-components"

export default function Content() {
    return (
        <ContentContainer>
            <List>
                <Entry>
                    <Date>30/11</Date>
                    <Decription>Almoço</Decription>
                    <Value>39,90</Value>
                </Entry>
            </List>
            <Total>
                <h3>Saldo</h3>
                <p>3000,00</p>
            </Total>
        </ContentContainer>
    )
}

const ContentContainer = styled.div`
    background-color: #FFFFFF;
    height: 65vh;
    border-radius: 5px;
    position: relative;
`

const List = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 23px 15px 0 15px;
    box-sizing: border-box;
`

const Entry = styled.li`
    display: flex;
`

const Date = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #C6C6C6;
    margin-right: 10px;
`

const Decription = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
`

const Value = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: right;
    color: #000000;
    position: absolute;
    right: 15px;
`

const Total = styled.div`
    display: flex;
    justify-content: space-between;
    h3 {
        position: absolute;
        bottom: 10px;
        left: 15px;
    }
    p {
        position: absolute;
        bottom: 10px;
        right: 15px;
    }
`