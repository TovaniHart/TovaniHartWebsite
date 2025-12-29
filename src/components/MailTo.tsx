import COLORS from "../assets/Colors";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import SPACING from "../assets/Spacing";
import { styled } from "@mui/material";

const MailTo = ({ emailAddress }: { emailAddress: string }) => {
  return (
    <DesktopLink>
      <a
        href={`mailto:${emailAddress}`}
        style={{
          textDecoration: "none",
          color: COLORS.white,
          display: "flex",
          alignItems: "center",
        }}
      >
        {emailAddress}
        <ArrowOutwardIcon fontSize="small" />
      </a>
    </DesktopLink>
  );
};

const DesktopLink = styled("a")({
  color: COLORS.white,
  textDecoration: "none",
  margin: `${0.5 * SPACING.default}px 0px`,
  cursor: "pointer",
  position: "relative",
  display: "inline-block",
  transition: "transform 0.3s ease-in-out",

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

export default MailTo;
