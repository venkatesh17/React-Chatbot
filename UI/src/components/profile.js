import React from "react";
import * as profileAction from "../actions/profile.js"
import { bindActionCreators } from 'redux'
import { connect } from "react-redux";
import Chat from "./Chat"

class ProfileComponent extends React.Component {
    constructor(props){
        super(props);
        this.state={
            profileData:''
            }
    }
    componentDidMount(){
        this.setState({
            profileData: this.props.getProfileData
        })
    }

    render(){
       
        return(
            <div className="container mt-3">
            <Chat />
          </div>
          
        )
    }
}

const mapStateToProps = (state) =>({
    getProfileData : state.profileReducer,
    })

const mapDispatchToProps = (dispatch) =>({
    profile: bindActionCreators(profileAction, dispatch),
   })

export default connect(mapStateToProps, mapDispatchToProps)(ProfileComponent);
