<?php 

	/**
	* Класс Pagination для генерации постраничной навигации методом AJAX
	*/
	require_once 'Session.php';
	require_once 'Db.php';
	Session::init();
	class Pagination {
	    private $current_page;
	    private $record_per_page;
	    private $sql;
	    private $sql1;
	    private $order_by;
	    private $page;
	    private $result;
	    private $page_result;
	    private $total_records;
		private $total_pages;
		private $productInCart;
	    private $data = array();
	    public function __construct($current_page = 1, $record_per_page = 5, $sql, $sql1, $order_by = 'id') {
	        $this->current_page = $current_page;
	        $this->record_per_page = $record_per_page;
	        $this->sql = $sql;
	        $this->sql1 = $sql1;
	        $this->order_by = $this->order_by;
	        if (isset($_SESSION['products'])) {
	        	$this->productInCart = $_SESSION['products'];
	        }
	        if(isset($_POST["page"])) {  
				$this->page = $_POST["page"];  
			} else {  
				$this->page = 1;  
			}
			$this->getData();
			$this->data['total_page'] = $this->totalRecords();  
	    }
	    //Общее число страниц
	    private function amount() {
	        return ceil($this->total_records / $this->record_per_page);
	    }
	    //Получение начального лимита после каждой страницы
		private function getStartPage() {
			return ($this->page - 1) * $this->record_per_page;  
		}
		//Получение всех записей от начального лимита и до конечного
	 	private function getData() {
			$db = Db::getConnection();
		    $this->result = $db->prepare($this->sql);
		    $this->result->bindParam(':start_from', $this->getStartPage(), PDO::PARAM_INT);
		    $this->result->bindParam(':record_per_page', $this->record_per_page, PDO::PARAM_INT);
		    $this->result->setFetchMode(PDO::FETCH_ASSOC);
		    $this->result->execute();
		    $i = 0;
		    $this->data = array();

		    while($row = $this->result->fetch()){
		    	$this->data['item'][$i] = $row;
		    	$i++;
		    }
		}
		//Всего записей
		private function totalRecords() {
			$db = Db::getConnection();
	    	$this->page_result = $db->prepare($this->sql1);
	    	$this->page_result->execute(); 
	   		$this->total_records = $this->page_result->rowCount();
	   		$this->total_pages = $this->amount();
		}
		//Вывод всех записей 
		/**
		 * Функция, возврващает JSON ответ методу AJAX
		 * @return JSON возвращает JSON объект
		 */
		public function getPages() {
		    $this->data['total_item'] = $this->total_records;
		    $this->data['total_page'] = $this->total_pages;
		    $this->data['record_per_page'] = $this->record_per_page;
		    $this->data['current_page'] = $this->page;
		    if (!empty($this->productInCart)) {
		    	$this->data['productInCart'] = $this->productInCart;
		    }
		    die(json_encode($this->data));		
		}
	}
?>