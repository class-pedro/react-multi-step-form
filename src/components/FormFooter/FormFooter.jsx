import styled from "styled-components"

const FooterContainer = styled.div`
    position: absolute;
    bottom: 0;
    background-color: white;
    width: 100%;
    padding: 20px 0;
    display: ${prop => prop.display || "flex"};
    align-items: center;
    justify-content: space-between;
    flex-direction: row-reverse;
`

const FooterNextButton = styled.button`
    background-color: hsl(213, 96%, 18%);
    color: white;
    font-weight: 500;
    border: none;
    border-radius: 5px;
    padding: 15px;
    font-size: 14px;
    letter-spacing: 1px;
    cursor: pointer;
    margin-right: 15px;

    &:hover {
        background-color: hsl(243, 100%, 62%);
        box-shadow: 0 0 30px hsla(243, 100%, 62%, 0.288);
    }
`

const FooterBackButton = styled.button`
    display: ${props => props.display || 'none'};
    margin-left: 15px;
    text-decoration: none;
    font-weight: 700;
    color: hsl(231, 11%, 63%);
    background-color: transparent;
    border: none;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`

function FormFooter({ display, nextClickFunction, nextButtonText, backClickFunction, backButtonDisplay }) {

    return (
        <FooterContainer display={display}>
            <FooterNextButton
                onClick={nextClickFunction}
            >
                {nextButtonText}
            </FooterNextButton>
            <FooterBackButton
                onClick={backClickFunction}
                display={backButtonDisplay}
            >
                Go Back
            </FooterBackButton>
        </FooterContainer>
    )
}

export default FormFooter