import styled from 'styled-components';

export const Loading = styled.div`
  height: 100vh;
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    font-size: 14px;
    color: #7159c1;
    text-decoration: none;
    padding: 3px;
  }

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    font-weight: bold;
    margin-top: 10px;
  }

  p {
    max-width: 400px;
    color: #666;
    margin-top: 10px;
    font-size: 14px;
    text-align: center;
  }
`;
