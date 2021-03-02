'use strict'

{
  const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

{//hrefのaタグを取得する 
  const sst = document.querySelectorAll('a[href^= "#"]');
  for (let i = 0; i < sst.length; i++) {
    sst[i].addEventListener('click',(e) => {
      // デフォルトの動作をキャンセル
      e.preventDefault();
      // hrefの中身を取得する
      let href = sst[i].getAttribute('href');
      console.log(href); //確認
      // ＃が邪魔なのでreplaceで＃を消す
      let targetElement = document.getElementById(href.replace('#',''));
      console.log(href); //確認
      // ブラウザからの高さを取得
      const rect = targetElement.getBoundingClientRect().top;
      // 現在のスクロール量を取得
      const offset = window.pageYOffset;
      // 固定ヘッダー分の高さ
      const gap = 10;
      const target = rect + offset - gap;
      window.scrollTo({
        top: target,
        behavior: 'smooth',
      });
    });    
  }
}