<template>
  <div class="container" @click="clickHandle('test click', $event)">

    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>

    <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div>

    <form class="form-container">
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form>


    <van-button type="default"  @click="tologin">登陆</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>

    <van-button type="default" plain>默认按钮</van-button>
    <van-button type="primary" plain>主要按钮</van-button>
    <van-button type="warning" plain>警告按钮</van-button>
    <van-button type="danger" plain>危险按钮</van-button>

    <van-button size="large">大号按钮</van-button>
    <van-button size="normal">普通按钮</van-button>
    <van-button size="small">小型按钮</van-button>
    <van-button size="mini">迷你按钮</van-button>

    <van-button loading />
    <van-button loading type="primary" />
  </div>
</template>

<script>
import card from '@/components/card'
import {get, post, showModal} from '@/utils/util'
export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {}
    }
  },

  components: {
    card
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    },
    async tologin(){
      const data = {
        denglzh: 'hcf03',
        denglmm: '123456'
      }
      try {
        const info =await post('login', data)
        console.log("===data===" + JSON.stringify(info));
        showModal('成功获取数据',JSON.stringify(info))
      } catch (e) {
        console.log('异常:', '转换异常' )
        showModal('异常',e.msg)

      }
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

</style>
