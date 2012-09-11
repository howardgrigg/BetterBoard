<?php
class WeekPage extends Page {

  static $db = array(
    "MainCase"  =>  "HTMLText",
    "KeyObjectives" =>  "HTMLText",
    "AssumedKnow" =>  "HTMLText"
  );

  static $has_one =array(
  );

  static $has_many =array(
    "Lectures"  =>  "Lecture",
    "AdditionalCases" =>  "AdditionalCase",
    "Readings"  =>  "Reading",
    "Notes" =>  "Note",
    "QuizQuestions"  =>  "QuizQuestion",
    "Cases" =>  "WeekCase"
  );

  static $belongs_many_many = array(
  );

  static $allowed_children = array("WeekPage");

  static $default_child = "WeekPage";

  // static $icon = 'mysite/images/icons/';

  function getCMSFields() {
    $f = parent::getCMSFields();
    $f->addFieldToTab( 'Root.Objectives', new HTMLEditorField("KeyObjectives") );
    $f->addFieldToTab( 'Root.Objectives', new HTMLEditorField("AssumedKnow") );
    $f->addFieldToTab( 'Root.MainCase', new HTMLEditorField("MainCase") );

    $LectureGridConfig = GridFieldConfig_RelationEditor::create();
    $LectureGrid = new GridField('Lecture','Lectures', $this->Lectures(), $LectureGridConfig);
    $f->addFieldToTab( 'Root.Lectures', $LectureGrid );

    $ReadingGridConfig = GridFieldConfig_RelationEditor::create();
    $ReadingGrid = new GridField('Reading','Readings', $this->Readings(), $ReadingGridConfig);
    $f->addFieldToTab( 'Root.Readings', $ReadingGrid );

    $AddCasesGridConfig = GridFieldConfig_RelationEditor::create();
    $AddCasesGrid = new GridField('Cases','Cases', $this->Cases(), $AddCasesGridConfig);
    $f->addFieldToTab( 'Root.Cases', $AddCasesGrid );

    $NotesGridConfig = GridFieldConfig_RelationEditor::create();
    $NotesGrid = new GridField('Note','Notes', $this->Notes(), $NotesGridConfig);
    $f->addFieldToTab( 'Root.Notes', $NotesGrid );

    $QuizQuestionsGridConfig = GridFieldConfig_RelationEditor::create();
    $QuizQuestionsGrid = new GridField('QuizQuestions', 'QuizQuestions', $this->QuizQuestions(), $QuizQuestionsGridConfig) ;
    $f->addFieldToTab( 'Root.QuizQuestions', $QuizQuestionsGrid );

    return $f;
  }

  function OrderedLectures(){
    return DataList::create('Lecture')
    ->filter(array(
        'WeekPageID' => $this->ID
      ))->sort('Title');
  }

  function MainReadings(){
    return DataList::create('Reading')
    ->filter(array(
        'WeekPageID' => $this->ID,
        'Type' => 'Required'
      ));
  }

  function AdditionalReadings(){
    return DataList::create('Reading')
    ->filter(array(
        'WeekPageID' => $this->ID,
        'Type' => 'AdditionalCases'
      ));
  }

  function OverviewReadings(){
    return DataList::create('Reading')
    ->filter(array(
        'WeekPageID' => $this->ID,
        'Type' => 'TopicOverview'
      ));
  }

  function RecommendedReadings(){
    return DataList::create('Reading')
    ->filter(array(
        'WeekPageID' => $this->ID,
        'Type' => 'Recommended'
      ));
  }

  function PopHealthReadings(){
    return DataList::create('Reading')
    ->filter(array(
        'WeekPageID' => $this->ID,
        'Type' => 'PopHealth'
      ));
  }

  function EthicsReadings(){
    return DataList::create('Reading')
    ->filter(array(
        'WeekPageID' => $this->ID,
        'Type' => 'Ethics'
      ));
  }


}


class WeekPage_Controller extends Page_Controller {

  function isHoward(){
    $CurrentMember = Member::currentUser();
    if($CurrentMember->ID == 2){
      return true;
    }else{
      return false;
    }
  }

  function Questions(){
    $questions = $this->QuizQuestions();
    $justOne = new PaginatedList($questions, $this->request);
    $justOne->setPageLength(1);
    return $justOne;

  }
  
  

