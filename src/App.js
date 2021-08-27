import React from 'react';
import {Switch, Route, NavLink} from 'react-router-dom';

import PublicationsComponent from './Publition/AllPublicationsComponent';
import ContactsComponent from './Contacts/ContactsComponent';
import PhotosComponent from './Photos/PhotosComponent';
import NotFound from './NotFound/NotFound'

import './App.css';

const HomeComponent = () => {
  return <div>
    <a href="https://cursor.education/uk/" target="_blank" rel="noreferrer" className="title link">
    <img src="https://s3.eu-central-1.amazonaws.com/listmusor/production/89402/gallery/big/5a5692494bdf9.png" alt="" className="img img_cursor"/>
      CURSOR EDUCATION: Школа програмування</a>
  </div>
};

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink exact to="/react_router/" activeClassName="selected" className="link">Home</NavLink>
        <NavLink to="/react_router/publications" activeClassName="selected" className="link">Publications</NavLink>
        <NavLink to="/react_router/photos" activeClassName="selected" className="link">Photos</NavLink>
        <NavLink to="/react_router/contacts" activeClassName="selected" className="link">Contacts</NavLink>
      </nav>
      <Switch>
        <Route exact path="/react_router/" component={HomeComponent} />
          
        <Route path="/react_router/publications" component={PublicationsComponent} />
          
        <Route path="/react_router/photos" component={PhotosComponent} />
          
        <Route path="/react_router/contacts" component={ContactsComponent} />

        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
