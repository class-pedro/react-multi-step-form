import styled from "styled-components";
import PurpleCheckbox from "./PurpleCheckbox";

const AddOnsContainer = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid hsl(229, 24%, 87%);
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
`

function AddOns({ serviceName, serviceDescription, servicePrice }) {

    return (
        <AddOnsContainer>
            <section>
                <PurpleCheckbox type="checkbox" />
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