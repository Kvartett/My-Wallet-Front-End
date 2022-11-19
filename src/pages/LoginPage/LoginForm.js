import { useState } from "react"
import styled from "styled-components"
import axios from "axios"
import { BASE_URL } from "../../constants/url.js"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../providers/Auth.js"
import { ThreeDots } from "react-loader-spinner"


export default function LoginForm() {
    const { setUser } = useAuth()
    const [isDisable, setIsDisabled] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [form, setForm] = useState({ email: "", password: "" })
    const navigate = useNavigate()

    function handleForm(e) {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    function logIn(e) {
        e.preventDefault()
        setIsLoading(true)

        const body = { ...form }
        setIsDisabled(!isDisable)

        const promise = axios.post(`${BASE_URL}/auth/sign-in`, body)
        promise.then(res => {
            setUser(res.data)
            navigate("/balance")
        })

        promise.catch(err => {
            alert(err.response.data.message)
            setIsLoading(false)
        })
    }

    return !isLoading ? (
        <Form onSubmit={logIn}>
            <input name="email" value={form.email} onChange={handleForm} placeholder="E-mail" type="email" />
            <input name="password" value={form.password} onChange={handleForm} placeholder="Password" type="password" />
            <button type="submit">Log in</button>
        </Form>
    ) : (
        <Form>
            <input disabled name="email" value={form.email} placeholder="Email" type="email" />
            <input disabled name="password" value={form.password} placeholder="Password" type="password" />
            <button className="load-button">
                <ThreeDots className="loader" color="#FFFFFF" height={50} width={50} />
            </button>
        </Form>
    )
}

const Form = styled.form`
    width: 326px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 30px;
    margin-bottom: 35px;
    input {
        background-color: #FFFFFF;
        width: 326px;
        height: 58px;
        margin-bottom: 10px;
        border: 1px solid;
        border-radius: 5px;
        padding-left: 15px;
        box-sizing: border-box;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        color: #000000;
    }
    button {
        width: 326px;
        height: 46px;
        background-color: #A328D6;
        border: none;
        border-radius: 5px;
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        color: #FFFFFF;
        box-sizing: border-box;
    }
    .load-button {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`