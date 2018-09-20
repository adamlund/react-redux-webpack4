import React from 'react';
import { Route, Switch } from 'react-router-dom';
import List from '../components/list.component';
import Form from '../components/form.component';
import Article from '../components/article.component';

const Routes = () => (
    <Switch>
        <Route exact path="/" render={() => <List />} />
        <Route path="/form" render={() => <Form />} />
        <Route path="/article/:id?" render={props => <Article { ...props }/>} />
    </Switch>
);

export default Routes;
