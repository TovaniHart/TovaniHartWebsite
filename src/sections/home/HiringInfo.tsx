import TYPOGRAPHY, { Paragraph } from "../../assets/Typography";
import { styled } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import SPACING from "../../assets/Spacing";
import COLORS from "../../assets/Colors";

type HiringInfoProps = {
  sendResumeText: string;
  emailAddress: string;
  sendResumeAnywayText: string;
  hiringText: string;
  positionHiring: string;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const HiringInfo = ({
  sendResumeText,
  emailAddress,
  sendResumeAnywayText,
  hiringText,
  positionHiring,
  setShowModal,
}: HiringInfoProps) => {
  return (
    <>
      <Paragraph>
        {sendResumeText}{" "}
        <a
          href={`mailto:${emailAddress}`}
          style={{ textDecoration: "none", color: COLORS.white }}
        >
          {emailAddress}
        </a>
        <br />
        {sendResumeAnywayText}
      </Paragraph>
      <Paragraph style={{ padding: `${SPACING.large}px 0px` }}>
        {hiringText}
      </Paragraph>
      <HiringLink setShowModal={setShowModal} positionHiring={positionHiring} />
    </>
  );
};

type HiringLinkProps = {
  positionHiring: string;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const HiringLink = ({ positionHiring, setShowModal }: HiringLinkProps) => {
  return (
    <HiringLinkContainer
      onClick={() => {
        setShowModal((prev) => !prev);
      }}
    >
      <HiringLinkText>{positionHiring}</HiringLinkText>
      <EastIcon />
    </HiringLinkContainer>
  );
};

const HiringLinkContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  cursor: "pointer",
  width: "fit-content",
  transition: "transform 0.3s ease-in-out",
  paddingLeft: "3px",
  "&::after": {
    content: '""',
    position: "absolute",
    left: "0",
    bottom: "-2px",
    width: "0%",
    height: "2px",
    backgroundColor: COLORS.white,
    transition: "width 0.3s ease-in-out",
  },

  "&:hover": {
    transform: "scale(1.05)",
  },

  "&:hover::after": {
    width: "100%",
  },
});

const HiringLinkText = styled("div")({
  fontWeight: TYPOGRAPHY.fontWeight.bolder,
  fontSize: TYPOGRAPHY.fontSize.paragraph,
  marginRight: SPACING.small,
});

export default HiringInfo;
