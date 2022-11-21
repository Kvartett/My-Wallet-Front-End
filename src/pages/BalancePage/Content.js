import { useEffect, useState } from "react"
import styled from "styled-components"
import Entry from "./Entry"


export default function Content(props) {
    const [total, setTotal] = useState(0)
    const { balance, balanceLoaded } = props

    useEffect(() => {
        updateTotal()
    }, [balanceLoaded])


    function updateTotal() {
        let newTotal = total
        balance.forEach((e) => {
            if (e.type === "positive") {
                newTotal += parseFloat(e.value)
            } else {
                newTotal -= parseFloat(e.value)
            }
        })
        setTotal(newTotal)
    }

    if (balance === undefined || balance.length === 0) {
        return (
            <ContentContainer>
                <List>
                    <NoBalance>You don't have entrys here!</NoBalance>
                </List>
            </ContentContainer>
        )
    }

    return (
        <ContentContainer>
            <List>
                {balance.map((balance, i) => <Entry balance={balance} key={i} />)}
            </List>
            <Total total={total} >
                <h3>SALDO</h3>
                <p>{total.toFixed(2)}</p>
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

const Total = styled.div`
    display: flex;
    justify-content: space-between;
    h3 {
        position: absolute;
        bottom: 10px;
        left: 15px;
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        color: #000000;
        }
    p {
        position: absolute;
        bottom: 10px;
        right: 15px;
        font-style: normal;
        font-weight: 400;
        font-size: 17px;
        line-height: 20px;
        color: ${(props) => props.total > 0 ? "#03AC00" : "#C70000"};
    }
`

const NoBalance = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #868686;
`