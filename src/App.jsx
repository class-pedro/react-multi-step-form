import styled from "styled-components";
import Header from "./components/Header/Header";

import { StepContainer } from "./components/StepContainer/StepContainer";
import { Title } from "./components/Title/Title";
import { Paragraph } from "./components/Paragraph/Paragraph";
import InputText from "./components/InputText/InputText";

import { PlansContainer } from "./components/Plans/PlansContainer";
import Plan from "./components/Plans/Plan";
import Switch from "./components/Switch/Switch";

import AddOns from "./components/AddOns/AddOns";

import FormFooter from "./components/FormFooter/FormFooter";

import arcadeImg from "./assets/images/icon-arcade.svg";
import advancedImg from "./assets/images/icon-advanced.svg";
import proImg from "./assets/images/icon-pro.svg";
import thankYouImage from "./assets/images/icon-thank-you.svg";
import { useState } from "react";
import PurpleCheckbox from "./components/AddOns/PurpleCheckbox";

const MainContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `

function App() {

  const [index, setIndex] = useState(1);
  const [yearlyPlan, setYearlyPlan] = useState(false);

  function handleNextClick(e) {

    e.preventDefault()

    if (index < 5) {
      setIndex(index + 1);
    }
  }

  function handlePrevClick(e) {
    e.preventDefault()
    setIndex(index - 1)
  }

  function handleSelectPlan() {
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

            <Switch switchFunction={handleSelectPlan} />
          </PlansContainer>
        </StepContainer>

        {/* Step 3 */}
        <StepContainer
          display={index == 3 ? "block" : "none"}
        >
          <Title>Pick add-ons</Title>
          <Paragraph>Add-ons help enhance your gaming experience.</Paragraph>
          
          <AddOns
            serviceName="Online service" serviceDescription="Access to multiplayer games"
            servicePrice={yearlyPlan == false ? "1/mo" : "10/yr"}
          />
          <AddOns
            serviceName="Larger storage" serviceDescription="Extra 1TB of cloud save"
            servicePrice={yearlyPlan == false ? "2/mo" : "20/yr"}
          />
          <AddOns
            serviceName="Customizable Profile"
            serviceDescription="Custom theme on your profile"
            servicePrice={yearlyPlan == false ? "2/mo" : "20/yr"}
          />
        </StepContainer>

        {/* Step 4 */}
        <StepContainer
          display={index == 4 ? "block" : "none"}
        >
          <Title>Finishing up</Title>
          <Paragraph>Double-check everything looks OK before confirming.</Paragraph>
        </StepContainer>

        {/* Step 5 */}
        <StepContainer
          display={index == 5 ? "block" : "none"}
        >

          <div id="thank__you__img">
            <img src={thankYouImage} />
          </div>

          <Title
            text_align="center"
          >
            Thank you!
          </Title>

          <Paragraph
            text_align="center"
            margin="19.2px 0 80px 0"
          >
            Thanks for confirming your subscription! We hope you have fun
            using our platform. If you ever need support, please feel free
            to email us at support@loremgaming.com.
          </Paragraph>
        </StepContainer>

        <FormFooter
          display={index >= 5 ? "none" : "flex"}
          nextClickFunction={handleNextClick}
          nextButtonText={index == 4 ? "Confirm" : "Next Step"}
          backClickFunction={handlePrevClick}
          backButtonDisplay={index > 1 ? "block" : "none"}
        />
      </MainContainer>
    </>
  )
}

export default App
