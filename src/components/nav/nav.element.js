// import styled from 'styled-componets';
import styled from "styled-components";
// import {Link} from "react-router-dom";
import {AiOutlineShoppingCart} from "react-icons/ai";
import{MdExpandMore} from "react-icons/md"

export const Header = styled.div`
    height: 40px;
    background-color: #000;
`

export const Container = styled.div`
   height: 85px;
   background-color: #292828;
`
export const Wrapper = styled.div`
    width: 1280px;
    height: 85px;
    display:flex;
    margin: auto;
    text-align: left;
`

export const Logo =styled.img`
    cursor:pointer;
    height: 86px;
    
`

export const Navigation = styled.nav`
    display:flex;
    align-items: center;
    
`

export const NavMenu = styled.ul`
    display: flex;
    list-style-type: none
`
export const NavItem = styled.li`
padding: 0 0 0 25px;
`

export const NavLink = styled.a`
    color: #fff;
    font-family: "Trade Gothic LT Std" ;
    font-size: 16px;
    font-weight: 500;
    text-decoration: none;
    line-height:24px;
    text-transform: uppercase;
    font-style: normal;
    cursor: pointer;
    display:flex;
    letter-spacing:none;
    justify-content:center;
    align-items: center;
`

export const NavIcon = styled(MdExpandMore)`
 font-size:20px;
 transition: transform 0.5s;

 &:hover{
     transform: rotate(180deg);
 }
`


export const IconWrapper = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items:center;
`

export const ShoppingCart = styled(AiOutlineShoppingCart)`
 font-size: 30px;
 color: #fff;
 cursor: pointer;
`


