import styled from 'styled-components';

export const Card = styled.article`
  width: 470px;
  height: 200px;
  background-color: #eee;

  @media (max-width: 600px) {
    width: 100%;
    height: 400px;
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
  height: 100%;
  border: 2px solid #777;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  flex: 1;
  padding: 10px 10px 10px 15px;
`;

export const Title = styled.h4`
  font-size: .8em;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;