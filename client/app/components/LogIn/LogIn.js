import React, { Component } from "react";
import "whatwg-fetch";
import { setInStorage, getFromStorage } from "../../utils/storage.js";
import {
  Alert,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Jumbotron,
  Container,
  Row,
  Col
} from "reactstrap";
import loading from '../../../public/assets/gif/loading.gif';
import ProfileDashboard from "../ProfileDashboard/ProfileDashboard"

class LogIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      token: "",
      signInError: "",
      signInEmail: "",
      signInPassword: "",
      userId: ""
    };

    this.onTextboxChangeSignInEmail = this.onTextboxChangeSignInEmail.bind(
      this
    );
    this.onTextboxChangeSignInPassword = this.onTextboxChangeSignInPassword.bind(
      this
    );

    this.onSignIn = this.onSignIn.bind(this);
    this.logout = this.logout.bind(this);
  }

  
  componentDidMount() {
    const obj = getFromStorage("the_main_app");
    if (obj && obj.token) {
      const { token } = obj;
      // Verify token
      fetch("/api/account/verify?token=" + token)
        .then(res => res.json())
        .then(json => {
          if (json.success) {
            this.setState({
              token: token,
              isLoading: false
            });
          } else {
            this.setState({
              isLoading: false
            });
          }
        });
    } else {
      this.setState({
        isLoading: false
      });
    }
  }

  onTextboxChangeSignInEmail(event) {
    this.setState({
      signInEmail: event.target.value
    });
  }

  onTextboxChangeSignInPassword(event) {
    this.setState({
      signInPassword: event.target.value
    });
  }

  onSignIn() {
    // Grab state
    const { signInEmail, signInPassword } = this.state;
    var userId;
    this.setState({
      isLoading: true
    });
    // Post request to backend
    fetch("/api/account/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: signInEmail,
        password: signInPassword
      })
    })
      .then(res => res.json())
      .then(json => {
        userId = json.userId.valueOf();
        console.log("/profile/"+userId);
        console.log("User ID =" ,userId);
        console.log(typeof userId);
        if (json.success) {
          setInStorage("the_main_app", { token: json.token, userId: userId});
          this.setState({
            signInError: json.message,
            isLoading: false,
            signInPassword: "",
            signInEmail: "",
            token: json.token,
          });
          this.props.history.push("/profile/"+userId);
        } else {
          this.setState({
            signInError: json.message,
            isLoading: false
          });
        }
      })
  }

  logout() {
    this.setState({
      isLoading: true
    });
    const obj = getFromStorage("the_main_app");
    if (obj && obj.token) {
      const { token } = obj;
      // Verify token
      fetch("/api/account/logout?token=" + token)
        .then(res => res.json())
        .then(json => {
          if (json.success) {
            this.setState({
              token: "",
              isLoading: false
            });
          } else {
            this.setState({
              isLoading: false
            });
          }
        });
    } else {
      this.setState({
        isLoading: false
      });
    }
  }

  render() {
    const {
      isLoading,
      token,
      signInError,
      signInEmail,
      signInPassword
    } = this.state;

    if (isLoading) {
      return (
        <div>
          <p>Loading...</p>
          <img src={loading} />
        </div>
      );
    }

    if (!token) {
      return (
        <div>
          <div style={{ padding: "50px" }}>
            {signInError ? <Alert color="danger">{signInError}</Alert> : null}
            <div style={{ textAlign: "center" }}>
              <Jumbotron style={{display: "inline-block", minWidth: "50%", textAlign:"left"}}>
                <div>
                  <h1>Sign In</h1>
                  <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                      type="email"
                      placeholder="Email"
                      value={signInEmail}
                      onChange={this.onTextboxChangeSignInEmail}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="password">Password</Label>
                    <Input
                      type="password"
                      placeholder="Password"
                      value={signInPassword}
                      onChange={this.onTextboxChangeSignInPassword}
                    />
                  </FormGroup>
                  <Button color="primary" onClick={this.onSignIn}>
                    Sign In
                  </Button>
                </div>
              </Jumbotron>
            </div>
          </div>
          <br />
        </div>
      );
    }

    return (
      <div>
        <p>Account</p>
        <h2>SIGNED IN</h2>
        <button onClick={this.logout}>Logout</button>
      </div>
    );
  }
}

export default LogIn;
 