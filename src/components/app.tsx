import React from "react";
import { connect } from 'react-redux';
import Dashboard from './dashboard';
import Settings from './settings';
import updateViews from '../store/actions/actions'

import { Menu, Header, Image, Button, Icon } from 'semantic-ui-react'
import { useHistory } from "react-router-dom";
import firebase from 'firebase/app';

function App(props: { actualView: { name: string }; updateViews: (view: string) => void; }) {
    
    const history = useHistory();
    
    const handleLogout = () => {
        firebase.auth().signOut();
        localStorage.removeItem("photo");
        localStorage.removeItem("user");
        history.push("/signin");
    }

    return (
       <div className="ui internally celled grid" style={{height: 'inherit'}}>
            <div className="row" style={{height: '70px', paddingTop: '7px'}}>
                <Header as='h2' floated='right' style={{ marginLeft: 'auto', height: '100%'}}>
                    <Image circular style={{width: '2em'}} src={localStorage.getItem('photo')?.toString()} />
                    <Button style={{marginLeft: '10px'}} animated onClick={() => { handleLogout() }}>
                        <Button.Content visible style={{color: 'rgba(0, 0, 0, 0.8)'}}>
                            {localStorage.getItem('user')}
                            <Icon style={{verticalAlign: 'middle'}} name='triangle right' />
                        </Button.Content>
                        <Button.Content hidden>
                            LOGOUT
                        </Button.Content>
                    </Button>
                </Header>
            </div>
            <div className="row" style={{height: 'calc(100% - 70px)'}}>
                <div className="two wide column" style={{borderRight: '1px solid rgb(141 136 136)'}}>
                    <Menu fluid vertical tabular style={{height: '100%',  borderRight: '1px solid rgb(141 136 136)'}}>
                        <Menu.Item
                            name='Dashboard'
                            className="itemMenu"
                            onClick={() => props.updateViews('Dashboard')}>
                            <Icon style={{margin: '0 0.5em 0 0', float: 'left'}} name='dashboard' /> Dashboard
                        </Menu.Item>
                        <Menu.Item
                            name='Settings'
                            onClick={() => props.updateViews('Settings')}
                            style={{color: 'rgba(0,0,0,.8)'}}
                            >
                            <Icon style={{margin: '0 0.5em 0 0', float: 'left'}} name='setting' /> Settings
                        </Menu.Item>
                    </Menu>
                </div>
                <div className="fourteen wide column" style={{padding: '0px'}}>
                    {props.actualView.name == "Dashboard" ? <Dashboard /> : <Settings />}
                </div>
            </div>
        </div>
    );
};

const MapStateToProps = (state: { actualView: any; }) => {
    return {
        actualView: state.actualView
    };
};

const MapDispatchToProps = (dispatch: (arg0: { type: string; view: string; }) => any) => {
    return {
        updateViews: (view: string)=> dispatch(updateViews(view))
    }
};

export default connect(MapStateToProps, MapDispatchToProps)(App);
