import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import Navbar from "./components/Navbar";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    hiScore: 0 

  };

  // Function declaration 
  shuffleFriends(friends) {
    for (let i = friends.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [friends[i], friends[j]] = [friends[j], friends[i]];
    }
    return friends;
  }

  // Function expression bc =
  handleClick = hasBeenClicked => {
    // if the clicked image is in the array of clicked images
    // then reset
    
    if (hasBeenClicked) {
      // reset game
    } else {
      this.setState({ score: this.state.score + 1 });
      console.log(hasBeenClicked)
    }
    
    // if the cliced image is not in the array of clicked images
    // then increaseScore
    
    // add to array of clicked images
    
    this.setState({ friends: this.shuffleFriends(friends) });
  };

  resetGame = () => {
    console.log('need to finish resetGame function')
    this.setState({ score: 0});
  }

  // increaseScore = () => {
  //   console.log('need to write increaseScore function')
  // }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
       <div>
         <Navbar
           />
           <div>
           {this.state.score}
           </div>
      <Wrapper>
        <Title>Friends List</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            handleClick={this.handleClick}
            id={friend.id}
            clicked={friend.clicked}
            key={friend.id}
            image={friend.image}
          />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;
