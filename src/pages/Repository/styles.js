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

export const IssuesList = styled.ul`
  list-style: none;
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid #eee;

  li {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;

    & + li {
      margin-top: 10px;
    }

    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #eee;
    }

    div {
      flex: 1;
      margin-left: 15px;

      strong {
        font-size: 16px;

        a {
          text-decoration: none;
          color: #333;

          &:hover {
            color: #7159c1;
          }
        }

        span {
          background: #eee;
          color: #333;
          border-radius: 2px;
          font-size: 12px;
          font-weight: 600;
          line-height: inherit;
          padding: 1px 4px;
          margin: 2px 5px;
        }
      }

      p {
        font-size: 12px;
        margin-top: 5px;
        color: #999;
      }
    }
  }
`;

export const StatusFilter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;

  button {
    font-weight: bold;
    padding: 3px 5px;
    max-width: 150px;
    width: 100%;
    margin: 0 5px;
    border-radius: 4px;
    border: 2px solid #7159c1;
    background: none;
    &[disabled] {
      background: #7159c1;
      color: #fff;
      cursor: not-allowed;
    }
  }
`;

export const PageControl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 4px;
    background: none;
    border: none;
    margin: 0 10px;

    &[disabled] {
      opacity: 0.7;
    }

    svg {
      color: #7159c1;
    }
  }

  span {
    font-size: 12px;
    font-weight: 600;
  }
`;
