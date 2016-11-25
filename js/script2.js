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

  for (var i=0; i<a.length; i++) {
    /**/
    var sl1 = a[i].slog.substr(-sim);
    var sl2 = slog.substr(0, sim);

    if (sl1 == sl2  &&
        a[i].fr > tmp_fr &&
        maxTry>0) {
      ret=a[i].slog.substr(0, a[i].slog.length-sim);
      maxTry--;
      tmp_fr = a[i].fr;
    }
    /**/

  }
  return ret;
}
/**
 * похожие слоги
 *
 * slog - слог
 * а - массив
 * sim - число похожих букв
 */
function getSim2(slog, a, sim) {
  var ret = '';
  var tmp_fr=0;
  var maxTry=10;
  if (sim == undefined) {
    sim = slog-1;
  }
  if (sim<1)
    sim=1;

  for (var i=0; i<a.length; i++) {
    var sl1 = a[i].slog.substr(-sim);
    var sl2 = slog.substr(0, sim);
    if(sl1 == sl2 &&
      a[i].fr > tmp_fr &&
      maxTry>0) {
      maxTry--;
      ret = a[i].slog[0];//.substr(0, a[i].slog.length-sim);
      tmp_fr = a[i].fr;
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
								"l": "Блас, Бран, Гет, Ландер, Лют, Малсер, Стор, Таман, Урт, Фрат, Эндер, Асеир, Бардеид, Зашеир, Кхемед, Мехмен, Судейман, Хасеид, Боривик, Владислак, Джандар, Канитар, Мадислак, Ральмевик, Фаургар, Шаумар, Антон, Диеро, Маркон, Пьерон, Римардо, Ромеро, Салазар, Умберо, Гендалдор, Гилнарет, Матиас, Руфус, Том, Тиль, Колин, Вольмонт, Бальтазар, Гаспар, Малтинар, Гранхадар, Тирнадир, Лираэн, Лаэрт, Лир, Линтон, Франциск, Глауферус, Шальтаран, Тиандор, Тэорин, Абсолон, Аделард, Аднет, Аднот, Адольф, Адриан, Аим, Александр, Ален, Алфонс, Алэр, Амадиу, Амадоер, Амбруаз, Амеди, Аморай, Амори, Амэйбл, Анатоуль, Андрайон, Андрэ, Анселм, Антоин, Антонин, Аполлинер, Аристид, Арман, Армэль, Арно, Асс, Астор, Атаназ, Ашиль, Базиль, Баптист, Барзэлеми, Барнэйб, Бартомиу, Бастиан, Бедоир, Бенезет, Беноит, Бернард, Блез, Бодуен, Бонифас, Брис, Валентин, Валери, Вейлр, Вивьен, Гаетан, Гай, Гаскон, Гаспард, Гастон, Гауэйн, Гвенаэль, Гильберт, Гильбэ, Годард, Годдард, Госс, Готие, Готье, Гратин, Грегоир, Гуарин, Гуаринот, Гуиллом, Гюстав, Дайодор, Дайон, Дамиен, Дартагнан, Дегэйр, Дезире, Денис, Деодат, Джасмин, Джервэйс, Джервэйса, Джереми, Джерод, Джехан, Джиннот, Джоердэйн, Джозеф, Джозу, Джорджес, Джори, Джосселин, Дидье, Диудонн, Доминик, Донат, Донатиан, Еуген, Жак, Жан, Жанбаптист, Жермен, Жером, Жиль, Жиральд, Жирард, Жоффруа, Жоэл, Жюлиан, Жюль, Жюст, Зачари, Ивес, Ивон, Изаи, Изидор, Илберт, Иняс, Ирэн, Камиль, Киприан, Климент, Кловис, Клод, Коломб, Коломбэйн, Константен, Корентин, Корин, Корнеил, Косм, Коум, Кристоф, Лазар, Лайонел, Ламмерт, Ланс, Леджер, Леон, Леонайд, Леонард, Леонс, Леопольд, Линдр, Лоренс, Лорент, Лорентин, Лотер, Лоуп, Луи, Люк, Люсиан, Максайм, Максимилиан, Макэр, Марин, Марк, Маркеллин, Маркэль, Марселон, Мартин, Матис, Матиу, Маттиу, Мейкснс, Михель, Могир, Модест, Модестайн, Моджер, Морис, Моррис, Назэр, Наполеон, Нарсис, Никодем, Николас, Нил, Нихэль, Но, Ноэль, Обен, Оберон, Обэ, Огастин, Огюст, Ода, Одилон, Одрик, Озанн, Озэйнн, Оливье, Онезим, Орел, Орелин, Отес, Папиллайон, Паскаль, Пасхаль, Патрис, Пепин, Перрин, Персевэль, Персиваль, Пирр, Понс, Раинер, Раймунд, Рауль, Рафаэль, Реджис, Реинманд, Реинод, Ремай, Реми, Ренард, Ренод, Рин, Роберт, Роджер, Родолф, Родольф, Родриг, Рок, Роланд, Ролэйнд, Ромен, Роюзл, Рул, Саин, Саломон, Саржа, Сача, Себастин, Север, Северин, Серафин, Силвестр, Силестин, Сильвен, Сиприан, Сириль, Сисар, Сисэр, Стефан, Телесфор, Тео, Теодор, Теофил, Тибо, Тимоти, Тирри, Туссэйнт, Тьери, Фабрис, Фабьен, Феликайт, Феликин, Феликс, Фернан, Ферранд, Феррант, Фиакр, Филберт, Филиберт, Филипп, Фирмин, Флорентин, Фолкет, Форест, Франк, Франкоис, Фредерик, Фрери, Фулкс, Хамелет, Хамнет, Хамон, Херв, Хилэр, Хонор, Хорас, Хугуес, Чарлот, Чарльз, Шарлеман, Эварист, Эврард, Эдгард, Эдмонд, Эдуард, Эймерай, Эймери, Эймерик, Эли, Элисон, Элои, Эмери, Эмерик, Эмилин, Эмиль, Энис, Эркюль, Эрменеджилд, Эсм, Этьенн, Эюсташ, Юдес, Юдо, Юдон, Юрбен, Абелард, Август, Агидиус, Адалард, Адалбречт, Адалвалф, Адалрик, Адалрикус, Адалстан, Адалуолф, Адалхард, Адальберт, Аддлер, Аделалф, Аделбречт, Аделмар, Аделрик, Аделхард, Аджид, Адлар, Адлер, Адольф, Алард, Аларикус, Альберт, Алмерик, Алоис, Алтман, Алфихар, Алфонс, Амалирикус, Амалрик, Амалрих, Анико, Анкэль, Ансгар, Анселл, Анселл, Анселм, Ансельм, Ансоберт, Апсэль, Арман, Армен, Армин, Арн, Арндт, Арне, Арнольд, Артур, Астор, Ахлф, Аццо, Бамбер, Баптист, Бартолд, Бартолемос, Бартоломос, Бенедикт, Берингар, Бернд, Берндт, Бернхард, Бертолд, Берхард, Болдер, Бонифац, Бруно, Брунс, Варин, Велтен, Вендэль, Вензеслос, Вензэль, Вернер, Вертэр, Виг, Виланд, Вилберт, Виллафрид, Вилли, Вилфрид, Вилфрит, Вилхелм, Вим, Винзенз, Винфрид, Витолд, Воинот, Волдемар, Волдо, Волдхар, Волдэри, Волкер, Волф, Волфганг, Вольфрам, Гайдин, Ганс, Гантер, Гантрам, Генрих, Георг, Герард, Герарт, Герберт, Годафрид, Гоззо, Гомерик, Горст, Готтард, Готтилф, Готтлиб, Готтлоб, Готтолд, Готтфрид, Готчолк, Гофрид, Гоц, Гэровалд, Гюнтер, Гюнтхер, Дачс, Дедерик, Дедрик, Дедрич, Детлеф, Джакоб, Джебберт, Джебхард, Джевехард, Джервалф, Джервас, Джерд, Джереон, Джерлак, Джернот, Джеррит, Джерт, Джерфрид, Джерхардт, Джерхолд, Джисилберт, Джисфрид, Джозеф, Джокем, Джокэн, Джорг, Джочим, Дидерик, Дидерич, Диди, Дидрич, Диерет, Дизэлм, Дирк, Дитлинд, Дитмар, Дитрич, Дитфрид, Еремиас, Ерс, Зэодор, Иво, Игнац, Изаак, Изидор, Ингваз, Индж, Исаак, Йохан, Карл, Карлманн, Карломан, Карстен, Каспар, Керт, Кипп, Кифер, Клеменс, Клос, Колман, Коломан, Конрад, Константин, Корбиниан, Корбл, Кристоф, Ксейвр, Куно, Кэйетан, Кэйсер, Лабберт, Ладвиг, Ламмерт, Лампречт, Ландеберт, Ландоберкт, Ланзо, Леберечт, Ленз, Леон, Леонхард, Леонхардт, Леопольд, Леудболд, Лиафвин, Лиутберт, Лоренц, Лотар, Лотэйр, Лудджер, Луитджер, Луитполд, Лукаш, Луц, Максимилиан, Манфред, Манфрид, Маркус, Мартин, Матис, Меинард, Меино, Меинрад, Меинхард, Менно, Мертен, Мориц, Никлос, Николаус, Николос, Одо, Олберик, Олберих, Олбрект, Олбречт, Олдман, Олдрик, Олдрис, Олдрич, Оллард, Оллдрич, Ортвин, Орэль, Отто, Оттокар, Панкрац, Парзифал, Парзифаль, Полди, Полдти, Рабан, Раджинманд, Радульф, Раймунд, Райнер, Райнхард, Райнхольд, Ральф, Рафаэль, Реджинар, Реджинманд, Реджинолд, Реджинхард, Рейн, Рето, Рикердт, Рикерт, Ричард, Ротджер, Руди, Рудиджер, Рудольф, Руперт, Руппрехт, Рэйнер, Саша, Северин, Сепп, Сеппэль, Сигард, Сигберт, Сигманд, Сигфрид, Сиджи, Сиджисвалд, Сиджисманд, Сик, Симен, Стефан, Стеффен, Танкред, Тджарк, Тедерик, Тилл, Тилло, Тиуоз, Трогот, Ув, Удо, Улбречт, Улрич, Уолахфрид, Уолтэр, Уотан, Уц, Уэнделл, Фалберт, Фалко, Фарамонд, Фастред, Фед, Фестер, Филипп, Фило, Флоренц, Франц, Фреддерк, Фредж, Фридеман, Фридрих, Фридхелм, Фридхолд, Фритц, Фундук, Хаган, Хайнц, Ханк, Харальд, Хардвин, Харман, Харманд, Хартвиг, Хартвин, Хартман, Хартмут, Хейден, Хейк, Хейко, Хейлгар, Хеймерик, Хеймо, Хейн, Хейнер, Хейно, Хелмудт, Хелмут, Хелмфрид, Хелфгот, Хелфрид, Хеннинг, Хенрик, Хериберт, Херман, Херрик, Хилберт, Хилдеберт, Хилдебранд, Хинрич, Хладвиг, Хлодовик, Храбан, Хрода, Хродалф, Хродвалф, Хродеберт, Хродланд, Хродрик, Хролф, Хугуберт, Хулдерик, Хунфрит, Хупперт, Хуппречт, Хэймирич, Хэймо, Чустаффус, Эб, Эберард, Эберарт, Эберт, Эберхард, Эбнер, Эверт, Эгджерт, Эгон, Эдзард, Эдсэль, Эдуард, Эилерт, Экберт, Экехард, Экхард, Экхардт, Элдрик, Элдрич, Эллдрич, Эмерик, Эмерис, Эмиль, Эммерик, Эморри, Энгэль, Энджелберт, Энн, Эрвин, Эрдман, Эрдмудт, Эрдмут, Эрих, Эрнст, Эрхард, Эуген, Эцэль, Юалд, Юрген, Айзик, Альтер, Аншель, Арке, Авром, Аврум, Айзик, Бенеш, Бер, Велвел, Гаврел, Гершель, Герш, Довид, Залман, Зефф, Зелиг, Зик, Зиндел, Зусман, Зусманн, Исер, Иссер, Иссур, Итцик, Капель, Коппель, Кузмир, Лазер, Лемел, Лев, Лью, Либер, Льебер, Маниш, Машел, Мендель, Мойше, Мордше, Мотель, Мотке, Сефф, Секел, Селиг, Сроел, Срол, Тейвел, Тевье, Файвиш, Файвел, Фейбуш, Фейвел, Фишел, Фишке, Хаскел, Хешель, Хешл, Хирш, Хиршель, Хайман, Хайми, Часкел, Чацкел, Шиммель, Эля, Эли, Элкан, Юдель, Юссел, Янкель, Айдж, Амлет, Асджер, Бендт, Бент, Браин, Валентин, Вилфред, Гадбранд, Греджерс, Дагфинн, Джанник, Джеррик, Джеспер, Джиллис, Джокум, Джорджен, Джорк, Джорн, Иб, Ивер, Йенс, Кджелд, Келд, Клеменс, Крестен, Кристен, Кристер, Кристиан, Кэй, Лоритс, Лориц, Мадс, Модженс, Мортен, Нилс, Нуд, Ол, Олав, Педер, Пребен, Пул, Регнер, Свенд, Стин, Тарбен, Тидж, Торбджорн, Торбен, Торстен, Троелс, Тью, Улф, Флемминг, Фредерик, Фроуд, Хаген, Хелдж, Холдор, Холлдор, Холлдоур, Элуф, Адалфанс, Аларик, Аларис, Алариск, Алево, Алерик, Алерис, Алрик, Алрис, Алриск, Вермандо, Гандизалв, Ерменехильдо, Зэодереикс, Зэодорик, Зэудорикус, Одоасер, Одовакар, Олларик, Олларис, Оллерик, Оллерис, Оллрик, Раджинмар, Сандалф, Тиудорикус, Фердинанд, Хилдефонс, Эварик, Эерик, Ааран, Аарен, Ааррон, Аб, Аббат, Абботт, Абей, Абелл, Абель, Абнар, Абнер, Абнор, Абот, Аботт, Абрам, Абран, Абрахам, Абсалон, Аверилл, Адам, Аддам, Аддисон, Аден, Адисон, Адиссон, Адлэй, Адней, Адольф, Адриан, Адэйр, Адэр, Азия, Азэлстан, Айбл, Айзек, Айк, Ак, Акей, Акерлеа, Акерлей, Акерли, Аки, Аклеа, Аклей, Акли, Актон, Акэль, Алан, Аластеир, Аластэйр, Алвар, Алвен, Алви, Алвин, Алвис, Алгар, Алджернон, Алеистер, Алек, Алекс, Александр, Ален, Алестер, Алжир, Алик, Аликс, Алисандр, Алисдэйр, Алиссандр, Алистер, Алистэйр, Аллан, Аллен, Аллин, Аллистер, Аллистир, Аллистэйр, Алтон, Алф, Алфонзо, Алфорд, Алфрид, Альберт, Альдина, Альпин, Альтаир, Альфа, Альфи, Альфред, Алэйстер, Алэйстэйр, Амби, Амброуз, Амедеус, Амиас, Амори, Амос, Амьяс, Анакин, Ангел, Ангес, Андерсон, Анджелл, Анж, Анском, Анскомб, Ансон, Антван, Антуан, Арден, Арик, Арил, Арин, Аркелл, Арли, Арман, Арн, Арне, Арни, Арнольд, Арран, Аррин, Аррон, Арт, Арти, Артур, Арчи, Арчибальд, Аселет, Аселин, Асер, Астон, Афтон, Аффтон, Ачилл, Аш, Ашер, Аштон, Бад, Бадди, Баз, Базилик, Байрон, Байярд, Бак, Бакстер, Балдер, Балдрик, Бамби, Баптист, Бардолф, Барии, Барклей, Барнабас, Барни, Барнэби, Барретт, Барри, Барт, Бартоломей, Бассетт, Бастер, Бастиан, Батч, Беван, Беверли, Бевис, Бедивир, Бейб, Бейлей, Бейлие, Бен, Бенджамин, Бенджи, Бенедикт, Бенет, Беннетт, Бенни, Бенние, Бенсон, Бентлей, Бентон, Беорегард, Бердт, Беренгар, Беренджер, Берет, Бернард, Берни, Берри, Берт, Берти, Бертон, Бертрам, Бертран, Бивис, Билл, Билли, Бисш, Биф, Блейн, Близэ, Блисс, Блэйз, Блэйк, Блэйн, Блэр, Боб, Бобби, Болдуин, Боллард, Бомонт, Бонифэйс, Борис, Брадлей, Браеден, Брайен, Брайон, Бранден, Брандон, Браннон, Брейден, Брейдн, Брендан, Бренден, Брендон, Бреннан, Брент, Брентон, Брет, Бретт, Бриар, Брион, Брис, Бриско, Бриттон, Бриэм, Бродерик, Броди, Броз, Брок, Бронт, Броуди, Броук, Брук, Брукс, Бруно, Брутус, Брьянт, Брэд, Брэди, Брэдфорд, Брэйден, Брэйди, Брэм, Брэн, Брюс, Брююс, Буз, Букер, Бью, Бэйли, Вал, Валентайн, Вард, Ваухан, Вашингтон, Вебстер, Велдон, Вер, Верджил, Верн, Вернон, Вестер, Вестлей, Вестон, Вик, Виктор, Вил, Вилберн, Вилей, Вилки, Вилл, Вилли, Виллоби, Вилмар, Вилмер, Вилмот, Вилсон, Вилф, Вилфорд, Вильтон, Вин, Виндзор, Винни, Винс, Винсент, Винслоу, Винтроп, Вирджиль, Вистан, Витейкр, Витней, Воган, Вогн, Волдо, Волкер, Воллис, Вольф, Воспой, Вуди, Вудроу, Вулф, Вьятт, Вэйд, Вэйланд, Вэнс, Габби, Габриэль, Гай, Гайлс, Гален, Гамильтон, Гантэр, Гарван, Гарей, Гарланд, Гарнет, Гарольд, Гарри, Гарс, Гарфилд, Гас, Гваделупа, Гейб, Гейл, Гейр, Гектор, Ген, Генри, Герберт, Герман, Гидеон, Гильберт, Гисберт, Гладвин, Гланвилл, Глендауэр, Гленн, Глэн, Говард, Годвин, Годфри, Голлагэр, Голладжер, Гомер, Горд, Горден, Гордон, Граем, Грай, Гранвилл, Гранд, Грахэйм, Грег, Грей, Гренвилл, Гриир, Грир, Гриффин, Гриффит, Гровер, Грэг, Грэгори, Грэди, Грэм, Гудвин, Гудзон, Гэй, Гэйбл, Гэйг, Гэйдж, Гэйелорд, Гэйл, Гэйлон, Гэйлорд, Гэйр, Гэлл, Гэри, Давей, Дави, Дад, Дадда, Дадли, Даймонд, Дакей, Дакота, Дакс, Далтон, Дамайон, Дамиан, Дана, Дани, Данки, Данни, Дарби, Дарвин, Дарден, Дарен, Дариан, Дарил, Дарин, Дарки, Дарнелл, Даррел, Даррен, Даррил, Даррин, Даррэль, Дартагнан, Дасти, Дастин, Дау, Дафф, Даффи, Дашилл, Дван, Двэйн, Деай, Деван, Девен, Девереукс, Девин, Девон, Дейв, Дейл, Дейрлл, Дейрн, Деклан, Декстер, Делберт, Делл, Делмар, Делрой, Деметриус, Демон, Ден, Денвер, Денеб, Дензэль, Дени, Денил, Деннис, Дентон, Деон, Деонн, Деонт, Дерби, Дерек, Дерик, Дермот, Дерок, Деррен, Дерри, Деррил, Дефорест, Дефоррест, Дешон, Джадд, Джадин, Джай, Джайлс, Джак, Джамар, Джамей, Джамисон, Джарвис, Джаред, Джарод, Джарред, Джарретт, Джаррод, Джаспер, Джасти, Джастин, Джеб, Джед, Джед, Джедидиа, Джейдн, Джейк, Джейлн, Джейми, Джеймс, Джейрт, Джейсон, Джекки, Джекоб, Джем, Дженкин, Джеп, Джер, Джералд, Джеральд, Джерард, Джерваз, Джервис, Джереми, Джери, Джермэйн, Джеролд, Джером, Джеррард, Джерред, Джерри, Джеррод, Джерролд, Джес, Джесси, Джетро, Джетт, Джеф, Джеффери, Джефферсон, Джеффрей, Джеффри, Джиб, Джид, Джиди, Джил, Джим, Джими, Джимми, Джисберт, Джиффард, Джо, Джоб, Джоби, Джоджо, Джоди, Джозеф, Джой, Джойс, Джон, Джоназан, Джоназон, Джонасон, Джонатан, Джоней, Джони, Джонни, Джонти, Джорги, Джордан, Джордж, Джорди, Джордон, Джосс, Джоул, Джош, Джошоа, Джошуа, Джулс, Джульян, Джустис, Джьюд, Джэй, Джэйд, Джэйда, Джэйден, Джэйдон, Джэйкоб, Джэйлен, Джэйлин, Джэйлон, Джэймес, Джэйсон, Джэксон, Джэмини, Джэмми, Джэн, Ди, Диакон, Дигби, Диггори, Дигори, Дизон, Дик, Дики, Дикки, Дил, Дилан, Дилберт, Димер, Дин, Диндр, Дирк, Доб, Додж, Дольф, Дом, Доменик, Доминик, Дон, Дональд, Донни, Донован, Дор, Дориан, Доусон, Драйк, Древ, Дрейвн, Дуайт, Дуан, Дуг, Дуги, Дуглас, Дункан, Дунстан, Дью, Дьюей, Дьюэйн, Дэвид, Дэвис, Дэй, Дэйви, Дэйн, Дэйтон, Дэн, Дэни, Дэниел, Дэнни, Дэррик, Дэшон, Дюк, Жюль, Завир, Зак, Закери, Зандер, Захарий, Зачариа, Зачэри, Зед, Зедекиа, Зек, Зубин, Зэофилус, Иб, Игнатиус, Ид, Иззи, Изидор, Имон, Инглеберт, Инграм, Инди, Индиана, Индиго, Инесент, Иниго, Иорик, Ирвайн, Ирвин, Ирвинг, Ирл, Ирнест, Иссак, Исси, Истер, Йорк, Ка, Кадмус, Каин, Каир, Кайд, Кайл, Кал, Каллен, Кам, Камден, Камрон, Карбрей, Карбри, Карвер, Карей, Карл, Карлайл, Карлейл, Карлин, Карлтон, Каррол, Картер, Касиди, Каспер, Кассиди, Квентин, Квинтин, Кеван, Кевин, Кей, Кейденс, Кейдн, Кейлб, Кеймрон, Кейси, Келвин, Келкей, Келл, Келли, Келсей, Кемп, Кен, Кендал, Кендол, Кендрик, Кенелм, Кензи, Кенит, Кеннеди, Кеннет, Кенни, Кеннит, Кенрик, Кент, Кентиджерн, Кентон, Кермит, Керней, Керр, Керри, Керт, Кертис, Кешон, Ки, Киаран, Килан, Килер, Килиан, Киллиан, Кимбелайн, Кимберли, Кимбол, Кимбэль, Кин, Кинан, Кинастон, Кинг, Кингслей, Кип, Киран, Кирби, Кирк, Кирон, Кирус, Кит, Китон, Киф, Клайв, Клайд, Кланкей, Кланки, Кларенс, Кларк, Клев, Клей, Клейтон, Клем, Клемент, Клемми, Клетис, Клетус, Кливленд, Клинт, Клинтон, Клифтон, Клифф, Клиффорд, Клод, Клэйрк, Клэр, Кодей, Коди, Коертней, Кола, Коламбан, Колберт, Колби, Колдер, Колин, Коллахан, Коллин, Коллум, Колтен, Колтон, Кольт, Конан, Конвей, Конлей, Коннелл, Коннер, Коннор, Конор, Конрад, Конфуций, Корбин, Корделл, Корей, Кори, Корнелиус, Кортней, Кортни, Корэй, Коти, Коул, Коулман, Крис, Криспиан, Криспин, Кристи, Кристиан, Кристопэр, Кристофер, Крофорд, Крофтон, Крэйг, Ксавайор, Ксавьер, Ксан, Ксзавир, Куин, Куинкей, Куинси, Куинтон, Купер, Курт, Куртис, Кэйд, Кэйдн, Кэйл, Кэйлб, Кэймрон, Кэйн, Кэйси, Кэлвин, Кэм, Кэмп, Кэмпбэл, Кэри, Лаверн, Лавлл, Лаз, Лайл, Лайонел, Лаки, Ланни, Ланфорд, Ларк, Ларкин, Ларри, Леви, Лейврн, Лейн, Лейтон, Лекс, Леланд, Лем, Лемми, Лемюэль, Лен, Ленард, Лени, Леннард, Ленни, Лео, Леон, Леонард, Леопольд, Лерой, Лес, Лесли, Лестер, Ли, Лии, Лин, Линдон, Линдсей, Линдси, Линкольн, Линн, Линсей, Линтон, Линус, Линфорд, Лирой, Лисандр, Литон, Лихнис, Ллойд, Ллью, Лльюелин, Лльюеллин, Ло, Ловэль, Лойд, Лон, Лондон, Лонни, Лонс, Лорен, Лоренс, Лори, Лорин, Лорни, Лоррин, Лосон, Лоуэлл, Лу, Лудо, Луи, Лукиан, Льюин, Льюис, Лэйк, Лэйн, Лэйтон, Лэндон, Лэнс, Лэрри, Людовик, Люк, Люкс, Лютер, Маверик, Мадисон, Майк, Майкл, Майлз, Майрон, Макей, Макензи, Маки, Макинтош, Маккензи, Макс, Максвелл, Максимиллиан, Малачи, Малком, Малоун, Манлей, Манни, Манникс, Марвин, Мариус, Марка, Марко, Маркус, Марлен, Марлин, Марлон, Марлоу, Мармадьюк, Марри, Марти, Мартиал, Мартин, Маршал, Маршалл, Масон, Мастерман, Матти, Мед, Мелвилль, Мелвин, Мельбурн, Мерв, Мервин, Мерди, Мердо, Мердок, Мередит, Мерит, Мерл, Мерлин, Меррилл, Мерритт, Мертон, Мерфи, Мид, Миид, Мик, Мика, Мики, Микки, Милберн, Миллард, Мило, Милтон, Милфорд, Митчелл, Мич, Мича, Мичил, Мо, Моз, Моисей, Молком, Монро, Монтагью, Монтгомери, МонтеКарло, Монти, Монтморенки, Морган, Морген, Мордекэй, Морис, Морлей, Моррис, Морт, Морти, Мортимер, Мортон, Мосс, Моэ, Мулава, Мэйнард, Мэйнерд, Мэйор, Мэйсон, Мэйтланд, Мэлори, Мэль, Мэриан, Мэрион, Мэт, Мэтт, Мэтти, Мэтью, Назаниль, Найджел, Найлс, Нанди, Нат, Натан, Науэлл, Наш, Невада, Неван, Невил, Невилл, Нед, Нейл, Нейлл, Нейт, Нельсон, Нео, Нивек, Нивен, Ник, Никк, Никки, Николас, Нили, Нимбус, Ноа, Нолан, Нолл, Норберт, Норвуд, Норм, Норман, Норманд, Норрис, Нортон, Ноубль, Ноэль, Ньют, Ньютон, Оберон, Обин, Обри, Огастин, Огден, Огэст, Оделл, Одлей, Одран, Оз, Оззи, Океан, Олби, Олбэйн, Олдвен, Олдвин, Олден, Олдин, Олдис, Олдон, Олдос, Олдред, Олдус, Олдфорд, Олей, Оли, Оливер, Олластер, Олластир, Оллгар, Оллджер, Олли, Оллин, Оллисдэйр, Оллистер, Оллистэйр, Оллон, Оллэйстар, Омега, Ора, Оран, Орвал, Орвилл, Ориан, Ормерод, Оррелл, Оррин, Орсон, Осберт, Осбоерн, Осборн, Освальд, Осень, Оскар, Остен, Остин, Отис, Оттис, Оуин, Оуэн, Ошин, Пайс, Палмер, Панкрас, Паркер, Паррис, Пат, Патрик, Патси, Пеитон, Пепин, Перри, Перс, Перси, Персиваль, Петеркин, Пип, Пипер, Пирр, Пирс, Пит, Питер, Пол, Поли, Поликарп, Помпей, Портер, Престон, Приам, Принц, Проспер, Пэйс, Пэйси, Пэйтон, Равен, Раз, Раймонд, Раймунд, Райордан, Райт, Ралф, Ралфи, Ральф, Ранделл, Ранди, Рандолф, Рандольф, Расс, Рассел, Рассэль, Расти, Растус, Раян, Реарден, Реган, Редклиф, Редклифф, Редлей, Редд, Редж, Реджи, Реджинальд, Редманд, Редмонд, Реид, Рей, Рейли, Рейнард, Рейнольд, Рекс, Риган, Ригби, Рид, Ридлей, Риель, Рик, Рикей, Рики, Рилан, Рилей, Рили, Рио, Риплей, Рис, Рич, Ричард, Ричи, Роб, Робби, Роберт, Роби, Робин, Рован, Род, Роддж, Родджер, Родди, Родерик, Роджер, Родни, Родолф, Рой, Ройл, Ройс, Ройстон, Роки, Роланд, Роли, Ролланд, Ролли, Рон, Рональд, Ронни, Рори, Роско, Росс, Роуланд, Роулей, Роял, Рубен, Рубин, Руди, Рудольф, Рудьярд, Рхетт, Рьюб, Рэд, Рэй, Рэйнард, Рэйнер, Рэйф, Рэндал, Рэндалл, Савьер, Сайг, Саймон, Салал, Салливан, Самми, Сандфорд, Санни, Санфорд, Свизин, Свизун, Свиней, Себастьян, Севард, Седрик, Сеймур, Селби, Септембер, Сесил, Сет, Сефтон, Сивард, Сигманд, Сид, Сидней, Силас, Силвестр, Сильвер, Сильвестр, Симеон, Синклэйр, Сирил, Сисар, Скай, Скилар, Скилер, Скот, Скотти, Скуилер, Слай, Слэйд, Сони, Сонни, Спайк, Спарроу, Спенсер, Спиро, Стакей, Стаффорд, Стерлинг, Стеф, Сти, Стив, Стивен, Стиви, Стиу, Сторм, Сту, Стэки, Стэн, Стэнли, Стэнфорд, Стюарт, Сэм, Сэмюэль, Сэнди, Тад, Таддеус, Тай, Такер, Тал, Талбот, Таннер, Таскилл, Таффи, Тед, Тейгу, Тейдж, Тейрк, Текс, Тенней, Теннизон, Тео, Теобальд, Теодор, Теранс, Теренс, Терло, Терранс, Террелл, Терренс, Терстон, Ти, Тиарнак, Тиарнан, Тибалт, Тибби, Тигу, Тизон, Тилар, Тилер, Тилор, Тим, Тимми, Тимоти, Тирелл, Тирнан, Тирней, Тирон, Тироун, Тиррелл, Тоал, Тоби, Тобиас, Тобин, Тод, Тодд, Толли, Том, Томас, Томми, Тон, Тони, Топэр, Торлей, Торнтон, Травис, Тракей, Трантер, Траффорд, Траэрн, Трев, Тревельян, Тревор, Трейврс, Трейс, Трейси, Трент, Трентон, Тристрам, Трой, Труман, Тусон, Тэдди, Тэди, Тэйлер, Тэйлор, Тэйн, Тэйт, Тэл, Тэмпл, Тэрри, Уилбер, Уиллард, Уиллис, Уилфред, Уилфрид, Уильям, Уинстон, Уинфред, Уисдом, Улайксс, Улиссес, Уолли, Уоллис, Уолт, Уолтер, Уолтон, Уорик, Уорнер, Уоррен, Уот, Уоткин, Уптон, Урбан, Уриах, Уэйн, Уэсли, Фабиан, Фалк, Фарлей, Фарон, Фарран, Фелан, Фелиз, Феликс, Фелим, Фелис, Фентон, Ферги, Фергус, Ферд, Ферди, Фердинанд, Фестер, Фестус, Фидо, Фил, Филайп, Филандр, Филберт, Филип, Филипп, Фило, Финикс, Финис, Флемминг, Флечер, Флинн, Флинт, Флойд, Флорри, Флурри, Фок, Фокс, Фонз, Фонзи, Форбес, Форд, Форест, Форрест, Фостер, Фоук, Фразир, Франклин, Фред, Фредди, Фредерик, Фредрик, Фрейзер, Фрейзр, Фримэн, Фритс, Фродо, Фрэнк, Фрэнки, Фрэнклин, Фрэнс, Фрэнсис, Хавелок, Хадвин, Хадлей, Хал, Хам, Хамиш, Хамлет, Хаммонд, Ханк, Ханлей, Хантер, Харв, Харви, Харди, Хардинг, Харкоерт, Харлан, Харланд, Харлей, Харлин, Хармон, Харпер, Харрис, Харрисон, Хартлей, Хауелл, Хедлей, Хек, Хендерсон, Хендрик, Хенрай, Хенри, Херб, Херби, Хервей, Херлей, Хиацинт, Хилари, Хиллэри, Хирам, Хис, Хитклифф, Хию, Хоард, Хоб, Ходдж, Хойт, Холден, Холл, Холлис, Хомер, Хопкин, Хорас, Хоратайо, Хоуи, Худд, Хуей, Хует, Хукк, Хукслей, Хумберт, Хунтлей, Хуффи, Хью, Хьюберт, Хьюго, Хьюи, Хэвен, Хэдлей, Хэйвуд, Хэйден, Хэйл, Хэмфри, Хэппи, Хюи, Чад, Чадвик, Чаз, Чак, Чакки, Чарли, Чарлтон, Чарльз, Час, Чейз, Чендлер, Ченс, Черокез, Честер, Чеьянн, Чип, Чонки, Чонси, Ша, Шад, Шаи, Шайенн, Шакуилл, Шамус, Шан, Шаннен, Шаннон, Шау, Шеврон, Шелби, Шелдон, Шеллей, Шелтон, Шем, Шервуд, Шеридан, Шерлок, Шерман, Ши, Шилох, Шимус, Шолто, Шон, Шэй, Шэйн, Эбби, Эбен, Эбенезер, Эван, Эвелин, Эверард, Эверетт, Эверитт, Эвот, Эгберт, Эд, Эдан, Эдвард, Эдвин, Эдгар, Эдди, Эдисон, Эдмунд, Эдон, Эдун, Эзраа, Эзэлстан, Эзэлуолф, Эйб, Эйби, Эйвери, Эйден, Эйлберт, Эйлвард, Эймерей, Эймери, Эйнслей, Эйнсли, Эйс, Элайотт, Элбан, Элвин, Элвис, Элвуд, Элгар, Элдвен, Элдвин, Элден, Элджер, Элдин, Элдис, Элдон, Элдред, Элдус, Эли, Эли, Элиас, Элиджа, Элиот, Элла, Эллгар, Эллджер, Эллери, Эллиот, Эллис, Элмер, Элрик, Элрой, Элсдон, Эльберт, Эльтон, Эмерсон, Эмиль, Эммануель, Эммерсон, Эммет, Эмметт, Эмори, Эмэри, Энджелберт, Энди, Эндрю, Энтони, Эрван, Эрвин, Эрек, Эрик, Эрл, Эрн, Эрнест, Эрни, Эрон, Эррол, Эрролл, Этан, Этелберт, Этелред, Этелрик, Этелхард, Эшли, Эюзби, Юджин, Юлиан, Юлиус, Юниор, Юстас, Янкей, Янки, Ярвуд"
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

  var tmp;
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
				//console.log(string);

        o.parts={};
        o.parts.start={};
        o.parts.mid={};
        o.parts.end={};
        o.st=[];
        o.mid=[];
        o.end=[];
        o.st_num=0;
        o.mid_num=0;
        o.end_num=0;

        var arr = string.split(separator);
       // console.dir(arr);
        /**/
        var tmp_s='';
        for (var i=0; i<arr.length; i++) { // words
          for (var j=0; j-1<arr[i].length-depth; j++) { // simbols in word
            tmp_s='';
            var f_s=false;
            var f_e=false;
            for (var s=0; s<depth && arr[i][+j+ +s]; s++) { // triads
              tmp_s+=arr[i][+j+ +s];
            }

            if (/[А-ЯЁ]+/.test(tmp_s)) {
              f_s=true;
            }
            if (j==arr[i].length-depth) {
              f_e=true;
            }


            if(f_s){
              tmp_n=o.parts.start[tmp_s];
              if(tmp_n>0){
                o.parts.start[tmp_s]++;
                o.parts.st_num++;
              }
              else {
                o.parts.start[tmp_s]=1;
              }
            }
           //
            if(f_e){
              tmp_n=o.parts.end[tmp_s];
              if(tmp_n>0){
                o.parts.end[tmp_s]++;
                o.parts.end_num++;
              }
              else{
                o.parts.end[tmp_s]=1;
              }
            }
           //
            if(!f_s && !f_e){
              tmp_n=o.parts.mid[tmp_s];
              if(tmp_n>0){
                o.parts.mid[tmp_s]++;
                o.parts.mid_num++;
              }
              else{
                o.parts.mid[tmp_s]=1;
              }
            }
          }
        }

        var tmp_i=0;
        for (var slog in o.parts.start) {
          o.st[tmp_i]={};
          o.st[tmp_i].slog=slog;
          o.st[tmp_i].fr=o.parts.start[slog];
          tmp_i++;
        }
        tmp_i=0;
        for (var slog in o.parts.mid) {
          o.mid[tmp_i]={};
          o.mid[tmp_i].slog=slog;
          o.mid[tmp_i].fr=o.parts.mid[slog];
          tmp_i++;
        }
        tmp_i=0;
        for (var slog in o.parts.end) {
          o.end[tmp_i]={};
          o.end[tmp_i].slog=slog;
          o.end[tmp_i].fr=o.parts.end[slog];
          //console.log(end[tmp_i].slog+ " " + end[tmp_i].fr);
          tmp_i++;
        }
        /**/

        //console.dir(o);
       // debugger;
			}
		}
	}
}

function make_name2(src) {
  var name = '';
  var name2 = '';
  var maxLength = randd(0,4);
  name2 = name = getFr(shuffle(src.end));

  for (var q=0; q<maxLength; q++) {
    sh = shuffle(src.mid)
    name = getSim(name, sh, 2) + name;
    //name2 = getSim2(name, sh, 2) + name2;
  }

  sh = shuffle(src.st)
  name = fixName(getSim(name, sh, 2) + name);
  //name2 = fixName(getSim2(name2, sh, 2) + name2);
 // fixName(name)

  //return name + " " + name2;
  return name;
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
	/**/

$("body").empty();
for(var r=0; r<5; r++) {
  name = make_name2(names.l[0].list[0].src[0]);
  surname = make_name2(names.l[0].list[0].src[2]);
  //console.log(name);
  $("body").append(name+" "+surname+"<br>");
}
/**/
//console.dir(freqdict);

});
