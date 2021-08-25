import './App.css';
import {Switch, Route, NavLink} from 'react-router-dom';
import PublicationsComponent from './publition/AllPublicationsComponent';
import ContactsComponent from './contacts/ContactsComponent';
import PhotosComponent from './photos/PhotosComponent';
import NotFound from './NotFound/NotFound'

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
        <NavLink exact to="/" activeClassName="selected" className="link">Home</NavLink>
        <NavLink to="/publications" activeClassName="selected" className="link">Publications</NavLink>
        <NavLink to="/photos" activeClassName="selected" className="link">Photos</NavLink>
        <NavLink to="/contacts" activeClassName="selected" className="link">Contacts</NavLink>
      </nav>
      <Switch>
        <Route exact path="/" component={HomeComponent} />
          
        <Route path="/publications" component={PublicationsComponent} />
          
        <Route path="/photos" component={PhotosComponent} />
          
        <Route path="/contacts" component={ContactsComponent} />

        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
