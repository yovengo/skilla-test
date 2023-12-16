import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import './index.css';
import { SearchParamsProvider } from './hooks/useSearchParams';
import { FilterParamsProvider } from './hooks/useFilterParams';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <SearchParamsProvider> 
            <FilterParamsProvider>
                <App/>
            </FilterParamsProvider>
        </SearchParamsProvider>
    </React.StrictMode>
);
