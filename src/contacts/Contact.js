import React from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';


export default function Contact ({id, firstName, lastName, phone, gender}) {
    const match = useRouteMatch();
    console.log(match)
    return(
        <li>
        <Link to={`${match.url}/${firstName}`}>
            <div className="name">
                <span className="firstName">{firstName}&emsp;</span> 
                <span className="lastName">{lastName}</span>
                <span className="gender"><img src={gender} alt=""></img></span>
                <div className="phone">{phone}</div>
            </div>
        </Link>
        <Switch>
            <Route exact path={`${match.path}/${firstName}`}>
                <div className="contact_info">
                    <span className="firstName">{firstName}&emsp;</span> 
                    <span className="lastName">{lastName}</span>
                    <span className="gender"><img src={gender} alt=""></img></span>
                    <div className="phone">{phone}</div>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis mollitia velit natus reiciendis dolorem tempore quae, voluptatum fugit sed provident assumenda! Delectus doloremque ea et, praesentium blanditiis tempore quae nobis!</div>
                </div>
            </Route>
        </Switch>
    </li>
    )
}