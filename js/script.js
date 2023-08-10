
// ==== slick slider ====
  $(function(){
    $('.offer_slidebar').slick({
        prevArrow:'.prev_arrow',
        nextArrow:'.next_arrow',
        slidesToShow:3,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:4000,
        infinite:true
        
      });

      $('.chef_slider').slick({
        prevArrow:'.chef_prev_arrow',
        nextArrow:'.chef_next_arrow',
        slidesToShow:4,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:2000,
        infinite:true
        
      })
      $('.food_slider_box').slick({
        arrows:false,
        slidesToShow:4,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:2000,
        infinite:true
        
      })
      $('.order_img_box').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows:false,
        autoplay:true,
        autoplaySpeed:1100,
        asNavFor: '.menu_small_slick'
      });
      $('.menu_small_slick').slick({
        prevArrow:'.prev',
        nextArrow:'.next',
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.order_img_box',
        centerMode: true,
        focusOnSelect: true
      });  

      //testimonial slick
      $('.testimonial_slick').slick({
        prevArrow:'.test_prev_arrow',
        nextArrow:'.test_next_arrow',
        slidesToShow:2,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:4000,
        infinite:true
        
      });

      // ==== food_blog_slick ====
      $('.food_blog_slick').slick({
        prevArrow:'.food_prev_arrow',
        nextArrow:'.food_next_arrow',
        slidesToShow:3,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:4000,
        infinite:true
        
      });
      //   ===== fixed navbar =====
    
    $(window).scroll(function(){
        var scrolling =$(this).scrollTop();
        if(scrolling > 200){
          $(".top_to_bottom").fadeIn(500);
          $(".top_to_bottom").css({bottom:"50px"});
      }else{
        $(".top_to_bottom").fadeOut(500);
        $(".top_to_bottom").css({bottom:"600px"});
      }
        if(scrolling > 100){
            $(".navbar").addClass("fixed_nav");
        }else{
            $(".navbar").removeClass("fixed_nav");
        }
      
    })
    
  });
//scrool body
  $(function(){
    $(".top_to_bottom").click(function(){
      $("body,html").scrollTop(0)
    })

  })
  //mixitup
  $(function(){
    var containerEl = document.querySelector(".mixit_main_Item");
    var mixer = mixitup(containerEl,{ animation:{ duration:1000}})
  })

  $(function(){
    $('.counter').counterUp({
      delay: 10,
      time: 4000
  });
  })
    // //  Stykey Header  
    // $(window).scroll(function(){
    //   var scrolling = $(this).scrollTop();
      
    //   if(scrolling > 1500){
    //       $('.sticky_cat').addClass('sticky_sidbar');
    //   }
    //   else {
    //        $('.sticky_cat').removeClass('sticky_sidbar');
    //   }
    //   });  

