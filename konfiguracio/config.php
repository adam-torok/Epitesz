<?php 
   define("COMPONENTS", "komponensek/");
   session_start();

   function getLang($default = 'HU')
   {
      return (!empty($_SESSION['lang'])) ? $_SESSION['lang'] : $default;
   }

   function getTemplateForLanguage($lang){
   if($lang == 'HU'){
      return [
         '/tolto.html',
         '/navbar.html',
         '/fooldal.html',
         '/arak.html',
         '/szolgaltatasok.html',
         '/rolunk.html',
         '/referenciak.html',
         '/velemenyek.html',
         '/csapat.html',
         '/kapcsolat.html',
         '/lablec.html',
         '/scriptek.html',
      ];
      } else{
      return [
         '/loader.html',
         '/navbar.html',
         '/home.html',
         '/prices.html',
         '/services.html',
         '/about.html',
         '/comments.html',
         '/references.html',
         '/team.html',
         '/contact.html',
         '/footer.html',
         '/scripts.html',
      ];
   }
   }
