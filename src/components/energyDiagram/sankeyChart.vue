<template>
  <div>
    <div class="lf screen-wrap ml mt12">
      <div class="tits-h3 clearfix">
        <div class="lf">
          <div class="clearfix mlnumber">
            <span class="lf">From：</span>
            <div class="pr lf">
              <input class="input-txt" type="date" v-model="bgntime" />
            </div>

            <span class="lf mlnewnum">To：</span>
            <div class="pr lf">
              <input class="input-txt" type="date" v-model="endtime" />
            </div>
            <span class="pa searchs" @click="search_handler()"></span>
          </div>
        </div>
      </div>

      <div class="area-wrap">
        <div class="area-inner">
          <div id="myChartSankey" style="width:100%;height:100%;"></div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>

export default {
  name: 'unit1Steam',
  data() {
    return {
      bgntime: '',
      endtime: '',
      sankey_data: []
    }
  },
  watch: {
    sankey_data(newVal, oldVal) {
      this.drawBar();
    }
  },
  mounted() {

  },
  methods: {
    search_handler() {
      var _self = this;
      console.log(_self);
      $.ajax({
        url: this.baseURL.serverSrc + 'sankey',  // 后端地址
        type: 'post',
        data: { 'bgntime': this.bgntime, 'endtime': this.endtime },
        dataType: 'json',
        success: function (data) { //后端返回的json数据（此处data为json对象）
          console.log('成功');
          _self.sankey_data = data;

        },
        error: function () {
          alert('异常')
        }
      });
      // this.drawBar();
    },
    drawBar() {

      let myChart = this.$echarts.init(document.getElementById('myChartSankey'));
      // 绘制图表
      let option = {
        title: {
          subtext: '能源桑基图',
          left: 'center'
        },
        backgroundColor: "#FFFFFF",
        series: [
          {
            type: "sankey",
            left: 50.0,
            top: 20.0,
            right: 150.0,
            bottom: 25.0,
            data: [
              {
                "name": "device1",
                "itemStyle": {
                  "normal": {
                    "color": "#f18bbf",
                    "borderColor": "#f18bbf"
                  }
                }
              },
              {
                "name": "device2",
                "itemStyle": {
                  "normal": {
                    "color": "#0078D7",
                    "borderColor": "#0078D7"
                  }
                }
              },
              {
                "name": "device3",
                "itemStyle": {
                  "normal": {
                    "color": "#3891A7",
                    "borderColor": "#3891A7"
                  }
                }
              },
              {
                "name": "device4",
                "itemStyle": {
                  "normal": {
                    "color": "#986F0B",
                    "borderColor": "#986F0B"
                  }
                }
              },
              {
                "name": "device5",
                "itemStyle": {
                  "normal": {
                    "color": "#3C8EA4",
                    "borderColor": "#3C8EA4"
                  }
                }
              },
              {
                "name": "device6",
                "itemStyle": {
                  "normal": {
                    "color": "#4F82BE",
                    "borderColor": "#4F82BE"
                  }
                }
              },
              {
                "name": "device7",
                "itemStyle": {
                  "normal": {
                    "color": "#D38017",
                    "borderColor": "#D38017"
                  }
                }
              },
              {
                "name": "device8",
                "itemStyle": {
                  "normal": {
                    "color": "#A8CDD7",
                    "borderColor": "#A8CDD7"
                  }
                }
              },
              {
                "name": "device9",
                "itemStyle": {
                  "normal": {
                    "color": "#7A072D",
                    "borderColor": "#7A072D"
                  }
                }
              },
              {
                "name": "device10",
                "itemStyle": {
                  "normal": {
                    "color": "#859599",
                    "borderColor": "#859599"
                  }
                }
              },
              {
                "name": "unit1_power",
                "itemStyle": {
                  "normal": {
                    "color": "#4D291C",
                    "borderColor": "#4D291C"
                  }
                }
              },
              {
                "name": "unit2_power",
                "itemStyle": {
                  "normal": {
                    "color": "#009c7a",
                    "borderColor": "#009c7a"
                  }
                }
              },
              {
                "name": "power",
                "itemStyle": {
                  "normal": {
                    "color": "#4F82BE",
                    "borderColor": "#4F82BE"
                  }
                }
              },
              {
                "name": "unit1_water",
                "itemStyle": {
                  "normal": {
                    "color": "#434a4d",
                    "borderColor": "#434a4d"
                  }
                }
              },
              {
                "name": "unit2_water",
                "itemStyle": {
                  "normal": {
                    "color": "#4a679c",
                    "borderColor": "#4a679c"
                  }
                }
              },
              {
                "name": "water",
                "itemStyle": {
                  "normal": {
                    "color": "#4ebe80",
                    "borderColor": "#4ebe80"
                  }
                }
              },
              {
                "name": "unit1_gas",
                "itemStyle": {
                  "normal": {
                    "color": "#05354d",
                    "borderColor": "#05354d"
                  }
                }
              },
              {
                "name": "unit2_gas",
                "itemStyle": {
                  "normal": {
                    "color": "#362d9c",
                    "borderColor": "#362d9c"
                  }
                }
              },
              {
                "name": "gas",
                "itemStyle": {
                  "normal": {
                    "color": "#b8be4f",
                    "borderColor": "#b8be4f"
                  }
                }
              }
            ],
            links: [
              {
                "source": "unit1_power",
                "target": "device1",
                "value": this.sankey_data[0]["total_power"] * 0.092
              },
              {
                "source": "unit1_power",
                "target": "device2",
                "value": this.sankey_data[0]["total_power"] * 0.091
              },
              {
                "source": "unit1_power",
                "target": "device3",
                "value": this.sankey_data[0]["total_power"] * 0.091
              },
              {
                "source": "unit1_power",
                "target": "device4",
                "value": this.sankey_data[0]["total_power"] * 0.090
              },
              {
                "source": "unit1_power",
                "target": "device5",
                "value": this.sankey_data[0]["total_power"] * 0.093
              },
              {
                "source": "unit2_power",
                "target": "device6",
                "value": this.sankey_data[0]["total_power"] * 0.094
              },
              {
                "source": "unit2_power",
                "target": "device7",
                "value": this.sankey_data[0]["total_power"] * 0.097
              },
              {
                "source": "unit2_power",
                "target": "device8",
                "value": this.sankey_data[0]["total_power"] * 0.099
              },
              {
                "source": "unit2_power",
                "target": "device9",
                "value": this.sankey_data[0]["total_power"] * 0.095
              },
              {
                "source": "unit2_power",
                "target": "device10",
                "value": this.sankey_data[0]["total_power"] * 0.098
              },
              {
                "source": "power",
                "target": "unit1_power",
                "value": this.sankey_data[0]["total_power"] * 0.49
              },
              {
                "source": "power",
                "target": "unit2_power",
                "value": this.sankey_data[0]["total_power"] * 0.48
              },
              {
                "source": "unit1_water",
                "target": "device1",
                "value": this.sankey_data[0]["total_water"] * 0.092
              },
              {
                "source": "unit1_water",
                "target": "device2",
                "value": this.sankey_data[0]["total_water"] * 0.091
              },
              {
                "source": "unit1_water",
                "target": "device3",
                "value": this.sankey_data[0]["total_water"] * 0.091
              },
              {
                "source": "unit1_water",
                "target": "device4",
                "value": this.sankey_data[0]["total_water"] * 0.090
              },
              {
                "source": "unit1_water",
                "target": "device5",
                "value": this.sankey_data[0]["total_water"] * 0.093
              },
              {
                "source": "unit2_water",
                "target": "device6",
                "value": this.sankey_data[0]["total_water"] * 0.094
              },
              {
                "source": "unit2_water",
                "target": "device7",
                "value": this.sankey_data[0]["total_water"] * 0.097
              },
              {
                "source": "unit2_water",
                "target": "device8",
                "value": this.sankey_data[0]["total_water"] * 0.099
              },
              {
                "source": "unit2_water",
                "target": "device9",
                "value": this.sankey_data[0]["total_water"] * 0.095
              },
              {
                "source": "unit2_water",
                "target": "device10",
                "value": this.sankey_data[0]["total_water"] * 0.098
              },
              {
                "source": "water",
                "target": "unit1_water",
                "value": this.sankey_data[0]["total_water"] * 0.49
              },
              {
                "source": "water",
                "target": "unit2_water",
                "value": this.sankey_data[0]["total_water"] * 0.48
              },
              {
                "source": "unit1_gas",
                "target": "device1",
                "value": this.sankey_data[0]["total_gas"] * 0.092
              },
              {
                "source": "unit1_gas",
                "target": "device2",
                "value": this.sankey_data[0]["total_gas"] * 0.091
              },
              {
                "source": "unit1_gas",
                "target": "device3",
                "value": this.sankey_data[0]["total_gas"] * 0.091
              },
              {
                "source": "unit1_gas",
                "target": "device4",
                "value": this.sankey_data[0]["total_gas"] * 0.090
              },
              {
                "source": "unit1_gas",
                "target": "device5",
                "value": this.sankey_data[0]["total_gas"] * 0.093
              },
              {
                "source": "unit2_gas",
                "target": "device6",
                "value": this.sankey_data[0]["total_gas"] * 0.094
              },
              {
                "source": "unit2_gas",
                "target": "device7",
                "value": this.sankey_data[0]["total_gas"] * 0.097
              },
              {
                "source": "unit2_gas",
                "target": "device8",
                "value": this.sankey_data[0]["total_gas"] * 0.099
              },
              {
                "source": "unit2_gas",
                "target": "device9",
                "value": this.sankey_data[0]["total_gas"] * 0.095
              },
              {
                "source": "unit2_gas",
                "target": "device10",
                "value": this.sankey_data[0]["total_gas"] * 0.098
              },
              {
                "source": "gas",
                "target": "unit1_gas",
                "value": this.sankey_data[0]["total_gas"] * 0.49
              },
              {
                "source": "gas",
                "target": "unit2_gas",
                "value": this.sankey_data[0]["total_gas"] * 0.48
              }
            ],
            lineStyle: {
              color: "source",
              curveness: 0.5
            },
            itemStyle: {
              color: "#1f77b4",
              borderColor: "#1f77b4"
            },
            label: {
              color: "rgba(0,0,0,0.7)",
              fontFamily: "Arial",
              fontSize: 16
            }
          }],
        tooltip: {
          trigger: "item"
        }
      };
      myChart.setOption(option);
    }
  },
  components: {

  }
}

