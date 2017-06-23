	var bg0 = document.getElementById('bg0');
	var bg1 = document.getElementById('bg1');
	var bg2 = document.getElementById('bg2');
	var bg3 = document.getElementById('bg3');
	var bg4 = document.getElementById('bg4');
	var pg0 = document.getElementById('page0');
	var pg1 = document.getElementById('page1');
	var pg2 = document.getElementById('h-page2');
	var pg3 = document.getElementById('page3');
	var pg4 = document.getElementById('page4');
	var focuz = document.getElementById('navigation').getElementsByTagName('li');
	console.log(focuz);
	var num=0;
	document.onkeydown = function(ev){
		switch(ev.keyCode){
			case 40:
				num++
				for(var i=0;i<focuz.length;i++){
					focuz[i].className = '';
				}
				if(pg1.className=='enter'||pg1.className=='back'){
				pg2.className = 'enter';
				pg2.style.display = 'block';
				bg2.style.display = 'block';
				bg1.style.display = 'none';
				pg1.className = 'pass';
			}else if(pg2.className=='enter'||pg2.className=='back'){
				pg3.className = 'enter';
				pg3.style.display = 'block';
				bg3.style.display = 'block';
				bg2.style.display = 'none';
				pg2.className = 'pass';
			}else if(pg3.className=='enter'||pg3.className=='back'){
				pg4.className = 'enter';
				pg4.style.display = 'block';
				bg4.style.display = 'block';
				bg3.style.display = 'none';
				pg3.className = 'pass';
			}else if(pg4.className=='enter'||pg4.className=='back'){
				num=focuz.length-1;
				focuz[num].className = 'pageon';
				return;
			}else{
				bg0.style.display = 'none';
				bg1.style.display = 'block';
				pg0.className = 'pass'
				pg1.style.display = 'block';
				pg1.className = 'enter';
			}
			console.log(num);
			focuz[num].className = 'pageon';
			break;
			case 38:
				for(var i=0;i<focuz.length;i++){
						focuz[i].className = '';
				}
				num--
				if(pg4.className=='enter'){
					pg4.className = 'pass';
					pg3.className = 'back';
					bg4.style.display = 'none';
					bg3.style.display = 'block';
				}else if(pg3.className=='back'||pg3.className=='enter'){
					pg3.className = 'reverse';
					bg3.style.display = 'none';
					bg2.style.display = 'block';
					pg2.className = 'back';
				}else if(pg2.className == 'back'||pg2.className=='enter'){
					pg2.className = 'reverse';
					bg2.style.display = 'none';
					bg1.style.display = 'block';
					pg1.className = 'back';
				}else if(pg1.className == 'back'||pg1.className=='enter'){
					console.log(1);
					pg1.className = 'reverse';
					bg1.style.display = 'none';
					bg0.style.display = 'block';
					pg0.className = 'back';
				}else{
					num=0;
				}
				focuz[num].className = 'pageon';
			
		}
	};
	document.onwheel = function(ev){
		for(var i=0;i<focuz.length;i++){
						focuz[i].className = '';
		}
		if(ev.wheelDelta<0){
			num++
			if(pg1.className=='enter'||pg1.className=='back'){
				pg2.className = 'enter';
				pg2.style.display = 'block';
				bg2.style.display = 'block';
				bg1.style.display = 'none';
				pg1.className = 'pass';
			}else if(pg2.className=='enter'||pg2.className=='back'){
				pg3.className = 'enter';
				pg3.style.display = 'block';
				bg3.style.display = 'block';
				bg2.style.display = 'none';
				pg2.className = 'pass';
			}else if(pg3.className=='enter'||pg3.className=='back'){
				pg4.className = 'enter';
				pg4.style.display = 'block';
				bg4.style.display = 'block';
				bg3.style.display = 'none';
				pg3.className = 'pass';
			}else if(pg4.className=='enter'){
				num = focuz.length-1;
				focuz[num].className = 'pageon';
				return;
			}else{
				bg0.style.display = 'none';
				bg1.style.display = 'block';
				pg0.className = 'pass'
				pg1.style.display = 'block';
				pg1.className = 'enter';
				console.log(pg1.className);
			}
			focuz[num].className = 'pageon';
		}
		if(ev.wheelDelta>0){
			num--
			if(pg4.className=='enter'){
				pg4.className = 'pass';
				pg3.className = 'back';
				bg4.style.display = 'none';
				bg3.style.display = 'block';
			}else if(pg3.className=='back'||pg3.className=='enter'){
				pg3.className = 'reverse';
				bg3.style.display = 'none';
				bg2.style.display = 'block';
				pg2.className = 'back';
			}else if(pg2.className == 'back'||pg2.className=='enter'){
				pg2.className = 'reverse';
				bg2.style.display = 'none';
				bg1.style.display = 'block';
				pg1.className = 'back';
			}else if(pg1.className == 'back'||pg1.className=='enter'){
				console.log(1);
				pg1.className = 'reverse';
				bg1.style.display = 'none';
				bg0.style.display = 'block';
				pg0.className = 'back';
			}else{
				num=0;
			}
			focuz[num].className = 'pageon';
		}
	};
