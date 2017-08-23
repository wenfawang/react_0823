import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.PureComponent{
    constructor(){
        super();
    }

    render(){
        return (
            <div>
                <header>
                    <h2>welcome</h2>
                </header>
                <main>
                    <Link to='/user/add'>Add user</Link>
                </main>
            </div>
        )
    }
}

export default Home; 