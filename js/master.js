$(function(){

  $(".menuBtn").click(function(){
    $(this).toggleClass("on");
    $(".gnb").toggleClass("on");
    $("html").toggleClass("no_scroll");
  });








  var $title_text = null;
  var visualTxt = null;

  $title_text = $(".title_text");
  visualTxt = ['rhyme', 'brilliant', 'remember', 'remain', 'master', 'remedy'];

  function visualTitleFindN(){
    $title_text.html( //비주얼 타이틀 쪼개기
      $title_text.html().replace(/./g, "<span>$&</span>").replace(/\s/g, "&nbsp;")
    );
    $title_text.children().each(function(){ //N을 찾아서 i 태그로 감싸기
      if($(this).text().indexOf('R')>-1 || $(this).text().indexOf('r')>-1){
        $(this).wrapInner('<i></i>');
      }
    });
  }
  function visualTitle_ani(){
    var index = Math.floor( Math.random()*visualTxt.length-1 );
    $title_text.text(visualTxt[index]);
    visualTitleFindN();

    setInterval(function(){
      var oldIndex = index;
      index = Math.floor( Math.random()*visualTxt.length-1 );
      if (oldIndex === index) {
        index++;
      }
      if (index < 0) {
        index = 0;
      }
      //console.log('인덱스',index);
      $title_text.text(visualTxt[index]);
      visualTitleFindN();
    },4300);
  }

  function visualLogo_ani(){
    $logo = $(".visual_inner .title_logo");
    $logo.addClass("on");
  }

  $(window).on('load',function(){
    setTimeout(function(){
      visualLogo_ani(); //로고 등장
    },800);
    setTimeout(function(){
      visualTitle_ani(); //타이틀 애니메이션 시작
    },1000);
  });
})