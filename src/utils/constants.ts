import { ReactNode } from "react";
import HomePage from "../page/home/HomePage";
import ContactPage from "../page/contacts/ContactPage";
import AboutPage from "../page/abouts/AboutPage";
import ProjectPage from "../page/projects/ProjectPage";
import LoginPage from "../page/login/loginPage";
import DetailBoard from "../page/detailBoard/DetailBoard";
import TechnologiesPage from "../page/technologies/TechnologiesPage"

export interface IRouteMaps {
    __id: string;
    name: string;
    URL: string;
    element:() => JSX.Element;
    isProtected?: boolean;
}


export const routeMap:IRouteMaps[] = [
    {
        __id: '1',
        name: 'Home',
        URL: '/',
        element: HomePage
    },
    {
        __id: '2',
        name: 'Contact',
        URL: '/contactPage',
        element: ContactPage
    },
    {
        __id: '3',
        name: 'About',
        URL: '/aboutPage',
        element: AboutPage
    },
    {
        __id: '4',
        name: 'Projects',
        URL: '/projectPage',
        element: ProjectPage
    },
    {
        __id: '5',
        name: 'Login',
        URL: '/loginPage',
        element: LoginPage
    },
    {
        __id: '6',
    name: 'Detailboard',
    URL: '/detailboard',
    element: DetailBoard,
    isProtected: true,
    },
    {
        name:'Technologies',
        URL:'/TechnologiesPage',
        __id:'6',
        element:TechnologiesPage
    }
]