import styled from "styled-components"


export default function Entry(props) {
    const { balance } = props

    return (
        <EntryContainer>
            <Date>{balance.date}</Date>
            <Decription>{balance.description}</Decription>
            <Value type={balance.type}>{balance.value}</Value>
        </EntryContainer>
    )
}

const EntryContainer = styled.li`
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
    color: ${(props) => props.type === "positive" ? "#03AC00" : "#C70000"};
    position: absolute;
    right: 15px;
`