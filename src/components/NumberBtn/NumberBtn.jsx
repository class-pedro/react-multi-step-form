import styled from "styled-components"

const NumBtnContainer = styled.button`
    width: 35px;
    height: 35px;
    background-color: #cccccc1c;
    border-radius: 50%;
    color: white;
    font-weight: 700;
    border: 1px solid white;
    cursor: pointer;

    &:hover {
        background-color: hsla(228, 100%, 84%, 0.473);
    }
`

function NumberBtn({children}) {

    return (
        <NumBtnContainer>
            {children}
        </NumBtnContainer>
    )
}

export default NumberBtn