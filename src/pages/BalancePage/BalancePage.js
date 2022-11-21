import styled from "styled-components"
import { useAuth } from "../../providers/Auth.js"
import Options from "./Options.js"
import Content from "./Content.js"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { BASE_URL } from "../../constants/url.js"

export default function BalancePage() {
    const { user, config } = useAuth()
    const [balance, setBalance] = useState([])
    const navigate = useNavigate()
    const [balanceLoaded, setBalanceLoaded] = useState(false)

    useEffect(() => {
        if (user.token === "") {
            navigate("/")
        } else {
            getBalance()
        }
    }, [])

    function getBalance() {
        axios.get(`${BASE_URL}/balance`, config)
            .then(res => {
                setBalance(res.data)
                setBalanceLoaded(true)
            })
            .catch(err => {
                console.log(err.response)
            })
    }

    function reloadPage() {
        window.location.reload(false)
    }

    return (
        <PageContainer>
            <NavBar>
                <h2>Hello, {user.name} </h2>
                <ion-icon onClick={reloadPage} name="log-out-outline"></ion-icon>
            </NavBar>
            <Content balance={balance} balanceLoaded={balanceLoaded} />
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