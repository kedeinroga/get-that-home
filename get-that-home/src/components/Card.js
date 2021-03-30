import styled from "@emotion/styled";
import {
  RiCoinsLine,
  RiMoneyDollarCircleLine,
  RiMoneyDollarCircleFill,
  RiBuildingLine,
  RiCloseCircleLine,
} from "react-icons/ri";
import { BiBed, BiBath, BiArea, BiEdit } from "react-icons/bi";
import { MdPets } from "react-icons/md";
import { TextSubtitle1, TextBody1, TextBody2, TextButton, colors } from "../ui";
import imageDefault from "../assets/image-default.png";
import Icon from "./Icon";

// CardLabel function:
function CardLabel({ label }) {
  const StyledCardLabel = styled.div`
    background-color: ${label === "sale" ? colors.darkPink : colors.pink};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 8px;
    gap: 6px;
    width: 120px;
    height: 28px;
    border-radius: 0 8px 0 0;
    position: absolute;
    top: 0;
    right: 0;

    & > p {
      text-transform: capitalize;
      color: ${colors.white};
    }
  `;

  return (
    <StyledCardLabel>
      {label === "rental" && (
        <Icon color={colors.white}>
          <RiCoinsLine />
        </Icon>
      )}
      {label === "sale" && (
        <Icon color={colors.white}>
          <RiMoneyDollarCircleFill />
        </Icon>
      )}
      <TextBody2>For {label}</TextBody2>
    </StyledCardLabel>
  );
}

// Card function:
export default function Card({
  landlord,
  type,
  image,
  rent,
  propertyType,
  address,
  bedrooms,
  bathrooms,
  area,
  pets,
}) {
  const StyledCard = styled.div`
    background-color: ${colors.white};
    width: 300px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    position: relative;

    & > header {
      width: 100%;
      height: 200px;
      background-image: url(${image});
      background-size: cover;
      background-position: center center;
      border-radius: 8px 8px 0 0;
    }

    & > main {
      padding: 8px;

      & > header {
        & > div {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;

          & > span {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 10px;
          }

          & > div {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 5px;

            & > p {
              text-transform: capitalize;
              color: ${colors.gray};
            }
          }
        }
      }

      & > main {
        margin: 8px 0 25px 0;
      }

      & > footer {
        & > ul {
          display: flex;
          flex-direcion: row;
          align-items: center;
          justify-content: flex-start;
          gap: 16px;

          & > li {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 6px;

            & > p {
              color: ${colors.gray};
            }
          }
        }
      }
    }

    & > footer {
      min-height: 7px;
      width: 100%;
      background-color: ${colors.darkPink};
      display: grid;
      place-items: center;
      border-radius: 0 0 8px 8px;

      & > div {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;

        & > div {
          background-color: ${colors.darkPink};
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 11.5px 0;
          cursor: pointer;
          transition: 0.4s all;

          :first-child {
            border-radius: 0 0 0 8px;
          }

          :last-child {
            border-radius: 0 0 8px 0;
          }

          & > p {
            color: ${colors.white};
          }

          :hover {
            background-color: ${colors.pink};
          }
        }
      }
    }
  `;

  return (
    <StyledCard>
      <CardLabel label={type} />
      <header />
      <main>
        <header>
          <div>
            <span>
              <Icon size="26px">
                <RiMoneyDollarCircleLine />
              </Icon>
              <h5>{rent}</h5>
            </span>
            <div>
              <Icon color={colors.gray}>
                <RiBuildingLine />
              </Icon>
              <TextBody1>{propertyType}</TextBody1>
            </div>
          </div>
        </header>
        <main>
          <TextSubtitle1>{address}</TextSubtitle1>
        </main>
        <footer>
          <ul>
            <li>
              <Icon color={colors.gray}>
                <BiBed />
              </Icon>
              <TextBody1>{bedrooms}</TextBody1>
            </li>
            <li>
              <Icon color={colors.gray}>
                <BiBath />
              </Icon>
              <TextBody1>{bathrooms}</TextBody1>
            </li>
            <li>
              <Icon color={colors.gray}>
                <BiArea />
              </Icon>
              <TextBody1>{area} m2</TextBody1>
            </li>
            <li>
              <Icon color={colors.gray}>{pets && <MdPets />}</Icon>
            </li>
          </ul>
        </footer>
      </main>
      <footer>
        {landlord && (
          <div>
            <div>
              <Icon color={colors.white}>
                <BiEdit />
              </Icon>
              <TextButton>Edit</TextButton>
            </div>
            <div>
              <Icon color={colors.white}>
                <RiCloseCircleLine />
              </Icon>
              <TextButton>Close</TextButton>
            </div>
          </div>
        )}
      </footer>
    </StyledCard>
  );
}

Card.defaultProps = {
  landlord: false,
  type: "rental",
  image: imageDefault,
  rent: "0.00",
  propertyType: "apartment",
  address: "No address",
  bedrooms: 0,
  bathrooms: 0,
  area: 0,
  pets: false,
};
