import styled from "styled-components";

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    align-items: center;
`;
export const MenuLangContainer = styled.div`
    cursor: pointer;
    
    display: flex;
    justify-content: center;
    
    height: 48px;
    width: 48px;
    margin-bottom: 15px;
    
    align-items: center;
    align-self: center;
    
    transition: border .5s ease;
    
    &:hover {
        border: 1px solid #EEEEEE;
        border-radius: 50%;
        
        @media(max-width: 1084px) 
            {
                border: none;
            }
    }
    
    &:hover p {
        transition: color .5s ease;
        color: #EEEEEE
    }
    
    &:active p {
        transition: none;
        color: #0EC261;
    } 
`;

export const ModalMenuContainer = styled.div`
    display: flex;
    z-index: 9999;
    position: fixed;
    height: 100%;
    width: 100%;
`;
export const Left = styled.div`
    width: 4%;
    height: 100%;
    background-color: #111518;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
    @media(max-width: 720px) {
        width: 6%; 
    }
`;
export const Middle = styled.div`
    width: 48%;
    background-color: #111518;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 64px;
    
    @media(max-width: 1084px) {
        width: 58%; 
    }
     @media(max-width: 720px) {
        width: 94%; 
    }
`;
export const RightMainPage = styled.div`
    width: 48%;
    background: #111518;
    opacity: .7;
    
    @media(max-width: 1084px) {
        width: 38%; 
    }
     @media(max-width: 720px) {
        display: none;
    }
`;
export const Right = styled.div`
    width: 48%;
    background: #111518;
    
    @media(max-width: 1084px) {
        width: 38%; 
    }
     @media(max-width: 720px) {
        display: none;
    }
`;
export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 38px;
`;
export const SocialContainer = styled.div`
    display: flex;
`;
export const MobileContainer = styled.div`
    z-index: 9999;
    position: fixed;
    height: 100%;
    width: 100%;
    background: #111518;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 28px;
`;
