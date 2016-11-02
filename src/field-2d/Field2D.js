import React, {PropTypes, Component} from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';
require('./Field2D.scss');

export default class Field2D extends Component {

    state = {
        windowWidth: window.innerWidth
    }

    shouldComponentUpdate = (nextProps, nextState) => nextProps.shouldUpdate;

    handleResize = (e) => {
        this.setState({
            windowWidth: window.innerWidth
        });
    }

    componentDidMount = () => {
        window.addEventListener('resize', this.handleResize);
        this.displayTShirts();
    }

    getPlayerById = (playerId, teamData) => {
        let result = teamData.players.filter((player) => Number(player.id) === Number(playerId))[0];
        return result;
    }

    displayTShirts = () => {
        let perspective = this.props.perspective || true;

        let svg = d3.select(ReactDOM.findDOMNode(this)).append('svg');

        svg.attr({
            viewBox: '0 0 ' +  this.props.field.width + ' ' + this.props.field.height,
            id: 'svg-names'
        });

        let svgWidth = this.props.field.width;
        let svgHeight = this.props.field.height / 1.3;
        let halfSvgWidth = svgWidth / 2;
        let widthStep1 = halfSvgWidth / this.props.homeTeam.playerPositionById.length;
        let widthStep2 = halfSvgWidth / this.props.awayTeam.playerPositionById.length;
        let heightSteps1 = this.props.homeTeam.playerPositionById.map((elem) => parseInt(svgHeight / (elem.length)));
        let heightSteps2 = this.props.awayTeam.playerPositionById.map((elem) => parseInt(svgHeight / (elem.length)));
        let homeTeamPlayerData = this.props.homeTeam.playerPositionById.map((idList)=>idList.map((id)=>this.getPlayerById(id, this.props.homeTeam)));
        let awayTeamPlayerData = this.props.awayTeam.playerPositionById.map((idList)=>idList.map((id)=>this.getPlayerById(id, this.props.awayTeam)));

        let homeTeamXCoord = (playerData, i, j) => {
            if (perspective === 'true') {
                return (j * widthStep1 + svgWidth / 15) - (((i * heightSteps1[j]) + heightSteps1[j] / 2) * 1 / svgHeight * (svgHeight / 3.6));
            }
            return (j * widthStep1);
        };
        let homeTeamYCoord = (playerData, i, j) => (i * heightSteps1[j]) + heightSteps1[j] / 2;
        let awayTeamXCoord = (playerData, i, j) => {
            if (perspective === 'true') {
                return (svgWidth - j * widthStep2 - svgWidth / 12) + (((i * heightSteps2[j]) + heightSteps2[j] / 2) * 1 / svgHeight * (svgHeight / 2.2));
            }
            return (svgWidth - j * widthStep2);
        };
        let awayTeamYCoord = (playerData, i, j) => (i * heightSteps2[j]) + heightSteps2[j] / 2;

        /// SHADOW Filter

        let defs = svg.append("defs");
        let filter = defs.append("filter")
            .attr("id", "dropshadow")
        filter.append("feGaussianBlur")
          .attr("in", "SourceAlpha")
          .attr("stdDeviation", 4)
          .attr("result", "blur");
        filter.append("feOffset")
          .attr("in", "blur")
          .attr("dx", 0)
          .attr("dy", 0)
          .attr("result", "offsetBlur");
        let feMerge = filter.append("feMerge");
        feMerge.append("feMergeNode")
            .attr("in", "offsetBlur")
        feMerge.append("feMergeNode")
            .attr("in", "SourceGraphic");

        // HOME

        let homeGroup = svg.append('g');
        homeGroup.selectAll('image')
            .data(homeTeamPlayerData)
            .enter()
            .append('g')
            .selectAll('image')
            .data((idList) => idList)
            .enter()
            .append('image')
            .attr('xlink:href', (playerData) => playerData.tShirtImgUrl)
            .attr({
                x: homeTeamXCoord,
                y: homeTeamYCoord,
                width: '75px',
                height: '75px',
                transform: 'translate(10, 35)',
                class: 'SSUI-Field2D-Image',
                filter: 'url(#dropshadow)'
            })
            .on('click', (playerData, i, j) => this.props.onPlayerClick(playerData));

        let tmpBg = homeGroup.selectAll('rect')
            .data(homeTeamPlayerData)
            .enter()
            .append('g')
            .selectAll('rect')
            .data((idList) => idList)
            .enter();

        let tmpTxt = homeGroup.selectAll('text')
            .data(homeTeamPlayerData)
            .enter()
            .append('g')
            .selectAll('text')
            .data((idList) => idList)
            .enter();

        tmpBg
            .append('rect')
            .attr({
                fill: 'rgba(0,0,0,0.75)',
                x: homeTeamXCoord,
                y: homeTeamYCoord,
                width: (playerData) => (playerData.name).length * 6.5, // TODO
                height: 20,
                transform: (playerData) => 'translate(20, 110)'
            });
        tmpTxt
            .append('text')
            .text((playerData) => playerData.name)
            .attr({
                fill: 'white',
                x: homeTeamXCoord,
                y: homeTeamYCoord,
                'font-size': 12,
                transform: 'translate(25, 124)'
            });

        tmpBg
            .append('rect')
            .attr({
                fill: '#eee',
                x: homeTeamXCoord,
                y: homeTeamYCoord,
                width: 20, // TODO
                height: 20,
                transform: 'translate(0, 110)'
            });

        tmpTxt
            .append('text')
            .text((playerData) => playerData.tShirtNr)
            .attr({
                fill: 'black',
                x: homeTeamXCoord,
                y: homeTeamYCoord,
                'font-size': 14,
                transform: (playerData) => 'translate('+(parseInt(playerData.tShirtNr) < 10 ? 6 : 4)+', 125)'
            });


        // AWAY

        let awayGroup = svg.append('g');
        awayGroup.selectAll('image')
            .data(awayTeamPlayerData)
            .enter()
            .append('g')
            .selectAll('image')
            .data((idList) => idList)
            .enter()
            .append('image')
            .attr('xlink:href', (playerData) => playerData.tShirtImgUrl)
            .attr({
                x: awayTeamXCoord,
                y: awayTeamYCoord,
                width: '75px',
                height: '75px',
                transform: 'translate(-120, 35)',
                filter: 'url(#dropshadow)'
            })
            .on('click', (playerData, i, j) => this.props.onPlayerClick(playerData));

        tmpBg = awayGroup.selectAll('rect')
            .data(awayTeamPlayerData)
            .enter()
            .append('g')
            .selectAll('rect')
            .data((idList) => idList)
            .enter();

        tmpTxt = awayGroup.selectAll('text')
            .data(awayTeamPlayerData)
            .enter()
            .append('g')
            .selectAll('text')
            .data((idList) => idList)
            .enter();

            tmpBg
                .append('rect')
                .attr({
                    fill: 'rgba(0,0,0,0.75)',
                    x: awayTeamXCoord,
                    y: awayTeamYCoord,
                    width: (playerData) => (playerData.name).length * 6.5, // TODO
                    height: 20,
                    // transform: (playerData) => 'translate('+(40 + (playerData.name).length * 6.5 < 75 ? (75-(playerData.name).length * 6.5) : 0)+', 110)'
                    transform: (playerData) => 'translate(-120, 110)'
                });
            tmpTxt
                .append('text')
                .text((playerData) => playerData.name)
                .attr({
                    fill: 'white',
                    x: awayTeamXCoord,
                    y: awayTeamYCoord,
                    'font-size': 12,
                    transform: (playerData) => 'translate(-115, 124)'
                });

            tmpBg
                .append('rect')
                .attr({
                    fill: '#eee',
                    x: awayTeamXCoord,
                    y: awayTeamYCoord,
                    width: 20, // TODO
                    height: 20,
                    transform: (playerData) => 'translate('+((playerData.name).length * 6.5 - 120)+', 110)'
                });

            tmpTxt
                .append('text')
                .text((playerData) => playerData.tShirtNr)
                .attr({
                    fill: 'black',
                    x: awayTeamXCoord,
                    y: awayTeamYCoord,
                    'font-size': 14,
                    transform: (playerData) => 'translate('+((parseInt(playerData.tShirtNr) < 10 ? 6 : 4) + (playerData.name).length * 6.5 - 120)+', 125)'
                });

    }

    render() {
        let field = <img id="SSUI-Field2D-FieldTexture"
                width={this.props.field.width} height={this.props.field.hright}
                style={this.props.perspective === 'true' ? {transform: 'perspective(' + this.props.field.width + 'px) rotateX(45deg)', position: 'absolute'} : {position: 'absolute'}}
                src={this.props.field.textureUrl} />

        return (
            <div id="SSUI-Field2D" style={{width: this.props.field.width + 'px', height:'auto', left:'0px', position:'relative'}}>
                {field}
            </div>
        );
    }
}
