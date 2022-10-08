import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {QueryClient, QueryClientProvider} from 'react-query';
import {AppRouter} from "./Pages/AppRouter";

const queryClient = new QueryClient()


function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <AppRouter/>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
