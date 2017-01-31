/**
 * Created by 鹏 on 2017/1/26.
 */



$(function () {
    //图片高度自适应 start
    var pic_h=function(){
        var h=$(window).height()/2.5;
        console.log($(window).height());
        console.log($(window).width());
        var pic=$("#activities>div").css('height',h);
    };
    pic_h();
    $(window).on('resize',pic_h);
    //end

   //群成员图片 start
    (function abc(){
        for (var k=1;k<=77;k++){
            $('.bg').append('<div class="bg-part">'+'<img src="images/fcc/members/m-'+k+'.jpg"></div>');
        }
    }());
    //end

    //成员图片随机出现start
    var mems=$('.bg').find('.bg-part'),i=1,n=0;
    var abc=$('.bg');
    console.log(mems[1]);

    //$(window).on('scroll', function () {
    //    if($(window).scrollTop()>1900){
    //        var n=($(window).scrollTop()-1900)*0.0011;
    //        console.log(n);
    //        $('.bg').css('opacity',n);
    //    }
    //    else{
    //        $('.bg').css('display','');
    //    }
    //})

    $(window).on('scroll', function () {
        if($(window).scrollTop()>1900){
            var n=($(window).scrollTop()-1900)*0.0011;
            console.log(n);
            $('.bg-part:even').css('opacity',n);
            }

        else{
            $('.bg-part:even').css('display','');
        }
    })
    //end
})