</script>
<style scoped>
.screen-wrap .tits-h3 {
  width: 100%;
  height: 0.6rem;
  line-height: 0.6rem;
  background-color: #0e4498;
  font-size: 0.14rem;
  color: #fff;
  border-radius: 0.04rem;
  position: relative;
  margin-bottom: 0.02rem;
}

.screen-wrap {
  height: 7.0rem;
  width: 96%;
}

.screen-wrap .searchs {
  width: 16px;
  height: 16px;
  background: url(../../../static/images/ss.png) no-repeat;
  position: absolute;
  margin-left: 0.3rem;
  top: .17rem
}

.com-sel {
  width: .66rem;
  height: .28rem;
  line-height: .28rem;
  text-align: center;
  border: solid 1px #fff;
  border-radius: 4px;
  margin-top: .06rem
}

.customer-person {
  margin-left: .16rem;
}

.customer-time {
  margin-left: .06rem
}

.screen-wrap .newnotic-inner {
  height: 3.2rem;
  width: 98%;
  margin: 0 auto;
  border: solid 1px #3b72ee;
  border-radius: 4px;
}

.screen-wrap .newnotic-inner ul li {
  height: .62rem;
  border-bottom: solid 1px #1c4aa3;
  margin: 0 .13rem
}

.screen-wrap .newnotic-inner .top-content {
  padding-top: .15rem;
  color: #81b2ff;
}

