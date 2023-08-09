import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
// import store, { persistor } from './store';

// Redux ToolKit store
import store from './store_TK';
import { Provider } from 'react-redux';

// import { PersistGate } from 'redux-persist/integration/react';

// import { AppProvider } from "./components/movie_website/context";

// store.subscribe(() => {
// 	console.log(store.getState());
// });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	// Context API config

	// <React.StrictMode>
	// 	{/* Providing store data to App component using Provider */}
	// 	<Router>
	// 		<AppProvider>
	// 			<App />
	// 		</AppProvider>
	// 	</Router>
	// </React.StrictMode>

	// Redux Store Config

	// <React.StrictMode>
	// 	{/* Providing store data to App component using Provider */}
	// 	<Router>
	// 		<Provider store={store}>
	// 			<PersistGate loading={null} persistor={ persistor }>
	// 				<App />
	// 			</PersistGate>
	// 		</Provider>
	// 	</Router>
	// </React.StrictMode>

	// Redux ToolKit config

	<React.StrictMode>
		{/* Providing store data to App component using Provider */}
		<Router>
			<Provider store={store}>
				<App />
			</Provider>
		</Router>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
