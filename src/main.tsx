import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/styles/_global.scss';
import './assets/styles/_constants.scss';
import { RouterProvider } from 'react-router-dom';
import router from './Router';
import { Provider } from 'react-redux';
import { store } from './store/store';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </StrictMode>,
);
