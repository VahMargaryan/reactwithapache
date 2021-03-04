import React, {Component} from 'react'


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: []
		}
	}

	componentDidMount() {
		fetch('http://reactdata/objects/users/read.php')
			.then(res => res.json())
			.then((data) => {
				this.setState({users: data.records})
			})
	}

	render() {
		return (
			<table>
				<thead>
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Email</th>
						<th>Phone</th>
					</tr>
				</thead>
				<tbody>
				{this.state.users.map(user => <tr>
					<td>{user.first_name}</td>
					<td>{user.last_name}</td>
					<td>{user.email}</td>
					<td>{user.phone}</td>
				</tr>)}
				</tbody>
			</table>
		)
	}
}

export default App