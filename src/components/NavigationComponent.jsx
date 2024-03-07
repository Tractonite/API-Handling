import React from 'react'
import { Link } from "react-router-dom";

export default function NavigationComponent() {
    return (
        <div>
            <nav class="menu">
                <div class="wrapper">
                    <ul>
                        <li><Link to="/business">Business News</Link></li>
                        <li><Link to = "/sports">Sports News</Link></li>
                    </ul>
                </div>
            </nav >
        </div >
    )
}
