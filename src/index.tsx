import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter, redirect } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { routes } from './routes';
import { MainPage } from './pages/MainPage';
import { AboutPage } from './pages/AboutPage';
import { InfoPage } from './pages/InfoPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { PricingPage } from './pages/PricingPage';

const router = createBrowserRouter([
  {
    path: routes.root,
    element: <MainPage />,
    children: [
      {
        path: routes.home,
        element: <h1>Home page</h1>
      }, {
        path: routes.about,
        element: <AboutPage />,
      },
      {
        path: routes.info,
        element: <InfoPage />,
      },
      {
        path: routes.projects,
        element: <ProjectsPage />,
      },
      {
        path: routes.pricing,
        element: <PricingPage />,
      }]
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
