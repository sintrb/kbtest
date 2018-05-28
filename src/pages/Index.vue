<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" :fixed="true" :clipped="true">
      <v-list dense>
        <v-list-tile @click="push('/setting')">
          <v-list-tile-action>
            <v-icon>data_usage</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{T("应用设置")}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <!-- <v-list-tile @click="push('/testsets')">
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{T("数据设置")}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile> -->
        <v-list-tile @click="push('/history')">
          <v-list-tile-action>
            <v-icon>history</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{T("历史记录")}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="push('/about')">
          <v-list-tile-action>
            <v-icon>info</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{T("关于应用")}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>{{T('键盘练习器')}}</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height v-if="testing">
        <v-layout justify-center align-center style="flex-direction: column;">
          <div class="text-xl-center mx-auto">
            <span :style="{fontSize:codeFontSize + 'px'}">{{testing.code}}</span>
          </div>
          <div class="text-xl-center mx-auto" style="border:1px solid #eee; min-width:200px; text-align:center;">
            <span style="padding:5px; display:inline-block;" :style="{fontSize:inputFontSize + 'px'}">{{testing.inputs.join("") || "&nbsp;"}}</span>
          </div>
          <div style="height:80px;"></div>
          <v-btn color="secondary" @click="stopTest()">{{T("停止测试")}}
            <v-icon dark right>stop</v-icon>
          </v-btn>
        </v-layout>
      </v-container>
      <v-container fluid fill-height v-if="result">
        <v-layout column wrap>
          <v-card>
            <v-card-title>
              <h4>{{ result.time }}</h4>
            </v-card-title>
            <v-divider></v-divider>
            <v-list dense>
              <v-list-tile>
                <v-list-tile-content>数据</v-list-tile-content>
                <v-list-tile-content class="align-end">{{result.testset.name}}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>时间</v-list-tile-content>
                <v-list-tile-content class="align-end">{{result.testtime.name}}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>总数量</v-list-tile-content>
                <v-list-tile-content class="align-end">{{result.correct+result.mistake}}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>正确数</v-list-tile-content>
                <v-list-tile-content class="align-end">{{result.correct}}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>错误数</v-list-tile-content>
                <v-list-tile-content class="align-end">{{result.mistake}}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>正确率</v-list-tile-content>
                <v-list-tile-content class="align-end">{{(result.accuracy||0)*100}}%</v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-card>
          <div class="text-xs-center mx-auto" v-if="testset && testtime">
            <v-btn color="primary" @click="result=null;">{{T("返回")}}
              <!-- <v-icon dark right>arrow_back</v-icon> -->
            </v-btn>
          </div>
        </v-layout>
      </v-container>
      <v-container fluid v-if="!testing && !result">
        <v-layout row wrap>
          <v-flex xs6>
            <v-subheader>{{T('测试时间')}}</v-subheader>
          </v-flex>
          <v-flex xs6>
            <v-select :items="times" v-model="testtime" :item-text='"name"' :label="T('选择')" single-line></v-select>
          </v-flex>

          <v-flex xs6>
            <v-subheader>{{T('测试数据')}}</v-subheader>
          </v-flex>
          <v-flex xs6>
            <v-select :items="testsets" v-model="testset" :item-text='"name"' :label="T('选择')" single-line></v-select>
          </v-flex>

          <v-flex xs6 v-if="testset && testset.type == 'random'">
            <v-subheader>{{T('数据类型')}}</v-subheader>
          </v-flex>
          <v-flex xs6 v-if="testset && testset.type == 'random'">
            <v-select :items="datatypes" v-model="datatype" :item-text='"name"' :label="T('选择')" single-line></v-select>
          </v-flex>

          <div class="text-xs-center mx-auto" v-if="testset && testtime">
            <v-btn color="primary" @click="startTest()">{{T("开始测试")}}
              <v-icon dark right>keyboard</v-icon>
            </v-btn>
          </div>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer app class="text-xs-center">
      <span style="padding:0 5px;" v-if="testing">{{T("时间 {0} 正确 {1} 错误 {2}", time, testing.correct, testing.mistake)}} </span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
    data() {
        return {
            drawer: null,
            time: "",
            testset: null,
            testtime: null,
            testsets: [],
            testing: null,
            result: null, //this.getStore("results")[0],
            testtime: 0,
            times: [
                { name: "10秒", time: 10 },
                { name: "1分钟", time: 60 },
                { name: "5分钟", time: 60 * 5 },
                { name: "10分钟", time: 60 * 10 }
            ],
            datatypes: [
                { name: "整数", type: "int" },
                { name: "小数", type: "float" },
                { name: "身份证", type: "id" }
            ],
            datatype: null,

            codeFontSize: this.getStore("codeFontSize") || 30,
            inputFontSize: this.getStore("inputFontSize") || 20
        };
    },
    methods: {
        ticks() {
            if (this.testing) {
                let offtime = Math.floor(
                    (Date.now() - this.testing.starttime) / 1000
                );
                if (offtime >= this.testtime.time) {
                    let result = this.testing;
                    result.key = new String(Math.floor(Date.now()));
                    result.testtime = this.testtime;
                    result.testset = this.testset;
                    result.time = new Date().toLocaleString();
                    this.result = result;
                    this.testing = null;

                    let results = this.getStore("results") || [];
                    results.push(result);
                    this.setStore("results", results);
                    return;
                } else {
                    let min = Math.floor(offtime / 60);
                    let sec = offtime % 60;
                    this.time = new String(
                        (min < 10 ? "0" : "") +
                            min +
                            ":" +
                            (sec < 10 ? "0" : "") +
                            sec
                    );
                }
            }
        },
        keydown(event) {
            if (this.testing) {
                // console.log(event);
                if (event.keyCode == 13) {
                    // Enter
                    this.onInput(this.testing.inputs.join(""));
                    this.testing.inputs = [];
                } else if (event.keyCode == 8) {
                    // Delete
                    this.testing.inputs.pop();
                } else {
                    // Char
                    var char =
                        typeof event.key == "undefined"
                            ? String.fromCharCode(event.keyCode)
                            : event.key;
                    this.testing.inputs.push(char);
                }
            }
        },
        startTest() {
            // 开始测试
            this.testing = {
                correct: 0,
                mistake: 0,
                code: "",
                inputs: [],
                result: [],
                starttime: Date.now()
            };
            if (this.testset.type == "random") {
                let type = this.datatype.type;
                let choice = function(arr) {
                    return arr[Math.floor(Math.random() * arr.length - 0.01)];
                };
                let to2 = function(v) {
                    return (v <= 10 ? "0" : "") + v;
                };
                let gen = function() {
                    switch (type) {
                        case "int": {
                            return (Math.random() * 100000).toFixed(0);
                        }
                        case "float": {
                            return (Math.random() * 100000)
                                .toFixed(2)
                                .replace(/\.0+$/, "");
                        }
                        case "id": {
                            return (
                                "" +
                                (100000 + Math.floor(Math.random() * 900000)) +
                                (1950 + Math.floor(Math.random() * 50)) +
                                to2(
                                    Math.floor(Math.random() * 12 + 1 - 0.0001)
                                ) +
                                to2(Math.floor(Math.random() * 29 + 1)) +
                                Math.floor(Math.random() * 9000 + 1000 - 0.001)
                            );
                        }
                    }
                };
                let codes = [];
                for (let i = 0; i < 200; ++i) {
                    codes.push(gen());
                }
                this.testset.codes = codes;
                // console.log(codes);
            }
            let defaultset = {
                testtime: this.testtime,
                testset: this.testset,
                datatype: this.datatype
            };
            // console.log(defaultset);
            this.setStore("defaultset", defaultset);
            this.nextCode();
            // console.log(this.testset);
            // console.log(this.testtime);
        },
        nextCode() {
            // 下一个测试
            let nix = Math.floor(
                Math.random() * this.testset.codes.length - 0.0001
            );
            this.testing.code = this.testset.codes[nix];
        },
        stopTest() {
            this.testing = null;
        },
        onInput(code) {
            var tcode = this.testing.code;
            console.log(code);
            this.testing.result.push({
                test: tcode,
                code: code
            });
            if (code == tcode) {
                this.testing.correct++;
            } else {
                this.testing.mistake++;
            }
            let accuracy = this.testing.correct
                ? this.testing.correct /
                  (this.testing.correct + this.testing.mistake)
                : 0;
            this.testing.accuracy = accuracy;
            this.nextCode();
        }
    },
    mounted() {
        let thiz = this;
        this.ticktm = setInterval(this.ticks, 1000);
        this.ticks();

        window.onkeydown = function(event) {
            thiz.keydown(event);
        };

        this.getTestSets(sets => {
            thiz.testsets = sets;
            let defaultset = thiz.getStore("defaultset");
            if (defaultset) {
                thiz.testtime = thiz.times.find(function(a, b) {
                    return (
                        defaultset.testtime &&
                        a.time == defaultset.testtime.time
                    );
                });
                thiz.testset = thiz.testsets.find(function(a, b) {
                    return (
                        defaultset.testset && a.key == defaultset.testset.key
                    );
                });
                thiz.datatype = thiz.datatypes.find(function(a, b) {
                    return (
                        defaultset.datatype &&
                        a.type == defaultset.datatype.type
                    );
                });
            }

            console.log(this.testset);
            console.log(this.testtime);
        });
    },
    destroyed() {
        clearInterval(this.ticktm);
        window.onkeydown = null;
    },

    props: {}
};
</script>