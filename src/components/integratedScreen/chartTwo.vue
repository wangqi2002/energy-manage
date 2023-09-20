<template>
    <div class="lf flowPre ml">
        <title-h3 :titlemsg="titlemsg"></title-h3>
        <div class="flowPre-wrap">
            <div class="flowPre-inner">
                <div class="charts">
                    <div id="chart_2" style="width:100%;height:100%;margin: 0 auto;"></div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import title from '../title';
export default {
    name: 'chartTwo',
    data() {
        return {
            titlemsg: '能耗占比图'
        }
    },
    mounted() {
        this.drawLine();
    },
    methods: {
        drawLine() {
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById('chart_2'))
            // 绘制图表
            // 指定图表的配置项和数据
            let option = {
                legend: {
                    right: 10,
                    top: 'middle',
                    orient: 'vertical',
                    height: 200,
                    itemGap: 10,
                    itemWidth: 14.5,
                    itemHeight: 14.5,
                    icon: "circle",
                    textStyle: {
                        color: 'rgba(255, 255, 255, 1)'
                    }
                },
                tooltip: {
                    trigger: 'item'
                },
                series: [
                    {
                        name: 'From',
                        type: 'pie',
                        radius: ['40%', '65%'],
                        center: ["37%", "50%"],
                        avoidLabelOverlap: false,
                        itemStyle: {
                            borderRadius: 10,
                            borderColor: '#003885',
                            borderWidth: 2
                        },
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: 16,
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            { value: 1048, name: '主车间' },
                            { value: 735, name: '1号车间' },
                            { value: 580, name: '2号车间' },
                            { value: 484, name: '公用车间' },
                            { value: 300, name: '办公及其他' }
                        ]
                    }
                ]
            };
            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
            window.addEventListener('resize', function () {
                myChart.resize();
            });
        }
    },
    components: {
        'title-h3': title
    }
}

</script>
  
<style scoped>
.flowPre {
    height: 3.99rem;
    width: 21%;
}

.flowPre-wrap {
    height: 3.44rem;
    width: 100%;
    background: #002d6a;
    border-radius: 4px;
    padding-top: .09rem
}

.flowPre-inner {
    height: 3.34rem;
    width: 100%;
    margin: 0 auto;
    background-color: #003885;
    border-radius: 4px;
}

.charts {
    width: 100%;
    height: 100%;
}
</style>
  