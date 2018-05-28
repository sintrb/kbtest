// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import VueResource from 'vue-resource'
import colors from 'vuetify/es5/util/colors'
// import Base from './base';


Vue.prototype.T = function (text) {
  var rtext = text;
  for (var i = 1; i < arguments.length; ++i) {
    var tg = '{' + (i - 1) + '}';
    var v = arguments[i];
    rtext = rtext.replace(tg, v);
  }
  return rtext;
}

Vue.prototype.push = function (path) {
  if (path === ':back')
    this.back()
  else {
    this.$router.push(path);
  }
}

Vue.prototype.back = function () {
  this.$router.go(-1);
}

Vue.prototype.getStore = function (key) {
  var val = window.localStorage.getItem(key);
  if (typeof (val) == "string") {
    try {
      return JSON.parse(val);
    }
    catch (e) {
      return val;
    }
  }
  else {
    return val;
  }
}
Vue.prototype.setStore = function (key, val) {
  if (typeof (val) != "string") {
    val = JSON.stringify(val);
  }
  window.localStorage.setItem(key, val);
}

Vue.prototype.getTestSets = function (cbk) {
  let sets = this.getStore("testsets");
  if (!sets) {
    sets = [
      { key: 't1', name: "内置传票", codes: ['450.64', '016.75', '435.19', '162.58', '331.20', '879.60', '654.07', '195.83', '942.16', '323.10', '221.39', '136.84', '123.50', '392.35', '916.23', '970.18', '548.73', '109.26', '293.76', '514.23', '321.53', '238.12', '976.04', '085.73', '746.29', '920.15', '340.89', '141.86', '205.38', '663.58', '927.16', '932.90', '420.87', '857.09', '581.37', '450.64', '054.73', '635.19', '367.84', '331.20', '901.34', '873.29', '647.18', '312.69', '353.14', '275.86', '275.08', '635.34', '344.19', '738.22', '714.20', '321.58', '392.35', '489.27', '628.79', '851.34', '237.59', '563.10', '472.85', '496.13', '520.19', '942.96', '864.73', '523.04', '279.63', '428.46', '137.60', '012.84', '063.15', '341.29', '740.32', '110.41', '296.57', '804.21', '609.12', '933.25', '931.82', '740.66', '037.58', '265.47', '812.93', '398.47', '431.04', '905.47', '827.50', '983.69', '564.07', '763.89', '496.37', '802.64', '862.24', '738.52', '521.48', '041.92', '683.07', '095.18', '832.16', '167.91', '409.53', '361.82', '145.06', '187.52', '466.71', '234.18', '961.03', '361.28', '405.36', '096.87', '541.90', '169.34', '215.32', '983.70', '213.07', '573.08', '924.57', '621.97', '092.38', '082.47', '733.65', '785.31', '704.12', '467.05', '252.43', '342.01', '045.78', '831.50', '910.05', '968.78', '186.90', '365.19', '878.40', '849.38', '531.24', '314.52', '787.64', '089.64', '516.40', '192.85', '170.96', '088.08', '624.87', '531.78', '218.70', '461.97', '523.10', '136.05', '634.69', '816.72', '452.38', '703.24', '703.12', '918.65', '895.32', '827.94', '962.78', '831.83', '176.85', '497.53', '976.38', '342.60', '604.13', '281.10', '716.80', '645.39', '431.54', '958.10', '825.67', '732.41', '413.91', '762.93', '258.79', '986.10', '075.63', '314.90', '276.58', '581.41', '709.31', '343.10', '908.79', '580.75', '304.72', '546.10', '758.69', '719.63', '719.26', '412.42', '839.40', '251.79', '327.46', '641.25', '984.85', '821.59', '428.19', '291.87', '673.89', '421.38', '923.76', '061.43', '539.08', '567.39',] },
      { key: 't2', name: "随机数据", codes: [], type: 'random' },
    ]
  }
  cbk && cbk(sets);
}

Vue.prototype.setTestSets = function (sets) {
  this.setStore("testsets", sets);
}

Vue.config.productionTip = false;


Vue.use(VueRouter);
// Vue.use(Base);
Vue.use(Vuetify, {
  theme: {
    primary: colors.red.darken1, // #E53935
    secondary: colors.red.lighten4, // #FFCDD2
    accent: colors.indigo.base // #3F51B5
  }
})
// Vue.use(VueResource);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
