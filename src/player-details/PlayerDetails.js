import React, {PropTypes, Component} from 'react';
import ReactDOM from 'react-dom';
require('./PlayerDetails.scss');

const StatsRows = (props) => (
    <div className={props.addClass}>
        <div className="SSUI-PlayerDetais-Bio-Label">{props.name}</div>
        <div className="SSUI-PlayerDetais-Bio-Label">{props.value}</div>
    </div>
)

export default class PlayerDetails extends Component {
    render = () => {
        let bio = Object.keys(this.props.bio).map((key, index) => <StatsRows name={key} value={this.props.bio[key]} addClass="SSUI-PlayerDetais-Bio-Row" key={index}/>);
        let stats = Object.keys(this.props.stats).map((key, index) => <StatsRows name={key} value={this.props.stats[key]} addClass="SSUI-PlayerDetais-Stats-Row" key={index}/>);

        return <div className="SSUI-PlayerDetais">
            <div className="SSUI-PlayerDetais-Bio">
                <div className="SSUI-PlayerDetais-Bio-Row">
                    <img className="SSUI-PlayerDetais-Bio-Image" src={this.props.player.faceImgUrl}/>
                </div>
                <div className="SSUI-PlayerDetais-Bio-NameRow">
                    <div className="SSUI-PlayerDetais-Bio-Label">{this.props.player.name}</div>
                    <div className="SSUI-PlayerDetais-Bio-Label SSUI-PlayerDetais-Bio-NameRow-tShirtNr">{this.props.player.tShirtNr}</div>
                </div>
                {bio}
            </div>
            <div className="SSUI-PlayerDetais-Stats">
                {stats}
            </div>
        </div>
    };
}
