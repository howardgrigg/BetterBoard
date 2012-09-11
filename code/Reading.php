<?php
class Reading extends Resource {
	 
	static $db = array(
	 "Title" =>  "Varchar(400)",
	 "OnlineReading" =>  "Varchar(400)",
	 "CollabLink"  =>  "Varchar(400)",
	 "PDFURL" =>  "Varchar(400)",
	 "Type"  =>  "Enum('Required, AdditionalCases, Recommended, TopicOverview, PopHealth, Ethics')"
	);

	static $has_one =array(
	 "WeekPage"  =>  "WeekPage",
	 "Reading"  =>  "File"
	 );

	static $has_many =array(
	 
	);

	static $belongs_many_many = array(
	);
	
	static $summary_fields = array(
      'Title',
      'Type',
      'WeekPage.Title'
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