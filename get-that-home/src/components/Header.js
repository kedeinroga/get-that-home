import React from "react";
import styled from "@emotion/styled";
import { useHistory } from "react-router-dom";
import { useApolloClient } from "@apollo/client";
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

import { GET_CURRENT_USER_QUERY } from "../components/auth/CurrentUser";

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
  let history = useHistory();
  let client = useApolloClient();

  const handleLogout = () => {
    localStorage.removeItem("token");
    client.writeQuery({
      query: GET_CURRENT_USER_QUERY,
      data: {
        currentUser: null,
      },
    });
    history.replace("/");
    document.location.reload();
  };

  function showLogin(e) {
    e.preventDefault();
    const landing_page = document.getElementById("landing__content");
    const login_overlay = document.getElementById("login__overlay");
    landing_page.style.display = "none";
    login_overlay.style.display = "grid";
  }

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
              <Button icon={<RiUserReceivedLine />} onClick={showLogin}>
                Login
              </Button>
            </li>
          </ul>
        )}
        {type === "seeker" && (
          <ul>
            <li>
              <Button childrenIcon={<RiSearchLine />} type="ghost">
                Find a home
              </Button>
            </li>
            <li>
              <Button
                onClick={handleLogout}
                childrenIcon={<RiLogoutCircleLine />}
                type="secundary"
              >
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
              <Button childrenIcon={<RiSearchLine />} type="ghost">
                Find a home
              </Button>
            </li>
            <li>
              <Button
                onClick={handleLogout}
                childrenIcon={<RiLogoutCircleLine />}
                type="secundary"
              >
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
