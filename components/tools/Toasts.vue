<template>
  <div>
  </div>

</template>

<script>
export default {
  name: "Toasts",
  methods: {
    openNotification(position, type, icon, title, text, duration=0) {
      this.$notify({
        title: title,
        message: text,
        position:position,
        duration:duration,
        type:type,
        iconClass:icon,
        customClass:type
      });
    },
    hideNotification(){
      let element = document.getElementsByClassName("el-notification")
      console.log(element)
      for(let i =0; i < element.length; i++){
        element[i].remove()
      }

    }
  },
  created() {

    this.$bus.$on('s-toast', (param) => {
      this.openNotification(param.position, param.type, param.icon,param.title,param.text,param.duration)
    });
    this.$bus.$on('s-toast-hide', (param) => {
      this.hideNotification()
    });
  }
}
</script>

<style lang="scss">
.el-notification{
  &.success{
    background: #67C23A;
    color: #fff;
    *{
      color:#fff
    }
  }
  &.warning{
    background: #E6A23C;
    color: #fff;
    *{
      color:#fff
    }
  }
  &.danger{
    background: #F56C6C;
    color: #fff;
    *{
      color:#fff
    }
  }
  &.info{
    background: #909399;
    color: #fff;
    *{
      color:#fff
    }
  }
}
</style>
