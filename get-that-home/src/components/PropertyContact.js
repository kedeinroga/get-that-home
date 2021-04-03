import styled from "@emotion/styled";
import { colors, TextBody1, TextCaption } from "../ui";
import { RiUserReceivedLine, RiHeart3Line } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";
import Icon from "../components/Icon";
import Button from "../components/Button";

import { Link } from "react-router-dom";
import CurrentUser from "../components/auth/CurrentUser";

const StyledPropertyContact = styled.aside`
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  gap: 16px;
  text-align: center;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 32px;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;

    & > p {
      color: ${colors.gray};
    }
  }
`;

export default function PropertyContact() {
  return (
    <CurrentUser>
      {({ loaded, currentUser }) =>
        !loaded ? (
          <StyledPropertyContact>
            <TextBody1>Log in or Join to contact the advertiser</TextBody1>
            <Link to="/login">
              <Button icon={<RiUserReceivedLine />}>Login</Button>
            </Link>
          </StyledPropertyContact>
        ) : currentUser.role === "home_seeker" ? (
          <StyledPropertyContact>
            <Button>Contact Advertiser</Button>
            <div>
              <Icon color={colors.gray} size="20px">
                <RiHeart3Line />
              </Icon>
              <TextCaption>Add to favorites</TextCaption>
            </div>
          </StyledPropertyContact>
        ) : (
          currentUser.role === "landlord" && (
            <Button icon={<BiEdit />}>Edit property</Button>
          )
        )
      }
    </CurrentUser>
  );
}
