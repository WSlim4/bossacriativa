import styled from 'styled-components';

export const Section = styled.section`
  background-color: #fff;
  margin-bottom: 10vh;
  min-height: 400px;
  display: flex;
  flex-direction: column;

  h2 {
    background-color: #E7C032;
    font-family: 'Amatic SC', 'cursive';
    font-weight: bold;
    padding: 0.25em;
    text-align: left;
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: ${({ mt }) => mt || 0}px;
`;