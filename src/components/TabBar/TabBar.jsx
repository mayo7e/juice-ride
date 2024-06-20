import React from 'react';
import { TabBarContainer, TabButton } from './TabBar.styles';

const TabBar = ({ activeTab, onTabClick }) => {
  return (
    <TabBarContainer>
      <TabButton
        className={activeTab === 'chat' ? 'active' : ''}
        onClick={() => onTabClick('chat')}
      >
        Chat
      </TabButton>
      <TabButton
        className={activeTab === 'filter' ? 'active' : ''}
        onClick={() => onTabClick('filter')}
      >
        Filter
      </TabButton>
    </TabBarContainer>
  );
};

export default TabBar;
