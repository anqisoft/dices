import { DiceGenerator, DiceKind } from './dice.ts';
import { AnQiData, getPageCss, parsePageParamsFromUrl } from './const.ts';
import { getPageParameterByName } from './const.ts';
import { createPageElement } from './dom.ts';

(function drawDice() {
	parsePageParamsFromUrl(window.location.href);

	// A3, LANDSCAPE, PAGE_PADDING_TOP, PAGE_PADDING_LEFT, MM_TO_PX_SCALE, PX_TO_MM_SCALE, PAGE_WIDTH, PAGE_HEIGHT
	const { A3, LANG, NO, LANDSCAPE } = (window as unknown as { anqiData: AnQiData }).anqiData;

	// const url = window.location.href.replace('?', '&')
	//   .replace(/&face=/gi, '&face=')
	//   .replace(/&side=/gi, '&side=')

	//   .replace(/&contents=/gi, '&contents=')

	//   .replace(/&outer_line_style=/gi, '&outer_line_style=')
	//   .replace(/&inner_line_style=/gi, '&inner_line_style=')
	//   .replace(/&text_style=/gi, '&text_style=')
	// ;

	const FACE_IN_URL = parseInt(getPageParameterByName('face', '0'));
	const FACE = FACE_IN_URL || 4;

	const FACE_STRING = FACE.toString();
	const DICE_KIND_MAP = {
		// '1': DiceKind.one,
		// '2': DiceKind.two,
		// '3': DiceKind.three,
		'4': DiceKind.four,
		// '5': DiceKind.five,
		'6': DiceKind.six,
		// '7': DiceKind.seven,
		'8': DiceKind.eight,
		// '9': DiceKind.nine,
		'10': DiceKind.ten,
		// '11': DiceKind.eleven,
		'12': DiceKind.twelve,
		// '13': DiceKind.thirteen,
		'14': DiceKind.fourteen,
		// '15': DiceKind.fifteen,
		'16': DiceKind.sixteen,
		// '17': DiceKind.seventeen,
		// '18': DiceKind.eighteen,
		// '19': DiceKind.nineteen,
		'20': DiceKind.twenty,
		'24': DiceKind.twentyFour,
		'26': DiceKind.twentySix,
		// '30': DiceKind.thirty,
		'60': DiceKind.sixty,
		// '100': DiceKind.oneHundred,
	};
	const CONTENTS_MAP = {
		// '1': [],
		// '2': [],
		// '3': [],
		'4': [
			'+,-,×,÷'.split(','),
			'ˉ,ˊ,ˇ,ˋ'.split(','),
			'地水火风'.split(''),
			// https://www.sohu.com/a/528303807_121124401
			'礼义廉耻'.split(''),
			'春,夏,秋,冬'.split(','),
			'东,南,西,北'.split(','),
			'梅,兰,竹,菊'.split(','),
			'琴,棋,书,画'.split(','),
			'笔,墨,纸,砚'.split(','),

			'太平洋、大西洋、印度洋、北冰洋'.split('、'),

			'布施,爱语,利行,同事'.split(','),
			'持国天王、增长天王、广目天王、多闻天王'.split('、'),
			'东胜神洲、西牛贺洲、南赡部洲、北俱卢洲'.split('、'),

			// https://baijiahao.baidu.com/s?id=1669282640802592235&wfr=spider&for=pc
			'造纸术、印刷术、火药、指南针'.split('、'),
			'经、史、子、集'.split('、'),
			'正、草、隶、篆'.split('、'),
			'焚香、点茶、挂画、插花'.split('、'),
			'苏绣、湘绣、粤绣、蜀绣'.split('、'),
			'西厢记、牡丹亭、桃花扇、长生殿'.split('、'),
			'三国演义、水浒传、西游记、红楼梦'.split('、'),
			'中医、书法、京剧、武术'.split('、'),
			'岳阳楼、黄鹤楼、滕王阁、鹳雀楼'.split('、'),
			'明清档案、殷墟甲骨、居延汉简、敦煌经卷'.split('、'),
			'青龙、白虎、朱雀、玄武'.split('、'),
			'穷奇、混沌、饕餮、梼杌'.split('、'),
			'福建泉州南音、西安城隍庙鼓乐、北京智化寺音乐、山西五台山青黄庙音乐'.split('、'),
			'关汉卿窦娥冤、马致远汉宫秋、白朴梧桐雨、纪君祥赵氏孤儿'.split('、'),
			'关汉卿拜月亭、王实甫西厢记、白朴墙头马上、郑光祖倩女离魂'.split('、'),
			'应天府书院、岳麓书院、白鹿洞书院、嵩阳书院'.split('、'),
			'京剧、黄梅戏、越剧、豫剧'.split('、'),
			'久旱逢甘雨，他乡遇故知，洞房花烛夜，金榜题名时'.split('、'),
			'牛郎织女、孟姜女、梁山伯与祝英台、白蛇传'.split('、'),
			'李宝嘉官场现形记、吴趼人二十年目睹之怪现状、刘鹗老残游记、曾朴孽海花'.split('、'),
			'敦煌莫高窟、洛阳龙门石窟、大同云冈石窟、天水麦积山石窟'.split('、'),
			'江苏宜兴紫砂陶、云南建水五彩陶、广西钦州坭兴桂陶、重庆荣昌安富陶'.split('、'),
			'成都蜀锦、南京云锦、苏州宋锦、广西壮锦'.split('、'),
			'鲁菜、川菜、粤菜、淮扬菜'.split('、'),
			// '杨乃武与小白菜、杨三姐告状、张文祥刺马案、淮安奇案'.split('、'),
			'七巧板、九连环、华容道、孔明锁'.split('、'),
			'古代中国、古代埃及、古代印度、古代巴比伦'.split('、'),
			// https://www.sohu.com/a/278455839_170984
			'檀香扇、火画扇、竹丝扇、绫绢扇'.split('、'),
			'封神演义、镜花缘、济公全传、八仙传'.split('、'),
			'搜神记、山海经、阅微草堂笔记、聊斋志异'.split('、'),
			'西施浣沙、昭君出塞、貂婵拜月、贵妃醉酒'.split('、'),
			'薛涛、李师师、梁红玉、柳如是'.split('、'),
			'蔡文姬、李清照、卓文君、上官婉儿'.split('、'),
			'穆桂英、樊梨花、秦良玉、梁红玉'.split('、'),
			'白娘子、孟姜女、虞姬、王宝钏'.split('、'),
			'包拯、狄仁杰、海瑞、刘墉'.split('、'),
			'专诸、要离、聂政、荆轲'.split('、'),
			'孙思邈、华佗、张仲景、李时珍'.split('、'),
			'唐伯虎、祝枝山、文征明、徐祯卿'.split('、'),
			'昆腔、高腔、梆子腔、皮黄腔'.split('、'),
			'黄帝内经、难经、伤寒杂病论、神农本草经'.split('、'),
			'梦溪笔谈、本草纲目、农政全书、天工开物'.split('、'),
			'窦娥冤、西厢记、牡丹亭、长生殿'.split('、'),
			'徐霞客游记、大唐西域记、穆天子传、马可波罗行记'.split('、'),
			'汉赋、唐诗、宋词、元曲'.split('、'),
			'长城、都江堰、灵渠、大运河'.split('、'),
			'西安、洛阳、南京、北京'.split('、'),
			'阆中古城、丽江古城、平遥古城、歙县古城'.split('、'),
			'佛山、景德镇、汉口、朱仙镇'.split('、'),
			'颐和园、承德避暑山庄、苏州拙政园、苏州留园'.split('、'),
			'赵州桥、洛阳桥、广济桥、霁虹桥'.split('、'),
			'江苏金山寺、福建普陀寺、河南文殊寺、江苏大明寺'.split('、'),
			'山西五台山、四川峨眉山、浙江普陀山、安徽九华山'.split('、'),
			'河北山海关、甘肃嘉峪关、甘肃玉门关、广西友谊关'.split('、'),
			// '、、、'.split('、'),
			// '、、、'.split('、'),
			// '、、、'.split('、'),
			// '、、、'.split('、'),
			// '、、、'.split('、'),
			// '、、、'.split('、'),
			// '、、、'.split('、'),
			// '、、、'.split('、'),
		],
		// '5': [],
		'6': [
			'布施,持戒,忍辱,精进,禅定,般若'.split(','),
			'礼、乐、射、御、书、数'.split('、'),

			'上下左右前后'.split(''),
			'阴阳、儒、墨、名、法、道德'.split('、'),
			'诗、书、礼、易、乐、春秋'.split('、'),
			'文韬、武韬、龙韬、虎韬、豹韬、犬韬'.split('、'),
			// ''.split('、'),
			// ''.split('、'),
			// ''.split('、'),
			// ''.split('、'),
			// ''.split('、'),
			// ''.split('、'),
			// ''.split('、'),
			// ''.split('、'),
			// ''.split('、'),
			// ''.split('、'),
			// ''.split('、'),
			// ''.split('、'),
			// ''.split('、'),
			// ''.split('、'),
			// ''.split('、'),
			// ''.split('、'),
			// ''.split('、'),
		],
		// '7': [],
		'8': [
			// https://www.sohu.com/a/528303807_121124401
			'孝悌忠信礼义廉耻'.split(''),
			'称、讥、毁、誉、利、衰、苦、乐'.split('、'),
			'东、西、南、北、东南、西南、西北、东北'.split('、'),

			// 亚非北南美，南极欧大洋
			'亚洲、非洲、北美洲、南美洲、南极洲、欧洲、大洋洲、'.split('、'),

			// https://baike.baidu.com/item/%E4%BD%9B%E6%95%99%E4%B8%83%E5%AE%9D/4542888
			// 七宝
			'金、银、琉璃、珊瑚、砗磲、赤珠、玛瑙、'.split('、'),
			// 鸠摩罗什译的《阿弥陀经》所说七宝为金、银、琉璃、珊瑚、砗磲、赤珠、玛瑙；
			// 玄奘译《称赞净土经》所说七宝为金、银、吠琉璃、颇胝迦、牟娑落揭拉婆、赤真珠、阿湿摩揭拉婆；
			// 《般若经》所说的七宝是金、银、琉璃、珊瑚、琥珀、砗磲、玛瑙；
			// 法华经所说的七宝是金、银、琉璃、砗磲、玛瑙、珍珠、玫瑰。

			// '金轮宝、白象宝、绀马宝、神珠宝、玉女宝、居士宝、主兵宝、'.split('、'),

			// https://fo.sina.cn/intro/2018-09-07/detail-ihitesuz6586387.d.html?vt=11
			'轮、螺、伞、盖、花、瓶、鱼、长'.split('、'),

			// https://baike.baidu.com/item/%E5%85%AB%E9%A3%8E/4913968
			'东明庶风，东南清明风，南曰景风，西南凉风，西阊阖风，西北不周风，北方广莫风，东北融风'.split(
				'、',
			),
		],
		// '9': [],
		'10': [
			'00,10,20,30,40,50,60,70,80,90'.split(','),
			'000,100,200,300,400,500,600,700,800,900'.split(','),
			'0000,1000,2000,3000,4000,5000,6000,7000,8000,9000'.split(','),

			'甲、乙、丙、丁、戊、己、庚、辛、壬、癸'.split('、'),
			'甲木、乙木、丙火、丁火、戊土、己土、庚金、辛金、壬水、癸水'.split('、'),
			'阏逢、旃蒙、柔兆、强圉、著雍、屠维、上章、重光、玄黓、昭阳'.split('、'),

			'0,1,2,3,4,0,1,2,3,4'.split(','),
			'1,2,3,4,5,1,2,3,4,5'.split(','),

			'一二三四五六七八九十'.split(''),
			'壹贰叁肆伍陆柒捌玖拾'.split(''),

			// 克
			'金木土水火金火水土木'.split(''),
			// 生
			'木火土金水木水金土火'.split(''),

			'木生火、火生土、土生金、金生水、水生木、木克土、土克水、水克火、火克金、金克木'.split('、'),

			// 五行五脏
			'木火土金水肾肺脾心肝'.split(''),

			'ˉ,ˊ,ˇ,ˋ,,ˉ,ˊ,ˇ,ˋ,'.split(','),

			// https://baike.baidu.com/item/%E5%AE%AB%E5%95%86%E8%A7%92%E5%BE%B5%E7%BE%BD/85388?fromtitle=%E5%8F%A4%E4%BB%A3%E4%BA%94%E9%9F%B3&fromid=10949417
			// gōng shāng jué zhǐ yǔ
			'ˉ宫、商、角、徵、羽、宫、商、角、徵、羽'.split('、'),
			// 五行五音
			'ˉ宫、商、角、徵、羽、水、火、木、金、土'.split('、'),
			'ˉ宫、商、角、徵、羽、唇、舌、牙、齿、喉'.split('、'),

			// 五伦、五常
			'父子有亲、君臣有义、夫妇有别、长幼有序、朋友有信、仁、义、礼、智、信'.split('、'),
			// 五服：甸服﹑侯服﹑绥服﹑要服、荒服 https://www.kaiwind.com/n1790/c658647/content.html
		],
		// '11': [],
		'12': [
			'子丑寅卯辰巳午未申酉戌亥'.split(''),
			'鼠牛虎兔龙蛇马羊猴鸡狗猪'.split(''),
			'鼠牛虎兔龍蛇馬羊猴雞狗猪'.split(''),
			'富强、民主、文明、和谐、自由、平等、公正、法治、爱国、敬业、诚信、友善'.split('、'),
			[
				'January',
				'February',
				'March',
				'April',
				'May',
				'June',
				'July',
				'August',
				'September',
				'October',
				'November',
				'December',
			],
			[
				'一月',
				'二月',
				'三月',
				'四月',
				'五月',
				'六月',
				'七月',
				'八月',
				'九月',
				'十月',
				'十一月',
				'十二月',
			],
			[
				'Jan',
				'Feb',
				'Mar',
				'Apr',
				'May',
				'Jun',
				'Jul',
				'Aug',
				'Sep',
				'Oct',
				'Nov',
				'Dec',
			],
			[
				'1月',
				'2月',
				'3月',
				'4月',
				'5月',
				'6月',
				'7月',
				'8月',
				'9月',
				'10月',
				'11月',
				'12月',
			],
			[
				'正月',
				'二月',
				'三月',
				'四月',
				'五月',
				'六月',
				'七月',
				'八月',
				'九月',
				'十月',
				'冬月',
				'腊月',
			],
		],
		// '13': [],
		// '14': [],
		// '15': [],
		// '16': [],
		// '17': [],
		// '18': [],
		// '19': [],
		'20': [
			'a,o,e,i,u,ü,ai,ei,ui,ao,ou,iu,ie,üe,er,an,en,in,un,ün,ang,eng,ing,ong'.replace(/a/g, 'ɑ')
				.replace(/g/g, 'ɡ').split(','),
			'zhi,chi,shi,ri,zi,ci,si,yi,wu,yu,ye,yue,yuan,yin,yun,ying,,,,'.replace(/a/g, 'ɑ').replace(
				/g/g,
				'ɡ',
			).split(','),
		],
		'24': [
			'立春、雨水、惊蛰、春分、清明、谷雨、立夏、小满、芒种、夏至、小暑、大暑、立秋、处暑、白露、秋分、寒露、霜降、立冬、小雪、大雪、冬至、小寒、大寒'
				.split('、'),
			'b,p,m,f,d,t,n,l,g,k,h,j,q,x,zh,ch,sh,r,z,c,s,y,w,'.replace(/a/g, 'ɑ').replace(/g/g, 'ɡ')
				.split(','),
			'a,o,e,i,u,ü,ai,ei,ui,ao,ou,iu,ie,üe,er,an,en,in,un,ün,ang,eng,ing,ong'.replace(/a/g, 'ɑ')
				.replace(/g/g, 'ɡ').split(','),
			'zhi,chi,shi,ri,zi,ci,si,yi,wu,yu,ye,yue,yuan,yin,yun,ying,,,,,,,,'.replace(/a/g, 'ɑ')
				.replace(/g/g, 'ɡ').split(','),
			'ā,á,ǎ,à,ō,ó,ǒ,ò,ē,é,ě,è,ī,í,ǐ,ì,ū,ú,ǔ,ù,ǖ,ǘ,ǚ,ǜ'.split(','),
		],
		// '26': [],
		// '30': [],
		// '32': [],
		// '60': [],
		// '100': [
		//   // ''.split('、'),
		//   // ''.split('、'),
		//   // ''.split('、'),
		//   // ''.split('、'),
		//   // ''.split('、'),
		//   // ''.split('、'),
		//   // ''.split('、'),
		//   // ''.split('、'),
		//   // ''.split('、'),
		//   // ''.split('、'),
		//   // ''.split('、'),
		//   // ''.split('、'),
		//   // ''.split('、'),
		//   // ''.split('、'),
		//   // ''.split('、'),
		//   // ''.split('、'),
		//   // ''.split('、'),
		//   // ''.split('、'),
		//   // ''.split('、'),
		//   // ''.split('、'),
		//   // ''.split('、'),
		// ],
	};
	// for (const index in CONTENTS_MAP) {
	// 	console.log(`${index} => ${(CONTENTS_MAP as any)[index].length + 3}`);
	// }
	const diceKind = (DICE_KIND_MAP as any)[FACE_STRING];

	const DEFAULT_CONTENTS = [];
	switch (NO) {
		case 0:
		case 1:
			for (let i = 0; i < FACE; ++i) {
				// DEFAULT_CONTENTS.push('');
				DEFAULT_CONTENTS.push((i + 1).toString());
			}
			break;
		case 2:
			for (let i = 0; i < FACE; ++i) {
				DEFAULT_CONTENTS.push(i.toString());
			}
			break;
		case 3:
			for (let i = 0; i < FACE; ++i) {
				DEFAULT_CONTENTS.push('');
			}
			break;
		default:
			(CONTENTS_MAP as any)[FACE_STRING].forEach((array: Array<any>, n: number) => {
				if (NO === n + 4) {
					array.forEach((item: string) => {
						DEFAULT_CONTENTS.push(item);
					});
				}
			});
			break;
	}

	const SIDE_IN_URL = parseFloat(getPageParameterByName('side', '0'));
	const SIDE_LENGTH = SIDE_IN_URL || 10;

	const CONTENTS_IN_URL = getPageParameterByName('contents', '');
	const CONTENTS = CONTENTS_IN_URL.length === 0 ? DEFAULT_CONTENTS : CONTENTS_IN_URL.split(',');

	const diceGenerator = new DiceGenerator();

	const OPTIONS = {};
	const DICE_INFO = diceGenerator.create({
		id: 'svg_1',
		diceKind, // DiceKind.four,
		sideLength: SIDE_LENGTH,
		contents: CONTENTS,
		outerLineStyle: getPageParameterByName('outer_line_style', ''),
		innerLineStyle: getPageParameterByName('inner_line_style', ''),
		textStyle: getPageParameterByName('text_style', ''),
		options: OPTIONS,
	});
	const { id, svg, css } = DICE_INFO;

	document.getElementsByTagName('title')[0].innerText = `${A3 ? 'A3' : 'A4'}_D${FACE}_${
		[
			{
				en: 'Landscape ',
				zh_cn: '横排',
				zh_tw: '橫排',
			},
			{
				en: 'Portrait ',
				zh_cn: '竖排',
				zh_tw: '豎排',
			},
		][LANDSCAPE ? 0 : 1][LANG]
	}_${NO}`;

	(document.getElementById('style') as HTMLElement).innerHTML = getPageCss();

	const body = document.getElementsByTagName('body')[0];

	const pageElement = createPageElement();
	body.appendChild(pageElement);

	pageElement.appendChild(svg);
})();
