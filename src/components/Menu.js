import React, { Component } from 'react'
import ChooseMenu from './ChooseMenu';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react'
import './Menu.css';

class Menu extends Component {
    state = {
        visible: false
    };

    toggleVisibility = () => this.setState({ visible: !this.state.visible });


    // make choosed menus item another color
    lighterHandler = (e) => {
        const items = document.querySelectorAll('.sidebar .item');
        items.forEach((item) => item.className = 'item');
        if(e.target.tagName === 'I') {
            e.target.parentNode.className += ' selected'
        } else {
            e.target.className += ' selected'
        }
    };


    // make button for picture at left and text at right
    makeTextFloat = () => {
      document.querySelectorAll('.icon').forEach((item) => {
          if(item.style.float === 'left') {
              item.style.float = '';
          } else {
              item.style.float = 'left';
          }
      })
    };

    render() {
        const { visible } = this.state;
        // it is doesn't work without setTimeout, i leave this because this version just for showing
        if(visible) {
            const ola = document.querySelector('.top');
            setTimeout(() => {ola.style.display = 'none'}, .1)
        }
        return (
            <div>
                <Button onClick={this.toggleVisibility}>Toggle</Button>
                <ChooseMenu
                    visible={ visible }
                    toggle={this.toggleVisibility}
                    makeTextFloat={this.makeTextFloat}
                    lighterHandler={this.lighterHandler}
                />
            </div>
        )
    }
}

Menu.propTypes = {
    visible: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
    makeTextFloat: PropTypes.func,
    lighterHandler: PropTypes.func
};

export default Menu;
