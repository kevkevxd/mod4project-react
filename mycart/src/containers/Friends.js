import React from "react";
import MyFriends from "../components/Friend/MyFriends";
import FollowedBy from "../components/Friend/FollowedBy";
import { Redirect } from "react-router-dom";
import SearchUserForm from "../components/Friend/SearchUserForm";
import SearchUserCard from "../components/Friend/SearchUserCard";
import "../components/Friend/friend.css";

class Friends extends React.Component {
  state = {
    userArray: [],
    searchTerm: "",
  };

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/users")
      .then((resp) => resp.json())
      .then((data) => this.setState({ userArray: data }));
  }

  searchUser = () => {
    let findUser = this.state.userArray.find(el => el.username.toLowerCase()===this.state.searchTerm.toLowerCase())
    console.log(findUser)
    return <SearchUserCard user={findUser} addFriendHandler={this.props.addFriendHandler} />
  }

  submitHandler = (term) => {
    this.setState({
      searchTerm: term.searchTerm
    })
  }


  render(){

    return (
    
        <>
          {this.props.userId  
          
          ?
          <div>
            <div>
              <SearchUserForm
                value={this.state.searchTerm}
                submitHandler={this.submitHandler}
              />
            </div>
            <div className="searched-users">
                    {this.state.searchTerm === "" ? null : this.searchUser()}
                </div>
            <div>
              <div className="user-container" style={{ display:"flex" }} >
                <div className="friend-container">
                  <MyFriends 
                    friend={this.props.friends} 
                    deleteFriendHandler={this.props.deleteFriendHandler} 
                    addFriendtoCartHandler={this.props.addFriendtoCartHandler}
                  />  
                </div>

                <div className="friend-container">
                  <FollowedBy 
                    friend={this.props.follower}
                    addFriendHandler={this.props.addFriendHandler}
                  />
                </div>

  

              </div>
            </div>
          </div>
        
          :
          
              <Redirect to="/login" />
          
          }

        </>
      

      );
    }
  }
  export default Friends;
