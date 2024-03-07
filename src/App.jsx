import styled from "styled-components";
import { HeaderContainer } from "./components/Header/Header";
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
import { Children, useState } from "react"
import FinishPlan from "./components/FinishingUp/FinishPlan";
import NumberBtn from "./components/NumberBtn/NumberBtn";
import { NumberContainer } from "./components/NumberBtn/NumberContainer";
import ExtraService from "./components/FinishingUp/ExtraService";

const FlexContainer = styled.div`
  @media (min-width: 1200px) {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const MainContainer = styled.main`
  @media (min-width: 1200px) {
    width: 50vw;
    height: 70vh;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 15px;
    padding: 15px;
  }
`

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 1088px) {
      height: 100%;
      /* padding: 0 80px; */
      justify-content: space-between;
    }

    @media (min-width: 1200px) {
      width: 100%;
      min-width: 350px;
      height: 100%;
      padding: 0 50px;
      justify-content: space-between;
    }
  `

function App() {

  const [index, setIndex] = useState(1);
  const [yearlyPlan, setYearlyPlan] = useState(false);
  const [cart, setCart] = useState([]);
  // Step 1 States
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emptyName, setEmptyName] = useState(false);
  const [emptyEmail, setEmptyEmail] = useState(false);
  const [emptyPhoneNumber, setEmptyPhoneNumber] = useState(false);
  // ###################################################
  // Step 2 States
  const [plan, setPlan] = useState('');
  const [planPrice, setPlanPrice] = useState(0);
  // ###################################################
  // Step 3 States
  const [addOnlineService, setAddOnlineService] = useState(false);
  const [addLargerStorage, setAddLargerStorage] = useState(false);
  const [addCustomProfile, setAddCustomProfile] = useState(false);
  const [onlineServicePrice, setOnlineServicePrice] = useState(0);
  const [largerStoragePrice, setLargerStoragePrice] = useState(0);
  const [customProfilePrice, setCustomProfilePrice] = useState(0);
  // ###################################################
  // Step 4 States
  const [totalPrice, setTotalPrice] = useState(0);


  function validEmail(email) {
    const emailRegex = new RegExp(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}/
    );

    if (emailRegex.test(email)) {
      return true;
    }

    return false;
  }

  function handleNextClick(e) {

    e.preventDefault();

    if (name == "") {
      setEmptyName(true);
    }

    if (email == "" || !validEmail(email)) {
      setEmptyEmail(true);
    }

    if (phoneNumber == "") {
      setEmptyPhoneNumber(true);
    }

    if (name && email && phoneNumber !== "" && validEmail(email)) {
      setIndex(index + 1);
    }
  }

  function handlePrevClick(e) {
    e.preventDefault()
    setIndex(index - 1)
  }

  function handleChangeYearly() {
    setYearlyPlan(!yearlyPlan);
  }

  function handleNumberClickBtn(index) {
    setIndex(index);
  }

  function selectPlan(planName, PlanPriceNumber) {
    setPlan(planName);
    setPlanPrice(Number(PlanPriceNumber));
  }

  const toggleExtraService = (setState, state) => {
    return setState(!state)
  }

  return (
    <FlexContainer>
      <MainContainer>
        <HeaderContainer>
          <NumberContainer>
            <NumberBtn
              children='1'
              bg_color={index == 1 ? "hsl(206, 94%, 87%)" : "transparent"}
              color={index == 1 ? "hsl(213, 96%, 18%)" : "hsl(206, 94%, 87%)"}
              stepName="your info"
              onClickFunction={() => handleNumberClickBtn(1)}
            />
            <NumberBtn
              children='2'
              bg_color={index == 2 ? "hsl(206, 94%, 87%)" : "transparent"}
              color={index == 2 ? "hsl(213, 96%, 18%)" : "hsl(206, 94%, 87%)"
              }
              stepName="select plan"
              onClickFunction={() => handleNumberClickBtn(2)}
            />
            <NumberBtn
              children='3'
              bg_color={index == 3 ? "hsl(206, 94%, 87%)" : "transparent"}
              color={index == 3 ? "hsl(213, 96%, 18%)" : "hsl(206, 94%, 87%)"}
              stepName="add-ons"
              onClickFunction={() => handleNumberClickBtn(3)}
            />
            <NumberBtn
              children='4'
              bg_color={index == 4 ? "hsl(206, 94%, 87%)" : "transparent"}
              color={index == 4 ? "hsl(213, 96%, 18%)" : "hsl(206, 94%, 87%)"}
              stepName="summary"
              onClickFunction={() => handleNumberClickBtn(4)}
            />
          </NumberContainer>
        </HeaderContainer>

        <FormContainer>

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
              bordercolor={emptyName === true ? "hsl(354, 84%, 57%)" : ""}
              outlinecolor={emptyName === true ? "hsl(354, 84%, 57%)" : ""}
              errorMsg={emptyName === true ? "Enter a name." : ""}
              onchange={(event) => {
                setName(event.target.value);
              }}
              onclick={() => setEmptyName(false)}
            />
            <InputText
              labelFor='email'
              labelText='Email'
              inputType='email'
              inputIid='email'
              inputPlaceholder='e.g. stephenking@lorem.com'
              bordercolor={emptyEmail === true ? "hsl(354, 84%, 57%)" : ""}
              outlinecolor={emptyEmail === true ? "hsl(354, 84%, 57%)" : ""}
              errorMsg={emptyEmail === true ? "Enter a valid email." : ""}
              onchange={(event) => { setEmail(event.target.value) }}
              onclick={() => setEmptyEmail(false)}
            />
            <InputText
              labelFor='phone'
              labelText='Phone Number'
              inputType='tel'
              inputIid='phone'
              inputPlaceholder='e.g. +1 234 567 890'
              bordercolor={emptyPhoneNumber === true ? "hsl(354, 84%, 57%)" : ""}
              outlinecolor={emptyPhoneNumber === true ? "hsl(354, 84%, 57%)" : ""}
              errorMsg={emptyPhoneNumber === true ? "Enter valid phone number." : ""}
              onchange={(event) => { setPhoneNumber(event.target.value) }}
              onclick={() => setEmptyPhoneNumber(false)}
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
                clickfunction={() => selectPlan('arcade', 9)}
                bordercolor={plan == 'arcade' ? 'hsl(243, 100%, 62%)' : ''}
                bgcolor={plan == 'arcade' ? 'hsl(217, 100%, 97%)' : ''}
              />
              <Plan
                imageSrc={advancedImg}
                planName="Advanced"
                price={yearlyPlan == false ? "$12/mo" : "$120/yr"}
                displayEconomy={yearlyPlan == false ? "none" : "block"}
                clickfunction={() => selectPlan('advanced', 12)}
                bordercolor={plan == 'advanced' ? 'hsl(243, 100%, 62%)' : ''}
                bgcolor={plan == 'advanced' ? 'hsl(217, 100%, 97%)' : ''}
              />
              <Plan
                imageSrc={proImg}
                planName="Pro"
                price={yearlyPlan == false ? "$15/mo" : "$150/yr"}
                displayEconomy={yearlyPlan == false ? "none" : "block"}
                clickfunction={() => selectPlan('pro', 15)}
                bordercolor={plan == 'pro' ? 'hsl(243, 100%, 62%)' : ''}
                bgcolor={plan == 'pro' ? 'hsl(217, 100%, 97%)' : ''}
              />
            </PlansContainer>
            <Switch switchFunction={handleChangeYearly} />
          </StepContainer>

          {/* Step 3 */}
          <StepContainer
            display={index == 3 ? "block" : "none"}
          >
            <Title>Pick add-ons</Title>
            <Paragraph>Add-ons help enhance your gaming experience.</Paragraph>

            <AddOns
              serviceName="Online service"
              serviceDescription="Access to multiplayer games"
              servicePrice={yearlyPlan == false ? "1/mo" : "10/yr"}
              checkboxclick={() => toggleExtraService(setAddOnlineService, addOnlineService)}
              bordercolor={addOnlineService == true ? 'hsl(243, 100%, 62%)' : ''}
              bgcolor={addOnlineService == true ? 'hsl(217, 100%, 97%)' : ''}
            />
            <AddOns
              serviceName="Larger storage"
              serviceDescription="Extra 1TB of cloud save"
              servicePrice={yearlyPlan == false ? "2/mo" : "20/yr"}
              checkboxclick={() => toggleExtraService(setAddLargerStorage, addLargerStorage)}
              bordercolor={addLargerStorage == true ? 'hsl(243, 100%, 62%)' : ''}
              bgcolor={addLargerStorage == true ? 'hsl(217, 100%, 97%)' : ''}
            />
            <AddOns
              serviceName="Customizable Profile"
              serviceDescription="Custom theme on your profile"
              servicePrice={yearlyPlan == false ? "2/mo" : "20/yr"}
              checkboxclick={() => toggleExtraService(setAddCustomProfile, addCustomProfile)}
              bordercolor={addCustomProfile == true ? 'hsl(243, 100%, 62%)' : ''}
              bgcolor={addCustomProfile == true ? 'hsl(217, 100%, 97%)' : ''}
            />
            <button onClick={(e) => {
              e.preventDefault()

              switch (yearlyPlan) {
                case true:

                  addOnlineService == true ? setOnlineServicePrice(1) : setOnlineServicePrice(0)
                  addLargerStorage == true ? setLargerStoragePrice(2) : setLargerStoragePrice(0)
                  addCustomProfile == true ? setCustomProfilePrice(2) : setCustomProfilePrice(0)

                  setTotalPrice(
                    (planPrice * 10) +
                    (onlineServicePrice * 10) +
                    (largerStoragePrice * 10) +
                    (customProfilePrice * 10)
                  )
                  console.log(totalPrice)
                  break

                case false:

                  addOnlineService == true ? setOnlineServicePrice(1) : setOnlineServicePrice(0)
                  addLargerStorage == true ? setLargerStoragePrice(2) : setLargerStoragePrice(0)
                  addCustomProfile == true ? setCustomProfilePrice(2) : setCustomProfilePrice(0)

                  setTotalPrice(
                    planPrice +
                    onlineServicePrice +
                    largerStoragePrice +
                    customProfilePrice
                  )
                  console.log(totalPrice)
                  break
              }
            }}>
              ##########
            </button>
          </StepContainer>

          {/* Step 4 Finishing UP */}
          <StepContainer
            display={index == 4 ? "block" : "none"}
          >
            <Title>Finishing up</Title>
            <Paragraph>Double-check everything looks OK before confirming.</Paragraph>

            <FinishPlan
              planName={plan}
              planRecurrence={yearlyPlan == true ? "Yearly" : "Monthly"}
              changeclick={(e) => {
                e.preventDefault();
                setIndex(2)
              }}
              planPrice={yearlyPlan == true ? planPrice * 10 : planPrice}
              monthOrYear={yearlyPlan == true ? "year" : "month"}
              planAbreviation={yearlyPlan == true ? "yr" : "mo"}
            />
            <ExtraService
              display={addOnlineService == true ? "flex" : "none"}
              extraName="Online Service"
              extraPrice={yearlyPlan == true ? onlineServicePrice * 10 : onlineServicePrice}
              planAbreviation={yearlyPlan == true ? "yr" : "mo"}
            />
            <ExtraService
              display={addLargerStorage == true ? "flex" : "none"}
              extraName="Larger Storage"
              extraPrice={yearlyPlan == true ? largerStoragePrice * 10 : largerStoragePrice}
              planAbreviation={yearlyPlan == true ? "yr" : "mo"}
            />
            <ExtraService
              display={addCustomProfile == true ? "flex" : "none"}
              extraName="Customizable Profile"
              extraPrice={yearlyPlan == true ? customProfilePrice * 10 : customProfilePrice}
              planAbreviation={yearlyPlan == true ? "yr" : "mo"}
            />
            {/* ##### TOTAL ##### */}
            <ExtraService
              display="flex"
              fontSize="1.25em"
              color="hsl(243, 100%, 62%)"
              weight="700"
              margin="50px 10px 0px 10px"
              extraPrice={totalPrice}
              extraName={yearlyPlan == true ? "Total (per year)" : "Total (per month)"}
              planAbreviation={yearlyPlan == true ? "yr" : "mo"}
            />
          </StepContainer>

          {/* Step 5  Thanks Page */}
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
        </FormContainer>
      </MainContainer>
    </FlexContainer>
  )
}

export default App