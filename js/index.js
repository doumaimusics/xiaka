     $(function(){
     	     // 折叠功能
    var flag=1;
    $(".side-nav-title-1").click(function(){
        if(flag ===1){
            //改变按钮
            $(this).children("i").addClass("active")
                .parent().siblings().children("i").removeClass("active");
            //子列表显示
            $(".nav-inner-list-2").eq($(this).index(".side-nav-title-1")).css("display","block");
//          console.log($(this).index(".side-nav-title-1"))
            flag=2;
        }else{
            //改变按钮
            $(this).children("i").removeClass("active");
            //子列表显示
            $(".nav-inner-list-2").eq($(this).index(".side-nav-title-1")).css("display","none");
            /*console.log(x)*/
            flag=1;
        }

    });

     })
