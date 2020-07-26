import Box from '@components/Box';
import Button from '@components/Button';
import React from 'react';
import styled from 'styled-components';

interface ProjectCardProps {
  title: string;
  description: string;
  keywords: string[];
  slug: string;
  image: string;
}

const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;

  li {
    padding: 5px 15px;
    margin-right: 15px;
    background-color: ${(p) => p.theme.beige};
    font-weight: bold;
    font-size: 13px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin-bottom: 60px;

  @media screen and (max-width: 850px) {
    flex-direction: column;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
  margin-bottom: 60px;
  padding-right: 40px;
`;

const ImageWrapper = styled.div``;

const RightColumn = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const { title, description, keywords, slug, image } = props;

  return (
    <Wrapper>
      <LeftColumn>
        <h1>{title}</h1>
        <List>
          {keywords.map((keyword, index) => (
            <li key={`keyword-${index}`}>{keyword}</li>
          ))}
        </List>
        <Box mb={40} />
        <p>{description}</p>
        <Box mb={40} />
        <Button href={`/project/[slug]`} as={`/project/${slug}`}>
          see this project
        </Button>
      </LeftColumn>
      <RightColumn>
        <ImageWrapper>
          <img src={image} aria-hidden alt="Project Image" width="100%" />
        </ImageWrapper>
      </RightColumn>
    </Wrapper>
  );
};

export default ProjectCard;