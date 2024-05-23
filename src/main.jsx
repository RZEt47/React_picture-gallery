import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import "./assets/styles/reset.scss"
import "./assets/styles/style.scss"

import {MainLayout} from "@/Layouts/MainLayout/index.js";
import {Germany} from "@/Pages/Germany/index.js";
import {French} from "@/Pages/French/index.js";
import {England} from "@/Pages/England/index.js";
import {Provider} from "react-redux";
import {persistor, store} from "@/redux/store.js";
import {Suspense} from "react";
import {NotFound} from "@/Pages/NotFound/index.js";
import {Skeleton} from "@/ui/Skeleton/index.js";
import {MainLoading} from "@/ui/MainLoading/index.js";
import {PersistGate} from "redux-persist/integration/react";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Suspense fallback={<MainLoading/>}>
                    <MainLayout/>
                </Suspense>,
        errorElement: <NotFound/>,
        children: [
            {
                path: "/",
                element: <Suspense fallback={"<Skeleton/>"}>
                            <French/>
                        </Suspense>,
            },
            {
                path: "/germany",
                element: <Suspense fallback={<Skeleton/>}>
                            <Germany/>
                         </Suspense>
            },
            {
                path: "/england",
                element:  <Suspense fallback={<Skeleton/>}>
                <England/>
                          </Suspense>
            },
        ]
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <RouterProvider router={router}/>
        </PersistGate>
    </Provider>

)
