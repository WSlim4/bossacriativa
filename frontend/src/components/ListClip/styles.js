import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const List = styled.ul`
  flex: 1;
  display: grid;
  margin: 0 auto;
  margin-bottom: 10px;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  padding-top: 5vh;
  padding-bottom: 5vh;
  overflow: hidden;

  @media(max-width: 600px) {    
    margin: 0 10px;
  }

  @media(max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

export const ListItem = styled.li``;
