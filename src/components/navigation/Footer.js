import React, { Component } from 'react';
import { Menu, Input } from 'semantic-ui-react';

class Footer extends Component {
    render() {
        return (
            <div>
                <div  className="ui inverted vertical footer segment">
                    <div className="ui container">
                        Travel Match 2015. All Rights Reserved
                    </div>
                </div>

            <Menu>
                <Menu.Item disabled>
                    (c) My Copyright
                </Menu.Item>
                <Menu.Item position="right">
                    <Input disabled label="Autor:"/>
                </Menu.Item>
                <Menu.Item >
                    <Input disabled label="Date:"/>
                </Menu.Item>
            </Menu>
            </div>
        );
    }
}
export default Footer;