var template = `<div>
    <p>姓名：{{name}}</p>
    <p>年龄：{{age}}</p>
</div>`;

// export default {
//     data() {
//         return {
//           name:"zhansan",
//           age:18,  
//         };
//     },
//     template
// };
export default {
    props:["name","age"],
    template
};