import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {QueryClient, QueryClientProvider} from 'react-query';
import {AppRouter} from "./Pages/AppRouter";
import {NavBar} from "./Pages/Component/NavBar/NavBar";
import {PageBackground} from "./Pages/Component/PageBackground";

const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <PageBackground/>
                <NavBar>
                    <AppRouter/>
                </NavBar>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
