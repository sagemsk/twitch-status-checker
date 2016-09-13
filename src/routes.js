import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App'
import Main from './components/main';
import AboutPage from './components/abouts/AboutPage';
import ContactsPage from './components/contacts/ContactsPage';

export default (
  <Route path="/" components={App}>
    <IndexRoute components={Main} />
    <Route path="abouts" components={AboutPage} />
    <Route path="contacts" components={ContactsPage} />
  </Route>
);