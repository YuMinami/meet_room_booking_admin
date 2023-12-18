import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Index} from "./pages/index/Index";
import {ErrorPage} from "./pages/error/ErrorPage";
import {UserManage} from "./pages/user_manage/UserManage";
import {Login} from './pages/login/Login';
import {Menu} from "./pages/menu/Menu";
import {PasswordModify} from "./pages/password_modify/PasswordModify";
import {InfoModify} from "./pages/info_modify/InfoModify";
import {ModifyMenu} from "./pages/modify_menu/ModifyMenu";


const routes = [
    {
        path: '/',
        element: <Index></Index>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Menu></Menu>,
                children: [
                    {
                        path: 'user_manage',
                        element: <UserManage/>
                    }
                ],
            },{
                path: "/user",
                element: <ModifyMenu></ModifyMenu>,
                children: [
                    {
                        path: 'info_modify',
                        element: <InfoModify/>
                    },
                    {
                        path: 'password_modify',
                        element: <PasswordModify/>
                    },
                ]
            },
        ]
    }, {
        path: 'login',
        element: <Login></Login>
    }
]

export const router = createBrowserRouter(routes);


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <RouterProvider router={router}></RouterProvider>
);