.screen-wrap .newnotic-inner .top-content h3 {
  font-size: .16rem;
  font-weight: 100
}

.screen-wrap .newnotic-inner ul li .tipnews {
  display: none;
}

.screen-wrap .newnotic-inner ul li:nth-child(1) {
  margin-top: 0.065rem
}

.screen-wrap .newnotic-inner .details {
  color: #81b2ff
}

.screen-wrap .newnotic-inner .details:hover {
  color: #ffd452
}

.screen-wrap .newnotic-inner .bottom-content {
  color: #1463de;
  margin-top: 0.05rem;
  height: .2rem;
  overflow: hidden
}

.screen-wrap .bottom-content p span {
  margin-right: 0.1rem
}

.screen-wrap .mlnumber {
  margin-left: 1.2rem;
}

.screen-wrap .input-txt {
  margin-left: .12rem;
  width: 1.54rem;
  padding-left: .08rem;
  height: .28rem;
  border: solid 1px #fff;
  border-radius: 4px;
  margin-top: .04rem;
  background-color: #ffffff;
}

.screen-wrap .mlnewnum {
  margin-left: .4rem
}

.newnotice-wraps {
  height: 6.5rem;
  width: 100%;
  background: #002d6a;
  border-radius: 4px;
  padding-top: .075rem;
  overflow: hidden;
}

.area {
  height: 8rem;
  width: 96%;
  margin-top: 0.12rem;
  margin-left: 0.5rem
}

.area-wrap {
  height: 7rem;
  width: 100%;
  background: #002d6a;
  border-radius: 4px;
  padding-top: .09rem
}

.area-inner {
  width: 16rem;
  height: 6.8rem;
  background-color: #173881;
  border-radius: 4px;
  margin: 0 auto;
}

.mtt {
  margin-top: 0.12rem;
}
</style>

