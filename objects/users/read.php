<?php

	header("Access-Control-Allow-Origin: *");
	header("Content-Type: application/json; charset=UTF-8");

	include_once '../../config/database.php';
	include_once 'user.php';

	$database = new Database();
	$db = $database->getConnection();
	$users = new User($db);

	$stmt = $users->read();
	$num = $stmt->rowCount();
	if ($num > 0) {
		$users_arr = [];
		$users_arr["records"] = [];
		while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
			extract($row);
			/**
			 * @var number $id
			 * @var string $first_name
			 * @var string $last_name
			 * @var string $email
			 * @var string $phone
			 */
			$user_item = [
				"id" => $id,
				"first_name" => $first_name,
				"last_name" => $last_name,
				"email" => $email,
				"phone" => $phone,
			];

			array_push($users_arr["records"], $user_item);
		}
		http_response_code(200);
		echo json_encode($users_arr);
	}

	else {
		http_response_code(404);
		echo json_encode(
			["message" => "No products found."]
		);
	}