  function addLecture(){
    $f = new FieldList();
    $f->push( new TextField("Title"));
    $f->push( new TextField("Lecturer"));
    $f->push( new TextField("SlidesURL", "PDF: Copy the link directly to the PDF off blackboard"));
    $f->push( new TextField("CollabLink", "Link to Collaborative PDF (PDF needs to be uploaded to <a href='http://personal.crocodoc.com/'>Crocodoc</a>)"));
    $f->push( new TextField("VOPPURL", "VOPP: Copy the link directly to the VOPP off blackboard"));
    $f->push( new TextField("LectopiaURL", "Lectopia: Copy the link directly to the Lectopia off blackboard"));
    $f->push( new TextField("Handout", "Handout: Copy the link directly to the handout off blackboard"));
    $f->push( new HiddenField("WeekPageID", "WeekPageID", $this->ID));


    $actions = new FieldList(
      new FormAction('doAddLecture', 'Add the Lecture')
    );

    return new Form($this, 'addLecture', $f, $actions);
  }

  function addReading(){
    $f = new FieldList();
    $f->push( new TextField("Title"));
    $f->push( new DropdownField("Type","Type", singleton('Reading')->dbObject('Type')->enumValues()));
    $f->push( new TextField("OnlineReading"));
    $f->push( new TextField("PDFURL", "PDF: Copy the link directly to the PDF off blackboard"));
    $f->push( new TextField("CollabLink", "Link to Collaborative PDF (Needs to be uploaded to <a href='http://personal.crocodoc.com/'>Crocodoc</a>)"));
    $f->push( new HiddenField("WeekPageID", "WeekPageID", $this->ID));


    $actions = new FieldList(
      new FormAction('doAddReading', 'Add the Reading')
    );

    return new Form($this, 'addReading', $f, $actions);
  }

  function addCase(){
    $f = new FieldList();
    $f->push( new TextField("Title", 'Case Title'));
    $f->push( new TextField("PDFURL", "PDF: Copy the link directly to the PDF off blackboard"));
    $f->push( new TextField("OnlineReading", "Link to the page on blackboard"));
    $f->push( new HiddenField("WeekPageID", "WeekPageID", $this->ID));


    $actions = new FieldList(
      new FormAction('doAddCase', 'Add the Case')
    );

    return new Form($this, 'addCase', $f, $actions);
  }
  
  function doAddCase($data, $form){
    $note = new WeekCase();
    $form->saveInto($note);
    $note->write();
    $CurrentMember = Member::currentUser();
    $score = $CurrentMember->Score + 3;
    $CurrentMember->Score = $score;
    $CurrentMember->write();
    Controller::redirect($this->link().'#cases');
  }
  
  function doAddLecture($data, $form){
    $reading = new Lecture();
    $form->saveInto($reading);
    $reading->write();

    $from = 'new@silverscoop.org';
    $to = 'howard@gri.gg';
    $subject = 'New BBKiller Lecture';
    $body ='<p>A new lecture: '.$data['Title'].' has added the site.</p>';
    $email = new Email($from, $to, $subject, $body);
    $email->send();

    $CurrentMember = Member::currentUser();
    $score = $CurrentMember->Score + 10;
    $CurrentMember->Score = $score;
    $CurrentMember->write();

    Controller::redirect($this->link().'#lectures');
  }
  
  function doAddReading($data, $form){
    $reading = new Reading();
    $form->saveInto($reading);
    $reading->write();

    $from = 'new@silverscoop.org';
    $to = 'howard@gri.gg';
    $subject = 'New BBKiller Lecture';
    $body ='<p>A new reading: '.$data['Title'].' has added the site.</p>';
    $email = new Email($from, $to, $subject, $body);
    $email->send();

    $CurrentMember = Member::currentUser();
    $score = $CurrentMember->Score + 7;
    $CurrentMember->Score = $score;
    $CurrentMember->write();

    Controller::redirect($this->link().'#readings');
  }

  function addNote(){
    $f = new FieldList();
    $f->push( new TextField("Title"));
    $f->push( new TextField("OnlineReading", "Link to Webpage/Online Document"));
    $f->push( new TextField("PDFURL", "PDF: Copy the link directly to the PDF off blackboard"));
    $f->push( new TextField("CollabLink", "Link to Collaborative PDF (Needs to be uploaded to <a href='http://personal.crocodoc.com/'>Crocodoc</a>)"));
    $f->push( new HiddenField("WeekPageID", "WeekPageID", $this->ID));


    $actions = new FieldList(
      new FormAction('doAddNote', 'Add the Note')
    );

    return new Form($this, 'addNote', $f, $actions);
  }

