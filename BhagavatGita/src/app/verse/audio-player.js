.audio-player {
    border: 1px solid lighten(#acacac, 20%);
    text-align: center;
    display: flex;
    flex-flow: row;
    margin: 4rem 0 4rem 0;
    width: 600px;
    
    .album-image {
      min-height: 100px;
      width: 100px;
      background-size: cover;
    }
    
    .player-controls {
      align-items: center;
      justify-content: center;
      margin-top: 2.5rem;
      flex: 3;
      
      progress {
        width: 90%;
      }
      
      progress[value] {
        -webkit-appearance: none;
        appearance: none;
        background-color: white;
        color: blue;
        height: 5px;
      }
      
      progress[value]::-webkit-progress-bar {
        background-color: white;
        border-radius: 2px;
        border: 1px solid lighten(#acacac, 20%);
        color: blue;
      }
      
      progress::-webkit-progress-value {
        background-color: blue;
      }
      
      p {
        font-size: 1.6rem;
      }
    }
    
    #play-btn {
      background-image: url('http://imgur.com/JzQP8td.png');
      background-size: cover;
      width: 75px;
      height: 75px;
      margin: 2rem 0 2rem 2rem;
      &.pause {
        background-image: url('http://imgur.com/MbJn41l.png');
      }
    }
  }