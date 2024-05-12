import React from 'react';
import {
  BrowserRouter,
  BrowserRouterProps,
  Route,
  Routes,
} from 'react-router-dom';
import { Home } from './pages/Home';

interface RoutesAppProps {
  router?: React.ComponentType<BrowserRouterProps>;
}

export function RoutesApp({ router: Router = BrowserRouter }: RoutesAppProps) {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </Router>
  );
}
