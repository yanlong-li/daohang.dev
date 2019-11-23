<template>
    <div id="team">
        <h1 class="title">团队介绍</h1>
        <div class="description">
            <p>我们的团队遍布全球，希望你也是其中一员。</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Team',
  data () {
    return {
      teamer: [
        {
          nickname: 'Yanlongli',
          email: 'ahlyl94@gmail.com',
          blog: 'https://blog.yanlongli.com'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
    #team {
        .title{
            margin-bottom: 2rem;
        }
        .description {
            text-indent: 2em;
            p{
                margin-bottom: 1rem;
            }
        }
    }
</style>
