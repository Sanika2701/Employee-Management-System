
import { Fragment } from 'react';
import './App.css';
import { createBrowserRouter,  RouterProvider } from 'react-router-dom';
import EmpListComponent from './Components/EmpListComponent';
import EmployeeComponet from './Components/EmployeeComponet';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';


const Router = createBrowserRouter(
    [
    
        {path:'/',element:<EmpListComponent></EmpListComponent>},
        {path:'/employees',element:<EmpListComponent></EmpListComponent>},
        {path:'/add-emp',element:<EmployeeComponet></EmployeeComponet>},
        {path:'/edit-emp/:id',element:<EmployeeComponet></EmployeeComponet>}
    ]
)

function App() {
    return(
        <Fragment>
            
            <HeaderComponent></HeaderComponent>
            <RouterProvider router={Router}></RouterProvider>
            <FooterComponent></FooterComponent>
        </Fragment>
    )
  
}

export default App;
