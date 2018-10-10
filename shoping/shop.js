let list = [
    {
        shop_name:"诗集专卖",
        isCheck:false,
        cart_list:[
            {
                isCheck:false,
                goods_txt:"唐诗300首",
                price:229.00,
                sum_price:229.00
            },
            {
                isCheck:false,
                goods_txt:"宋词300首",
                price:229.00,
                sum_price:229.00
            }
        ]
    },
    {
        isCheck:false,
        shop_name:"小说专卖",
        cart_list:[
            {
                isCheck:false,
                goods_txt:"蛊真人",
                price:999.00,
                sum_price:999.00
            },
            {
                isCheck:false,
                goods_txt:"凡人修仙传",
                price:999.00,
                sum_price:999.00
            }
        ]
    }
]

    var app = new Vue({
        el:"#app",
        data:{
    shops:list,
    isCheck:false,
    num:0,
    shop_num:0
        },
        methods:{
            shop_name:function(item){
                if(!item.isCheck){
                    for(let y in item.cart_list){
                        item.cart_list[y].isCheck = true;
                        console.log(item);
                    }
                }else{
                    for(let y in item.cart_list){
                        item.cart_list[y].isCheck = false;
                        console.log(item);
                    }
                }
                },
            goods_name:function(_item,item){
                if(!_item.isCheck){
                    this.num++;
                    if(this.num == 2){
                        item.isCheck=true
                    }else{
                        item.isCheck=false
                    }
                }else{
                console.log(this.num)
                this.num--;
                if(this.num == 2){
                      item.isCheck=true
                    }else{
                        item.isCheck=false
                    }
                }
            },
            //全选
            shop:function(){
                if(!this.isCheck){
                    for(let x in list){
                        list[x].isCheck = true;
                        if(list[x].isCheck){
                            for(let y in list[x].cart_list){
                                list[x].cart_list[y].isCheck = true;
                            }
                        }
                    }
                }else{
                    for(let x in list){
                        list[x].isCheck = false;
                        if(!list[x].isCheck){
                            for(let y in list[x].cart_list){
                                list[x].cart_list[y].isCheck = false;
                            }
                        }
                    }
                }
            },
            //删除
            del:function(index){
                this.shops[1].cart_list[index].splice(index,3)
            }
        }
    })
