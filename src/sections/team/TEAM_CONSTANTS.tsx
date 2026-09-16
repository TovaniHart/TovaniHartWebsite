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
    title: "Project Manager",
    biography:
      "Jane has over 20 years of experience ranging from hands on civic service with Habitat for Humanity to coordinating consultants and contractor efforts through complex construction projects. She brings enthusiasm to each project placing highest priority on fulfilling our client's needs. She operates efficiently in all phases of work. Her immersion into projects that range from programming to construction administration has contributed to her well -rounded approach to problem solving. Jane is instrumental in the organization, assembly and distribution of design documents from initial educational planning meetings, jurisdictional applications through construction close out. Jane is a welcoming presence to people and is a dedicated member of Tovani Hart and is a critical team member.",
  },
  {
    name: "Savannah Blair",
    image: "Savannah 2026.jpg",
    title: "Project Manager",
    biography:
      "Savannah has over 20 years of architectural experience, working on a wide variety of projects from feasibility studies, space planning and remodels to construction administration. A Phius Certified Builder (CPHB) since 2024, she is specially trained in passive house building standards. Savannah has managed project teams on large, multi-phased development projects from initial contracts to project close-out. Her well-rounded, detail-oriented approach to solving complex issues, allows for the success of projects. \n Placing a high priority on fulfilling the needs of our clients and delivering quality projects, she operates efficiently in all phases of work. Savannah values projects where she is able to build relationships with our clients and work toward achieving their goals. In order to successfully coordinate a project, she is in regular contact with consultants and authorities having jurisdiction throughout the duration of a project. During production, her organizational skills and awareness to detail, results in successfully meeting project goals, minimizing delays, and maintaining project schedules.",
  },
  {
    name: "Maria Herrera, AIA",
    image: "Maria Herrera 2022 cropped.jpg",
    title: "Architect in Training",
    biography:
      "Maria is an active AIA member who attained her bachelor’s degree from Washington State University. She strives to build up her community through thoughtful design, integrity, and authenticity. She has a passion for helping people and enjoys spending her free time outdoors exploring new trails and photographing new scenes.",
  },
  {
    name: "Eric Brunt",
    image: "Eric 2026.jpg",
    title: "Designer",
    biography:
      "Eric has over 15 years experience as a multi-disciplinary designer and artisan. He attended the University of Washington and earned degrees in both Architectural and Industrial Design, two unique yet complimentary practices at the foundation of his creative skill set. This background affords Eric the ability to balance large scale / big picture planning with small scale / detailed craft. His design experience includes mixed-used, residential, and institutional buildings, as well as custom furniture. Proficiency with both digital and physical tools allows him to deliver on a wide array of client goals. Eric became a LEED AP to facilitate the important work of integrating sustainability into the built environment. His focus on user experience is a core driver behind his ability to produce functionally and aesthetically pleasing environments. After many years in Seattle, Eric returned to his hometown of Olympia to live closer to family and nature. In his spare time, he enjoys volunteering for a non-profit focused on old-growth forest conservation, creating in his workshop, photography, and playing music.",
  },
  {
    name: "Chrissy Burd",
    image: "Chrissy Burd cropped.jpg",
    title: "Bookkeeper",
    biography:
      "Chrissy has over 20 years of experience as a Bookkeeper, Controller, and Director of Operations, as well as extensive experience with payroll.  At Tovani Hart she works to support the team, primarily through her meticulous management of accounts-receivable and accounts-payable, to help keep project fees and consultant fees aligned with the progression of the project milestones.  Chrissy hails from Upstate New York, where she studied architecture at Syracuse University, but she has been calling the great Pacific Northwest “home” since 1992.  In her free time, Chrissy is an artist, most recently experimenting with large-scale 5’x5’ paintings on canvas, and she is an avid gardener who is practicing to someday be a flower farmer.",
   },
];

export default TEAM_CONSTANTS;
