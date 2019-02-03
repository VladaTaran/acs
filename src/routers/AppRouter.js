import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
// import NotFoundPage from '../components/NotFoundPage';
import Home from '../components/Home';
import Courses from '../components/Courses';
import Contact from '../components/Contact';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={Home} exact={true} />
                <Route path="/courses" component={Courses} exact={true}/>
                <Route path="/contact" component={Contact} />
                {/* <Route component={NotFoundPage} /> */}
            </Switch>
        </div>   
    </BrowserRouter>
);

export default AppRouter;