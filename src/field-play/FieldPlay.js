import React, {PropTypes, Component} from 'react';
import Viewer3D from './Viewer3D';

export default class FieldPlay extends Component {

    handleResize = (e) => {
        this.refs.Viewer3D.applyResize();
    }

    componentDidMount = () => {
        window.addEventListener('resize', this.handleResize);
    };

    render = () => (
            <Viewer3D
                {...this.props}
                ref="Viewer3D"/>
        );
}
