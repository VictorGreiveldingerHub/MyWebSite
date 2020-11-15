// == Import npm
import React, {useState} from 'react';

// == Import
import './styles.scss';

// == Components Imports
import Header from 'src/components/Header';
import MainContent from 'src/components/MainContent';
import Footer from 'src/components/Footer';

const Site = () => {
  // State pour gérer le menu
  const [activeItem, setActiveItem] = useState('accueil');

  const handleItemClick = (evt, { name }) => {
    setActiveItem(name);
  };

  return (
    <div className="app">
      <Header
        activeItem={activeItem}
        handleItemClick={handleItemClick}
      />
      <MainContent />
      <Footer />
    </div>
  );
};

// == Export
export default Site;
