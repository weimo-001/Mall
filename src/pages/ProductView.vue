<template lang="pug">
mixin productDetailPair(n,randomStr)
  el-col.pair.productDetail(:span="8")
    div=`产品示例${n}:`
    div=`${randomStr}`
mixin pair(price,name,klass)
  dl.pair.clear
    dt= name
    dd.price(class=`${klass}`)
      em ￥
      span= price
div
  div.container
    el-row(:gutter="10").overview
      el-col(:span="10").preview
        el-carousel(trigger="click" indicator-position="outside")
          el-carousel-item(v-for="item in 4" :key="item")
      el-col(:span="14").detail
        h1.title 【三只松鼠_夏威夷果265gx2】休闲零食特产坚果炒货干果仁奶油味
        div.well
          +pair(110,'价格','hot')
          +pair(89,'运费')
        el-row
          el-col(:span="8"): div.info.
            月销量 #[span.red 9999]
          el-col(:span="8"): div.info.
            累计评价 #[span.red 9999]
          el-col(:span="8"): div.info.
            送积分 #[span.red 9999]
        dl.pair.clear
          dt 口味
          dd
            div.pill-option 辣 
            div.pill-option.selected 甜
            div.pill-option 麻 
        dl.pair.clear
          dt 数量碾压
          dd
            el-input-number( :min="1" size="mini" v-model="num")
        div.pair.clear
          dt &nbsp;
          dd
            el-button.buy-now 立即购买
            el-button.cart 加入购物车
        div.pair.clear
          dt 服务承诺
          dd.
            #[a.anchor(href="#") 破损包退] #[a.anchor(href="#") 正品保证] #[a.anchor(href="#") 极速退款] #[a.anchor(href="#") 七天无理由退货] #[a.anchor(href="#") 支付方式]
  div.container
    el-row.product-detail
      .props: el-row
       - var n=0;
        while n<19
          - const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
          - let randomStr=Array(8).fill(0).map(i => possible.charAt(Math.floor(possible.length * Math.random()))).join('')
            +productDetailPair(n++,randomStr)
</template>
<script>
import randomString from "../../utils/random-string.js";
export default {
  data() {
    return {
      num: 1,
      a: 2
    };
  },
  mounted() {
    console.log(this.randomString(15));
  },
  methods: {
    randomString
  }
};
</script>
<style lang="scss" scoped>
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-button.buy-now {
  background: #ffeded;
  color: #c10;
  border: 1px solid #ff0036;
}
.el-button.cart {
  background: #ff0036;
  color: #fff;
  border: none;
}
.el-button.buy-now:hover {
  background: mix(#ffeded, #ffadad, 50%);
}
.el-button.cart:hover {
  background: mix(#ff3336, #cc110e, 50%);
}
.overview {
  margin-top: 1.3em;
  font-size: 13px;
  line-height: 1.5;
  color: #999;
}
.well {
  background-image: url(../../static/productPriceBg.png);
  background-repeat: no-repat;
  padding: 0.5em;
}
.pair {
  margin: 0;
  & > * {
    display: inline-block;
  }
  & > *:nth-child(odd) {
    opacity: 0.6;
  }
}
.red {
  color: #ff0036;
  font-weight: bolder;
}
.price {
  color: #333;
  font-family: Arial;
  em {
    font-style: normal;
    vertical-align: middle;
  }
  span {
    vertical-align: middle;
  }
}
.hot {
  color: #ff0036;
  em {
    font-size: 18px;
  }
  span {
    font-size: 24px;
    font-weight: bolder;
  }
}
.detail > * {
  margin-bottom: 1em;
}
.title {
  font-size: 1.1rem;
  color: #000;
}
.pill-option {
  display: inline-block;
  margin-right: 0.5em;
  padding: 0 0.5em;
  border: 1.3px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
}
.pill-option.selected {
  border-color: #ff0036;
}
dt {
  float: left;
  width: 70px;
  padding: 0.4em 0.5em;
}
dd {
  text-align: left;
  float: left;
  margin: 0;
}
.clear::after {
  content: "\20";
  clear: both;
  display: block;
}
.props {
  border: 1px solid #ccc;
  padding: 1em;
}
.productDetail{
  color:#666;
  font-size: 14px;
  &>*:nth-child(odd){
    padding:5px 10px;
  }
}
</style>
