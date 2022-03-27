import React from "react";
import { Link, useLocation, Outlet} from "react-router-dom";

export function Home(){
    return (
        <div>
            <h1>[Craft Store]</h1>
            <nav>
                <Link to="about">About</Link>
                <Link to="events">Events</Link>
                <Link to="contact">Contact</Link>
            </nav>
        </div>
    );
}

export function About(){
    return (
        <div>
            <h1>[About]</h1>
            <Outlet />
        </div>
    );
}

export function Services(){
    return (
        <div>
            <h2>Services</h2>
        </div>
    );
}

export function History(){
    return (
        <div>
            <h2>History</h2>
        </div>
    );
}

export function Location(){
    return (
        <div>
            <h2>Location</h2>
        </div>
    );
}


export function Events(){
    return (
        <div>
            <h1>[Events]</h1>
        </div>
    );
}

export function Contact(){
    return (
        <div>
            <h1>[Contact]</h1>
        </div>
    );
}

export function Error404(){
    let location=useLocation();
    console.log(location);
    return (
        <div>
            <h1>Page not found at {location.pathname}</h1>
        </div>
    )
}