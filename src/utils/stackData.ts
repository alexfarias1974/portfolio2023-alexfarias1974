import imgHTML from "../public/static/img/stack/html.svg";
import imgCSS from "../public/static/img/stack/css.svg";
import imgJS from "../public/static/img/stack/js.svg";
import imgNode from "../public/static/img/stack/node.svg";
import imgStyled from "../public/static/img/stack/styled.svg";
import imgReact from "../public/static/img/stack/react.svg";
import {FaDocker, FaPython, FaGitAlt, FaAws, FaUbuntu} from "react-icons/fa";
import {SiPostgresql, SiInsomnia, SiSwagger, SiJirasoftware, SiDjango, SiTypescript, SiRailway} from "react-icons/si"

export const stackData = [
  {
    title: "HTML",
    img: imgHTML,
  },
  {
    title: "CSS",
    img: imgCSS,
  },
  {
    title: "Javascript",
    img: imgJS,
  },
  {
    title: "Node JS",
    img: imgNode,
  },
  {
    title: "Styled Components",
    img: imgStyled,
  },
  {
    title: "React",
    img: imgReact,
  },
  { title: "Python", img: FaPython },
  { title: "Django - DRF", img: SiDjango },
  { title: "TypeScript", img: SiTypescript },
  { title: "Docker", img: FaDocker },
  { title: "PostgreSQL", img: SiPostgresql },
  { title: "Git", img: FaGitAlt},
  { title: "Insomnia", img: SiInsomnia},
  { title: "Swagger", img: SiSwagger},
  { title: "Jira", img: SiJirasoftware},
  { title: "Deploy Railway", img: SiRailway},
  { title: "Deploy AWS", img: FaAws},
  { title: "Linux", img: FaUbuntu},
];
