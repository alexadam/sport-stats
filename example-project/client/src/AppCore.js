import React, {PropTypes, Component} from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import {LiveEvents, LiveEvent, Field2D, Field3D, PlayerDetails, GameStats, TeamsTable, FieldPlay} from 'sport-stats';
require('./AppStyle.scss');

class Appl extends React.Component {
    modalStyle = {
      overlay : {
        position          : 'fixed',
        top               : 0,
        left              : 0,
        right             : 0,
        bottom            : 0,
        backgroundColor   : 'rgba(255, 255, 255, 0.75)'
      },
      content : {
        position                   : 'absolute',
        width: '400px',
        height: '400px',
        margin: '0 auto',
        border                     : '1px solid #ccc',
        background                 : '#fff',
        overflow                   : 'auto',
        WebkitOverflowScrolling    : 'touch',
        borderRadius               : '4px',
        outline                    : 'none',
        padding                    : '10px',
        backgroundColor: '#1E1D25'
      }
    };

    ////// DATA

    homeTeam = {
        id: 1,
        name: 'Home Team',
        logoUrl: 'textures/team1.png',
        playerPositionById: [
            [1],
            [2, 3, 4, 5],
            [6, 7],
            [8, 9, 10],
            [11]
        ],
        players: [
            {
                id: 1,
                name: 'Home Player 1',
                tShirtImgUrl: 'textures/tshirt5.png',
                tShirtNr: '1',
                faceImgUrl: 'textures/generic-face.png'
            },
            {
                id: 2,
                name: 'Home Player 2',
                tShirtImgUrl: 'textures/tshirt5.png',
                tShirtNr: '2',
                faceImgUrl: 'textures/generic-face.png'
            },
            {
                id: 3,
                name: 'Home Player 3',
                tShirtImgUrl: 'textures/tshirt5.png',
                tShirtNr: '3',
                faceImgUrl: 'textures/generic-face.png'
            },
            {
                id: 4,
                name: 'Home Player 4',
                tShirtImgUrl: 'textures/tshirt5.png',
                tShirtNr: '4',
                faceImgUrl: 'textures/generic-face.png'
            },
            {
                id: 5,
                name: 'Home Player 5',
                tShirtImgUrl: 'textures/tshirt5.png',
                tShirtNr: '5',
                faceImgUrl: 'textures/generic-face.png'
            },
            {
                id: 6,
                name: 'Home Player 6',
                tShirtImgUrl: 'textures/tshirt5.png',
                tShirtNr: '6',
                faceImgUrl: 'textures/generic-face.png'
            },
            {
                id: 7,
                name: 'Home Player 7',
                tShirtImgUrl: 'textures/tshirt5.png',
                tShirtNr: '7',
                faceImgUrl: 'textures/generic-face.png'
            },
            {
                id: 8,
                name: 'Home Player 8',
                tShirtImgUrl: 'textures/tshirt5.png',
                tShirtNr: '8',
                faceImgUrl: 'textures/generic-face.png'
            },
            {
                id: 9,
                name: 'Home Player 9',
                tShirtImgUrl: 'textures/tshirt5.png',
                tShirtNr: '9',
                faceImgUrl: 'textures/generic-face.png'
            },
            {
                id: 10,
                name: 'Home Player 10',
                tShirtImgUrl: 'textures/tshirt5.png',
                tShirtNr: '10',
                faceImgUrl: 'textures/generic-face.png'
            },
            {
                id: 11,
                name: 'Home Player 11',
                tShirtImgUrl: 'textures/tshirt5.png',
                tShirtNr: '11',
                faceImgUrl: 'textures/generic-face.png'
            }
        ]
    }

