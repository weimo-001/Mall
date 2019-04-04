<template lang="pug">
mixin cat(n,name)
  el-row
    el-col.type(:span="4")= name
    el-col(:span="20")
        while n <6
            div.option= n++
div
  div.container
    div.filter
      div.table
        +cat(1,"品牌")
        +cat(1,"休闲零食")
        +cat(1,"包装方式")
      div.bar 
        div.group
          el-button-group.
            #[el-button(size="mini") 综合] #[el-button(size="mini") 新品] #[el-button(size="mini") 销量] #[el-button(size="mini") 价格]
        div.group.price-filter.
          #[el-input(size="mini" placeholder="最低价格")]~#[el-input(size="mini" placeholder="最高价格")] 
        div.group
          el-checkbox-group(size="mini")
            el-checkbox(label="包邮")
            el-checkbox(label="折扣")
            el-checkbox(label="货到付款")
  div.container
    div.result
    el-pagination.text-center(layout="prev, pager, next" :total="1000")

</template>
<style lang="scss">
.search {
  margin: 1em 0;
}
.filter {
  color: #bbb;
  font-size: 14px;
  .option {
    color: #806f66;
    display: inline-block;
    cursor: pointer;
    padding: 0.8em;
  }
  & > * {
    margin-top: 1em;
  }
  .table > * {
    border: 1px solid #bbb;
  }
  .table > *:not(:last-child) {
    border-bottom: 0;
  }
  .type {
    background: #f7f5f5;
    padding: 1em;
  }
  .bar {
    & > * {
      display: inline-block;
      margin-right: 1em;
    }
    .el-input {
      width: 6em;
      .el-input__inner {
        padding: 0 8px;
        &::-ms-input-placeholder,
        &::-webkit-input-placeholder {
          text-align: center;
        }
      }
    }
    .el-checkbox-group .el-checkbox {
      margin-right: 0.6em;
      .el-checkbox__label {
        padding-left: 0.2em;
      }
    }
  }
}
</style>