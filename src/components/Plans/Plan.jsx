import styled from "styled-components"

const PlanContainer = styled.li`
    display: flex;
    border: 1px solid hsl(229, 24%, 87%);
    border-radius: 10px;
    padding: 15px;

    & img {
        margin: 0 20px 10px 0 ;
    }

    & h2 {
        font-size: 1em;
        margin: 0 0 5px 0;
        font-weight: 700;
        color: hsl(213, 96%, 18%);
    }
    
    & p {
        margin: 0 0 5px 0;
        color: hsl(231, 11%, 63%);
        display: block;
    }
    
    & span {
        display: ${props => props.display || 'none'};
        color: hsl(213, 96%, 18%);
    }

    @media (min-width: 1024px) {
        &:hover {
            cursor: pointer;
            border: 1px solid hsl(231, 11%, 63%);
        }
    }

    @media (min-width: 1200px) {
        width: 8rem;
        height: 9rem;
        flex-direction: column;
        justify-content: space-between;

        & img {
            max-width: 50px;
        }
    }
`

function Plan({ imageSrc, planName, price, displayEconomy }) {

    return (
        <PlanContainer display={displayEconomy}>
            <img src={imageSrc} />
            <section>
                <h2>{planName}</h2>
                <p>{price}</p>
                <span>2 months free</span>
            </section>
        </PlanContainer>
    )
}

export default Plan