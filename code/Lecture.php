<?php
class Lecture extends Resource {
	 
	static $db = array(
	 "Title" =>  "Varchar(255)",
	 "Lecturer"  =>  "Varchar(255)",
	 "CollabLink"  =>  "Varchar(300)",
	 "SlidesURL" =>  "Varchar(300)",
	 "LectopiaURL" =>  'Varchar(300)',
	 "VOPPURL" =>  'Varchar(300)',
	 "Handout"	=>	'Varchar(300)' 
	);

	static $has_one =array(
	 "WeekPage"  =>  "WeekPage",
	 "Slides"  =>  "File"
	);

	static $has_many =array(
	 
	);

	static $belongs_many_many = array(
	);
		static $summary_fields = array(
      'Title',
      'WeekPage.Title'
   );

/*
	function getCMSFields() {
		$f = new FieldList();
		$f->push( new TextField("Title"));
		$f->push( new TextField("Lecturer"));
		$f->push( new TextField("CollabLink"));
		$f->push( $uploadField = new UploadField("Slides"));
//		$uploadField->getValidator()->setAllowedMaxFileSize('1');

		
		
		return $f;
	}
*/
  

}