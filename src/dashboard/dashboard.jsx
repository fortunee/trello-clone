import React, { Component } from 'react'
import styled from "styled-components";

import Button from "../components/button/button";

const AppContainer = styled.div`
  background-color: #bbb9b9;
  display: flex;
  flex-direction: column;
  height: 100vh;
  text-align: center;
`;

const AppHeader = styled.header`
  background-color: #222;
  color: white;
  height: 150px;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 1.5em;
`;

const Content = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Paragraph = styled.p``;

// export default class Dashboard extends Component {
//   render() {
//     return (
//         <AppContainer>
//             <AppHeader>
//             <Title>Welcome to React</Title>
//             </AppHeader>
//             <Content>
//             <Paragraph>
//                 Trello Clone Built with React and Styled Components
//             </Paragraph>
//             <Button>React Styled Components</Button>
//             </Content>
//       </AppContainer>
//     )
//   }
// }

const Dashboard = ({ loadProfile, profile, isLoading, hasError }) => (
    <AppContainer>
        <AppHeader>
            <Title>Welcome to React</Title>
        </AppHeader>
        <Content>
           <Paragraph>
               Trello Clone Built with React and Styled Components
           </Paragraph>
           <Button onClick={loadProfile}>Load Profile</Button>
        </Content>
     </AppContainer>
)

export default Dashboard;
