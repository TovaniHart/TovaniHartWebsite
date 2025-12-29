import { useState } from "react";
import SectionHeader from "../../components/SectionHeader";
import Section from "../../components/Section";
import HOME_CONSTANTS from "./HOME_CONSTANTS";
import { Paragraph } from "../../assets/Typography";
import SPACING from "../../assets/Spacing";
import ParallaxImage from "../../components/ParallaxImage";
import SectionContent from "../../components/SectionContent";
import Logo from "../../components/Logo";
import useMobileScreen from "../../utils/useMobileScreen";
import HiringModal from "./HiringModal";
import FadeIn from "../../components/FadeIn";
import MailTo from "../../components/MailTo";
// import HiringInfo from "./HiringInfo";

const {
  backgroundImage,
  header,
  companyDescriptionText,
  // sendResumeText,
  emailAddress,
  // sendResumeAnywayText,
  // hiringText,
  positionHiring,
  positionBulletPoints,
  positionAvailability,
} = HOME_CONSTANTS;

const HomeSection = ({ id }: { id: string }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Section id={id}>
      <ParallaxImage imageName={backgroundImage} />
      {showModal && (
        <HiringModal
          positionHiring={positionHiring}
          positionBulletPoints={positionBulletPoints}
          positionAvailability={positionAvailability}
          setShowModal={setShowModal}
        />
      )}
      <HomeContent setShowModal={setShowModal} />
    </Section>
  );
};

const HomeContent = ({
  setShowModal,
}: {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const isMobileScreen = useMobileScreen();

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        zIndex: 5,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      {isMobileScreen && (
        <div
          style={{
            height: "45%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Logo style={{ marginBottom: "0px" }} />
        </div>
      )}
      <SectionContent
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          maxWidth: isMobileScreen
            ? `calc(100% - ${2 * SPACING.default}%)`
            : "60%",
          height: isMobileScreen ? "45%" : "55%",
        }}
      >
        <FadeIn>
          <SectionHeader
            style={{
              marginTop: isMobileScreen ? `${SPACING.default}px` : "",
            }}
          >
            {header}
          </SectionHeader>
        </FadeIn>
        <FadeIn delay={100}>
          <Paragraph>{companyDescriptionText}</Paragraph>
          <Paragraph>
            <MailTo emailAddress={emailAddress} />
          </Paragraph>
        </FadeIn>
        {/* <HiringInfo
          sendResumeText={sendResumeText}
          emailAddress={emailAddress}
          sendResumeAnywayText={sendResumeAnywayText}
          hiringText={hiringText}
          positionHiring={positionHiring}
          setShowModal={setShowModal}
        /> */}
      </SectionContent>
    </div>
  );
};

export default HomeSection;
