import styled from 'styled-components';
import { ReactComponent as Iconsearch } from '..//assets/icon-search.svg';
import { ReactComponent as Iconnew } from '..//assets/icon-new.svg';
import { ReactComponent as Iconbeta } from '..//assets/icon-beta.svg';

const Header = () => {
  return (
    <Section>
      <Mainbar>
        <Nav>
          <Leftside>
            <Btnmenu>
              <img src="/assets/icon-menu.png" alt="" />
            </Btnmenu>
            <Logo href="/">
              <h2>WANTED</h2>
            </Logo>
          </Leftside>
          <Menuitems>
            <li>
              <Item href="">채용</Item>
            </li>
            <li>
              <Item href="">이벤트</Item>
            </li>
            <li>
              <Item href="">직군별 연봉</Item>
            </li>
            <li>
              <Item href="">이력서</Item>
            </li>
            <li>
              <Item href="">
                커뮤니티
                <em>
                  <Iconnew width={18} height={11} />
                </em>
              </Item>
            </li>
            <li>
              <Item href="">
                프리랜서
                <em>
                  <Iconbeta width={18} height={11} />
                </em>
              </Item>
            </li>
            <li>
              <Item href="">AI 합격예측</Item>
            </li>
          </Menuitems>
          <Rightside>
            <ul>
              <li>
                <Btnsearch>
                  <Iconsearch></Iconsearch>
                </Btnsearch>
              </li>
              <li>
                <Btnjoin>회원가입/로그인</Btnjoin>
              </li>
              <Serviceitem>
                <a href="/">기업서비스</a>
              </Serviceitem>
            </ul>
          </Rightside>
        </Nav>
      </Mainbar>
    </Section>
  );
};

export default Header;

const Section = styled.section`
  width: 100%;
  height: 50px;
  postion: fixed;
  z-index: 100;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
  color: #333333;
`;

const Mainbar = styled.div`
  margin: 0 auto;
  width: 87.72%;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const Leftside = styled.section`
  display: flex;
  align-items: center;
`;

const Logo = styled.a`
  h2 {
    font-size: 17px;
    font-weight: 700;
  }
`;

const Btnmenu = styled.button`
  margin-top: -2px;
  margin-right: 15px;
  img {
    width: 17px;
    height: 14px;
    object-fit: contain;
  }
`;

const Menuitems = styled.ul`
  display: flex;
`;

const Item = styled.a`
  position: relative;
  // vertical-align: middle;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  display: inline-block;
  padding: 15px;

  em {
    position: absolute;
    top: 10px;
    right: -5px;
    pointer-events: none;
  }
`;

const Rightside = styled.aside`
  padding: 10px 0;
  ul {
    display: flex;
    align-items: center;
  }
`;

const Btnsearch = styled.button`
  // margin-top: 5px;
  padding: 0 5px;
  // font-size: 14px;
`;

const Btnjoin = styled.button`
  padding: 0 10px;
  margin-right: 6px;
  font-weight: 600;
`;

const Serviceitem = styled.li`
  display: flex;
  &:before {
    display: block;
    content: '';
    width: 1px;
    height: 10px;
    background-color: #e1e2e3;
    margin: auto 10px;
  }

  a {
    font-size: 13px;
    color: #666;
    line-height: 30px;
    height: 30px;
    border: 1px solid #e1e2e3;
    border-radius: 15px;
    padding: 0 10px;
    margin-left: 15px;
  }
`;
