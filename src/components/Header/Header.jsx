import styled from "styled-components";
import NumberBtn from "../NumberBtn/NumberBtn";
import mobileHeaderBg from "../../assets/images/bg-sidebar-mobile.svg";
import desktopHeaderBg from "../../assets/images/bg-sidebar-desktop.svg";

const HeaderContainer = styled.header`
    background: url(${mobileHeaderBg}) no-repeat center center;
    background-size: cover;
    background-color: red;
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;

    
    & div {
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 12px;
        margin: 35px 0 0 0;
    }

    /* Responsiveness */
    @media (min-width: 1000px) {
        background: url(${desktopHeaderBg});
        
    }
`

function Header({ btnBgColor }) {

    return (
        <HeaderContainer>
            <div>
                <NumberBtn
                    bgColor={btnBgColor}
                    children='1'
                />
                <NumberBtn
                    bgColor={btnBgColor}
                    children='2'
                />
                <NumberBtn
                    bgColor={btnBgColor}
                    children='3'
                />
                <NumberBtn
                    bgColor={btnBgColor}
                    children='4'
                />
            </div>
        </HeaderContainer>
    )
}

export default Header