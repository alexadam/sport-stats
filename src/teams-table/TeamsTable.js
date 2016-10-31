import React, {PropTypes, Component} from 'react';
require('./TeamsTable.scss');

const StatInfo = (props) => (
    <div className="SSUI-TeamsTable-Stats-Units">
        {props.value}
    </div>
)

const Stats = (props) => {
    let stats = props.stats.map((stat, i) => <StatInfo value={stat} key={i}/>);

    return (
        <div className="SSUI-TeamsTable-Stats">
            {stats}
        </div>
    );
}

const TeamRow = (props) => (
    <div className="SSUI-TeamsTable-TeamRow">
        <div className="SSUI-TeamsTable-TeamRow-Rank">
            {props.rank}
        </div>
        <div className="SSUI-TeamsTable-TeamRow-Logo">
            <img src={props.logoUrl}></img>
        </div>
        <div className="SSUI-TeamsTable-TeamRow-Name">
            {props.name}
        </div>
        <Stats stats={props.stats}/>
    </div>
)

const HeaderRow = (props) => (
    <div className="SSUI-TeamsTable-HeaderRow">
        <Stats stats={props.headerData}/>
    </div>
)

const TeamRows = (props) => {
    let teams = props.teams.map((team, i) => <TeamRow logoUrl={team.logoUrl} name={team.name} stats={team.stats} rank={(i+1)} key={i}/>);
    teams.splice(0, 0, <HeaderRow headerData={props.headerData} key={-1}/>);

    return (
        <div className="SSUI-TeamsTable-Teams">
            {teams}
        </div>
    );
}

const TeamsTable = (props) => (
    <div className="SSUI-TeamsTable">
        <TeamRows teams={props.data} headerData={props.headerData}/>
    </div>
)

export default TeamsTable;
