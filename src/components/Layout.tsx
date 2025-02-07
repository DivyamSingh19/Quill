import Navbar from "./Navbar";

const Layout = ({children}) => {
    const currentPath =  window.location.pathname;
    const isSignupPage = currentPath == '/signup';
    
    
    return(
        <div>
            {isSignupPage&&<Navbar/>}
            <main>{children}</main>
        </div>
    )
}