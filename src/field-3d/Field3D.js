import React, {PropTypes, Component} from 'react';
import ReactDOM from 'react-dom';
import STLViewer from './STLViewer';

export default class Field3D extends Component {

    state = {
        windowWidth: window.innerWidth
    }

    handleResize = (e) => {
        this.setState({
            modelChanged: false,
            windowWidth: window.innerWidth
        });
        this.refs.STLViewer.applyResize();
    }

    componentDidMount = () => window.addEventListener('resize', this.handleResize);

    render = () => (
            <div>
                <STLViewer
                    width={window.innerWidth}
                    height={window.innerHeight}
                    {...this.props}
                    ref="STLViewer"/>
            </div>
        );
}
