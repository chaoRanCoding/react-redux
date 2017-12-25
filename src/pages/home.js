/**
 * Created by chaoran on 16/8/9.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity,
    Navigator,
    ScrollView,
    ListView,
    Animated,
    InteractionManager
} from 'react-native';
import Common from '../style';
import { GetDevice,Normalize ,NavigatorPush} from '../utils';
import HomeHeader from '../components/homeHeader';
import Swiper from 'react-native-swiper';
import Icon from '../config/icon';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import ScrollableTabBar from '../components/homeTabBar';
import HomeDiray from './homeDiary';
import LoadingView from '../components/LoadingView';

import {
    loadDiary as loadDiaryAction,
    loadTopper as loadTopperAction
} from '../actions/home';
import { switchMainTab } from '../actions/switchPages';
const typeArr = {
	'1': {name:'ProjectDetails', params:'sid' },
	'2': {name:'HospitalDetails',params:'mid'},
	'3': {name:'DoctorsDetails',params:'did'},
	'4': {name:'GoodsDetails',params:'id'},
	'5': {name:'GoodsDetails',params:'id' },
	'8': {name:'DiaryDetails',params:'bid'},
};
class Home extends Component {
    constructor( props ){
        super( props );
        this.state = {
            scrollEnabled : true,
            dataSource : new ListView.DataSource({
                rowHasChanged : ( row1,row2 ) => row1 !== row2
            }),
            loadTopperStatus  : false,
            listScrollEnabled : false,
	        swiperIsLoading:true,
	        DiaryIsLoading:true,
        }
        this.topperHeight = 0;
        this.scrollEnabled = true ;
        this.listScrollEnabled = false ;
    }

    topage = (idx)=>{
         const {dispatch} =this.props;
         dispatch(switchMainTab(idx))
    }

    /*初始化*/

    onloadDiaryResolved = ( res ) => {
        this.setState(
            { DiaryIsLoading : false }
        )
    }

    onloadDiaryRejected = ( res ) => {
        this.setState(
            { DiaryIsLoading : false }
        )
    }

    onloadDiary = () => {
        const { dispatch } = this.props;
        dispatch(loadDiaryAction(this.onloadDiaryResolved,this.onloadDiaryRejected));
    }


    onLoadTopperResolved = ( res )=>{
	    this.setState(
		    { swiperIsLoading : false }
	    )
    }

    onLoadTopperResolved = ( res ) => {
	    this.setState(
		    { swiperIsLoading : false }
	    )
    }

    onLoadTopper = (  )=>{
        const { dispatch } = this.props;
        dispatch(loadTopperAction(this.onLoadTopperResolved,this.onLoadTopperResolved));
    }
   //首页推荐位及banner具体到项目的实现
    skipTypePage = ( type ,id )=> {
	    if (type != '0' &&  id !='0') {
		    NavigatorPush({name:typeArr[type].name,[typeArr[type].params]:id},this.props.navigator)
	    }
    }
    componentWillMount(){
        this.onLoadTopper();
        this.onloadDiary();
    }
    /*焦点图*/
    renderSwipper = () => {
        const { banner,imgPath} = this.props ;
        return(
            <View style = { styles.bannerContainer }>
	            <Swiper
		            dot={  <View style={ baseStyles.dot }  /> }
		            activeDot={ <View  style = {[ baseStyles.dot,baseStyles.activeDot]}/>}
		            height = { swiperHeight }
		            style =  { [styles.swiperContainer ]}
	            >
		            { banner.map(( item )=>{
			            return (
				            <View style =  {[styles.swiperSize] } key = { 'banner_key_'+item.typeid}>
					            <TouchableOpacity onPress = {
						            ()=>{
							            this.skipTypePage( item.type,item.typeid);
						            }
					            }>
						            <Image  source={{uri:imgPath+item.img}}  style= {styles.swiperSize} />
					            </TouchableOpacity>
				            </View>
			            )
		            })}
	            </Swiper>
            </View>
        )

    }

    /*快捷菜单*/
    renderQuickMenu  = ()=>{
        const {navigator } = this.props; 
        return(
        <View style = { [styles.menu_list,baseStyles.row]}>
            <View style = { [baseStyles.cell,baseStyles.center]}>
                <TouchableOpacity style ={baseStyles.align_center}
                                  onPress = { ()=>{
                                    NavigatorPush({name:'HospitalRank'},navigator)
                                }}
                >
                    <View style = {[styles.menu_item_icon,baseStyles.center]}>
                        <Icon size={28} name="hospital" color="#fff"/>
                    </View>
                    <Text  style = {baseStyles.c_999 }>本地医院</Text>
                </TouchableOpacity>
            </View>
            <View style = { [baseStyles.cell,baseStyles.center]}>
                <TouchableOpacity style ={baseStyles.align_center}
                                  onPress = { ()=>{
                                    this.topage(3);
                                }}
                >
                    <View style = {[styles.menu_item_icon,baseStyles.center]}>
                        <Icon size={28} name="diaryBeau" color="#fff"/>
                    </View>
                    <Text  style = {baseStyles.c_999 }>美丽日记</Text>
                </TouchableOpacity>
            </View>
            <View style = { [baseStyles.cell,baseStyles.center]}>
                <TouchableOpacity style ={baseStyles.align_center}
                                  onPress = { ()=>{
                                    NavigatorPush({name:'DoctorsRank'},navigator)
                                }}
                >
                    <View style = {[styles.menu_item_icon,baseStyles.center]}>
                        <Icon size={28} name="doctors" color="#fff"/>
                    </View>
                    <Text style = {baseStyles.c_999 }>医生排行</Text>
                </TouchableOpacity>
            </View>
            <View style = { [baseStyles.cell,baseStyles.center]}>
                <TouchableOpacity style ={baseStyles.align_center}
                                  onPress = { ()=>{
                                    this.topage(1);
                                }}
                >
                    <View style = {[styles.menu_item_icon,baseStyles.center]}>
                        <Icon size={28} name="project" color="#fff"/>
                    </View>
                    <Text  style = {baseStyles.c_999 }>项目宝典</Text>
                </TouchableOpacity>
            </View>
        </View>
        )
    }

    /*热门推荐*/
    renderHot = ()=>{
        const { middleleft,middlerightdown,middlerightup,imgPath } = this.props;
        return (
            <View style = { [styles.hotContainer,baseStyles.bottomBorder] }>
                <View style = {[styles.hotContainer_title,baseStyles.bottomBorder,baseStyles.center]}>
                    <Text>热门推荐</Text>
                </View>
	            <View style = { [styles.hotContainer_content,baseStyles.row]} >
		            <View style ={ [styles.hotC_left,baseStyles.rightBorder] }>
			            <TouchableOpacity
				            onPress = {
					            ()=>{
						            this.skipTypePage( middleleft.type,middleleft.typeid);
					            }
				            }
			            >
				            <Image  source={{uri:imgPath+middleleft.img}} style={styles.hotC_left_thumb} />
			            </TouchableOpacity>
		            </View>
		            <View style ={ styles.hotC_right}>
			            <View style ={ [styles.hotCR_row,baseStyles.bottomBorder] }>
				            <TouchableOpacity
					            onPress = {
						            ()=>{
							            this.skipTypePage( middlerightdown.type,middlerightdown.typeid);
						            }
					            }
				            >
					            <Image  source={{uri:imgPath+middlerightdown.img}} style={styles.hotC_right_thumb} />
				            </TouchableOpacity>
			            </View>
			            <View style ={ styles.hotCR_row }>
				            <TouchableOpacity
					            onPress = {
						            ()=>{
							            this.skipTypePage( middlerightup.type,middlerightup.typeid);
						            }
					            }
				            >
					            <Image  source={{uri:imgPath+middlerightup.img}} style={styles.hotC_right_thumb} />
				            </TouchableOpacity>
			            </View>
		            </View>
	            </View>
            </View>
        )
    }

    /*热门推荐下*/
    renderHotBottom = ()=>{
    	const { downfirst,downsecond ,imgPath} =this.props;
        return(
            <View style =  { styles.hotBottomContainer }>

	            { downfirst ?
		            <TouchableOpacity
			            onPress = {
				            ()=>{
					            this.skipTypePage( downfirst.type,downfirst.typeid);
				            }
			            }
		            >
		            <View style= { [styles.hotB_thumb_container,baseStyles.bottomBorder,{height:69}] }>
			            <Image  source={{uri:imgPath+downfirst.img}}  style= {styles.hotB_thumb} />
		            </View>
		            </TouchableOpacity>: null
	            }

	            { downsecond ?
		            <TouchableOpacity
			            onPress = {
				            ()=>{
					            this.skipTypePage( downsecond.type,downsecond.typeid);
				            }
			            }
		            >
		            <View style= { [styles.hotB_thumb_container,baseStyles.mt7] }>
			            <Image  source={{uri:imgPath+downsecond.img} }  style= {styles.hotB_thumb} />
		            </View>
		            </TouchableOpacity>: null
	            }

            </View>
        )
    }


    /*日记列表*/
    renderDirayContent = ()=>{
        const { tabs } = this.props;
        if( tabs == undefined || tabs.length== 0){
            return null ;
        }
        var _tabs = tabs.map(( item )=>{
            return (
                <HomeDiray tabLabel={item.classname}
                           navigator={ this.props.navigator }
                           key={'tab_key_'+item.id} typeid = { item.id }
                           scrollEnabled = { this.state.listScrollEnabled }
                            setScrollStatus = { ()=>{
                                this._scrollView.setNativeProps({scrollEnabled: true})
                                this.scrollEnabled = true; 
                                this.setState({ listScrollEnabled : false })
                            }}
                >
                </HomeDiray>
            )
        })
        return (
            <ScrollableTabView
                renderTabBar={() => <ScrollableTabBar measureTabAll={()=>{ console.log( 'all')}}/>}
            >
                { _tabs }
            </ScrollableTabView>
        )

    }
    renderContent =()=>{
    	if(this.state.swiperIsLoading || this.state.DiaryIsLoading){
    		return <LoadingView/>
	    }
    	return(
		    <ScrollView
			    scrollEnabled = { true }
			    scrollEventThrottle={20}
			    ref = {
				    ( scrollView ) => {
					    this._scrollView = scrollView ;
				    }
			    }
			    showsVerticalScrollIndicator={false}
			    onScroll = { ( e )=>{
				    let offset_y =  e.nativeEvent.contentOffset.y;
				    if( offset_y > this.topperHeight &&  this.scrollEnabled ){
					    this._scrollView.setNativeProps({scrollEnabled: false})
					    this._scrollView.scrollTo({x:0,y:this.topperHeight});
					    this.scrollEnabled = false ;
					    this.setState({ listScrollEnabled : true })
				    }
			    }}
		    >
			    <View style = { [styles.topper] } onLayout = { ( e )=>{
				    this.topperHeight =  e.nativeEvent.layout.height;
			    }}>
				    { this.renderSwipper() }
				    { this.renderQuickMenu()}
				    { this.renderHot()}
				    { this.renderHotBottom()}
			    </View >
			    <View style = { styles.tabs_container}>
				    <View style= {[styles.diary_title,baseStyles.bottomBorder,baseStyles.center]}>
					    <Text>美丽日记</Text>
				    </View>
				    { this.renderDirayContent() }
			    </View>
		    </ScrollView>
	    )
    }
    render(){
        const { navigator } = this.props;
        const { scrollEnabled } = this.state;
        return(
            <View style={[baseStyles.container,{backgroundColor:'#fafafa'}]}>
                <HomeHeader navigator={ navigator }/>
	            {this.renderContent()}
            </View>
        )
    }
}
const baseStyles = StyleSheet.create( Common );
const swiperHeight = Normalize(400);
const win_w =  GetDevice('width');
const win_h = GetDevice('height');
const header_h = 64 ;
const nav_h = 50 ;


