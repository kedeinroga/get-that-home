import styled from "@emotion/styled";
import { colors, TextBody1 } from "../ui";
import {
  RiUserAddLine,
  RiUserReceivedLine,
  RiSearchLine,
  RiLogoutCircleLine,
  RiHeart3Line,
  RiUser3Line,
  RiHome8Line,
} from "react-icons/ri";
import Button from "../components/Button";

const StyledPropertyContact = styled.aside`
  background-color: ${colors.white};
  width: fit-content;
  display: grid;
  place-items: center;
  gap: 16px;
  text-align: center;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 32px;
`;

export default function PropertyContact() {
  return (
    <StyledPropertyContact>
      <TextBody1>Log in or Join to contact the advertiser</TextBody1>
      <Button icon={<RiUserReceivedLine />}>Login</Button>
    </StyledPropertyContact>
  );
}
