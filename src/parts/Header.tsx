import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: #3498db;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  margin: 0;
  font-size: 1.5rem;
`;

const Nav = styled.nav`
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
  }

  li {
    margin-left: 1rem;
  }

  a {
    color: white;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Logo>React Examples</Logo>
      <Nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </Nav>
    </HeaderWrapper>
  );
};