  function doAddNote($data, $form){
    $note = new Note();
    $form->saveInto($note);
    $note->write();

    $from = 'new@silverscoop.org';
    $to = 'howard@gri.gg';
    $subject = 'New BBKiller Lecture';
    $body ='<p>A new note: '.$data['Title'].' has added the site.</p>';
    $email = new Email($from, $to, $subject, $body);
    $email->send();

    $CurrentMember = Member::currentUser();
    $score = $CurrentMember->Score + 4;
    $CurrentMember->Score = $score;
    $CurrentMember->write();

    Controller::redirect($this->link().'#notes');
  }

  function editLectureTemplate(){
    return $this->renderWith('ajaxEditLecture');
  }

  function editLecture(){
    $Params = $this->getURLParams();

    $f = new FieldList();
    $f->push( new TextField("Title"));
    $f->push( new TextField("Lecturer"));
    $f->push( new TextField("SlidesURL", "PDF: Copy the link directly to the PDF off blackboard"));
    $f->push( new TextField("CollabLink", "Link to Collaborative PDF (Needs to be added to <a href='http://personal.crocodoc.com/'>Crocodoc</a>)"));
    $f->push( new TextField("VOPPURL", "VOPP: Copy the link directly to the VOPP off blackboard"));
    $f->push( new TextField("LectopiaURL", "Lectopia: Copy the link directly to the Lectopia off blackboarda"));
    $f->push( new TextField("Handout", "Handout: Copy the link directly to the handout off blackboard"));
    $f->push( new HiddenField("WeekPageID", "WeekPageID", $this->ID));
    $f->push( new HiddenField("ID", "ID"));


    $actions = new FieldList(
      new FormAction('doEditLecture', 'Save the Update')
    );
    $Form = new Form($this, 'editLecture', $f, $actions);

    if(is_numeric($Params['ID']) && $Resource = Resource::get()->byID($Params['ID'])){
      $Form->loadDataFrom($Resource);
    }
    return $Form;
  }

  function doEditLecture($data, $form) {
    if($lecture = Resource::get()->byID($data['ID'])){
      $form->saveInto($lecture);
      Controller::redirect($this->link().'#lectures');
      // Write to the databsae
      $CurrentMember = Member::currentUser();
      $score = $CurrentMember->Score + 3;
      $CurrentMember->Score = $score;
      $CurrentMember->write();
      $lecture->Updated = SS_Datetime::now()->Rfc2822();
      $lecture->write();
    }else{
      Controller::redirect('doesnt-works');
    }
  }

  function editReadingTemplate(){
    return $this->renderWith('ajaxEditReading');
  }

  function editReading(){
    $Params = $this->getURLParams();

    $f = new FieldList();
    $f->push( new TextField("Title"));
    $f->push( new DropdownField("Type","Type", singleton('Reading')->dbObject('Type')->enumValues()));
    $f->push( new TextField("OnlineReading"));
    $f->push( new TextField("PDFURL", "PDF: Copy the link directly to the PDF off blackboard"));
    $f->push( new TextField("CollabLink", "Link to Collaborative PDF (Needs to be uploaded to <a href='http://personal.crocodoc.com/'>Crocodoc</a>)"));
    $f->push( new HiddenField("WeekPageID", "WeekPageID", $this->ID));
    $f->push( new HiddenField("ID", "ID"));


    $actions = new FieldList(
      new FormAction('doEditReading', 'Edit the Reading')
    );
    $Form = new Form($this, 'editReading', $f, $actions);

    if(is_numeric($Params['ID']) && $Resource = Resource::get()->byID($Params['ID'])){
      $Form->loadDataFrom($Resource);
    }
    return $Form;
  }

  function doEditReading($data, $form) {
    if($reading = Resource::get()->byID($data['ID'])){
      $form->saveInto($reading);
      Controller::redirect($this->link().'#readings');
      // Write to the databsae
      $CurrentMember = Member::currentUser();
      $score = $CurrentMember->Score + 3;
      $CurrentMember->Score = $score;
      $CurrentMember->write();
      $reading->Updated = SS_Datetime::now()->Rfc2822();
      $reading->write();
    }else{
      Controller::redirect('doesnt-works');
    }
  }

