import React, {PropTypes, Component} from 'react';

require('./GameStats.scss');

const Possesion = (props) => {
    let fieldTextureTypeParts = props.fieldTextureUrl.split('.');
    let fieldTextureType = fieldTextureTypeParts[fieldTextureTypeParts.length - 1].toLowerCase();
    let homeWidth = parseInt(props.possesionData.home);
    let awayWidth = parseInt(props.possesionData.away);

    if (homeWidth + awayWidth === 0) {
        homeWidth = 1150;
    } else {
        homeWidth = homeWidth / (homeWidth + awayWidth) * 1150;
    }

    let textureComponent = null;
    if (fieldTextureType) {
        if (fieldTextureType === 'svg') {
            textureComponent = <object data={props.fieldTextureUrl} type="image/svg+xml" style={{width: '100%', height:'auto', boxShadow: '0 10px 20px 2px rgba(0, 0, 0, 0.5)'}}></object>
        } else {
            textureComponent = <img src={props.fieldTextureUrl} style={{width: '100%', height:'auto', boxShadow: '0 10px 20px 2px rgba(0, 0, 0, 0.5)'}}></img>
        }
    }

    return (
        <div style={{position: 'relative', transform: 'perspective(1200px) rotateX(45deg)'}}>
            {textureComponent}
            <svg viewBox="0 0 1150 720" style={{position: 'absolute', left: 0}}>
                <rect x="0" y="0" width={homeWidth} height="720" fill="rgba(55, 255, 55, 0.25)"></rect>
                <text x="350" y="150" fontSize="100" fill="white" style={{textShadow: '0 0 10px black'}}>Possesion</text>
                <text x="150" y="450" fontSize="100" fill="white">{props.possesionData.home}</text>
                <text x="750" y="450" fontSize="100" fill="white">{props.possesionData.away}</text>
            </svg>
        </div>
    );
}

const PlayerInfo = (props) => {
    if (props.infoType === 'home') {
        return (
            <div className="SSUI-GameStats-Player">
                <div className="SSUI-GameStats-TShirtNr">
                    {props.player.tShirtNr}
                </div>
                <div className="SSUI-GameStats-PlayerName text-left">
                    <button className="SSUI-GameStats-Text-Button" onClick={props.onPlayerClick}>{props.player.name}</button>
                </div>
            </div>
        );
    }

    return (
        <div className="SSUI-GameStats-Player">
            <div className="SSUI-GameStats-PlayerName text-right">
                <button className="SSUI-GameStats-Text-Button" onClick={props.onPlayerClick}>{props.player.name}</button>
            </div>
            <div className="SSUI-GameStats-TShirtNr">
                {props.player.tShirtNr}
            </div>
        </div>
    );
};

const Players = (props) => (
    <div className="SSUI-GameStats-Zone bigger">
        {props.players.map((player, i) => <PlayerInfo infoType={props.team} player={player} onPlayerClick={props.onPlayerClick.bind(this, player)} key={i}/>)}
    </div>
)

const StatInfo = (props) => (
    <div className="SSUI-GameStats-Stats">
        <div className="SSUI-GameStats-Stats-Number">
            {props.data.home}
        </div>
        <div className="SSUI-GameStats-Stats-Type">
            {props.data.type}
        </div>
        <div className="SSUI-GameStats-Stats-Number">
            {props.data.away}
        </div>
    </div>
)

const Stats = (props) => (
    <div className="SSUI-GameStats-Zone">
        {props.stats.map((stat, i) => <StatInfo data={stat} key={i}/>)}
        <Possesion fieldTextureUrl={props.fieldTextureUrl} possesionData={props.possesionData}/>
    </div>
)

const GameStats = (props) => (
    <div className="SSUI-GameStats">
        <Players team="home" players={props.homePlayers} onPlayerClick={props.onPlayerClick}/>
        <Stats stats={props.stats} fieldTextureUrl={props.fieldTextureUrl} possesionData={props.possesionData}/>
        <Players team="away" players={props.awayPlayers} onPlayerClick={props.onPlayerClick}/>
    </div>
)

export default GameStats;
