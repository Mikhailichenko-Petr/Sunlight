import React from "react"
import style from "./Pawnshop.module.css"

   export const Pawnshop=()=>{
      return(
         <div class="lombard m-new">
            <div class="sunlight-h1">Ломбард</div>
            <a href="/zaym/" class="lombard-big-loan">
               <div class="lombard-big-loan__main">
                  <div>
                     <div class="lombard-big-loan__title">Заём</div>
                     <div class="lombard-big-loan__text">Под залог ювелирного украшения</div>
                  </div>
                  <div class="lombard-big-loan__button js-telegram-bot-popup-opener m-mobile-hidden">Получить консультацию в&nbsp;телеграм</div>
               </div>
               <div class="lombard-big-loan__count-wrap m-mobile-hidden">
                  <div class="lombard-big-loan__count-price">2400 ₽</div>
               <div class="lombard-big-loan__count-subtext">За&nbsp;1&nbsp;г золота 585-й пробы</div>
               </div>
               <div class="lombard-big-loan__count-wrap lombard-big-loan__count-wrap_flex m-mobile-hidden">
                  <div class="lombard-big-loan__count-text">от</div>
                     <div class="lombard-big-loan__count-price lombard-big-loan__count-price_lowspace">0,15</div>
                  <div class="lombard-big-loan__count-percent-block"><div class="lombard-big-loan__count-percent">%</div>
               <div class="lombard-big-loan__count-text">
                  в день
               </div></div><div class="lombard-big-loan__count-subtext lombard-big-loan__count-subtext_right">
               на первый заём
               </div></div><div class="lombard-big-loan__count-wrap lombard-big-loan__count-wrap_flex m-desktop-hidden"><div class="lombard-big-loan__count-text">
                     от
                  </div><div class="lombard-big-loan__count-price">
                     0,15%
                  </div><div class="lombard-big-loan__count-wrap"><div class="lombard-big-loan__count-text">
                        в день
                     </div><div class="lombard-big-loan__count-subtext">
                        на первый заём
                     </div></div></div>
            </a>
         </div>
      )
   }