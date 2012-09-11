<?php
class AdditionalCase extends DataObject {
	 
	static $db = array(
	 "Title" =>  "Varchar(255)",
	 "Body"  =>  "HTMLText"
	);

	static $has_one =array(
	 "WeekPage"  =>  "WeekPage"
	);

	static $has_many =array(
	);

	static $belongs_many_many = array(
	);

	function getCMSFields_forPopup() {
		$f = new FieldList();
		$f->push( new TextField("Title"));
		$f->push( new HTMLEditorField("Body"));
		return $f;
	}


}