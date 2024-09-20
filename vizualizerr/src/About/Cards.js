import React from 'react';
import './about.css';
// import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class Cards extends React.Component{
	// The constructor for a React component is called before it is mounted.
	constructor(props){
		// super is for calling the parent class (React.Component)
		super(props);
		// porps is passed, to access parent's attributes and use in this component
		this.state = {};
	}
	render(){
		return (
			<div className="all-cards"
			style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
				<div className="card" style={{width: '14rem'}}>
				  <img className="card-img-top" src="https://avatars.githubusercontent.com/u/115720490?s=400&u=dd8988406568a6f1cacee8fb1c190427e1bdd65c&v=4" alt="Card image cap" />
				  <div className="card-body">
				    <h5 className="card-title">Naina Bandil</h5>
				    <p className="card-text"></p>
				    <a href="https://github.com/Naina22-lab" className="btn btn-primary">Github</a>
				  </div>
				</div>
			</div>
		);
	}
}

export default Cards;
