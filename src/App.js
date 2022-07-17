import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import Mode from './components/Mode';

// styles
import './App.css';

// pages and components
import Home from './pages/home/Home';
import Dashboard from './pages/dashboard/Dashboard';
import Article from './pages/article/Article';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Error from './pages/error/Error';
import Navbar from './components/Navbar';

function App () {
	const { user, isAuthReady, mode } = useContext(AuthContext);
	return (
		<div className={`App ${mode}`}>
			{isAuthReady && (
				<BrowserRouter>
					<Navbar />
					<Mode />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>

						<Route path="/dashboard">
							{user && <Dashboard />}
							{!user && <Redirect to="/login" />}
						</Route>

						<Route path="/login">
							{!user && <Login />}
							{user && <Redirect to="/" />}
						</Route>

						<Route path="/signup">
							{!user && <Signup />}
							{user && <Redirect to="/" />}
						</Route>

						<Route path="/articles/:id">
							<Article />
						</Route>

						<Route path="*">
							<Error />
						</Route>
					</Switch>
				</BrowserRouter>
			)}
		</div>
	);
}

export default App;
