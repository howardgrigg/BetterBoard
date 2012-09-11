<?php
class ModReading extends Resource {
	 
	static $db = array(
	 "Title" =>  "Varchar(255)",
	 "OnlineReading" =>  "Text",
	 "CollabLink"  =>  "Text",
	 "PDFURL" =>  "Varchar(300)"
	);

	static $has_one =array(
	 "ModulePage"  =>  "ModulePage",
	 "Reading"  =>  "File"
	);

	static $has_many =array(
	 
	);

	static $belongs_many_many = array(
	);

	/*
function getCMSFields() {
		$f = new FieldList();
		$f->push( new TextField("Title"));
		$f->push( new TextField("OnlineReading"));
		$f->push( new TextField("CollabLink"));
		
		return $f;
	}
*/


}