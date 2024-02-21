import styled from "styled-components";

export const Title = styled.h1`
    font-size: 2em;
    color: hsl(213, 96%, 18%);
    text-align: ${props => props.text_align || 'start'};
`