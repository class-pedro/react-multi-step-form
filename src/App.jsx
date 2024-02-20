import styled from "styled-components";
import Header from "./components/Header/Header";

import { StepContainer } from "./components/StepContainer/StepContainer";
import { Title } from "./components/Title/Title";
import { Paragraph } from "./components/Paragraph/Paragraph";
import InputText from "./components/InputText/InputText";

import { PlansContainer } from "./components/Plans/PlansContainer";
import Plan from "./components/Plans/Plan";
import Switch from "./components/Switch/Switch";

import FormFooter from "./components/FormFooter/FormFooter";

import arcadeImg from "./assets/images/icon-arcade.svg";
import advancedImg from "./assets/images/icon-advanced.svg";
import proImg from "./assets/images/icon-pro.svg";
import { useState } from "react";

const MainContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `

function App() {

  const index = 2;
  const [yearlyPlan, setYearlyPlan] = useState(false)

  function handleCheck() {
    setYearlyPlan(!yearlyPlan);
  }

  return (
    <>
      <Header />
      <MainContainer>

        {/* Step 1 */}
        <StepContainer
          display={index == 1 ? "block" : "none"}
        >
          <Title>Personal info</Title>
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
          />
        </StepContainer>

        {/* Step 2 */}
        <StepContainer
          display={index == 2 ? "block" : "none"}
        >
          <Title>Select your plan</Title>
          <Paragraph>You have the option of monthly or yearly billing.</Paragraph>
          <PlansContainer>
            <Plan
              imageSrc={arcadeImg}
              planName="Arcade"
              price={yearlyPlan == false ? "$9/mo" : "$90/yr"}
              displayEconomy={yearlyPlan == false ? "none" : "block"}
            />
            <Plan
              imageSrc={advancedImg}
              planName="Advanced"
              price={yearlyPlan == false ? "$12/mo" : "$120/yr"}
              displayEconomy={yearlyPlan == false ? "none" : "block"}
            />
            <Plan
              imageSrc={proImg}
              planName="Pro"
              price={yearlyPlan == false ? "$15/mo" : "$150/yr"}
              displayEconomy={yearlyPlan == false ? "none" : "block"}
            />

            <Switch switchFunction={handleCheck} />
          </PlansContainer>
        </StepContainer>

        <FormFooter
          nextButtonText="Next Step"
          backButtonDisplay={index > 1 ? "block" : "none"}
        />
      </MainContainer>
    </>
  )
}

export default App
