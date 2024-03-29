import styled from "styled-components";

export const PlansContainer = styled.ul`
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;

    @media (min-width: 1200px) {
        flex-direction: row;
        justify-content: space-between;
        margin: 40px 0 40px 0;
    }
`