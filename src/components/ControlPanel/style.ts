import styled from 'styled-components';

export const Container = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 40px;
  flex: 1;

  div {

    background: #CCC5B9;
    width: 100%;
    padding: 10px 60px 10px 10px;
    border-radius: 8px;
    position: relative;
    
    h1 {
      font-size: 22px;
      color: #252422;
    }

    p{
      color: #252422;

      span {
        font-weight: bold;
      }
    }

    svg {
      position: absolute;
      top: 10px;
      right: 10px;
    }

    &+div {
      margin-top: 30px;
    }

  }

  div[class="buttons"] {
    background: transparent;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;

    button {
      font-size: 20px;
      padding: 10px 20px;

    }
  }

  @media(max-width: 730px) {
    margin: 0;

    button {
      margin-bottom: 20px;
    }
  }
`;