const styles = StyleSheet.create({
    bannerContainer:{
      height: swiperHeight,backgroundColor:'#fff'
    },
    content:{ backgroundColor:'#eaeaea'},
    swiperContainer:{
        backgroundColor:'#fff',
        height:swiperHeight
    },
    swiperSize:{
        width:GetDevice('width'),
        height: swiperHeight
    },
    hotContainer:{
        marginTop:10,
        backgroundColor:'#fff',
    },
    hotContainer_title:{
        height:48
    },
    hotContainer_content:{ height:Normalize(340) },
    hotC_left:{  width:Normalize(315),height:Normalize(340) },
    hotC_right:{ flex: 1 , flexDirection: 'column'},
    hotCR_row:{ flex:1 },
    hotC_left_thumb:{ width:Normalize(315)-1,height:Normalize(340) },
    hotC_right_thumb:{  width:GetDevice('width')-Normalize(315),height:Normalize(340)/2-1},
    hotBottomContainer:{ marginTop: 10,paddingBottom:10 },
    hotB_thumb_container:{ height:68 },
    hotB_thumb:{height:68,width:GetDevice('width')},
    menu_list:{ paddingTop:15,paddingBottom:15 ,backgroundColor:'#fff'},
    menu_item_icon:{backgroundColor:'#f85c72',width:48,height:48,borderRadius:24,marginBottom:6 },




    hot_left:{ width:Normalize(315),height:Normalize(340) },
    hot_left_img : { width:Normalize(315),resizeMode:'contain'},
    hot_right_img:{ width:GetDevice('width')-Normalize(315),resizeMode:'contain'},
    list_item:{
        paddingLeft:10,
        paddingTop:10,
        paddingBottom:10,
        paddingRight: 10,
        backgroundColor:'#fff',
        marginBottom:10
    },
    list_item_avatar:{ width:68,height:68 },
    list_item_right:{
        paddingLeft:10
    },
    diary_menus:{ backgroundColor:'#f7f7f7',height:32 },
    diary_loading:{ paddingTop:10,paddingBottom:10 },
    diaryContainer:{ backgroundColor:'#eaeaea'},
    topper : {  },
    tabs_container : {
        width: win_w,
        height: win_h-( header_h+ nav_h),
    },
    diary_title:{ height:42,backgroundColor:'#fff'},




})


function mapStateToProps(state) {
    return state.homeStore
}

export default connect( mapStateToProps )( Home );

