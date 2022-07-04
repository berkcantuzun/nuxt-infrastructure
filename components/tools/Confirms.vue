<template>
  <div>
    <el-dialog :visible.sync="active">

        <div>
          <div class="alert-icon" style="color: rgb(149 180 255)">
            <i class='el-icon-info'></i>
          </div>
          <h3 class="not-margin"> {{ $l("Hata") }} </h3>
        </div>
        <p class="text-center">
          {{ content }}
        </p>


        <div class="con-footer">
          <el-button @click="Yes" success >
            {{ $l("Evet") }}
          </el-button>&nbsp;&nbsp;&nbsp;
          <el-button @click="No"  danger >
            {{ $l("Hayır") }}
          </el-button>
        </div>

    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Confirms",
  data() {
    return {
      active: false,
      title: '',
      content: '',
      options: {
        labelOk: 'Yes',
        labelNo: 'No',
      },
      callback: null,
    }
  },
  methods: {
    Yes() {
      this.active = false;
      this.callback(true);
    },
    No() {
      this.active = false;
      this.callback(false);
    }
  },
  created() {
    this.$bus.$on('s-confirm', (data) => {
      this.active = true;
      this.content = data.content;
      this.title = data.title;
      this.callback = data.callback;
      if (data.hasOwnProperty("options")) {
        let properties = data.options;
        this.options.labelOk = properties.labelOk || "Yes";
        this.options.labelNo = properties.labelNo || "No";
      }
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
.con-footer{
  display: flex;
  width: max-content;
  margin: auto;
}

</style>
