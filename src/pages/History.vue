<template>
    <v-app id="inspire" @keydown="keydown($event)">
        <v-toolbar fixed app>
            <v-btn icon @click="back();">
                <v-icon>arrow_back</v-icon>
            </v-btn>
            <v-toolbar-title>{{T('历史记录')}}</v-toolbar-title>
        </v-toolbar>
        <v-content>
            <v-layout column wrap>
                <v-card v-for="result in results">
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
            </v-layout>
            <v-btn @click="deleteAll" fab dark color="red" style="position:fixed; right:10px; bottom:10px;">
                <v-icon dark>delete</v-icon>
            </v-btn>
        </v-content>
    </v-app>
</template>

<script>
export default {
    data() {
        return {
            results: this.getStore("results") || []
        };
    },
    methods: {
        deleteAll() {
            this.setStore("results", []);
            this.results = [];
        }
    },
    mounted() {},
    destroyed() {},
    props: {}
};
</script>