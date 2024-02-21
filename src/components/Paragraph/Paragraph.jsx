import styled from "styled-components";

export const Paragraph = styled.p`
    font-size: 1.2em;
    color: hsl(231, 11%, 63%);
    text-align: ${props => props.text_align || 'start'};
    margin: ${props => props.margin || '19.2px 0'};
`