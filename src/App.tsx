import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router } from 'react-router-dom';
import 'react-loading-skeleton/dist/skeleton.css';

import Layout from './lib/layout';
import Routings from './lib/router/Routings';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Layout>
          <Routings />
        </Layout>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
