import styled from "styled-components"

const Fieldset = styled.fieldset`
    border: none;
    padding: 0;
    width: 100%;
    margin: 0 0 15px 0;
`

const Label = styled.label`
    display: block;
    color: hsl(213, 96%, 18%);
    margin-bottom: 5px;
`
const Input = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 5px;
    box-sizing: border-box;
    border: 1px solid hsl(229, 24%, 87%);
    margin: 0 0 1px 0;
    padding: 0 15px;
    outline: none;
    color: hsl(213, 96%, 18%);
    font-weight: 700;

    &::placeholder {
        color: hsl(231, 11%, 63%);
        font-weight: 700;
    }

    &:focus {
        outline: 1px solid hsl(213, 96%, 18%);
    }
`

function NumberBtn({labelFor, labelText, inputType, inputIid, inputPlaceholder}) {

    return (
        <Fieldset>
            <Label for={labelFor}>{labelText}</Label>
            <Input type={inputType} id={inputIid} placeholder={inputPlaceholder} />
        </Fieldset>
    )
}

export default NumberBtn