'use strict';
import { combineReducers } from 'redux';
import navigationReducer from './switchPages';
import user from './user';
import area from './area';
import userInfo from './userInfo';
import wallet from './wallet';/*我的钱包*/
import cashLog from './cashLog';/*体现历史*/
import bank from './bank';/*银行卡*/
import vouchers from './vouchers';
import team from './team';
import address from './address';
import collection from './collection';
import goldlog from './goldlog';
import sclog from './sclog';
import  project from './project';
import hospitalList from './hospitalList';
import docterList from './docterList';
import diaryList from './diarylist';
import diaryDetails from './diaryDetails';
import home from './home';
import cart from './cart'; /*购物车*/
import projectRank from './productRank';
import cProjectOrder from './cProjectorder';
import docterName from './docterName';
import projectDetails from './projectDetails'
import serviceOrder from './serviceOrder';
import serviceOrderDetails from './serviceOrderDetails';
import hospitalDel from './hospitalDel';
import shop from './shop';
import shopList from './shoplist';
import goodsDetails from './goodsDetails'
import doctorDetails from './doctorsDetails';
import doctorsInfo from './doctorsInfo';
import hospitalDocterList from './hospitalDocterList';
import preoDiary from './preoDiary';
import postoDiary from './postoDiary';
import myDiaryDetails from './myDiaryDetails';
import myDiaryContentDetails from './myDiaryContentDetails';
import editinfo from './editinfo';

import {
	replyList,
	myRelease
} from './diary'; /*日记*/









export default combineReducers({
	navigationStore : navigationReducer,
	userStore : user,
	areaStore : area,
	userInfoStore : userInfo,
	walletStore : wallet,
	cashLogStore : cashLog,
	bankStore : bank,
	vouchersStore : vouchers,
	teamStore : team,
	collectionStore : collection,
	addressStore : address,
	goldlogStore : goldlog,
    projectStore :project,
	homeStore : home,
	sclogStore : sclog,
	hospitalListStore : hospitalList,
	diaryListStore:diaryList,
	docterListStore : docterList,
	cartStore : cart,
	diaryDetailsStore : diaryDetails,
    projectRankStore : projectRank,
	cProjectOrderStore : cProjectOrder,
	docterNameStore : docterName,
	projectDetailsStore : projectDetails,
	serviceOrderStore : serviceOrder,
	serviceOrderDetailsStore : serviceOrderDetails,
	hospitalDelStore : hospitalDel,
	shopStore:shop,
	shopListStore:shopList,
	goodsDetailsStore:goodsDetails,
	doctorDetailsStore : doctorDetails,
	doctorsInfoStore : doctorsInfo,
	hospitalDocterListStore : hospitalDocterList,
	myReleaseStore : myRelease,
	preoDiaryStore : preoDiary,
	myDiaryDetailsStore : myDiaryDetails,
	myDiaryContentDetailsStore : myDiaryContentDetails,
	replyListStore : replyList,
	postoDiaryStore : postoDiary,
	editinfoStore : editinfo,
});
