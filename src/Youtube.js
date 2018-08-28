import React, { Component } from 'react';

const key = 'AIzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA';
const channelId = 'UC8Q0SLrZLiTj5s4qc9aad-w';
const part = 'snippet,id&order=date';
const maxResults = 3;

const finalUrl = `https://www.googleapis.com/youtube/v3/search?key=${key}&channelId=${channelId}&part=${part}&maxResults=${maxResults}`;

class Youtube extends Component {
    constructor(props) {
        super(props);

        this.state = {
            resultyt: [],
        };
    }

    clicked() {
        fetch(finalUrl)
          .then((response) => response.json())
          .then((responseJson) => {
            const resultyt = responseJson.items.map(obj => "https://www.youtube.com/embed/" + obj.id.videoId);
            this.setState({ resultyt });
          })
          .catch((error) => {
            console.error(error);
          });
    }

    render() {
        console.log(this.state.resultyt);
        return (
          <div className="App-videos">
              <button onClick={() => this.clicked()} id="button">Clique pour les afficher</button>
              {
                  this.state.resultyt.map((link, i) => {
                      var frame = <div key={i} className="youtube"><iframe width="560" height="315" src={link} frameBorder="0" allowFullScreen title="video"></iframe></div>
                      return frame;
                  })
              }
              {this.frame}
          </div>
        );
    }
}

export default Youtube;