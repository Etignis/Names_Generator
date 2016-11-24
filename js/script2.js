function exist(elem) {
  (elem.length>0) ? true : false;
}
function randd(min, max) {
  return Math.floor(arguments.length > 1 ? (max - min + 1) * Math.random() + min : (min + 1) * Math.random());
};
// перемешивание
function shuffle(o){
    for(var j, x, k = o.length; k; j = Math.floor(Math.random() * k), x = o[--k], o[k] = o[j], o[j] = x);
    return o;
};
function getFr(a, n){
  var tmp = a.length;
  var ret='';
  if (n == undefined) {
    n = tmp>10?10:tmp/2;
    n = n<1?1:n;
  }
  tmp=0;
  for (var slog in a) {
    ret = a[slog].fr>tmp?a[slog].slog:ret;
  }
  return ret;
}
function getSim(slog, a, sim) {
  var ret = '';
  var tmp_fr=0;
  var maxTry=10;
  if (sim == undefined) {
    sim = slog-1;
  }
  if (sim<1)
    sim=1;
  var f_sim=true;
  for (var i=0; i<a.length; i++) {
    /**/
    if (a[i].slog[1] == slog[0] &&
        a[i].slog[2] == slog[1] &&
        a[i].fr > tmp_fr &&
        maxTry>0) {
      ret=a[i].slog[0];
      maxTry--;
    }
    /**/

  }
  return ret;
}
function getSim2(slog, a, sim) {
  var ret = '';
  var tmp_fr=0;
  var maxTry=10;
  if (sim == undefined) {
    sim = slog-1;
  }
  if (sim<1)
    sim=1;
  var f_sim=true;

  /*/
  0
  1 0
  2 1

  /**/
  /*/
  for (var i=0; i<a.length; i++) {
    for (var w=0; w<sim; w++) {
      var ln = a[i].slog.length;
      console.log(a[i].slog+" "+slog);
      if (a[i].slog[ln-sim+w] != slog[w]) {
        f_sim = false;
        break;
      }
    }
    if (f_sim &&
        a[i].fr > tmp_fr &&
        maxTry>0) {
      ret=a[i].slog[0];
      maxTry--;
    }
  }
  /**/

  for (var i=0; i<a.length && maxTry>0; i++) {
    try {
			//console.log(a[i].slog+" "+slog);
		} catch (err) {
			console.dir(a);
			console.log(a.length);
			console.log(i);
    }
		
    for (var w=1; w<=sim; w++) { // степень похожести
      var sl1='', sl2='';
      var ln = a[i].slog.length;
      for (var e=0; e<w; e++) {
        sl1 = a[i].slog[ln-e-1] +sl1;
        sl2 += slog[e];
      }
      if (sl1 == sl2 &&
        sl1.length>ret.length) {
        ret='';
        for (var e=0; e<ln-w; e++) {
          ret += a[i].slog[e];
          maxTry--
        }
        console.log(ret);
      }
    }
  }

  return ret;
}
function fixName(name) {
  var re = /^[ЬьЪь]+/;
  name = name.replace(re, '');
  return name.charAt(0).toUpperCase() + name.substr(1);
}
function makeComboBox(src) {
	var ret = '';
	var ARR_DOWN = '<i class="fa fa-arrow-down"></i>';
	var ARR_UP = '<i class="fa fa-arrow-up"></i>';
	var arrow="<div class='combo_box_arrow'>"+ARR_UP+"</div>";
	for (var i in src.l) {
		//console.dir(src.l[race]);
		var race = src.l[i];
		ret+= "<label for='ch_"+race.name+"'><input type='checkbox' value='"+race.name+"' id='ch_"+race.name+"' data-root='"+race.name+"'>"+race.title+"</label>";
		for(var j in race.list) {			
			var sbr = race.list[j];
			ret+= "<label for='ch_"+sbr.name+"'><input type='checkbox' value='"+sbr.name+"' id='ch_"+sbr.name+"' data-parent='"+race.name+"'>"+sbr.title+"</label>";
		}
	}	
	ret = "<div id='selector' class='combo_box' data-text='Выберите расу'><div class='combo_box_title'>Выберите расу</div><div class='combo_box_content'>"+ret+"</div>"+arrow+"</div>";
	$("body").html(ret);
}
var names = {
	"l": [
		{
			"name": "human",
			"title": "Люди",
			"list": [
					{
						"name": "standart",
						"title": "Обычные люди",
						"schemes": [
							"male surname",
							"female surname"
						],
						"src": [
							{
								"name": "male",
								"l": "Блас, Бран, Гет, Ландер, Лют, Малсер, Стор, Таман, Урт, Фрат, Эндер, Асеир, Бардеид, Зашеир, Кхемед, Мехмен, Судейман, Хасеид, Боривик"
							},
							{
								"name": "female",
								"l": "Амафрея, Бетха, Вестра, Кетра, Мара, Ольга, Силифрей, Цефрея, Атала, Джасмаль, Зашеида, Мейлиль, Сейдиль, Сейпора, Хама, Яшеира, Имзель"
							},
							{
								"name": "surname",
								"l": "Брайтвуд, Виндривер, Лакмэн, Хелдер, Хорнрейвен, Штормвинд, Баша, Джассан, Думеин, Кхалид, Мостана, Пашар, Рейн, Дайрнина, Илтазяра"
							}
						]
						
					},
					{
						"name": "dark",
						"title": "Пальземцы",
						"schemes": [
							"male surname",
							"female surname"
						],
						"src": [
							{
								"name": "male",
								"l": "Агнешк, Алгбет, Алисий, Алексендж, Алеш, Алик, Алодж, Андель, Амастий, Аделаид, Адриан, Алес, Алот, Амад, Анастар, Аншер, Арност, Арон"
							},
							{
								"name": "female",
								"l": "Абена, Адель, Алгбета, Алзбета, Алика, Алина, Андела, Анета, Антони, Бара, Баранка, Барбара, Барка, Баруна, Берта, Бланка, Бозена, Бора"
							},
							{
								"name": "surname",
								"l": "Новак, Каминьский, Шиманьский, Горак, Новотный, Дворжак, Воджтеч, Джиндрич, Дузанек, Зденек, Игнас, Имрич, Каджа, Коломан, Либор, Матуш"
							}
						]
					}
				]
		},
		{
			"name": "elf",
			"title": "Эльфы",
			"list": [
				{
					"name": "light",
					"title": "Светлые эльфы",
					"schemes": [
						"male",
						"female"
					],
					"src": [
						{
							"name": "male",
							"l": "Карвин, Киндделв, Кинриг, Кистениэн, Кледвин, Кэдваллэдер, Кэдвалэдер, Кэдвгон, Кэдок, Кэдомедд, Кэдфэель, Кэдфэн, Кэй, Кэрэдог, Кэрэдок"
						},
						{
							"name": "female",
							"l": "Адерин, Аерон, Аерона, Аеронвен, Аеронви, Анвен, Анвин, Ангэрэд, Ангэрэт, Арвидд, Ариэнрход, Арэнрход, Афон, Афэнен"
						}
					]
				}
			]
		}
	]	
};

