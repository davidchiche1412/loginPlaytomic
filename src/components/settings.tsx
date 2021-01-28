import React, { useState } from 'react';
import { Button, Input } from 'semantic-ui-react'

function Settings() {

    var inputString = ""

    const handleChange = (e: {target: {value:string}}) => {
        inputString = e.target.value 
    }

    const fetchData = () => {
        fetch(`https://api.github.com/users/${inputString}/repos`)
        .then(response => response.json())  
        .then((data: [{html_url: string, name: string}]) => {
            if (data.constructor.name === 'Array') {
                document.getElementById('repos')!.innerHTML = ''
                data.forEach(element => displayData(element.html_url, element.name))
            }         
        });
    }

    const displayData = (url: string, name: string) => {
        var li = document.createElement('li');
        li.innerHTML = (`<p>${name} => <a href='${url}'>${url}</a></p>`)
        document.getElementById('repos')!.appendChild(li)
    }

    return (
        <div className = 'container'>
            <div style={{ textAlign: 'center', backgroundColor: 'rgb(241 212 3 / 50%)'}}>
                <h2 style={{padding: '20px', color: 'grey'}}>SETTINGS</h2>
            </div>

            <div style= {{marginLeft: '10px', display: 'block', marginTop: '10px'}}>
                <Input icon='users' iconPosition='left' placeholder='Search gitHub username...' style={{marginRight: '10px'}}  onChange={ (e) => {handleChange(e) } }/>
                <Button onClick={() => { fetchData() }}>FETCH</Button>
            </div>

            <ul id='repos' style={{width: '500px'}}></ul>

        </div>

    );
}

export default Settings
