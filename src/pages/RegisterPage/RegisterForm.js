import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { BASE_URL } from "../../constants/url.js"

export default function RegisterForm() {
    const [form, setForm] = useState({ email: "", name: "", password: "", confirmPassword: "" })
    const navigate = useNavigate()

    function handleForm(e) {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    function sendRegister(e) {
        e.preventDefault()

        if (!form.password === form.confirmPassword) {
            return alert("The passwords are different!")
        }

        const newForm = {
            email: form.email,
            name: form.name,
            password: form.password
        }

        const body = { ...newForm }

        axios.post(`${BASE_URL}/auth/sign-up`, body)
            .then(res => {
                navigate("/")
            })
            .catch(err => alert(err.response.data.message))
    }

    return (
        <Form onSubmit={sendRegister}>
            <input name="name" value={form.name} onChange={handleForm} placeholder="Name" type="text" required />
            <input name="email" value={form.email} onChange={handleForm} placeholder="Email" type="email" required />
            <input name="password" value={form.password} onChange={handleForm} placeholder="Password" type="password" required />
            <input name="confirmPassword" value={form.confirmPassword} onChange={handleForm} placeholder="Confirm password" type="password" required />
            <button type="submit">Register</button>
        </Form>
    )
}

const Form = styled.form`
    width: 326px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 30px;
    input {
        background-color: #FFFFFF;
        width: 326px;
        height: 58px;
        margin-bottom: 13px;
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
`