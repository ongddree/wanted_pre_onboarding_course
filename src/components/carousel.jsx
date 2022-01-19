import styled from 'styled-components';
import {
  useState,
  useMemo,
  Children,
  useLayoutEffect,
  useRef,
  useEffect,
  useCallback,
} from 'react';
import { ReactComponent as Iconleft } from '..//assets/icon-left.svg';
import { ReactComponent as Iconright } from '..//assets/icon-right.svg';
import { MEDIA_QUERY_END_POINT } from '../constants';

const Carousel = ({ children }) => {
  const containerRef = useRef();
  const intervalRef = useRef(null);
  const [current, setCurrent] = useState(1);
  const [translateX, setTranslateX] = useState(0);

  const handleSlide = useCallback(
    (mode) => {
      containerRef.current.style.transitionDuration = '400ms';
      if (mode === 'prev') {
        if (current <= 1) {
          setTranslateX(0);
          setCurrent(children.length);
        } else {
          setTranslateX(containerRef.current.clientWidth * (current - 1));
          setCurrent((prev) => --prev);
        }
      } else if (mode === 'next') {
        if (current >= children.length) {
          setTranslateX(
            containerRef.current.clientWidth * (children.length + 1)
          );
          setCurrent(1);
        } else {
          setTranslateX(containerRef.current.clientWidth * (current + 1));
          setCurrent((prev) => ++prev);
        }
      }
    },
    [current, children]
  );

  useEffect(() => {
    const transitionEnd = () => {
      if (current <= 1) {
        containerRef.current.style.transitionDuration = '0ms';
        setTranslateX(containerRef.current.clientWidth * current);
      }
      if (current >= children.length) {
        containerRef.current.style.transitionDuration = '0ms';
        setTranslateX(containerRef.current.clientWidth * children.length);
      }
    };

    document.addEventListener('transitionend', transitionEnd);
    return () => {
      document.removeEventListener('transitionend', transitionEnd);
    };
  }, [current, children]);

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      handleSlide('next');
    }, 4000);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [handleSlide]);

  const slides = useMemo(() => {
    if (children.length > 1) {
      let items = Children.map(children, (child, index) => (
        <Slide key={index}>{child}</Slide>
      ));
      return [
        <Slide key={children.length + 1}>
          {children[children.length - 1]}
        </Slide>,
        ...items,
        <Slide key={children.length + 2}>{children[0]}</Slide>,
      ];
    }

    return <Slide current>{children[0]}</Slide>;
  }, [children]);

  useLayoutEffect(() => {
    setTranslateX(containerRef.current.clientWidth * current);
  }, []);

  return (
    <Root className="root">
      <Lists
        ref={containerRef}
        style={{ transform: `translate3d(${-translateX}px, 0, 0)` }}
      >
        {slides}
      </Lists>
      <Leftbtn onClick={() => handleSlide('prev')} className="left">
        <span>
          <Iconleft />
        </span>
      </Leftbtn>
      <Rightbtn onClick={() => handleSlide('next')} className="right">
        <span>
          <Iconright />
        </span>
      </Rightbtn>
    </Root>
  );
};

export default Carousel;

const Root = styled.section`
  position: relative;
  width: 1060px;
  height: 300px;
`;

const Lists = styled.ul`
  display: flex;
  width: 100%;
  height: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Slide = styled.li`
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 10px;
`;

const Leftbtn = styled.button`
  justify-content: center;
  position: absolute;
  top: 120px;
  width: 30px;
  height: 60px;
  opacity: 0.9;
  border-radius: 15px;
  background-color: #fff;
  font-size: 16px;
  left: 0;
  left: calc((100% - 1210px) / 2);
  @media (max-width: ${MEDIA_QUERY_END_POINT.DESKTOP}) {
    display: none;
  }
`;

const Rightbtn = styled.button`
  justify-content: center;
  position: absolute;
  top: 120px;
  width: 30px;
  height: 60px;
  opacity: 0.9;
  border-radius: 15px;
  background-color: #fff;
  font-size: 16px;
  right: 0;
  right: calc((100% - 1200px) / 2);
  @media (max-width: ${MEDIA_QUERY_END_POINT.DESKTOP}) {
    display: none;
  }
`;
