import React, { useEffect, useState } from 'react';
import { Button, Input } from 'semantic-ui-react'

function Settings() {

    const [repos, setRepos] = useState("")
    const [input, setInput] = useState("davidchiche1412")

    useEffect(() => { fetchData() }, [])

    const handleChange = (e: {target: {value:string}}) => {
        setInput(e.target.value) 
    }

    const fetchData = () => {
        fetch(`https://api.github.com/users/${input}/repos`)
        .then(response => response.json())  
        .then((data: [{html_url: string, name: string}]) => {
           setRepos(displayData(data))
        });
    }

    function displayData(data: [{html_url: string, name: string}]): any {
        return (
            <ul>
              {data.map((element) =>
                <li key= {element.html_url}><p>{element.name}<a href={element.html_url}>{element.html_url}</a></p></li>
              )}
            </ul>
          )
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

            <ul id='repos' style={{width: '500px'}}>{repos}</ul>

        </div>

    );
}

export default Settings
