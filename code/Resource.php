<?php
class Resource extends DataObject {
	 
	static $db = array(
	 "Upvotes" =>  "Int",
	 "Downvotes" =>  "Int",
	 "Updated" => "SS_Datetime",
	 "Alert"	=>	"Boolean"
	);

	static $has_one =array(
	);

	static $has_many =array(
	 "ResourceNote" => "ResourceNote",
	);
	
	static $many_many =array(
	 
	);

	static $belongs_many_many = array(
	 "MembersRead" =>  "Member"
	);

	function getCMSFields_forPopup() {
		$f = new FieldList();
		$f->push();
		return $f;
	}

	function alreadyReadIt(){ 
	 if(Member::CurrentUserID()){
      if($this->MembersRead()->find('ID', Member::CurrentUserID())){
        return true;
      }else{
        return false;
      }}
    }
  
  function memberNote(){
     $CurrentMember = Member::currentUser();
     
     return DataList::create('ResourceNote')
  	   ->filter(array(
  	     'ResourceID' => $this->ID, 
  	     'MemberID' => $CurrentMember->ID
  	   ));
  }
  
  function recentlyAdded(){
      $CurrentMember = Member::currentUser();
      
      if($CurrentMember->NotifTime > $this->Created){
        return true;
      }else{
        return false;
      }
  }
  function recentlyEdited(){
      $CurrentMember = Member::currentUser();
      
      if($CurrentMember->NotifTime > $this->Created){
        return true;
      }else{
        return false;
      }
  }
}