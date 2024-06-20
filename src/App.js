import React, { useState } from 'react';
import ChatWidget from './components/ChatWidget/ChatWidget';
import FilterComponent from './components/FilterComponent/FilterComponent';
import Logo from './components/Logo/Logo';
import MapComponent from './components/MapComponent/MapComponent';
import TabBar from './components/TabBar/TabBar';
import { AppContainer, Header, ContentContainer } from './App.styles';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('chat');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <AppContainer>
      <Header>
      <Logo />
      <TabBar activeTab={activeTab} onTabClick={handleTabClick} />
      </Header>
      <ContentContainer>
        <MapComponent isChatOpen={isChatOpen} />
        {isChatOpen && (activeTab === 'chat' ? <ChatWidget /> : <FilterComponent />)}
      </ContentContainer>
    </AppContainer>
  );
}

export default App;
