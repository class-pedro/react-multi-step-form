import styled from "styled-components"

const PlanContainer = styled.li`
    display: flex;
    border: 1px solid hsl(229, 24%, 87%);
    border-radius: 10px;
    padding: 15px;

    & img {
        margin-right: 20px;
    }

    & h2 {
        font-size: 1.25em;
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
`

function Plan({imageSrc, planName, price, displayEconomy}) {

    return (
        <PlanContainer display={displayEconomy}>
            <img src={imageSrc}/>
            <section>
                <h2>{planName}</h2>
                <p>{price}</p>
                <span>2 months free</span>
            </section>
        </PlanContainer>
    )
}

export default Plan


{/* <li class="plan arcade">

<img src="assets/images/icon-arcade.svg" alt="Arcade icon" class="plan_icon">

<div class="plan_txt">

  <p class="plan_name">Arcade</p>
  <p class="plan_month">$9/mo</p>

  <div class="container_year_plan">
    <p class="plan_year">$90/yr</p>
    <span class="plan_economy">2 months free</span>
  </div>
</div>
</li> */}