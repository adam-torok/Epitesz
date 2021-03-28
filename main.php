<?php 
   include_once('konfiguracio/config.php');
   if(isset($_POST['lang'])){
      $_SESSION['lang'] = $_POST['lang'];
   }
   $lang = getLang();
   $pages = getTemplateForLanguage($lang);
?>
<!DOCTYPE html>
<html lang='<?php echo getLang(); ?>'>
<head>
   <?php 
      $lang == "HU" ?  include_once(COMPONENTS.$lang.'/fejlec.html') :  include_once(COMPONENTS.$lang.'/header.html')
   ?>
</head>
   <body>
      <?php 
         foreach ($pages as $page) {
            include_once(COMPONENTS.$lang.$page);
         }
      ?>
   </body>
   </html>