$(window).load(function(){

//console.dir(names);
	makeComboBox(names);

  var name = 'Name';
  
	var text = "Августин, Александр, Алекседж, Алеш, Алоджз, Андэль, Антонин, Арност, Бартоломедж, Беда, Бедризек, Бедрич, Блейздж, Бозидар, Бонифак, Бохаслав, Бохдан, Бохумил, Бохумир, Бранислав, Бронислав, Вавринек, Ваклав, Венкеслав, Вилем, Винк, Винсенк, Вит, Владимир, Владислав, Властимил, Властислав, Воджтеч, Габа, Габирэль, Гейбк, Георг, Дал, Далибор, Даноюзк, Датчане, Дейлк, Джакуб, Джаромил, Джаромир, Джейрк, Джерадж, Джиндрич, Джозеф, Джулиус, Добромил, Доминик, Драхомир, Драхослав, Дузанек, Дуса, Дусан, Дюзк, Зденек, Игнаc, Имрич, Иржи, Йохан, Каджа, Каджинек, Каджисек, Карел, Коломан, Константин, Корнэль, Кристоф, Крыстоф, Ктибор, Ладвик, Ладислав, Леос, Либор, Лубомиr, Лукаш, Любош, Марек, Марик, Матей, Матус, Миколас, Микула, Милан, Милослав, Милош, Мирек, Мирослав, Михал, Мольба, Мстислав, Олдрич, Ондрей, Отакар, Отокар, Павел, Павол, Патрик, Петр, Радим, Радко, Радомир, Радос, Радослав, Рейдк, Рехор, Ростек, Сайонек, Сик, Симесек, Синек, Синк, Славомир, Собеслав, Томаш, Филипп, Франтизек, Хавэль, Хонза, Шимон, Штепан, Эвзен, Эдвард, Эдуард, Элиаш ";
//console.log(text);
  var freqdict = {};
   //freqdict["start"]={};
   freqdict.start={};
   freqdict.mid={};
   freqdict.end={};
   freqdict.st_num=0;
   freqdict.mid_num=0;
   freqdict.end_num=0;
   var st=[];
   var mid=[];
   var end=[];

  var depth = 3;
  var sim = 2;

  var tmp
function make_dict () {
  var arr = text.split(/[^А-Яа-яЁё]+/);
  /*/
  arr = arr.map(function(name){
    return "^"+name+"$";
  });
  /**/
  //console.dir(arr);

  var tmp_s='';
  for (var i=0; i<arr.length; i++) { // words
    for (var j=0; j-1<arr[i].length-depth; j++) { // simbols in word
      tmp_s='';
      var f_s=false;
      var f_e=false;
      for (var s=0; s<depth; s++) { // triads
        tmp_s+=arr[i][+j+ +s];
      }
      //console.log(freqdict[tmp_s] );
      if (/[А-ЯЁ]+/.test(tmp_s)) {
        //tmp_s="^"+tmp_s;
        f_s=true;
      }
      if (j==arr[i].length-depth) {
        //tmp_s=tmp_s+"$";
        f_e=true;
      }

      /**/
      if(f_s){
      tmp_n=freqdict.start[tmp_s];
        if(tmp_n>0){
          freqdict.start[tmp_s]++;
          freqdict.st_num++;
        }
        else {
          freqdict.start[tmp_s]=1;
          //freqdict.st_num=1;
        }
      }
     //
      if(f_e){
      tmp_n=freqdict.end[tmp_s];
        if(tmp_n>0){
          freqdict.end[tmp_s]++;
          freqdict.end_num++;
        }
        else{
          freqdict.end[tmp_s]=1;
         // freqdict.end_num=1;
        }
      }
     //
      if(!f_s && !f_e){
        tmp_n=freqdict.mid[tmp_s];
        if(tmp_n>0){
          freqdict.mid[tmp_s]++;
          freqdict.mid_num++;
        }
        else{
          freqdict.mid[tmp_s]=1;
          //freqdict.mid_num=1;
        }
      }
      /**/

     // freqdict[tmp_s] = freqdict[tmp_s]>0?freqdict[tmp_s]++:1;
    }
  }

  var tmp_i=0;
  for (var slog in freqdict.start) {
    st[tmp_i]={};
    st[tmp_i].slog=slog;
    st[tmp_i].fr=freqdict.start[slog];
    tmp_i++;
  }
  tmp_i=0;
  for (var slog in freqdict.mid) {
    mid[tmp_i]={};
    mid[tmp_i].slog=slog;
    mid[tmp_i].fr=freqdict.mid[slog];
    tmp_i++;
  }
  tmp_i=0;
  for (var slog in freqdict.end) {
    end[tmp_i]={};
    end[tmp_i].slog=slog;
    end[tmp_i].fr=freqdict.end[slog];
    //console.log(end[tmp_i].slog+ " " + end[tmp_i].fr);
    tmp_i++;
  }
}

function make_dict2 (oNames) {
	var separator = /[,;\s\t\n\r]+/;
	
	for (var i in oNames.l) {
		var race = oNames.l[i];
		for(var j in race.list) {			
			var sbr = race.list[j];
			for(var k in sbr.src) {
				var o = sbr.src[k]
				var title = o.name;
				var string = o.l;
				
				console.log(title);
			}
		}
	}
	
	

}

function make_name2() {
  var name = '';
  var name2 = '';
  var maxLength = randd(0,4);
  name2 = name = getFr(shuffle(end));

  for (var q=0; q<maxLength; q++) {
    sh = shuffle(mid)
    name = getSim(name, sh) + name;
    name2 = getSim2(name, sh, 2) + name2;
  }

  sh = shuffle(st)
  name = fixName(getSim(name, sh) + name);
  name2 = fixName(getSim2(name2, sh, 2) + name2);
 // fixName(name)

  return name + " " + name2;
}

$("body").on('click', ".combo_box_title, .combo_box_arrow", function(){
		var el = $(this).closest(".combo_box").find(".combo_box_content");
		if(el.is(":visible"))
		{
			el.slideUp();
			el.next(".combo_box_arrow").html(ARR_DOWN);
		}
		else
		{
			el.slideDown();
			el.next(".combo_box_arrow").html(ARR_UP);
		}
	});
	$("body").on('click', ".combo_box label", function(){
		var d_root='', d_parent='', trig=true;
		d_root = $(this).find("input[type=checkbox]").attr("data-root");
		d_parent = $(this).find("input[type=checkbox]").attr("data-parent");
		if($(this).find("input[type=checkbox]").prop("checked"))
			{
			trig=false;
			}
		$(this).find("input[type=checkbox]").prop("checked", trig);
		/**/
		if(d_root!='' && d_root!=undefined)
		{
			$("input[type=checkbox][data-parent="+d_root+"]").each(function(){
				$(this).prop( "checked", trig );
			});
		}
		/**/
		if(d_parent!='' && d_parent!=undefined && trig==false)
		{
			$("input[type=checkbox][data-root="+d_parent+"]").prop( "checked", trig);
			
		}
		/**/
		/**/
		if($("input[type=checkbox]:checked").length<1)
			{
			$("#go").attr("disabled", "disabled");	
			}
		else
			{
			$("#go").removeAttr("disabled");		
			}
		/**/
		
		/**/
		var d_root='';
		var before_root='';
		var d_parent='';
		var txt='';
		var title=''
		$(".combo_box_title").html("");
		$("input[type=checkbox]:checked").each(function(){
			d_root='';
			d_parent='';
			d_parent=$(this).attr("data-parent");
			d_root=$(this).attr("data-root");
			
			title=$(".combo_box_title").html();
			if(title!="" && title.charAt(title.length-1)!="(")
				$(".combo_box_title").append(", ");
			// обычный пункт
			if(d_parent==undefined && d_root==undefined)
				{
				txt=$(this).parent("label").text();	
				$(".combo_box_title").append(txt);	
				}
			// если root 
			if(d_root!=undefined)
				{
					// если есть отмеченные потомки
				if($("input[type=checkbox][data-parent="+d_root+"]:checked").length>0)
					{
					txt=$(this).parent("label").text()+" (";	
					$(".combo_box_title").append(txt);	
					
					before_root=d_root;
					}
				}
			// если parent
			if(d_parent!=undefined)
				{
				
					txt=$(this).parent("label").text();	
						
					
					var ind = $("input[type=checkbox][data-parent="+d_parent+"").index(this);
					if(ind==$("input[type=checkbox][data-parent="+d_parent+"").length-1 && d_parent==before_root)
						txt+=")";
					
					$(".combo_box_title").append(txt);				
				}
			});
			
			if($(".combo_box_title").html()=='')
				$(".combo_box_title").html($(this).closest(".combo_box").attr('data-text'));
			
			// data-parent="human"
		/**/
		return false;
	});

	
	make_dict2(names) ;
	/*
make_dict() ;
$("body").empty();
for(var r=0; r<5; r++) {
  name = make_name2();
  //console.log(name);
  $("body").append(name+"<br>");
}
*/
//console.dir(freqdict);

});
