<?php
class WeekCase extends Resource {
	 
	static $db = array(
	 "Title" =>  "Varchar(400)",
	 "OnlineReading" =>  "Varchar(400)",
	 "PDFURL" =>  "Varchar(400)"
	);

	static $has_one =array(
	 "WeekPage"  =>  "WeekPage"
	 );


}