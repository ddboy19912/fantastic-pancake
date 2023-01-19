import React from 'react';
import { PageHOC } from '../components';

const Status = () => {
  return (
    <div className="w-full">
      <div className="px-6"></div>
    </div>
  );
};

export default PageHOC(Status, 'Status', false);
