var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');

var USER_DATA = {
  name:'Timothy Ngo',
  username: 'ngotim',
  image: 'https://avatars0.githubusercontent.com/u/2571329?v=3&s=460'
}

var Link = React.createClass({
  changeURL: function() {
    window.location.replace(this.props.href)
  },
  render: function() {
    return (
      <span
        style={{color: 'blue', cursor: 'pointer'}}
        onClick={this.changeURL}>
        {this.props.children}
      </span>
    )
  }
});

var ProfilePic = React.createClass({
  render: function() {
    return <img src = {this.props.imageUrl} style = {{height: 100, width: 100}}></img>
  }
});

var ProfileName = React.createClass({
  render: function(){
    return <div>{this.props.name}</div>
  }
});

var ProfileLink = React.createClass({
  render: function() {
    return (
      <div>
        <Link href = {'https://www.github.com/' + this.props.username}>
          {this.props.username}
        </Link>
      </div>
    )
  }
});

var Avatar = React.createClass({
  render: function() {
    return(
      <div>
        <ProfilePic imageUrl ={this.props.user.image}/>
        <ProfileName name = {this.props.user.name}/>
        <ProfileLink username = {this.props.user.username}/>
      </div>
    );
  }
});
var ShowList = React.createClass({
  render: function() {
    var listItems = this.props.names.map(function(friend, index){
      return <li key = {index}> {friend} </li>
    });
    return(
      <div>
        <h2> Friends </h2>
        <ul>
          {listItems}
        </ul>
      </div>
    )
  }
});

ReactDOM.render(
  routes,
  document.getElementById('app')
);
