// Styles
import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  StackSection,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectsAreaContent,
  ProjectAreaWrapperColumns,
  AboutMe
} from "./style";


export const Home = (): JSX.Element => {
  return (
    <main>
      <Header>
        <Container>
          <HeaderContent>
            <Text as="h1" type="heading1" color="grey5">
              Criando experiências por meio da tecnologia{" "}
            </Text>
            <Text type="body1" color="grey6">
              Sou estudante de programação na Kenzie Academy Brasil, já
              formado em front end, finalizando o back end para me tornar
              desenvolvedor full stack. Participei de diversos projetos
              resolvendo problemas de alto nível e desenvolvi várias
              habilidades que envolvem hardskills e softskills.
            </Text>
            <HeaderButtonsArea>
              <Button as="a" href="#projetos">
                Projetos
              </Button>
              <Button as="a" href="#tecnologias" type="btLink" color="grey5">
                Tecnologias
              </Button>
              <Button as="a" href="#sobreMim" type="btLink" color="grey5">
                Sobre Mim
              </Button>
            </HeaderButtonsArea>
          </HeaderContent>
        </Container>
      </Header>
      <StackSection id="tecnologias">
        <Container>
          <Text as="h4" type="heading3" color="white">
            Ferramentas que domino
          </Text>
          <StackCards>
            {stackData.map((stack, index) => (
              <Stack key={index} title={stack.title} icon={stack.img} />
            ))}
          </StackCards>
        </Container>
      </StackSection>
      <ProjectsArea id="projetos">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey1">
                Vamos trocar uma ideia?
              </Text>
              <Text as="p" type="body1" color="grey2">
                No linkedIn sempre estou compartilhando meus projetos e
                minhas evoluções. Estou disposto a trocar algumas ideias
                por lá. Críticas construtivas sempre são bem vindas.
              </Text>
              <Button
                type="primary"
                target="_blank"
                as="a"
                href={`https://www.linkedin.com/in/${userData.linkedinUser}`}
              >
                Acessar perfil no LinkedIn
              </Button>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Text type="body1" color="grey2" css={{ marginBottom: "$2" }}>
                Projetos
              </Text>
              <Text as="h3" type="heading2" color="grey1">
                Originalidade e{" "}
                <Text as="span" color="brand1" type="heading2">
                  dedicação
                </Text>{" "}
                em cada detalhe
              </Text>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
      <AboutMe id="sobreMim"> 
        <Container>
          <Text as="h3" type="heading2" color="grey1">
            Um pouco da minha história ...
          </Text>
          <Text type="body1" color="grey2">
            <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sou desenvolvedor front-end  formado pela Kenzie Academy Brasil e atualmente estou terminando a formação como desenvolvedor fullstack pela mesma instituição. Atuo nessa mesma instituição como monitor de React + Typescript e Python, auxiliando os devs menos experientes em um plantão de dúvidas, alicando testes técnicos e realizando correção de projetos de ensino.
            </p>
            <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Na minha carreira como desenvolvedor, tive a oportunidade de participar de projetos interessantes, participei como PO e scrum master da plataforma Alimento Solidário, uma aplicação que facilita o encontro de empresas que querem doar alimentos com instituições que desejam recebê-los. O front-end - onde fui PO - foi desenvolvido em React + Typescript e o back-end - aqui atuei como scrum master - primeiramente foi desenvolvido em node.js + express e depois em Django, o primeiro com deploy na Heroku e o segundo na AWS. Utilizamos também o docker tanto para o desenvolvimento quanto para produção. Os 3 projetos estão no meu Github.
            </p>  
            <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Além disso, tive a oportunidade de atuar como QA em diversos projetos durante 1 ano de curso de preparação para Full Stack. Os mais importantes estão no meu Github
            </p> 
            <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sou formado em Administração de Empresas pela Universidade de Fortaleza - UNIFOR e possuo pós-graduação em Marketing e Administração Estratégica para Comércio e Vendas pela FGV.
            </p>
          </Text>

        </Container>
      </AboutMe>
    </main>
  );
};
