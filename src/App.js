import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import CheckoutPage from './pages/CheckoutPage';
import WorkshopDetails from './pages/WorkshopDetails';
import WorkshopsListing from './pages/WorkshopsListing';

function App() {
	const [checkout, setCheckout] = useState(false);

	const openCheckout = () => {
		setCheckout(!checkout);
	};

	const closeCheckout = () => {
		if (checkout === true) {
			setCheckout(false);
		}
	};
	return (
		<div id="app" className="app">
			<Header checkout={checkout} openCheckout={openCheckout} />
			{checkout === true ? (
				<CheckoutPage buttonValue={checkout} closeCheckout={closeCheckout} />
			) : (
				''
			)}
			<main id="main" className="main container-fluid">
				<Switch>
					<Route exact path="/" component={WorkshopsListing} />
					<Route path="/workshop/:id" component={WorkshopDetails} />
				</Switch>
			</main>
		</div>
	);
}

export default App;
