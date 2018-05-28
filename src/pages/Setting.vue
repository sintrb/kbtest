<template>
    <v-app id="inspire" @keydown="keydown($event)">
        <v-toolbar fixed app>
            <v-btn icon @click="back();">
                <v-icon>arrow_back</v-icon>
            </v-btn>
            <v-toolbar-title>{{T('数据设置')}}</v-toolbar-title>
        </v-toolbar>
        <v-content>
            <v-card>
                <v-card-text style="text-align:center;">
                    <span :style="{fontSize:codeFontSize + 'px'}">{{T('显示字体大小:{0}', codeFontSize)}}</span>
                    <v-slider v-model="codeFontSize" step="1" min="12" max="50"></v-slider>
                </v-card-text>

            </v-card>
            <v-card>
                <v-card-text style="text-align:center;">
                    <span :style="{fontSize:inputFontSize + 'px'}">{{T('输入字体大小:{0}', inputFontSize)}}</span>
                    <v-slider v-model="inputFontSize" step="1" min="12" max="50"></v-slider>
                </v-card-text>
            </v-card>
        </v-content>
    </v-app>
</template>

<script>
export default {
    data() {
        return {
            codeFontSize: this.getStore('codeFontSize') || 30,
            inputFontSize: this.getStore('inputFontSize') || 20,
        };
    },
    methods: {},
    mounted() {
        let thiz = this;
        this.getTestSets(sets => {
            thiz.testsets = sets;
        });
    },
    destroyed() {
        this.setStore('codeFontSize', this.codeFontSize);
        this.setStore('inputFontSize', this.inputFontSize);
    },
    props: {}
};
</script>