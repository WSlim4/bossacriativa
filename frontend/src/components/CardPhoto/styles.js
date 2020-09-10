import styled from 'styled-components';

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  background-color: #ddd;
`;

export const Body = styled.main`
  flex: 1;
  display: flex;

  figure {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin: 0;

    img {
      flex: 1;
      background-color: #555;
      width: 100%;
    }

    div {
      height: 30px;
      padding-left: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    figcaption {
      text-align: left;
      font-size: .8em;
    }
    
    button {
      height: 30px;
      width: 30px;
      background-color: #bbb;
      outline: none;
      border: 0;
    }
  }
`;