type TeamConstantsProps = {
  backgroundImage: string;
  header: string;
};

export const TEAM_CONSTANTS: TeamConstantsProps = {
  backgroundImage: "bg3.jpg",
  header: "Our Team",
};

export type EmployeeProps = {
  name: string;
  image: string;
  title: string;
  biography: string;
};

/*
NOTE:

For biographies:
- use \n to end a paragraph (this shouldn't be added for the last paragraph)
  - example:
    - "paragraph 1 \n paragraph 2 \n paragraph 3"

- use \u2022 for bullet points and add a \n in the paragraph preceding the
  first bullet point and after the last bullet point
  - example:
    - "some random text \n \u2022 bullet point 1 \u2022 bullet point 2 \u2022 bullet point 3 \n"
*/
export const EMPLOYEE_CONSTANTS: EmployeeProps[] = [
  {
    name: "Todd Tovani, AIA",
    image: "Todd Tovani HS.jpg",
    title: "Architect",
    biography:
      "Todd Tovani has over 27 years of architectural experience and has been involved in the development of projects ranging in size from site evaluations and small renovations to multimillion-dollar new construction. He is a talented designer and communicator who is involved with projects from inception through completion. His experience includes a wide range of project types including education, state agencies, municipalities, residential, commercial and religious facilities. Todd's extensive background encompasses Washington State predesigns, facility programming, feasibility studies, site analysis, master planning, design, project management and scheduling. These experiences add to his qualifications as a skilled architect who has developed many complex projects with limited budgets and rigid schedule requirements. Todd formed Tovani Architects in 2010 after 19 years with Ambia (fka, The BJSS Group), 11 as Principal and Education Studio Lead. His passion for direct project involvement inspired his decision to create a small company founded on the principle of service.",
  },
  {
    name: "Trent Hart, AIA",
    image: "Trent Hart 2021 cropped.jpg",
    title: "Architect",
    biography:
      "Trent takes pride in creating close relationships with individuals and groups involved in his projects to further the efficiency and quality of the outcomes. His leadership fosters a collaborative atmosphere of creativity focused on solutions while retaining the priorities of meeting critical project timelines and budgets. He has over 21 years of hands on design experience and his skills in sketching vignettes and perspectives quickly are effective communication tools to help the entire project team make informed decisions. He genuinely likes people and being part of a lasting contribution to community.",
  },
  {
    name: "Jane Locke",
    image: "Jane Locke 2018 cropped.jpg",
    title: "Project Coordinator",
    biography:
      "Jane has over 20 years of experience ranging from hands on civic service with Habitat for Humanity to coordinating consultants and contractor efforts through complex construction projects. She brings enthusiasm to each project placing highest priority on fulfilling our client's needs. She operates efficiently in all phases of work. Her immersion into projects that range from programming to construction administration has contributed to her well -rounded approach to problem solving. Jane is instrumental in the organization, assembly and distribution of design documents from initial educational planning meetings, jurisdictional applications through construction close out. Jane is a welcoming presence to people and is a dedicated member of Tovani Hart and is a critical team member.",
  },
  {
    name: "Kate Fiegen",
    image: "Kate Fiegen 2021 cropped.jpg",
    title: "Architect",
    biography:
      "Kate has been fond of architecture nearly her entire life; even before she knew what architecture was.  She was given her first LEGO set as a young child, and her love of building and how things go together was quickly formed.  As an adult, Kate studied Architecture at the University of Arizona.  She spent several years developing a diverse set of skills before beginning her architectural internship in Phoenix, Arizona.\n Kate spent 10 plus years expanding her professional skills in areas ranging from Feasibility Studies to Construction Administration. While developing these skills, Kate pursued her professional licensing, and became a Registered Architect in 2019.  After enduring years of Phoenix summers, Kate, and her husband relocated to the beautiful Pacific Northwest.  Kate is excited to share her wit and enthusiasm with Tovani Hart and the community.\n In her spare time, Kate continues her love of everything LEGO, experiencing the PNW, and making / repairing things in her workshop.",
  },
  {
    name: "Maria Herrera, AIA",
    image: "Maria Herrera 2022 cropped.jpg",
    title: "Architect in Training",
    biography:
      "Maria is an active AIA member who attained her bachelor’s degree from Washington State University. She strives to build up her community through thoughtful design, integrity, and authenticity. She has a passion for helping people and enjoys spending her free time outdoors exploring new trails and photographing new scenes.",
  },
  {
    name: "Chrissy Burd",
    image: "Chrissy Burd cropped.jpg",
    title: "Bookkeeper",
    biography:
      "Chrissy has over 20 years of experience as a Bookkeeper, Controller, and Director of Operations, as well as extensive experience with payroll.  At Tovani Hart she works to support the team, primarily through her meticulous management of accounts-receivable and accounts-payable, to help keep project fees and consultant fees aligned with the progression of the project milestones.  Chrissy hails from Upstate New York, where she studied architecture at Syracuse University, but she has been calling the great Pacific Northwest “home” since 1992.  In her free time, Chrissy is an artist, most recently experimenting with large-scale 5’x5’ paintings on canvas, and she is an avid gardener who is practicing to someday be a flower farmer.",
  },
  {
    name: "Hasan Ikiz",
    image: "Hasan 2025.jpg",
    title: "Architect in Training",
    biography:
      "Hasan graduated from University of Idaho with both Masters and Bachelor degree in Architecture. He enjoys being in the practice of architecture after many years of learning the theory of it. In his professional path, he is looking to get his license in architecture. Hasan is coming from a diverse background and he uses that diversity in his professional life. He enjoys hands on experience. In his university years, he has learned carpentry and it became one of his passions. Being part of a Design & Build team taught him the important aspects of the build environment and how his designs impacts people’s lives. \n Hasan enjoys being outdoors. He is interested in carpentry, photography, acrylic and oil painting, gaming, and gardening. He appreciates being part of the community where he gets to enjoy everyday life and problem solving. One of the latest interests of Hasan is how to fix his car with creative solutions.",
  },
  {
    name: "Ingrid Noyes",
    image: "Ingrid 2025.jpg",
    title: "Interior Designer",
    biography:
      "Ingrid Noyes graduated with a Bachelor’s in Interior Design and Minor in Construction Management from the accredited design program offered by Washington State University. She first got hands-on experience through working with Habitat for Humanity and assisted the organization with rebuilding homes in New Orleans. After graduating high school, she went on to work with AmeriCorps NCCC, a government program designed to introduce young adults to different areas of work such as, energy conservation, infrastructure improvement, natural and other disaster services, and urban and rural development. \n Ingrid enjoys designing spaces in the areas of hospitality, retail, residential, and especially community based spaces. She also has an interest in historical preservation and how architecture and interior design reflects the identity of a society and culture. In her spare time, she enjoys going on hikes in the PNW, hanging out with friends and her cat, and talking with her grandma.",
  },
];

export default TEAM_CONSTANTS;
