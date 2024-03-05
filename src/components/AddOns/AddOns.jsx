import styled from "styled-components";

const AddOnsContainer = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid ${props => props.bordercolor || 'hsl(229, 24%, 87%)'};
    background-color: ${props => props.bgcolor};
    border-radius: 10px;
    padding: 15px;
    margin: 0 0 15px 0;

    & section {
        display: flex;
        align-items: center;

        & div {
            margin: 0 0 0 23.5px;
        }
    }

    & h2 {
        font-size: 1.1em;
        margin: 0;
        font-weight: 700;
        color: hsl(213, 96%, 18%);
    }
    
    & p {
        margin: 0;
        color: hsl(231, 11%, 63%);
    }
    
    & span {
        color: hsl(243, 100%, 62%);
        align-self: center;
        margin: 0 8.5px 0 0;
    }

    @media (min-width: 1024px) {
        &:hover {
            cursor: pointer;
            border: 1px solid hsl(231, 11%, 63%);
        }
    }
`;

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

function AddOns({ serviceName, serviceDescription, servicePrice, checkboxclick, bordercolor, bgcolor }) {
    return (
        <AddOnsContainer
            bordercolor={bordercolor}
            bgcolor={bgcolor}
        >
            <section>
                <CheckboxContainer>
                    <Checkbox
                        type='checkbox'
                        onClick={() => checkboxclick()}
                    />
                    <Checkmark />
                </CheckboxContainer>
                <div>
                    <h2>{serviceName}</h2>
                    <p>{serviceDescription}</p>
                </div>
            </section>
            <span>+${servicePrice}</span>
        </AddOnsContainer>
    )
}

export default AddOns