import React, {useState} from 'react'
import Table from "rc-table";
import axios from "axios";

function App() {
	const [users, setUsers] = useState([]);

	const columns = [
		{
			title: "First Name",
			dataIndex: "first_name",
			key: "firstName",
			width: 100,
		},
		{
			title: "Last Name",
			dataIndex: "last_name",
			key: "lastName",
			width: 100,
		},
		{
			title: "Email",
			dataIndex: "email",
			key: "email",
			width: 200,
		},
		{
			title: "Phone",
			dataIndex: "phone",
			key: "phone",
			width: 100,
		},
	];

	axios({
		url: 'http://reactdata/objects/users/read.php',
	}).then(res => {
		setUsers(res.data.records.map(user => {
			user.key = user.id;
			return user
		}))
	})

	return <Table
		data={users}
		columns={columns}
		rowClassName='myClassName'
	/>
}

export default App