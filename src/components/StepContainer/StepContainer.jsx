import styled from "styled-components";

export const StepContainer = styled.div`
    background-color: white;
    width: 83%;
    border-radius: 15px;
    padding: 30px 25px;
    position: absolute;
    top: 110px;
    display: ${props => props.display || 'none'};

    & #thank__you__img {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    & #thank__you__img img {
        text-align: center;
        margin-top: 80px;
    }

    @media (min-width: 1024px) {
        background-color: white;
        width: 100%;
        min-width: 350px;
        border-radius: 0;
        padding: 0;
        margin-top: 50px;
        position: relative;
        top: 0;
    }
`