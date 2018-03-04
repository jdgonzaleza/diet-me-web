import React, {Component} from "react";
import {DietInfo} from "./DietInfo";
import {PersonalInfo} from "./PersonalInfo";

export class UserInfo extends Component{
	constructor(props){
		super(props);
		this.state = {
			pacient:{}
		};
	}
	
	getPacient(){
		fetch("/pacients/5a9b0bc7306f9c200c903ce0",{
			headers:{
				token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imx1Y2hvN0BqdWFuLmNvbSIsInVzZXJpZCI6IjVhOWIwYmM3MzA2ZjljMjAwYzkwM2NkZiIsIm1lZGljIjpmYWxzZSwiaWF0IjoxNTIwMTM0MzEyLCJleHAiOjE1MjAxMzc5MTJ9.KaIhQqhc6edYz7nOlO36ixixNEw2W7TDfNp_9nWQoFw"
			}
		})
			.then(res => res.json())
			.then( p => this.setState({ pacient: p.pacient}));
	}

	componentDidMount(){
		this.getPacient();
	}

	render(){
		console.log(this.state.pacient);
		return(
			<div>
				<div>
					<PersonalInfo user={this.state.pacient}/>
				</div>
				<div>
					<DietInfo user={this.state.pacient}/>
				</div>
			</div>
		);
	}
}