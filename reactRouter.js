function PrivateRoute({ component: Component, isAuthenticated, ...rest}){
    return (
        <Route
            {...rest}
            render={(props) => 
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    )
}

// реализация React Router v6
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoute({ isAuthenticated }){
    return isAuthenticated ? <Outlet/> : <Navigate to="/login" />;
}


// вынесем логику в хук
import { useState, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function useAuth() {
    // здесь может быть логика проверки токена или состояния авторизации
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // проверка авторизации (через API или LocalStorage)
        const token = localStorage.getItem('token');
        setIsAuthenticated(!!token);
    }, []);

    return isAuthenticated;
}

function PrivateRoute() {
    const isAuthenticated = useAuth();

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}