<template lang="pug">
mixin productCard(n=6)
    el-col.verticalGutter(:span=`${n}`)
        el-card(:body-style="{ padding: '0px' }")
            img.image(src='http://dummyimage.com/300x300')
            div(style='padding: 14px;')
                span 好吃的汉堡
                div.bottom.clearfix
                    time.time
                    el-button.button(type='text') 操作按钮
mixin productCardList(title,cardNumber,length)
    h2=title
    el-row.card-list(:gutter="10")
            each card in new Array(cardNumber).fill(0)
                +productCard(length?length:6)
div.carousel
   div.container
    el-carousel(:interval='4000', type='card', height='200px')
      el-carousel-item(v-for='item in 6', :key='item')
   div.container
    +productCardList('新品',8)
    +productCardList('促销',6,4)
    
</template>
<style scoped>
.carousel {
  margin-top: 1em;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>