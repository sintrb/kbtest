<template>
    <v-app id="inspire" @keydown="keydown($event)">
        <v-toolbar fixed app>
            <v-btn icon @click="back();">
                <v-icon>arrow_back</v-icon>
            </v-btn>
            <v-toolbar-title>{{T('关于应用')}}</v-toolbar-title>
        </v-toolbar>
        <v-content>
            <v-container fluid fill-height>
                <v-layout fluid justify-center align-center style="flex-direction: row;">
                    <v-card fluid style="flex-grow:1">
                        <v-card-media src="https://cdn-qn.huaeb.com/sellmall/20180528/FuHW6ao1hxMOPITJAaoAyIfZluBC.jpg" height="300px">
                        </v-card-media>
                        <v-card-title primary-title>
                            <div>
                                <h3 class="headline mb-0">FOR 冉小娟</h3>
                            </div>
                        </v-card-title>
                        <v-card-actions>
                            <v-btn flat icon color="blue lighten-2">
                                <v-icon>thumb_up</v-icon>
                            </v-btn>

                            <v-btn flat icon color="red lighten-2">
                                <v-icon>thumb_down</v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>