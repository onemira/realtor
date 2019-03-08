import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'

class App extends Component {
  render() {
    return (
      <>
        <link
          href="https://fonts.googleapis.com/css?family=Cinzel+Decorative|Raleway"
          rel="stylesheet"
        />
        <div className="title">
          <h1 className="fullName">Cindy Shiao </h1>
          <h2>Realtor & Mother</h2>
        </div>
        <div className="profile">
          <h2 className="box">Realtor</h2>
          <img src="profile.png" alt="cindy shiao" />
          <h2>Profile</h2>
        </div>
        <div className="listing">
          <h2>Listings</h2>
          <input className="box" type="image" />
          <input className="box" type="image" />
          <input className="box" type="image" />
        </div>
        <div className="soldProperty">
          <h2>Property sold</h2>
          <input type="image" />
        </div>
        <div className="contact">
          <h1 className="getInTouch">GET IN TOUCH</h1>
          <h2>Contact</h2>
          <h3>address</h3>
          <h3>email</h3>
          <h3>phone</h3>
          <form action="" method="">
            Name <input type="text" name="name" />
            <br />
            Email <input type="text" name="email" />
            <br />
            Subject
            <input type="text" name="subject" />
            <br />
            Message
            <input type="text" name="message" />
            <br />
            <input type="submit" value="submit" />
          </form>
        </div>
      </>
    )
  }
}

export default App
