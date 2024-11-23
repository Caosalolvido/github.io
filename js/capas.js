function Estado(E){


    //alert('estamos en el Estado '+E);
    
      switch(E){
        
        case 'Inicial':
    
          $('#capa1').css('display','flex');
          $('#capa2').css('display','none');
          $('#capa3').css('display','none');
          $('#capa4').css('display','none');
          $('#capa5').css('display','none');
          $('#capa6').css('display','none');
    
         break;
    
         case 'Novedades':
    
          $('#capa1').css('display','none');
          $('#capa2').css('display','flex');
          $('#capa3').css('display','none');
          $('#capa4').css('display','none');
          $('#capa5').css('display','none');
          $('#capa6').css('display','none');
          
    
         break;
    
         case 'Historia':
          
         $('#capa1').css('display','none');
         $('#capa2').css('display','none');
         $('#capa3').css('display','flex');
         $('#capa4').css('display','none');
         $('#capa5').css('display','none');
         $('#capa6').css('display','none');
        
        
         break;

         case 'Tematicas':
          
          $('#capa1').css('display','none');
          $('#capa2').css('display','none');
          $('#capa3').css('display','none');
          $('#capa4').css('display','flex');
          $('#capa5').css('display','none');
          $('#capa6').css('display','none');
         

         break;
    
    
         case 'Partidas':
          
          $('#capa1').css('display','none');
          $('#capa2').css('display','none');
          $('#capa3').css('display','none');
          $('#capa4').css('display','none');
          $('#capa5').css('display','flex');
          $('#capa6').css('display','none');
          
          
        break;
          
        case 'Entrevistas':
          
          $('#capa1').css('display','none');
          $('#capa2').css('display','none');
          $('#capa3').css('display','none');
          $('#capa4').css('display','none');
          $('#capa5').css('display','none');
          $('#capa6').css('display','flex');
          
          
          break;
      }
    }
       
    
    
    
     