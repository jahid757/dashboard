import React from 'react';
import Sidebar from '../../layouts/Sidebar/Sidebar';

const Container = ({children}) => {
    return (
        <div className="container">
        <Sidebar selected={1} />
        <main className="main_content">
          {
            children
          }
        </main>
      </div>
    );
}

export default Container;
