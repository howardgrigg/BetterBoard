<?php
class Note extends Resource {
	 
	static $db = array(
	 "Title" =>  "Varchar(400)",
	 "OnlineReading" =>  "Varchar(400)",
	 "CollabLink"  =>  "Varchar(400)",
	 "PDFURL" =>  "Varchar(400)"
	);

	static $has_one =array(
	 "WeekPage"  =>  "WeekPage",
	 "Reading"  =>  "File"
	);

	static $has_many =array(
	);

	static $belongs_many_many = array(
	);

/*
	function getCMSFields() {
		$f = new FieldList();
		$f->push();
		return $f;
	}
*/


}