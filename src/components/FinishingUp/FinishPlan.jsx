import styled from "styled-components"
import ExtraService from "./ExtraService"


const ChangePlanContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 10px 10px 15px 10px;
    padding: 0 0 15px 0;
    border-bottom: 1px solid hsl(229, 24%, 87%);
`

const PlanName = styled.h3`
    font-size: 1em;
    font-weight: 500;
    color: hsl(213, 96%, 18%);
    margin: 0;
`

const ChangePlanBtn = styled.button`
    font-size: .95em;
    font-weight: 500;
    color: hsl(231, 11%, 63%);
    text-decoration: underline;
    border: none;
    background-color: transparent;
    padding: 0;

    @media (min-width: 1024px) {
        cursor: pointer;
    }
`

const FinishingPrice = styled.span`
    font-weight: 700;
    color: hsl(213, 96%, 18%);
`

function FinishPlan({ planName, planRecurrence, changeclick, planPrice, planAbreviation }) {
    return (
        <>
            <ChangePlanContainer>
                <div>
                    <PlanName>
                        {planName} ({planRecurrence})
                    </PlanName>
                    <ChangePlanBtn onClick={changeclick}>
                        Change
                    </ChangePlanBtn>
                </div>
                <FinishingPrice>
                    ${planPrice}/{planAbreviation}
                </FinishingPrice>
            </ChangePlanContainer>
        </>
    )
}

export default FinishPlan;