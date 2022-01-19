import styled from 'styled-components';
import { ReactComponent as Iconsearch } from '..//assets/icon-search.svg';
import { ReactComponent as Iconnew } from '..//assets/icon-new.svg';
import { ReactComponent as Iconbeta } from '..//assets/icon-beta.svg';
import { ReactComponent as Iconoption } from '..//assets/icon-menu.svg';
import { MEDIA_QUERY_END_POINT } from '../constants';

const Header = () => {
  return (
    <Section>
      <Mainbar>
        <Nav>
          <Topside>
            <Leftside>
              <Btnmenu>
                <img src="/assets/icon-menu.png" alt="" />
              </Btnmenu>
              <Logo href="/">
                <h2>wanted</h2>
              </Logo>
            </Leftside>

            <Btnjoin>회원가입하기</Btnjoin>
          </Topside>
          <Menuitems>
            <Itemhome>
              <Item href="">홈</Item>
            </Itemhome>
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
                <Btnoption>
                  <Iconoption></Iconoption>
                </Btnoption>
              </li>
              <li>
                <Btnlogin>회원가입/로그인</Btnlogin>
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
  @media (max-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    height: 110px;
  }
`;

const Mainbar = styled.div`
  margin: 0 auto;
  max-width: 1060px;
  width: 87.72%;

  @media (max-width: ${MEDIA_QUERY_END_POINT.DESKTOP}) {
    width: 90%;
  }

  @media (max-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    width: 90%;
  }
  @media (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    width: 100%;
  }
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

const Topside = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    width: 100%;
    padding: 15px 0;
    height: 60px;
  }
  @media (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    width: 100%;
    padding: 15px 20px;
    height: 60px;
  }
`;

const Btnjoin = styled.button`
  display: none;
  color: #36f;
  font-size: 14px;
  line-height: 32px;
  height: 34px;
  border: 1px solid #36f;
  border-radius: 17px;
  padding: 0 14px;
  @media (max-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    display: block;
  }
`;

const Logo = styled.a`
  h2 {
    font-size: 24px;
    font-weight: 900;
  }
`;

const Btnmenu = styled.button`
  margin-top: -2px;
  margin-right: 15px;
  padding: 0;
  img {
    width: 17px;
    height: 14px;
    object-fit: contain;
  }
`;

const Menuitems = styled.ul`
  display: flex;

  @media (max-width: ${MEDIA_QUERY_END_POINT.DESKTOP}) {
    flex: 1 1;
    justify-content: space-evenly;
  }
  justify-content: space-evenly;
  @media (max-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    justify-content: flex-start;
  }

  @media (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    li:nth-child(3) ~ li {
      display: none;
    }
  }
`;

const Itemhome = styled.li`
  display: none;
  @media (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    display: inline-block;
    padding-left: 10px;
  }
`;

const Item = styled.a`
  position: relative;
  vertical-align: middle;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  display: inline-block;
  padding: 15px;
  @media (max-width: ${MEDIA_QUERY_END_POINT.DESKTOP}) {
    padding: 15px 0;
    font-size: 13px;
    justify-content: flex-start;
  }
  @media (max-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    padding: 11px 10px 19px;
    font-size: 13px;
    margin: 0;
  }

  em {
    position: absolute;
    top: 10px;
    right: -5px;
    pointer-events: none;
    @media (max-width: ${MEDIA_QUERY_END_POINT.DESKTOP}) {
      right: -20px;
    }
    @media (max-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
      top: 5px;
      right: -7px;
    }
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
  padding: 0 5px;
`;

const Btnoption = styled.button`
  display: none;
  @media (max-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    display: inline-block;
    padding-left: 10px;
    margin-right: 10px;
  }
`;

const Btnlogin = styled.button`
  padding: 0 10px;
  margin-right: 6px;
  font-weight: 600;
  @media (max-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    display: none;
    padding-left: 10px;
  }
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
  @media (max-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    display: none;
  }
`;
