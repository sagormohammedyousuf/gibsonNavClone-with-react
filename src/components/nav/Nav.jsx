import React from 'react';
import logo from './gibson__1_.svg'
import {Header, 
    Container, 
    Wrapper,
    Logo,
    Navigation,
    NavMenu,
    NavItem,
    NavLink,
    IconWrapper,
    ShoppingCart,
    NavIcon

} from './nav.element.js'

const Nav = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Wrapper>
                    <Logo src={logo}/>
                    <Navigation>
                        <NavMenu>
                            <NavItem>
                                <NavLink>electric<NavIcon/></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>acoustic<NavIcon/></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>merchandise<NavIcon/></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>accessories<NavIcon/></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>servicing<NavIcon/></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>gibson tv<NavIcon/></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>garage<NavIcon/></NavLink>
                            </NavItem>
                        </NavMenu>
                    </Navigation>
                    <IconWrapper>
                        <ShoppingCart/>
                    </IconWrapper>
                </Wrapper>
            </Container>
        </div>
    );
};

export default Nav;