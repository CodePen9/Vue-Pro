import Userinfo from './components/Userinfo.js';

var template=`<div id="app">
<Userinfo v-for="(item,i) in users" :key="i" :name="item.name" :age="item.age"></Userinfo>
</div>`;

export default {
    template,
    components:{
        Userinfo,
    },
    data() {
        return {
            users:[
                {name:"mike",age:20},
                {name:"amay",age:22},
            ],
        };
    },
};