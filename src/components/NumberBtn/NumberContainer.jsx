import styled from "styled-components";

export const NumberContainer = styled.div`
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    margin: 35px 0 0 0;

    @media (min-width: 1200px) {
        height: 100%;
        width: 100%;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 25px;
        margin: 50px 35px 0 35px;
    }
`