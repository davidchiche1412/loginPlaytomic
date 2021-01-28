import React, { useState } from 'react';
import { Button } from 'semantic-ui-react'

function Dashboard() {
    const [image, displayImage] = useState("");

    const fetchData = () => {
        fetch('https://randomfox.ca/floof/')
        .then(response => response.json())
        .then(data => displayImage(data.image));
    }

    return (
        <div className = "container">
            <div style={{ textAlign: 'center', backgroundColor: 'rgb(241 212 3 / 50%)'}}>
                <h2 style={{padding: '20px', color: 'grey'}}>DAHSBOARD</h2>
            </div>

            <Button style={{marginLeft: 'auto', marginRight: 'auto', display: 'block', marginTop: '10px'}} onClick={() => { fetchData() }}>FETCH</Button>

            { image ? <img width="300" height="300" src={image} alt="Fox" style={{display: 'block', marginLeft: 'auto', marginRight: 'auto',  marginTop: '10px'}}></img> : null }
        </div>
    );
}

export default Dashboard
