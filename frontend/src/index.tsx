import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import reportWebVitals from './reportWebVitals';

// Components
import Signin from './pages/Signin';
import Layout from './pages/Layout';
import {ErrorPage} from './pages/ErrorPage';
import Dashboard from './pages/Dashboard';
import Payment from './pages/Payment';
import Students from './pages/Students';
import SideBarStateProvider from './contexts/toggleMenu.context';
// import DashboardCard from './components/Dashboard';
// import PaymentTable from './components/PaymentTable';
// import StudentTable from './components/StudentTable';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'payment', element: <Payment /> },
      { path: 'students', element: <Students /> },
    ],
  },
  {
    path: '/signin',
    element: <Signin />,
    errorElement: <ErrorPage />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <SideBarStateProvider> 
      <App />
    </SideBarStateProvider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();