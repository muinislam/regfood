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
//scrool body
$(function(){
    $(".top_to_bottom").click(function(){
      $("body,html").scrollTop(0)
    })

  })