    awayTeam = {
        id: 1,
        name: 'Away Team',
        logoUrl: 'textures/team2.png',
        playerPositionById: [
            [1],
            [2, 3, 4, 5],
            [6, 7],
            [8, 9, 10],
            [11]
        ],
        players: [
            {
                id: 1,
                name: 'Away Player 1',
                tShirtImgUrl: 'textures/tshirt9.png',
                tShirtNr: '1',
                faceImgUrl: 'textures/generic-face.png'
            },
            {
                id: 2,
                name: 'Away Player 2',
                tShirtImgUrl: 'textures/tshirt9.png',
                tShirtNr: '2',
                faceImgUrl: 'textures/generic-face.png'
            },
            {
                id: 3,
                name: 'Away Player 3',
                tShirtImgUrl: 'textures/tshirt9.png',
                tShirtNr: '3',
                faceImgUrl: 'textures/generic-face.png'
            },
            {
                id: 4,
                name: 'Away Player 4',
                tShirtImgUrl: 'textures/tshirt9.png',
                tShirtNr: '4',
                faceImgUrl: 'textures/generic-face.png'
            },
            {
                id: 5,
                name: 'Away Player 5',
                tShirtImgUrl: 'textures/tshirt9.png',
                tShirtNr: '5',
                faceImgUrl: 'textures/generic-face.png'
            },
            {
                id: 6,
                name: 'Away Player 6',
                tShirtImgUrl: 'textures/tshirt9.png',
                tShirtNr: '6',
                faceImgUrl: 'textures/generic-face.png'
            },
            {
                id: 7,
                name: 'Away Player 7',
                tShirtImgUrl: 'textures/tshirt9.png',
                tShirtNr: '7',
                faceImgUrl: 'textures/generic-face.png'
            },
            {
                id: 8,
                name: 'Away Player 8',
                tShirtImgUrl: 'textures/tshirt9.png',
                tShirtNr: '8',
                faceImgUrl: 'textures/generic-face.png'
            },
            {
                id: 9,
                name: 'Away Player 9',
                tShirtImgUrl: 'textures/tshirt9.png',
                tShirtNr: '9',
                faceImgUrl: 'textures/generic-face.png'
            },
            {
                id: 10,
                name: 'Away Player 10',
                tShirtImgUrl: 'textures/tshirt9.png',
                tShirtNr: '10',
                faceImgUrl: 'textures/generic-face.png'
            },
            {
                id: 11,
                name: 'Away Player 11',
                tShirtImgUrl: 'textures/tshirt9.png',
                tShirtNr: '11',
                faceImgUrl: 'textures/generic-face.png'
            }
        ]
    }

    teamd = {
        id: 1,
        name: 'Home Team',
        logoUrl: 'textures/team1.png',
        playerPositionById: [
        ],
        players: [
        ]
    }

    //// Match events DATA

    matchData = {
        score: '2 - 1',
        time: '86\''
    }

    eventsData = [{
        logoUrl: 'textures/yellow-card.png',
        time: '82\'',
        players: [
            {
                id: 1,
                teamId: 1,
                name: 'Home Player 1'
            }
        ]
    },
    {
        logoUrl: 'textures/yellow-card.png',
        time: '80\'',
        players: [
            {
                id: 7,
                teamId: 2,
                name: 'Away Player 7'
            }
        ]
    },
    {
        logoUrl: 'textures/goal.png',
        time: '73\'',
        players: [
            {
                id: 2,
                teamId: 2,
                name: 'Away Player 2'
            }
        ]
    },
    {
        logoUrl: 'textures/change2.png',
        time: '71\'',
        players: [
            {
                id: 1,
                teamId: 1,
                name: 'Home Player 1'
            },
            {
                id: 2,
                teamId: 1,
                name: 'Home Player 2'
            }
        ]
    },
    {
        logoUrl: 'textures/goal.png',
        time: '65\'',
        players: [
            {
                id: 3,
                teamId: 1,
                name: 'Home Player 3'
            }
        ]
    },
    {
        logoUrl: 'textures/yellow-card.png',
        time: '61\'',
        players: [
            {
                id: 1,
                teamId: 1,
                name: 'Home Player 1'
            }
        ]
    },
    {
        logoUrl: 'textures/change2.png',
        time: '55\'',
        players: [
            {
                id: 5,
                teamId: 2,
                name: 'Away Player 5'
            },
            {
                id: 6,
                teamId: 2,
                name: 'Away Player 6'
            }
        ]
    },
    {
        logoUrl: 'textures/goal.png',
        time: '53\'',
        players: [
            {
                id: 4,
                teamId: 1,
                name: 'Home Player 4'
            }
        ]
    },
    {
        logoUrl: 'textures/yellow-card.png',
        time: '49\'',
        players: [
            {
                id: 9,
                teamId: 1,
                name: 'Home Player 9'
            }
        ]
    },
    {
        logoUrl: 'textures/yellow-card.png',
        time: '36\'',
        players: [
            {
                id: 5,
                teamId: 1,
                name: 'Home Player 5'
            }
        ]
    },
    {
        logoUrl: 'textures/red-card.png',
        time: '31\'',
        players: [
            {
                id: 2,
                teamId: 2,
                name: 'Away Player 2'
            }
        ]
    },
    {
        logoUrl: 'textures/yellow-card.png',
        time: '23\'',
        players: [
            {
                id: 2,
                teamId: 2,
                name: 'Away Player 2'
            }
        ]
    },
];

