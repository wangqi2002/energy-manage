<template>
    <div class="lf flowPre ml">
        <title-h3 :titlemsg="titlemsg"></title-h3>
        <div class="flowPre-wrap">
            <div class="flowPre-inner">
                <div class="charts">
                    <div id="chart_4" style="width:100%;height:100%;margin: 0 auto;"></div>
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
            titlemsg: 'XXXXXXXXXXX'
        }
    },
    mounted() {
        this.drawLine();
    },
    methods: {
        drawLine() {
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById('chart_4'))
            // 绘制图表
            // 指定图表的配置项和数据
            let option = {
                tooltip: {
                    trigger: 'item'
                },
                radar: {
                    radius: "50%",
                    center: ["50%", "50%"],
                    nameGap: 5,
                    indicator: [
                        { name: 'Sales', max: 6500 },
                        { name: 'Administration', max: 16000 },
                        { name: 'Information Technology', max: 30000 },
                        { name: 'Customer Support', max: 38000 },
                        { name: 'Development', max: 52000 },
                        { name: 'Marketing', max: 25000 }
                    ],
                },
                series: [
                    {
                        name: 'Budget vs spending',
                        type: 'radar',
                        data: [
                            {
                                value: [4200, 3000, 20000, 35000, 50000, 18000],
                                name: 'Allocated Budget'
                            },
                            {
                                value: [5000, 14000, 28000, 26000, 42000, 21000],
                                name: 'Actual Spending'
                            }
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
    height: 3.4rem;
    width: 100%;
    background: #002d6a;
    border-radius: 4px;
    padding-top: .09rem
}

.flowPre-inner {
    height: 100%;
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
  