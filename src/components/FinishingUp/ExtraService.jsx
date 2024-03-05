import styled from "styled-components";

const RowContainer = styled.div`
    display: ${prop => prop.display || "flex"};
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

function ExtraService({margin, display, extraName, extraPrice, planAbreviation}) {
    return (
        <RowContainer display={display} margin={margin}>
            <ExtraParagraph>
                {extraName}
            </ExtraParagraph>
            <ExtraServicePrice>
                +{extraPrice}$/{planAbreviation}
            </ExtraServicePrice>
        </RowContainer>
    )
}

export default ExtraService;