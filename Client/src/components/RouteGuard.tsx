import React from 'react'
import {Navigate,Outlet} from "react-router-dom"

export default function RouteGuard({ isAllowed ,redirect }: { isAllowed: boolean, redirect? : String | null | undefined }) {
        
    if(!isAllowed) 
        return <Navigate to={redirect ? redirect : "/"} replace />
    else 
        return <Outlet />
}
