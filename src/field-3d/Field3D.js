import React, {PropTypes, Component} from 'react';
import ReactDOM from 'react-dom';
import STLViewer from './STLViewer';

export default class Field3D extends Component {

    handleResize = (e) => {
        this.refs.STLViewer.applyResize();
    }

    componentDidMount = () => window.addEventListener('resize', this.handleResize);

    render = () => (
            <STLViewer
                {...this.props}
                ref="STLViewer"/>
        );
}
