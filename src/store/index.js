const state = require("./state.js");
const getters = require("./getters.js");
const mutations = require("./mutations.js");
const actions = require("./actions.js");

const Vue = require("vue");
const Vuex = require("vuex");
Vue.use(Vuex);

const user = require("./modules/user");
const lesson = require("./modules/lesson");
const notice = require("./modules/notice");
const feedback = require("./modules/feedback");

const store = new Vuex.Store({
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions,
    modules: {
    	user: user,
    	lesson: lesson,
    	notice: notice,
    	feedback: feedback
    }
});

module.exports = store;
