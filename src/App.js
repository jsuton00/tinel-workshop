import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import CheckoutPage from './pages/CheckoutPage';
import ThankYouPage from './pages/ThankYouPage';
import WorkshopDetails from './pages/WorkshopDetails';
import WorkshopsListing from './pages/WorkshopsListing';

function App() {
	return (
		<div id="app" className="app">
			<Header />
			<main id="main" className="main container-fluid">
				<Switch>
					<Route exact path="/" component={WorkshopsListing} />
					<Route path="/workshop/:id" component={WorkshopDetails} />
					<Route exact path="/checkout" component={CheckoutPage} />
					<Route exact path="/thank-you" component={ThankYouPage} />
				</Switch>
			</main>
		</div>
	);
}

export default App;
