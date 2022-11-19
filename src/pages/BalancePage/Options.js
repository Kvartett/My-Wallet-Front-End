import styled from "styled-components"

export default function Options() {
    return (
        <OptionsContainer>
            <AddValue>
                <ion-icon name="add-circle-outline"></ion-icon>
                <p>Add value</p>
            </AddValue>
            <SubValue>
                <ion-icon name="remove-circle-outline"></ion-icon>
                <p>Subtract value</p>
            </SubValue>
        </OptionsContainer>
    )
}

const OptionsContainer = styled.div`
    height: 115px;
    display: flex;
    justify-content: space-between;
    margin-top: 14px;
    margin-bottom: 16px;
    div {
        background-color: #A328D6;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 150px;
        height: 114px;
        border-radius: 5px;
        padding-left: 10px;
        box-sizing: border-box;
    }
`
const AddValue = styled.div`
    ion-icon {
        font-size: 30px;
        color: #FFFFFF;
    }
    p {
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        color: #FFFFFF;
    }
`

const SubValue = styled.div`
    ion-icon {
        font-size: 30px;
        color: #FFFFFF;
    }
    p {
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        color: #FFFFFF;
    }
`