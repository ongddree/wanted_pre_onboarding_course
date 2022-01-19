import styled from 'styled-components';
import './App.css';
import Carousel from './components/carousel';
import Header from './components/header';
import Card from './components/card';
import { Carddata } from './data/carddata';

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <Carousel>
          {Carddata.map((e, index) => (
            <Card key={index} title={e.title} desc={e.desc} img={e.img} />
          ))}
        </Carousel>
      </Main>
    </div>
  );
}

export default App;

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 300px;
  padding-top: 25px;
  overflow: hidden;
`;
