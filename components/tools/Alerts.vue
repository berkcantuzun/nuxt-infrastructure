<template>
  <div>
    <el-dialog   :visible.sync="active">
       <div>
         <div class="alert-icon " :class="type">
           <i  :class="TypeAlert[type]"></i>

         </div>
         <h3 class="not-margin"> {{ title }} </h3>
       </div>

        <p class="text-center">
          {{ message }}
        </p>


      <template #footer>
        <div class="con-footer">
          <el-button @click="active=false" >
            {{ $l("Tamam") }}
          </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Alerts",
  data() {
    return {
      active: false,
      message: "",
      title: "",
      callback: null,
      type: '',
      TypeAlert: {"info": 'el-icon-info', "warning": 'el-icon-warning', "success": 'el-icon-success', "danger": 'el-icon-error'},
    }
  },
  created() {
    this.$bus.$on('s-alert', (param) => {
      this.title = param.title;
      this.type = param.type || "warning";
      this.message = param.message;
      this.callback = param.callback || null;
      this.active = true;
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
.con-content{
  margin: -20px 0 -10px 0;
}

</style>
