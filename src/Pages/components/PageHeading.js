import React from 'react';

const Pageheading = (p) => {
    return (
        <div className="pah">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                    <h3>{p.name}</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse fugiat nam similique eaque consectetur doloribus asperiores quas nesciunt, ipsa explicabo.</p>
                    <h3>{p.first} {'>>'} {p.name}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pageheading;
