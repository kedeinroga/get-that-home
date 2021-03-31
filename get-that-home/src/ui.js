import styled from "@emotion/styled";

const colors = {
  pink: "#F48FB1",
  lightPink: "#FFC1E3",
  darkPink: "#BF5F82",
  shallowPink: "rgba(244, 143, 177, 0.15)",
  gray: "#616161",
  lightGray: "#8E8E8E",
  darkGray: "#373737",
  shallowGray: "rgba(97, 97, 97, 0.15)",
  background: "#F5F5F6",
  backgroundLight: "#E1E2E1",
  white: "#FFFFFF",
  black: "#000000",
  gray4: "#BDBDBD",
  teal: "#1D4044",
};

const shadows = {
  shadow1: "box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2)",
  shadow2: "box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2)",
};

const TextSubtitle1 = styled.p`
  font-family: Montserrat;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
`;

const TextSubtitle2 = styled.p`
  font-family: Montserrat;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
`;

const TextBody1 = styled.p`
  font-family: Montserrat;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
`;

const TextBody2 = styled.p`
  font-family: Montserrat;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
`;

const TextButton = styled.p`
  font-family: Montserrat;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 1.25px;
  text-transform: uppercase;
`;

const TextCaption = styled.p`
  font-family: Montserrat;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
`;

const TextOverline = styled.p`
  font-family: Montserrat;
  font-size: 10px;
  line-height: 16px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
`;

export {
  colors,
  shadows,
  TextSubtitle1,
  TextSubtitle2,
  TextBody1,
  TextBody2,
  TextButton,
  TextCaption,
  TextOverline,
};