 /// Field textures DATA

    soccerField = {
        width: 105,
        height: 68,
        textureUrl: 'textures/soccer.png'
    }

    iceHockeyField = {
        width: 68 * 2.15,
        height: 68,
        textureUrl: 'textures/icehockey.png'
    }

    basketball = {
        width: 89,
        height: 51,
        textureUrl: 'textures/basketball.png'
    }

    soccerField2D = {
        width: 1200,
        height: 780,
        textureUrl: 'textures/soccer.png'
    }

    iceHockeyField2D = {
        width: 68 * 2.15 * 10,
        height: 68 * 10,
        textureUrl: 'textures/icehockey.png'
    }

    basketball2D = {
        width: 68 * 2.15 * 10,
        height: 68 * 10,
        textureUrl: 'textures/icehockey.png'
    }


    // game stats DATA

    gameStats = [
        {
            type: 'Total Shots',
            home: '17',
            away: '12'
        },
        {
            type: 'Shots On Target',
            home: '5',
            away: '7'
        },
        {
            type: 'Pass Accuracy',
            home: '75%',
            away: '86%'
        },
        {
            type: 'Aerial Won',
            home: '70%',
            away: '30%'
        },
        {
            type: 'Offsides',
            home: '2',
            away: '3'
        },
        {
            type: 'Fouls',
            home: '22',
            away: '13'
        },
        {
            type: 'Corners',
            home: '3',
            away: '5'
        },
        {
            type: 'Throwns',
            home: '23',
            away: '24'
        },
        {
            type: 'Dribbles Won',
            home: '10',
            away: '17'
        },
        {
            type: 'Tackles',
            home: '36',
            away: '28'
        }
    ];

    possesionData = {
        type: 'Possesion',
        home: '60%',
        away: '40%'
    };

    teamsTable = [
        {
            name: 'team away',
            logoUrl: 'textures/tshirt5.png',
            stats: [1,2,3,7,5]
        },
        {
            name: 'team away 2',
            logoUrl: 'textures/tshirt5.png',
            stats: [1,2,3,7,5]
        },
        {
            name: 'team away 3',
            logoUrl: 'textures/tshirt5.png',
            stats: [1,2,3,7,5]
        },
    ];

    /// Field Play
    FPObjects = [
        {
            x: 50,
            y: 30,
            data: {
                id: 1,
                name: 'Away Player 1',
                tShirtImgUrl: 'textures/tshirt9.png',
                tShirtNr: '1',
                faceImgUrl: 'textures/generic-face.png'
            }
        },
        {
            x: 75,
            y: 45,
            data: {
                id: 2,
                name: 'Away Player 2',
                tShirtImgUrl: 'textures/tshirt9.png',
                tShirtNr: '2',
                faceImgUrl: 'textures/generic-face.png'
            }
        },
        {
            x: 85,
            y: 20,
            data: {
                id: 3,
                name: 'Away Player 3',
                tShirtImgUrl: 'textures/tshirt9.png',
                tShirtNr: '3',
                faceImgUrl: 'textures/generic-face.png'
            }
        }
    ];
    FPArrows = [
        {
            start: [50, 30, 0],
            middle: [62, 37, 20],
            end: [75, 45, 0],
            color: 0x0000ff,
            lineWidth: 3
        },
        {
            start: [75, 45, 0],
            middle: [80, 30, 10],
            end: [85, 20, 0],
            color: 0x007fff,
            lineWidth: 3
        },
        {
            start: [85, 20, 0],
            end: [100, 35, 2],
            color: 0xff0000,
            lineWidth: 3
        }
    ];

