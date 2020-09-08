import styled from 'styled-components';

export const Link = styled.a `
  font-size: .8em;
  text-align: left;
  margin-bottom: 10px;
  color: #000;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

  :hover {
    text-decoration: underline;
  }
`;
