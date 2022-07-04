export default class SComponents {
  constructor($app) {
    this.$app = $app;
  }

  confirm(title, content, callback, options = {}) {
    let data = {
      title: title,
      content: content,
      callback: callback || function () {

      }
    };
    if (Object.keys(options).length > 0) {
      data.options = options;
    }
    this.$app.$bus.$emit("s-confirm", data);
  }

  alert(title, message, type, callback) {


    let param = {
      title: title,
      message: message,
      type: type,
      callback: callback,
    };
    this.$app.$bus.$emit('s-alert', param)
  }

  toastShow(type="", title="", text="", icon="", duration="", position="top-right") {

    let param = {
      type, title, text, icon, duration, position
    }
    this.$app.$bus.$emit("s-toast", param);
  }

  toastHideAll() {
    this.$app.$bus.$emit("s-toast-hide", true);

  }

}
