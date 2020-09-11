import styled from 'styled-components';

export const Section = styled.section`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  margin-top: 5vh;

  > h2 {
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
  padding-top: ${({ pt }) => pt || 15}px;
  padding-bottom: ${({ pb }) => pb || 0}px;
  padding-left: ${({ pl }) => pl || 0}px;
  padding-right: ${({ pr }) => pr || 0}px;
  padding: ${({ p }) => p || 0}px;
`;