---
title: 使用Vue+echars+Java后端数据生成饼状图
tags: 图表
categories: Vue
abbrlink: 56512
date: 2020-05-11 16:13:45
cover: https://cdn.jsdelivr.net/gh/jinan6/PicGo-img/img/20200530093401.jpeg
---

<center>饼图</center>

<!--more-->

**效果图：**
![效果](https://img-blog.csdnimg.cn/20200305171205397.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTc3NzU0NA==,size_16,color_FFFFFF,t_70)
**后端controller代码：**

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

## 注意：上面代码中的 3L,4L,5L,6L,7L，对应的是数据库中的ID

**HTML代码：**

这里引用的都是本地下载好的包
还可以引用网上的

```javascript
<script src="https://cdn.staticfile.org/vue/2.2.2/vue.min.js"></script>
<script src="https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js"></script>
<script src="https://cdn.staticfile.org/echarts/4.3.0/echarts.min.js"></script>
```

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>第一个 ECharts 实例</title>
    <!-- 引入 echarts.js -->
    <!-- <script src="https://cdn.staticfile.org/echarts/4.3.0/echarts.min.js"></script> -->
    <script src="../../libs/echarts.min.js"></script>
    <script src="../../libs/jquery.min.js"></script>
    <script src="../../libs/vue.min.js"></script>
</head>
<body>
    <!-- 为ECharts准备一个具备大小（宽高）的Dom -->
    <div id="main" style="width: 600px;height:400px;"></div>
    <script type="text/javascript">
    
    //Vue
    	var vm=new Vue({
    		el:"#main",
    		data:{
    			dat:[
    				{value:274, name:'联盟广告'},
                    {value:310, name:'邮件营销'},
    			],
    		},
    		methods:{	//自定义方法
    			getData:function(){
    				$.post("http://localhost:8081/jeefast-rest/api/getData",{},function(data){
    					//alert(JSON.stringify(data));
    					var data=data.data;
    					var len=data.length;
    				//	alert(len);
    					vm.dat=[]	//先清空
    					for(var i=0;i<len;i++){
    						var info={};
    						info.name=data[i].username;
    						info.value=data[i].mobile;
    						vm.dat.push(info);	//把info里面的数据追加到data里
    					}
    				//	alert(JSON.stringify(vm.dat));
    				
    				// 基于准备好的dom，初始化echarts实例
				        var myChart = echarts.init(document.getElementById('main'));
				 
				        myChart.setOption({
				            series : [
				                {
				                    name: '访问来源',
				                    type: 'pie',    // 设置图表类型为饼图
				                    radius: '55%',  // 饼图的半径，外半径为可视区尺寸（容器高宽中较小一项）的 55% 长度。
				                    data: vm.dat         // 数据数组，name 为数据项名称，value 为数据项值
				                        
				                }
				            ]
				        })
				        
    				});
    			}
    		},
    		mounted(){		//自动调用里面的方法
    			this.getData();
    			this.timer = setInterval(this.getData, 3000);//定时器，每3秒执行一次
    		}
    		
    	});
    
    
    </script>
</body>
</html>
```