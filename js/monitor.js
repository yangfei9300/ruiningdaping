function drawLayer02Label(canvasObj, text, textBeginX, lineEndX) {
	var colorValue = '#04918B';

	var ctx = canvasObj.getContext("2d");

	ctx.beginPath();
	ctx.arc(35, 55, 2, 0, 2 * Math.PI);
	ctx.closePath();
	ctx.fillStyle = colorValue;
	ctx.fill();

	ctx.moveTo(35, 55);
	ctx.lineTo(60, 80);
	ctx.lineTo(lineEndX, 80);
	ctx.lineWidth = 1;
	ctx.strokeStyle = colorValue;
	ctx.stroke();

	ctx.font = '12px Georgia';
	ctx.fillStyle = colorValue;
	ctx.fillText(text, textBeginX, 92);
}

//接入机型占比

var COLOR = {
	MACHINE: {
		TYPE_A: '#0175EE',
		TYPE_B: '#D89446',
		TYPE_C: '#373693',
		TYPE_D: '#25AE4F',
		TYPE_E: '#06B5C6',
		TYPE_F: '#009E9A',
		TYPE_G: '#AC266F'
	}
};

function renderLegend() {
	drawLegend(COLOR.MACHINE.TYPE_A, 25, 'A机型');
	drawLegend(COLOR.MACHINE.TYPE_B, 50, 'B机型');
	drawLegend(COLOR.MACHINE.TYPE_C, 75, 'C机型');
	drawLegend(COLOR.MACHINE.TYPE_D, 100, 'D机型');
	drawLegend(COLOR.MACHINE.TYPE_E, 125, 'E机型');
	drawLegend(COLOR.MACHINE.TYPE_F, 150, 'F机型');
	drawLegend(COLOR.MACHINE.TYPE_G, 175, 'G机型');
}

function drawLegend(pointColor, pointY, text) {
	var ctx = $("#layer03_left_01 canvas").get(0).getContext("2d");
	ctx.beginPath();
	ctx.arc(20, pointY, 6, 0, 2 * Math.PI);
	ctx.fillStyle = pointColor;
	ctx.fill();
	ctx.font = '20px';
	ctx.fillStyle = '#FEFFFE';
	ctx.fillText(text, 40, pointY + 3);
}


//存储
function renderLayer03Right() {
	drawLayer03Right($("#layer03_right_chart01 canvas").get(0), "#027825", 0.66);
	drawLayer03Right($("#layer03_right_chart02 canvas").get(0), "#006DD6", 0.52);
	drawLayer03Right($("#layer03_right_chart03 canvas").get(0), "#238681", 0.34);
}

function drawLayer03Right(canvasObj, colorValue, rate) {
	var ctx = canvasObj.getContext("2d");

	var circle = {
		x: 65, //圆心的x轴坐标值
		y: 80, //圆心的y轴坐标值
		r: 60 //圆的半径
	};

	//画扇形
	//ctx.sector(circle.x,circle.y,circle.r,1.5*Math.PI,(1.5+rate*2)*Math.PI);
	//ctx.fillStyle = colorValue;
	//ctx.fill();

	ctx.beginPath();
	ctx.arc(circle.x, circle.y, circle.r, 0, Math.PI * 2)
	ctx.lineWidth = 10;
	ctx.strokeStyle = '#052639';
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	ctx.arc(circle.x, circle.y, circle.r, 1.5 * Math.PI, (1.5 + rate * 2) * Math.PI)
	ctx.lineWidth = 10;
	ctx.lineCap = 'round';
	ctx.strokeStyle = colorValue;
	ctx.stroke();
	ctx.closePath();

	ctx.fillStyle = 'white';
	ctx.font = '20px Calibri';
	ctx.fillText(rate * 100 + '%', circle.x - 15, circle.y + 10);

}


function renderChartBar01() {
	var myChart = echarts.init(document.getElementById("layer03_left_02"));
	myChart.setOption({
		title: {
			text: '',
			subtext: '',
			x: 'center'
		},
		tooltip: {
			trigger: 'item',
			formatter: "{b} : {c} ({d}%)"
		},
		legend: {
			show: false,
			x: 'center',
			y: 'bottom',
			data: ['A机型', 'B机型', 'C机型', 'D机型', 'E机型', 'F机型', 'G机型']
		},
		toolbox: {},
		label: {
			normal: {
				show: true,
				formatter: "{b} \n{d}%"
			}
		},
		calculable: true,
		color: [COLOR.MACHINE.TYPE_A, COLOR.MACHINE.TYPE_B, COLOR.MACHINE.TYPE_C, COLOR.MACHINE.TYPE_D, COLOR
			.MACHINE.TYPE_E, COLOR.MACHINE.TYPE_F, COLOR.MACHINE.TYPE_G
		],
		series: [{
			name: '',
			type: 'pie',
			radius: [40, 80],
			center: ['50%', '50%'],
			//roseType : 'area',
			data: [{
					value: 4600,
					name: 'A机型'
				},
				{
					value: 4600,
					name: 'B机型'
				},
				{
					value: 15600,
					name: 'C机型'
				},
				{
					value: 6600,
					name: 'D机型'
				},
				{
					value: 5700,
					name: 'E机型'
				},
				{
					value: 7600,
					name: 'F机型'
				},
				{
					value: 3500,
					name: 'G机型'
				}
			]
		}]
	});

}

