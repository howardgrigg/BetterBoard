<?php
class ResourceNote extends DataObject {
	 
	static $db = array(
	"Text" => "Text",
  
	);

	static $has_one =array(
	"Resource" => "Resource",
  "Member" => "Member",
	);

	static $has_many =array(
	);
	
	static $many_many =array(
	);

	static $belongs_many_many = array(
	);

	static $summary_fields = array(
      'Text',
      'Member.FirstName'
   );
}