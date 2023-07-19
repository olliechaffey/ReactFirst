import React from 'react';
import Navbar from './Navbar';
import PageWithSections from './sectionPage';
import CodeRunner from './CodeRunner';

const SectionPage = () => {
  return (
    <div>
      <Navbar />
      <CodeRunner />
      <Navbar />
    </div>
  );
};

export default SectionPage;
