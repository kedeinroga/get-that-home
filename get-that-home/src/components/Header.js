import React from "react";
import styled from "@emotion/styled";
import {
  RiUserAddLine,
  RiUserReceivedLine,
  RiSearchLine,
  RiLogoutCircleLine,
  RiHeart3Line,
  RiUser3Line,
  RiHome8Line,
} from "react-icons/ri";
import { colors } from "../ui";
import Container from "../contents/Container";
import Logo from "../assets/logo.svg";
import Button from "./Button";

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 72px;
  background-color: ${colors.white};
  display: grid;
  place-items: center;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  margin: 0 auto;

  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    & > ul {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 16px;
    }
  }
`;

export default function Header({ type = "visit" }) {
  return (
    <StyledHeader>
      <Container>
        <img src={Logo} alt="Get that home!" />
        {type === "visit" && (
          <ul>
            <li>
              <Button icon={<RiSearchLine />} type="ghost">
                Find a home
              </Button>
            </li>
            <li>
              <Button icon={<RiUserAddLine />} type="secundary">
                Join
              </Button>
            </li>
            <li>
              <Button icon={<RiUserReceivedLine />}>Login</Button>
            </li>
          </ul>
        )}
        {type === "seeker" && (
          <ul>
            <li>
              <Button childrenIcon={<RiSearchLine />} ghost>
                Find a home
              </Button>
            </li>
            <li>
              <Button childrenIcon={<RiLogoutCircleLine />} secundary>
                Logout
              </Button>
            </li>
            <li>
              <Button childrenIcon={<RiHeart3Line />}>Saved properties</Button>
            </li>
            <li>
              <Button childrenIcon={<RiUser3Line />}>Profile</Button>
            </li>
          </ul>
        )}
        {type === "landlord" && (
          <ul>
            <li>
              <Button childrenIcon={<RiSearchLine />} ghost>
                Find a home
              </Button>
            </li>
            <li>
              <Button childrenIcon={<RiLogoutCircleLine />} secundary>
                Logout
              </Button>
            </li>
            <li>
              <Button childrenIcon={<RiHome8Line />}>My properties</Button>
            </li>
            <li>
              <Button childrenIcon={<RiUser3Line />}>Profile</Button>
            </li>
          </ul>
        )}
      </Container>
    </StyledHeader>
  );
}
