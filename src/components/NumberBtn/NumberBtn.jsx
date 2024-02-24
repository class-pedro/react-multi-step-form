import styled from "styled-components"

const NumBtnContainer = styled.button`
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

function NumberBtn({ children, bg_color, color, onClickFunction }) {
    return (
        <NumBtnContainer
            bg_color={bg_color}
            color={color}
            onClick={onClickFunction}
        >
            {children}
        </NumBtnContainer>
    )
}

export default NumberBtn