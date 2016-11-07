# Sport Stats
Sport stats UI components

[Demo](https://alexadam.github.io/demos/sport-stats/index.html)

![alt ex1.png](https://github.com/alexadam/sport-stats/blob/master/ex-imgs/ex1.png?raw=true)

# Components

## 3D Field

```
<Field3D field={this.soccerField} onPlayerClick={this.playerClick} homeTeam={this.homeTeam} awayTeam={this.awayTeam} shouldUpdate={this.state.shouldUpdate} />
```

```
homeTeam = {
    id: 1,
    name: 'Home Team',
    logoUrl: '/textures/team1.png',
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
            tShirtImgUrl: '/textures/tshirt5.png',
            tShirtNr: '1',
            faceImgUrl: '/textures/generic-face.png'
        },
        {
            id: 2,
            name: 'Home Player 2',
            tShirtImgUrl: '/textures/tshirt5.png',
            tShirtNr: '2',
            faceImgUrl: '/textures/generic-face.png'
        },
        ...........
```

![alt ex2.png](https://github.com/alexadam/sport-stats/blob/master/ex-imgs/ex2.png?raw=true)

### Multiple textures

```
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
```

![alt ex3.png](https://github.com/alexadam/sport-stats/blob/master/ex-imgs/ex3.png?raw=true)


## 2D Field

```
<Field2D field={this.soccerField2D} onPlayerClick={this.playerClick} perspective="true" homeTeam={this.homeTeam} awayTeam={this.awayTeam}  shouldUpdate={this.state.shouldUpdate}/>
```

```
soccerField2D = {
    width: 1200,
    height: 780,
    textureUrl: 'textures/soccer.png'
}
```

![alt ex4.png](https://github.com/alexadam/sport-stats/blob/master/ex-imgs/ex4.png?raw=true)

## Live Events

```
<LiveEvents homeTeam={this.homeTeam} awayTeam={this.awayTeam} matchData={this.matchData}>
    {this.eventsData.map((event, i) => <LiveEvent type={event.players[0].teamId === 1 ? 'home' : 'away'} {...event} key={i} onPlayerClick={this.playerClick}/>)}
</LiveEvents>
```

```
matchData = {
    score: '2 - 1',
    time: '86\''
}

eventsData = [{
    logoUrl: '/textures/yellow-card.png',
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
    logoUrl: '/textures/change2.png',
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
...........
```

![alt ex5.png](https://github.com/alexadam/sport-stats/blob/master/ex-imgs/ex5.png?raw=true)

## Game Stats

```
<GameStats stats={this.gameStats} homePlayers={this.homeTeam.players} awayPlayers={this.awayTeam.players} onPlayerClick={this.playerClick} fieldTextureUrl="/textures/soccer-field.svg" possesionData={this.possesionData}/>

```

```
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
    ....

possesionData = {
        type: 'Possesion',
        home: '60%',
        away: '40%'
    };
```

![alt ex6.png](https://github.com/alexadam/sport-stats/blob/master/ex-imgs/ex6.png?raw=true)

## Player Details

```
<PlayerDetails player={this.state.playerData} bio={this.state.playerBioData} stats={this.state.playerStateData} />
```

```
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
```

![alt ex7.png](https://github.com/alexadam/sport-stats/blob/master/ex-imgs/ex7.png?raw=true)


## Field Play (work in progress)

```
<FieldPlay field={this.soccerField} onPlayerClick={this.playerClick} shouldUpdate={this.state.shouldUpdate} objects={this.FPObjects} arrows={this.FPArrows}/>
```

```
FPObjects = [
    {
        x: 50,
        y: 30,
        data: {
            // TODO 
            id: 1,
            name: 'Away Player 1',
            tShirtImgUrl: '/textures/tshirt9.png',
            tShirtNr: '1',
            faceImgUrl: '/textures/generic-face.png'
        }
    },
    {
        x: 75,
        y: 45,
        data: {
            id: 2,
            name: 'Away Player 2',
            tShirtImgUrl: '/textures/tshirt9.png',
            tShirtNr: '2',
            faceImgUrl: '/textures/generic-face.png'
        }
    },
    .....

FPArrows = [
    {
        start: [50, 30, 0],
        middle: [62, 37, 20],
        end: [75, 45, 0],
        color: 0x0000ff,
        lineWidth: 3
    },
    ....
    {
        start: [85, 20, 0],
        end: [100, 35, 2],
        color: 0xff0000,
        lineWidth: 3
    }
    ......
```

![alt ex8.png](https://github.com/alexadam/sport-stats/blob/master/ex-imgs/ex8.png?raw=true)
