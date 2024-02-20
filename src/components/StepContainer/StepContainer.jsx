import styled from "styled-components";
// import { Title } from "../Title/Title";
// import { Paragraph } from "../Paragraph/Paragraph"
// import InputText from "../InputText/InputText"

export const StepContainer = styled.div`
    background-color: white;
    width: 83%;
    border-radius: 15px;
    padding: 30px 25px;
    position: absolute;
    top: 110px;
    display: ${props => props.display || 'none'};
`
// function StepContainer() {

//     return (
//             <StepContainerConfig />
//     )
// }

// export default StepContainer

{/* <Title>Personal info</Title>
                <Paragraph>Please provide your name, email address, and phone number.</Paragraph>
                <InputText 
                    labelFor='name'
                    labelText='Name'
                    inputType='text'
                    inputIid='name'
                    inputPlaceholder='e.g. Stephen King'
                />
                <InputText 
                    labelFor='email'
                    labelText='Email'
                    inputType='email'
                    inputIid='email'
                    inputPlaceholder='e.g. stephenking@lorem.com'
                />
                <InputText 
                    labelFor='phone'
                    labelText='Phone Number'
                    inputType='tel'
                    inputIid='phone'
                    inputPlaceholder='e.g. +1 234 567 890'
                /> */}
