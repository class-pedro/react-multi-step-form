import styled from "styled-components"

const NumBtnContainer = styled.button`
    width: 35px;
    height: 35px;
    background-color: ${prop => prop.bgColor || "#cccccc1c"};
    border-radius: 50%;
    color: white;
    font-weight: 700;
    border: 1px solid white;

    @media (min-width: 1024px) {
        &:hover {
            background-color: hsla(228, 100%, 84%, 0.473);
            cursor: pointer;
        }
    }
`

function NumberBtn({ children, bg_color }) {

    return (
        <NumBtnContainer
            bgColor={bg_color}
        >
            {children}
        </NumBtnContainer>
    )
}

export default NumberBtn