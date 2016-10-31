import React, {PropTypes, Component} from 'react';
require('./LiveEvents.scss');

export default class LiveEvents extends Component {

    state = {
        expanded: true
    }

    handleCollapseExpand = () => {
        this.setState({
            expanded: !this.state.expanded
        });
    }

    render() {
        let eventList = null;
        let stateButtonLabel = '+';

        if (this.state.expanded) {
            stateButtonLabel = '-';
            eventList = <div className="SSUI-LiveEvents-List">
                            {this.props.children}
                        </div>;
        }

        return (
            <div className="SSUI-LiveEvents">
                <div className="SSUI-LiveEvents-Header">
                    <div className="SSUI-LiveEvents-Header-Home">
                        <div className="SSUI-LiveEvents-Header-Logo">
                            <img src={this.props.homeTeam.logoUrl}/>
                        </div>
                        <div className="SSUI-LiveEvents-Header-Text">
                            <span>{this.props.homeTeam.name}</span>
                        </div>
                    </div>
                    <div className="SSUI-LiveEvents-Header-Data">
                        <div className="SSUI-LiveEvents-Header-Data-Score">
                            {this.props.matchData.score}
                        </div>
                        <div className="SSUI-LiveEvents-Header-Data-Time">
                            {this.props.matchData.time}
                        </div>
                    </div>
                    <div className="SSUI-LiveEvents-Header-Away">
                        <div className="SSUI-LiveEvents-Header-Logo">
                            <img src={this.props.awayTeam.logoUrl}/>
                        </div>
                        <div className="SSUI-LiveEvents-Header-Text">
                            <span>{this.props.awayTeam.name}</span>
                        </div>
                    </div>
                    <button className="SSUI-LiveEvents-List-ExpandCollapse" onClick={this.handleCollapseExpand}>{stateButtonLabel}</button>
                </div>
                {eventList}
            </div>
        );
    }
}
