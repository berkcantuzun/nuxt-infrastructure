<template>
  <div>
  <main class="main">
    <slot/>
  </main>

    <Alerts/>
    <api-error-alert/>
    <Toasts/>
    <Confirms/>
  </div>
</template>

<script>
import Alerts from "../components/tools/Alerts";
import ApiErrorAlert from "../components/tools/api-error-alert";
import Toasts from "../components/tools/Toasts";
import Confirms from "../components/tools/Confirms";
export default {
  name: "BaseLayout",
  components: {Confirms, Toasts, ApiErrorAlert, Alerts}
}
</script>

<style scoped>

</style>
