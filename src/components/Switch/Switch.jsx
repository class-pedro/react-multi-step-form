import styled from "styled-components"

const SwitchContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    background-color: hsl(231, 100%, 99%);
    padding: 20px;
    border-radius: 10px;

    & label {
        position: relative;
        display: inline-block;
        width: 52px;
        height: 24px;
        margin: 0 15px 0 15px;
    }

    & input {
        opacity: 0;
        width: 0;
        height: 0;

        &:checked+.slider {
            background-color: hsl(213, 96%, 18%);
        }

        &:focus+.slider {
            box-shadow: 0 0 1px hsl(213, 96%, 18%);
        }

        &:checked+.slider:before {
            -webkit-transform: translateX(26px);
            -ms-transform: translateX(26px);
            transform: translateX(26px);
        }
    }

    & .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: hsl(213, 96%, 18%);
        -webkit-transition: .4s;
        transition: .4s;
        border-radius: 34px;

        &::before {
            position: absolute;
            content: "";
            height: 18px;
            width: 18px;
            left: 4px;
            bottom: 3px;
            background-color: white;
            -webkit-transition: .4s;
            transition: .4s;
            border-radius: 34px;
        }
    }
`
const SwitchText = styled.span`
    font-weight: 700;
    color: ${props => props.color};
`

function Switch({switchFunction}) {

    return (
        <SwitchContainer>
            <SwitchText color="hsl(213, 96%, 18%)">Monthly</SwitchText>
            <label htmlFor="toggleSwitch">
                <input type="checkbox" id="toggleSwitch" onClick={switchFunction} />
                <span className="slider round"></span>
            </label>
            <SwitchText color="hsl(231, 11%, 63%)">Yearly</SwitchText>
        </SwitchContainer>
    )
}

export default Switch