<template>

  <div class="cart">
    <div class="checkout-title">
      <span>购物车</span>
    </div>

    <!-- table -->
    <div class="item-list-wrap">
      <div class="cart-item">
        <div class="cart-item-head">
          <ul>
            <li>商品信息</li>
            <li>商品金额</li>
            <li>商品数量</li>
            <li>总金额</li>
            <li>编辑</li>
          </ul>
        </div>
        <ul class="cart-item-list">
          <li>
            <div class="cart-tab-1">
              <div class="cart-item-check">
                <a href="javascript:void 0" class="item-check-btn">
                </a>
              </div>
              <div class="cart-item-pic">
                <img :src="myurl" alt="烟">
              </div>
              <div class="cart-item-title">
                <div class="item-name">黄鹤楼香烟</div>
              </div>
              <div class="item-include">
                <dl>
                  <dt>赠送:</dt>
                  <dd>打火机</dd>
                </dl>
              </div>
            </div>
            <div class="cart-tab-2">
              <div class="item-price"></div>
            </div>
            <div class="cart-tab-3">
              <div class="item-quantity">
                <div class="select-self select-self-open">
                  <div class="quantity">
                    <a href="javascript:void 0"></a>
                    <input type="text" value="0" disabled>
                    <a href="javascript:void 0"></a>
                  </div>
                </div>
                <div class="item-stock">有货</div>
              </div>
            </div>
            <div class="cart-tab-4">
              <div class="item-price-total">0.00</div>
            </div>
            <div class="cart-tab-5">
              <div class="cart-item-operation">
                <a href="javascript:void 0" class="item-edit-btn">
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- footer -->
    <div class="cart-foot-wrap">
      <div class="cart-foot-l">
        <div class="item-all-check">
          <a href="javascript:void 0">
            <span class="item-check-btn" >

            </span>
            <span>全选</span>
          </a>
        </div>
        <div class="item-all-del">
          <a href="javascript:void 0" class="item-del-btn">
            <span>取消全选</span>
          </a>
        </div>
      </div>
      <div class="cart-foot-r">
        <div class="item-total">
          Item total: <span class="total-price"></span>
        </div>
        <div class="next-btn-wrap">
          <a href="javascrit:;" class="btn btn--red" style="width: 200px">结账</a>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      myurl: '1.jpg'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
