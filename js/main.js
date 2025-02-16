jQuery(document).ready(function($) {

	'use strict';

        $(window).load(function() { // garante que todo o site seja carregado
            $(".seq-preloader").fadeOut(); // primeiro desaparecerá a animação de carregamento
            $(".sequence").delay(500).fadeOut("slow"); // irá desbotar o DIV branco que cobre o site.
        })
      
        
        $(function() {
  
        function showSlide(n) {
            // n é a posição relativa do slide atual
          
            // desvincular ouvinte de eventos para evitar nova ativação
            $body.unbind("mousewheel");
          
            // incrementar o número do slide em n e mantê-lo dentro dos limites
            currSlide = Math.min(Math.max(0, currSlide + n), $slide.length-1);
            
            var displacment = window.innerWidth*currSlide;
            // traduzir slides div para slide apropriado
            $slides.css('transform', 'translateX(-' + displacment + 'px)');
            // atraso antes de religar o evento para evitar o novo disparo
            setTimeout(bind, 700);
            
            // alterar classe ativa no link
            $('nav a.active').removeClass('active');
            $($('a')[currSlide]).addClass('active');
            
        }
      
        function bind() {
             $body.bind('false', mouseEvent);
          }
      
        function mouseEvent(e, delta) {
            // Na rolagem para baixo, mostrar o próximo slide, caso contrário, mostrar o slide anterior
            showSlide(delta >= 0 ? -1 : 1);
            e.preventDefault();
        }
        
        $('nav a, .main-btn a').click(function(e) {
            // Quando o link for clicado, localize o slide para o qual ele aponta
            var newslide = parseInt($(this).attr('href')[1]);
            // descubra a que distância está do slide atual
            var diff = newslide - currSlide - 1;
            showSlide(diff); // mostre esse slide
            e.preventDefault();
        });
      
        $(window).resize(function(){
          // Mantenha o slide atual à esquerda da janela ao redimensionar
          var displacment = window.innerWidth*currSlide;
          $slides.css('transform', 'translateX(-'+displacment+'px)');
        });
        
        // cache
        var $body = $('body');
        var currSlide = 0;
        var $slides = $('.slides');
        var $slide = $('.slide');
      
        // dar classe ativa ao primeiro link
        $($('nav a')[0]).addClass('active');
        
        // adicionar ouvinte de eventos para rolagem do mouse
        $body.bind('false', mouseEvent);
    })        


        $('#form-submit .date').datepicker({
        });


        $(window).on("scroll", function() {
            if($(window).scrollTop() > 100) {
                $(".header").addClass("active");
            } else {
                //remova a propriedade background para que fique transparente novamente (definido no seu css)
               $(".header").removeClass("active");
            }
        });


});
