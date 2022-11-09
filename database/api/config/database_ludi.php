<?php
require_once 'define.php';
class DatabaseLudi
{

	private $db_host = "db-ludi";
	private $db_name = LUDI_DATABASE_NAME;
	private $db_user = "ludi_rw";
	private $db_password = "4RS1Y)WxS3_rTY]Ub,!GOq-Zq5drIHp6";
	// private $db_host = "localhost";
	// private $db_name = LUDI_DATABASE_NAME;
	// private $db_user = "root";
	// private $db_password = "";

	public $conn;

	public function getConnection()
	{

		$this->conn = null;

		try {
			$this->conn = new PDO("mysql:host=" . $this->db_host . ";dbname=" . $this->db_name, $this->db_user, $this->db_password);
		} catch (PDOException $exception) {
			echo "Connection failed: " . $exception->getMessage();
		}

		return $this->conn;
	}
	public function closeConnection()
	{
		// if($this->conn){
		// $this->conn->query('KILL CONNECTION_ID()');
		////Set the PDO object to NULL.
		$this->conn = null;
		// }
	}
	public static function prepare_input($data)
	{
		$data = trim($data);
		$data = stripslashes($data);
		$data = htmlspecialchars($data);
		return $data;
	}
}
