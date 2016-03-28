var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var IndexRoute = ReactRouter.IndexRoute;
var Route = ReactRouter.Route;
var App = require('./components/app/app.jsx');
var Search = require('./components/search/search.jsx');



var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Search} />
  </Route>
);


document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
		<Router>{routes}</Router>,
    document.getElementById('content')
  );
});
