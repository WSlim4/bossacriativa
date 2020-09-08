import styled from 'styled-components';

export const Card = styled.article`
  width: 470px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Link = styled.a`
  color: #000;
  text-decoration: none;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-start;

  :hover {
    color: #000;
  }

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Figure = styled.figure`
  flex: .8;
  height: 100px;
  width: 150px;
  margin: 0;

  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  flex: 1;
  margin-left: 1em;
`;

export const Title = styled.h4`
  font-size: .8em;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
