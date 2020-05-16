---
title: 使用Vue+echars+Java后端数据生成柱状图
tags: 图表
categories: Vue
abbrlink: 34782
date: 2020-05-11 16:15:43
---

<center>柱状图</center>

<!--more-->

**效果图：**
![效果图](https://img-blog.csdnimg.cn/20200305172118753.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTc3NzU0NA==,size_16,color_FFFFFF,t_70)
**后端controller层代码：**

```java
//图表
    @AuthIgnore
    @PostMapping("getData")
    public R getData() {
    	long[] idList= {3L,4L,5L,6L,7L};
    	List<Long> id=new ArrayList<Long>();
    	for (int i = 0; i < idList.length; i++) {
			id.add(idList[i]);
		}
    	List<TbUser> userList=userService.selectBatchIds(id);
    	return R.ok().put("data",userList);
    }
```

## **注意：上面代码中的 3L,4L,5L,6L,7L，对应的是数据库中的ID**

**HTML代码：**

```html
<!DOCTYPE html>
<html>
     <head>
          <meta charset="utf-8">
          <title>五分钟上手之柱状图</title>
          <!-- 引入 echarts.js -->
          <script src="../../libs/echarts.min.js"></script>
    <script src="../../libs/jquery.min.js"></script>
    <script src="../../libs/vue.min.js"></script>
     </head>
     <body>
          <!-- 为ECharts准备一个具备大小（宽高）的Dom -->
          <div id="main" style="width: 600px;height:400px;"></div>
          <script type="text/javascript">
          
          var vm=new Vue({
        	  el:"#main",
           		data:{
           			name:[],
           			type:[],
           		},
           		methods:{
           			getData:function(){
           				$.post("http://localhost:8081/jeefast-rest/api/getData",{},function(data){
           				//	alert(JSON.stringify(data));
           					var data=data.data;
        					var len=data.length;
        				//	alert(len);
        					//循环前，先清空
        					vm.name=[];
               				vm.type=[];
               				
        					for(var i=0;i<len;i++){//循环遍历进行追加
        						vm.name.push(data[i].username);
        						vm.type.push(data[i].mobile);
        					}
        					
        					 // 基于准备好的dom，初始化echarts实例
        		              var myChart = echarts.init(document.getElementById('main'));
        		              // 指定图表的配置项和数据
        		              myChart.setOption({
        		                   title: {
        		                        text: '异步数据加载示例'
        		                   },
        		                   tooltip: {},
        		                   legend: {
        		                        data: ['市值']
        		                   },
        		                   xAxis: {	//横坐标的值
        		                        data: vm.name
        		                   },
        		                   yAxis: {},
        		                   series: [{	//纵坐标的值
        		                        name: '市值',
        		                        type: 'bar',
        		                        data: vm.type
        		                   }]
        		              });
           				});
           			}
           		},
           		mounted(){		//自动调用里面的方法
        			this.getData();
        			this.timer = setInterval(this.getData, 3000);//定时器，每3秒执行一次
        		}
          })
           
          </script>
     </body>
</html>
```