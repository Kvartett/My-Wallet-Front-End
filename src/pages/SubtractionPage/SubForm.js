import { useState } from "react"
import styled from "styled-components"
import axios from "axios"
import { BASE_URL } from "../../constants/url.js"
import { useNavigate } from "react-router-dom"
import { ThreeDots } from "react-loader-spinner"
import { useAuth } from "../../providers/Auth.js"
import dayjs from "dayjs"
dayjs.locale("pt-br")


export default function SubForm() {
    const { user, config } = useAuth()
    const [isLoading, setIsLoading] = useState(false)
    const [form, setForm] = useState({ description: "", value: "", type: "negative" })
    const navigate = useNavigate()

    function handleForm(e) {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    function sendValue(e) {
        e.preventDefault()
        setIsLoading(true)
        if (form.description.length === 0) {
            alert("Give a description")
            setIsLoading(false)
        } else if (form.value.length === 0) {
            alert("Give a correct value")
            setIsLoading(false)
        } else {
            const body = {
                email: user.email,
                ...form,
                date: dayjs().format("DD/MM")
            }

            axios.post(`${BASE_URL}/balance`, body, config)
                .then(res => {
                    navigate("/balance")
                    setForm("")
                })
                .catch(err => {
                    alert(err.response.data.message)
                    setIsLoading(false)
                })
        }
    }

    return !isLoading ? (
        <Form onSubmit={sendValue}>
            <input name="value" value={form.value} onChange={handleForm} placeholder="Value" type="number" />
            <input name="description" value={form.description} onChange={handleForm} placeholder="Descripion" type="text" />
            <button type="submit">Save</button>
        </Form>
    ) : (
        <Form>
            <input disabled name="value" value={form.value} placeholder="Value" type="number" />
            <input disabled name="description" value={form.description} placeholder="Description" type="text" />
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
    .load-button {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`