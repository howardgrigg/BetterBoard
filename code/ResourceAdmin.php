<?php
class ResourceAdmin extends ModelAdmin {
  public static $managed_models = array('Lecture', 'Note', 'Reading', 'QuizQuestion','ResourceNote' ); // Can manage multiple models
  static $url_segment = 'resources'; // Linked as /admin/products/
  static $menu_title = 'Resource Admin';
}