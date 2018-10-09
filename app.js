let list= [
            {
                title:"这周学会vue",
                isCompleted:false,
                isEditing:false
            },
            {
                title:"下半年旅游",
                isCompleted:true,
                isEditing:false
            }
        ]
var app = new Vue({
    el:"#todolist",
    data:{
        //添加文本框的数据
        addInp:"",
        listItems:[],
        edit:""
    },
    methods:{
        //添加列表
        add:function(){
            this.listItems.push({title:this.addInp,isCompleted:false});
            //每添加一个列表，就清空输入框内容
            this.addInp = "";
        },
        //删除列表
        del:function(index){
            //splice(index,1)从数组的第一个开始删除
            this.listItems.splice(index,1);
        },
        dbl:function(item){
            item.isEditing = true;
        },
        edits:function(item){
            this.listItems.splice(item,1);
            this.listItems.push({title:this.edit,isCompleted:false,isEditing:false});
            item.isEditing = false;
            this.edit="";
        }
    }
})

