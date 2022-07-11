import { BrowserRouter, Route, Switch } from 'react-router-dom';

// styles
import './App.css';

// pages and components
import Home from './pages/home/Home';
import Dashboard from './pages/dashboard/Dashboard';
import Article from './pages/article/Article';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Navbar from './components/Navbar';

function App () {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>

					<Route path="/dashboard">
						<Dashboard />
					</Route>

					<Route path="/login">
						<Login />
					</Route>

					<Route path="/signup">
						<Signup />
					</Route>

					<Route path="/articles/:id">
						<Article />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
