import React, { useState, useEffect } from "react";
import NAVBAR_CONSTANTS from "./NAV_BAR_CONSTANTS";
import Logo, { LogoText } from "../Logo";
import { styled } from "@mui/material";
import COLORS from "../../assets/Colors";
import useMobileScreen from "../../utils/useMobileScreen";
import TYPOGRAPHY from "../../assets/Typography";
import SPACING, { NAVBAR_HEIGHT } from "../../assets/Spacing";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import CloseIcon from "@mui/icons-material/Close";
import FadeIn from "../FadeIn";

type HandleSmoothScrollProps = {
  event: React.MouseEvent<HTMLAnchorElement | HTMLDivElement, MouseEvent>;
  section: string;
  isMobileScreen: boolean;
};

const handleSmoothScroll = ({
  event,
  section,
  isMobileScreen,
}: HandleSmoothScrollProps) => {
  event.preventDefault();

  const target = document.getElementById(section);

  if (target) {
    const offset = isMobileScreen && section !== "home" ? 60 : 0;

    window.scrollTo({
      top: target.offsetTop - offset,
      behavior: "smooth",
    });
  }
};

const NavBar = () => {
  const isMobileScreen = useMobileScreen();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    if (isMobileScreen) {
      setIsMenuOpen((prev) => !prev);
    }
  };

  // close out the menu if the screen size exceeds tablet size
  useEffect(() => {
    if (!isMobileScreen) {
      setIsMenuOpen(false);
    }
  }, [isMobileScreen]);

  return (
    <>
      {isMobileScreen ? (
        <MobileNavBarContainer>
          <MobileLogo isMobileScreen={isMobileScreen} />
          <MenuSharpIcon
            sx={{
              fontSize: "40px",
              cursor: "pointer",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
            onClick={handleMenuClick}
          />
          {isMenuOpen && <MenuModal setIsMenuOpen={setIsMenuOpen} />}
        </MobileNavBarContainer>
      ) : (
        <DesktopNavBarContainer>
          <LogoContainer>
            <Logo />
          </LogoContainer>
          <NavBarLinksContainer>
            <DesktopNavBarLinks />
          </NavBarLinksContainer>
        </DesktopNavBarContainer>
      )}
    </>
  );
};

const MobileLogo = ({ isMobileScreen }: { isMobileScreen: boolean }) => {
  return (
    <LogoTextContainer
      onClick={(e) =>
        handleSmoothScroll({ event: e, section: "home", isMobileScreen })
      }
    >
      <LogoText style={{ marginTop: "0px" }} />
    </LogoTextContainer>
  );
};

const LogoTextContainer = styled("div")({
  cursor: "pointer",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
  },
});

const DesktopNavBarLinks = () => {
  const isMobileScreen = useMobileScreen();

  return (
    <DesktopLinksContainer>
      {Object.values(NAVBAR_CONSTANTS).map(({ section, text }) => (
        <DesktopLink
          key={section}
          href={`#${section}`}
          onClick={(e) =>
            handleSmoothScroll({ event: e, section, isMobileScreen })
          }
        >
          {text}
        </DesktopLink>
      ))}
    </DesktopLinksContainer>
  );
};

const MenuModal = ({
  setIsMenuOpen,
}: {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <FadeIn
      slideIn={false}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        height: "100vh",
        width: "100vw",
        transition: "opacity 300ms ease-in-out",
      }}
    >
      <MenuModalContainer>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <CloseIcon
            sx={{
              fontSize: "50px",
              paddingTop: `${SPACING.extraLarge}px`,
              paddingRight: `${SPACING.extraLarge}px`,
              paddingBottom: `${SPACING.default}px`,
              cursor: "pointer",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
            onClick={() => {
              setIsMenuOpen((prev) => !prev);
            }}
          />
        </div>
        <MobileNavBarLinks setIsMenuOpen={setIsMenuOpen} />
      </MenuModalContainer>
    </FadeIn>
  );
};

const MobileNavBarLinks = ({
  setIsMenuOpen,
}: {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const isMobileScreen = useMobileScreen();

  return (
    <MobileLinksContainer>
      {Object.entries(NAVBAR_CONSTANTS).map(
        ([key, { section, text }], index) => (
          <MobileLinkContainer
            key={key}
            isLast={index === Object.entries(NAVBAR_CONSTANTS).length - 1}
            onClick={(e: React.MouseEvent<HTMLDivElement>) => {
              setIsMenuOpen((prev) => !prev);
              handleSmoothScroll({
                event: e as unknown as React.MouseEvent<HTMLAnchorElement>,
                section,
                isMobileScreen,
              });
            }}
          >
            <MobileLink key={key}>{text}</MobileLink>
          </MobileLinkContainer>
        )
      )}
    </MobileLinksContainer>
  );
};

// desktop styling
const DesktopNavBarContainer = styled("div")({
  position: "fixed",
  right: 0,
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  padding: `${9 * SPACING.default}px`,
  justifyContent: "center",
  zIndex: 10,
});

const LogoContainer = styled("div")({
  height: "45%",
  display: "flex",
  justifyContent: "flex-end",
});

const NavBarLinksContainer = styled("div")({
  height: "55%",
});

const DesktopLinksContainer = styled("div")({
  width: "150px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
});

const DesktopLink = styled("a")({
  color: COLORS.white,
  fontSize: TYPOGRAPHY.fontSize.h4,
  textDecoration: "none",
  textTransform: "uppercase",
  margin: `${0.5 * SPACING.default}px 0px`,
  padding: "0px 3px",
  fontWeight: TYPOGRAPHY.fontWeight.bolder,
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
    transform: "scale(1.1)",
  },

  "&:hover::after": {
    width: "100%",
  },
});

// mobile styling
const MobileNavBarContainer = styled("div")({
  position: "fixed",
  zIndex: 20,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  top: 0,
  width: "100%",
  height: `${NAVBAR_HEIGHT}px`,
  padding: "5px 20px",
  backgroundColor: COLORS.green,
  boxSizing: "border-box",
});

const MenuModalContainer = styled("div")({
  position: "absolute",
  top: 0,
  left: 0,
  height: "100vh",
  width: "100vw",
  backgroundColor: COLORS.transparentNavy2,
});

const MobileLinksContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
});

const MobileLinkContainer = styled("div")<{ isLast: boolean }>(
  ({ isLast }) => ({
    width: "100%",
    borderTop: "1px solid grey",
    borderBottom: isLast ? "1px solid grey" : "none",
    padding: SPACING.large,
    cursor: "pointer",

    "&:hover": {
      backgroundColor: COLORS.highlightedBlue,
    },
  })
);

const MobileLink = styled("a")({
  color: COLORS.white,
  fontSize: TYPOGRAPHY.fontSize.h3,
  textDecoration: "none",
  textTransform: "uppercase",
  margin: `${0.5 * SPACING.default}px 0px`,
});

export default NavBar;
