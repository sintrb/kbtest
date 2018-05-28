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
                <v-container fluid style="min-height: 0;" grid-list-lg>
                    <v-layout row wrap>
                        <v-flex xs12 v-for="set in testsets">
                            <v-card color="blue darken-2" class="white--text">
                                <v-card-title primary-title>
                                    <div class="headline">{{set.name}}</div>
                                    <!-- <div></div> -->
                                </v-card-title>
                                <v-card-actions>
                                    <v-btn flat dark>
                                        {{T("{0} 条数据", set.codes.length)}}
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card>
            <v-btn @click="addSet" fab dark color="red" style="position:fixed; right:10px; bottom:10px;">
                <v-icon dark>add</v-icon>
            </v-btn>
        </v-content>
    </v-app>
</template>

<script>
export default {
    data() {
        return {
            testsets: [],
        };
    },
    methods: {
        addSet(){
            this.testsets.push({
                name: "新测试",
                codes: [],
            });
        }
    },
    mounted() {
        let thiz = this;
        this.getTestSets(sets => {
            thiz.testsets = sets;
        });
    },
    destroyed() {},
    props: {}
};
</script>