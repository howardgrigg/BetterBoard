<?php
class MemberResources extends DataExtension {
 static $db = array(
    'Score' => 'Int',
    'NotifTime' => 'SS_Datetime'
);
 static $many_many = array(
    'ReadResources' => 'Resource'
);
 static $has_many = array(
    'ResourceNotes' => 'ResourceNote'
);

}
?>