
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
//REDUX CONFIG
import store from "./Redux/store/store";
import { Provider } from "react-redux";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
//COMPONENTS
import Settings from './Pages/Settings/Settings'


/* Page Components */
import App from './App';

ReactDOM.render(
	<React.StrictMode>
    <Provider store={store}>
		  <BrowserRouter>
			  <Routes>
				  <Route path="/" element={<App />} />
				  <Route path="/settings" element={<Settings />} />
			  </Routes>
		  </BrowserRouter>
    </Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
