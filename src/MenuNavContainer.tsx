import React from 'react';
import { withRouter } from 'react-router-dom';
import { Menu, MenuItem } from '@progress/kendo-react-layout';

const MenuNavContainer = (props): JSX.Element => {
    const onSelect = (event): void => {
        console.log(props);
        props.history.push(event.item.data.route);
    };

    return (
        <div>
            <Menu onSelect={onSelect}>
                <MenuItem text="Home" data={{ route: '/' }} />
                <MenuItem text="About" data={{ route: '/about' }} />
                <MenuItem text="" disabled={true} />
            </Menu>
        </div>
    );
};

export default withRouter(MenuNavContainer);
