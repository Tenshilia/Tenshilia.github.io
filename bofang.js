var cnt=0;
function Play_Audio(btn){
	cnt++;
	if(cnt%2){
		document.getElementById("wushiyin").play();
	}
	else{
		document.getElementById("wushiyin").pause();
	}
}