(this.webpackJsonpjoy=this.webpackJsonpjoy||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var r=a(0),i=a.n(r),s=a(2),o=a.n(s),n=(a(12),a(3)),l=a(4),c=a(5),d=a(6),h=function(e){var t=[];return e.field.forEach((function(e,a){var i=e.map((function(e,t){return r.createElement("div",{className:"col-".concat(e),key:t})}));t.push(r.createElement("div",{className:"tetris-boardRow",key:a},i))})),r.createElement("div",{className:"tetris-Container"},r.createElement("div",{className:"tetris-boardInfo"},r.createElement("p",{className:"tetris-boardText"}," Level: ",e.level),r.createElement("p",{className:"tetris-boardText"}," Score ",e.score),e.gameOver&&r.createElement("p",{className:"boardText"},r.createElement("strong",null," Game Over "))),r.createElement("div",{className:"tetris-board"}," ",t))},v=function(e){Object(d.a)(a,e);var t=Object(c.a)(a);function a(e){var r;Object(n.a)(this,a),(r=t.call(this,e)).handlePauseClick=function(){r.setState((function(e){return{isPaused:!e.isPaused}}))},r.handleNewGameClick=function(){for(var e=[],t=0;t<r.props.boardHeight;t++){for(var a=[],i=0;i<r.props.boardWidth;i++)a.push(0);e.push(a)}var s=Math.floor(parseInt(r.props.boardWidth)/2);r.setState({activeTile:2,activeTileY:1,activeTileX:s,tileRotate:0,score:0,level:1,tileCount:0,gameOver:!1,field:e})};for(var i=[],s=0;s<e.boardHeight;s++){for(var o=[],l=0;l<e.boardWidth;l++)o.push(0);i.push(o)}var c=Math.floor(parseInt(e.boardWidth)/2);return r.state={activeTile:1,activeTileX:1,activeTileY:c,tileRotate:0,score:0,level:1,tileCount:0,gameOver:!1,isPaused:!1,field:i,timerId:null,tiles:[[[[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0]]],[[[0,0],[1,0],[0,1],[1,1]],[[0,0],[1,0],[0,1],[1,1]],[[0,0],[1,0],[0,1],[1,1]],[[0,0],[1,0],[0,1],[1,1]]],[[[0,-1],[0,0],[0,1],[0,2]],[[-1,0],[0,0],[1,0],[2,0]],[[0,-1],[0,0],[0,1],[0,2]],[[-1,0],[0,0],[1,0],[2,0]]],[[[0,0],[-1,0],[1,0],[0,-1]],[[0,0],[1,0],[0,1],[0,-1]],[[0,0],[-1,0],[1,0],[0,1]],[[0,0],[-1,0],[0,1],[0,-1]]],[[[0,0],[-1,0],[1,0],[-1,-1]],[[0,0],[0,1],[0,-1],[1,-1]],[[0,0],[1,0],[-1,0],[1,1]],[[0,0],[0,1],[0,-1],[-1,1]]],[[[0,0],[1,0],[-1,0],[1,-1]],[[0,0],[0,1],[0,-1],[1,1]],[[0,0],[1,0],[-1,0],[-1,1]],[[0,0],[0,1],[0,-1],[-1,-1]]],[[[0,0],[1,0],[0,-1],[-1,-1]],[[0,0],[1,0],[0,1],[1,-1]],[[0,0],[1,0],[0,-1],[-1,-1]],[[0,0],[1,0],[0,1],[1,-1]]],[[[0,0],[-1,0],[0,-1],[1,-1]],[[0,0],[0,-1],[1,0],[1,1]],[[0,0],[-1,0],[0,-1],[1,-1]],[[0,0],[0,-1],[1,0],[1,1]]]]},r}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e,t=this;e=window.setInterval((function(){return t.handleBoardUpdate("down")}),1e3-(10*this.state.level>600?600:10*this.state.level)),this.setState({timerId:e})}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.state.timerId)}},{key:"handleBoardUpdate",value:function(e){var t=this;if(!this.state.gameOver&&!this.state.isPaused){var a=0,r=0,i=0,s=this.state.activeTile;switch(e){case"left":a=-1;break;case"right":a=1;break;case"down":r=1;break;case"rotate":i=1}var o=this.state.field,n=this.state.activeTileX,l=this.state.activeTileY,c=this.state.tileRotate,d=this.state.tiles;o[l+d[s][c][0][1]][n+d[s][c][0][0]]=0,o[l+d[s][c][1][1]][n+d[s][c][1][0]]=0,o[l+d[s][c][2][1]][n+d[s][c][2][0]]=0,o[l+d[s][c][3][1]][n+d[s][c][3][0]]=0;var h=!0;if(0!==a)for(var v=0;v<=3;v++)n+a+d[s][c][v][0]>=0&&n+a+d[s][c][v][0]<this.props.boardWidth&&(0!==o[l+d[s][c][v][1]][n+a+d[s][c][v][0]]&&(h=!1),h=!1);h&&(n+=a);var u=c+i>3?0:c+i,m=!0;if(0!==i)for(var f=0;f<=3;f++)n+d[s][u][f][0]>=0&&n+d[s][u][f][0]<this.props.boardWidth&&l+d[s][u][f][1]>=0&&l+d[s][u][f][1]<this.props.boardHeight&&(0!==o[l+d[s][u][f][1]][n+d[s][u][f][0]]&&(m=!1),m=!1);m&&(c=u);var p=!0;if(0!==r)for(var b=0;b<=3;b++)l+r+d[s][c][b][1]>=0&&l+r+d[s][c][b][1]<this.props.boardHeight&&(0!==o[l+r+d[s][c][b][1]][n+d[s][c][b][0]]&&(p=!1),p=!1);if(p&&(l+=r),o[l+d[s][c][0][1]][n+d[s][c][0][0]]=s,o[l+d[s][c][1][1]][n+d[s][c][1][0]]=s,o[l+d[s][c][2][1]][n+d[s][c][2][0]]=s,o[l+d[s][c][3][1]][n+d[s][c][3][0]]=s,!p){for(var g=this.props.boardHeight-1;g>=0;g--){for(var k=!0,w=0;w<this.props.boardWidth;w++)0===o[g][w]&&(k=!1);if(k){for(;g>0;g--)for(var E=0;E<this.props.boardWidth;E++)o[g][E]=o[g-1][E];g=this.props.boardHeight}}var N;this.setState((function(e){return{score:e.score+1*e.level,tileCount:e.tileCount+1,level:1+Math.floor(e.tileCount/10)}})),clearInterval(this.state.timerId),N=setInterval((function(){return t.handleBoardUpdate("down")}),1e3-(10*this.state.level>600?600:10*this.state.level)),this.setState({timerId:N}),s=Math.floor(7*Math.random()+1),n=parseInt(this.props.boardWidth)/2,c=0,0!==o[(l=1)+d[s][c][0][1]][n+d[s][c][0][0]]||0!==o[l+d[s][c][1][1]][n+d[s][c][1][0]]||0!==o[l+d[s][c][2][1]][n+d[s][c][2][0]]||0!==o[l+d[s][c][3][1]][n+d[s][c][3][0]]?this.setState({gameOver:!0}):(o[l+d[s][c][0][1]][n+d[s][c][0][0]]=s,o[l+d[s][c][1][1]][n+d[s][c][1][0]]=s,o[l+d[s][c][2][1]][n+d[s][c][2][0]]=s,o[l+d[s][c][3][1]][n+d[s][c][3][0]]=s)}this.setState({field:o,activeTileX:n,activeTileY:l,tileRotate:c,activeTile:s})}}},{key:"render",value:function(){var e=this;return r.createElement("div",{className:"tetris"},r.createElement(h,{field:this.state.field,gameOver:this.state.gameOver,score:this.state.score,level:this.state.level,rotate:this.state.tileRotate}),r.createElement("div",{className:"tetris__block-controls"},r.createElement("button",{className:"btn",onClick:function(){return e.handleBoardUpdate("left")}},"Left"),r.createElement("button",{className:"btn",onClick:function(){return e.handleBoardUpdate("down")}},"Down"),r.createElement("button",{className:"btn",onClick:function(){return e.handleBoardUpdate("right")}},"Right"),r.createElement("button",{className:"btn",onClick:function(){return e.handleBoardUpdate("rotate")}},"Rotate")),r.createElement("div",{className:"tetris__game-controls"},r.createElement("button",{className:"btn",onClick:this.handleNewGameClick},"New Game"),r.createElement("button",{className:"btn",onClick:this.handlePauseClick},this.state.isPaused?"Resume":"Pause")))}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(v,{boardWidth:"14",boardHeight:"20"}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.be38f41d.chunk.js.map