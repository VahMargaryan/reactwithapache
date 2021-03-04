<?php
	class User {
		private $conn;
		
		public function __construct($db) {
			$this->conn = $db;
		}

		function read() {
			$query = "SELECT * FROM users" ;
			$stmt = $this->conn->prepare($query);
			$stmt->execute();
			return $stmt;
		}
	}