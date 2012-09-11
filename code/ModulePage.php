<?php
class ModulePage extends Page {

	static $db = array(
	);

	static $has_one =array(
	);

	static $has_many =array(
	 "ModReadings"  =>  "ModReading"
	);

	static $belongs_many_many = array(
	);
	
	static $allowed_children = array("WeekPage");
	
	static $default_child = "WeekPage";

//	static $icon = 'mysite/images/icons/';

	function getCMSFields() {
		$f = parent::getCMSFields();
		
		$ModReadingGridConfig = GridFieldConfig_RelationEditor::create();
		$ModReadingGrid = new GridField('ModReading','ModReadings', $this->ModReadings(), $ModReadingGridConfig);
		$f->addFieldToTab( 'Root.ModuleResources', $ModReadingGrid );

		return $f;
	}



}


class ModulePage_Controller extends Page_Controller {
   function upvote(){
    $Params = $this->getURLParams();
         
    if(is_numeric($Params['ID']) && $Resource = Resource::get()->byID($Params['ID']))
    {       
        $Resource->Upvotes++; 
        $Resource->write(); 
        return $Resource->Upvotes;
    }else{
        return "didnt work";
    }
  }
  
   function downvote(){
    $Params = $this->getURLParams();
         
    if(is_numeric($Params['ID']) && $Resource = Resource::get()->byID($Params['ID']))
    {       
        $Resource->Downvotes++; 
        $Resource->write(); 
        return $Resource->Downvotes;
    }else{
        return "didnt work";
    }
  }
  
 
 function readIt(){
    $Params = $this->getURLParams();
         
    if(is_numeric($Params['ID']) && $Resource = Resource::get()->byID($Params['ID'])){
      $CurrentMember = Member::currentUser();
      $CurrentMember->ReadResources()->add($Resource);
      return;
    }
    }
  
  function whoopsHaventReadIt(){
    $Params = $this->getURLParams();
         
    if(is_numeric($Params['ID']) && $Resource = Resource::get()->byID($Params['ID'])){
      $CurrentMember = Member::currentUser();
      $CurrentMember->ReadResources()->remove($Resource);
      return;
    }
    }


}