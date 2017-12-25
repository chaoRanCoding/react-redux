/**
 * Created by chaoran on 16/10/25.
 */

import { GetDevice,GetRatio } from '../utils';

const _width = GetDevice( 'width' );

export default Common = {
    f10:{fontSize:10},
    f12:{ fontSize:12 },
    f14:{ fontSize:14 },
    f16:{ fontSize:16 },
    f17:{ fontSize:17 },
    f18:{ fontSize:18  },
    f22:{ fontSize:22 },
    fb:{ fontWeight: 'bold' },
    border_width_zero:{ borderWidth:0},
    textAlignRight:{ textAlign:'right' },
    textAlignLeft:{ textAlign:'left'},
    textAlignCenter : { textAlign:'center'},
    textDecorationLine:  {textDecorationLine:'line-through'},
    center:{ alignItems:'center',justifyContent:'center'},
    align_center:{ alignItems:'center'},
    jus_center:{ justifyContent:'center'},
    jus_end:{justifyContent:'flex-end'},
    border:{
        borderWidth:GetRatio(),
        borderStyle:'solid',
        borderColor:'#eaeaea'
    },
    topBorder:{
        borderTopWidth:GetRatio(),
        borderStyle:'solid',
        borderColor:'#eaeaea'
    },
    bottomBorder:{
        borderBottomWidth:GetRatio(),
        borderStyle:'solid',
        borderColor:'#eaeaea'
    },
    rightBorder:{
        borderRightWidth:GetRatio(),
        borderStyle:'solid',
        borderColor:'#eaeaea'
    },
	LeftBorder:{
		borderLeftWidth:GetRatio(),
		borderStyle:'solid',
		borderColor:'#eaeaea'
	},
    borderRadius:{ borderRadius:3},
    c_white:{ color:'#fff'},
    c_red:{ color:'#f95b72'},
    c_999:{ color:'#999'},
    c_666:{color:'#666'},
    c_444:{color:'#444'},
	c_8b8b8b:{color:'#8b8b8b'},
    c_55dce2 :{ color:'#55dce2'},
    c_72dacf:{color:'#72dacf'},
    bg_red:{backgroundColor:'#f95b72'},
    bg_72dacf:{backgroundColor:'#72dacf'},
    bg_fa:{backgroundColor:'#fafafa'},
	bg_ff:{backgroundColor:'#fff'},
	bg_ff334e:{backgroundColor:'#ff334e'},
    container:{ flex:1,backgroundColor:'#fff'},
    flex:{flex:1},
    row:{ flexDirection:'row'},
    cell:{ flex:1 },
    content:{ paddingLeft:15,paddingRight:15,paddingBottom:15,paddingTop:15},
    mb15:{ marginBottom:15 },
    mt15:{ marginTop: 15 },
    mt10:{ marginTop:10 },
    pl10:{ paddingLeft:10  },
    mr10:{ marginRight:10 },
    pt10:{ paddingTop:10 },
    ml10:{marginLeft:10},
	ml20:{marginLeft:20},
    pb10:{ paddingBottom:10 },
    pr10:{ paddingRight:10 },
	pd4:{paddingBottom:4},
    mb10:{ marginBottom:10 },
	mb7:{ marginBottom:7 },
	mt7:{ marginTop:7},
	mt4:{ marginTop:4},
	mr7:{marginRight:7},
	ml4:{marginLeft:4},
	mr4:{marginRight:4},
	pad10:{ paddingLeft:10,paddingRight:10,backgroundColor:'#fff'},
    space_15:{ padding:15 },
    space_10:{ padding:10 },
    vertical_space_5 : { paddingTop:5,paddingBottom:5},
    vertical_space_10 : { paddingTop:10,paddingBottom:10},
    vertical_space_15 : { paddingTop:15,paddingBottom:15},
    horizonta_space_15 : { paddingLeft:15,paddingRight:15},
    horizonta_space_10:{ paddingLeft:10,paddingRight:10 },
    space_left_10:{ paddingLeft:10 },
    mb10:{ marginBottom:10 },
    option:{ height:34,backgroundColor:'#fff',flexDirection:'row',alignItems:'center',borderBottomWidth:2,borderColor:'#fafafa'},
    option_list:{height:15,flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'},
    pad15:{ padding:15 },
    pd15:{ padding:15 },
    pd10:{ padding:10 },
    pd20:{ padding:20 },
	pbt7:{paddingBottom:7,paddingTop:7},
    pbt10:{ paddingTop:10,paddingBottom:10},



    /* ui */
    user_avatar_size:{width:48,height:48},
    small_btn:{ height:22,borderRadius:3,backgroundColor:'#57dee4',paddingRight:15,paddingLeft:15 },
    thumb_big:{ width : (_width-30)/2,height:(_width-30)/2},
    dot:{
        backgroundColor:'#fff',width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,
    },
    activeDot:{
        backgroundColor:'#999',
    },
	jus_end:{
    	justifyContent:'flex-end',
	},
	align_end:{ alignItems:'flex-end'},
	detail_border :{
		borderWidth:GetRatio(),
		borderStyle:'solid',
		borderColor:'#72dacf'
	},

    /*日记*/
    user_avatar_68 : { width:68,height:68 },
    user_avatar_48:{ width:48,height:48 },
    user_avatar_radius_48:{borderRadius:24},


    user_avatar_radius_32:{ width:32,height:32,borderRadius:16},

    /*医生头像*/
    doctor_avatar_size : { width:68,height:68 },
    doctor_avatar_radius : { borderRadius:34 },

    /*项目图像*/
    project_thumb_size : { width:68,height:68 },
    project_thumb_radius : {borderRadius : 5  },


    project_thumb_85 : { width:85,height:85 },



    pay_btn_red : {
        flex:1,
        backgroundColor:'#f95b72',
        alignItems:'center',justifyContent:'center',
        borderRadius:3

    },
	marginV4:{
		marginVertical:4
	},
    user_avatar_radius:{ width:38,height:38,backgroundColor:'#eaeaea',borderRadius:19,overflow:'hidden' },
	backTan:{
    	backgroundColor:'transparent'
	},

    diary_photo_container : { paddingLeft:10,paddingRight:10 },
    diary_photo_2s:{ width:(_width-30)/2,height:(_width-30)/2},
    diary_photo_3s:{width:(_width-40)/3,height:(_width-40)/3},

    bgWhite:{backgroundColor:'#fff'},
    bgGray:{ backgroundColor:'#fafafa'},
    grid_2s:{width:(_width-30)/2,height:(_width-30)/2},
    grid_4s : { width:(_width-40)/3,height:(_width-40)/3}

}
