import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Announcements from './components/Announcements';
import Projects from './components/Projects';
import Calendar from './components/Calendar';
import Learn from './components/Learn';
import TopBar from './components/TopBar';

const App = () => {
  return (
    <Router>
      <div>
        <TopBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/announcements" component={Announcements} />
          <Route path="/projects" component={Projects} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/learn" component={Learn} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

