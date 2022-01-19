import styled from 'styled-components';
import { ReactComponent as Iconlink } from '..//assets/icon-link.svg';

const Card = ({ title, desc, img }) => {
  return (
    <Container>
      <a href="">
        <Img src={img}></Img>
      </a>
      <Info>
        <h3>{title}</h3>
        <h4>{desc}</h4>
        <hr />
        <a>
          바로가기
          <span>
            <Iconlink width={16} height={16} fill="#36f" />
          </span>
        </a>
      </Info>
    </Container>
  );
};

export default Card;

const Container = styled.article`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  a {
    display: block;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  display: block;
`;

const Info = styled.div`
  position: absolute;
  bottom: 28px;
  width: 330px;
  height: 146px;
  border-radius: 4px;
  background-color: #fff;
  text-align: left;
  left: 34px;

  h3 {
    margin-left: 20px;
    margin-right: 20px;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.5;
    margin-top: 20px;
    color: #333;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  h4 {
    margin: 0 20px;
    height: 44px;
    font-size: 14px;
    line-height: 1.64;
    color: #333;
    font-weight: 500;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  hr {
    height: 1px;
    margin: 0;
    border: none;
    flex-shrink: 0;
    background-color: #ececec;
  }

  a {
    margin: 6px 0 0 13px;
    padding: 6px 8px;
    display: flex;
    font-size: 14px;
    font-weight: 700;
    color: #36f;
    align-items: center;
    height: 27px;
    width: 200px;
  }
`;
