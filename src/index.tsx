import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import 'nprogress/nprogress.css';
import App from 'src/App';
import { SidebarProvider } from 'src/contexts/SidebarContext';
import * as serviceWorker from 'src/serviceWorker';
import { store } from './redux/store';
import { Provider } from 'react-redux';
const queryClient = new QueryClient();

ReactDOM.render(
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <SidebarProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </SidebarProvider>
      </Provider>
    </QueryClientProvider>
  </HelmetProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
