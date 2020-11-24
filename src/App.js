import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import CartInterface from './pages/CartInterface';
import CheckoutPage from './pages/CheckoutPage';
import ThankYouPage from './pages/ThankYouPage';
import WorkshopDetails from './pages/WorkshopDetails';
import WorkshopsListing from './pages/WorkshopsListing';

function App() {
	return (
		<div id="app" className="app">
			<Header />
			<main id="main" className="main container-fluid">
				<Router>
					<Switch>
						<Route exact path="/" component={WorkshopsListing} />
						<Route path="/workshop/:id" component={WorkshopDetails} />
						<Route exact path="/cart" component={CartInterface} />
						<Route exact path="/checkout" component={CheckoutPage} />
						<Route exact path="/thank-you" component={ThankYouPage} />
					</Switch>
				</Router>
			</main>
		</div>
	);
}

export default App;
