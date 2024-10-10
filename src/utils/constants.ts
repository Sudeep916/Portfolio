import HomePage from "../page/home/HomePage"
import ContactPage from "../page/contacts/ContactPage"
import AboutPage from "../page/abouts/AboutPage"
import ProjectPage from "../page/projects/ProjectPage"
import TechnologiesPage from "../page/technologies/TechnologiesPage"

interface IAppRoutes{
    
    name:string,
    URL:string,
    _id:number,
    element:()=>JSX.Element
}

export const routeMap:IAppRoutes[] =[
    {
        name:'Home',
        URL:'/',
        _id:1,
        element:HomePage
    },
    {
        name:'Contact',
        URL:'/ContactPage',
        _id:2,
        element:ContactPage
    },
    {
        name:'About',
        URL:'/AboutPage',
        _id:3,
        element:AboutPage
    },
    {
        name:'Project',
        URL:'/ProjectPAge',
        _id:4,
        element:ProjectPage
    },
    {
        name:'Technologies',
        URL:'/TechnologiesPage',
        _id:4,
        element:TechnologiesPage
    }
]