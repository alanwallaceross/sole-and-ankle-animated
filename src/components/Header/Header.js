import React from "react";
import styled from "styled-components/macro";

import { QUERIES, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import VisuallyHidden from "../VisuallyHidden";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          <NavLink href="/sale">
            <OriginalNavText>Sale</OriginalNavText>
            <PopUpNavText aria-hidden={true}>Sale</PopUpNavText>
          </NavLink>
          <NavLink href="/new">
            {" "}
            <OriginalNavText>New&nbsp;Releases</OriginalNavText>
            <PopUpNavText aria-hidden={true}>New&nbsp;Releases</PopUpNavText>
          </NavLink>
          <NavLink href="/men">
            {" "}
            <OriginalNavText>Men</OriginalNavText>
            <PopUpNavText aria-hidden={true}>Men</PopUpNavText>
          </NavLink>
          <NavLink href="/women">
            {" "}
            <OriginalNavText>Women</OriginalNavText>
            <PopUpNavText aria-hidden={true}>Women</PopUpNavText>
          </NavLink>
          <NavLink href="/kids">
            {" "}
            <OriginalNavText>Kids</OriginalNavText>
            <PopUpNavText aria-hidden={true}>Kids</PopUpNavText>
          </NavLink>
          <NavLink href="/collections">
            {" "}
            <OriginalNavText>Collections</OriginalNavText>
            <PopUpNavText aria-hidden={true}>Collections</PopUpNavText>
          </NavLink>
        </DesktopNav>
        <MobileActions>
          <ShoppingBagButton>
            <Icon id="shopping-bag" />
            <VisuallyHidden>Open cart</VisuallyHidden>
          </ShoppingBagButton>
          <UnstyledButton>
            <Icon id="search" />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" />
            <VisuallyHidden>Open menu</VisuallyHidden>
          </UnstyledButton>
        </MobileActions>
        <Filler />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;

  @media ${QUERIES.tabletAndSmaller} {
    justify-content: space-between;
    align-items: center;
    border-top: 4px solid var(--color-gray-900);
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
  margin: 0px 48px;
  overflow: hidden;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const MobileActions = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    gap: 32px;
    display: flex;
  }

  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    flex: revert;
  }
`;

const ShoppingBagButton = styled(UnstyledButton)`
  transform: translateX(-2px);
`;

const Filler = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  position: relative;
  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const OriginalNavText = styled.span`
  display: block;
  transform: translateY(0);
  transition: transform 350ms;

  @media (hover: hover) and (prefers-reduced-animation: no-preference) {
    ${NavLink}:hover & {
      transition: transform 350ms;
      transform: translateY(-100%);
    }
  }
`;

const PopUpNavText = styled.span`
  position: absolute:
  top: 0;
  left: 0;
  display: block;
  transform: translateY(200%);
  transition: transform 350ms;
  font-weight: ${WEIGHTS.bold};


  @media (hover: hover) and (prefers-reduced-animation: no-preference) {
    ${NavLink}:hover & {
    transition: transform 350ms;
    transform: translateY(calc(0% - 28px));
  }
  }
`;

export default Header;
