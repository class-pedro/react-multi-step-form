import styled from "styled-components"


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

const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: ${prop => prop.margin || "10px 10px"};
`

const ExtraParagraph = styled.h4`
    font-size: 1em;
    font-weight: 400;
    color: hsl(231, 11%, 63%);
    margin: 0;
`

const ExtraServicePrice = styled.span`
    font-size: ${prop => prop.font_size || "1em"};
    font-weight: ${prop => prop.weight || "500"}; 
    color: ${prop => prop.color || "hsl(213, 96%, 18%)"}; 
`

function FinishPlan({planName, planRecurrence, planPrice, extraName, extraPrice, monthOrYear, totalPrice, planAbreviation}) {
    return (
        <>
            <ChangePlanContainer>
                <div>
                    <PlanName>
                        {planName} ({planRecurrence})
                    </PlanName>
                    <ChangePlanBtn>
                        Change
                    </ChangePlanBtn>
                </div>
                <FinishingPrice>
                    ${planPrice}/{planAbreviation}
                </FinishingPrice>
            </ChangePlanContainer>
            <RowContainer>
                <ExtraParagraph>
                    {extraName}
                </ExtraParagraph>
                <ExtraServicePrice>
                    +{extraPrice}$/{planAbreviation}
                </ExtraServicePrice>
            </RowContainer>
            <RowContainer>
                <ExtraParagraph>
                    Larger Storage
                </ExtraParagraph>
                <ExtraServicePrice>
                    +2$/mo
                </ExtraServicePrice>
            </RowContainer>
            <RowContainer>
                <ExtraParagraph>
                    Customizable Profile
                </ExtraParagraph>
                <ExtraServicePrice>
                    +2$/mo
                </ExtraServicePrice>
            </RowContainer>

            <RowContainer
                margin="50px 10px 0px 10px"
            >
                <ExtraParagraph>
                    Total (per {monthOrYear})
                </ExtraParagraph>
                <ExtraServicePrice
                    font_size="1.25em"
                    color="hsl(243, 100%, 62%)"
                    weight="700">
                    +{totalPrice}$/{planAbreviation}
                </ExtraServicePrice>
            </RowContainer>
        </>
    )
}

export default FinishPlan;