    playerClick = (player) => {

        let localPlayerData = player;
        if (!player.faceImgUrl) {
            if (player.teamId === 1) {
                localPlayerData = this.homeTeam.players.filter((tPlayer) => tPlayer.id === player.id)[0];
            } else {
                localPlayerData = this.awayTeam.players.filter((tPlayer) => tPlayer.id === player.id)[0];
            }
        }
        this.setState({
            showModal: true,
            shouldUpdate: false,
            playerData: localPlayerData,
            playerBioData: {
                'Age': '29',
                'Height': '1.85 cm',
                'Weight': '73 kg',
                'Nationality': 'German'
            },
            playerStateData:  {
                'Total Goals': '1',
                'Goal Assists': '1',
                'Shots On Target': '3',
                'Total Shots': '3',
                'Fouls Committed': '1',
                'Fouls Suffered': '2',
                'Red Cards': '0',
                'Yellow Cards': '1'
            }
        });
    }

    closeModal = () => this.setState({showModal: false});

    state = {
        showModal: false,
        shouldUpdate: true
    }

    render = () => (

            <div className="container">
                <div className="row">
                    <div className="cell-events">
                        <LiveEvents homeTeam={this.homeTeam} awayTeam={this.awayTeam} matchData={this.matchData}>
                            {this.eventsData.map((event, i) => <LiveEvent type={event.players[0].teamId === 1 ? 'home' : 'away'} {...event} key={i}  onPlayerClick={this.playerClick}/>)}
                        </LiveEvents>
                    </div>
                    <div className="cell-field cloumn">
                        <div style={{width: '100%', height: '600px', display: 'inline-block'}}>
                            <Field3D field={this.soccerField} onPlayerClick={this.playerClick} homeTeam={this.homeTeam} awayTeam={this.awayTeam} shouldUpdate={this.state.shouldUpdate} />
                        </div>
                        <div style={{width: '80%', margin: '0 auto'}}>
                            <GameStats stats={this.gameStats} homePlayers={this.homeTeam.players} awayPlayers={this.awayTeam.players} onPlayerClick={this.playerClick} fieldTextureUrl="textures/soccer-field.svg" possesionData={this.possesionData}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="multi-texture">
                        <Field3D field={this.soccerField} onPlayerClick={this.playerClick} homeTeam={this.teamd} awayTeam={this.teamd} shouldUpdate={this.state.shouldUpdate} />
                    </div>
                    <div className="multi-texture">
                        <Field3D field={this.basketball} onPlayerClick={this.playerClick} homeTeam={this.teamd} awayTeam={this.teamd} shouldUpdate={this.state.shouldUpdate} />
                    </div>
                    <div className="multi-texture">
                        <Field3D field={this.iceHockeyField} onPlayerClick={this.playerClick} homeTeam={this.teamd} awayTeam={this.teamd} shouldUpdate={this.state.shouldUpdate} />
                    </div>
                </div>
                <div className="row">
                    <div style={{width: '80%', height: '1000px', margin: '0 auto'}}>
                        <Field2D field={this.soccerField2D} onPlayerClick={this.playerClick} perspective="true" homeTeam={this.homeTeam} awayTeam={this.awayTeam} shouldUpdate={this.state.shouldUpdate}/>
                    </div>
                </div>
                <div className="row">
                    <div style={{width: '80%', height: '1000px', margin: '0 auto'}}>
                         <Field2D field={this.soccerField2D} onPlayerClick={this.playerClick} perspective="false" homeTeam={this.homeTeam} awayTeam={this.awayTeam} shouldUpdate={this.state.shouldUpdate}/>
                     </div>
                </div>
                <div className="row">
                    <div style={{width: '100%', height: '600px'}}>
                        <FieldPlay field={this.soccerField} onPlayerClick={this.playerClick} shouldUpdate={this.state.shouldUpdate} objects={this.FPObjects} arrows={this.FPArrows}/>
                     </div>
                </div>

                <Modal
                    isOpen={this.state.showModal}
                    style={this.modalStyle}
                    onRequestClose={this.closeModal}
                >
                    <PlayerDetails player={this.state.playerData} bio={this.state.playerBioData} stats={this.state.playerStateData} />
                    <div style={{width: '100%', bottom: 0, display: 'block'}}><button style={{float: 'right', padding: '5px'}} onClick={this.closeModal}>Close</button></div>
                </Modal>
            </div>



        );
}

ReactDOM.render((
    <Appl/>
), document.getElementById('app'));
