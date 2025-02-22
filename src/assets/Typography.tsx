import { styled } from "@mui/material";

export const TYPOGRAPHY = {
  fontFamily: { default: "Lato", fallback: "sans-serif" },
  fontSize: {
    h1: "36px",
    h2: "28px",
    h3: "20px",
    h4: "18px",
    logo: "24px",
    paragraph: "16px",
  },
};

export const Paragraph = styled("div")({
  fontSize: TYPOGRAPHY.fontSize.paragraph,
  fontWeight: 100,
});

export default TYPOGRAPHY;
