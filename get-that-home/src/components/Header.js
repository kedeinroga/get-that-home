import styled from "@emotion/styled";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useApolloClient, useQuery } from "@apollo/client";
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

import CurrentUser from "../components/auth/CurrentUser";
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

  .header__logo {
    transition: 0.4s all;

    :hover {
      opacity: 0.75;
    }
  }

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
  useQuery(GET_CURRENT_USER_QUERY);
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

  return (
    <CurrentUser>
      {({ loaded, currentUser }) => (
        <StyledHeader>
          <Container>
            <Link to="/">
              <img src={Logo} className="header__logo" alt="Get that home!" />
            </Link>
            {!loaded && (
              <ul>
                <li>
                  <Link to="/properties">
                    <Button icon={<RiSearchLine />} type="ghost">
                      Find a home
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link to="/register">
                    <Button icon={<RiUserAddLine />} type="secundary">
                      Join
                    </Button>
                  </Link>
                </li>
                <Link to="/login">
                  <li>
                    <Button icon={<RiUserReceivedLine />}>Login</Button>
                  </li>
                </Link>
              </ul>
            )}
            {loaded && currentUser.role === "home_seeker" && (
              <ul>
                <li>
                  <Link to="/properties">
                    <Button icon={<RiSearchLine />} type="ghost">
                      Find a home
                    </Button>
                  </Link>
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
                  <Button childrenIcon={<RiHeart3Line />}>
                    Saved properties
                  </Button>
                </li>
                <li>
                  <Link to="/updateuser">
                    <Button childrenIcon={<RiUser3Line />}>Profile</Button>
                  </Link>
                </li>
              </ul>
            )}
            {loaded && currentUser.role === "landlord" && (
              <ul>
                <li>
                  <Link to="/properties">
                    <Button icon={<RiSearchLine />} type="ghost">
                      Find a home
                    </Button>
                  </Link>
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
                  <Link to="/myproperties">
                    <Button childrenIcon={<RiHome8Line />}>My properties</Button>
                  </Link>
                </li>
                <li>
                  <Link to="/updateuser">
                    <Button childrenIcon={<RiUser3Line />}>Profile</Button>
                  </Link>
                </li>
              </ul>
            )}
          </Container>
        </StyledHeader>
      )}
    </CurrentUser>
  );
}
