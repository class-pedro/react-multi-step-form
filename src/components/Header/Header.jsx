import styled from "styled-components";
import NumberBtn from "../NumberBtn/NumberBtn";
import mobileHeaderBg from "../../assets/images/bg-sidebar-mobile.svg";
import desktopHeaderBg from "../../assets/images/bg-sidebar-desktop.svg";

export const HeaderContainer = styled.header`
    background: url(${mobileHeaderBg}) no-repeat center center;
    background-size: cover;
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;

    /* Responsiveness */
    @media (min-width: 1024px) {
        background: url(${desktopHeaderBg}) no-repeat center center;
        background-size: cover;
        width: 100%;
        max-width: 285px;
        height: 100%;
        display: flex;
        justify-content: center;
        border-radius: 15px;        
    }
`