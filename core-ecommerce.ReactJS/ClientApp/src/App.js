import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Index_page_login from './components/pages/Login_Register_page/Index_page_login'
import Home_page from './components/pages/Home_Page/Home_page'

export default function App() {
    return (
        <div className="main-wrapper main-wrapper-2">
            <Router>
                <Switch>
                    <Route path='/'
                        exact={true}
                        component={
                            () => <Home_page/>
                        }/>
                    <Route path='/login'
                        exact={false}
                        component={
                            () => <Index_page_login/>
                        }/>
                </Switch>
            </Router>
        </div>
    );
};
