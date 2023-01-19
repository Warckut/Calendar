import React, { useState } from "react";
import './index.css'
import DatePicker from './components/DatePicker'
import Schedule from "./components/Schedule";
import styled from "styled-components";
import addSvg from './images/add-2.svg';
import { CalendarProvider } from "./CalendarContext";
import Modal from "./components/Modal";

const Container = styled.div`
  width: 100%;
  max-width: 740px;
  margin: 0 auto;
`;
const FixedTop = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1;
`
const Footer = styled.footer`
  width: 100%;
  position: fixed;
  bottom: 0;
  padding: 25px 55px;
  z-index: 1;
  border-top: 2px solid #eeeeee;
  background: #f6f6f6;
  h2 {
    font-size: 24pt;
    font-weight: 600;
    font-family: "Open sans";
    color: #ff2d2d
  }
`
const Header = styled.div`
  padding: 47px 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  h2 {
    font-size: 32pt;
    font-weight: 400;
    margin-right: 25px;
  }
`
const Addbtn = styled.button`
  object {
    background: no-repeat url('${addSvg}');
    width: 30px;
    height: 30px;
    background-size: 30px;
  }
`
const Content = styled.section`
  margin-top: 220px;
`
const Nav = styled.div`
  padding: 14px 0;
  background: #f6f6f6;
  border-top: 3px solid #eeeeee;
  border-bottom: 3px solid #eeeeee;
`

function App() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <CalendarProvider>
      <FixedTop>
        <Container>
          <Header>
              <h2>Interview Calendar</h2>
              <Addbtn><object/></Addbtn>
          </Header>
        </Container>
        <Nav>
          <Container>
            <DatePicker/>
          </Container>
        </Nav>
      </FixedTop>
      <Content>
        <Container>
          <Schedule/>
        </Container>
      </Content>
      <Footer>
        <Container>
          <h2>Today</h2>
        </Container>
      </Footer>
      {/* <Modal/> */}
    </CalendarProvider>
  );
}

export default App;

