<template>
  <div>
    <el-dialog  :visible.sync="active">
        <div>
          <div class="alert-icon danger">
            <i class='el-icon-error'></i>
          </div>
          <h3 class="not-margin"> {{ $l("Hata") }} </h3>
        </div>


        <div v-html="response">

        </div>

    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "api-error-alert",
  data() {
    return {
      active: false,
      response: ""
    }
  },
  created() {
    this.$bus.$on('api-error-alert', (param) => {
      this.active = true;
      this.response = param;
    });
  }
}
</script>

<style scoped lang="scss">

.alert-icon {
  text-align: center;
  font-size: 85px;
  line-height: 1;

  &.info {
    color: rgb(var(--vs-primary));

  }

  &.warning {
    color: rgb(var(--vs-warn));
  }

  &.success {
    color: rgb(var(--vs-success));
  }

  &.danger {
    color: rgb(var(--vs-danger));
  }
}

.not-margin {
  text-align: center;
  font-size: 26px;
  margin: 0;
}

.con-content {
  margin: -20px 0 -10px 0;
}

</style>
