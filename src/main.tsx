import ReactDOM from 'react-dom/client';

import App from './App';
import './index.scss';
import Providers from './lib/Providers';

const root = ReactDOM.createRoot(document.getElementById('root')!);

const Main = (
  <Providers>
    <App />
  </Providers>
);

if (process.env.NODE_ENV === 'development') {
  import('../mocks/browser')
    .then(({ worker }) => {
      worker.start();
    })
    .then(() => {
      root.render(Main);
    });
} else {
  root.render(Main);
}
