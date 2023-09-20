<template>
  <div class="lf visitorSource ml mtt">
    <title-h3 :titlemsg="titlemsg"></title-h3>
    <div class="visitorSource-wrap">
      <div class="visitorSource-inner">
        <ul class="event">
          <li>2023-06-09 10:01:07 >> 反应罐压力过高</li>
          <li>2023-08-11 17:43:52 >> 反应罐温度过高</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import title from '../title';
export default {
  name: 'abnormal',
  data() {
    return {
      titlemsg: '设备异常事件'
    }
  },
  mounted() {
  },
  methods: {
  },
  components: {
    'title-h3': title
  }
}

</script>

<style scoped>
.visitorSource {
  height: 3.99rem;
  width: 24.3%;
}

.visitorSource-wrap {
  height: 3.44rem;
  width: 100%;
  background: #002d6a;
  border-radius: 4px;
  padding-top: .09rem
}

.visitorSource-inner {
  height: 3.34rem;
  width: 4.46rem;
  margin: 0 auto;
  background-color: #003885;
  border-radius: 4px;
}

.event {
  color: white;
}</style>

