import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
    left: 0;
    bottom: 0;
    top: 0;
  height: 20%;
    width: 100%;
  background: #FAFAFA;
    text-align: center;
  border-top: 1px solid #D8D8D8;;
    color:  #FFFFFF;
  display:flex;
  align-items: center;
`
const IconContainer = styled.div`
width: 45%;
`

const Link = styled.a`
margin-left: 10px;
  color: gray;
`
const Footer = () => {
    return (
        <Wrapper>
            <IconContainer>
                <Link href="https://www.instagram.com">
                    <AiFillInstagram/>
                </Link>
                <Link href="https://www.linkedin.com">
                    <AiFillLinkedin/>
                </Link>
                <Link href="https://www.facebook.com">
                    <AiFillFacebook/>
                </Link>
                <Link href="https://www.twitter.com">
                    <AiFillTwitterSquare/>
                </Link>
            </IconContainer>


        </Wrapper>
    );
}
export default Footer;