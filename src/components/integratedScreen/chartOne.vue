<template>
    <div class="lf flowPre ml">
        <title-h3 :titlemsg="titlemsg"></title-h3>
        <div class="flowPre-wrap">
            <div class="flowPre-inner">
                <div class="charts">
                    <div id="chart_1" style="width:100%;height:100%;margin: 0 auto;"></div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import title from '../title';
export default {
    name: 'chartOne',
    data() {
        return {
            titlemsg: '人员流量图',
            count: 1,
            data: [14, 23, 10, 26, 9, 34, 25]
        }
    },
    mounted() {
        this.drawLine();
    },
    methods: {
        drawLine() {
            let _self = this;
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById('chart_1'))
            // 绘制图表
            // 指定图表的配置项和数据
            let option = {
                backgroundColor: 'rgba(12, 12, 52, 0)',
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#000000'
                        }
                    }
                },
                grid: {
                    left: '5%',
                    right: '5%',
                    top: '10%',
                    bottom: '15%',
                    containLabel: false
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        axisLabel: {
                            //坐标轴 标签
                            show: true, //是否显示
                            color: '#B5B5C5'
                        },
                        data: ['0', '2', '4', '6', '8', '10']
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLabel: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: 'rgba(44, 78, 175, 0.8)'
                            }
                        }
                    }
                ],
                series: [
                    {
                        name: 'name',
                        type: 'line',
                        smooth: true,
                        lineStyle: {
                            width: 2,
                            color: 'rgb(9,247,173, 1)'
                        },
                        showSymbol: false,
                        areaStyle: {
                            opacity: 0.7,
                            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: 'rgb(9,247,173, 1)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgb(9,247,173, 0)'
                                }
                            ])
                        },
                        data: _self.data
                    }
                ]
            };
            setInterval(function () {
                if (_self.count > 10) {
                    _self.count = 0
                }
                _self.data.shift();
                _self.data.push(_self.getRandomInt(10 * _self.count, 20 * _self.count));
                myChart.setOption({
                    series: [
                        {
                            data: _self.data
                        }
                    ]
                });
                _self.count++
            }, 2000);
            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
            window.addEventListener('resize', function () {
                myChart.resize();
            });
        },

        // 得到一个两数之间的随机整数
        getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
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
  