  function addQuestionForm() {

    $fields = new FieldList(
      new TextField('Question','<h4>Question:</h4>'),
      $uploadField = new FileField('Image','Add an Image (file must be below 300kb)'),
      new LiteralField('tabs',"<div id='multichoice' class='quizanswertab'>Multi Choice/True False</div><div id='shortanswer' class='quizanswertab'>Short Answer</div>"),
      $answers = new CompositeField(
        $single = new CompositeField(
          $singlefield = new TextField('ShortAnswer','Short Answer:')
        ),
        $multi = new CompositeField(
          new CompositeField(
            new TextField('Answer1','Answer 1:'),
            new TextField('Explanation1','Explanation 1: (optional)'),
            new CheckboxField('Correct1','Correct?')
          ),
          new CompositeField(
            new TextField('Answer2','Answer 2:'),
            new TextField('Explanation2','Explanation 2: (optional)'),
            new CheckboxField('Correct2','Correct?')
          ),
          new CompositeField(
            new TextField('Answer3','Answer 3: (optional)'),
            new TextField('Explanation3','Explanation 3: (optional)'),
            new CheckboxField('Correct3','Correct?')
          ),
          new CompositeField(
            new TextField('Answer4','Answer 4: (optional)'),
            new TextField('Explanation4','Explanation 4: (optional)'),
            new CheckboxField('Correct4','Correct?')
          )
        )
      ),
      new HiddenField (
        $name = "Page",
        $title = "Page",
        $value = "$this->ID")
    );
    $answers->addExtraClass('answertab');
    $multi->addExtraClass('multichoicetab');
    $multi->addExtraClass('answertab');
    $single->addExtraClass('answertab');
    $single->addExtraClass('singletab');
    $singlefield->addExtraClass('singlefield');
    $singlefield->addExtraClass('validate[required]');

    $uploadField->getValidator()->setAllowedExtensions(array('jpg','jpeg','JPG','JPEG', 'gif','GIF','png','PNG'));
    $uploadField->getValidator()->setAllowedMaxFileSize('315000');
    //   $uploadField->setVar('buttonText','Click here to add an Image');
    $actions = new FieldList(
      new FormAction('doAddQuestion', 'Submit')
    );

    $validator = new RequiredFields('Question');

    return new Form($this, 'addQuestionForm', $fields, $actions, $validator);
  }

  function doAddQuestion($data, $form){
    $data = $form->getData();
    $question = new QuizQuestion();
    $question->WeekPageID = $this->ID;
    $form->saveInto($question);
    $question->write();



    if (!empty($data['Answer1'])) {
      $answer1 = new QuizAnswer();
      $answer1->Answer = $data['Answer1'];
      $answer1->Explanation = $data['Explanation1'];
      $answer1->Correct = $data['Correct1'];
      $answer1->QuizQuestionID = $question->ID;
      $answer1->write();
    }

    if (!empty($data['Answer2'])) {
      $answer2 = new QuizAnswer();
      $answer2->Answer = $data['Answer2'];
      $answer2->Explanation = $data['Explanation2'];
      $answer2->Correct = $data['Correct2'];
      $answer2->QuizQuestionID = $question->ID;
      $answer2->write();
    }

    if (!empty($data['Answer3'])) {
      $answer3 = new QuizAnswer();
      $answer3->Answer = $data['Answer3'];
      $answer3->Explanation = $data['Explanation3'];
      $answer3->Correct = $data['Correct3'];
      $answer3->QuizQuestionID = $question->ID;
      $answer3->write();
    }

    if (!empty($data['Answer4'])) {
      $answer4 = new QuizAnswer();
      $answer4->Answer = $data['Answer4'];
      $answer4->Explanation = $data['Explanation4'];
      $answer4->Correct = $data['Correct4'];
      $answer4->QuizQuestionID = $question->ID;
      $answer4->write();
    }

    $CurrentMember = Member::currentUser();
    $score = $CurrentMember->Score + 15;
    $CurrentMember->Score = $score;
    $CurrentMember->write();

    Controller::redirect($this->link().'#quiz');
  }


}