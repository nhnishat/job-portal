import { createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import Home from '../Home/Home/Home';
import Login from '../Log/Login';
import Register from '../Register/register';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: 'login',
				element: <Login />,
			},
			{
				path: 'register',
				element: <Register />,
			},
		],
	},
]);

export default router;
