import styled from "styled-components";

const CheckboxContainer = styled.label`
    position: relative;
    padding: 0;
    margin: 0 25px 25px 8.5px;
    cursor: pointer;
    
    // Condicional para o funcionamento do Checkbox
    input:checked ~ span {
        background-color: hsl(243, 100%, 62%);
    }
    
    span:after {
        content: '';
        position: absolute;
        display: none;
    }
    
    input:checked ~ span:after {
        display: block;
    }
`;

const Checkbox = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
`;

const Checkmark = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    border: 1px solid hsl(229, 24%, 87%);
    border-radius: 5px;
    
    // Configurando nova aparência de Checkbox
    &:after {
        left: 8.5px;
        top: 3.5px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        transform: rotate(45deg);
    }
`;

function PurpleCheckbox() {

    return (
        <CheckboxContainer>
            <Checkbox
                type='checkbox'
            />
            <Checkmark />
        </CheckboxContainer>
    )
}

export default PurpleCheckbox