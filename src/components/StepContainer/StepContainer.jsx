import styled from "styled-components";
import { Title } from "../Title/Title";
import InputText from "../InputText/InputText"

const StepContainerConfig = styled.section`
    background-color: white;
    width: 83%;
    border-radius: 15px;
    padding: 30px 25px;
    position: absolute;
    top: 110px;
  
    & h1 {
    margin: 0;
    }
`
function StepContainer({step}) {

    return (
        <>
            <StepContainerConfig>
                <Title>Personal info</Title>
                <p>Please provide your name, email address, and phone number.</p>
                <InputText 
                    labelFor='name'
                    labelText='Name'
                    inputType='text'
                    inputIid='name'
                    inputPlaceholder='e.g. Stephen King'
                />
                <InputText 
                    labelFor='name'
                    labelText='Name'
                    inputType='text'
                    inputIid='name'
                    inputPlaceholder='e.g. stephenking@lorem.com'
                />
                <InputText 
                    labelFor='phone'
                    labelText='Phone Number'
                    inputType='tel'
                    inputIid='phone'
                    inputPlaceholder='e.g. +1 234 567 890'
                />
            </StepContainerConfig>
        </>
    )
}

export default StepContainer
