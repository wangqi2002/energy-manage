<template>
    <div class="lf flowPre ml">
        <title-h3 :titlemsg="titlemsg"></title-h3>
        <div class="flowPre-wrap">
            <div class="flowPre-inner">
                <div class="charts">
                    <div id="chart_3" style="width:100%; height:100%;margin: 0 auto;"></div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import title from '../title';
export default {
    name: 'flowPrediction',
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
            let myChart = this.$echarts.init(document.getElementById('chart_3'))
            // 绘制图表
            // 指定图表的配置项和数据
            var option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'line',
                        lineStyle: {
                            color: 'rgba(0,0,0,0.2)',
                            width: 1,
                            type: 'solid'
                        }
                    }
                },
                legend: {
                    itemGap: 15,
                    itemWidth: 14.5,
                    itemHeight: 14.5,
                    icon: "circle",
                    textStyle: {
                        color: 'rgba(255, 255, 255, 1)'
                    },
                    data: ['DQ', 'TY', 'SS']
                },
                singleAxis: {
                    top: 50,
                    bottom: 50,
                    axisTick: {},
                    axisLabel: {
                        //坐标轴 标签
                        show: true, //是否显示
                        color: '#B5B5C5'
                    },
                    type: 'time',
                    axisPointer: {
                        animation: true,
                        label: {
                            show: true
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            type: 'dashed',
                            opacity: 0.2
                        }
                    }
                },
                series: [
                    {
                        type: 'themeRiver',
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 20,
                                shadowColor: 'rgba(0, 0, 0, 0.8)'
                            }
                        },
                        label: {
                            show: false
                        },
                        data: [
                            ['2015/11/08', 10, 'DQ'],
                            ['2015/11/09', 12, 'DQ'],
                            ['2015/11/10', 15, 'DQ'],
                            ['2015/11/11', 18, 'DQ'],
                            ['2015/11/12', 22, 'DQ'],
                            ['2015/11/13', 19, 'DQ'],
                            ['2015/11/14', 28, 'DQ'],
                            ['2015/11/15', 32, 'DQ'],
                            ['2015/11/16', 35, 'DQ'],
                            ['2015/11/17', 30, 'DQ'],
                            ['2015/11/18', 40, 'DQ'],
                            ['2015/11/19', 45, 'DQ'],
                            ['2015/11/08', 18, 'TY'],
                            ['2015/11/09', 36, 'TY'],
                            ['2015/11/10', 37, 'TY'],
                            ['2015/11/11', 22, 'TY'],
                            ['2015/11/12', 24, 'TY'],
                            ['2015/11/13', 26, 'TY'],
                            ['2015/11/14', 34, 'TY'],
                            ['2015/11/15', 21, 'TY'],
                            ['2015/11/16', 18, 'TY'],
                            ['2015/11/17', 45, 'TY'],
                            ['2015/11/18', 32, 'TY'],
                            ['2015/11/19', 35, 'TY'],
                            ['2015/11/08', 11, 'SS'],
                            ['2015/11/09', 15, 'SS'],
                            ['2015/11/10', 18, 'SS'],
                            ['2015/11/11', 24, 'SS'],
                            ['2015/11/12', 20, 'SS'],
                            ['2015/11/13', 22, 'SS'],
                            ['2015/11/14', 35, 'SS'],
                            ['2015/11/15', 50, 'SS'],
                            ['2015/11/16', 54, 'SS'],
                            ['2015/11/17', 59, 'SS'],
                            ['2015/11/18', 64, 'SS'],
                            ['2015/11/19', 70, 'SS'],
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
    width: 24.3%;
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
    height: 100%;
    width: 100%;
}
</style>
  