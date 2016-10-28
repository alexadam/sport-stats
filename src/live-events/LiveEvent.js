import React, {PropTypes, Component} from 'react';

require('./LiveEvent.scss');

const displayPlayers = (playersArray, onPlayerClick) => playersArray.map((player, i) =>
    <div className="SSUI-LiveEvent-Text" key={i}>
        <button className="SSUI-LiveEvent-Text-Button" onClick={onPlayerClick.bind(this, player)}>{player.name}</button>
    </div>
);

const AwayEvent = (props) => {
    return (
        <div className="SSUI-LiveEvent">
            <div className="SSUI-LiveEvent-Home"></div>
            <div className="SSUI-LiveEvent-Logo"></div>
            <div className="SSUI-LiveEvent-Time"><span>{props.time}</span></div>
            <div className="SSUI-LiveEvent-Logo"><img src={props.logoUrl}/></div>
            <div className="SSUI-LiveEvent-Away">{displayPlayers(props.players, props.onPlayerClick)}</div>
        </div>
    );
}

const HomeEvent = (props) => {
    return (
        <div className="SSUI-LiveEvent">
            <div className="SSUI-LiveEvent-Home">{displayPlayers(props.players, props.onPlayerClick)}</div>
            <div className="SSUI-LiveEvent-Logo"><img src={props.logoUrl}/></div>
            <div className="SSUI-LiveEvent-Time"><span>{props.time}</span></div>
            <div className="SSUI-LiveEvent-Logo"></div>
            <div className="SSUI-LiveEvent-Away"></div>
        </div>
    );
}

const LiveEvent = (props) => {
    if (props.type === 'home') {
        return <HomeEvent {...props}/>
    }
    if (props.type === 'away') {
        return <AwayEvent {...props}/>
    }
    return null;
}

export default LiveEvent;
