<template>
    <div id="privacy-protocol">
        <h1 class="title">开发者导航（中国）隐私协议</h1>
        <div class="content">
            <h1>概述</h1>
            <p>感谢您访问 开发者导航（中国），请在使用之前明确本协议内容。</p>
            <h1>我们如何收集您的信息？</h1>
            <p>我们会避免收集您的任何信息，但为了更好的为您提供服务并促进我们的成长。我们可能会匿名收集您感兴趣的内容不包括私密信息。</p>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'PrivacyProtocol',
    methods: {
      goBack () {
        console.log('go back')
      }
    }
  }
</script>

<style scoped lang="scss">
    #privacy-protocol {
        .content {
            text-align: left;
            text-indent: 2rem;
        }
    }
</style>
