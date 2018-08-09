import tag01 from '../static/images/tag01.jpg'
import tag02 from '../static/images/tag02.jpg'
import tag03 from '../static/images/tag03.jpg'
import tag04 from '../static/images/tag04.jpg'
import tag05 from '../static/images/tag05.jpg'
import tag06 from '../static/images/tag06.jpg'
import tag07 from '../static/images/tag07.jpg'

import article01 from '../static/images/article01.jpg'
import article02 from '../static/images/article02.jpg'
import article03 from '../static/images/article03.jpg'
import article04 from '../static/images/article04.jpg'
import article05 from '../static/images/article05.png'
import article06 from '../static/images/article06.jpg'
import article07 from '../static/images/article07.png'

import banner01 from '../static/images/banner01.png'
import banner02 from '../static/images/banner02.png'
import banner03 from '../static/images/banner03.png'
import banner04 from '../static/images/banner04.png'
import banner05 from '../static/images/banner05.png'

import user01 from '../static/images/user01.png'
import user02 from '../static/images/user02.jpg'
import user03 from '../static/images/user03.jpg'
import user04 from '../static/images/user04.jpg'
import user05 from '../static/images/user05.jpg'

export default {
	"success": true,
	"data": {
		"topicList": [{
			"id": 1,
			"title": "社会热点",
			"imgUrl": tag01
		}, {
			"id": 2,
			"title": "手绘",
			"imgUrl": tag02
		}, {
			"id": 3,
			"title": "读书",
			"imgUrl": tag03
		}, {
			"id": 4,
			"title": "故事",
			"imgUrl": tag04
		}, {
			"id": 5,
			"title": "历史",
			"imgUrl": tag01
		}, {
			"id": 6,
			"title": "自然科普",
			"imgUrl": tag05
		}, {
			"id": 7,
			"title": "@IT互联网",
			"imgUrl": tag06
		}, {
			"id": 8,
			"title": "社会文化",
			"imgUrl": tag07
        }],
		"articleList": [{
			"id": 1,
			"title": "对不起，这样的美你拿不动",
			"desc": "三毛说：书读多了，容颜自然改变，很多时候，自己可能以为看过的书籍都成过眼烟云，不复记忆，其实它们仍然潜在气质里，在谈吐上，在胸襟的无涯里，当...",
			"imgUrl": article01
		}, {
			"id": 2,
			"title": "耐得住寂寞，才能享受繁华",
			"desc": "从小，我们就被教育要努力，要拼搏，要更上一层楼。诚然，“会当凌绝顶，一览众山小”的感觉很好，可是，平凡如我们，要如何到达自己的“顶”？哪里又是“...",
			"imgUrl": article02
		}, {
			"id": 3,
			"title": "孩子，说话方式真的很重要",
			"desc": "孩子，你今天对妈妈说：“你怎么能这点都想不到？”我当时停顿了好几秒，你知道吗？我当时很不舒服。现在，我要告诉你：“孩子，你今天对妈妈说话的方式，...",
			"imgUrl": article03
		}, {
			"id": 7,
			"title": "渣男年年有，今年特别多",
			"desc": "事实是很多渣男之所以渣，是因为认识问题、道德问题，这种基本后天是无法改变的。 不要想着你能拯救他，他妈也拯救不了他，谁都拯救不了他，不要耽误自己...",
			"imgUrl": article07
		}, {
			"id": 5,
			"title": "简书点名吐槽大会|那些写成功学文章的人，你们认为自己成功了吗？",
			"desc": "想想这个问题应该发到朋友圈或者微博上去，毕竟我最想说的，题目的几个字已经概括了。 之所以发在这里，实在是觉得简书也是这个问题的重灾区，随便翻一翻...",
			"imgUrl": article05
		}, {
			"id": 6,
			"title": "Android指纹识别，看这一篇就够了",
			"desc": "后来，在support v4库中添加了FingerprintManagerCompat类，我看了他的源码，其实就是对FingerprintMan...",
			"imgUrl": article06
		}, {
			"id": 4,
			"title": "如梦令",
			"desc": "轻看海天一色，风浪阳光炙热。云淡翠烟熏，金贝浪花游乐。天阔，云阔，尽在海边时刻。",
			"imgUrl": article04
		}],
		"recommendList": [{
			"id": 1,
			"imgUrl": banner01
		},{
			'id': 2,
			'imgUrl': banner02
		}, {
			'id': 3,
			'imgUrl': banner03
		}, {
			'id': 4,
			'imgUrl': banner04
		},{
			"id": 5,
			"imgUrl": banner05
		}],
		"users": [
			{name: '一只支', discription: '写了617.3k字 · 1.4k喜欢', pic: user01},
			{name: '楠溪陈酿', discription: '写了334.8k字 · 252喜欢', pic: user02},
			{name: '徐林Grace', discription: '写了444.2k字 · 4.2k喜欢', pic: user03},
			{name: '狼医生', discription: '写了386.8k字 · 951喜欢', pic: user04},
			{name: '简书大学堂', discription: '写了774.9k字 · 15.3k喜欢', pic: user05}
		]
	}
}