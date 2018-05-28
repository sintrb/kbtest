<template>
    <v-app id="inspire" @keydown="keydown($event)">
        <v-toolbar fixed app>
            <v-btn icon @click="back();">
                <v-icon>arrow_back</v-icon>
            </v-btn>
            <v-toolbar-title>{{T('键盘测试')}}</v-toolbar-title>
        </v-toolbar>
        <v-content>
            <v-container fluid fill-height v-if="testing">
                <v-layout justify-center align-center style="flex-direction: column;">
                    <div class="text-xl-center mx-auto">
                        <span style="font-size:30px;">{{testing.code}}</span>
                    </div>
                    <div class="text-xl-center mx-auto" style="border:1px solid #eee; min-width:200px; height:32px; text-align:center;">
                        <span style="font-size:20px;" v-for="c in testing.inputs">{{c}}</span>
                    </div>
                </v-layout>
            </v-container>
            <v-container fluid fill-height v-if="!testing">
                <div class="text-xs-center mx-auto">
                    <v-btn color="primary" @click="startTest()">{{T("开始")}}
                        <v-icon dark right>keyboard</v-icon>
                    </v-btn>
                </div>
            </v-container>
        </v-content>
        <v-footer app class="text-xs-center">
            <span v-if="testing">{{T("时间 {0} 正确 {1} 错误 {2}", time, testing.correct, testing.mistake)}} </span>
        </v-footer>
    </v-app>
</template>

<script>
export default {
    data() {
        return {
            time: "",
            tests: ["1234", "7348", "0948"],
            testing: null
        };
    },
    methods: {
        ticks() {
            let offtime = Math.floor((Date.now() - this.starttm) / 1000);
            let min = Math.floor(offtime / 60);
            let sec = offtime % 60;
            this.time = new String(
                (min < 10 ? "0" : "") + min + ":" + (sec < 10 ? "0" : "") + sec
            );
        },
        keydown(event) {
            if (this.testing) {
                console.log(event);
                if (event.keyCode == 13) {
                    // Enter
                    this.onInput(this.testing.inputs.join(""));
                    this.testing.inputs = [];
                } else {
                    // Char
                    var char = String.fromCharCode(event.keyCode);
                    this.testing.inputs.push(char);
                }
            }
        },
        startTest() {
            // 开始测试
            this.testing = {
                correct: 0,
                mistake: 0,
                code: "2323",
                inputs: [],
                result: []
            };
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
        }
    },
    mounted() {
        let thiz = this;

        this.starttm = Date.now();
        this.ticktm = setInterval(this.ticks, 1000);
        this.ticks();

        window.onkeydown = function(event) {
            thiz.keydown(event);
        };
    },
    destroyed() {
        clearInterval(this.ticktm);
        window.onkeydown = null;
    },

    props: {}
};
</script>