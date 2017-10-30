import React from 'react';
import { Sidebar, Segment, Button, Menu, Icon } from 'semantic-ui-react'
import { Switch, Route, Link } from 'react-router-dom';
import PageOne from './examples/PageOne';
import PageTwo from './examples/PageTwo';
import PageThree from './examples/PageThree';
import GateModule from './examples/GateModule';

const ChooseMenu = (props) => (
    <div>
        <Sidebar.Pushable as={Segment} className="top" style={{display: props.visible}}>
            <Sidebar as={Menu} animation='overlay' direction='top' visible={!props.visible} inverted>
                <Link to='/'>
                    <Menu.Item name='home'>
                        <Icon name='home' />
                        Gate module
                    </Menu.Item>
                </Link>
                <Link to='/page-one'>
                    <Menu.Item name='gamepad'>
                        <Icon name='gamepad' />
                        Page one
                    </Menu.Item>
                </Link>
                <Link to='/page-two'>
                    <Menu.Item name='camera'>
                        <Icon name='camera' />
                        Page two
                    </Menu.Item>
                </Link>
                <Link to='/page-three'>
                    <Menu.Item name='camera'>
                        <Icon name='camera' />
                        Page three
                    </Menu.Item>
                </Link>
            </Sidebar>
        </Sidebar.Pushable>
        <Sidebar.Pushable onClick={props.lighterHandler} style={{display: !props.visible}}>
            <Sidebar as={Menu} animation='overlay' width='thin' visible={props.visible} icon='labeled' vertical inverted>
                <Link to='/'>
                    <Menu.Item name='home'>
                        <Icon name='home' />
                        Gate module
                    </Menu.Item>
                </Link>
                <Link to='/page-one'>
                    <Menu.Item name='gamepad'>
                        <Icon name='gamepad' />
                        Page one
                    </Menu.Item>
                </Link>
                <Link to='/page-two'>
                    <Menu.Item name='camera'>
                        <Icon name='camera' />
                        Page two
                    </Menu.Item>
                </Link>
                <Link to='/page-three'>
                    <Menu.Item name='camera'>
                        <Icon name='camera' />
                        Page three
                    </Menu.Item>
                </Link>
                <Button className="float-btn" onClick={props.makeTextFloat}> >> </Button>
            </Sidebar>
            <Sidebar.Pusher>
                <Segment basic>
                    <Switch>
                        <Route exact path='/' component={GateModule}/>
                        <Route path='/page-one' component={PageOne}/>
                        <Route path='/page-two' component={PageTwo}/>
                        <Route path='/page-three' component={PageThree}/>
                    </Switch>
                </Segment>
            </Sidebar.Pusher>
        </Sidebar.Pushable>
    </div>
);

export default ChooseMenu;