/*
function renderChartBar02(){
	var myChart = echarts.init(document.getElementById("layer03_left_03"));
		myChart.setOption(
					{
						title : {
							text: '',
							subtext: '',
							x:'center'
						},
						tooltip : {
							show:true,
							trigger: 'item',
							formatter: "上线率<br>{b} : {c} ({d}%)"
						},
						legend: {
							show:false,
							orient: 'vertical',
							left: 'left',
							data: ['A机型','B机型','C机型','D机型','E机型','F机型','G机型']
						},
						series : [
							{
								name: '',
								type: 'pie',
								radius : '50%',
								center: ['50%', '60%'],
								data:[
									{value:7600, name:'A机型'},
									{value:6600, name:'B机型'},
									{value:15600, name:'C机型'},
									{value:5700, name:'D机型'},
									{value:4600, name:'E机型'},
									{value:4600, name:'F机型'},
									{value:3500, name:'G机型'}
								],
								itemStyle: {
									emphasis: {
										shadowBlur: 10,
										shadowOffsetX: 0,
										shadowColor: 'rgba(0, 0, 0, 0.5)'
									}
								}
							}
						],
						color:[COLOR.MACHINE.TYPE_A,COLOR.MACHINE.TYPE_B,COLOR.MACHINE.TYPE_C,COLOR.MACHINE.TYPE_D,COLOR.MACHINE.TYPE_E,COLOR.MACHINE.TYPE_F,COLOR.MACHINE.TYPE_G]
					}
		);
}*/
// 获取当前月的年月日
function getCurrentMonthDays() {
	const now = new Date();
	const year = now.getFullYear();
	const month = now.getMonth() + 1; // 月份从0开始，所以要+1

	// 创建一个新的Date对象，设置为当前月份的第一天
	let firstDayOfMonth = new Date(year, month - 1, 1);

	// 创建一个新的Date对象，设置为当前月份的下一个月的第一天
	// 然后减去一天，得到当前月份的最后一天
	let nextMonthFirstDay = new Date(year, month, 1);
	let lastDayOfMonth = new Date(nextMonthFirstDay - 1);

	// 初始化一个空数组来存储每一天的日期
	let days = [];

	// 循环从第一天到最后一天
	for (let day = 1; day <= lastDayOfMonth.getDate(); day++) {
		// 设置Date对象为当前循环的日期
		let currentDay = new Date(year, month - 1, day);

		// 格式化日期为YYYY-MM-DD
		let formattedDate =
			`${currentDay.getFullYear()}-${String(currentDay.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

		// 将格式化后的日期添加到数组中
		days.push(formattedDate);
	}

	// 返回包含每一天日期的数组
	return days;
}
// 获取指定个数的随机数
function getRandomNumbers(count) {
	let randomNumbers = [];

	for (let i = 0; i < count; i++) {
		// 生成0到1000之间的随机数
		// let randomNumber = Math.floor(Math.random() * 1001);
		
		var randomNumber=0;
		   var min = Math.ceil(50); // 确保最小值是整数
		    var max = Math.floor(100); // 确保最大值是整数
		   randomNumber=Math.floor(Math.random() * (max - min + 1)) + min; // 加上1是因为Math.random()不包括最大值
		
		
		// 将随机数添加到数组中
		randomNumbers.push(randomNumber);
	}

	// 返回包含随机数的数组
	return randomNumbers;
}

function renderLayer04Left(aList,names) {
	var aList=aList
	var days = getCurrentMonthDays();

	var xAxisdata = [];
	xAxisdata.push(days[0]);
	xAxisdata.push(days[1]);
	xAxisdata.push(days[2]);
	xAxisdata.push(days[3]);
	xAxisdata.push(days[4]);

	var myChart = echarts.init(document.getElementById("layer04_left_chart"));
	myChart.setOption({
			legend: {
				data: names,
			
				textStyle: {
					color: '#ffffff' // 这里设置图例的字体颜色为红色
				}
			},
			title: {
				text: ''
			},
			grid: {
				left: '3%',
				right: '4%',
				bottom: '20%',
				top: '20%',
				containLabel: true
			},
			xAxis: [{
				type: 'category',
				boundaryGap: false,
				data: xAxisdata,
				splitLine: {
					show: false
				},
				axisLabel: {
					show: true,
					textStyle: {
						color: '#a4a7ab'
					}
				}
			}],
			yAxis: {
				type: 'value',
				axisTick: {
					show: false
				},
				axisLabel: {
					textStyle: {
						color: "white", //刻度颜色
						fontSize: 8 //刻度大小
					}
				},
				axisLine: {
					show: true,
					lineStyle: {
						color: '#0B3148',
						width: 1,
						type: 'solid'
					}
				},
				splitLine: {
					show: false
				}
			},
			tooltip: {
				formatter: '{c}',
				backgroundColor: '#FE8501'
			},
			series: aList
		}

	);


	var count = 5;
	setInterval(() => {
		if (count > (days.length - 1)) {
			xAxisdata = [];
			xAxisdata.push(days[0]);
			xAxisdata.push(days[1]);
			xAxisdata.push(days[2]);
			xAxisdata.push(days[3]);
			xAxisdata.push(days[4]);
		} else {
			xAxisdata.shift();
			xAxisdata.push(days[count]);
		}
		
		console.log("listaList",aList)
		if(aList){
			for (var a = 0; a < aList.length; a++) {
				
				var suiji = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
				aList[a].data.shift();
				aList[a].data.push(suiji);
			}
		}
		

		myChart.setOption({
			  series: aList,
			xAxis: [{
				type: 'category',
				boundaryGap: false,
				data: xAxisdata,
				splitLine: {
					show: false
				},
				axisLabel: {
					show: true,
					textStyle: {
						color: '#a4a7ab'
					}
				}
			}],
		});
		if (count >= (days.length - 1)) {
			count = 5;
		} else {
			count = count + 1;
		}

	}, 10000)







}

function renderLayer04Right() {
	var myChart = echarts.init(document.getElementById("layer04_right_chart"));
	myChart.setOption({
		title: {
			text: ''
		},
		tooltip: {
			trigger: 'axis'
		},
		legend: {
			top: 20,
			right: 5,
			textStyle: {
				color: 'white'
			},
			orient: 'vertical',
			data: [{
					name: '网络',
					icon: 'circle'
				},
				{
					name: '内存',
					icon: 'circle'
				},
				{
					name: 'CPU',
					icon: 'circle'
				}
			]
		},
		grid: {
			left: '3%',
			right: '16%',
			bottom: '3%',
			top: '3%',
			containLabel: true
		},
		xAxis: {
			type: 'category',
			boundaryGap: false,
			axisTick: {
				show: false
			},
			axisLabel: {
				textStyle: {
					color: "white", //刻度颜色
					fontSize: 8 //刻度大小
				}
			},
			axisLine: {
				show: true,
				lineStyle: {
					color: '#0B3148',
					width: 1,
					type: 'solid'
				}
			},
			data: get10MinutesScale()
		},
		yAxis: {
			type: 'value',
			axisTick: {
				show: false
			},
			axisLabel: {
				textStyle: {
					color: "white", //刻度颜色
					fontSize: 8 //刻度大小
				}
			},
			axisLine: {
				show: true,
				lineStyle: {
					color: '#0B3148',
					width: 1,
					type: 'solid'
				}
			},
			splitLine: {
				show: false
			}
		},
		series: [{
				name: '网络',
				type: 'line',
				itemStyle: {
					normal: {
						color: '#F3891B'
					},
					lineStyle: {
						normal: {
							color: '#F3891B',
							opacity: 1
						}
					}
				},
				data: [120, 132, 101, 134, 90, 230, 210]
			},
			{
				name: '内存',
				type: 'line',
				itemStyle: {
					normal: {
						color: '#006AD4'
					},
					lineStyle: {
						normal: {
							color: '#F3891B',
							opacity: 1
						}
					}
				},
				data: [220, 182, 191, 234, 290, 330, 310]
			},
			{
				name: 'CPU',
				type: 'line',
				itemStyle: {
					normal: {
						color: '#009895'
					},
					lineStyle: {
						normal: {
							color: '#009895',
							opacity: 1
						}
					}
				},
				data: [150, 232, 201, 154, 190, 330, 410]
			}
		]
	});
}

function get10MinutesScale() {
	var currDate = new Date();
	var odd = currDate.getMinutes() % 10;
	var returnArr = new Array();
	currDate.setMinutes(currDate.getMinutes() - odd);
	for (var i = 0; i < 7; i++) {
		returnArr.push(currDate.getHours() + ":" + (currDate.getMinutes() < 10 ? ("0" + currDate.getMinutes()) :
			currDate.getMinutes()));
		currDate.setMinutes(currDate.getMinutes() - 10);
	}
	return returnArr;
}


function getLatestDays(num) {
	var currentDay = new Date();
	var returnDays = [];
	for (var i = 0; i < num; i++) {
		currentDay.setDate(currentDay.getDate() - 1);
		returnDays.push((currentDay.getMonth() + 1) + "/" + currentDay.getDate());
	}
	return returnDays;
}