/**
 * Created by xiaokui on 16/8/9.
 */


import { createIconSet } from 'react-native-vector-icons';
const glyphMap = {
    'home': 59170,
    'project':58947,
    'shop':59007,
    'diary':59153,
    'my':58959,
    'down':58902,
    'search':59640,
    'up':58972,/*向上*/
    'transaction':58948,/*交易*/
    'address':59041,/*收货地址*/
    'setting':58880,/*设置*/
    'like':58893,/*点赞*/
    'protocol':59113,/*电子协议*/
    'delmax':58964,/*删除大*/
    'delmin':59026,/*删除小*/
    'starHollow':58881,/*空心星星*/
    'starSolid':59068,/*实心星星*/
    'comment':58913,/*评论*/
    'syringe':58914,/*医疗-注射器*/
    'medicineBox':59260,/*医疗-医药箱*/
    'doctors':58890,/*医生*/
    'hospital':59141,/*医院*/
    'wallet':59101,/*钱包*/
    'orders':58915,/*订单*/
    'location':59604,/*定位*/
    'radioHollowCheck':58885,/*单选空心对号*/
    'radioHollow':58971,/*单选空心*/
    'radioSolid':59167,/*单选实心*/
    'radioSolidCheck':59076,/*单选实心对号*/
    'classification':59015,/*分类*/
    'leftArrow':59703,/*向左*/
    'rightArrow':58884,/*向右*/
    'backTotop':58920,/*返回顶部*/
    'feedback':58916,/*意见反馈*/
    'label':58898,/*标签*/
    'historyClose':58929,/*历史-全包*/
    'historyOpen':58984,/*历史-开口*/
    'checkMark':58882,/*对号*/
    'delMark':58946,/*叉号*/
    'article':59055,/*文章*/
    'diaryBeau':59153,/*美丽日记*/
    'diaryHeal':58952,/*健康日记-带笔*/
    'vouchersRmb':58912,/*代金券-¥*/
    'vouchersWord':58887,/*代金券-券字*/
    'team':58917,/*团队*/
    'read':58937,/*阅读*/
    'shopCarts':59010,/*购物车*/
    'recommend':58906,/*推荐*/
    'download':58982,/*下载*/
    'goldDou':58962,/*金币-双圈*/
    'goldSin':58883,/*金币-单圈*/
    'data':58983,/*资料*/
    'modifyInfo':58921,/*修改个人资料*/
    'blueprint':59278,/*蓝本*/
    'alien':59126,/*什么鬼*/
    'alipay':58905,/*支付鸨*/
    'weichat':58625,/*微信*/
    'camera':58924,/*相机*/
    'pain':59496,/*疼痛感*/
    'swelling':59494,/*肿胀感*/
    'scar':58985,/*创可贴*/
    'weichat':58625,/*微信*/
    'inviteCode':58894 ,/*邀请码*/
    'phone':59817 ,/*手机号*/
    'password':58886 ,/*密码*/
    'code': 58892, /*验证码 */
    'add':59327,/*加号*/
    'image':58961,/*照片*/
    'expression':58896,/*表情*/
    'rightArrow' : 58884,/*向右*/
	'tel':58927, //咨询电话
	'collection': 58888  //收藏
};

const Icon = createIconSet(glyphMap, 'iconfont');

module.exports = Icon;