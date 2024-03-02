import styled from "styled-components"

const NumBtnContainer = styled.div`
    display: block;

    @media (min-width: 1200px) {
        display: flex;
        align-items: center;
    }
`

const NumBtnText = styled.div`
    display: none;

    @media (min-width: 1200px) {
        display: block;

        & span, p {
            margin: 0;
            padding: 0;
            text-transform: uppercase;
            margin: 0 0 0 20px;
        }

        & span {
            font-size: .8em;
            color: hsl(228, 100%, 84%);
        }

        & p {
            color: white;
            font-size: 1em;
            font-weight: 700;
        }
    }
`

const NumBtn = styled.button`
    width: 35px;
    height: 35px;
    background-color: ${prop => prop.bg_color || "#cccccc1c"};
    border-radius: 50%;
    color: ${prop => prop.color || "hsl(206, 94%, 87%)"};
    font-weight: 700;
    border: 1px solid hsl(206, 94%, 87%);

    @media (min-width: 1024px) {
        &:hover {
            background-color: hsla(228, 100%, 84%, 0.473);
            cursor: pointer;
        }
    }
`

function NumberBtn({ children, bg_color, color, stepName, onClickFunction }) {
    return (
        <NumBtnContainer>
            <NumBtn
                bg_color={bg_color}
                color={color}
                onClick={onClickFunction}
            >
                {children}
            </NumBtn>
            <NumBtnText>
                <span>step {children}</span>
                <p>{stepName}</p>
            </NumBtnText>
        </NumBtnContainer>
    )
}

export default NumberBtn