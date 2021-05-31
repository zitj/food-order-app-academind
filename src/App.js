import React, { Fragment } from 'react';
import Meals from './components/Meals/Meals';
import Header from './Layout/Header/Header';

function App() {
    return (
        <Fragment>
            <Header></Header>
            <main>
                <Meals />
            </main>
        </Fragment>
    );
}

export default App;
