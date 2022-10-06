import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient()


function App() {
    return (
        <QueryClientProvider client={queryClient}>
        <BrowserRouter>
        </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
