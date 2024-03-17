import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import 'nprogress/nprogress.css';
import App from 'src/App';
import { SidebarProvider } from 'src/contexts/SidebarContext';
import * as serviceWorker from 'src/serviceWorker';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import AuthAppProvider from './modules/auth/components/AuthAppProvider';
const queryClient = new QueryClient();
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));

root.render(
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <AuthAppProvider>
          <SidebarProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </SidebarProvider>
        </AuthAppProvider>
      </Provider>
    </QueryClientProvider>
  </HelmetProvider>
);

serviceWorker.unregister();
