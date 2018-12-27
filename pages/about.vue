<template>
  <div>
    <logo/>
    <p align="center">
      这是一个使用<b> vue-ueditor-wrap </b>的 SSR 项目。
    </p>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>
