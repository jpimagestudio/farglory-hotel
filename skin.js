// Garden Gnome Software - Skin
// Pano2VR 7.1.8/20986
// Filename: skin_with_FloorPlan_and_Logo_finsih_phonescreen_pop_video.ggsk
// Generated 2025-02-26T18:50:06

function pano2vrSkin(player,base) {
	player.addVariable('vis_thumbnail_menu', 2, false, { ignoreInState: 1  });
	player.addVariable('opt_thumbnail_menu_tooltip', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_3d_preview', 2, true, { ignoreInState: 1  });
	player.addVariable('vis_gallery', 2, false, { ignoreInState: 0  });
	player.addVariable('opt_hotspot_preview', 2, true, { ignoreInState: 1  });
	player.addVariable('vis_website', 2, false, { ignoreInState: 0  });
	player.addVariable('opt_url', 2, false, { ignoreInState: 1  });
	player.addVariable('ht_ani', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_image_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('pop_video', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_sounds_splashscreen', 2, false, { ignoreInState: 1  });
	player.addVariable('toggle_audio', 2, true, { ignoreInState: 0  });
	player.addVariable('sounds_splashscreen_accepted', 2, false, { ignoreInState: 0  });
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressedKey = 0;
	var skinKeyPressedText = '';
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		me._variable_vis_sounds_splashscreen = {};
		me._variable_vis_sounds_splashscreen.ggCurrentLogicState = -1;
		me._variable_vis_sounds_splashscreen.logicBlock = function() {
			var newLogicState_vis_sounds_splashscreen;
			if (
				((player.getHasSounds() == true)) && 
				((player.getSoundsPermitted() != 1)) && 
				((player.getVariableValue('sounds_splashscreen_accepted') == false))
			)
			{
				newLogicState_vis_sounds_splashscreen = 0;
			}
			else {
				newLogicState_vis_sounds_splashscreen = -1;
			}
			if (me._variable_vis_sounds_splashscreen.ggCurrentLogicState != newLogicState_vis_sounds_splashscreen) {
				me._variable_vis_sounds_splashscreen.ggCurrentLogicState = newLogicState_vis_sounds_splashscreen;
				if (me._variable_vis_sounds_splashscreen.ggCurrentLogicState == 0) {
					player.setVariableValue('vis_sounds_splashscreen', true);
				}
				else {
					player.setVariableValue('vis_sounds_splashscreen', false);
				}
			}
		}
		el=me._dropdown_floorplan_mobile=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="Dropdown FloorPlan_mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 177px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 20px;';
		hs+='visibility : hidden;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._dropdown_floorplan_mobile.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._dropdown_floorplan_mobile.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize(true).width < 640)) && 
				((player.getViewerSize(true).width > 320))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getViewerSize(true).width <= 320))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._dropdown_floorplan_mobile.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._dropdown_floorplan_mobile.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._dropdown_floorplan_mobile.style.transition='right 0s, top 0s, width 0s, height 0s';
				if (me._dropdown_floorplan_mobile.ggCurrentLogicStatePosition == 0) {
					me._dropdown_floorplan_mobile.style.right='10px';
					me._dropdown_floorplan_mobile.style.top='10px';
				}
				else if (me._dropdown_floorplan_mobile.ggCurrentLogicStatePosition == 1) {
					me._dropdown_floorplan_mobile.style.right='5px';
					me._dropdown_floorplan_mobile.style.top='10px';
				}
				else {
					me._dropdown_floorplan_mobile.style.right='20px';
					me._dropdown_floorplan_mobile.style.top='20px';
				}
			}
		}
		me._dropdown_floorplan_mobile.logicBlock_position();
		me._dropdown_floorplan_mobile.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width < 640)) && 
				((player.getViewerSize(true).width > 320))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._dropdown_floorplan_mobile.ggCurrentLogicStateSize != newLogicStateSize) {
				me._dropdown_floorplan_mobile.ggCurrentLogicStateSize = newLogicStateSize;
				me._dropdown_floorplan_mobile.style.transition='right 0s, top 0s, width 0s, height 0s';
				if (me._dropdown_floorplan_mobile.ggCurrentLogicStateSize == 0) {
					me._dropdown_floorplan_mobile.style.width='300px';
					me._dropdown_floorplan_mobile.style.height='120px';
					skin.updateSize(me._dropdown_floorplan_mobile);
				}
				else {
					me._dropdown_floorplan_mobile.style.width='300px';
					me._dropdown_floorplan_mobile.style.height='177px';
					skin.updateSize(me._dropdown_floorplan_mobile);
				}
			}
		}
		me._dropdown_floorplan_mobile.logicBlock_size();
		me._dropdown_floorplan_mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width <= 320)) && 
				((player.getMapsContainingNode(player.getCurrentNode()).length > 0 == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._dropdown_floorplan_mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._dropdown_floorplan_mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._dropdown_floorplan_mobile.style.transition='right 0s, top 0s, width 0s, height 0s';
				if (me._dropdown_floorplan_mobile.ggCurrentLogicStateVisible == 0) {
					me._dropdown_floorplan_mobile.style.visibility=(Number(me._dropdown_floorplan_mobile.style.opacity)>0||!me._dropdown_floorplan_mobile.style.opacity)?'inherit':'hidden';
					me._dropdown_floorplan_mobile.ggVisible=true;
				}
				else {
					me._dropdown_floorplan_mobile.style.visibility="hidden";
					me._dropdown_floorplan_mobile.ggVisible=false;
				}
			}
		}
		me._dropdown_floorplan_mobile.logicBlock_visible();
		me._dropdown_floorplan_mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me._room_descrip_mobile=document.createElement('div');
		el.ggId="Room_descrip_mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.470588);';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100px;';
		hs+='position : absolute;';
		hs+='right : -1px;';
		hs+='top : 178px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._room_descrip_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._room_descrip_mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me._room_intro_mobile=document.createElement('div');
		els=me._room_intro_mobile__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Room_Intro_mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 1px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 4px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._room_intro_mobile.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			params.push(String(player._(me.ggUserdata.description)));
			var hs = player._("%1\uff1a\n%2", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._room_intro_mobile.ggUpdateText();
		player.addListener('changenode', function() {
			me._room_intro_mobile.ggUpdateText();
		});
		el.appendChild(els);
		me._room_intro_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._room_intro_mobile.ggUpdatePosition=function (useTransition) {
		}
		me._room_descrip_mobile.appendChild(me._room_intro_mobile);
		me._dropdown_floorplan_mobile.appendChild(me._room_descrip_mobile);
		el=me._map_1_mobile=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapLayers = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = '_none';
		el.ggId="Map 1_mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 157px;';
		hs+='opacity : 0.6;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_1_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_1_mobile.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width < 640)) && 
				((player.getViewerSize(true).width > 320))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._map_1_mobile.ggCurrentLogicStateSize != newLogicStateSize) {
				me._map_1_mobile.ggCurrentLogicStateSize = newLogicStateSize;
				me._map_1_mobile.style.transition='width 0s, height 0s';
				if (me._map_1_mobile.ggCurrentLogicStateSize == 0) {
					me._map_1_mobile.style.width='300px';
					me._map_1_mobile.style.height='120px';
					skin.updateSize(me._map_1_mobile);
				}
				else {
					me._map_1_mobile.style.width='300px';
					me._map_1_mobile.style.height='157px';
					skin.updateSize(me._map_1_mobile);
				}
			}
		}
		me._map_1_mobile.logicBlock_size();
		me._map_1_mobile.ggUpdatePosition=function (useTransition) {
		}
		me._dropdown_floorplan_mobile.appendChild(me._map_1_mobile);
		el=me._dropdown_floorplan_title_background_mobile=document.createElement('div');
		el.ggId="Dropdown FloorPlan Title Background_mobile";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.509804);';
		hs+='border : 0px solid #005500;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((300px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._dropdown_floorplan_title_background_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_floorplan_title_background_mobile.onclick=function (e) {
			me._map_1_mobile.ggVisible = !me._map_1_mobile.ggVisible;
			var flag=me._map_1_mobile.ggVisible;
			if (me._map_1_mobile.ggVisible) {
				if (me._map_1_mobile.ggMapNotLoaded && me._map_1_mobile.ggInitMap) {
					me._map_1_mobile.ggInitMap(false);
					me._map_1_mobile.ggInitMapMarkers(true);
				}
			} else {
				if (me._map_1_mobile.ggClearMap) me._map_1_mobile.ggClearMap();
			}
			me._map_1_mobile.style.transition='none';
			me._map_1_mobile.style.visibility=((flag)&&(Number(me._map_1_mobile.style.opacity)>0||!me._map_1_mobile.style.opacity))?'inherit':'hidden';
			me._room_descrip_mobile.ggVisible = !me._room_descrip_mobile.ggVisible;
			var flag=me._room_descrip_mobile.ggVisible;
			me._room_descrip_mobile.style.transition='none';
			me._room_descrip_mobile.style.visibility=((flag)&&(Number(me._room_descrip_mobile.style.opacity)>0||!me._room_descrip_mobile.style.opacity))?'inherit':'hidden';
			me._dropdown_floorplan_open_mobile.ggVisible = !me._dropdown_floorplan_open_mobile.ggVisible;
			var flag=me._dropdown_floorplan_open_mobile.ggVisible;
			me._dropdown_floorplan_open_mobile.style.transition='none';
			me._dropdown_floorplan_open_mobile.style.visibility=((flag)&&(Number(me._dropdown_floorplan_open_mobile.style.opacity)>0||!me._dropdown_floorplan_open_mobile.style.opacity))?'inherit':'hidden';
			me._dropdown_floorplan_close_mobile.ggVisible = !me._dropdown_floorplan_close_mobile.ggVisible;
			var flag=me._dropdown_floorplan_close_mobile.ggVisible;
			me._dropdown_floorplan_close_mobile.style.transition='none';
			me._dropdown_floorplan_close_mobile.style.visibility=((flag)&&(Number(me._dropdown_floorplan_close_mobile.style.opacity)>0||!me._dropdown_floorplan_close_mobile.style.opacity))?'inherit':'hidden';
			me._dropdown_floorplan_title_mobile.ggVisible = !me._dropdown_floorplan_title_mobile.ggVisible;
			var flag=me._dropdown_floorplan_title_mobile.ggVisible;
			me._dropdown_floorplan_title_mobile.style.transition='none';
			me._dropdown_floorplan_title_mobile.style.visibility=((flag)&&(Number(me._dropdown_floorplan_title_mobile.style.opacity)>0||!me._dropdown_floorplan_title_mobile.style.opacity))?'inherit':'hidden';
			me._dropdown_floorplan_empty_title_mobile.ggVisible = !me._dropdown_floorplan_empty_title_mobile.ggVisible;
			var flag=me._dropdown_floorplan_empty_title_mobile.ggVisible;
			me._dropdown_floorplan_empty_title_mobile.style.transition='none';
			me._dropdown_floorplan_empty_title_mobile.style.visibility=((flag)&&(Number(me._dropdown_floorplan_empty_title_mobile.style.opacity)>0||!me._dropdown_floorplan_empty_title_mobile.style.opacity))?'inherit':'hidden';
		}
		me._dropdown_floorplan_title_background_mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me._dropdown_floorplan_empty_title_mobile=document.createElement('div');
		els=me._dropdown_floorplan_empty_title_mobile__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Dropdown FloorPlan Empty Title_mobile";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((300px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : hidden;';
		hs+='width : 300px;';
		hs+='pointer-events:none;';
		hs+='font-weight: bold;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='pointer-events: none;';
		hs+='font-size: 12px;';
		hs+='font-weight: lighter;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._dropdown_floorplan_empty_title_mobile.ggUpdateText=function() {
			var params = [];
			var hs = player._("\u683c\u5c40\u5716 \u9ede\u64ca\u5c55\u958b", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._dropdown_floorplan_empty_title_mobile.ggUpdateText();
		el.appendChild(els);
		me._dropdown_floorplan_empty_title_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_floorplan_empty_title_mobile.ggUpdatePosition=function (useTransition) {
		}
		me._dropdown_floorplan_title_background_mobile.appendChild(me._dropdown_floorplan_empty_title_mobile);
		el=me._dropdown_floorplan_title_mobile=document.createElement('div');
		els=me._dropdown_floorplan_title_mobile__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Dropdown FloorPlan Title_mobile";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((300px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:none;';
		hs+='font-weight: bold;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='pointer-events: none;';
		hs+='font-size: 12px;';
		hs+='font-weight: lighter;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._dropdown_floorplan_title_mobile.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("\u683c\u5c40\u5716 -- %1 ", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._dropdown_floorplan_title_mobile.ggUpdateText();
		player.addListener('changenode', function() {
			me._dropdown_floorplan_title_mobile.ggUpdateText();
		});
		el.appendChild(els);
		me._dropdown_floorplan_title_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_floorplan_title_mobile.ggUpdatePosition=function (useTransition) {
		}
		me._dropdown_floorplan_title_background_mobile.appendChild(me._dropdown_floorplan_title_mobile);
		el=me._dropdown_floorplan_open_mobile=document.createElement('div');
		els=me._dropdown_floorplan_open_mobile__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodH'+
			'RwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSIyMHB4IiB4PSIwcHgiIHdpZHRoPSIyMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDIwIDIwIj4KIDxwb2x5Z29uIGZpbGw9IiMwMDAwMDAiIHBvaW50cz0iMCwwIDEwLDIwIDIwLDAgIiBmaWxsLW9wYWNpdHk9IjEiLz4KPC9zdmc+Cg==';
		me._dropdown_floorplan_open_mobile__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Dropdown FloorPlan Open_mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 10px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._dropdown_floorplan_open_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_floorplan_open_mobile.ggUpdatePosition=function (useTransition) {
		}
		me._dropdown_floorplan_title_background_mobile.appendChild(me._dropdown_floorplan_open_mobile);
		el=me._dropdown_floorplan_close_mobile=document.createElement('div');
		els=me._dropdown_floorplan_close_mobile__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodH'+
			'RwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSIyMHB4IiB4PSIwcHgiIHdpZHRoPSIyMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDIwIDIwIj4KIDxwb2x5Z29uIGZpbGw9IiMwMDAwMDAiIHBvaW50cz0iMjAsMjAgMTAsMCAwLDIwICIgZmlsbC1vcGFjaXR5PSIxIi8+Cjwvc3ZnPgo=';
		me._dropdown_floorplan_close_mobile__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Dropdown FloorPlan Close_mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 10px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._dropdown_floorplan_close_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_floorplan_close_mobile.ggUpdatePosition=function (useTransition) {
		}
		me._dropdown_floorplan_title_background_mobile.appendChild(me._dropdown_floorplan_close_mobile);
		me._dropdown_floorplan_mobile.appendChild(me._dropdown_floorplan_title_background_mobile);
		me.divSkin.appendChild(me._dropdown_floorplan_mobile);
		el=me._dropdown_floorplan_mobile_l=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="Dropdown FloorPlan_mobile_L";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 180px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._dropdown_floorplan_mobile_l.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._dropdown_floorplan_mobile_l.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width < 640)) && 
				((player.getViewerSize(true).width > 320)) && 
				((player.getMapsContainingNode(player.getCurrentNode()).length > 0 == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._dropdown_floorplan_mobile_l.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._dropdown_floorplan_mobile_l.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._dropdown_floorplan_mobile_l.style.transition='';
				if (me._dropdown_floorplan_mobile_l.ggCurrentLogicStateVisible == 0) {
					me._dropdown_floorplan_mobile_l.style.visibility=(Number(me._dropdown_floorplan_mobile_l.style.opacity)>0||!me._dropdown_floorplan_mobile_l.style.opacity)?'inherit':'hidden';
					me._dropdown_floorplan_mobile_l.ggVisible=true;
				}
				else {
					me._dropdown_floorplan_mobile_l.style.visibility="hidden";
					me._dropdown_floorplan_mobile_l.ggVisible=false;
				}
			}
		}
		me._dropdown_floorplan_mobile_l.logicBlock_visible();
		me._dropdown_floorplan_mobile_l.ggUpdatePosition=function (useTransition) {
		}
		el=me._room_descrip_mobile_l=document.createElement('div');
		el.ggId="Room_descrip_mobile_L";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 90px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 100px;';
		hs+='visibility : inherit;';
		hs+='width : 180px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._room_descrip_mobile_l.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._room_descrip_mobile_l.ggUpdatePosition=function (useTransition) {
		}
		el=me._room_intro_mobile_l=document.createElement('div');
		els=me._room_intro_mobile_l__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Room_Intro_mobile_L";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 90px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 180px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 4px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._room_intro_mobile_l.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			params.push(String(player._(me.ggUserdata.description)));
			var hs = player._("%1\uff1a\n%2", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._room_intro_mobile_l.ggUpdateText();
		player.addListener('changenode', function() {
			me._room_intro_mobile_l.ggUpdateText();
		});
		el.appendChild(els);
		me._room_intro_mobile_l.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._room_intro_mobile_l.ggUpdatePosition=function (useTransition) {
		}
		me._room_descrip_mobile_l.appendChild(me._room_intro_mobile_l);
		me._dropdown_floorplan_mobile_l.appendChild(me._room_descrip_mobile_l);
		el=me._map_1_mobile_l=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapLayers = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = '_none';
		el.ggId="Map 1_mobile_L";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 80px;';
		hs+='opacity : 0.6;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 180px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_1_mobile_l.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_1_mobile_l.ggUpdatePosition=function (useTransition) {
		}
		me._dropdown_floorplan_mobile_l.appendChild(me._map_1_mobile_l);
		el=me._dropdown_floorplan_title_background_mobile_l=document.createElement('div');
		el.ggId="Dropdown FloorPlan Title Background_mobile_L";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.509804);';
		hs+='border : 0px solid #005500;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 180px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._dropdown_floorplan_title_background_mobile_l.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_floorplan_title_background_mobile_l.onclick=function (e) {
			me._map_1_mobile_l.ggVisible = !me._map_1_mobile_l.ggVisible;
			var flag=me._map_1_mobile_l.ggVisible;
			if (me._map_1_mobile_l.ggVisible) {
				if (me._map_1_mobile_l.ggMapNotLoaded && me._map_1_mobile_l.ggInitMap) {
					me._map_1_mobile_l.ggInitMap(false);
					me._map_1_mobile_l.ggInitMapMarkers(true);
				}
			} else {
				if (me._map_1_mobile_l.ggClearMap) me._map_1_mobile_l.ggClearMap();
			}
			me._map_1_mobile_l.style.transition='none';
			me._map_1_mobile_l.style.visibility=((flag)&&(Number(me._map_1_mobile_l.style.opacity)>0||!me._map_1_mobile_l.style.opacity))?'inherit':'hidden';
			me._room_descrip_mobile_l.ggVisible = !me._room_descrip_mobile_l.ggVisible;
			var flag=me._room_descrip_mobile_l.ggVisible;
			me._room_descrip_mobile_l.style.transition='none';
			me._room_descrip_mobile_l.style.visibility=((flag)&&(Number(me._room_descrip_mobile_l.style.opacity)>0||!me._room_descrip_mobile_l.style.opacity))?'inherit':'hidden';
			me._dropdown_floorplan_open_mobile_l.ggVisible = !me._dropdown_floorplan_open_mobile_l.ggVisible;
			var flag=me._dropdown_floorplan_open_mobile_l.ggVisible;
			me._dropdown_floorplan_open_mobile_l.style.transition='none';
			me._dropdown_floorplan_open_mobile_l.style.visibility=((flag)&&(Number(me._dropdown_floorplan_open_mobile_l.style.opacity)>0||!me._dropdown_floorplan_open_mobile_l.style.opacity))?'inherit':'hidden';
			me._dropdown_floorplan_close_mobile_l.ggVisible = !me._dropdown_floorplan_close_mobile_l.ggVisible;
			var flag=me._dropdown_floorplan_close_mobile_l.ggVisible;
			me._dropdown_floorplan_close_mobile_l.style.transition='none';
			me._dropdown_floorplan_close_mobile_l.style.visibility=((flag)&&(Number(me._dropdown_floorplan_close_mobile_l.style.opacity)>0||!me._dropdown_floorplan_close_mobile_l.style.opacity))?'inherit':'hidden';
			me._dropdown_floorplan_title_mobile_l.ggVisible = !me._dropdown_floorplan_title_mobile_l.ggVisible;
			var flag=me._dropdown_floorplan_title_mobile_l.ggVisible;
			me._dropdown_floorplan_title_mobile_l.style.transition='none';
			me._dropdown_floorplan_title_mobile_l.style.visibility=((flag)&&(Number(me._dropdown_floorplan_title_mobile_l.style.opacity)>0||!me._dropdown_floorplan_title_mobile_l.style.opacity))?'inherit':'hidden';
			me._dropdown_floorplan_empty_title_mobile_l.ggVisible = !me._dropdown_floorplan_empty_title_mobile_l.ggVisible;
			var flag=me._dropdown_floorplan_empty_title_mobile_l.ggVisible;
			me._dropdown_floorplan_empty_title_mobile_l.style.transition='none';
			me._dropdown_floorplan_empty_title_mobile_l.style.visibility=((flag)&&(Number(me._dropdown_floorplan_empty_title_mobile_l.style.opacity)>0||!me._dropdown_floorplan_empty_title_mobile_l.style.opacity))?'inherit':'hidden';
		}
		me._dropdown_floorplan_title_background_mobile_l.ggUpdatePosition=function (useTransition) {
		}
		el=me._dropdown_floorplan_empty_title_mobile_l=document.createElement('div');
		els=me._dropdown_floorplan_empty_title_mobile_l__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Dropdown FloorPlan Empty Title_mobile_L";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 192px;';
		hs+='pointer-events:none;';
		hs+='font-weight: bold;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='pointer-events: none;';
		hs+='font-size: 12px;';
		hs+='font-weight: lighter;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._dropdown_floorplan_empty_title_mobile_l.ggUpdateText=function() {
			var params = [];
			var hs = player._("\u683c\u5c40\u5716 \u9ede\u64ca\u5c55\u958b", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._dropdown_floorplan_empty_title_mobile_l.ggUpdateText();
		el.appendChild(els);
		me._dropdown_floorplan_empty_title_mobile_l.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_floorplan_empty_title_mobile_l.ggUpdatePosition=function (useTransition) {
		}
		me._dropdown_floorplan_title_background_mobile_l.appendChild(me._dropdown_floorplan_empty_title_mobile_l);
		el=me._dropdown_floorplan_title_mobile_l=document.createElement('div');
		els=me._dropdown_floorplan_title_mobile_l__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Dropdown FloorPlan Title_mobile_L";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 192px;';
		hs+='pointer-events:none;';
		hs+='font-weight: bold;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='pointer-events: none;';
		hs+='font-size: 12px;';
		hs+='font-weight: lighter;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._dropdown_floorplan_title_mobile_l.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("\u683c\u5c40\u5716 -- %1 ", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._dropdown_floorplan_title_mobile_l.ggUpdateText();
		player.addListener('changenode', function() {
			me._dropdown_floorplan_title_mobile_l.ggUpdateText();
		});
		el.appendChild(els);
		me._dropdown_floorplan_title_mobile_l.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_floorplan_title_mobile_l.ggUpdatePosition=function (useTransition) {
		}
		me._dropdown_floorplan_title_background_mobile_l.appendChild(me._dropdown_floorplan_title_mobile_l);
		el=me._dropdown_floorplan_open_mobile_l=document.createElement('div');
		els=me._dropdown_floorplan_open_mobile_l__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodH'+
			'RwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSIyMHB4IiB4PSIwcHgiIHdpZHRoPSIyMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDIwIDIwIj4KIDxwb2x5Z29uIGZpbGw9IiMwMDAwMDAiIHBvaW50cz0iMCwwIDEwLDIwIDIwLDAgIiBmaWxsLW9wYWNpdHk9IjEiLz4KPC9zdmc+Cg==';
		me._dropdown_floorplan_open_mobile_l__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Dropdown FloorPlan Open_mobile_L";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 10px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._dropdown_floorplan_open_mobile_l.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_floorplan_open_mobile_l.ggUpdatePosition=function (useTransition) {
		}
		me._dropdown_floorplan_title_background_mobile_l.appendChild(me._dropdown_floorplan_open_mobile_l);
		el=me._dropdown_floorplan_close_mobile_l=document.createElement('div');
		els=me._dropdown_floorplan_close_mobile_l__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodH'+
			'RwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSIyMHB4IiB4PSIwcHgiIHdpZHRoPSIyMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDIwIDIwIj4KIDxwb2x5Z29uIGZpbGw9IiMwMDAwMDAiIHBvaW50cz0iMjAsMjAgMTAsMCAwLDIwICIgZmlsbC1vcGFjaXR5PSIxIi8+Cjwvc3ZnPgo=';
		me._dropdown_floorplan_close_mobile_l__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Dropdown FloorPlan Close_mobile_L";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 10px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._dropdown_floorplan_close_mobile_l.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_floorplan_close_mobile_l.ggUpdatePosition=function (useTransition) {
		}
		me._dropdown_floorplan_title_background_mobile_l.appendChild(me._dropdown_floorplan_close_mobile_l);
		me._dropdown_floorplan_mobile_l.appendChild(me._dropdown_floorplan_title_background_mobile_l);
		me.divSkin.appendChild(me._dropdown_floorplan_mobile_l);
		el=me._dropdown_floorplan=document.createElement('div');
		el.ggId="Dropdown FloorPlan";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 177px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 20px;';
		hs+='visibility : hidden;';
		hs+='width : 300px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._dropdown_floorplan.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._dropdown_floorplan.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width >= 640)) && 
				((player.getMapsContainingNode(player.getCurrentNode()).length > 0 == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._dropdown_floorplan.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._dropdown_floorplan.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._dropdown_floorplan.style.transition='';
				if (me._dropdown_floorplan.ggCurrentLogicStateVisible == 0) {
					me._dropdown_floorplan.style.visibility=(Number(me._dropdown_floorplan.style.opacity)>0||!me._dropdown_floorplan.style.opacity)?'inherit':'hidden';
					me._dropdown_floorplan.ggVisible=true;
				}
				else {
					me._dropdown_floorplan.style.visibility="hidden";
					me._dropdown_floorplan.ggVisible=false;
				}
			}
		}
		me._dropdown_floorplan.logicBlock_visible();
		me._dropdown_floorplan.ggUpdatePosition=function (useTransition) {
		}
		el=me._room_descrip=document.createElement('div');
		el.ggId="Room_descrip";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.470588);';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100px;';
		hs+='position : absolute;';
		hs+='right : -1px;';
		hs+='top : 178px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._room_descrip.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._room_descrip.ggUpdatePosition=function (useTransition) {
		}
		el=me._room_intro=document.createElement('div');
		els=me._room_intro__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Room_Intro";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 1px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 4px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._room_intro.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			params.push(String(player._(me.ggUserdata.description)));
			var hs = player._("%1\uff1a\n%2", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._room_intro.ggUpdateText();
		player.addListener('changenode', function() {
			me._room_intro.ggUpdateText();
		});
		el.appendChild(els);
		me._room_intro.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._room_intro.ggUpdatePosition=function (useTransition) {
		}
		me._room_descrip.appendChild(me._room_intro);
		me._dropdown_floorplan.appendChild(me._room_descrip);
		el=me._map_1=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapLayers = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = '_none';
		el.ggId="Map 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 157px;';
		hs+='opacity : 0.6;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_1.ggUpdatePosition=function (useTransition) {
		}
		me._dropdown_floorplan.appendChild(me._map_1);
		el=me._dropdown_floorplan_title_background=document.createElement('div');
		el.ggId="Dropdown FloorPlan Title Background";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.509804);';
		hs+='border : 0px solid #005500;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((300px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._dropdown_floorplan_title_background.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_floorplan_title_background.onclick=function (e) {
			me._map_1.ggVisible = !me._map_1.ggVisible;
			var flag=me._map_1.ggVisible;
			if (me._map_1.ggVisible) {
				if (me._map_1.ggMapNotLoaded && me._map_1.ggInitMap) {
					me._map_1.ggInitMap(false);
					me._map_1.ggInitMapMarkers(true);
				}
			} else {
				if (me._map_1.ggClearMap) me._map_1.ggClearMap();
			}
			me._map_1.style.transition='none';
			me._map_1.style.visibility=((flag)&&(Number(me._map_1.style.opacity)>0||!me._map_1.style.opacity))?'inherit':'hidden';
			me._room_descrip.ggVisible = !me._room_descrip.ggVisible;
			var flag=me._room_descrip.ggVisible;
			me._room_descrip.style.transition='none';
			me._room_descrip.style.visibility=((flag)&&(Number(me._room_descrip.style.opacity)>0||!me._room_descrip.style.opacity))?'inherit':'hidden';
			me._dropdown_floorplan_open.ggVisible = !me._dropdown_floorplan_open.ggVisible;
			var flag=me._dropdown_floorplan_open.ggVisible;
			me._dropdown_floorplan_open.style.transition='none';
			me._dropdown_floorplan_open.style.visibility=((flag)&&(Number(me._dropdown_floorplan_open.style.opacity)>0||!me._dropdown_floorplan_open.style.opacity))?'inherit':'hidden';
			me._dropdown_floorplan_close.ggVisible = !me._dropdown_floorplan_close.ggVisible;
			var flag=me._dropdown_floorplan_close.ggVisible;
			me._dropdown_floorplan_close.style.transition='none';
			me._dropdown_floorplan_close.style.visibility=((flag)&&(Number(me._dropdown_floorplan_close.style.opacity)>0||!me._dropdown_floorplan_close.style.opacity))?'inherit':'hidden';
			me._dropdown_floorplan_title.ggVisible = !me._dropdown_floorplan_title.ggVisible;
			var flag=me._dropdown_floorplan_title.ggVisible;
			me._dropdown_floorplan_title.style.transition='none';
			me._dropdown_floorplan_title.style.visibility=((flag)&&(Number(me._dropdown_floorplan_title.style.opacity)>0||!me._dropdown_floorplan_title.style.opacity))?'inherit':'hidden';
			me._dropdown_floorplan_empty_title.ggVisible = !me._dropdown_floorplan_empty_title.ggVisible;
			var flag=me._dropdown_floorplan_empty_title.ggVisible;
			me._dropdown_floorplan_empty_title.style.transition='none';
			me._dropdown_floorplan_empty_title.style.visibility=((flag)&&(Number(me._dropdown_floorplan_empty_title.style.opacity)>0||!me._dropdown_floorplan_empty_title.style.opacity))?'inherit':'hidden';
		}
		me._dropdown_floorplan_title_background.ggUpdatePosition=function (useTransition) {
		}
		el=me._dropdown_floorplan_empty_title=document.createElement('div');
		els=me._dropdown_floorplan_empty_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Dropdown FloorPlan Empty Title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((300px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : hidden;';
		hs+='width : 300px;';
		hs+='pointer-events:none;';
		hs+='font-weight: bold;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='pointer-events: none;';
		hs+='font-size: 12px;';
		hs+='font-weight: lighter;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._dropdown_floorplan_empty_title.ggUpdateText=function() {
			var params = [];
			var hs = player._("\u683c\u5c40\u5716 \u9ede\u64ca\u5c55\u958b", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._dropdown_floorplan_empty_title.ggUpdateText();
		el.appendChild(els);
		me._dropdown_floorplan_empty_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_floorplan_empty_title.ggUpdatePosition=function (useTransition) {
		}
		me._dropdown_floorplan_title_background.appendChild(me._dropdown_floorplan_empty_title);
		el=me._dropdown_floorplan_title=document.createElement('div');
		els=me._dropdown_floorplan_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Dropdown FloorPlan Title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((300px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:none;';
		hs+='font-weight: bold;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='pointer-events: none;';
		hs+='font-size: 12px;';
		hs+='font-weight: lighter;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._dropdown_floorplan_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("\u683c\u5c40\u5716 -- %1 ", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._dropdown_floorplan_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._dropdown_floorplan_title.ggUpdateText();
		});
		el.appendChild(els);
		me._dropdown_floorplan_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_floorplan_title.ggUpdatePosition=function (useTransition) {
		}
		me._dropdown_floorplan_title_background.appendChild(me._dropdown_floorplan_title);
		el=me._dropdown_floorplan_open=document.createElement('div');
		els=me._dropdown_floorplan_open__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodH'+
			'RwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSIyMHB4IiB4PSIwcHgiIHdpZHRoPSIyMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDIwIDIwIj4KIDxwb2x5Z29uIGZpbGw9IiMwMDAwMDAiIHBvaW50cz0iMCwwIDEwLDIwIDIwLDAgIiBmaWxsLW9wYWNpdHk9IjEiLz4KPC9zdmc+Cg==';
		me._dropdown_floorplan_open__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Dropdown FloorPlan Open";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 10px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._dropdown_floorplan_open.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_floorplan_open.ggUpdatePosition=function (useTransition) {
		}
		me._dropdown_floorplan_title_background.appendChild(me._dropdown_floorplan_open);
		el=me._dropdown_floorplan_close=document.createElement('div');
		els=me._dropdown_floorplan_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodH'+
			'RwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSIyMHB4IiB4PSIwcHgiIHdpZHRoPSIyMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDIwIDIwIj4KIDxwb2x5Z29uIGZpbGw9IiMwMDAwMDAiIHBvaW50cz0iMjAsMjAgMTAsMCAwLDIwICIgZmlsbC1vcGFjaXR5PSIxIi8+Cjwvc3ZnPgo=';
		me._dropdown_floorplan_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Dropdown FloorPlan Close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 10px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 10px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._dropdown_floorplan_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_floorplan_close.ggUpdatePosition=function (useTransition) {
		}
		me._dropdown_floorplan_title_background.appendChild(me._dropdown_floorplan_close);
		me._dropdown_floorplan.appendChild(me._dropdown_floorplan_title_background);
		me.divSkin.appendChild(me._dropdown_floorplan);
		el=me._thumbnail_show_button_show=document.createElement('div');
		els=me._thumbnail_show_button_show__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIHZlcnNpb249IjEuMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaGVpZ2h0PSIzMnB4IiB4bWxucz0iaH'+
			'R0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogPGcgaWQ9IkxheWVyXzEiPgogIDxnIGlkPSJMYXllcl8xXzFfIi8+CiA8L2c+CiA8ZyBpZD0iRWJlbmVfMV8xXyI+CiAgPGc+CiAgIDxnIG9wYWNpdHk9IjAuNCI+CiAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNSIgZmlsbD0ibm9uZSIgZD0iTTE2LDMuNTAxQzkuMTA3LDMuNTAxLDMuNSw5LjEwOCwzLjUsMTZTOS4xMDcsMjguNDk5LDE2LDI4LjQ5OSAgICAgYzYuODkzLDAsMTIuNDk5LTUuNjA3'+
			'LDEyLjQ5OS0xMi40OTlTMjIuODkzLDMuNTAxLDE2LDMuNTAxeiBNMTYsMjYuMDc5Yy01LjU1OCwwLTEwLjA4LTQuNTIxLTEwLjA4LTEwLjA3OVMxMC40NDIsNS45MiwxNiw1LjkyICAgICBjNS41NTcsMCwxMC4wODEsNC41MjIsMTAuMDgxLDEwLjA4UzIxLjU1NywyNi4wNzksMTYsMjYuMDc5eiIgc3Ryb2tlPSIjM0MzQzNDIi8+CiAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNSIgZmlsbD0ibm9uZSIgZD0iTTExLjI3MSwxMy41MjFIOC44NzVjLTAuNzA3LDAtMS4yOCwwLjU3My0xLjI4LDEuMjh2Mi4zOTYgICAgIGMwLDAuNzA3LDAuNTczLDEuMjgsMS4yOCwxLjI4aDIuMzk2YzAuNzA3LDAsMS'+
			'4yOC0wLjU3MywxLjI4LTEuMjh2LTIuMzk2QzEyLjU1MSwxNC4wOTUsMTEuOTc4LDEzLjUyMSwxMS4yNzEsMTMuNTIxeiIgc3Ryb2tlPSIjM0MzQzNDIi8+CiAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNSIgZmlsbD0ibm9uZSIgZD0iTTE3LjE1MiwxMy41MjFoLTIuMzk2Yy0wLjcwNywwLTEuMjgsMC41NzMtMS4yOCwxLjI4djIuMzk2ICAgICBjMCwwLjcwNywwLjU3MywxLjI3OSwxLjI4LDEuMjc5aDIuMzk2YzAuNzA3LDAsMS4yNzktMC41NzIsMS4yNzktMS4yNzl2LTIuMzk2QzE4LjQzMiwxNC4wOTUsMTcuODU5LDEzLjUyMSwxNy4xNTIsMTMuNTIxeiIgc3Ryb2tlPSIjM0MzQzNDIi8+CiAg'+
			'ICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNSIgZmlsbD0ibm9uZSIgZD0iTTIzLjAzNSwxMy41MjFoLTIuMzk2Yy0wLjcwNywwLTEuMjgxLDAuNTczLTEuMjgxLDEuMjh2Mi4zOTYgICAgIGMwLDAuNzA3LDAuNTc0LDEuMjc5LDEuMjgxLDEuMjc5aDIuMzk2YzAuNzA3LDAsMS4yODEtMC41NzIsMS4yODEtMS4yNzl2LTIuMzk2QzI0LjMxNiwxNC4wOTUsMjMuNzQyLDEzLjUyMSwyMy4wMzUsMTMuNTIxeiIgc3Ryb2tlPSIjM0MzQzNDIi8+CiAgIDwvZz4KICAgPGc+CiAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTYsMy41MDFDOS4xMDcsMy41MDEsMy41LDkuMTA4LDMuNSwxNlM5LjEwNywyOC'+
			'40OTksMTYsMjguNDk5YzYuODkzLDAsMTIuNDk5LTUuNjA3LDEyLjQ5OS0xMi40OTkgICAgIFMyMi44OTMsMy41MDEsMTYsMy41MDF6IE0xNiwyNi4wNzljLTUuNTU4LDAtMTAuMDgtNC41MjEtMTAuMDgtMTAuMDc5UzEwLjQ0Miw1LjkyLDE2LDUuOTJjNS41NTcsMCwxMC4wODEsNC41MjIsMTAuMDgxLDEwLjA4ICAgICBTMjEuNTU3LDI2LjA3OSwxNiwyNi4wNzl6Ii8+CiAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTEuMjcxLDEzLjUyMUg4Ljg3NWMtMC43MDcsMC0xLjI4LDAuNTczLTEuMjgsMS4yOHYyLjM5NmMwLDAuNzA3LDAuNTczLDEuMjgsMS4yOCwxLjI4aDIuMzk2ICAgICBjMC43'+
			'MDcsMCwxLjI4LTAuNTczLDEuMjgtMS4yOHYtMi4zOTZDMTIuNTUxLDE0LjA5NSwxMS45NzgsMTMuNTIxLDExLjI3MSwxMy41MjF6Ii8+CiAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTcuMTUyLDEzLjUyMWgtMi4zOTZjLTAuNzA3LDAtMS4yOCwwLjU3My0xLjI4LDEuMjh2Mi4zOTZjMCwwLjcwNywwLjU3MywxLjI3OSwxLjI4LDEuMjc5aDIuMzk2ICAgICBjMC43MDcsMCwxLjI3OS0wLjU3MiwxLjI3OS0xLjI3OXYtMi4zOTZDMTguNDMyLDE0LjA5NSwxNy44NTksMTMuNTIxLDE3LjE1MiwxMy41MjF6Ii8+CiAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMjMuMDM1LDEzLjUyMWgtMi'+
			'4zOTZjLTAuNzA3LDAtMS4yODEsMC41NzMtMS4yODEsMS4yOHYyLjM5NmMwLDAuNzA3LDAuNTc0LDEuMjc5LDEuMjgxLDEuMjc5aDIuMzk2ICAgICBjMC43MDcsMCwxLjI4MS0wLjU3MiwxLjI4MS0xLjI3OXYtMi4zOTZDMjQuMzE2LDE0LjA5NSwyMy43NDIsMTMuNTIxLDIzLjAzNSwxMy41MjF6Ii8+CiAgIDwvZz4KICAgPGc+CiAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjAuMiIgZmlsbD0ibm9uZSIgZD0iTTE2LDMuNTAxQzkuMTA3LDMuNTAxLDMuNSw5LjEwOCwzLjUsMTZTOS4xMDcsMjguNDk5LDE2LDI4LjQ5OSAgICAgYzYuODkzLDAsMTIuNDk5LTUuNjA3LDEyLjQ5OS0xMi40OTlTMjIuODkz'+
			'LDMuNTAxLDE2LDMuNTAxeiBNMTYsMjYuMDc5Yy01LjU1OCwwLTEwLjA4LTQuNTIxLTEwLjA4LTEwLjA3OVMxMC40NDIsNS45MiwxNiw1LjkyICAgICBjNS41NTcsMCwxMC4wODEsNC41MjIsMTAuMDgxLDEwLjA4UzIxLjU1NywyNi4wNzksMTYsMjYuMDc5eiIgc3Ryb2tlPSIjMDAwMDAwIi8+CiAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjAuMiIgZmlsbD0ibm9uZSIgZD0iTTExLjI3MSwxMy41MjFIOC44NzVjLTAuNzA3LDAtMS4yOCwwLjU3My0xLjI4LDEuMjh2Mi4zOTYgICAgIGMwLDAuNzA3LDAuNTczLDEuMjgsMS4yOCwxLjI4aDIuMzk2YzAuNzA3LDAsMS4yOC0wLjU3MywxLjI4LTEuMjh2LT'+
			'IuMzk2QzEyLjU1MSwxNC4wOTUsMTEuOTc4LDEzLjUyMSwxMS4yNzEsMTMuNTIxeiIgc3Ryb2tlPSIjMDAwMDAwIi8+CiAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjAuMiIgZmlsbD0ibm9uZSIgZD0iTTE3LjE1MiwxMy41MjFoLTIuMzk2Yy0wLjcwNywwLTEuMjgsMC41NzMtMS4yOCwxLjI4djIuMzk2ICAgICBjMCwwLjcwNywwLjU3MywxLjI3OSwxLjI4LDEuMjc5aDIuMzk2YzAuNzA3LDAsMS4yNzktMC41NzIsMS4yNzktMS4yNzl2LTIuMzk2QzE4LjQzMiwxNC4wOTUsMTcuODU5LDEzLjUyMSwxNy4xNTIsMTMuNTIxeiIgc3Ryb2tlPSIjMDAwMDAwIi8+CiAgICA8cGF0aCBzdHJva2Utd2lkdGg9'+
			'IjAuMiIgZmlsbD0ibm9uZSIgZD0iTTIzLjAzNSwxMy41MjFoLTIuMzk2Yy0wLjcwNywwLTEuMjgxLDAuNTczLTEuMjgxLDEuMjh2Mi4zOTYgICAgIGMwLDAuNzA3LDAuNTc0LDEuMjc5LDEuMjgxLDEuMjc5aDIuMzk2YzAuNzA3LDAsMS4yODEtMC41NzIsMS4yODEtMS4yNzl2LTIuMzk2QzI0LjMxNiwxNC4wOTUsMjMuNzQyLDEzLjUyMSwyMy4wMzUsMTMuNTIxeiIgc3Ryb2tlPSIjMDAwMDAwIi8+CiAgIDwvZz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._thumbnail_show_button_show__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._thumbnail_show_button_show__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIHZlcnNpb249IjEuMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaGVpZ2h0PSIzMnB4IiB4bWxucz0iaH'+
			'R0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogPGcgaWQ9IkxheWVyXzEiPgogIDxnIGlkPSJMYXllcl8xXzFfIi8+CiA8L2c+CiA8ZyBpZD0iRWJlbmVfMV8xXyI+CiAgPGc+CiAgIDxnIG9wYWNpdHk9IjAuNCI+CiAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNSIgZmlsbD0ibm9uZSIgZD0iTTE1Ljk5OSwyLjI1MUM4LjQxNywyLjI1MSwyLjI1LDguNDE5LDIuMjUsMTYgICAgIHM2LjE2NywxMy43NDksMTMuNzQ5LDEzLjc0OWM3LjU4MywwLDEz'+
			'Ljc0OS02LjE2OCwxMy43NDktMTMuNzQ5UzIzLjU4MiwyLjI1MSwxNS45OTksMi4yNTF6IE0xNS45OTksMjcuMDg3ICAgICBDOS44ODYsMjcuMDg3LDQuOTExLDIyLjExMyw0LjkxMSwxNlM5Ljg4Niw0LjkxMiwxNS45OTksNC45MTJTMjcuMDg4LDkuODg3LDI3LjA4OCwxNlMyMi4xMTIsMjcuMDg3LDE1Ljk5OSwyNy4wODd6IiBzdHJva2U9IiMzQzNDM0MiLz4KICAgIDxwYXRoIHN0cm9rZS13aWR0aD0iMS41IiBmaWxsPSJub25lIiBkPSJNMTAuNzk4LDEzLjI3M0g4LjE2MmMtMC43NzgsMC0xLjQwOCwwLjYzMS0xLjQwOCwxLjQwOHYyLjYzNyAgICAgYzAsMC43NzcsMC42MywxLjQwOCwxLjQwOC'+
			'wxLjQwOGgyLjYzNmMwLjc3NywwLDEuNDA4LTAuNjMxLDEuNDA4LTEuNDA4di0yLjYzN0MxMi4yMDYsMTMuOTA0LDExLjU3NSwxMy4yNzMsMTAuNzk4LDEzLjI3M3oiIHN0cm9rZT0iIzNDM0MzQyIvPgogICAgPHBhdGggc3Ryb2tlLXdpZHRoPSIxLjUiIGZpbGw9Im5vbmUiIGQ9Ik0xNy4yNjgsMTMuMjczaC0yLjYzNmMtMC43NzcsMC0xLjQwOCwwLjYzMS0xLjQwOCwxLjQwOHYyLjYzNyAgICAgYzAsMC43NzcsMC42MzEsMS40MDcsMS40MDgsMS40MDdoMi42MzZjMC43NzcsMCwxLjQwNy0wLjYzLDEuNDA3LTEuNDA3di0yLjYzN0MxOC42NzUsMTMuOTA0LDE4LjA0NSwxMy4yNzMsMTcuMjY4LDEz'+
			'LjI3M3oiIHN0cm9rZT0iIzNDM0MzQyIvPgogICAgPHBhdGggc3Ryb2tlLXdpZHRoPSIxLjUiIGZpbGw9Im5vbmUiIGQ9Ik0yMy43MzgsMTMuMjczaC0yLjYzNmMtMC43NzgsMC0xLjQwOSwwLjYzMS0xLjQwOSwxLjQwOHYyLjYzNyAgICAgYzAsMC43NzcsMC42MzEsMS40MDcsMS40MDksMS40MDdoMi42MzZjMC43NzgsMCwxLjQwOS0wLjYzLDEuNDA5LTEuNDA3di0yLjYzN0MyNS4xNDcsMTMuOTA0LDI0LjUxNywxMy4yNzMsMjMuNzM4LDEzLjI3M3oiIHN0cm9rZT0iIzNDM0MzQyIvPgogICA8L2c+CiAgIDxnPgogICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTE1Ljk5OSwyLjI1MUM4LjQxNy'+
			'wyLjI1MSwyLjI1LDguNDE5LDIuMjUsMTZzNi4xNjcsMTMuNzQ5LDEzLjc0OSwxMy43NDkgICAgIGM3LjU4MywwLDEzLjc0OS02LjE2OCwxMy43NDktMTMuNzQ5UzIzLjU4MiwyLjI1MSwxNS45OTksMi4yNTF6IE0xNS45OTksMjcuMDg3QzkuODg2LDI3LjA4Nyw0LjkxMSwyMi4xMTMsNC45MTEsMTYgICAgIFM5Ljg4Niw0LjkxMiwxNS45OTksNC45MTJTMjcuMDg4LDkuODg3LDI3LjA4OCwxNlMyMi4xMTIsMjcuMDg3LDE1Ljk5OSwyNy4wODd6Ii8+CiAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTAuNzk4LDEzLjI3M0g4LjE2MmMtMC43NzgsMC0xLjQwOCwwLjYzMS0xLjQwOCwxLjQwOHYy'+
			'LjYzN2MwLDAuNzc3LDAuNjMsMS40MDgsMS40MDgsMS40MDhoMi42MzYgICAgIGMwLjc3NywwLDEuNDA4LTAuNjMxLDEuNDA4LTEuNDA4di0yLjYzN0MxMi4yMDYsMTMuOTA0LDExLjU3NSwxMy4yNzMsMTAuNzk4LDEzLjI3M3oiLz4KICAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0xNy4yNjgsMTMuMjczaC0yLjYzNmMtMC43NzcsMC0xLjQwOCwwLjYzMS0xLjQwOCwxLjQwOHYyLjYzN2MwLDAuNzc3LDAuNjMxLDEuNDA3LDEuNDA4LDEuNDA3aDIuNjM2ICAgICBjMC43NzcsMCwxLjQwNy0wLjYzLDEuNDA3LTEuNDA3di0yLjYzN0MxOC42NzUsMTMuOTA0LDE4LjA0NSwxMy4yNzMsMTcuMjY4LD'+
			'EzLjI3M3oiLz4KICAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0yMy43MzgsMTMuMjczaC0yLjYzNmMtMC43NzgsMC0xLjQwOSwwLjYzMS0xLjQwOSwxLjQwOHYyLjYzN2MwLDAuNzc3LDAuNjMxLDEuNDA3LDEuNDA5LDEuNDA3aDIuNjM2ICAgICBjMC43NzgsMCwxLjQwOS0wLjYzLDEuNDA5LTEuNDA3di0yLjYzN0MyNS4xNDcsMTMuOTA0LDI0LjUxNywxMy4yNzMsMjMuNzM4LDEzLjI3M3oiLz4KICAgPC9nPgogICA8Zz4KICAgIDxwYXRoIHN0cm9rZS13aWR0aD0iMC4yIiBmaWxsPSJub25lIiBkPSJNMTUuOTk5LDIuMjUxQzguNDE3LDIuMjUxLDIuMjUsOC40MTksMi4yNSwxNiAgICAgczYu'+
			'MTY3LDEzLjc0OSwxMy43NDksMTMuNzQ5YzcuNTgzLDAsMTMuNzQ5LTYuMTY4LDEzLjc0OS0xMy43NDlTMjMuNTgyLDIuMjUxLDE1Ljk5OSwyLjI1MXogTTE1Ljk5OSwyNy4wODcgICAgIEM5Ljg4NiwyNy4wODcsNC45MTEsMjIuMTEzLDQuOTExLDE2UzkuODg2LDQuOTEyLDE1Ljk5OSw0LjkxMlMyNy4wODgsOS44ODcsMjcuMDg4LDE2UzIyLjExMiwyNy4wODcsMTUuOTk5LDI3LjA4N3oiIHN0cm9rZT0iIzAwMDAwMCIvPgogICAgPHBhdGggc3Ryb2tlLXdpZHRoPSIwLjIiIGZpbGw9Im5vbmUiIGQ9Ik0xMC43OTgsMTMuMjczSDguMTYyYy0wLjc3OCwwLTEuNDA4LDAuNjMxLTEuNDA4LDEuNDA4dj'+
			'IuNjM3ICAgICBjMCwwLjc3NywwLjYzLDEuNDA4LDEuNDA4LDEuNDA4aDIuNjM2YzAuNzc3LDAsMS40MDgtMC42MzEsMS40MDgtMS40MDh2LTIuNjM3QzEyLjIwNiwxMy45MDQsMTEuNTc1LDEzLjI3MywxMC43OTgsMTMuMjczeiIgc3Ryb2tlPSIjMDAwMDAwIi8+CiAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjAuMiIgZmlsbD0ibm9uZSIgZD0iTTE3LjI2OCwxMy4yNzNoLTIuNjM2Yy0wLjc3NywwLTEuNDA4LDAuNjMxLTEuNDA4LDEuNDA4djIuNjM3ICAgICBjMCwwLjc3NywwLjYzMSwxLjQwNywxLjQwOCwxLjQwN2gyLjYzNmMwLjc3NywwLDEuNDA3LTAuNjMsMS40MDctMS40MDd2LTIuNjM3QzE4'+
			'LjY3NSwxMy45MDQsMTguMDQ1LDEzLjI3MywxNy4yNjgsMTMuMjczeiIgc3Ryb2tlPSIjMDAwMDAwIi8+CiAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjAuMiIgZmlsbD0ibm9uZSIgZD0iTTIzLjczOCwxMy4yNzNoLTIuNjM2Yy0wLjc3OCwwLTEuNDA5LDAuNjMxLTEuNDA5LDEuNDA4djIuNjM3ICAgICBjMCwwLjc3NywwLjYzMSwxLjQwNywxLjQwOSwxLjQwN2gyLjYzNmMwLjc3OCwwLDEuNDA5LTAuNjMsMS40MDktMS40MDd2LTIuNjM3QzI1LjE0NywxMy45MDQsMjQuNTE3LDEzLjI3MywyMy43MzgsMTMuMjczeiIgc3Ryb2tlPSIjMDAwMDAwIi8+CiAgIDwvZz4KICA8L2c+CiA8L2c+Cjwvc3ZnPg'+
			'o=';
		me._thumbnail_show_button_show__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="thumbnail_show_button_show";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 23px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_show_button_show.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnail_show_button_show.onclick=function (e) {
			player.setVariableValue('vis_thumbnail_menu', !player.getVariableValue('vis_thumbnail_menu'));
		}
		me._thumbnail_show_button_show.onmouseenter=function (e) {
			me._thumbnail_show_button_show__img.style.visibility='hidden';
			me._thumbnail_show_button_show__imgo.style.visibility='inherit';
			me.elementMouseOver['thumbnail_show_button_show']=true;
			me._tt_thumbnail_open.logicBlock_visible();
		}
		me._thumbnail_show_button_show.onmouseleave=function (e) {
			me._thumbnail_show_button_show__img.style.visibility='inherit';
			me._thumbnail_show_button_show__imgo.style.visibility='hidden';
			me.elementMouseOver['thumbnail_show_button_show']=false;
			me._tt_thumbnail_open.logicBlock_visible();
		}
		me._thumbnail_show_button_show.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_thumbnail_open=document.createElement('div');
		els=me._tt_thumbnail_open__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_thumbnail_open";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_thumbnail_open.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_thumbnail_open.ggUpdateText();
		el.appendChild(els);
		me._tt_thumbnail_open.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_thumbnail_open.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_thumbnail_open.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_thumbnail_open.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_thumbnail_open.style.transition='left 0s, top 0s';
				if (me._tt_thumbnail_open.ggCurrentLogicStatePosition == 0) {
					me._tt_thumbnail_open.style.left = 'calc(50% - (0px / 2))';
					me._tt_thumbnail_open.style.top='-25px';
				}
				else {
					me._tt_thumbnail_open.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._tt_thumbnail_open.style.top='32px';
				}
			}
		}
		me._tt_thumbnail_open.logicBlock_position();
		me._tt_thumbnail_open.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['thumbnail_show_button_show'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_thumbnail_open.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_thumbnail_open.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_thumbnail_open.style.transition='left 0s, top 0s';
				if (me._tt_thumbnail_open.ggCurrentLogicStateVisible == 0) {
					me._tt_thumbnail_open.style.visibility=(Number(me._tt_thumbnail_open.style.opacity)>0||!me._tt_thumbnail_open.style.opacity)?'inherit':'hidden';
					me._tt_thumbnail_open.ggVisible=true;
				}
				else {
					me._tt_thumbnail_open.style.visibility="hidden";
					me._tt_thumbnail_open.ggVisible=false;
				}
			}
		}
		me._tt_thumbnail_open.logicBlock_visible();
		me._tt_thumbnail_open.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('vis_thumbnail_menu') == false))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('vis_thumbnail_menu') == true))
			)
			{
				newLogicStateText = 1;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._tt_thumbnail_open.ggCurrentLogicStateText != newLogicStateText) {
				me._tt_thumbnail_open.ggCurrentLogicStateText = newLogicStateText;
				me._tt_thumbnail_open.style.transition='left 0s, top 0s';
				if (me._tt_thumbnail_open.ggCurrentLogicStateText == 0) {
					if (me._tt_thumbnail_open.ggUpdateText) {
					me._tt_thumbnail_open.ggUpdateText=function() {
						var params = [];
						var hs = player._("\u5c55\u958b\u7e2e\u5716\u9078\u55ae Show Thumbnail Menu", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._tt_thumbnail_open.ggUpdateText();
					} else {
						if (me._tt_thumbnail_open.ggUpdatePosition) me._tt_thumbnail_open.ggUpdatePosition();
					}
				}
				else if (me._tt_thumbnail_open.ggCurrentLogicStateText == 1) {
					if (me._tt_thumbnail_open.ggUpdateText) {
					me._tt_thumbnail_open.ggUpdateText=function() {
						var params = [];
						var hs = player._("\u96b1\u85cf\u7e2e\u5716\u9078\u55ae Hide Thumbnail Menu", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._tt_thumbnail_open.ggUpdateText();
					} else {
						if (me._tt_thumbnail_open.ggUpdatePosition) me._tt_thumbnail_open.ggUpdatePosition();
					}
				}
				else {
					if (me._tt_thumbnail_open.ggUpdateText) {
					me._tt_thumbnail_open.ggUpdateText=function() {
						var params = [];
						var hs = player._("", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._tt_thumbnail_open.ggUpdateText();
					} else {
						if (me._tt_thumbnail_open.ggUpdatePosition) me._tt_thumbnail_open.ggUpdatePosition();
					}
				}
			}
		}
		me._tt_thumbnail_open.logicBlock_text();
		me._tt_thumbnail_open.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_show_button_show.appendChild(me._tt_thumbnail_open);
		me.divSkin.appendChild(me._thumbnail_show_button_show);
		el=me._thumbnail_menu=document.createElement('div');
		els=me._thumbnail_menu__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 73px;';
		hs+='left : 50%;';
		hs+='margin-left : -57.5px;';
		hs+='margin-top : -36.5px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 50%;';
		hs+='width : 115px;';
		hs+="";
		els.setAttribute('style',hs);
		me._thumbnail_menu.ggScrollByX = function(diffX) {
			if(!me._thumbnail_menu.ggHorScrollVisible || diffX == 0 || me._thumbnail_menu.ggHPercentVisible >= 1.0) return;
			me._thumbnail_menu.ggScrollPosX = (me._thumbnail_menu__horScrollFg.offsetLeft + diffX);
			me._thumbnail_menu.ggScrollPosX = Math.max(me._thumbnail_menu.ggScrollPosX, 0);
			me._thumbnail_menu.ggScrollPosX = Math.min(me._thumbnail_menu.ggScrollPosX, me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth);
			me._thumbnail_menu__horScrollFg.style.left = me._thumbnail_menu.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_menu.ggScrollPosX / (me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth);
			me._thumbnail_menu__content.style.left = -(Math.round((me._thumbnail_menu.ggContentWidth * (1.0 - me._thumbnail_menu.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_menu.ggContentLeftOffset + 'px';
			me._thumbnail_menu.ggScrollPosXPercent = (me._thumbnail_menu__horScrollFg.offsetLeft / me._thumbnail_menu__horScrollBg.offsetWidth);
		}
		me._thumbnail_menu.ggScrollByXSmooth = function(diffX) {
			if(!me._thumbnail_menu.ggHorScrollVisible || diffX == 0 || me._thumbnail_menu.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._thumbnail_menu.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._thumbnail_menu.ggScrollPosX >= me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth)) {
					me._thumbnail_menu.ggScrollPosX = Math.min(me._thumbnail_menu.ggScrollPosX, me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._thumbnail_menu.ggScrollPosX <= 0)) {
					me._thumbnail_menu.ggScrollPosX = Math.max(me._thumbnail_menu.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._thumbnail_menu__horScrollFg.style.left = me._thumbnail_menu.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_menu.ggScrollPosX / (me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth);
			me._thumbnail_menu__content.style.left = -(Math.round((me._thumbnail_menu.ggContentWidth * (1.0 - me._thumbnail_menu.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_menu.ggContentLeftOffset + 'px';
			me._thumbnail_menu.ggScrollPosXPercent = (me._thumbnail_menu__horScrollFg.offsetLeft / me._thumbnail_menu__horScrollBg.offsetWidth);
			}, 10);
		}
		me._thumbnail_menu.ggScrollByY = function(diffY) {
			if(!me._thumbnail_menu.ggVertScrollVisible || diffY == 0 || me._thumbnail_menu.ggVPercentVisible >= 1.0) return;
			me._thumbnail_menu.ggScrollPosY = (me._thumbnail_menu__vertScrollFg.offsetTop + diffY);
			me._thumbnail_menu.ggScrollPosY = Math.max(me._thumbnail_menu.ggScrollPosY, 0);
			me._thumbnail_menu.ggScrollPosY = Math.min(me._thumbnail_menu.ggScrollPosY, me._thumbnail_menu__vertScrollBg.offsetHeight - me._thumbnail_menu__vertScrollFg.offsetHeight);
			me._thumbnail_menu__vertScrollFg.style.top = me._thumbnail_menu.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_menu.ggScrollPosY / (me._thumbnail_menu__vertScrollBg.offsetHeight - me._thumbnail_menu__vertScrollFg.offsetHeight);
			me._thumbnail_menu__content.style.top = -(Math.round((me._thumbnail_menu.ggContentHeight * (1.0 - me._thumbnail_menu.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_menu.ggContentTopOffset + 'px';
			me._thumbnail_menu.ggScrollPosYPercent = (me._thumbnail_menu__vertScrollFg.offsetTop / me._thumbnail_menu__vertScrollBg.offsetHeight);
		}
		me._thumbnail_menu.ggScrollByYSmooth = function(diffY) {
			if(!me._thumbnail_menu.ggVertScrollVisible || diffY == 0 || me._thumbnail_menu.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._thumbnail_menu.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._thumbnail_menu.ggScrollPosY >= me._thumbnail_menu__vertScrollBg.offsetHeight - me._thumbnail_menu__vertScrollFg.offsetHeight)) {
					me._thumbnail_menu.ggScrollPosY = Math.min(me._thumbnail_menu.ggScrollPosY, me._thumbnail_menu__vertScrollBg.offsetHeight - me._thumbnail_menu__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._thumbnail_menu.ggScrollPosY <= 0)) {
					me._thumbnail_menu.ggScrollPosY = Math.max(me._thumbnail_menu.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._thumbnail_menu__vertScrollFg.style.top = me._thumbnail_menu.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_menu.ggScrollPosY / (me._thumbnail_menu__vertScrollBg.offsetHeight - me._thumbnail_menu__vertScrollFg.offsetHeight);
			me._thumbnail_menu__content.style.top = -(Math.round((me._thumbnail_menu.ggContentHeight * (1.0 - me._thumbnail_menu.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_menu.ggContentTopOffset + 'px';
			me._thumbnail_menu.ggScrollPosYPercent = (me._thumbnail_menu__vertScrollFg.offsetTop / me._thumbnail_menu__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._thumbnail_menu.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._thumbnail_menu.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._thumbnail_menu.ggHPercentVisible);
					me._thumbnail_menu.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._thumbnail_menu.clientWidth - (me._thumbnail_menu.ggVertScrollVisible ? 15 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._thumbnail_menu.clientWidth - (me._thumbnail_menu.ggVertScrollVisible ? 15 : 0))) * me._thumbnail_menu.ggHPercentVisible);
					me._thumbnail_menu.ggScrollByXSmooth(diffX);
				}
			}
			if (me._thumbnail_menu.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._thumbnail_menu.ggVPercentVisible);
					me._thumbnail_menu.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._thumbnail_menu.clientHeight - (me._thumbnail_menu.ggHorScrollVisible ? 15 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._thumbnail_menu.clientHeight - (me._thumbnail_menu.ggHorScrollVisible ? 15 : 0))) * me._thumbnail_menu.ggVPercentVisible);
					me._thumbnail_menu.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._thumbnail_menu__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._thumbnail_menu.ggDragInertiaX *= 0.96;
				me._thumbnail_menu.ggDragInertiaY *= 0.96;
				me._thumbnail_menu.ggScrollByX(me._thumbnail_menu.ggDragInertiaX);
				me._thumbnail_menu.ggScrollByY(me._thumbnail_menu.ggDragInertiaY);
				if (Math.abs(me._thumbnail_menu.ggDragInertiaX) < 1.0 && Math.abs(me._thumbnail_menu.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._thumbnail_menu__content.onmouseup = null;
			me._thumbnail_menu__content.onmousemove = null;
			me._thumbnail_menu__content.ontouchend = null;
			me._thumbnail_menu__content.ontouchmove = null;
			me._thumbnail_menu__content.onpointerup = null;
			me._thumbnail_menu__content.onpointermove = null;
			setTimeout(function() { me._thumbnail_menu.ggIsDragging = false; }, 100);
		}
		me._thumbnail_menu__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._thumbnail_menu.ggDragStartX) > 10 || Math.abs(eventY - me._thumbnail_menu.ggDragStartY) > 10) me._thumbnail_menu.ggIsDragging = true;
			var diffX = (eventX - me._thumbnail_menu.ggDragLastX) * me._thumbnail_menu.ggHPercentVisible;
			var diffY = (eventY - me._thumbnail_menu.ggDragLastY) * me._thumbnail_menu.ggVPercentVisible;
			me._thumbnail_menu.ggDragInertiaX = -diffX;
			me._thumbnail_menu.ggDragInertiaY = -diffY;
			me._thumbnail_menu.ggDragLastX = eventX;
			me._thumbnail_menu.ggDragLastY = eventY;
			me._thumbnail_menu.ggScrollByX(-diffX);
			me._thumbnail_menu.ggScrollByY(-diffY);
		}
		me._thumbnail_menu__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._thumbnail_menu.ggDragLastX = me._thumbnail_menu.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._thumbnail_menu.ggDragLastY = me._thumbnail_menu.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._thumbnail_menu__content.onmouseup = me._thumbnail_menu__content.mousetouchend;
			me._thumbnail_menu__content.ontouchend = me._thumbnail_menu__content.mousetouchend;
			me._thumbnail_menu__content.onmousemove = me._thumbnail_menu__content.mousetouchmove;
			me._thumbnail_menu__content.ontouchmove = me._thumbnail_menu__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._thumbnail_menu__content.onpointerup = me._thumbnail_menu__content.ontouchend;
				me._thumbnail_menu__content.onpointermove = me._thumbnail_menu__content.ontouchmove;
			}
		}
		els.onmousedown = me._thumbnail_menu__content.mousetouchstart;
		els.ontouchstart = me._thumbnail_menu__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._thumbnail_menu__content.mousetouchstart;
		}
		elHorScrollBg = me._thumbnail_menu__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 486.4px; height: 15px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._thumbnail_menu__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 486.4px; height: 15px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		me._thumbnail_menu.ggScrollPosX = 0;
		me._thumbnail_menu.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnail_menu.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_menu.ggDragInertiaX *= 0.96;
					me._thumbnail_menu.ggScrollByX(me._thumbnail_menu.ggDragInertiaX);
					if (Math.abs(me._thumbnail_menu.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._thumbnail_menu.ggDragLastX;
				me._thumbnail_menu.ggDragInertiaX = diffX;
				me._thumbnail_menu.ggDragLastX = e.clientX;
				me._thumbnail_menu.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbnail_menu.ggDragLastX = t ? t[0].clientX : e.clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_menu.ggDragInertiaX *= 0.96;
					me._thumbnail_menu.ggScrollByX(me._thumbnail_menu.ggDragInertiaX);
					if (Math.abs(me._thumbnail_menu.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._thumbnail_menu.ggDragLastX;
				me._thumbnail_menu.ggDragInertiaX = diffX;
				me._thumbnail_menu.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._thumbnail_menu.ggScrollByX(diffX);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elHorScrollFg.onpointerdown = elHorScrollFg.ontouchstart;
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._thumbnail_menu.ggScrollWidth;
			if (e.offsetX < me._thumbnail_menu.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_menu.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbnail_menu__horScrollBg.getBoundingClientRect();
			var diffX = me._thumbnail_menu.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._thumbnail_menu.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_menu.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._thumbnail_menu.ggScrollByXSmooth(30 * me._thumbnail_menu.ggHPercentVisible * wheelDelta);
		});
		elCornerBg = me._thumbnail_menu__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 15px; height: 15px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="thumbnail_menu";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 65px;';
		hs+='height : 84px;';
		hs+='left : calc(50% - ((76% + 0px) / 2) + 0%);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 76%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_menu.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnail_menu.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._thumbnail_menu.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._thumbnail_menu.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._thumbnail_menu.style.transition='left 0s, bottom 0s, opacity 500ms ease 0ms';
				if (me._thumbnail_menu.ggCurrentLogicStatePosition == 0) {
					me._thumbnail_menu.style.left = 'calc(50% - (76% / 2))';
					me._thumbnail_menu.style.bottom='80px';
				}
				else {
					me._thumbnail_menu.style.left='calc(50% - ((76% + 0px) / 2) + 0%)';
					me._thumbnail_menu.style.bottom='65px';
				}
			}
		}
		me._thumbnail_menu.logicBlock_position();
		me._thumbnail_menu.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_thumbnail_menu') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_menu.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_menu.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_menu.style.transition='left 0s, bottom 0s, opacity 500ms ease 0ms';
				if (me._thumbnail_menu.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._thumbnail_menu.style.opacity == 0.0) { me._thumbnail_menu.style.visibility="hidden"; } }, 505);
					me._thumbnail_menu.style.opacity=0;
				}
				else {
					me._thumbnail_menu.style.visibility=me._thumbnail_menu.ggVisible?'inherit':'hidden';
					me._thumbnail_menu.style.opacity=1;
				}
			}
		}
		me._thumbnail_menu.logicBlock_alpha();
		me._thumbnail_menu.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				var containerWidth = offsetWidthWithScale;
				if (this.ggVertScrollVisible) containerWidth -= 15;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = ((contentWidth/-2) - (this.ggVertScrollVisible ? (15/2) : 0)) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				var containerHeight = this.clientHeight;
				if (this.ggHorScrollVisible) containerHeight -= 15;
				if (contentHeight < containerHeight) {
					this.ggContent.style.top = '50%';
					this.ggContent.style.marginTop = ((contentHeight/-2) - (this.ggHorScrollVisible ? (15/2) : 0))  + 'px';
				}
				else {
					this.ggContent.style.top = this.ggContentTopOffset + 'px';
					this.ggContent.style.marginTop = '0px';
				}
				if (contentWidth > Math.ceil(offsetWidthWithScale)) {
					me._thumbnail_menu__horScrollBg.style.visibility = 'inherit';
					me._thumbnail_menu__horScrollFg.style.visibility = 'inherit';
					me._thumbnail_menu.ggHorScrollVisible = true;
				} else {
					me._thumbnail_menu__horScrollBg.style.visibility = 'hidden';
					me._thumbnail_menu__horScrollFg.style.visibility = 'hidden';
					me._thumbnail_menu.ggHorScrollVisible = false;
				}
				if(me._thumbnail_menu.ggHorScrollVisible) {
					me._thumbnail_menu.ggAvailableHeight = me._thumbnail_menu.clientHeight - 15;
					if (me._thumbnail_menu.ggVertScrollVisible) {
						me._thumbnail_menu.ggAvailableWidth = me._thumbnail_menu.clientWidth - 15;
						me._thumbnail_menu.ggAvailableWidthWithScale = me._thumbnail_menu.getBoundingClientRect().width - me._thumbnail_menu__horScrollBg.getBoundingClientRect().height;
					} else {
						me._thumbnail_menu.ggAvailableWidth = me._thumbnail_menu.clientWidth;
						me._thumbnail_menu.ggAvailableWidthWithScale = me._thumbnail_menu.getBoundingClientRect().width;
					}
					me._thumbnail_menu__horScrollBg.style.width = me._thumbnail_menu.ggAvailableWidth + 'px';
					me._thumbnail_menu.ggHPercentVisible = contentWidth != 0 ? me._thumbnail_menu.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me._thumbnail_menu.ggHPercentVisible > 1.0) me._thumbnail_menu.ggHPercentVisible = 1.0;
					me._thumbnail_menu.ggScrollWidth = Math.round(me._thumbnail_menu__horScrollBg.offsetWidth * me._thumbnail_menu.ggHPercentVisible);
					me._thumbnail_menu__horScrollFg.style.width = me._thumbnail_menu.ggScrollWidth + 'px';
					me._thumbnail_menu.ggScrollPosX = me._thumbnail_menu.ggScrollPosXPercent * me._thumbnail_menu.ggAvailableWidth;
					me._thumbnail_menu.ggScrollPosX = Math.min(me._thumbnail_menu.ggScrollPosX, me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth);
					me._thumbnail_menu__horScrollFg.style.left = me._thumbnail_menu.ggScrollPosX + 'px';
					if (me._thumbnail_menu.ggHPercentVisible < 1.0) {
						let percentScrolled = me._thumbnail_menu.ggScrollPosX / (me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth);
						me._thumbnail_menu__content.style.left = -(Math.round((me._thumbnail_menu.ggContentWidth * (1.0 - me._thumbnail_menu.ggHPercentVisible)) * percentScrolled)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me._thumbnail_menu.ggAvailableHeight = me._thumbnail_menu.clientHeight;
					me._thumbnail_menu.ggScrollPosX = 0;
					me._thumbnail_menu.ggScrollPosXPercent = 0.0;
				}
				if(horScrollWasVisible != me._thumbnail_menu.ggHorScrollVisible || vertScrollWasVisible != me._thumbnail_menu.ggVertScrollVisible) {
					skin.updateSize(me._thumbnail_menu);
					me._thumbnail_menu.ggUpdatePosition();
				}
			}
		}
		el=me._thumbnail_cloner=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_cloner;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 100;
		el.ggHeight = 62;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._thumbnail_cloner.ggUpdating == true) return;
			me._thumbnail_cloner.ggUpdating = true;
			var el=me._thumbnail_cloner;
			var curNumRows = 0;
			curNumRows = me._thumbnail_cloner.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._thumbnail_cloner.ggUpdating = false;
				return;
			} else {
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._thumbnail_cloner.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._thumbnail_cloner.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._thumbnail_cloner.getFilteredNodes(tourNodes, filter);
			me._thumbnail_cloner.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._thumbnail_cloner.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._thumbnail_cloner.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._thumbnail_cloner.ggWidth) + 'px';
				parameter.width=me._thumbnail_cloner.ggWidth + 'px';
				parameter.height=me._thumbnail_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_thumbnail_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
			}
			me._thumbnail_cloner.ggNodeCount = me._thumbnail_cloner.ggNumFilterPassed;
			me._thumbnail_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._thumbnail_cloner.parentNode && me._thumbnail_cloner.parentNode.classList.contains('ggskin_subelement') && me._thumbnail_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._thumbnail_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="thumbnail_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 62px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._thumbnail_cloner.childNodes.length; i++) {
				var child=me._thumbnail_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._thumbnail_cloner.ggUpdatePosition=function (useTransition) {
			me._thumbnail_cloner.ggUpdate();
		}
		me._thumbnail_menu__content.appendChild(me._thumbnail_cloner);
		me.divSkin.appendChild(me._thumbnail_menu);
		el=me._button_information=document.createElement('div');
		el.ggId="button_information";
		el.ggDx=130;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 23px;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 130px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_information.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_information.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_1=document.createElement('div');
		els=me._svg_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeT0iMHB4IiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgYmFzZVByb2ZpbGU9ImJhc2ljIiB4PSIwcHgiIHdpZH'+
			'RoPSIzMnB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIHN0cm9rZS13aWR0aD0iMS41IiBvcGFjaXR5PSIwLjQiIHN0cm9rZT0iIzNDM0MzQyI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0zLjUsMTZDMy41LDkuMDk2LDkuMDk2LDMuNSwxNiwzLjVsMCwwYzYuOTAzLDAsMTIuNDk5LDUuNTk2LDEyLjUsMTIuNWwwLDAgICAgIGMtMC4wMDEsNi45MDMtNS41OTcsMTIuNDk5LTEyLjUsMTIuNWwwLDBDOS4wOTYsMjguNDk5LDMuNSwyMi45MDMsMy41LDE2TDMuNSwxNnogTTguODU0LDguODUzICAgICBDNy4wMjIsMTAuNjg2LDUu'+
			'ODk0LDEzLjIwNSw1Ljg5MywxNmwwLDBjMC4wMDEsMi43OTUsMS4xMjksNS4zMTQsMi45NjEsNy4xNDZsMCwwYzEuODMyLDEuODMxLDQuMzUyLDIuOTYsNy4xNDYsMi45NmwwLDAgICAgIGMyLjc5NSwwLDUuMzE0LTEuMTI5LDcuMTQ3LTIuOTZsMCwwYzEuODMxLTEuODMyLDIuOTU5LTQuMzUyLDIuOTYtNy4xNDZsMCwwYy0wLjAwMS0yLjc5NS0xLjEyOS01LjMxNC0yLjk2LTcuMTQ3bDAsMCAgICAgQzIxLjMxMyw3LjAyMiwxOC43OTUsNS44OTMsMTYsNS44OTJsMCwwQzEzLjIwNSw1Ljg5MywxMC42ODYsNy4wMjIsOC44NTQsOC44NTNMOC44NTQsOC44NTN6Ii8+CiAgPC9nPgogIDxnPgogICA8cG'+
			'F0aCBkPSJNMTQuOTYzLDEwLjA1VjkuNTIxYzAtMC42NjEsMC41MzYtMS4xOTYsMS4xOTctMS4xOTZsMCwwYzAuNjYsMCwxLjE5NiwwLjUzNiwxLjE5NiwxLjE5NmwwLDB2MC41MjkgICAgIGMwLDAuNjYxLTAuNTM2LDEuMTk2LTEuMTk2LDEuMTk2bDAsMEMxNS41LDExLjI0NywxNC45NjMsMTAuNzExLDE0Ljk2MywxMC4wNUwxNC45NjMsMTAuMDV6Ii8+CiAgIDxnPgogICAgPHBhdGggZD0iTTE4LjUzMiwyMC4zOTFoLTEuMTc2di02LjQ3M2MwLTAuMDIxLTAuMDA1LTAuMDQyLTAuMDA2LTAuMDYzYzAtMC4wMTQsMC4wMDQtMC4wMjYsMC4wMDQtMC4wNCAgICAgIGMwLTAuNjYxLTAuNTM2LTEuMTk2'+
			'LTEuMTk2LTEuMTk2aC0yLjIyNmMtMC42NjEsMC0xLjE5NywwLjUzNi0xLjE5NywxLjE5NmMwLDAuNjYsMC41MzYsMS4xOTYsMS4xOTcsMS4xOTZoMS4wMzF2NS4zNzloLTEuMjA3ICAgICAgYy0wLjY2MSwwLTEuMTk3LDAuNTM1LTEuMTk3LDEuMTk2YzAsMC42NiwwLjUzNiwxLjE5NiwxLjE5NywxLjE5Nmg0Ljc3NWMwLjY2LDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTYgICAgICBDMTkuNzI5LDIwLjkyNiwxOS4xOTIsMjAuMzkxLDE4LjUzMiwyMC4zOTF6Ii8+CiAgIDwvZz4KICA8L2c+CiA8L2c+CiA8ZyBzdHJva2Utd2lkdGg9IjAuMiIgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjMDAwMDAwIj'+
			'4KICA8Zz4KICAgPHBhdGggZD0iTTMuNSwxNkMzLjUsOS4wOTYsOS4wOTYsMy41LDE2LDMuNWwwLDBjNi45MDMsMCwxMi40OTksNS41OTYsMTIuNSwxMi41bDAsMCAgICAgYy0wLjAwMSw2LjkwMy01LjU5NywxMi40OTktMTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OTksMy41LDIyLjkwMywzLjUsMTZMMy41LDE2eiBNOC44NTQsOC44NTMgICAgIEM3LjAyMiwxMC42ODYsNS44OTQsMTMuMjA1LDUuODkzLDE2bDAsMGMwLjAwMSwyLjc5NSwxLjEyOSw1LjMxNCwyLjk2MSw3LjE0NmwwLDBjMS44MzIsMS44MzEsNC4zNTIsMi45Niw3LjE0NiwyLjk2bDAsMCAgICAgYzIuNzk1LDAsNS4zMTQtMS4xMjks'+
			'Ny4xNDctMi45NmwwLDBjMS44MzEtMS44MzIsMi45NTktNC4zNTIsMi45Ni03LjE0NmwwLDBjLTAuMDAxLTIuNzk1LTEuMTI5LTUuMzE0LTIuOTYtNy4xNDdsMCwwICAgICBDMjEuMzEzLDcuMDIyLDE4Ljc5NSw1Ljg5MywxNiw1Ljg5MmwwLDBDMTMuMjA1LDUuODkzLDEwLjY4Niw3LjAyMiw4Ljg1NCw4Ljg1M0w4Ljg1NCw4Ljg1M3oiLz4KICA8L2c+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0xNC45NjMsMTAuMDVWOS41MjFjMC0wLjY2MSwwLjUzNi0xLjE5NiwxLjE5Ny0xLjE5NmwwLDBjMC42NiwwLDEuMTk2LDAuNTM2LDEuMTk2LDEuMTk2bDAsMHYwLjUyOSAgICAgYzAsMC42NjEtMC41MzYsMS4xOT'+
			'YtMS4xOTYsMS4xOTZsMCwwQzE1LjUsMTEuMjQ3LDE0Ljk2MywxMC43MTEsMTQuOTYzLDEwLjA1TDE0Ljk2MywxMC4wNXoiLz4KICAgPGc+CiAgICA8cGF0aCBkPSJNMTguNTMyLDIwLjM5MWgtMS4xNzZ2LTYuNDczYzAtMC4wMjEtMC4wMDUtMC4wNDItMC4wMDYtMC4wNjNjMC0wLjAxNCwwLjAwNC0wLjAyNiwwLjAwNC0wLjA0ICAgICAgYzAtMC42NjEtMC41MzYtMS4xOTYtMS4xOTYtMS4xOTZoLTIuMjI2Yy0wLjY2MSwwLTEuMTk3LDAuNTM2LTEuMTk3LDEuMTk2YzAsMC42NiwwLjUzNiwxLjE5NiwxLjE5NywxLjE5NmgxLjAzMXY1LjM3OWgtMS4yMDcgICAgICBjLTAuNjYxLDAtMS4xOTcsMC41'+
			'MzUtMS4xOTcsMS4xOTZjMCwwLjY2LDAuNTM2LDEuMTk2LDEuMTk3LDEuMTk2aDQuNzc1YzAuNjYsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NiAgICAgIEMxOS43MjksMjAuOTI2LDE5LjE5MiwyMC4zOTEsMTguNTMyLDIwLjM5MXoiLz4KICAgPC9nPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._svg_1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_1__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeT0iMHB4IiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgYmFzZVByb2ZpbGU9ImJhc2ljIiB4PSIwcHgiIHdpZH'+
			'RoPSIzMnB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgc3Ryb2tlLXdpZHRoPSIxLjUiIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIj4KICA8Zz4KICAgPHBhdGggZD0iTTMuNSwxNkMzLjUsOS4wOTYsOS4wOTYsMy41LDE2LDMuNWwwLDBjNi45MDMsMCwxMi40OTksNS41OTYsMTIuNSwxMi41bDAsMCAgICAgYy0wLjAwMSw2LjkwMy01LjU5NywxMi40OTktMTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OTks'+
			'My41LDIyLjkwMywzLjUsMTZMMy41LDE2eiBNOC44NTQsOC44NTMgICAgIEM3LjAyMiwxMC42ODYsNS44OTQsMTMuMjA1LDUuODkzLDE2bDAsMGMwLjAwMSwyLjc5NSwxLjEyOSw1LjMxNCwyLjk2MSw3LjE0NmwwLDBjMS44MzIsMS44MzEsNC4zNTIsMi45Niw3LjE0NiwyLjk2bDAsMCAgICAgYzIuNzk1LDAsNS4zMTQtMS4xMjksNy4xNDctMi45NmwwLDBjMS44MzEtMS44MzIsMi45NTktNC4zNTIsMi45Ni03LjE0NmwwLDBjLTAuMDAxLTIuNzk1LTEuMTI5LTUuMzE0LTIuOTYtNy4xNDdsMCwwICAgICBDMjEuMzEzLDcuMDIyLDE4Ljc5NSw1Ljg5MywxNiw1Ljg5MmwwLDBDMTMuMjA1LDUuODkzLD'+
			'EwLjY4Niw3LjAyMiw4Ljg1NCw4Ljg1M0w4Ljg1NCw4Ljg1M3oiLz4KICA8L2c+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0xNC45NjMsMTAuMDVWOS41MjFjMC0wLjY2MSwwLjUzNi0xLjE5NiwxLjE5Ny0xLjE5NmwwLDBjMC42NiwwLDEuMTk2LDAuNTM2LDEuMTk2LDEuMTk2bDAsMHYwLjUyOSAgICAgYzAsMC42NjEtMC41MzYsMS4xOTYtMS4xOTYsMS4xOTZsMCwwQzE1LjUsMTEuMjQ3LDE0Ljk2MywxMC43MTEsMTQuOTYzLDEwLjA1TDE0Ljk2MywxMC4wNXoiLz4KICAgPGc+CiAgICA8cGF0aCBkPSJNMTguNTMyLDIwLjM5MWgtMS4xNzZ2LTYuNDczYzAtMC4wMjEtMC4wMDUtMC4wNDItMC4wMDYtMC4w'+
			'NjNjMC0wLjAxNCwwLjAwNC0wLjAyNiwwLjAwNC0wLjA0ICAgICAgYzAtMC42NjEtMC41MzYtMS4xOTYtMS4xOTYtMS4xOTZoLTIuMjI2Yy0wLjY2MSwwLTEuMTk3LDAuNTM2LTEuMTk3LDEuMTk2YzAsMC42NiwwLjUzNiwxLjE5NiwxLjE5NywxLjE5NmgxLjAzMXY1LjM3OWgtMS4yMDcgICAgICBjLTAuNjYxLDAtMS4xOTcsMC41MzUtMS4xOTcsMS4xOTZjMCwwLjY2LDAuNTM2LDEuMTk2LDEuMTk3LDEuMTk2aDQuNzc1YzAuNjYsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NiAgICAgIEMxOS43MjksMjAuOTI2LDE5LjE5MiwyMC4zOTEsMTguNTMyLDIwLjM5MXoiLz4KICAgPC9nPgogIDwvZz4KID'+
			'wvZz4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgc3Ryb2tlLXdpZHRoPSIwLjIiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMCI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0zLjUsMTZDMy41LDkuMDk2LDkuMDk2LDMuNSwxNiwzLjVsMCwwYzYuOTAzLDAsMTIuNDk5LDUuNTk2LDEyLjUsMTIuNWwwLDAgICAgIGMtMC4wMDEsNi45MDMtNS41OTcsMTIuNDk5LTEyLjUsMTIuNWwwLDBDOS4wOTYsMjguNDk5LDMuNSwyMi45MDMsMy41LDE2TDMuNSwxNnogTTguODU0LDguODUzICAgICBDNy4wMjIsMTAuNjg2LDUuODk0LDEzLjIw'+
			'NSw1Ljg5MywxNmwwLDBjMC4wMDEsMi43OTUsMS4xMjksNS4zMTQsMi45NjEsNy4xNDZsMCwwYzEuODMyLDEuODMxLDQuMzUyLDIuOTYsNy4xNDYsMi45NmwwLDAgICAgIGMyLjc5NSwwLDUuMzE0LTEuMTI5LDcuMTQ3LTIuOTZsMCwwYzEuODMxLTEuODMyLDIuOTU5LTQuMzUyLDIuOTYtNy4xNDZsMCwwYy0wLjAwMS0yLjc5NS0xLjEyOS01LjMxNC0yLjk2LTcuMTQ3bDAsMCAgICAgQzIxLjMxMyw3LjAyMiwxOC43OTUsNS44OTMsMTYsNS44OTJsMCwwQzEzLjIwNSw1Ljg5MywxMC42ODYsNy4wMjIsOC44NTQsOC44NTNMOC44NTQsOC44NTN6Ii8+CiAgPC9nPgogIDxnPgogICA8cGF0aCBkPSJNMT'+
			'QuOTYzLDEwLjA1VjkuNTIxYzAtMC42NjEsMC41MzYtMS4xOTYsMS4xOTctMS4xOTZsMCwwYzAuNjYsMCwxLjE5NiwwLjUzNiwxLjE5NiwxLjE5NmwwLDB2MC41MjkgICAgIGMwLDAuNjYxLTAuNTM2LDEuMTk2LTEuMTk2LDEuMTk2bDAsMEMxNS41LDExLjI0NywxNC45NjMsMTAuNzExLDE0Ljk2MywxMC4wNUwxNC45NjMsMTAuMDV6Ii8+CiAgIDxnPgogICAgPHBhdGggZD0iTTE4LjUzMiwyMC4zOTFoLTEuMTc2di02LjQ3M2MwLTAuMDIxLTAuMDA1LTAuMDQyLTAuMDA2LTAuMDYzYzAtMC4wMTQsMC4wMDQtMC4wMjYsMC4wMDQtMC4wNCAgICAgIGMwLTAuNjYxLTAuNTM2LTEuMTk2LTEuMTk2LTEu'+
			'MTk2aC0yLjIyNmMtMC42NjEsMC0xLjE5NywwLjUzNi0xLjE5NywxLjE5NmMwLDAuNjYsMC41MzYsMS4xOTYsMS4xOTcsMS4xOTZoMS4wMzF2NS4zNzloLTEuMjA3ICAgICAgYy0wLjY2MSwwLTEuMTk3LDAuNTM1LTEuMTk3LDEuMTk2YzAsMC42NiwwLjUzNiwxLjE5NiwxLjE5NywxLjE5Nmg0Ljc3NWMwLjY2LDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTYgICAgICBDMTkuNzI5LDIwLjkyNiwxOS4xOTIsMjAuMzkxLDE4LjUzMiwyMC4zOTF6Ii8+CiAgIDwvZz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._svg_1__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="Svg 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_1.onmouseenter=function (e) {
			me._svg_1__img.style.visibility='hidden';
			me._svg_1__imgo.style.visibility='inherit';
			me.elementMouseOver['svg_1']=true;
			me._text_2.logicBlock_visible();
		}
		me._svg_1.onmouseleave=function (e) {
			me._svg_1__img.style.visibility='inherit';
			me._svg_1__imgo.style.visibility='hidden';
			me.elementMouseOver['svg_1']=false;
			me._text_2.logicBlock_visible();
		}
		me._svg_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs=basePath + 'images/image_1.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 140px;';
		hs+='left : 270px;';
		hs+='position : absolute;';
		hs+='top : 296px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		me._svg_1.appendChild(me._image_1);
		el=me._external_1=document.createElement('div');
		els=me._external_1__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_1.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_1.ggSubElement.setAttribute('alt', player._(me._external_1.ggAltText));
			me._external_1.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_1.ggText_untranslated = img;
			me._external_1.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_1.ggSubElement.style.width = '0px';
			me._external_1.ggSubElement.style.height = '0px';
			me._external_1.ggSubElement.src='';
			me._external_1.ggSubElement.src=me._external_1.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_1.ggText != player._(me._external_1.ggText_untranslated)) {
				me._external_1.ggText = player._(me._external_1.ggText_untranslated);
				me._external_1.ggUpdateImage()
			}
		}
		el.ggText=el.ggText_untranslated=basePath + "";
		el.ggUpdateImage();
		els['ondragstart']=function() { return false; };
		el.ggUpdateText();
		el.ggId="External 1";
		el.ggDx=-130;
		el.ggDy=-201;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='height : 480px;';
		hs+='left : calc(50% - ((640px + 2px) / 2) - 130px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((480px + 2px) / 2) - 201px);';
		hs+='visibility : inherit;';
		hs+='width : 640px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._external_1.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_1.clientWidth;
			var parentHeight = me._external_1.clientHeight;
			var img = me._external_1__img;
			var aspectRatioDiv = me._external_1.clientWidth / me._external_1.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			currentWidth = img.naturalWidth;
			currentHeight = img.naturalHeight;
			img.style.width = currentWidth + 'px';
			img.style.height = currentHeight + 'px';
			if (!me._external_1.ggScrollbars || currentWidth < me._external_1.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_1.ggScrollbars || currentHeight < me._external_1.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		me._svg_1.appendChild(me._external_1);
		el=me._text_2=document.createElement('div');
		els=me._text_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_2.ggUpdateText=function() {
			var params = [];
			var hs = player._("\u64cd\u4f5c\u8aaa\u660e", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_2.ggUpdateText();
		el.appendChild(els);
		me._text_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_2.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._text_2.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._text_2.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._text_2.style.transition='left 0s, top 0s';
				if (me._text_2.ggCurrentLogicStatePosition == 0) {
					me._text_2.style.left = 'calc(50% - (0px / 2))';
					me._text_2.style.top='-25px';
				}
				else {
					me._text_2.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._text_2.style.top='32px';
				}
			}
		}
		me._text_2.logicBlock_position();
		me._text_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['svg_1'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_2.style.transition='left 0s, top 0s';
				if (me._text_2.ggCurrentLogicStateVisible == 0) {
					me._text_2.style.visibility=(Number(me._text_2.style.opacity)>0||!me._text_2.style.opacity)?'inherit':'hidden';
					me._text_2.ggVisible=true;
				}
				else {
					me._text_2.style.visibility="hidden";
					me._text_2.ggVisible=false;
				}
			}
		}
		me._text_2.logicBlock_visible();
		me._text_2.ggUpdatePosition=function (useTransition) {
		}
		me._svg_1.appendChild(me._text_2);
		me._button_information.appendChild(me._svg_1);
		me.divSkin.appendChild(me._button_information);
		el=me._button_fullscreen_1=document.createElement('div');
		el.ggId="button_fullscreen_1";
		el.ggDx=98;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 23px;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 98px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_fullscreen_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_fullscreen_1.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._button_fullscreen_1.onmouseenter=function (e) {
			me.elementMouseOver['button_fullscreen_1']=true;
			me._tt_fullscreen.logicBlock_visible();
		}
		me._button_fullscreen_1.onmouseleave=function (e) {
			me.elementMouseOver['button_fullscreen_1']=false;
			me._tt_fullscreen.logicBlock_visible();
		}
		me._button_fullscreen_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._button_image_normalscreen=document.createElement('div');
		els=me._button_image_normalscreen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeT0iMHB4IiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgYmFzZVByb2ZpbGU9ImJhc2ljIiB4PSIwcHgiIHdpZH'+
			'RoPSIzMnB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIHN0cm9rZS13aWR0aD0iMS41IiBvcGFjaXR5PSIwLjQiIHN0cm9rZT0iIzNDM0MzQyI+CiAgPHBhdGggZD0iTTE2LDE0LjgwNEg0LjY5N2MtMC4zMTUsMC0wLjYyNCwwLjEyOC0wLjg0NiwwLjM1MUMzLjYyNywxNS4zNzcsMy41LDE1LjY4NiwzLjUsMTZ2OC4xMiAgIGMwLDAuMzE1LDAuMTI3LDAuNjI0LDAuMzUsMC44NDZjMC4yMjMsMC4yMjQsMC41MzEsMC4zNTEsMC44NDYsMC4zNTFIMTZjMC4zMiwwLDAuNjItMC4xMjQsMC44NDYtMC4zNTEgICBjMC4yMjYt'+
			'MC4yMjYsMC4zNS0wLjUyNSwwLjM1LTAuODQ2VjE2YzAtMC4zMTQtMC4xMjgtMC42MjMtMC4zNS0wLjg0NkMxNi42MjMsMTQuOTMyLDE2LjMxNCwxNC44MDQsMTYsMTQuODA0eiBNMTQuODA0LDIyLjkyNCAgIEg1Ljg5M3YtNS43MjhoOC45MTFWMjIuOTI0eiBNNC42OTcsMTMuOTk4YzAuNjYxLDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZ2LTAuMzA4YzAtMC42Ni0wLjUzNi0xLjE5NS0xLjE5Ni0xLjE5NSAgIGMtMC42NjEsMC0xLjE5NiwwLjUzNS0xLjE5NiwxLjE5NXYwLjMwOEMzLjUsMTMuNDYyLDQuMDM2LDEzLjk5OCw0LjY5NywxMy45OTh6IE00LjY5NywxMC40NzdjMC42NjEsMCwxLjE5Ny'+
			'0wLjUzNiwxLjE5Ny0xLjE5N2gwICAgVjkuMDc2YzAuNjYxLDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZjMC0wLjY2LTAuNTM2LTEuMTk2LTEuMTk2LTEuMTk2SDQuNjk3Yy0wLjMxNSwwLTAuNjIzLDAuMTI3LTAuODQ2LDAuMzUgICBDMy42MjgsNy4yNTcsMy41LDcuNTY0LDMuNSw3Ljg4djEuMzk5QzMuNSw5Ljk0LDQuMDM2LDEwLjQ3Nyw0LjY5NywxMC40Nzd6IE0xOS4yODksOS4wNzZoMC4yNDJjMC42NjEsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NiAgIHMtMC41MzUtMS4xOTYtMS4xOTYtMS4xOTZoLTAuMjQyYy0wLjY2MSwwLTEuMTk3LDAuNTM2LTEuMTk3LDEuMTk2UzE4LjYyOCw5LjA3'+
			'NiwxOS4yODksOS4wNzZ6IE0xNi4xMjIsNi42ODRoLTAuMjQzICAgYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2czAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2aDAuMjQzYzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZTMTYuNzgyLDYuNjg0LDE2LjEyMiw2LjY4NHogICAgTTIyLjY5OCw5LjA3NmgwLjI0M2MwLjY2LDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZzLTAuNTM2LTEuMTk2LTEuMTk2LTEuMTk2aC0wLjI0M2MtMC42NiwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2ICAgUzIyLjAzOCw5LjA3NiwyMi42OTgsOS4wNzZ6IE05LjA2LDkuMDc2aDAuMjQyYzAuNjYsMCwxLj'+
			'E5Ni0wLjUzNiwxLjE5Ni0xLjE5NlM5Ljk2Miw2LjY4NCw5LjMwMiw2LjY4NEg5LjA2ICAgYy0wLjY2MSwwLTEuMTk3LDAuNTM2LTEuMTk3LDEuMTk2UzguMzk5LDkuMDc2LDkuMDYsOS4wNzZ6IE0xMi40NjksOS4wNzZoMC4yNDNjMC42NjEsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NiAgIHMtMC41MzYtMS4xOTYtMS4xOTYtMS4xOTZoLTAuMjQzYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2UzExLjgwOCw5LjA3NiwxMi40NjksOS4wNzZ6IE0yNy4zMDQsMTEuMTExICAgYy0wLjY2MSwwLTEuMTk2LDAuNTM1LTEuMTk2LDEuMTk2djAuMzA4YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5'+
			'NiwxLjE5NmMwLjY2LDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZ2LTAuMzA4ICAgQzI4LjUsMTEuNjQ2LDI3Ljk2NCwxMS4xMTEsMjcuMzA0LDExLjExMXogTTI3LjMwNCwxNC42NWMtMC42NjEsMC0xLjE5NiwwLjUzNS0xLjE5NiwxLjE5NnYwLjMwOGMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTYgICBjMC42NiwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2di0wLjMwOEMyOC41LDE1LjE4NiwyNy45NjQsMTQuNjUsMjcuMzA0LDE0LjY1eiBNMjcuMzA0LDIxLjcyOGMtMC42NjEsMC0xLjE5NiwwLjUzNS0xLjE5NiwxLjE5NiAgIGgtMC4yMzRjLTAuNjYsMC0xLjE5NiwwLjUzNi0xLjE5Ni'+
			'wxLjE5NmMwLDAuNjYxLDAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2aDEuNDMxYzAuMzE0LDAsMC42MjMtMC4xMjgsMC44NDYtMC4zNTEgICBzMC4zNTEtMC41MywwLjM1MS0wLjg0NnYtMS4xOTZDMjguNSwyMi4yNjQsMjcuOTY0LDIxLjcyOCwyNy4zMDQsMjEuNzI4eiBNMjcuMzA0LDE4LjE4OWMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnYwLjMwOCAgIGMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZjMC42NiwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2di0wLjMwOEMyOC41LDE4LjcyNiwyNy45NjQsMTguMTg5LDI3LjMwNCwxOC4xODl6IE0yOC4xNDksNy4wMzMgICBjLTAu'+
			'MjIzLTAuMjIyLTAuNTMxLTAuMzUtMC44NDYtMC4zNWgtMS4xOTZjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZjMCwwLjY2MSwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NiAgIGMwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NlY3Ljg4QzI4LjUsNy41NjQsMjguMzcyLDcuMjU3LDI4LjE0OSw3LjAzM3ogTTIxLjg2MywxMy4yNjEgICBsMC4yMjEtMC4xNDdjMC40MjgtMC4yODUsMC41NDItMC44NjMsMC4yNTctMS4yOTFjLTAuMjg2LTAuNDI4LTAuODYzLTAuNTQyLTEuMjkxLTAuMjU2bC0wLjIyMSwwLjE0NiAgIGMtMC40Mj'+
			'csMC4yODYtMC41NDIsMC44NjMtMC4yNTcsMS4yOTFjMC4xOCwwLjI2OSwwLjQ3NCwwLjQxNCwwLjc3NCwwLjQxNEMyMS41MjQsMTMuNDE4LDIxLjcwNCwxMy4zNjcsMjEuODYzLDEzLjI2MXogICAgTTE5LjMyOSwyMi45MjRoLTAuMjQyYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2YzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMC4yNDJjMC42NjEsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NiAgIEMyMC41MjUsMjMuNDYsMTkuOTksMjIuOTI0LDE5LjMyOSwyMi45MjR6IE0xOC41ODQsMTUuMjY0YzAuMTc4LDAsMC4zNTctMC4wNTEsMC41MTctMC4xNTdsMC4yMjEtMC4x'+
			'NDcgICBjMC40MjgtMC4yODUsMC41NDItMC44NjMsMC4yNTctMS4yOWMtMC4yODUtMC40MjgtMC44NjMtMC41NDItMS4yOTEtMC4yNTdsLTAuMjIyLDAuMTQ3Yy0wLjQyNywwLjI4Ni0wLjU0MiwwLjg2My0wLjI1NiwxLjI5MSAgIEMxNy45ODksMTUuMTE5LDE4LjI4MywxNS4yNjQsMTguNTg0LDE1LjI2NHogTTIyLjczOSwyMi45MjRoLTAuMjQyYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2ICAgYzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMC4yNDJjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2QzIzLjkzNiwyMy40NiwyMy4zOTksMjIuOTI0LDIyLjczOSwyMi'+
			'45MjR6IE0yNS4xMDQsOS45NzYgICBjLTAuMjg1LTAuNDI3LTAuODYzLTAuNTQyLTEuMjkxLTAuMjU2bC0wLjIyMSwwLjE0N2MtMC40MjgsMC4yODUtMC41NDIsMC44NjMtMC4yNTYsMS4yOWMwLjE3OSwwLjI2OSwwLjQ3NCwwLjQxNCwwLjc3NCwwLjQxNCAgIGMwLjE3OCwwLDAuMzU3LTAuMDUxLDAuNTE2LTAuMTU2bDAuMjIyLTAuMTQ4QzI1LjI3NCwxMC45ODEsMjUuMzg5LDEwLjQwMywyNS4xMDQsOS45NzZ6Ii8+CiA8L2c+CiA8ZyBzdHJva2Utd2lkdGg9IjAuMiIgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjMDAwMDAwIj4KICA8cGF0aCBkPSJNMTYsMTQuODA0SDQuNjk3Yy0wLjMxNSwwLTAu'+
			'NjI0LDAuMTI4LTAuODQ2LDAuMzUxQzMuNjI3LDE1LjM3NywzLjUsMTUuNjg2LDMuNSwxNnY4LjEyICAgYzAsMC4zMTUsMC4xMjcsMC42MjQsMC4zNSwwLjg0NmMwLjIyMywwLjIyNCwwLjUzMSwwLjM1MSwwLjg0NiwwLjM1MUgxNmMwLjMyLDAsMC42Mi0wLjEyNCwwLjg0Ni0wLjM1MSAgIGMwLjIyNi0wLjIyNiwwLjM1LTAuNTI1LDAuMzUtMC44NDZWMTZjMC0wLjMxNC0wLjEyOC0wLjYyMy0wLjM1LTAuODQ2QzE2LjYyMywxNC45MzIsMTYuMzE0LDE0LjgwNCwxNiwxNC44MDR6IE0xNC44MDQsMjIuOTI0ICAgSDUuODkzdi01LjcyOGg4LjkxMVYyMi45MjR6IE00LjY5NywxMy45OThjMC42NjEsMC'+
			'wxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NnYtMC4zMDhjMC0wLjY2LTAuNTM2LTEuMTk1LTEuMTk2LTEuMTk1ICAgYy0wLjY2MSwwLTEuMTk2LDAuNTM1LTEuMTk2LDEuMTk1djAuMzA4QzMuNSwxMy40NjIsNC4wMzYsMTMuOTk4LDQuNjk3LDEzLjk5OHogTTQuNjk3LDEwLjQ3N2MwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk3aDAgICBWOS4wNzZjMC42NjEsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NmMwLTAuNjYtMC41MzYtMS4xOTYtMS4xOTYtMS4xOTZINC42OTdjLTAuMzE1LDAtMC42MjMsMC4xMjctMC44NDYsMC4zNSAgIEMzLjYyOCw3LjI1NywzLjUsNy41NjQsMy41LDcuODh2MS4z'+
			'OTlDMy41LDkuOTQsNC4wMzYsMTAuNDc3LDQuNjk3LDEwLjQ3N3ogTTE5LjI4OSw5LjA3NmgwLjI0MmMwLjY2MSwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2ICAgcy0wLjUzNS0xLjE5Ni0xLjE5Ni0xLjE5NmgtMC4yNDJjLTAuNjYxLDAtMS4xOTcsMC41MzYtMS4xOTcsMS4xOTZTMTguNjI4LDkuMDc2LDE5LjI4OSw5LjA3NnogTTE2LjEyMiw2LjY4NGgtMC4yNDMgICBjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZzMC41MzYsMS4xOTYsMS4xOTYsMS4xOTZoMC4yNDNjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NlMxNi43ODIsNi42ODQsMTYuMTIyLDYuNjg0eiAgICBNMj'+
			'IuNjk4LDkuMDc2aDAuMjQzYzAuNjYsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NnMtMC41MzYtMS4xOTYtMS4xOTYtMS4xOTZoLTAuMjQzYy0wLjY2LDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTYgICBTMjIuMDM4LDkuMDc2LDIyLjY5OCw5LjA3NnogTTkuMDYsOS4wNzZoMC4yNDJjMC42NiwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2UzkuOTYyLDYuNjg0LDkuMzAyLDYuNjg0SDkuMDYgICBjLTAuNjYxLDAtMS4xOTcsMC41MzYtMS4xOTcsMS4xOTZTOC4zOTksOS4wNzYsOS4wNiw5LjA3NnogTTEyLjQ2OSw5LjA3NmgwLjI0M2MwLjY2MSwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2ICAgcy0w'+
			'LjUzNi0xLjE5Ni0xLjE5Ni0xLjE5NmgtMC4yNDNjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZTMTEuODA4LDkuMDc2LDEyLjQ2OSw5LjA3NnogTTI3LjMwNCwxMS4xMTEgICBjLTAuNjYxLDAtMS4xOTYsMC41MzUtMS4xOTYsMS4xOTZ2MC4zMDhjMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAuNjYsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NnYtMC4zMDggICBDMjguNSwxMS42NDYsMjcuOTY0LDExLjExMSwyNy4zMDQsMTEuMTExeiBNMjcuMzA0LDE0LjY1Yy0wLjY2MSwwLTEuMTk2LDAuNTM1LTEuMTk2LDEuMTk2djAuMzA4YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5Ni'+
			'wxLjE5NiAgIGMwLjY2LDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZ2LTAuMzA4QzI4LjUsMTUuMTg2LDI3Ljk2NCwxNC42NSwyNy4zMDQsMTQuNjV6IE0yNy4zMDQsMjEuNzI4Yy0wLjY2MSwwLTEuMTk2LDAuNTM1LTEuMTk2LDEuMTk2ICAgaC0wLjIzNGMtMC42NiwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2YzAsMC42NjEsMC41MzYsMS4xOTYsMS4xOTYsMS4xOTZoMS40MzFjMC4zMTQsMCwwLjYyMy0wLjEyOCwwLjg0Ni0wLjM1MSAgIHMwLjM1MS0wLjUzLDAuMzUxLTAuODQ2di0xLjE5NkMyOC41LDIyLjI2NCwyNy45NjQsMjEuNzI4LDI3LjMwNCwyMS43Mjh6IE0yNy4zMDQsMTguMTg5Yy0w'+
			'LjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djAuMzA4ICAgYzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmMwLjY2LDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZ2LTAuMzA4QzI4LjUsMTguNzI2LDI3Ljk2NCwxOC4xODksMjcuMzA0LDE4LjE4OXogTTI4LjE0OSw3LjAzMyAgIGMtMC4yMjMtMC4yMjItMC41MzEtMC4zNS0wLjg0Ni0wLjM1aC0xLjE5NmMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NmMwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2ICAgYzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMT'+
			'k2VjcuODhDMjguNSw3LjU2NCwyOC4zNzIsNy4yNTcsMjguMTQ5LDcuMDMzeiBNMjEuODYzLDEzLjI2MSAgIGwwLjIyMS0wLjE0N2MwLjQyOC0wLjI4NSwwLjU0Mi0wLjg2MywwLjI1Ny0xLjI5MWMtMC4yODYtMC40MjgtMC44NjMtMC41NDItMS4yOTEtMC4yNTZsLTAuMjIxLDAuMTQ2ICAgYy0wLjQyNywwLjI4Ni0wLjU0MiwwLjg2My0wLjI1NywxLjI5MWMwLjE4LDAuMjY5LDAuNDc0LDAuNDE0LDAuNzc0LDAuNDE0QzIxLjUyNCwxMy40MTgsMjEuNzA0LDEzLjM2NywyMS44NjMsMTMuMjYxeiAgICBNMTkuMzI5LDIyLjkyNGgtMC4yNDJjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZj'+
			'MCwwLjY2MSwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgwLjI0MmMwLjY2MSwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2ICAgQzIwLjUyNSwyMy40NiwxOS45OSwyMi45MjQsMTkuMzI5LDIyLjkyNHogTTE4LjU4NCwxNS4yNjRjMC4xNzgsMCwwLjM1Ny0wLjA1MSwwLjUxNy0wLjE1N2wwLjIyMS0wLjE0NyAgIGMwLjQyOC0wLjI4NSwwLjU0Mi0wLjg2MywwLjI1Ny0xLjI5Yy0wLjI4NS0wLjQyOC0wLjg2My0wLjU0Mi0xLjI5MS0wLjI1N2wtMC4yMjIsMC4xNDdjLTAuNDI3LDAuMjg2LTAuNTQyLDAuODYzLTAuMjU2LDEuMjkxICAgQzE3Ljk4OSwxNS4xMTksMTguMjgzLDE1LjI2NCwxOC41ODQsMT'+
			'UuMjY0eiBNMjIuNzM5LDIyLjkyNGgtMC4yNDJjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTYgICBjMCwwLjY2MSwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgwLjI0MmMwLjY2LDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZDMjMuOTM2LDIzLjQ2LDIzLjM5OSwyMi45MjQsMjIuNzM5LDIyLjkyNHogTTI1LjEwNCw5Ljk3NiAgIGMtMC4yODUtMC40MjctMC44NjMtMC41NDItMS4yOTEtMC4yNTZsLTAuMjIxLDAuMTQ3Yy0wLjQyOCwwLjI4NS0wLjU0MiwwLjg2My0wLjI1NiwxLjI5YzAuMTc5LDAuMjY5LDAuNDc0LDAuNDE0LDAuNzc0LDAuNDE0ICAgYzAuMTc4LDAsMC4zNTctMC4wNTEs'+
			'MC41MTYtMC4xNTZsMC4yMjItMC4xNDhDMjUuMjc0LDEwLjk4MSwyNS4zODksMTAuNDAzLDI1LjEwNCw5Ljk3NnoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._button_image_normalscreen__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_normalscreen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeT0iMHB4IiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgYmFzZVByb2ZpbGU9ImJhc2ljIiB4PSIwcHgiIHdpZH'+
			'RoPSIzMnB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgc3Ryb2tlLXdpZHRoPSIxLjUiIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIj4KICA8cGF0aCBkPSJNMTYsMTQuODA0SDQuNjk3Yy0wLjMxNSwwLTAuNjI0LDAuMTI4LTAuODQ2LDAuMzUxQzMuNjI3LDE1LjM3NywzLjUsMTUuNjg2LDMuNSwxNnY4LjEyICAgYzAsMC4zMTUsMC4xMjcsMC42MjQsMC4zNSwwLjg0NmMwLjIyMywwLjIyNCwwLjUzMSww'+
			'LjM1MSwwLjg0NiwwLjM1MUgxNmMwLjMyLDAsMC42Mi0wLjEyNCwwLjg0Ni0wLjM1MSAgIGMwLjIyNi0wLjIyNiwwLjM1LTAuNTI1LDAuMzUtMC44NDZWMTZjMC0wLjMxNC0wLjEyOC0wLjYyMy0wLjM1LTAuODQ2QzE2LjYyMywxNC45MzIsMTYuMzE0LDE0LjgwNCwxNiwxNC44MDR6IE0xNC44MDQsMjIuOTI0ICAgSDUuODkzdi01LjcyOGg4LjkxMVYyMi45MjR6IE00LjY5NywxMy45OThjMC42NjEsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NnYtMC4zMDhjMC0wLjY2LTAuNTM2LTEuMTk1LTEuMTk2LTEuMTk1ICAgYy0wLjY2MSwwLTEuMTk2LDAuNTM1LTEuMTk2LDEuMTk1djAuMzA4QzMuNSwxMy'+
			'40NjIsNC4wMzYsMTMuOTk4LDQuNjk3LDEzLjk5OHogTTQuNjk3LDEwLjQ3N2MwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk3aDAgICBWOS4wNzZjMC42NjEsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NmMwLTAuNjYtMC41MzYtMS4xOTYtMS4xOTYtMS4xOTZINC42OTdjLTAuMzE1LDAtMC42MjMsMC4xMjctMC44NDYsMC4zNSAgIEMzLjYyOCw3LjI1NywzLjUsNy41NjQsMy41LDcuODh2MS4zOTlDMy41LDkuOTQsNC4wMzYsMTAuNDc3LDQuNjk3LDEwLjQ3N3ogTTE5LjI4OSw5LjA3NmgwLjI0MmMwLjY2MSwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2ICAgcy0wLjUzNS0xLjE5Ni0xLjE5'+
			'Ni0xLjE5NmgtMC4yNDJjLTAuNjYxLDAtMS4xOTcsMC41MzYtMS4xOTcsMS4xOTZTMTguNjI4LDkuMDc2LDE5LjI4OSw5LjA3NnogTTE2LjEyMiw2LjY4NGgtMC4yNDMgICBjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZzMC41MzYsMS4xOTYsMS4xOTYsMS4xOTZoMC4yNDNjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NlMxNi43ODIsNi42ODQsMTYuMTIyLDYuNjg0eiAgICBNMjIuNjk4LDkuMDc2aDAuMjQzYzAuNjYsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NnMtMC41MzYtMS4xOTYtMS4xOTYtMS4xOTZoLTAuMjQzYy0wLjY2LDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOT'+
			'YgICBTMjIuMDM4LDkuMDc2LDIyLjY5OCw5LjA3NnogTTkuMDYsOS4wNzZoMC4yNDJjMC42NiwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2UzkuOTYyLDYuNjg0LDkuMzAyLDYuNjg0SDkuMDYgICBjLTAuNjYxLDAtMS4xOTcsMC41MzYtMS4xOTcsMS4xOTZTOC4zOTksOS4wNzYsOS4wNiw5LjA3NnogTTEyLjQ2OSw5LjA3NmgwLjI0M2MwLjY2MSwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2ICAgcy0wLjUzNi0xLjE5Ni0xLjE5Ni0xLjE5NmgtMC4yNDNjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZTMTEuODA4LDkuMDc2LDEyLjQ2OSw5LjA3NnogTTI3LjMwNCwxMS4xMTEgICBjLTAu'+
			'NjYxLDAtMS4xOTYsMC41MzUtMS4xOTYsMS4xOTZ2MC4zMDhjMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAuNjYsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NnYtMC4zMDggICBDMjguNSwxMS42NDYsMjcuOTY0LDExLjExMSwyNy4zMDQsMTEuMTExeiBNMjcuMzA0LDE0LjY1Yy0wLjY2MSwwLTEuMTk2LDAuNTM1LTEuMTk2LDEuMTk2djAuMzA4YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NiAgIGMwLjY2LDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZ2LTAuMzA4QzI4LjUsMTUuMTg2LDI3Ljk2NCwxNC42NSwyNy4zMDQsMTQuNjV6IE0yNy4zMDQsMjEuNzI4Yy0wLjY2MSwwLT'+
			'EuMTk2LDAuNTM1LTEuMTk2LDEuMTk2ICAgaC0wLjIzNGMtMC42NiwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2YzAsMC42NjEsMC41MzYsMS4xOTYsMS4xOTYsMS4xOTZoMS40MzFjMC4zMTQsMCwwLjYyMy0wLjEyOCwwLjg0Ni0wLjM1MSAgIHMwLjM1MS0wLjUzLDAuMzUxLTAuODQ2di0xLjE5NkMyOC41LDIyLjI2NCwyNy45NjQsMjEuNzI4LDI3LjMwNCwyMS43Mjh6IE0yNy4zMDQsMTguMTg5Yy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djAuMzA4ICAgYzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmMwLjY2LDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZ2LTAuMzA4QzI4'+
			'LjUsMTguNzI2LDI3Ljk2NCwxOC4xODksMjcuMzA0LDE4LjE4OXogTTI4LjE0OSw3LjAzMyAgIGMtMC4yMjMtMC4yMjItMC41MzEtMC4zNS0wLjg0Ni0wLjM1aC0xLjE5NmMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NmMwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2ICAgYzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2VjcuODhDMjguNSw3LjU2NCwyOC4zNzIsNy4yNTcsMjguMTQ5LDcuMDMzeiBNMjEuODYzLDEzLjI2MSAgIGwwLjIyMS0wLjE0N2MwLjQyOC0wLjI4NSwwLjU0Mi0wLjg2MywwLjI1Ny0xLjI5MW'+
			'MtMC4yODYtMC40MjgtMC44NjMtMC41NDItMS4yOTEtMC4yNTZsLTAuMjIxLDAuMTQ2ICAgYy0wLjQyNywwLjI4Ni0wLjU0MiwwLjg2My0wLjI1NywxLjI5MWMwLjE4LDAuMjY5LDAuNDc0LDAuNDE0LDAuNzc0LDAuNDE0QzIxLjUyNCwxMy40MTgsMjEuNzA0LDEzLjM2NywyMS44NjMsMTMuMjYxeiAgICBNMTkuMzI5LDIyLjkyNGgtMC4yNDJjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZjMCwwLjY2MSwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgwLjI0MmMwLjY2MSwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2ICAgQzIwLjUyNSwyMy40NiwxOS45OSwyMi45MjQsMTkuMzI5LDIyLjky'+
			'NHogTTE4LjU4NCwxNS4yNjRjMC4xNzgsMCwwLjM1Ny0wLjA1MSwwLjUxNy0wLjE1N2wwLjIyMS0wLjE0NyAgIGMwLjQyOC0wLjI4NSwwLjU0Mi0wLjg2MywwLjI1Ny0xLjI5Yy0wLjI4NS0wLjQyOC0wLjg2My0wLjU0Mi0xLjI5MS0wLjI1N2wtMC4yMjIsMC4xNDdjLTAuNDI3LDAuMjg2LTAuNTQyLDAuODYzLTAuMjU2LDEuMjkxICAgQzE3Ljk4OSwxNS4xMTksMTguMjgzLDE1LjI2NCwxOC41ODQsMTUuMjY0eiBNMjIuNzM5LDIyLjkyNGgtMC4yNDJjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTYgICBjMCwwLjY2MSwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgwLjI0MmMwLjY2LDAsMS'+
			'4xOTYtMC41MzUsMS4xOTYtMS4xOTZDMjMuOTM2LDIzLjQ2LDIzLjM5OSwyMi45MjQsMjIuNzM5LDIyLjkyNHogTTI1LjEwNCw5Ljk3NiAgIGMtMC4yODUtMC40MjctMC44NjMtMC41NDItMS4yOTEtMC4yNTZsLTAuMjIxLDAuMTQ3Yy0wLjQyOCwwLjI4NS0wLjU0MiwwLjg2My0wLjI1NiwxLjI5YzAuMTc5LDAuMjY5LDAuNDc0LDAuNDE0LDAuNzc0LDAuNDE0ICAgYzAuMTc4LDAsMC4zNTctMC4wNTEsMC41MTYtMC4xNTZsMC4yMjItMC4xNDhDMjUuMjc0LDEwLjk4MSwyNS4zODksMTAuNDAzLDI1LjEwNCw5Ljk3NnoiLz4KIDwvZz4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2Fs'+
			'ZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgc3Ryb2tlLXdpZHRoPSIwLjIiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMCI+CiAgPHBhdGggZD0iTTE2LDE0LjgwNEg0LjY5N2MtMC4zMTUsMC0wLjYyNCwwLjEyOC0wLjg0NiwwLjM1MUMzLjYyNywxNS4zNzcsMy41LDE1LjY4NiwzLjUsMTZ2OC4xMiAgIGMwLDAuMzE1LDAuMTI3LDAuNjI0LDAuMzUsMC44NDZjMC4yMjMsMC4yMjQsMC41MzEsMC4zNTEsMC44NDYsMC4zNTFIMTZjMC4zMiwwLDAuNjItMC4xMjQsMC44NDYtMC4zNTEgICBjMC4yMjYtMC4yMjYsMC4zNS0wLjUyNSwwLjM1LTAuODQ2VjE2YzAtMC4zMTQtMC4xMjgtMC42Mj'+
			'MtMC4zNS0wLjg0NkMxNi42MjMsMTQuOTMyLDE2LjMxNCwxNC44MDQsMTYsMTQuODA0eiBNMTQuODA0LDIyLjkyNCAgIEg1Ljg5M3YtNS43MjhoOC45MTFWMjIuOTI0eiBNNC42OTcsMTMuOTk4YzAuNjYxLDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZ2LTAuMzA4YzAtMC42Ni0wLjUzNi0xLjE5NS0xLjE5Ni0xLjE5NSAgIGMtMC42NjEsMC0xLjE5NiwwLjUzNS0xLjE5NiwxLjE5NXYwLjMwOEMzLjUsMTMuNDYyLDQuMDM2LDEzLjk5OCw0LjY5NywxMy45OTh6IE00LjY5NywxMC40NzdjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5N2gwICAgVjkuMDc2YzAuNjYxLDAsMS4xOTYtMC41MzUs'+
			'MS4xOTYtMS4xOTZjMC0wLjY2LTAuNTM2LTEuMTk2LTEuMTk2LTEuMTk2SDQuNjk3Yy0wLjMxNSwwLTAuNjIzLDAuMTI3LTAuODQ2LDAuMzUgICBDMy42MjgsNy4yNTcsMy41LDcuNTY0LDMuNSw3Ljg4djEuMzk5QzMuNSw5Ljk0LDQuMDM2LDEwLjQ3Nyw0LjY5NywxMC40Nzd6IE0xOS4yODksOS4wNzZoMC4yNDJjMC42NjEsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NiAgIHMtMC41MzUtMS4xOTYtMS4xOTYtMS4xOTZoLTAuMjQyYy0wLjY2MSwwLTEuMTk3LDAuNTM2LTEuMTk3LDEuMTk2UzE4LjYyOCw5LjA3NiwxOS4yODksOS4wNzZ6IE0xNi4xMjIsNi42ODRoLTAuMjQzICAgYy0wLjY2MSwwLT'+
			'EuMTk2LDAuNTM2LTEuMTk2LDEuMTk2czAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2aDAuMjQzYzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZTMTYuNzgyLDYuNjg0LDE2LjEyMiw2LjY4NHogICAgTTIyLjY5OCw5LjA3NmgwLjI0M2MwLjY2LDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZzLTAuNTM2LTEuMTk2LTEuMTk2LTEuMTk2aC0wLjI0M2MtMC42NiwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2ICAgUzIyLjAzOCw5LjA3NiwyMi42OTgsOS4wNzZ6IE05LjA2LDkuMDc2aDAuMjQyYzAuNjYsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NlM5Ljk2Miw2LjY4NCw5LjMwMiw2LjY4NEg5LjA2'+
			'ICAgYy0wLjY2MSwwLTEuMTk3LDAuNTM2LTEuMTk3LDEuMTk2UzguMzk5LDkuMDc2LDkuMDYsOS4wNzZ6IE0xMi40NjksOS4wNzZoMC4yNDNjMC42NjEsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NiAgIHMtMC41MzYtMS4xOTYtMS4xOTYtMS4xOTZoLTAuMjQzYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2UzExLjgwOCw5LjA3NiwxMi40NjksOS4wNzZ6IE0yNy4zMDQsMTEuMTExICAgYy0wLjY2MSwwLTEuMTk2LDAuNTM1LTEuMTk2LDEuMTk2djAuMzA4YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmMwLjY2LDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZ2LTAuMzA4ICAgQz'+
			'I4LjUsMTEuNjQ2LDI3Ljk2NCwxMS4xMTEsMjcuMzA0LDExLjExMXogTTI3LjMwNCwxNC42NWMtMC42NjEsMC0xLjE5NiwwLjUzNS0xLjE5NiwxLjE5NnYwLjMwOGMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTYgICBjMC42NiwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2di0wLjMwOEMyOC41LDE1LjE4NiwyNy45NjQsMTQuNjUsMjcuMzA0LDE0LjY1eiBNMjcuMzA0LDIxLjcyOGMtMC42NjEsMC0xLjE5NiwwLjUzNS0xLjE5NiwxLjE5NiAgIGgtMC4yMzRjLTAuNjYsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NmMwLDAuNjYxLDAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2aDEuNDMxYzAuMzE0'+
			'LDAsMC42MjMtMC4xMjgsMC44NDYtMC4zNTEgICBzMC4zNTEtMC41MywwLjM1MS0wLjg0NnYtMS4xOTZDMjguNSwyMi4yNjQsMjcuOTY0LDIxLjcyOCwyNy4zMDQsMjEuNzI4eiBNMjcuMzA0LDE4LjE4OWMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnYwLjMwOCAgIGMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZjMC42NiwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2di0wLjMwOEMyOC41LDE4LjcyNiwyNy45NjQsMTguMTg5LDI3LjMwNCwxOC4xODl6IE0yOC4xNDksNy4wMzMgICBjLTAuMjIzLTAuMjIyLTAuNTMxLTAuMzUtMC44NDYtMC4zNWgtMS4xOTZjLTAuNjYxLDAtMS'+
			'4xOTYsMC41MzYtMS4xOTYsMS4xOTZjMCwwLjY2MSwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NiAgIGMwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NlY3Ljg4QzI4LjUsNy41NjQsMjguMzcyLDcuMjU3LDI4LjE0OSw3LjAzM3ogTTIxLjg2MywxMy4yNjEgICBsMC4yMjEtMC4xNDdjMC40MjgtMC4yODUsMC41NDItMC44NjMsMC4yNTctMS4yOTFjLTAuMjg2LTAuNDI4LTAuODYzLTAuNTQyLTEuMjkxLTAuMjU2bC0wLjIyMSwwLjE0NiAgIGMtMC40MjcsMC4yODYtMC41NDIsMC44NjMtMC4yNTcsMS4yOTFjMC4xOCwwLjI2OSwwLjQ3NCww'+
			'LjQxNCwwLjc3NCwwLjQxNEMyMS41MjQsMTMuNDE4LDIxLjcwNCwxMy4zNjcsMjEuODYzLDEzLjI2MXogICAgTTE5LjMyOSwyMi45MjRoLTAuMjQyYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2YzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMC4yNDJjMC42NjEsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NiAgIEMyMC41MjUsMjMuNDYsMTkuOTksMjIuOTI0LDE5LjMyOSwyMi45MjR6IE0xOC41ODQsMTUuMjY0YzAuMTc4LDAsMC4zNTctMC4wNTEsMC41MTctMC4xNTdsMC4yMjEtMC4xNDcgICBjMC40MjgtMC4yODUsMC41NDItMC44NjMsMC4yNTctMS4yOWMtMC4yODUtMC'+
			'40MjgtMC44NjMtMC41NDItMS4yOTEtMC4yNTdsLTAuMjIyLDAuMTQ3Yy0wLjQyNywwLjI4Ni0wLjU0MiwwLjg2My0wLjI1NiwxLjI5MSAgIEMxNy45ODksMTUuMTE5LDE4LjI4MywxNS4yNjQsMTguNTg0LDE1LjI2NHogTTIyLjczOSwyMi45MjRoLTAuMjQyYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2ICAgYzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMC4yNDJjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2QzIzLjkzNiwyMy40NiwyMy4zOTksMjIuOTI0LDIyLjczOSwyMi45MjR6IE0yNS4xMDQsOS45NzYgICBjLTAuMjg1LTAuNDI3LTAuODYzLTAuNTQyLTEu'+
			'MjkxLTAuMjU2bC0wLjIyMSwwLjE0N2MtMC40MjgsMC4yODUtMC41NDIsMC44NjMtMC4yNTYsMS4yOWMwLjE3OSwwLjI2OSwwLjQ3NCwwLjQxNCwwLjc3NCwwLjQxNCAgIGMwLjE3OCwwLDAuMzU3LTAuMDUxLDAuNTE2LTAuMTU2bDAuMjIyLTAuMTQ4QzI1LjI3NCwxMC45ODEsMjUuMzg5LDEwLjQwMywyNS4xMDQsOS45NzZ6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._button_image_normalscreen__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="button_image_normalscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_image_normalscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_normalscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_image_normalscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_image_normalscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_image_normalscreen.style.transition='';
				if (me._button_image_normalscreen.ggCurrentLogicStateVisible == 0) {
					me._button_image_normalscreen.style.visibility=(Number(me._button_image_normalscreen.style.opacity)>0||!me._button_image_normalscreen.style.opacity)?'inherit':'hidden';
					me._button_image_normalscreen.ggVisible=true;
				}
				else {
					me._button_image_normalscreen.style.visibility="hidden";
					me._button_image_normalscreen.ggVisible=false;
				}
			}
		}
		me._button_image_normalscreen.logicBlock_visible();
		me._button_image_normalscreen.onmouseenter=function (e) {
			me._button_image_normalscreen__img.style.visibility='hidden';
			me._button_image_normalscreen__imgo.style.visibility='inherit';
			me.elementMouseOver['button_image_normalscreen']=true;
		}
		me._button_image_normalscreen.onmouseleave=function (e) {
			me._button_image_normalscreen__img.style.visibility='inherit';
			me._button_image_normalscreen__imgo.style.visibility='hidden';
			me.elementMouseOver['button_image_normalscreen']=false;
		}
		me._button_image_normalscreen.ggUpdatePosition=function (useTransition) {
		}
		me._button_fullscreen_1.appendChild(me._button_image_normalscreen);
		el=me._button_image_fullscreen=document.createElement('div');
		els=me._button_image_fullscreen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeT0iMHB4IiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgYmFzZVByb2ZpbGU9ImJhc2ljIiB4PSIwcHgiIHdpZH'+
			'RoPSIzMnB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIHN0cm9rZS13aWR0aD0iMS41IiBvcGFjaXR5PSIwLjQiIHN0cm9rZT0iIzNDM0MzQyI+CiAgPHBhdGggZD0iTTI4LjE0OSw3LjAzNGMtMC4yMjMtMC4yMjMtMC41MzEtMC4zNTEtMC44NDYtMC4zNTFINC42OTdjLTAuMzE1LDAtMC42MjQsMC4xMjgtMC44NDYsMC4zNTEgICBTMy41LDcuNTY1LDMuNSw3Ljg4djE2LjI0YzAsMC4zMTUsMC4xMjgsMC42MjMsMC4zNTEsMC44NDZjMC4yMjMsMC4yMjQsMC41MzEsMC4zNTEsMC44NDYsMC4zNTFoMjIuNjA3ICAgYzAu'+
			'MzE5LDAsMC42Mi0wLjEyNCwwLjg0Ni0wLjM1MWMwLjIyNy0wLjIyNiwwLjM1MS0wLjUyNiwwLjM1MS0wLjg0NlY3Ljg4QzI4LjUsNy41NjUsMjguMzcyLDcuMjU3LDI4LjE0OSw3LjAzNHogTTUuODkzLDIyLjkyNCAgIFY5LjA3NmgyMC4yMTV2MTMuODQ4SDUuODkzeiBNMTYsMTkuMjRjLTAuNjYxLDAtMS4xOTcsMC41MzUtMS4xOTcsMS4xOTZ2MC40NDhjMCwwLjY2MSwwLjUzNiwxLjE5NiwxLjE5NywxLjE5NiAgIGMwLjY2LDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZ2LTAuNDQ4QzE3LjE5NiwxOS43NzUsMTYuNjYxLDE5LjI0LDE2LDE5LjI0eiBNMTEuNjcsMTQuODA0aC0wLjM0MiAgIGMtMC'+
			'42NjEsMC0xLjE5NywwLjUzNS0xLjE5NywxLjE5NmMwLDAuNjYxLDAuNTM2LDEuMTk2LDEuMTk3LDEuMTk2aDAuMzQyYzAuNjYxLDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTYgICBDMTIuODY2LDE1LjMzOSwxMi4zMzEsMTQuODA0LDExLjY3LDE0LjgwNHogTTguMTk1LDE0LjgwNEg3Ljg1NGMtMC42NjEsMC0xLjE5NywwLjUzNS0xLjE5NywxLjE5NiAgIGMwLDAuNjYxLDAuNTM2LDEuMTk2LDEuMTk3LDEuMTk2aDAuMzQxYzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NkM5LjM5MiwxNS4zMzksOC44NTUsMTQuODA0LDguMTk1LDE0LjgwNHogTTE4LjI4NywxMy40MTIgICBsLTAuMjIyLDAu'+
			'MTQ4Yy0wLjQyNywwLjI4NS0wLjU0MSwwLjg2My0wLjI1NiwxLjI5YzAuMTgsMC4yNjksMC40NzQsMC40MTQsMC43NzQsMC40MTRjMC4xNzgsMCwwLjM1Ny0wLjA1LDAuNTE3LTAuMTU3ICAgbDAuMjIxLTAuMTQ4YzAuNDI4LTAuMjg1LDAuNTQyLTAuODYzLDAuMjU3LTEuMjlDMTkuMjkzLDEzLjI0MiwxOC43MTUsMTMuMTI2LDE4LjI4NywxMy40MTJ6IE0yMy44MTMsOS43MmwtMC4yMjIsMC4xNDcgICBjLTAuNDI3LDAuMjg2LTAuNTQyLDAuODY0LTAuMjU2LDEuMjkxYzAuMTc5LDAuMjY5LDAuNDc0LDAuNDE0LDAuNzc0LDAuNDE0YzAuMTc4LDAsMC4zNTctMC4wNSwwLjUxNy0wLjE1N2wwLjIyMS'+
			'0wLjE0OCAgIGMwLjQyNy0wLjI4NSwwLjU0Mi0wLjg2MywwLjI1Ni0xLjI5MUMyNC44MTgsOS41NDksMjQuMjQxLDkuNDM0LDIzLjgxMyw5LjcyeiBNMTYsMTQuODA0aC0xLjE5NmMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NiAgIGMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZjMCwwLjY2MSwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmMwLjY2LDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZWMTYgICBjMC0wLjMxNS0wLjEyOC0wLjYyMy0wLjM1LTAuODQ2QzE2LjYyMywxNC45MzEsMTYuMzE0LDE0LjgwNCwxNiwxNC44MDR6IE0yMS4wNSwxMS41NjVsLTAuMjIxLDAuMTQ4ICAg'+
			'Yy0wLjQyNywwLjI4Ni0wLjU0MiwwLjg2My0wLjI1NywxLjI5MWMwLjE4LDAuMjY4LDAuNDc1LDAuNDEzLDAuNzc0LDAuNDEzYzAuMTc4LDAsMC4zNTctMC4wNTEsMC41MTctMC4xNTdsMC4yMjEtMC4xNDggICBjMC40MjgtMC4yODYsMC41NDItMC44NjMsMC4yNTctMS4yOTFTMjEuNDc4LDExLjI4LDIxLjA1LDExLjU2NXoiLz4KIDwvZz4KIDxnIHN0cm9rZS13aWR0aD0iMC4yIiBmaWxsPSIjRkZGRkZGIiBzdHJva2U9IiMwMDAwMDAiPgogIDxwYXRoIGQ9Ik0yOC4xNDksNy4wMzRjLTAuMjIzLTAuMjIzLTAuNTMxLTAuMzUxLTAuODQ2LTAuMzUxSDQuNjk3Yy0wLjMxNSwwLTAuNjI0LDAuMTI4LT'+
			'AuODQ2LDAuMzUxICAgUzMuNSw3LjU2NSwzLjUsNy44OHYxNi4yNGMwLDAuMzE1LDAuMTI4LDAuNjIzLDAuMzUxLDAuODQ2YzAuMjIzLDAuMjI0LDAuNTMxLDAuMzUxLDAuODQ2LDAuMzUxaDIyLjYwNyAgIGMwLjMxOSwwLDAuNjItMC4xMjQsMC44NDYtMC4zNTFjMC4yMjctMC4yMjYsMC4zNTEtMC41MjYsMC4zNTEtMC44NDZWNy44OEMyOC41LDcuNTY1LDI4LjM3Miw3LjI1NywyOC4xNDksNy4wMzR6IE01Ljg5MywyMi45MjQgICBWOS4wNzZoMjAuMjE1djEzLjg0OEg1Ljg5M3ogTTE2LDE5LjI0Yy0wLjY2MSwwLTEuMTk3LDAuNTM1LTEuMTk3LDEuMTk2djAuNDQ4YzAsMC42NjEsMC41MzYsMS4x'+
			'OTYsMS4xOTcsMS4xOTYgICBjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2di0wLjQ0OEMxNy4xOTYsMTkuNzc1LDE2LjY2MSwxOS4yNCwxNiwxOS4yNHogTTExLjY3LDE0LjgwNGgtMC4zNDIgICBjLTAuNjYxLDAtMS4xOTcsMC41MzUtMS4xOTcsMS4xOTZjMCwwLjY2MSwwLjUzNiwxLjE5NiwxLjE5NywxLjE5NmgwLjM0MmMwLjY2MSwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2ICAgQzEyLjg2NiwxNS4zMzksMTIuMzMxLDE0LjgwNCwxMS42NywxNC44MDR6IE04LjE5NSwxNC44MDRINy44NTRjLTAuNjYxLDAtMS4xOTcsMC41MzUtMS4xOTcsMS4xOTYgICBjMCwwLjY2MSwwLjUzNiwxLj'+
			'E5NiwxLjE5NywxLjE5NmgwLjM0MWMwLjY2LDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZDOS4zOTIsMTUuMzM5LDguODU1LDE0LjgwNCw4LjE5NSwxNC44MDR6IE0xOC4yODcsMTMuNDEyICAgbC0wLjIyMiwwLjE0OGMtMC40MjcsMC4yODUtMC41NDEsMC44NjMtMC4yNTYsMS4yOWMwLjE4LDAuMjY5LDAuNDc0LDAuNDE0LDAuNzc0LDAuNDE0YzAuMTc4LDAsMC4zNTctMC4wNSwwLjUxNy0wLjE1NyAgIGwwLjIyMS0wLjE0OGMwLjQyOC0wLjI4NSwwLjU0Mi0wLjg2MywwLjI1Ny0xLjI5QzE5LjI5MywxMy4yNDIsMTguNzE1LDEzLjEyNiwxOC4yODcsMTMuNDEyeiBNMjMuODEzLDkuNzJsLTAuMjIy'+
			'LDAuMTQ3ICAgYy0wLjQyNywwLjI4Ni0wLjU0MiwwLjg2NC0wLjI1NiwxLjI5MWMwLjE3OSwwLjI2OSwwLjQ3NCwwLjQxNCwwLjc3NCwwLjQxNGMwLjE3OCwwLDAuMzU3LTAuMDUsMC41MTctMC4xNTdsMC4yMjEtMC4xNDggICBjMC40MjctMC4yODUsMC41NDItMC44NjMsMC4yNTYtMS4yOTFDMjQuODE4LDkuNTQ5LDI0LjI0MSw5LjQzNCwyMy44MTMsOS43MnogTTE2LDE0LjgwNGgtMS4xOTZjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTYgICBjMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZjMC42NiwwLDEuMTk2LTAuNT'+
			'M1LDEuMTk2LTEuMTk2VjE2ICAgYzAtMC4zMTUtMC4xMjgtMC42MjMtMC4zNS0wLjg0NkMxNi42MjMsMTQuOTMxLDE2LjMxNCwxNC44MDQsMTYsMTQuODA0eiBNMjEuMDUsMTEuNTY1bC0wLjIyMSwwLjE0OCAgIGMtMC40MjcsMC4yODYtMC41NDIsMC44NjMtMC4yNTcsMS4yOTFjMC4xOCwwLjI2OCwwLjQ3NSwwLjQxMywwLjc3NCwwLjQxM2MwLjE3OCwwLDAuMzU3LTAuMDUxLDAuNTE3LTAuMTU3bDAuMjIxLTAuMTQ4ICAgYzAuNDI4LTAuMjg2LDAuNTQyLTAuODYzLDAuMjU3LTEuMjkxUzIxLjQ3OCwxMS4yOCwyMS4wNSwxMS41NjV6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._button_image_fullscreen__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_fullscreen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeT0iMHB4IiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgYmFzZVByb2ZpbGU9ImJhc2ljIiB4PSIwcHgiIHdpZH'+
			'RoPSIzMnB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgc3Ryb2tlLXdpZHRoPSIxLjUiIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIj4KICA8cGF0aCBkPSJNMjguMTQ5LDcuMDM0Yy0wLjIyMy0wLjIyMy0wLjUzMS0wLjM1MS0wLjg0Ni0wLjM1MUg0LjY5N2MtMC4zMTUsMC0wLjYyNCwwLjEyOC0wLjg0NiwwLjM1MSAgIFMzLjUsNy41NjUsMy41LDcuODh2MTYuMjRjMCwwLjMxNSwwLjEyOCwwLjYyMyww'+
			'LjM1MSwwLjg0NmMwLjIyMywwLjIyNCwwLjUzMSwwLjM1MSwwLjg0NiwwLjM1MWgyMi42MDcgICBjMC4zMTksMCwwLjYyLTAuMTI0LDAuODQ2LTAuMzUxYzAuMjI3LTAuMjI2LDAuMzUxLTAuNTI2LDAuMzUxLTAuODQ2VjcuODhDMjguNSw3LjU2NSwyOC4zNzIsNy4yNTcsMjguMTQ5LDcuMDM0eiBNNS44OTMsMjIuOTI0ICAgVjkuMDc2aDIwLjIxNXYxMy44NDhINS44OTN6IE0xNiwxOS4yNGMtMC42NjEsMC0xLjE5NywwLjUzNS0xLjE5NywxLjE5NnYwLjQ0OGMwLDAuNjYxLDAuNTM2LDEuMTk2LDEuMTk3LDEuMTk2ICAgYzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NnYtMC40NDhDMTcuMT'+
			'k2LDE5Ljc3NSwxNi42NjEsMTkuMjQsMTYsMTkuMjR6IE0xMS42NywxNC44MDRoLTAuMzQyICAgYy0wLjY2MSwwLTEuMTk3LDAuNTM1LTEuMTk3LDEuMTk2YzAsMC42NjEsMC41MzYsMS4xOTYsMS4xOTcsMS4xOTZoMC4zNDJjMC42NjEsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NiAgIEMxMi44NjYsMTUuMzM5LDEyLjMzMSwxNC44MDQsMTEuNjcsMTQuODA0eiBNOC4xOTUsMTQuODA0SDcuODU0Yy0wLjY2MSwwLTEuMTk3LDAuNTM1LTEuMTk3LDEuMTk2ICAgYzAsMC42NjEsMC41MzYsMS4xOTYsMS4xOTcsMS4xOTZoMC4zNDFjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2QzkuMzkyLDE1'+
			'LjMzOSw4Ljg1NSwxNC44MDQsOC4xOTUsMTQuODA0eiBNMTguMjg3LDEzLjQxMiAgIGwtMC4yMjIsMC4xNDhjLTAuNDI3LDAuMjg1LTAuNTQxLDAuODYzLTAuMjU2LDEuMjljMC4xOCwwLjI2OSwwLjQ3NCwwLjQxNCwwLjc3NCwwLjQxNGMwLjE3OCwwLDAuMzU3LTAuMDUsMC41MTctMC4xNTcgICBsMC4yMjEtMC4xNDhjMC40MjgtMC4yODUsMC41NDItMC44NjMsMC4yNTctMS4yOUMxOS4yOTMsMTMuMjQyLDE4LjcxNSwxMy4xMjYsMTguMjg3LDEzLjQxMnogTTIzLjgxMyw5LjcybC0wLjIyMiwwLjE0NyAgIGMtMC40MjcsMC4yODYtMC41NDIsMC44NjQtMC4yNTYsMS4yOTFjMC4xNzksMC4yNjksMC'+
			'40NzQsMC40MTQsMC43NzQsMC40MTRjMC4xNzgsMCwwLjM1Ny0wLjA1LDAuNTE3LTAuMTU3bDAuMjIxLTAuMTQ4ICAgYzAuNDI3LTAuMjg1LDAuNTQyLTAuODYzLDAuMjU2LTEuMjkxQzI0LjgxOCw5LjU0OSwyNC4yNDEsOS40MzQsMjMuODEzLDkuNzJ6IE0xNiwxNC44MDRoLTEuMTk2Yy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2ICAgYzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmMwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NlYxNiAgIGMwLTAuMzE1LTAuMTI4LTAuNjIzLTAuMzUtMC44NDZDMTYuNjIzLDE0'+
			'LjkzMSwxNi4zMTQsMTQuODA0LDE2LDE0LjgwNHogTTIxLjA1LDExLjU2NWwtMC4yMjEsMC4xNDggICBjLTAuNDI3LDAuMjg2LTAuNTQyLDAuODYzLTAuMjU3LDEuMjkxYzAuMTgsMC4yNjgsMC40NzUsMC40MTMsMC43NzQsMC40MTNjMC4xNzgsMCwwLjM1Ny0wLjA1MSwwLjUxNy0wLjE1N2wwLjIyMS0wLjE0OCAgIGMwLjQyOC0wLjI4NiwwLjU0Mi0wLjg2MywwLjI1Ny0xLjI5MVMyMS40NzgsMTEuMjgsMjEuMDUsMTEuNTY1eiIvPgogPC9nPgogPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIiBzdHJva2Utd2lkdGg9IjAuMiIgZmlsbD'+
			'0iI0ZGRkZGRiIgc3Ryb2tlPSIjMDAwMDAwIj4KICA8cGF0aCBkPSJNMjguMTQ5LDcuMDM0Yy0wLjIyMy0wLjIyMy0wLjUzMS0wLjM1MS0wLjg0Ni0wLjM1MUg0LjY5N2MtMC4zMTUsMC0wLjYyNCwwLjEyOC0wLjg0NiwwLjM1MSAgIFMzLjUsNy41NjUsMy41LDcuODh2MTYuMjRjMCwwLjMxNSwwLjEyOCwwLjYyMywwLjM1MSwwLjg0NmMwLjIyMywwLjIyNCwwLjUzMSwwLjM1MSwwLjg0NiwwLjM1MWgyMi42MDcgICBjMC4zMTksMCwwLjYyLTAuMTI0LDAuODQ2LTAuMzUxYzAuMjI3LTAuMjI2LDAuMzUxLTAuNTI2LDAuMzUxLTAuODQ2VjcuODhDMjguNSw3LjU2NSwyOC4zNzIsNy4yNTcsMjguMTQ5'+
			'LDcuMDM0eiBNNS44OTMsMjIuOTI0ICAgVjkuMDc2aDIwLjIxNXYxMy44NDhINS44OTN6IE0xNiwxOS4yNGMtMC42NjEsMC0xLjE5NywwLjUzNS0xLjE5NywxLjE5NnYwLjQ0OGMwLDAuNjYxLDAuNTM2LDEuMTk2LDEuMTk3LDEuMTk2ICAgYzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NnYtMC40NDhDMTcuMTk2LDE5Ljc3NSwxNi42NjEsMTkuMjQsMTYsMTkuMjR6IE0xMS42NywxNC44MDRoLTAuMzQyICAgYy0wLjY2MSwwLTEuMTk3LDAuNTM1LTEuMTk3LDEuMTk2YzAsMC42NjEsMC41MzYsMS4xOTYsMS4xOTcsMS4xOTZoMC4zNDJjMC42NjEsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5Ni'+
			'AgIEMxMi44NjYsMTUuMzM5LDEyLjMzMSwxNC44MDQsMTEuNjcsMTQuODA0eiBNOC4xOTUsMTQuODA0SDcuODU0Yy0wLjY2MSwwLTEuMTk3LDAuNTM1LTEuMTk3LDEuMTk2ICAgYzAsMC42NjEsMC41MzYsMS4xOTYsMS4xOTcsMS4xOTZoMC4zNDFjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2QzkuMzkyLDE1LjMzOSw4Ljg1NSwxNC44MDQsOC4xOTUsMTQuODA0eiBNMTguMjg3LDEzLjQxMiAgIGwtMC4yMjIsMC4xNDhjLTAuNDI3LDAuMjg1LTAuNTQxLDAuODYzLTAuMjU2LDEuMjljMC4xOCwwLjI2OSwwLjQ3NCwwLjQxNCwwLjc3NCwwLjQxNGMwLjE3OCwwLDAuMzU3LTAuMDUsMC41MTct'+
			'MC4xNTcgICBsMC4yMjEtMC4xNDhjMC40MjgtMC4yODUsMC41NDItMC44NjMsMC4yNTctMS4yOUMxOS4yOTMsMTMuMjQyLDE4LjcxNSwxMy4xMjYsMTguMjg3LDEzLjQxMnogTTIzLjgxMyw5LjcybC0wLjIyMiwwLjE0NyAgIGMtMC40MjcsMC4yODYtMC41NDIsMC44NjQtMC4yNTYsMS4yOTFjMC4xNzksMC4yNjksMC40NzQsMC40MTQsMC43NzQsMC40MTRjMC4xNzgsMCwwLjM1Ny0wLjA1LDAuNTE3LTAuMTU3bDAuMjIxLTAuMTQ4ICAgYzAuNDI3LTAuMjg1LDAuNTQyLTAuODYzLDAuMjU2LTEuMjkxQzI0LjgxOCw5LjU0OSwyNC4yNDEsOS40MzQsMjMuODEzLDkuNzJ6IE0xNiwxNC44MDRoLTEuMT'+
			'k2Yy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2ICAgYzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmMwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NlYxNiAgIGMwLTAuMzE1LTAuMTI4LTAuNjIzLTAuMzUtMC44NDZDMTYuNjIzLDE0LjkzMSwxNi4zMTQsMTQuODA0LDE2LDE0LjgwNHogTTIxLjA1LDExLjU2NWwtMC4yMjEsMC4xNDggICBjLTAuNDI3LDAuMjg2LTAuNTQyLDAuODYzLTAuMjU3LDEuMjkxYzAuMTgsMC4yNjgsMC40NzUsMC40MTMsMC43NzQsMC40MTNjMC4xNzgsMCwwLjM1Ny0wLjA1MSwwLjUxNy0w'+
			'LjE1N2wwLjIyMS0wLjE0OCAgIGMwLjQyOC0wLjI4NiwwLjU0Mi0wLjg2MywwLjI1Ny0xLjI5MVMyMS40NzgsMTEuMjgsMjEuMDUsMTEuNTY1eiIvPgogPC9nPgo8L3N2Zz4K';
		me._button_image_fullscreen__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="button_image_fullscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_image_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_fullscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_image_fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_image_fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_image_fullscreen.style.transition='';
				if (me._button_image_fullscreen.ggCurrentLogicStateVisible == 0) {
					me._button_image_fullscreen.style.visibility="hidden";
					me._button_image_fullscreen.ggVisible=false;
				}
				else {
					me._button_image_fullscreen.style.visibility=(Number(me._button_image_fullscreen.style.opacity)>0||!me._button_image_fullscreen.style.opacity)?'inherit':'hidden';
					me._button_image_fullscreen.ggVisible=true;
				}
			}
		}
		me._button_image_fullscreen.logicBlock_visible();
		me._button_image_fullscreen.onmouseenter=function (e) {
			me._button_image_fullscreen__img.style.visibility='hidden';
			me._button_image_fullscreen__imgo.style.visibility='inherit';
			me.elementMouseOver['button_image_fullscreen']=true;
		}
		me._button_image_fullscreen.onmouseleave=function (e) {
			me._button_image_fullscreen__img.style.visibility='inherit';
			me._button_image_fullscreen__imgo.style.visibility='hidden';
			me.elementMouseOver['button_image_fullscreen']=false;
		}
		me._button_image_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		me._button_fullscreen_1.appendChild(me._button_image_fullscreen);
		el=me._tt_fullscreen=document.createElement('div');
		els=me._tt_fullscreen__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_fullscreen";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_fullscreen.ggUpdateText=function() {
			var params = [];
			var hs = player._(" \u5168\u87a2\u5e55 Full Screen", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_fullscreen.ggUpdateText();
		el.appendChild(els);
		me._tt_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_fullscreen.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_fullscreen.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_fullscreen.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_fullscreen.style.transition='left 0s, top 0s';
				if (me._tt_fullscreen.ggCurrentLogicStatePosition == 0) {
					me._tt_fullscreen.style.left = 'calc(50% - (0px / 2))';
					me._tt_fullscreen.style.top='-25px';
				}
				else {
					me._tt_fullscreen.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._tt_fullscreen.style.top='32px';
				}
			}
		}
		me._tt_fullscreen.logicBlock_position();
		me._tt_fullscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['button_fullscreen_1'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_fullscreen.style.transition='left 0s, top 0s';
				if (me._tt_fullscreen.ggCurrentLogicStateVisible == 0) {
					me._tt_fullscreen.style.visibility=(Number(me._tt_fullscreen.style.opacity)>0||!me._tt_fullscreen.style.opacity)?'inherit':'hidden';
					me._tt_fullscreen.ggVisible=true;
				}
				else {
					me._tt_fullscreen.style.visibility="hidden";
					me._tt_fullscreen.ggVisible=false;
				}
			}
		}
		me._tt_fullscreen.logicBlock_visible();
		me._tt_fullscreen.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getIsFullscreen() == false))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateText = 1;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._tt_fullscreen.ggCurrentLogicStateText != newLogicStateText) {
				me._tt_fullscreen.ggCurrentLogicStateText = newLogicStateText;
				me._tt_fullscreen.style.transition='left 0s, top 0s';
				if (me._tt_fullscreen.ggCurrentLogicStateText == 0) {
					if (me._tt_fullscreen.ggUpdateText) {
					me._tt_fullscreen.ggUpdateText=function() {
						var params = [];
						var hs = player._("Enter Fullscreen", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._tt_fullscreen.ggUpdateText();
					} else {
						if (me._tt_fullscreen.ggUpdatePosition) me._tt_fullscreen.ggUpdatePosition();
					}
				}
				else if (me._tt_fullscreen.ggCurrentLogicStateText == 1) {
					if (me._tt_fullscreen.ggUpdateText) {
					me._tt_fullscreen.ggUpdateText=function() {
						var params = [];
						var hs = player._("Exit Fullscreen", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._tt_fullscreen.ggUpdateText();
					} else {
						if (me._tt_fullscreen.ggUpdatePosition) me._tt_fullscreen.ggUpdatePosition();
					}
				}
				else {
					if (me._tt_fullscreen.ggUpdateText) {
					me._tt_fullscreen.ggUpdateText=function() {
						var params = [];
						var hs = player._(" \u5168\u87a2\u5e55 Full Screen", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._tt_fullscreen.ggUpdateText();
					} else {
						if (me._tt_fullscreen.ggUpdatePosition) me._tt_fullscreen.ggUpdatePosition();
					}
				}
			}
		}
		me._tt_fullscreen.logicBlock_text();
		me._tt_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		me._button_fullscreen_1.appendChild(me._tt_fullscreen);
		me.divSkin.appendChild(me._button_fullscreen_1);
		el=me._button_next_previous=document.createElement('div');
		el.ggId="button_next_previous";
		el.ggDx=47;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 23px;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 47px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_next_previous.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_next_previous.ggUpdatePosition=function (useTransition) {
		}
		el=me._pano_prev=document.createElement('div');
		els=me._pano_prev__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeT0iMHB4IiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgYmFzZVByb2ZpbGU9ImJhc2ljIiB4PSIwcHgiIHdpZH'+
			'RoPSIzMnB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIHN0cm9rZS13aWR0aD0iMS41IiBvcGFjaXR5PSIwLjQiIHN0cm9rZT0iIzNDM0MzQyI+CiAgPHBhdGggZD0iTTMuNSwxNkMzLjUsOS4wOTYsOS4wOTYsMy41MDEsMTYsMy41bDAsMGM2LjkwNSwwLDEyLjUsNS41OTUsMTIuNSwxMi41bDAsMCAgICBjLTAuMDAxLDYuOTAzLTUuNTk2LDEyLjQ5OC0xMi41LDEyLjVsMCwwQzkuMDk2LDI4LjQ5OCwzLjUsMjIuOTAzLDMuNSwxNkwzLjUsMTZ6IE04Ljg1Myw4Ljg1MyAgICBDNy4wMjIsMTAuNjg2LDUuODk0LDEzLjIw'+
			'NSw1Ljg5MywxNmwwLDBjMCwyLjc5NSwxLjEyOSw1LjMxNCwyLjk2LDcuMTQ2bDAsMGMxLjgzMywxLjgzMSw0LjM1MiwyLjk2LDcuMTQ2LDIuOTZsMCwwICAgIGMyLjc5NSwwLDUuMzE1LTEuMTI5LDcuMTQ4LTIuOTZsMCwwYzEuODMtMS44MzMsMi45NTktNC4zNTIsMi45Ni03LjE0NmwwLDBjLTAuMDAxLTIuNzk1LTEuMTMtNS4zMTQtMi45Ni03LjE0N2wwLDAgICAgQzIxLjMxNCw3LjAyMiwxOC43OTUsNS44OTQsMTYsNS44OTNsMCwwQzEzLjIwNSw1Ljg5NCwxMC42ODYsNy4wMjIsOC44NTMsOC44NTNMOC44NTMsOC44NTN6Ii8+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0xOS45MTYsMjIuNjE2bC01Lj'+
			'g5NS01Ljc2Yy0wLjIzMi0wLjIyNy0wLjM2LTAuNTMyLTAuMzYtMC44NTZsMCwwYzAtMC4zMjQsMC4xMjgtMC42MjksMC4zNi0wLjg1NWwwLDAgICAgIGw1Ljg5NS01Ljc2MWMwLjM0NC0wLjMzNiwwLjg1OC0wLjQzNCwxLjMwMS0wLjI0N2wwLDBjMC40NDIsMC4xODYsMC43MzIsMC42MjIsMC43MzIsMS4xMDNsMCwwdjExLjUyMSAgICAgYzAsMC40NzktMC4yOSwwLjkxNy0wLjczMiwxLjEwM2wwLDBjLTAuMTQ5LDAuMDYzLTAuMzA3LDAuMDk0LTAuNDYzLDAuMDk0bDAsMEMyMC40NDcsMjIuOTU3LDIwLjE0NSwyMi44MzksMTkuOTE2LDIyLjYxNiAgICAgTDE5LjkxNiwyMi42MTZ6IE0xNi41Njks'+
			'MTZsMi45ODgsMi45MTl2LTUuODM4TDE2LjU2OSwxNkwxNi41NjksMTZ6Ii8+CiAgIDxwYXRoIGQ9Ik0xNC4wMTEsMjIuNjE2bC01Ljg5Ni01Ljc2MWMtMC4yMzQtMC4yMjktMC4zNjMtMC41NC0wLjM2LTAuODY4bDAsMCAgICAgYzAuMDA0LTAuMzI5LDAuMTM5LTAuNjM3LDAuMzc5LTAuODYxbDAsMGw2LjE2MS01Ljc2MWMwLjQ4Mi0wLjQ1MiwxLjI0LTAuNDI2LDEuNjkxLDAuMDU3bDAsMCAgICAgYzAuNDUxLDAuNDgyLDAuNDI2LDEuMjM5LTAuMDU2LDEuNjlsMCwwbC01LjI0OCw0LjkwN2w1LDQuODg2djAuMDAxYzAuNDcyLDAuNDYxLDAuNDgxLDEuMjE5LDAuMDIsMS42OTFsMCwwICAgICBjLT'+
			'AuMjM1LDAuMjM5LTAuNTQ1LDAuMzU5LTAuODU2LDAuMzU5bDAsMEMxNC41NDYsMjIuOTU3LDE0LjI0NCwyMi44NDQsMTQuMDExLDIyLjYxNkwxNC4wMTEsMjIuNjE2eiIvPgogIDwvZz4KIDwvZz4KIDxnIHN0cm9rZS13aWR0aD0iMC4yIiBmaWxsPSIjRkZGRkZGIiBzdHJva2U9IiMwMDAwMDAiPgogIDxwYXRoIGQ9Ik0zLjUsMTZDMy41LDkuMDk2LDkuMDk2LDMuNTAxLDE2LDMuNWwwLDBjNi45MDUsMCwxMi41LDUuNTk1LDEyLjUsMTIuNWwwLDAgICAgYy0wLjAwMSw2LjkwMy01LjU5NiwxMi40OTgtMTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OTgsMy41LDIyLjkwMywzLjUsMTZMMy41LDE2eiBN'+
			'OC44NTMsOC44NTMgICAgQzcuMDIyLDEwLjY4Niw1Ljg5NCwxMy4yMDUsNS44OTMsMTZsMCwwYzAsMi43OTUsMS4xMjksNS4zMTQsMi45Niw3LjE0NmwwLDBjMS44MzMsMS44MzEsNC4zNTIsMi45Niw3LjE0NiwyLjk2bDAsMCAgICBjMi43OTUsMCw1LjMxNS0xLjEyOSw3LjE0OC0yLjk2bDAsMGMxLjgzLTEuODMzLDIuOTU5LTQuMzUyLDIuOTYtNy4xNDZsMCwwYy0wLjAwMS0yLjc5NS0xLjEzLTUuMzE0LTIuOTYtNy4xNDdsMCwwICAgIEMyMS4zMTQsNy4wMjIsMTguNzk1LDUuODk0LDE2LDUuODkzbDAsMEMxMy4yMDUsNS44OTQsMTAuNjg2LDcuMDIyLDguODUzLDguODUzTDguODUzLDguODUzei'+
			'IvPgogIDxnPgogICA8cGF0aCBkPSJNMTkuOTE2LDIyLjYxNmwtNS44OTUtNS43NmMtMC4yMzItMC4yMjctMC4zNi0wLjUzMi0wLjM2LTAuODU2bDAsMGMwLTAuMzI0LDAuMTI4LTAuNjI5LDAuMzYtMC44NTVsMCwwICAgICBsNS44OTUtNS43NjFjMC4zNDQtMC4zMzYsMC44NTgtMC40MzQsMS4zMDEtMC4yNDdsMCwwYzAuNDQyLDAuMTg2LDAuNzMyLDAuNjIyLDAuNzMyLDEuMTAzbDAsMHYxMS41MjEgICAgIGMwLDAuNDc5LTAuMjksMC45MTctMC43MzIsMS4xMDNsMCwwYy0wLjE0OSwwLjA2My0wLjMwNywwLjA5NC0wLjQ2MywwLjA5NGwwLDBDMjAuNDQ3LDIyLjk1NywyMC4xNDUsMjIuODM5LDE5'+
			'LjkxNiwyMi42MTYgICAgIEwxOS45MTYsMjIuNjE2eiBNMTYuNTY5LDE2bDIuOTg4LDIuOTE5di01LjgzOEwxNi41NjksMTZMMTYuNTY5LDE2eiIvPgogICA8cGF0aCBkPSJNMTQuMDExLDIyLjYxNmwtNS44OTYtNS43NjFjLTAuMjM0LTAuMjI5LTAuMzYzLTAuNTQtMC4zNi0wLjg2OGwwLDAgICAgIGMwLjAwNC0wLjMyOSwwLjEzOS0wLjYzNywwLjM3OS0wLjg2MWwwLDBsNi4xNjEtNS43NjFjMC40ODItMC40NTIsMS4yNC0wLjQyNiwxLjY5MSwwLjA1N2wwLDAgICAgIGMwLjQ1MSwwLjQ4MiwwLjQyNiwxLjIzOS0wLjA1NiwxLjY5bDAsMGwtNS4yNDgsNC45MDdsNSw0Ljg4NnYwLjAwMWMwLjQ3Mi'+
			'wwLjQ2MSwwLjQ4MSwxLjIxOSwwLjAyLDEuNjkxbDAsMCAgICAgYy0wLjIzNSwwLjIzOS0wLjU0NSwwLjM1OS0wLjg1NiwwLjM1OWwwLDBDMTQuNTQ2LDIyLjk1NywxNC4yNDQsMjIuODQ0LDE0LjAxMSwyMi42MTZMMTQuMDExLDIyLjYxNnoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._pano_prev__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._pano_prev__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeT0iMHB4IiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgYmFzZVByb2ZpbGU9ImJhc2ljIiB4PSIwcHgiIHdpZH'+
			'RoPSIzMnB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgc3Ryb2tlLXdpZHRoPSIxLjUiIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIj4KICA8cGF0aCBkPSJNMy41LDE2QzMuNSw5LjA5Niw5LjA5NiwzLjUwMSwxNiwzLjVsMCwwYzYuOTA1LDAsMTIuNSw1LjU5NSwxMi41LDEyLjVsMCwwICAgIGMtMC4wMDEsNi45MDMtNS41OTYsMTIuNDk4LTEyLjUsMTIuNWwwLDBDOS4wOTYsMjguNDk4LDMuNSwyMi45'+
			'MDMsMy41LDE2TDMuNSwxNnogTTguODUzLDguODUzICAgIEM3LjAyMiwxMC42ODYsNS44OTQsMTMuMjA1LDUuODkzLDE2bDAsMGMwLDIuNzk1LDEuMTI5LDUuMzE0LDIuOTYsNy4xNDZsMCwwYzEuODMzLDEuODMxLDQuMzUyLDIuOTYsNy4xNDYsMi45NmwwLDAgICAgYzIuNzk1LDAsNS4zMTUtMS4xMjksNy4xNDgtMi45NmwwLDBjMS44My0xLjgzMywyLjk1OS00LjM1MiwyLjk2LTcuMTQ2bDAsMGMtMC4wMDEtMi43OTUtMS4xMy01LjMxNC0yLjk2LTcuMTQ3bDAsMCAgICBDMjEuMzE0LDcuMDIyLDE4Ljc5NSw1Ljg5NCwxNiw1Ljg5M2wwLDBDMTMuMjA1LDUuODk0LDEwLjY4Niw3LjAyMiw4Ljg1My'+
			'w4Ljg1M0w4Ljg1Myw4Ljg1M3oiLz4KICA8Zz4KICAgPHBhdGggZD0iTTE5LjkxNiwyMi42MTZsLTUuODk1LTUuNzZjLTAuMjMyLTAuMjI3LTAuMzYtMC41MzItMC4zNi0wLjg1NmwwLDBjMC0wLjMyNCwwLjEyOC0wLjYyOSwwLjM2LTAuODU1bDAsMCAgICAgbDUuODk1LTUuNzYxYzAuMzQ0LTAuMzM2LDAuODU4LTAuNDM0LDEuMzAxLTAuMjQ3bDAsMGMwLjQ0MiwwLjE4NiwwLjczMiwwLjYyMiwwLjczMiwxLjEwM2wwLDB2MTEuNTIxICAgICBjMCwwLjQ3OS0wLjI5LDAuOTE3LTAuNzMyLDEuMTAzbDAsMGMtMC4xNDksMC4wNjMtMC4zMDcsMC4wOTQtMC40NjMsMC4wOTRsMCwwQzIwLjQ0NywyMi45'+
			'NTcsMjAuMTQ1LDIyLjgzOSwxOS45MTYsMjIuNjE2ICAgICBMMTkuOTE2LDIyLjYxNnogTTE2LjU2OSwxNmwyLjk4OCwyLjkxOXYtNS44MzhMMTYuNTY5LDE2TDE2LjU2OSwxNnoiLz4KICAgPHBhdGggZD0iTTE0LjAxMSwyMi42MTZsLTUuODk2LTUuNzYxYy0wLjIzNC0wLjIyOS0wLjM2My0wLjU0LTAuMzYtMC44NjhsMCwwICAgICBjMC4wMDQtMC4zMjksMC4xMzktMC42MzcsMC4zNzktMC44NjFsMCwwbDYuMTYxLTUuNzYxYzAuNDgyLTAuNDUyLDEuMjQtMC40MjYsMS42OTEsMC4wNTdsMCwwICAgICBjMC40NTEsMC40ODIsMC40MjYsMS4yMzktMC4wNTYsMS42OWwwLDBsLTUuMjQ4LDQuOTA3bD'+
			'UsNC44ODZ2MC4wMDFjMC40NzIsMC40NjEsMC40ODEsMS4yMTksMC4wMiwxLjY5MWwwLDAgICAgIGMtMC4yMzUsMC4yMzktMC41NDUsMC4zNTktMC44NTYsMC4zNTlsMCwwQzE0LjU0NiwyMi45NTcsMTQuMjQ0LDIyLjg0NCwxNC4wMTEsMjIuNjE2TDE0LjAxMSwyMi42MTZ6Ii8+CiAgPC9nPgogPC9nPgogPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIiBzdHJva2Utd2lkdGg9IjAuMiIgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjMDAwMDAwIj4KICA8cGF0aCBkPSJNMy41LDE2QzMuNSw5LjA5Niw5LjA5NiwzLjUwMSwxNiwzLjVsMCww'+
			'YzYuOTA1LDAsMTIuNSw1LjU5NSwxMi41LDEyLjVsMCwwICAgIGMtMC4wMDEsNi45MDMtNS41OTYsMTIuNDk4LTEyLjUsMTIuNWwwLDBDOS4wOTYsMjguNDk4LDMuNSwyMi45MDMsMy41LDE2TDMuNSwxNnogTTguODUzLDguODUzICAgIEM3LjAyMiwxMC42ODYsNS44OTQsMTMuMjA1LDUuODkzLDE2bDAsMGMwLDIuNzk1LDEuMTI5LDUuMzE0LDIuOTYsNy4xNDZsMCwwYzEuODMzLDEuODMxLDQuMzUyLDIuOTYsNy4xNDYsMi45NmwwLDAgICAgYzIuNzk1LDAsNS4zMTUtMS4xMjksNy4xNDgtMi45NmwwLDBjMS44My0xLjgzMywyLjk1OS00LjM1MiwyLjk2LTcuMTQ2bDAsMGMtMC4wMDEtMi43OTUtMS'+
			'4xMy01LjMxNC0yLjk2LTcuMTQ3bDAsMCAgICBDMjEuMzE0LDcuMDIyLDE4Ljc5NSw1Ljg5NCwxNiw1Ljg5M2wwLDBDMTMuMjA1LDUuODk0LDEwLjY4Niw3LjAyMiw4Ljg1Myw4Ljg1M0w4Ljg1Myw4Ljg1M3oiLz4KICA8Zz4KICAgPHBhdGggZD0iTTE5LjkxNiwyMi42MTZsLTUuODk1LTUuNzZjLTAuMjMyLTAuMjI3LTAuMzYtMC41MzItMC4zNi0wLjg1NmwwLDBjMC0wLjMyNCwwLjEyOC0wLjYyOSwwLjM2LTAuODU1bDAsMCAgICAgbDUuODk1LTUuNzYxYzAuMzQ0LTAuMzM2LDAuODU4LTAuNDM0LDEuMzAxLTAuMjQ3bDAsMGMwLjQ0MiwwLjE4NiwwLjczMiwwLjYyMiwwLjczMiwxLjEwM2wwLDB2'+
			'MTEuNTIxICAgICBjMCwwLjQ3OS0wLjI5LDAuOTE3LTAuNzMyLDEuMTAzbDAsMGMtMC4xNDksMC4wNjMtMC4zMDcsMC4wOTQtMC40NjMsMC4wOTRsMCwwQzIwLjQ0NywyMi45NTcsMjAuMTQ1LDIyLjgzOSwxOS45MTYsMjIuNjE2ICAgICBMMTkuOTE2LDIyLjYxNnogTTE2LjU2OSwxNmwyLjk4OCwyLjkxOXYtNS44MzhMMTYuNTY5LDE2TDE2LjU2OSwxNnoiLz4KICAgPHBhdGggZD0iTTE0LjAxMSwyMi42MTZsLTUuODk2LTUuNzYxYy0wLjIzNC0wLjIyOS0wLjM2My0wLjU0LTAuMzYtMC44NjhsMCwwICAgICBjMC4wMDQtMC4zMjksMC4xMzktMC42MzcsMC4zNzktMC44NjFsMCwwbDYuMTYxLTUuNz'+
			'YxYzAuNDgyLTAuNDUyLDEuMjQtMC40MjYsMS42OTEsMC4wNTdsMCwwICAgICBjMC40NTEsMC40ODIsMC40MjYsMS4yMzktMC4wNTYsMS42OWwwLDBsLTUuMjQ4LDQuOTA3bDUsNC44ODZ2MC4wMDFjMC40NzIsMC40NjEsMC40ODEsMS4yMTksMC4wMiwxLjY5MWwwLDAgICAgIGMtMC4yMzUsMC4yMzktMC41NDUsMC4zNTktMC44NTYsMC4zNTlsMCwwQzE0LjU0NiwyMi45NTcsMTQuMjQ0LDIyLjg0NCwxNC4wMTEsMjIuNjE2TDE0LjAxMSwyMi42MTZ6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._pano_prev__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="Pano Prev";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pano_prev.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pano_prev.onclick=function (e) {
			player.openNext("{"+player.getPrevNode()+"}","");
		}
		me._pano_prev.onmouseenter=function (e) {
			me._pano_prev__img.style.visibility='hidden';
			me._pano_prev__imgo.style.visibility='inherit';
			me.elementMouseOver['pano_prev']=true;
			me._tt_pano_prev.logicBlock_visible();
		}
		me._pano_prev.onmouseleave=function (e) {
			me._pano_prev__img.style.visibility='inherit';
			me._pano_prev__imgo.style.visibility='hidden';
			me.elementMouseOver['pano_prev']=false;
			me._tt_pano_prev.logicBlock_visible();
		}
		me._pano_prev.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_pano_prev=document.createElement('div');
		els=me._tt_pano_prev__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_pano_prev";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_pano_prev.ggUpdateText=function() {
			var params = [];
			var hs = player._("\u4e0a\u4e00\u500b\u71b1\u9ede Previous Panorama", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_pano_prev.ggUpdateText();
		el.appendChild(els);
		me._tt_pano_prev.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_pano_prev.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_pano_prev.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_pano_prev.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_pano_prev.style.transition='left 0s, top 0s';
				if (me._tt_pano_prev.ggCurrentLogicStatePosition == 0) {
					me._tt_pano_prev.style.left = 'calc(50% - (0px / 2))';
					me._tt_pano_prev.style.top='-25px';
				}
				else {
					me._tt_pano_prev.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._tt_pano_prev.style.top='32px';
				}
			}
		}
		me._tt_pano_prev.logicBlock_position();
		me._tt_pano_prev.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['pano_prev'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_pano_prev.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_pano_prev.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_pano_prev.style.transition='left 0s, top 0s';
				if (me._tt_pano_prev.ggCurrentLogicStateVisible == 0) {
					me._tt_pano_prev.style.visibility=(Number(me._tt_pano_prev.style.opacity)>0||!me._tt_pano_prev.style.opacity)?'inherit':'hidden';
					me._tt_pano_prev.ggVisible=true;
				}
				else {
					me._tt_pano_prev.style.visibility="hidden";
					me._tt_pano_prev.ggVisible=false;
				}
			}
		}
		me._tt_pano_prev.logicBlock_visible();
		me._tt_pano_prev.ggUpdatePosition=function (useTransition) {
		}
		me._pano_prev.appendChild(me._tt_pano_prev);
		me._button_next_previous.appendChild(me._pano_prev);
		el=me._pano_next=document.createElement('div');
		els=me._pano_next__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeT0iMHB4IiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgYmFzZVByb2ZpbGU9ImJhc2ljIiB4PSIwcHgiIHdpZH'+
			'RoPSIzMnB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIHN0cm9rZS13aWR0aD0iMS41IiBvcGFjaXR5PSIwLjQiIHN0cm9rZT0iIzNDM0MzQyI+CiAgPHBhdGggZD0iTTMuNSwxNkMzLjUwMSw5LjA5Niw5LjA5NiwzLjUwMSwxNiwzLjVsMCwwYzYuOTA0LDAsMTIuNDk5LDUuNTk2LDEyLjUsMTIuNWwwLDAgICAgYy0wLjAwMSw2LjkwMy01LjU5NiwxMi40OTgtMTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OTgsMy41MDEsMjIuOTAzLDMuNSwxNkwzLjUsMTZ6IE01Ljg5MywxNmMwLDIuNzk1LDEuMTI5LDUuMzEzLDIuOTYs'+
			'Ny4xNDYgICAgbDAsMGMxLjgzMywxLjgzMSw0LjM1MiwyLjk2LDcuMTQ3LDIuOTZsMCwwYzIuNzk0LDAsNS4zMTQtMS4xMjksNy4xNDctMi45NmwwLDBjMS44My0xLjgzMiwyLjk1OS00LjM1MiwyLjk2LTcuMTQ2bDAsMCAgICBjLTAuMDAxLTIuNzk1LTEuMTMtNS4zMTMtMi45Ni03LjE0N2wwLDBDMjEuMzE0LDcuMDIyLDE4Ljc5NSw1Ljg5NCwxNiw1Ljg5M2wwLDBjLTIuNzk1LDAtNS4zMTQsMS4xMjktNy4xNDcsMi45NmwwLDAgICAgQzcuMDIyLDEwLjY4Nyw1Ljg5NCwxMy4yMDUsNS44OTMsMTZMNS44OTMsMTZMNS44OTMsMTZ6Ii8+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0xMC43ODQsMjIuODY0Yy'+
			'0wLjQ0My0wLjE4Ny0wLjczMi0wLjYyMi0wLjczMi0xLjEwM2wwLDBWMTAuMjM5YzAtMC40OCwwLjI5LTAuOTE3LDAuNzMyLTEuMTAzbDAsMCAgICAgYzAuNDQyLTAuMTg2LDAuOTU3LTAuMDg4LDEuMywwLjI0N2wwLDBsNS44OTUsNS43NjFjMC4yMzIsMC4yMjYsMC4zNiwwLjUzMSwwLjM2LDAuODU1bDAsMGMwLDAuMzI0LTAuMTI4LDAuNjI5LTAuMzYsMC44NTZsMCwwICAgICBsLTUuODk1LDUuNzZjLTAuMjI4LDAuMjI0LTAuNTMsMC4zNDEtMC44MzcsMC4zNDFsMCwwQzExLjA5LDIyLjk1NywxMC45MzMsMjIuOTI3LDEwLjc4NCwyMi44NjRMMTAuNzg0LDIyLjg2NHogTTEyLjQ0NCwxOC45MiAg'+
			'ICAgTDE1LjQzMiwxNmwtMi45ODctMi45MTlWMTguOTJMMTIuNDQ0LDE4LjkyeiIvPgogICA8cGF0aCBkPSJNMTYuMDEzLDIyLjU3OGMtMC40NTEtMC40ODItMC40MjYtMS4yMzksMC4wNTctMS42OWwwLDBsNS4yNDctNC45MDdsLTUtNC44ODcgICAgIGMtMC40NzMtMC40NjEtMC40ODItMS4yMTktMC4wMi0xLjY5MWwwLDBjMC40NjItMC40NzMsMS4yMTktMC40ODIsMS42OTItMC4wMmwwLDBsNS44OTUsNS43NjEgICAgIGMwLjIzNSwwLjIyOSwwLjM2NCwwLjU0LDAuMzYsMC44NjlsMCwwYy0wLjAwNCwwLjMyOS0wLjE0LDAuNjM2LTAuMzc5LDAuODYxbDAsMGwtNi4xNjEsNS43NjEgICAgIGMtMC'+
			'4yMywwLjIxNi0wLjUyNCwwLjMyMy0wLjgxNywwLjMyM2wwLDBDMTYuNTY3LDIyLjk1OCwxNi4yNDksMjIuODMsMTYuMDEzLDIyLjU3OEwxNi4wMTMsMjIuNTc4eiIvPgogIDwvZz4KIDwvZz4KIDxnIHN0cm9rZS13aWR0aD0iMC4yIiBmaWxsPSIjRkZGRkZGIiBzdHJva2U9IiMwMDAwMDAiPgogIDxwYXRoIGQ9Ik0zLjUsMTZDMy41MDEsOS4wOTYsOS4wOTYsMy41MDEsMTYsMy41bDAsMGM2LjkwNCwwLDEyLjQ5OSw1LjU5NiwxMi41LDEyLjVsMCwwICAgIGMtMC4wMDEsNi45MDMtNS41OTYsMTIuNDk4LTEyLjUsMTIuNWwwLDBDOS4wOTYsMjguNDk4LDMuNTAxLDIyLjkwMywzLjUsMTZMMy41LDE2'+
			'eiBNNS44OTMsMTZjMCwyLjc5NSwxLjEyOSw1LjMxMywyLjk2LDcuMTQ2ICAgIGwwLDBjMS44MzMsMS44MzEsNC4zNTIsMi45Niw3LjE0NywyLjk2bDAsMGMyLjc5NCwwLDUuMzE0LTEuMTI5LDcuMTQ3LTIuOTZsMCwwYzEuODMtMS44MzIsMi45NTktNC4zNTIsMi45Ni03LjE0NmwwLDAgICAgYy0wLjAwMS0yLjc5NS0xLjEzLTUuMzEzLTIuOTYtNy4xNDdsMCwwQzIxLjMxNCw3LjAyMiwxOC43OTUsNS44OTQsMTYsNS44OTNsMCwwYy0yLjc5NSwwLTUuMzE0LDEuMTI5LTcuMTQ3LDIuOTZsMCwwICAgIEM3LjAyMiwxMC42ODcsNS44OTQsMTMuMjA1LDUuODkzLDE2TDUuODkzLDE2TDUuODkzLDE2ei'+
			'IvPgogIDxnPgogICA8cGF0aCBkPSJNMTAuNzg0LDIyLjg2NGMtMC40NDMtMC4xODctMC43MzItMC42MjItMC43MzItMS4xMDNsMCwwVjEwLjIzOWMwLTAuNDgsMC4yOS0wLjkxNywwLjczMi0xLjEwM2wwLDAgICAgIGMwLjQ0Mi0wLjE4NiwwLjk1Ny0wLjA4OCwxLjMsMC4yNDdsMCwwbDUuODk1LDUuNzYxYzAuMjMyLDAuMjI2LDAuMzYsMC41MzEsMC4zNiwwLjg1NWwwLDBjMCwwLjMyNC0wLjEyOCwwLjYyOS0wLjM2LDAuODU2bDAsMCAgICAgbC01Ljg5NSw1Ljc2Yy0wLjIyOCwwLjIyNC0wLjUzLDAuMzQxLTAuODM3LDAuMzQxbDAsMEMxMS4wOSwyMi45NTcsMTAuOTMzLDIyLjkyNywxMC43ODQs'+
			'MjIuODY0TDEwLjc4NCwyMi44NjR6IE0xMi40NDQsMTguOTIgICAgIEwxNS40MzIsMTZsLTIuOTg3LTIuOTE5VjE4LjkyTDEyLjQ0NCwxOC45MnoiLz4KICAgPHBhdGggZD0iTTE2LjAxMywyMi41NzhjLTAuNDUxLTAuNDgyLTAuNDI2LTEuMjM5LDAuMDU3LTEuNjlsMCwwbDUuMjQ3LTQuOTA3bC01LTQuODg3ICAgICBjLTAuNDczLTAuNDYxLTAuNDgyLTEuMjE5LTAuMDItMS42OTFsMCwwYzAuNDYyLTAuNDczLDEuMjE5LTAuNDgyLDEuNjkyLTAuMDJsMCwwbDUuODk1LDUuNzYxICAgICBjMC4yMzUsMC4yMjksMC4zNjQsMC41NCwwLjM2LDAuODY5bDAsMGMtMC4wMDQsMC4zMjktMC4xNCwwLjYzNi'+
			'0wLjM3OSwwLjg2MWwwLDBsLTYuMTYxLDUuNzYxICAgICBjLTAuMjMsMC4yMTYtMC41MjQsMC4zMjMtMC44MTcsMC4zMjNsMCwwQzE2LjU2NywyMi45NTgsMTYuMjQ5LDIyLjgzLDE2LjAxMywyMi41NzhMMTYuMDEzLDIyLjU3OHoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._pano_next__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._pano_next__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeT0iMHB4IiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgYmFzZVByb2ZpbGU9ImJhc2ljIiB4PSIwcHgiIHdpZH'+
			'RoPSIzMnB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgc3Ryb2tlLXdpZHRoPSIxLjUiIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIj4KICA8cGF0aCBkPSJNMy41LDE2QzMuNTAxLDkuMDk2LDkuMDk2LDMuNTAxLDE2LDMuNWwwLDBjNi45MDQsMCwxMi40OTksNS41OTYsMTIuNSwxMi41bDAsMCAgICBjLTAuMDAxLDYuOTAzLTUuNTk2LDEyLjQ5OC0xMi41LDEyLjVsMCwwQzkuMDk2LDI4LjQ5OCwzLjUw'+
			'MSwyMi45MDMsMy41LDE2TDMuNSwxNnogTTUuODkzLDE2YzAsMi43OTUsMS4xMjksNS4zMTMsMi45Niw3LjE0NiAgICBsMCwwYzEuODMzLDEuODMxLDQuMzUyLDIuOTYsNy4xNDcsMi45NmwwLDBjMi43OTQsMCw1LjMxNC0xLjEyOSw3LjE0Ny0yLjk2bDAsMGMxLjgzLTEuODMyLDIuOTU5LTQuMzUyLDIuOTYtNy4xNDZsMCwwICAgIGMtMC4wMDEtMi43OTUtMS4xMy01LjMxMy0yLjk2LTcuMTQ3bDAsMEMyMS4zMTQsNy4wMjIsMTguNzk1LDUuODk0LDE2LDUuODkzbDAsMGMtMi43OTUsMC01LjMxNCwxLjEyOS03LjE0NywyLjk2bDAsMCAgICBDNy4wMjIsMTAuNjg3LDUuODk0LDEzLjIwNSw1Ljg5My'+
			'wxNkw1Ljg5MywxNkw1Ljg5MywxNnoiLz4KICA8Zz4KICAgPHBhdGggZD0iTTEwLjc4NCwyMi44NjRjLTAuNDQzLTAuMTg3LTAuNzMyLTAuNjIyLTAuNzMyLTEuMTAzbDAsMFYxMC4yMzljMC0wLjQ4LDAuMjktMC45MTcsMC43MzItMS4xMDNsMCwwICAgICBjMC40NDItMC4xODYsMC45NTctMC4wODgsMS4zLDAuMjQ3bDAsMGw1Ljg5NSw1Ljc2MWMwLjIzMiwwLjIyNiwwLjM2LDAuNTMxLDAuMzYsMC44NTVsMCwwYzAsMC4zMjQtMC4xMjgsMC42MjktMC4zNiwwLjg1NmwwLDAgICAgIGwtNS44OTUsNS43NmMtMC4yMjgsMC4yMjQtMC41MywwLjM0MS0wLjgzNywwLjM0MWwwLDBDMTEuMDksMjIuOTU3'+
			'LDEwLjkzMywyMi45MjcsMTAuNzg0LDIyLjg2NEwxMC43ODQsMjIuODY0eiBNMTIuNDQ0LDE4LjkyICAgICBMMTUuNDMyLDE2bC0yLjk4Ny0yLjkxOVYxOC45MkwxMi40NDQsMTguOTJ6Ii8+CiAgIDxwYXRoIGQ9Ik0xNi4wMTMsMjIuNTc4Yy0wLjQ1MS0wLjQ4Mi0wLjQyNi0xLjIzOSwwLjA1Ny0xLjY5bDAsMGw1LjI0Ny00LjkwN2wtNS00Ljg4NyAgICAgYy0wLjQ3My0wLjQ2MS0wLjQ4Mi0xLjIxOS0wLjAyLTEuNjkxbDAsMGMwLjQ2Mi0wLjQ3MywxLjIxOS0wLjQ4MiwxLjY5Mi0wLjAybDAsMGw1Ljg5NSw1Ljc2MSAgICAgYzAuMjM1LDAuMjI5LDAuMzY0LDAuNTQsMC4zNiwwLjg2OWwwLDBjLT'+
			'AuMDA0LDAuMzI5LTAuMTQsMC42MzYtMC4zNzksMC44NjFsMCwwbC02LjE2MSw1Ljc2MSAgICAgYy0wLjIzLDAuMjE2LTAuNTI0LDAuMzIzLTAuODE3LDAuMzIzbDAsMEMxNi41NjcsMjIuOTU4LDE2LjI0OSwyMi44MywxNi4wMTMsMjIuNTc4TDE2LjAxMywyMi41Nzh6Ii8+CiAgPC9nPgogPC9nPgogPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIiBzdHJva2Utd2lkdGg9IjAuMiIgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjMDAwMDAwIj4KICA8cGF0aCBkPSJNMy41LDE2QzMuNTAxLDkuMDk2LDkuMDk2LDMuNTAxLDE2LDMuNWwwLDBj'+
			'Ni45MDQsMCwxMi40OTksNS41OTYsMTIuNSwxMi41bDAsMCAgICBjLTAuMDAxLDYuOTAzLTUuNTk2LDEyLjQ5OC0xMi41LDEyLjVsMCwwQzkuMDk2LDI4LjQ5OCwzLjUwMSwyMi45MDMsMy41LDE2TDMuNSwxNnogTTUuODkzLDE2YzAsMi43OTUsMS4xMjksNS4zMTMsMi45Niw3LjE0NiAgICBsMCwwYzEuODMzLDEuODMxLDQuMzUyLDIuOTYsNy4xNDcsMi45NmwwLDBjMi43OTQsMCw1LjMxNC0xLjEyOSw3LjE0Ny0yLjk2bDAsMGMxLjgzLTEuODMyLDIuOTU5LTQuMzUyLDIuOTYtNy4xNDZsMCwwICAgIGMtMC4wMDEtMi43OTUtMS4xMy01LjMxMy0yLjk2LTcuMTQ3bDAsMEMyMS4zMTQsNy4wMjIsMT'+
			'guNzk1LDUuODk0LDE2LDUuODkzbDAsMGMtMi43OTUsMC01LjMxNCwxLjEyOS03LjE0NywyLjk2bDAsMCAgICBDNy4wMjIsMTAuNjg3LDUuODk0LDEzLjIwNSw1Ljg5MywxNkw1Ljg5MywxNkw1Ljg5MywxNnoiLz4KICA8Zz4KICAgPHBhdGggZD0iTTEwLjc4NCwyMi44NjRjLTAuNDQzLTAuMTg3LTAuNzMyLTAuNjIyLTAuNzMyLTEuMTAzbDAsMFYxMC4yMzljMC0wLjQ4LDAuMjktMC45MTcsMC43MzItMS4xMDNsMCwwICAgICBjMC40NDItMC4xODYsMC45NTctMC4wODgsMS4zLDAuMjQ3bDAsMGw1Ljg5NSw1Ljc2MWMwLjIzMiwwLjIyNiwwLjM2LDAuNTMxLDAuMzYsMC44NTVsMCwwYzAsMC4zMjQt'+
			'MC4xMjgsMC42MjktMC4zNiwwLjg1NmwwLDAgICAgIGwtNS44OTUsNS43NmMtMC4yMjgsMC4yMjQtMC41MywwLjM0MS0wLjgzNywwLjM0MWwwLDBDMTEuMDksMjIuOTU3LDEwLjkzMywyMi45MjcsMTAuNzg0LDIyLjg2NEwxMC43ODQsMjIuODY0eiBNMTIuNDQ0LDE4LjkyICAgICBMMTUuNDMyLDE2bC0yLjk4Ny0yLjkxOVYxOC45MkwxMi40NDQsMTguOTJ6Ii8+CiAgIDxwYXRoIGQ9Ik0xNi4wMTMsMjIuNTc4Yy0wLjQ1MS0wLjQ4Mi0wLjQyNi0xLjIzOSwwLjA1Ny0xLjY5bDAsMGw1LjI0Ny00LjkwN2wtNS00Ljg4NyAgICAgYy0wLjQ3My0wLjQ2MS0wLjQ4Mi0xLjIxOS0wLjAyLTEuNjkxbDAsMG'+
			'MwLjQ2Mi0wLjQ3MywxLjIxOS0wLjQ4MiwxLjY5Mi0wLjAybDAsMGw1Ljg5NSw1Ljc2MSAgICAgYzAuMjM1LDAuMjI5LDAuMzY0LDAuNTQsMC4zNiwwLjg2OWwwLDBjLTAuMDA0LDAuMzI5LTAuMTQsMC42MzYtMC4zNzksMC44NjFsMCwwbC02LjE2MSw1Ljc2MSAgICAgYy0wLjIzLDAuMjE2LTAuNTI0LDAuMzIzLTAuODE3LDAuMzIzbDAsMEMxNi41NjcsMjIuOTU4LDE2LjI0OSwyMi44MywxNi4wMTMsMjIuNTc4TDE2LjAxMywyMi41Nzh6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._pano_next__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="Pano Next";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 30px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pano_next.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pano_next.onclick=function (e) {
			player.openNext("{"+player.getNextNode()+"}","");
		}
		me._pano_next.onmouseenter=function (e) {
			me._pano_next__img.style.visibility='hidden';
			me._pano_next__imgo.style.visibility='inherit';
			me.elementMouseOver['pano_next']=true;
			me._tt_pano_next.logicBlock_visible();
		}
		me._pano_next.onmouseleave=function (e) {
			me._pano_next__img.style.visibility='inherit';
			me._pano_next__imgo.style.visibility='hidden';
			me.elementMouseOver['pano_next']=false;
			me._tt_pano_next.logicBlock_visible();
		}
		me._pano_next.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_pano_next=document.createElement('div');
		els=me._tt_pano_next__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_pano_next";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_pano_next.ggUpdateText=function() {
			var params = [];
			var hs = player._("\u4e0b\u4e00\u500b\u71b1\u9ede Next Panorama", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_pano_next.ggUpdateText();
		el.appendChild(els);
		me._tt_pano_next.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_pano_next.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_pano_next.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_pano_next.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_pano_next.style.transition='left 0s, top 0s';
				if (me._tt_pano_next.ggCurrentLogicStatePosition == 0) {
					me._tt_pano_next.style.left = 'calc(50% - (0px / 2))';
					me._tt_pano_next.style.top='-25px';
				}
				else {
					me._tt_pano_next.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._tt_pano_next.style.top='32px';
				}
			}
		}
		me._tt_pano_next.logicBlock_position();
		me._tt_pano_next.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['pano_next'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_pano_next.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_pano_next.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_pano_next.style.transition='left 0s, top 0s';
				if (me._tt_pano_next.ggCurrentLogicStateVisible == 0) {
					me._tt_pano_next.style.visibility=(Number(me._tt_pano_next.style.opacity)>0||!me._tt_pano_next.style.opacity)?'inherit':'hidden';
					me._tt_pano_next.ggVisible=true;
				}
				else {
					me._tt_pano_next.style.visibility="hidden";
					me._tt_pano_next.ggVisible=false;
				}
			}
		}
		me._tt_pano_next.logicBlock_visible();
		me._tt_pano_next.ggUpdatePosition=function (useTransition) {
		}
		me._pano_next.appendChild(me._tt_pano_next);
		me._button_next_previous.appendChild(me._pano_next);
		me.divSkin.appendChild(me._button_next_previous);
		el=me._button_zoom=document.createElement('div');
		el.ggId="button_zoom";
		el.ggDx=-48;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 23px;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((64px + 0px) / 2) - 48px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 64px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_zoom.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_zoom.ggUpdatePosition=function (useTransition) {
		}
		el=me._zoomout=document.createElement('div');
		els=me._zoomout__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeT0iMHB4IiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgYmFzZVByb2ZpbGU9ImJhc2ljIiB4PSIwcHgiIHdpZH'+
			'RoPSIzMnB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIHN0cm9rZS13aWR0aD0iMS41IiBvcGFjaXR5PSIwLjQiIHN0cm9rZT0iIzNDM0MzQyI+CiAgPHBhdGggZD0iTTIxLjc1OCwxNC44MDRIMTAuMjQxYy0wLjY2LDAtMS4xOTYsMC41MzUtMS4xOTYsMS4xOTZjMCwwLjY2MSwwLjUzNiwxLjE5NiwxLjE5NiwxLjE5NmgxMS41MTcgICAgYzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZDMjIuOTU1LDE1LjMzOSwyMi40MTksMTQuODA0LDIxLjc1OCwxNC44MDR6IE0xNiwzLjVDOS4wOTYsMy41LDMuNSw5LjA5'+
			'NiwzLjUsMTYgICAgYzAsNi45MDMsNS41OTYsMTIuNDk5LDEyLjUsMTIuNWM2LjkwMy0wLjAwMSwxMi40OTktNS41OTcsMTIuNS0xMi41QzI4LjQ5OSw5LjA5NiwyMi45MDMsMy41LDE2LDMuNXogTTIzLjE0NiwyMy4xNDYgICAgYy0xLjgzMiwxLjgzMS00LjM1MiwyLjk2LTcuMTQ2LDIuOTZzLTUuMzE0LTEuMTI5LTcuMTQ2LTIuOTZDNy4wMjIsMjEuMzE0LDUuODk0LDE4Ljc5NSw1Ljg5MywxNiAgICBjMC4wMDEtMi43OTUsMS4xMjktNS4zMTQsMi45NjEtNy4xNDdjMS44MzMtMS44MzEsNC4zNTItMi45Niw3LjE0Ni0yLjk2MWMyLjc5NSwwLjAwMSw1LjMxMywxLjEzLDcuMTQ2LDIuOTYxICAgIG'+
			'MxLjgzMiwxLjgzMywyLjk2LDQuMzUyLDIuOTYxLDcuMTQ3QzI2LjEwNiwxOC43OTUsMjQuOTc5LDIxLjMxNCwyMy4xNDYsMjMuMTQ2eiIvPgogPC9nPgogPGcgc3Ryb2tlLXdpZHRoPSIwLjIiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMCI+CiAgPHBhdGggZD0iTTIxLjc1OCwxNC44MDRIMTAuMjQxYy0wLjY2LDAtMS4xOTYsMC41MzUtMS4xOTYsMS4xOTZjMCwwLjY2MSwwLjUzNiwxLjE5NiwxLjE5NiwxLjE5NmgxMS41MTcgICAgYzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZDMjIuOTU1LDE1LjMzOSwyMi40MTksMTQuODA0LDIxLjc1OCwxNC44MDR6IE0xNiwzLjVDOS4w'+
			'OTYsMy41LDMuNSw5LjA5NiwzLjUsMTYgICAgYzAsNi45MDMsNS41OTYsMTIuNDk5LDEyLjUsMTIuNWM2LjkwMy0wLjAwMSwxMi40OTktNS41OTcsMTIuNS0xMi41QzI4LjQ5OSw5LjA5NiwyMi45MDMsMy41LDE2LDMuNXogTTIzLjE0NiwyMy4xNDYgICAgYy0xLjgzMiwxLjgzMS00LjM1MiwyLjk2LTcuMTQ2LDIuOTZzLTUuMzE0LTEuMTI5LTcuMTQ2LTIuOTZDNy4wMjIsMjEuMzE0LDUuODk0LDE4Ljc5NSw1Ljg5MywxNiAgICBjMC4wMDEtMi43OTUsMS4xMjktNS4zMTQsMi45NjEtNy4xNDdjMS44MzMtMS44MzEsNC4zNTItMi45Niw3LjE0Ni0yLjk2MWMyLjc5NSwwLjAwMSw1LjMxMywxLjEzLD'+
			'cuMTQ2LDIuOTYxICAgIGMxLjgzMiwxLjgzMywyLjk2LDQuMzUyLDIuOTYxLDcuMTQ3QzI2LjEwNiwxOC43OTUsMjQuOTc5LDIxLjMxNCwyMy4xNDYsMjMuMTQ2eiIvPgogPC9nPgo8L3N2Zz4K';
		me._zoomout__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._zoomout__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeT0iMHB4IiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgYmFzZVByb2ZpbGU9ImJhc2ljIiB4PSIwcHgiIHdpZH'+
			'RoPSIzMnB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgc3Ryb2tlLXdpZHRoPSIxLjUiIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIj4KICA8cGF0aCBkPSJNMjEuNzU4LDE0LjgwNEgxMC4yNDFjLTAuNjYsMC0xLjE5NiwwLjUzNS0xLjE5NiwxLjE5NmMwLDAuNjYxLDAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2aDExLjUxNyAgICBjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NkMyMi45NTUsMTUu'+
			'MzM5LDIyLjQxOSwxNC44MDQsMjEuNzU4LDE0LjgwNHogTTE2LDMuNUM5LjA5NiwzLjUsMy41LDkuMDk2LDMuNSwxNiAgICBjMCw2LjkwMyw1LjU5NiwxMi40OTksMTIuNSwxMi41YzYuOTAzLTAuMDAxLDEyLjQ5OS01LjU5NywxMi41LTEyLjVDMjguNDk5LDkuMDk2LDIyLjkwMywzLjUsMTYsMy41eiBNMjMuMTQ2LDIzLjE0NiAgICBjLTEuODMyLDEuODMxLTQuMzUyLDIuOTYtNy4xNDYsMi45NnMtNS4zMTQtMS4xMjktNy4xNDYtMi45NkM3LjAyMiwyMS4zMTQsNS44OTQsMTguNzk1LDUuODkzLDE2ICAgIGMwLjAwMS0yLjc5NSwxLjEyOS01LjMxNCwyLjk2MS03LjE0N2MxLjgzMy0xLjgzMSw0Lj'+
			'M1Mi0yLjk2LDcuMTQ2LTIuOTYxYzIuNzk1LDAuMDAxLDUuMzEzLDEuMTMsNy4xNDYsMi45NjEgICAgYzEuODMyLDEuODMzLDIuOTYsNC4zNTIsMi45NjEsNy4xNDdDMjYuMTA2LDE4Ljc5NSwyNC45NzksMjEuMzE0LDIzLjE0NiwyMy4xNDZ6Ii8+CiA8L2c+CiA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiIHN0cm9rZS13aWR0aD0iMC4yIiBmaWxsPSIjRkZGRkZGIiBzdHJva2U9IiMwMDAwMDAiPgogIDxwYXRoIGQ9Ik0yMS43NTgsMTQuODA0SDEwLjI0MWMtMC42NiwwLTEuMTk2LDAuNTM1LTEuMTk2LDEuMTk2YzAsMC42NjEsMC41'+
			'MzYsMS4xOTYsMS4xOTYsMS4xOTZoMTEuNTE3ICAgIGMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2QzIyLjk1NSwxNS4zMzksMjIuNDE5LDE0LjgwNCwyMS43NTgsMTQuODA0eiBNMTYsMy41QzkuMDk2LDMuNSwzLjUsOS4wOTYsMy41LDE2ICAgIGMwLDYuOTAzLDUuNTk2LDEyLjQ5OSwxMi41LDEyLjVjNi45MDMtMC4wMDEsMTIuNDk5LTUuNTk3LDEyLjUtMTIuNUMyOC40OTksOS4wOTYsMjIuOTAzLDMuNSwxNiwzLjV6IE0yMy4xNDYsMjMuMTQ2ICAgIGMtMS44MzIsMS44MzEtNC4zNTIsMi45Ni03LjE0NiwyLjk2cy01LjMxNC0xLjEyOS03LjE0Ni0yLjk2QzcuMDIyLDIxLjMxNCw1Lj'+
			'g5NCwxOC43OTUsNS44OTMsMTYgICAgYzAuMDAxLTIuNzk1LDEuMTI5LTUuMzE0LDIuOTYxLTcuMTQ3YzEuODMzLTEuODMxLDQuMzUyLTIuOTYsNy4xNDYtMi45NjFjMi43OTUsMC4wMDEsNS4zMTMsMS4xMyw3LjE0NiwyLjk2MSAgICBjMS44MzIsMS44MzMsMi45Niw0LjM1MiwyLjk2MSw3LjE0N0MyNi4xMDYsMTguNzk1LDI0Ljk3OSwyMS4zMTQsMjMuMTQ2LDIzLjE0NnoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._zoomout__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="zoomout";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 32px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._zoomout.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoomout.onmouseenter=function (e) {
			me._zoomout__img.style.visibility='hidden';
			me._zoomout__imgo.style.visibility='inherit';
			me.elementMouseOver['zoomout']=true;
			me._tt_zoomout.logicBlock_visible();
		}
		me._zoomout.onmousedown=function (e) {
			me.elementMouseDown['zoomout']=true;
		}
		me._zoomout.onmouseup=function (e) {
			me.elementMouseDown['zoomout']=false;
		}
		me._zoomout.onmouseleave=function (e) {
			me._zoomout__img.style.visibility='inherit';
			me._zoomout__imgo.style.visibility='hidden';
			me.elementMouseDown['zoomout']=false;
			me.elementMouseOver['zoomout']=false;
			me._tt_zoomout.logicBlock_visible();
		}
		me._zoomout.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['zoomout']) {
				player.changeFovLog(0.5,true);
			}
		}
		me._zoomout.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_zoomout=document.createElement('div');
		els=me._tt_zoomout__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_zoomout";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_zoomout.ggUpdateText=function() {
			var params = [];
			var hs = player._("\u7e2e\u5c0f Zoom Out", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_zoomout.ggUpdateText();
		el.appendChild(els);
		me._tt_zoomout.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_zoomout.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_zoomout.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_zoomout.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_zoomout.style.transition='left 0s, top 0s';
				if (me._tt_zoomout.ggCurrentLogicStatePosition == 0) {
					me._tt_zoomout.style.left = 'calc(50% - (0px / 2))';
					me._tt_zoomout.style.top='-25px';
				}
				else {
					me._tt_zoomout.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._tt_zoomout.style.top='32px';
				}
			}
		}
		me._tt_zoomout.logicBlock_position();
		me._tt_zoomout.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['zoomout'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_zoomout.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_zoomout.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_zoomout.style.transition='left 0s, top 0s';
				if (me._tt_zoomout.ggCurrentLogicStateVisible == 0) {
					me._tt_zoomout.style.visibility=(Number(me._tt_zoomout.style.opacity)>0||!me._tt_zoomout.style.opacity)?'inherit':'hidden';
					me._tt_zoomout.ggVisible=true;
				}
				else {
					me._tt_zoomout.style.visibility="hidden";
					me._tt_zoomout.ggVisible=false;
				}
			}
		}
		me._tt_zoomout.logicBlock_visible();
		me._tt_zoomout.ggUpdatePosition=function (useTransition) {
		}
		me._zoomout.appendChild(me._tt_zoomout);
		me._button_zoom.appendChild(me._zoomout);
		el=me._zoomin=document.createElement('div');
		els=me._zoomin__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeT0iMHB4IiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgYmFzZVByb2ZpbGU9ImJhc2ljIiB4PSIwcHgiIHdpZH'+
			'RoPSIzMnB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIHN0cm9rZS13aWR0aD0iMS41IiBvcGFjaXR5PSIwLjQiIHN0cm9rZT0iIzNDM0MzQyI+CiAgPHBhdGggZD0iTTIyLjA2MSwxNC44MDNoLTQuODY0VjkuOTM4YzAtMC42NjEtMC41MzYtMS4xOTctMS4xOTctMS4xOTdjLTAuNjYsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5N3Y0Ljg2NSAgICBIOS45MzhjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTdjMCwwLjY2LDAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2aDQuODY2djQuODY1YzAsMC42NiwwLjUzNiwx'+
			'LjE5NiwxLjE5NiwxLjE5NiAgICBjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtNC44NjVoNC44NjRjMC42NjEsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NkMyMy4yNTcsMTUuMzM5LDIyLjcyMiwxNC44MDMsMjIuMDYxLDE0LjgwM3ogICAgIE0xNiwzLjVDOS4wOTYsMy41LDMuNSw5LjA5NiwzLjUsMTZjMCw2LjkwMyw1LjU5NiwxMi40OTksMTIuNSwxMi41YzYuOTAzLTAuMDAxLDEyLjQ5OS01LjU5NywxMi41LTEyLjUgICAgQzI4LjQ5OSw5LjA5NiwyMi45MDMsMy41LDE2LDMuNXogTTIzLjE0NiwyMy4xNDZjLTEuODMyLDEuODMxLTQuMzUyLDIuOTYtNy4xNDYsMi45NnMtNS4zMT'+
			'QtMS4xMjktNy4xNDYtMi45NiAgICBDNy4wMjIsMjEuMzE0LDUuODk0LDE4Ljc5NSw1Ljg5MywxNmMwLjAwMS0yLjc5NSwxLjEyOS01LjMxNCwyLjk2MS03LjE0N2MxLjgzMy0xLjgzMSw0LjM1Mi0yLjk2LDcuMTQ2LTIuOTYxICAgIGMyLjc5NSwwLjAwMSw1LjMxMywxLjEzLDcuMTQ2LDIuOTYxYzEuODMyLDEuODMzLDIuOTYsNC4zNTIsMi45NjEsNy4xNDdDMjYuMTA2LDE4Ljc5NSwyNC45NzksMjEuMzE0LDIzLjE0NiwyMy4xNDZ6Ii8+CiA8L2c+CiA8ZyBzdHJva2Utd2lkdGg9IjAuMiIgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjMDAwMDAwIj4KICA8cGF0aCBkPSJNMjIuMDYxLDE0LjgwM2gt'+
			'NC44NjRWOS45MzhjMC0wLjY2MS0wLjUzNi0xLjE5Ny0xLjE5Ny0xLjE5N2MtMC42NiwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk3djQuODY1ICAgIEg5LjkzOGMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5N2MwLDAuNjYsMC41MzYsMS4xOTYsMS4xOTYsMS4xOTZoNC44NjZ2NC44NjVjMCwwLjY2LDAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2ICAgIGMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2di00Ljg2NWg0Ljg2NGMwLjY2MSwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2QzIzLjI1NywxNS4zMzksMjIuNzIyLDE0LjgwMywyMi4wNjEsMTQuODAzeiAgICAgTTE2LDMuNUM5Lj'+
			'A5NiwzLjUsMy41LDkuMDk2LDMuNSwxNmMwLDYuOTAzLDUuNTk2LDEyLjQ5OSwxMi41LDEyLjVjNi45MDMtMC4wMDEsMTIuNDk5LTUuNTk3LDEyLjUtMTIuNSAgICBDMjguNDk5LDkuMDk2LDIyLjkwMywzLjUsMTYsMy41eiBNMjMuMTQ2LDIzLjE0NmMtMS44MzIsMS44MzEtNC4zNTIsMi45Ni03LjE0NiwyLjk2cy01LjMxNC0xLjEyOS03LjE0Ni0yLjk2ICAgIEM3LjAyMiwyMS4zMTQsNS44OTQsMTguNzk1LDUuODkzLDE2YzAuMDAxLTIuNzk1LDEuMTI5LTUuMzE0LDIuOTYxLTcuMTQ3YzEuODMzLTEuODMxLDQuMzUyLTIuOTYsNy4xNDYtMi45NjEgICAgYzIuNzk1LDAuMDAxLDUuMzEzLDEuMTMs'+
			'Ny4xNDYsMi45NjFjMS44MzIsMS44MzMsMi45Niw0LjM1MiwyLjk2MSw3LjE0N0MyNi4xMDYsMTguNzk1LDI0Ljk3OSwyMS4zMTQsMjMuMTQ2LDIzLjE0NnoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._zoomin__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._zoomin__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeT0iMHB4IiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgYmFzZVByb2ZpbGU9ImJhc2ljIiB4PSIwcHgiIHdpZH'+
			'RoPSIzMnB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgc3Ryb2tlLXdpZHRoPSIxLjUiIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIj4KICA8cGF0aCBkPSJNMjIuMDYxLDE0LjgwM2gtNC44NjRWOS45MzhjMC0wLjY2MS0wLjUzNi0xLjE5Ny0xLjE5Ny0xLjE5N2MtMC42NiwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk3djQuODY1ICAgIEg5LjkzOGMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5'+
			'N2MwLDAuNjYsMC41MzYsMS4xOTYsMS4xOTYsMS4xOTZoNC44NjZ2NC44NjVjMCwwLjY2LDAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2ICAgIGMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2di00Ljg2NWg0Ljg2NGMwLjY2MSwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2QzIzLjI1NywxNS4zMzksMjIuNzIyLDE0LjgwMywyMi4wNjEsMTQuODAzeiAgICAgTTE2LDMuNUM5LjA5NiwzLjUsMy41LDkuMDk2LDMuNSwxNmMwLDYuOTAzLDUuNTk2LDEyLjQ5OSwxMi41LDEyLjVjNi45MDMtMC4wMDEsMTIuNDk5LTUuNTk3LDEyLjUtMTIuNSAgICBDMjguNDk5LDkuMDk2LDIyLjkwMywzLjUsMTYsMy'+
			'41eiBNMjMuMTQ2LDIzLjE0NmMtMS44MzIsMS44MzEtNC4zNTIsMi45Ni03LjE0NiwyLjk2cy01LjMxNC0xLjEyOS03LjE0Ni0yLjk2ICAgIEM3LjAyMiwyMS4zMTQsNS44OTQsMTguNzk1LDUuODkzLDE2YzAuMDAxLTIuNzk1LDEuMTI5LTUuMzE0LDIuOTYxLTcuMTQ3YzEuODMzLTEuODMxLDQuMzUyLTIuOTYsNy4xNDYtMi45NjEgICAgYzIuNzk1LDAuMDAxLDUuMzEzLDEuMTMsNy4xNDYsMi45NjFjMS44MzIsMS44MzMsMi45Niw0LjM1MiwyLjk2MSw3LjE0N0MyNi4xMDYsMTguNzk1LDI0Ljk3OSwyMS4zMTQsMjMuMTQ2LDIzLjE0NnoiLz4KIDwvZz4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRl'+
			'KDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgc3Ryb2tlLXdpZHRoPSIwLjIiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMCI+CiAgPHBhdGggZD0iTTIyLjA2MSwxNC44MDNoLTQuODY0VjkuOTM4YzAtMC42NjEtMC41MzYtMS4xOTctMS4xOTctMS4xOTdjLTAuNjYsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5N3Y0Ljg2NSAgICBIOS45MzhjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTdjMCwwLjY2LDAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2aDQuODY2djQuODY1YzAsMC42NiwwLjUzNiwxLjE5NiwxLjE5NiwxLjE5NiAgICBjMC42NjEsMCwxLjE5Ny0wLj'+
			'UzNiwxLjE5Ny0xLjE5NnYtNC44NjVoNC44NjRjMC42NjEsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NkMyMy4yNTcsMTUuMzM5LDIyLjcyMiwxNC44MDMsMjIuMDYxLDE0LjgwM3ogICAgIE0xNiwzLjVDOS4wOTYsMy41LDMuNSw5LjA5NiwzLjUsMTZjMCw2LjkwMyw1LjU5NiwxMi40OTksMTIuNSwxMi41YzYuOTAzLTAuMDAxLDEyLjQ5OS01LjU5NywxMi41LTEyLjUgICAgQzI4LjQ5OSw5LjA5NiwyMi45MDMsMy41LDE2LDMuNXogTTIzLjE0NiwyMy4xNDZjLTEuODMyLDEuODMxLTQuMzUyLDIuOTYtNy4xNDYsMi45NnMtNS4zMTQtMS4xMjktNy4xNDYtMi45NiAgICBDNy4wMjIsMjEuMzE0LDUu'+
			'ODk0LDE4Ljc5NSw1Ljg5MywxNmMwLjAwMS0yLjc5NSwxLjEyOS01LjMxNCwyLjk2MS03LjE0N2MxLjgzMy0xLjgzMSw0LjM1Mi0yLjk2LDcuMTQ2LTIuOTYxICAgIGMyLjc5NSwwLjAwMSw1LjMxMywxLjEzLDcuMTQ2LDIuOTYxYzEuODMyLDEuODMzLDIuOTYsNC4zNTIsMi45NjEsNy4xNDdDMjYuMTA2LDE4Ljc5NSwyNC45NzksMjEuMzE0LDIzLjE0NiwyMy4xNDZ6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._zoomin__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="zoomin";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._zoomin.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoomin.onmouseenter=function (e) {
			me._zoomin__img.style.visibility='hidden';
			me._zoomin__imgo.style.visibility='inherit';
			me.elementMouseOver['zoomin']=true;
			me._tt_zoomin.logicBlock_visible();
		}
		me._zoomin.onmousedown=function (e) {
			me.elementMouseDown['zoomin']=true;
		}
		me._zoomin.onmouseup=function (e) {
			me.elementMouseDown['zoomin']=false;
		}
		me._zoomin.onmouseleave=function (e) {
			me._zoomin__img.style.visibility='inherit';
			me._zoomin__imgo.style.visibility='hidden';
			me.elementMouseDown['zoomin']=false;
			me.elementMouseOver['zoomin']=false;
			me._tt_zoomin.logicBlock_visible();
		}
		me._zoomin.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['zoomin']) {
				player.changeFovLog(-0.5,true);
			}
		}
		me._zoomin.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_zoomin=document.createElement('div');
		els=me._tt_zoomin__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_zoomin";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_zoomin.ggUpdateText=function() {
			var params = [];
			var hs = player._("\u653e\u5927 Zoom In", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_zoomin.ggUpdateText();
		el.appendChild(els);
		me._tt_zoomin.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_zoomin.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_zoomin.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_zoomin.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_zoomin.style.transition='left 0s, top 0s';
				if (me._tt_zoomin.ggCurrentLogicStatePosition == 0) {
					me._tt_zoomin.style.left = 'calc(50% - (0px / 2))';
					me._tt_zoomin.style.top='-25px';
				}
				else {
					me._tt_zoomin.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._tt_zoomin.style.top='32px';
				}
			}
		}
		me._tt_zoomin.logicBlock_position();
		me._tt_zoomin.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['zoomin'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_zoomin.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_zoomin.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_zoomin.style.transition='left 0s, top 0s';
				if (me._tt_zoomin.ggCurrentLogicStateVisible == 0) {
					me._tt_zoomin.style.visibility=(Number(me._tt_zoomin.style.opacity)>0||!me._tt_zoomin.style.opacity)?'inherit':'hidden';
					me._tt_zoomin.ggVisible=true;
				}
				else {
					me._tt_zoomin.style.visibility="hidden";
					me._tt_zoomin.ggVisible=false;
				}
			}
		}
		me._tt_zoomin.logicBlock_visible();
		me._tt_zoomin.ggUpdatePosition=function (useTransition) {
		}
		me._zoomin.appendChild(me._tt_zoomin);
		me._button_zoom.appendChild(me._zoomin);
		me.divSkin.appendChild(me._button_zoom);
		el=me._screen_tint0=document.createElement('div');
		el.ggId="Screen Tint";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.686275);';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._screen_tint0.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._screen_tint0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_gallery') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._screen_tint0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._screen_tint0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._screen_tint0.style.transition='';
				if (me._screen_tint0.ggCurrentLogicStateVisible == 0) {
					me._screen_tint0.style.visibility=(Number(me._screen_tint0.style.opacity)>0||!me._screen_tint0.style.opacity)?'inherit':'hidden';
					me._screen_tint0.ggVisible=true;
				}
				else {
					me._screen_tint0.style.visibility="hidden";
					me._screen_tint0.ggVisible=false;
				}
			}
		}
		me._screen_tint0.logicBlock_visible();
		me._screen_tint0.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._screen_tint0);
		el=me._gallery=document.createElement('div');
		els=me._gallery__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="gallery";
		el.ggDx=0;
		el.ggDy=-2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 1px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((90% + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 2px) / 2) - 2%);';
		hs+='visibility : hidden;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._gallery.ggUpdateText=function() {
			var params = [];
			var hs = player._("text", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._gallery.ggUpdateText();
		el.appendChild(els);
		me._gallery.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._gallery.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._gallery.ggCurrentLogicStateSize != newLogicStateSize) {
				me._gallery.ggCurrentLogicStateSize = newLogicStateSize;
				me._gallery.style.transition='width 0s, height 0s';
				if (me._gallery.ggCurrentLogicStateSize == 0) {
					me._gallery.style.width='80%';
					me._gallery.style.height='90%';
					me._gallery.style.left = 'calc(50% - (80% / 2) - (2px / 2))';
					me._gallery.style.top = 'calc(50% - (90% / 2) - (2px / 2) + -2%)';
					skin.updateSize(me._gallery);
				}
				else {
					me._gallery.style.width='90%';
					me._gallery.style.height='80%';
					me._gallery.style.left = 'calc(50% - (90% / 2) - (2px / 2))';
					me._gallery.style.top = 'calc(50% - (80% / 2) - (2px / 2) + -2%)';
					skin.updateSize(me._gallery);
				}
			}
		}
		me._gallery.logicBlock_size();
		me._gallery.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_gallery') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._gallery.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._gallery.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._gallery.style.transition='width 0s, height 0s';
				if (me._gallery.ggCurrentLogicStateVisible == 0) {
					me._gallery.style.visibility=(Number(me._gallery.style.opacity)>0||!me._gallery.style.opacity)?'inherit':'hidden';
					me._gallery.ggVisible=true;
				}
				else {
					me._gallery.style.visibility="hidden";
					me._gallery.ggVisible=false;
				}
			}
		}
		me._gallery.logicBlock_visible();
		me._gallery.ggUpdatePosition=function (useTransition) {
		}
		el=me._gallery_close=document.createElement('div');
		els=me._gallery_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHI9IjI3IiBjeT0iMzIiIGN4PSIzMiIgc3R5bGU9ImZpbGw6IzRkNGQ0ZCIvPgogPC9nPgogPGcgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIiBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSI+CiAgPHJlY3Qgc3R5bGU9ImZpbGw6bm9uZSIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxsaW5lIHkxPSIyMC42OSIgeDE9IjIwLjY5IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZTZlNm'+
			'U2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDoycHgiIHgyPSI0My4zMSIgeTI9IjQzLjMxIi8+CiAgPGxpbmUgeTE9IjIwLjY5IiB4MT0iNDMuMzEiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjJweCIgeDI9IjIwLjY5IiB5Mj0iNDMuMzEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._gallery_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="gallery_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : -16px;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._gallery_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_close.onclick=function (e) {
			player.setVariableValue('vis_gallery', false);
		}
		me._gallery_close.ggUpdatePosition=function (useTransition) {
		}
		me._gallery.appendChild(me._gallery_close);
		me.divSkin.appendChild(me._gallery);
		el=me._timer_1=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=1000;
		el.ggId="Timer 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 51px;';
		hs+='position : absolute;';
		hs+='top : 427px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._timer_1.ggIsActive=function() {
			return (me._timer_1.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me._timer_1.ggTimestamp) / me._timer_1.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._timer_1.ggActivate=function () {
			player.setVariableValue('ht_ani', true);
		}
		me._timer_1.ggDeactivate=function () {
			player.setVariableValue('ht_ani', false);
		}
		me._timer_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._timer_1);
		el=me._logo=document.createElement('div');
		el.ggId="logo";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 56px;';
		hs+='left : 50px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 62px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._logo.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._logo.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize(true).width < 800)) && 
				((player.getViewerSize(true).width >= 400))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getViewerSize(true).width < 400))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._logo.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._logo.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._logo.style.transition='left 0s, bottom 0s, transform 0s';
				if (me._logo.ggCurrentLogicStatePosition == 0) {
					me._logo.style.left='20px';
					me._logo.style.bottom='10px';
				}
				else if (me._logo.ggCurrentLogicStatePosition == 1) {
					me._logo.style.left='10px';
					me._logo.style.bottom='10px';
				}
				else {
					me._logo.style.left='50px';
					me._logo.style.bottom='50px';
				}
			}
		}
		me._logo.logicBlock_position();
		me._logo.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._logo.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._logo.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._logo.style.transition='left 0s, bottom 0s, transform 0s';
				if (me._logo.ggCurrentLogicStateScaling == 0) {
					me._logo.ggParameter.sx = 0.4;
					me._logo.ggParameter.sy = 0.4;
					me._logo.style.transform=parameterToTransform(me._logo.ggParameter);
					skin.updateSize(me._logo);
				}
				else {
					me._logo.ggParameter.sx = 1;
					me._logo.ggParameter.sy = 1;
					me._logo.style.transform=parameterToTransform(me._logo.ggParameter);
					skin.updateSize(me._logo);
				}
			}
		}
		me._logo.logicBlock_scaling();
		me._logo.onmouseenter=function (e) {
			me.elementMouseOver['logo']=true;
			me._booking.logicBlock_visible();
		}
		me._logo.onmouseleave=function (e) {
			me.elementMouseOver['logo']=false;
			me._booking.logicBlock_visible();
		}
		me._logo.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_1_1=document.createElement('div');
		els=me._image_1_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1_1';
		els.loading = 'lazy';
		hs=basePath + 'images/image_1_1.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 120px;';
		hs+='left : calc(50% - ((120px + 0px) / 2) + 0%);';
		hs+='opacity : 0.6;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((120px + 0px) / 2) + 0%);';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_1_1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['image_1_1'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._image_1_1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._image_1_1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._image_1_1.style.transition='opacity 0s';
				if (me._image_1_1.ggCurrentLogicStateAlpha == 0) {
					me._image_1_1.style.visibility=me._image_1_1.ggVisible?'inherit':'hidden';
					me._image_1_1.style.opacity=1;
				}
				else {
					me._image_1_1.style.visibility=me._image_1_1.ggVisible?'inherit':'hidden';
					me._image_1_1.style.opacity=0.6;
				}
			}
		}
		me._image_1_1.logicBlock_alpha();
		me._image_1_1.onclick=function (e) {
			player.openUrl("https:\/\/oring-brother.com","_blank");
		}
		me._image_1_1.onmouseenter=function (e) {
			me.elementMouseOver['image_1_1']=true;
			me._image_1_1.logicBlock_alpha();
		}
		me._image_1_1.onmouseleave=function (e) {
			me.elementMouseOver['image_1_1']=false;
			me._image_1_1.logicBlock_alpha();
		}
		me._image_1_1.ggUpdatePosition=function (useTransition) {
		}
		me._logo.appendChild(me._image_1_1);
		el=me._booking=document.createElement('div');
		els=me._booking__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="booking";
		el.ggDx=0;
		el.ggDy=-90;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) - 90px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='0% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background : rgba(36,109,109,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		hs+="text-shadow: 20px 20px #5a5a5a;";
		els.setAttribute('style',hs);
		me._booking.ggUpdateText=function() {
			var params = [];
			var hs = player._("Visit our website", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._booking.ggUpdateText();
		el.appendChild(els);
		me._booking.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._booking.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['logo'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._booking.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._booking.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._booking.style.transition='';
				if (me._booking.ggCurrentLogicStateVisible == 0) {
					me._booking.style.visibility=(Number(me._booking.style.opacity)>0||!me._booking.style.opacity)?'inherit':'hidden';
					me._booking.ggVisible=true;
				}
				else {
					me._booking.style.visibility="hidden";
					me._booking.ggVisible=false;
				}
			}
		}
		me._booking.logicBlock_visible();
		me._booking.ggUpdatePosition=function (useTransition) {
		}
		me._logo.appendChild(me._booking);
		me.divSkin.appendChild(me._logo);
		el=me._screentint_image=document.createElement('div');
		el.ggId="screentint_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._screentint_image.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._screentint_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_image_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._screentint_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._screentint_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._screentint_image.style.transition='';
				if (me._screentint_image.ggCurrentLogicStateVisible == 0) {
					me._screentint_image.style.visibility=(Number(me._screentint_image.style.opacity)>0||!me._screentint_image.style.opacity)?'inherit':'hidden';
					me._screentint_image.ggVisible=true;
				}
				else {
					me._screentint_image.style.visibility="hidden";
					me._screentint_image.ggVisible=false;
				}
			}
		}
		me._screentint_image.logicBlock_visible();
		me._screentint_image.onclick=function (e) {
			player.setVariableValue('vis_image_popup', false);
		}
		me._screentint_image.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._screentint_image);
		el=me._image_popup=document.createElement('div');
		el.ggId="image_popup";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : 10%;';
		hs+='position : absolute;';
		hs+='top : 10%;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_popup.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_popup.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_image_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_popup.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_popup.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_popup.style.transition='';
				if (me._image_popup.ggCurrentLogicStateVisible == 0) {
					me._image_popup.style.visibility=(Number(me._image_popup.style.opacity)>0||!me._image_popup.style.opacity)?'inherit':'hidden';
					me._image_popup.ggVisible=true;
				}
				else {
					me._image_popup.style.visibility="hidden";
					me._image_popup.ggVisible=false;
				}
			}
		}
		me._image_popup.logicBlock_visible();
		me._image_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._loading_image=document.createElement('div');
		els=me._loading_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjY0IiBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjY0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+CiA8Y2lyY2xlIHI9IjAiIGN5PSIzIiBjeD0iMTYiPgogIDxhbmltYXRlIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBjYWxjTW9kZT0ic3BsaW5lIiB2YWx1ZXM9IjA7MzswOzAiIGF0dHJpYnV0ZU5hbWU9InIiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBkdXI9IjFzIiBiZWdpbj0iMCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKD'+
			'Q1IDE2IDE2KSIgcj0iMCIgY3k9IjMiIGN4PSIxNiI+CiAgPGFuaW1hdGUga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGNhbGNNb2RlPSJzcGxpbmUiIHZhbHVlcz0iMDszOzA7MCIgYXR0cmlidXRlTmFtZT0iciIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMXMiIGJlZ2luPSIwLjEyNXMiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSB0cmFuc2Zvcm09InJvdGF0ZSg5MCAxNiAxNikiIHI9IjAiIGN5PSIzIiBjeD0iMTYiPgogIDxhbmltYXRlIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4y'+
			'IDAuMiAwLjQgMC44IiBjYWxjTW9kZT0ic3BsaW5lIiB2YWx1ZXM9IjA7MzswOzAiIGF0dHJpYnV0ZU5hbWU9InIiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBkdXI9IjFzIiBiZWdpbj0iMC4yNXMiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSB0cmFuc2Zvcm09InJvdGF0ZSgxMzUgMTYgMTYpIiByPSIwIiBjeT0iMyIgY3g9IjE2Ij4KICA8YW5pbWF0ZSBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgY2FsY01vZGU9InNwbGluZSIgdmFsdWVzPSIwOzM7MDswIiBhdHRyaWJ1dGVOYW1lPSJyIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZS'+
			'IgZHVyPSIxcyIgYmVnaW49IjAuMzc1cyIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKDE4MCAxNiAxNikiIHI9IjAiIGN5PSIzIiBjeD0iMTYiPgogIDxhbmltYXRlIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBjYWxjTW9kZT0ic3BsaW5lIiB2YWx1ZXM9IjA7MzswOzAiIGF0dHJpYnV0ZU5hbWU9InIiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBkdXI9IjFzIiBiZWdpbj0iMC41cyIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKDIyNSAxNiAxNikiIHI9IjAiIGN5PSIzIiBj'+
			'eD0iMTYiPgogIDxhbmltYXRlIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBjYWxjTW9kZT0ic3BsaW5lIiB2YWx1ZXM9IjA7MzswOzAiIGF0dHJpYnV0ZU5hbWU9InIiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBkdXI9IjFzIiBiZWdpbj0iMC42MjVzIi8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgdHJhbnNmb3JtPSJyb3RhdGUoMjcwIDE2IDE2KSIgcj0iMCIgY3k9IjMiIGN4PSIxNiI+CiAgPGFuaW1hdGUga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGNhbGNNb2RlPS'+
			'JzcGxpbmUiIHZhbHVlcz0iMDszOzA7MCIgYXR0cmlidXRlTmFtZT0iciIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMXMiIGJlZ2luPSIwLjc1cyIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKDMxNSAxNiAxNikiIHI9IjAiIGN5PSIzIiBjeD0iMTYiPgogIDxhbmltYXRlIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBjYWxjTW9kZT0ic3BsaW5lIiB2YWx1ZXM9IjA7MzswOzAiIGF0dHJpYnV0ZU5hbWU9InIiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBkdXI9IjFzIiBiZWdpbj0iMC44NzVz'+
			'Ii8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgdHJhbnNmb3JtPSJyb3RhdGUoMTgwIDE2IDE2KSIgcj0iMCIgY3k9IjMiIGN4PSIxNiI+CiAgPGFuaW1hdGUga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGNhbGNNb2RlPSJzcGxpbmUiIHZhbHVlcz0iMDszOzA7MCIgYXR0cmlidXRlTmFtZT0iciIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMXMiIGJlZ2luPSIwLjVzIi8+CiA8L2NpcmNsZT4KPC9zdmc+Cg==';
		me._loading_image__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="loading_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._loading_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loading_image.ggUpdatePosition=function (useTransition) {
		}
		me._image_popup.appendChild(me._loading_image);
		el=me._popup_image=document.createElement('div');
		els=me._popup_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._popup_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._popup_image.ggSubElement.setAttribute('alt', player._(me._popup_image.ggAltText));
			me._popup_image.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._popup_image.ggText_untranslated = img;
			me._popup_image.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._popup_image.ggSubElement.style.width = '0px';
			me._popup_image.ggSubElement.style.height = '0px';
			me._popup_image.ggSubElement.src='';
			me._popup_image.ggSubElement.src=me._popup_image.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._popup_image.ggText != player._(me._popup_image.ggText_untranslated)) {
				me._popup_image.ggText = player._(me._popup_image.ggText_untranslated);
				me._popup_image.ggUpdateImage()
			}
		}
		el.ggText=el.ggText_untranslated=basePath + "";
		el.ggUpdateImage();
		els['ondragstart']=function() { return false; };
		el.ggUpdateText();
		el.ggId="popup_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._popup_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._popup_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_image_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._popup_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._popup_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._popup_image.style.transition='';
				if (me._popup_image.ggCurrentLogicStateVisible == 0) {
					me._popup_image.style.visibility=(Number(me._popup_image.style.opacity)>0||!me._popup_image.style.opacity)?'inherit':'hidden';
					me._popup_image.ggSubElement.src=me._popup_image.ggText;
					me._popup_image.ggVisible=true;
				}
				else {
					me._popup_image.style.visibility="hidden";
					me._popup_image.ggSubElement.src='';
					me._popup_image.ggVisible=false;
				}
			}
		}
		me._popup_image.logicBlock_visible();
		me._popup_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._popup_image.clientWidth;
			var parentHeight = me._popup_image.clientHeight;
			var img = me._popup_image__img;
			var aspectRatioDiv = me._popup_image.clientWidth / me._popup_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if (aspectRatioDiv > aspectRatioImg) {
				currentHeight = parentHeight;
				currentWidth = Math.round(parentHeight * aspectRatioImg);
				img.style.width='';
				img.style.height=parentHeight + 'px';
			} else {
				currentWidth = parentWidth;
				currentHeight = Math.round(parentWidth / aspectRatioImg);
				img.style.width=parentWidth + 'px';
				img.style.height='';
			};
			if (!me._popup_image.ggScrollbars || currentWidth < me._popup_image.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._popup_image.scrollLeft=currentWidth / 2 - me._popup_image.clientWidth / 2;
			}
			if (!me._popup_image.ggScrollbars || currentHeight < me._popup_image.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._popup_image.scrollTop=currentHeight / 2 - me._popup_image.clientHeight / 2;
			}
		}
		me._image_popup.appendChild(me._popup_image);
		me.divSkin.appendChild(me._image_popup);
		el=me._image_popup_close=document.createElement('div');
		els=me._image_popup_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIGhlaWdodD0iMz'+
			'JweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIwcHgiIHdpZHRoPSIzMnB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0yMS4xMzIsMTkuNDM5TDE3LjY5MiwxNmwzLjQ0LTMuNDRjMC40NjgtMC40NjcsMC40NjgtMS4yMjUsMC0xLjY5MyAgIGMtMC40NjctMC40NjctMS4yMjUtMC40NjctMS42OTEsMC4wMDFMMTYsMTQuMzA4bC0zLjQ0MS0zLjQ0MWMtMC40NjctMC40NjctMS4yMjQtMC40NjctMS42OTEsMC4w'+
			'MDEgICBjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI0LDAsMS42OUwxNC4zMDksMTZsLTMuNDQsMy40NGMtMC40NjcsMC40NjctMC40NjcsMS4yMjYsMCwxLjY5MmMwLjQ2NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwICAgbDMuNDQtMy40NGwzLjQzOSwzLjQzOWMwLjQ2OCwwLjQ2OCwxLjIyNSwwLjQ2OCwxLjY5MSwwLjAwMUMyMS41OTksMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjEgICBjLTQuODgyLTQuODgyLTEyLjc5Ni00Ljg4Mi0xNy42NzgsMGMtNC44ODEsNC44ODEtNC44ODEsMTIuNzk1LDAsMTcuNjc4YzQuODgxLDQuODgsMTIuNzk2LDQuODgsMT'+
			'cuNjc4LDAgICBDMjkuNzIsMTkuOTU2LDI5LjcyLDEyLjA0MiwyNC44MzksNy4xNjF6IE0xNiwyNi4xMDZjLTIuNTg5LTAuMDAxLTUuMTctMC45ODUtNy4xNDYtMi45NjFTNS44OTUsMTguNTksNS44OTQsMTYgICBjMC0yLjU5MSwwLjk4NC01LjE3LDIuOTYtNy4xNDdDMTAuODMsNi44NzgsMTMuNDA5LDUuODk0LDE2LDUuODk0YzIuNTkxLDAuMDAxLDUuMTcsMC45ODQsNy4xNDcsMi45NTkgICBjMS45NzYsMS45NzcsMi45NTcsNC41NTYsMi45Niw3LjE0N2MtMC4wMDEsMi41OTEtMC45ODUsNS4xNjktMi45Niw3LjE0OEMyMS4xNjksMjUuMTIyLDE4LjU5MSwyNi4xMDYsMTYsMjYuMTA2eiIgc3Ry'+
			'b2tlPSIjM0MzQzNDIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBzdHJva2Utd2lkdGg9IjAuMiIgZmlsbD0iI0ZGRkZGRiIgZD0iTTIxLjEzMiwxOS40MzlMMTcuNjkyLDE2bDMuNDQtMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNSwwLTEuNjkzICAgYy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5MSwwLjAwMUwxNiwxNC4zMDhsLTMuNDQxLTMuNDQxYy0wLjQ2Ny0wLjQ2Ny0xLjIyNC0wLjQ2Ny0xLjY5MSwwLjAwMSAgIGMtMC40NjcsMC40NjctMC40NjcsMS4yMjQsMCwxLjY5TDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNiwwLDEuNjkyYzAuNDY3LDAuND'+
			'Y3LDEuMjI2LDAuNDY3LDEuNjkyLDAgICBsMy40NC0zLjQ0bDMuNDM5LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI1LDAuNDY4LDEuNjkxLDAuMDAxQzIxLjU5OSwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MSAgIGMtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTUsMCwxNy42NzhjNC44ODEsNC44OCwxMi43OTYsNC44OCwxNy42NzgsMCAgIEMyOS43MiwxOS45NTYsMjkuNzIsMTIuMDQyLDI0LjgzOSw3LjE2MXogTTE2LDI2LjEwNmMtMi41ODktMC4wMDEtNS4xNy0wLjk4NS03LjE0Ni0yLjk2MVM1Ljg5'+
			'NSwxOC41OSw1Ljg5NCwxNiAgIGMwLTIuNTkxLDAuOTg0LTUuMTcsMi45Ni03LjE0N0MxMC44Myw2Ljg3OCwxMy40MDksNS44OTQsMTYsNS44OTRjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OSAgIGMxLjk3NiwxLjk3NywyLjk1Nyw0LjU1NiwyLjk2LDcuMTQ3Yy0wLjAwMSwyLjU5MS0wLjk4NSw1LjE2OS0yLjk2LDcuMTQ4QzIxLjE2OSwyNS4xMjIsMTguNTkxLDI2LjEwNiwxNiwyNi4xMDZ6IiBzdHJva2U9IiMwMDAwMDAiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._image_popup_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._image_popup_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIGhlaWdodD0iMz'+
			'JweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIwcHgiIHdpZHRoPSIzMnB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgb3BhY2l0eT0iMC40Ij4KICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTIxLjEzMiwxOS40MzlMMTcuNjkzLDE2bDMuNDM5LTMuNDRjMC40NjgtMC40NjcsMC40NjgtMS4yMjYsMC4wMDEtMS42OTMgICBjLTAuNDY3LTAuNDY3LTEuMjI1LTAuNDY3LTEuNjky'+
			'LDAuMDAxbC0zLjQ0LDMuNDRsLTMuNDQxLTMuNDQxYy0wLjQ2OC0wLjQ2OC0xLjIyNS0wLjQ2Ny0xLjY5MywwICAgYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNSwwLDEuNjkyTDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ni0wLjQ2NywxLjIyNCwwLDEuNjkxYzAuNDY3LDAuNDY3LDEuMjI2LDAuNDY3LDEuNjkyLDAuMDAxICAgbDMuNDQtMy40NGwzLjQ0LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI0LDAuNDY3LDEuNjkxLDBDMjEuNTk4LDIwLjY2NCwyMS42LDE5LjkwNywyMS4xMzIsMTkuNDM5eiBNMjQuODM5LDcuMTYxICAgYy00Ljg4Mi00Ljg4Mi0xMi43OTYtNC44ODItMTcuNjc4LD'+
			'BjLTQuODgxLDQuODgxLTQuODgxLDEyLjc5NiwwLDE3LjY3OGM0Ljg4Miw0Ljg4MSwxMi43OTYsNC44ODEsMTcuNjc4LDAgICBDMjkuNzIsMTkuOTU3LDI5LjcyMSwxMi4wNDMsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU5LDAtNS4xNzEtMC45ODQtNy4xNDYtMi45NTlDNi44NzgsMjEuMTcsNS44OTUsMTguNTkxLDUuODk0LDE2ICAgYzAtMi41OTEsMC45ODMtNS4xNywyLjk1OS03LjE0N2MxLjk3Ny0xLjk3Niw0LjU1Ni0yLjk1OSw3LjE0OC0yLjk2YzIuNTkxLDAuMDAxLDUuMTcsMC45ODQsNy4xNDcsMi45NTkgICBjMS45NzUsMS45NzcsMi45NTcsNC41NTYsMi45NTksNy4xNDdjLTAu'+
			'MDAxLDIuNTkyLTAuOTg0LDUuMTctMi45Niw3LjE0OEMyMS4xNywyNS4xMjMsMTguNTkxLDI2LjEwNywxNiwyNi4xMDZ6IiBzdHJva2U9IiMzQzNDM0MiLz4KIDwvZz4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSI+CiAgPHBhdGggc3Ryb2tlLXdpZHRoPSIwLjIiIGZpbGw9IiNGRkZGRkYiIGQ9Ik0yMS4xMzIsMTkuNDM5TDE3LjY5MywxNmwzLjQzOS0zLjQ0ICAgYzAuNDY4LTAuNDY3LDAuNDY4LTEuMjI2LDAuMDAxLTEuNjkzYy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5MiwwLjAwMWwtMy40NCwzLjQ0bC0zLjQ0MS0zLj'+
			'Q0MSAgIGMtMC40NjgtMC40NjgtMS4yMjUtMC40NjctMS42OTMsMGMtMC40NjcsMC40NjctMC40NjcsMS4yMjUsMCwxLjY5MkwxNC4zMDksMTZsLTMuNDQsMy40NGMtMC40NjcsMC40NjYtMC40NjcsMS4yMjQsMCwxLjY5MSAgIGMwLjQ2NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwLjAwMWwzLjQ0LTMuNDRsMy40NCwzLjQzOWMwLjQ2OCwwLjQ2OCwxLjIyNCwwLjQ2NywxLjY5MSwwICAgQzIxLjU5OCwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MWMtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTYs'+
			'MCwxNy42NzggICBjNC44ODIsNC44ODEsMTIuNzk2LDQuODgxLDE3LjY3OCwwQzI5LjcyLDE5Ljk1NywyOS43MjEsMTIuMDQzLDI0LjgzOSw3LjE2MXogTTE2LDI2LjEwNmMtMi41OSwwLTUuMTcxLTAuOTg0LTcuMTQ2LTIuOTU5ICAgQzYuODc4LDIxLjE3LDUuODk1LDE4LjU5MSw1Ljg5NCwxNmMwLTIuNTkxLDAuOTgzLTUuMTcsMi45NTktNy4xNDdjMS45NzctMS45NzYsNC41NTYtMi45NTksNy4xNDgtMi45NiAgIGMyLjU5MSwwLjAwMSw1LjE3LDAuOTg0LDcuMTQ3LDIuOTU5YzEuOTc1LDEuOTc3LDIuOTU3LDQuNTU2LDIuOTU5LDcuMTQ3Yy0wLjAwMSwyLjU5Mi0wLjk4NCw1LjE3LTIuOTYsNy'+
			'4xNDggICBDMjEuMTcsMjUuMTIzLDE4LjU5MSwyNi4xMDcsMTYsMjYuMTA2eiIgc3Ryb2tlPSIjMDAwMDAwIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._image_popup_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="image_popup_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_popup_close.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_popup_close.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_image_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_popup_close.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_popup_close.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_popup_close.style.transition='';
				if (me._image_popup_close.ggCurrentLogicStateVisible == 0) {
					me._image_popup_close.style.visibility=(Number(me._image_popup_close.style.opacity)>0||!me._image_popup_close.style.opacity)?'inherit':'hidden';
					me._image_popup_close.ggVisible=true;
				}
				else {
					me._image_popup_close.style.visibility="hidden";
					me._image_popup_close.ggVisible=false;
				}
			}
		}
		me._image_popup_close.logicBlock_visible();
		me._image_popup_close.onclick=function (e) {
			player.setVariableValue('vis_image_popup', false);
		}
		me._image_popup_close.onmouseenter=function (e) {
			me._image_popup_close__img.style.visibility='hidden';
			me._image_popup_close__imgo.style.visibility='inherit';
			me.elementMouseOver['image_popup_close']=true;
		}
		me._image_popup_close.onmouseleave=function (e) {
			me._image_popup_close__img.style.visibility='inherit';
			me._image_popup_close__imgo.style.visibility='hidden';
			me.elementMouseOver['image_popup_close']=false;
		}
		me._image_popup_close.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_popup_close);
		el=me.__=document.createElement('div');
		el.ggId="\u6211\u662f\u5206\u9694\u7dda";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='height : 20px;';
		hs+='left : 62px;';
		hs+='position : absolute;';
		hs+='top : 564px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me.__);
		el=me._screen_tint=document.createElement('div');
		el.ggId="screen_tint";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._screen_tint.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._screen_tint.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('pop_video') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._screen_tint.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._screen_tint.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._screen_tint.style.transition='';
				if (me._screen_tint.ggCurrentLogicStateVisible == 0) {
					me._screen_tint.style.visibility=(Number(me._screen_tint.style.opacity)>0||!me._screen_tint.style.opacity)?'inherit':'hidden';
					me._screen_tint.ggVisible=true;
				}
				else {
					me._screen_tint.style.visibility="hidden";
					me._screen_tint.ggVisible=false;
				}
			}
		}
		me._screen_tint.logicBlock_visible();
		me._screen_tint.onclick=function (e) {
			player.setVariableValue('pop_video', false);
			player.mute("_all");
			player.unmute("_all");
		}
		me._screen_tint.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._screen_tint);
		el=me._pop_1=document.createElement('div');
		el.ggId="pop_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 9px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pop_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._pop_1.onclick=function (e) {
			me._pop_video_player.ggInitMedia("media\/video1.m4v");
			player.setVariableValue('pop_video', true);
			player.setVolume("_background",0.1);
		}
		me._pop_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._pop_1);
		el=me._pop_video=document.createElement('div');
		el.ggId="pop_video";
		el.ggDx=-1;
		el.ggDy=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : calc(70vw * 9/16);';
		hs+='left : calc(50% - ((70vw + 0px) / 2) - 1px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(70vw * 9/16) + 0px) / 2) - 1px);';
		hs+='visibility : hidden;';
		hs+='width : 70vw;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._pop_video.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._pop_video.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('pop_video') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._pop_video.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._pop_video.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._pop_video.style.transition='transform 500ms ease-in-out 1000ms, opacity 500ms ease-in-out 1000ms';
				if (me._pop_video.ggCurrentLogicStateScaling == 0) {
					me._pop_video.ggParameter.sx = 1;
					me._pop_video.ggParameter.sy = 1;
					me._pop_video.style.transform=parameterToTransform(me._pop_video.ggParameter);
					setTimeout(function() {skin.updateSize(me._pop_video);}, 1550);
				}
				else {
					me._pop_video.ggParameter.sx = 0.5;
					me._pop_video.ggParameter.sy = 0.5;
					me._pop_video.style.transform=parameterToTransform(me._pop_video.ggParameter);
					setTimeout(function() {skin.updateSize(me._pop_video);}, 1550);
				}
			}
		}
		me._pop_video.logicBlock_scaling();
		me._pop_video.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('pop_video') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._pop_video.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._pop_video.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._pop_video.style.transition='transform 500ms ease-in-out 1000ms, opacity 500ms ease-in-out 1000ms';
				if (me._pop_video.ggCurrentLogicStateVisible == 0) {
					me._pop_video.style.visibility=(Number(me._pop_video.style.opacity)>0||!me._pop_video.style.opacity)?'inherit':'hidden';
					me._pop_video.ggVisible=true;
				}
				else {
					me._pop_video.style.visibility="hidden";
					me._pop_video.ggVisible=false;
				}
			}
		}
		me._pop_video.logicBlock_visible();
		me._pop_video.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('pop_video') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._pop_video.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._pop_video.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._pop_video.style.transition='transform 500ms ease-in-out 1000ms, opacity 500ms ease-in-out 1000ms';
				if (me._pop_video.ggCurrentLogicStateAlpha == 0) {
					me._pop_video.style.visibility=me._pop_video.ggVisible?'inherit':'hidden';
					me._pop_video.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._pop_video.style.opacity == 0.0) { me._pop_video.style.visibility="hidden"; } }, 1505);
					me._pop_video.style.opacity=0;
				}
			}
		}
		me._pop_video.logicBlock_alpha();
		me._pop_video.ggUpdatePosition=function (useTransition) {
		}
		el=me._pop_video_player=document.createElement('div');
		me._pop_video_player.seekbars = [];
		me._pop_video_player.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._pop_video_player.seekbars.length; i++) {
					var seekbar = me.findElements(me._pop_video_player.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._pop_video_player.hasChildNodes()) {
				me._pop_video_player.removeChild(me._pop_video_player.lastChild);
			}
			if (me._pop_video_player__vid) {
				me._pop_video_player__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
				if (me._pop_video_player.ggVideoNotLoaded == false && me._pop_video_player.ggDeactivate && player.isPlaying('pop_video_player')) { me._pop_video_player.ggDeactivate(); }
				me._pop_video_player.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('pop_video_player');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._pop_video_player.ggVideoNotLoaded = false;
			me._pop_video_player__vid=document.createElement('video');
			me._pop_video_player__vid.className='ggskin ggskin_video';
			me._pop_video_player__vid.setAttribute('width', '100%');
			me._pop_video_player__vid.setAttribute('height', '100%');
			me._pop_video_player__vid.setAttribute('crossOrigin', 'anonymous');
			me._pop_video_player__vid.setAttribute('controlsList', 'nodownload');
			me._pop_video_player__vid.setAttribute('disablepictureinpicture', 'true');
			me._pop_video_player__vid.setAttribute('oncontextmenu', 'return false;');
			me._pop_video_player__vid.setAttribute('autoplay', '');
			me._pop_video_player__source=document.createElement('source');
			me._pop_video_player__source.setAttribute('src', media);
			me._pop_video_player__vid.setAttribute('playsinline', 'playsinline');
			me._pop_video_player__vid.setAttribute('style', ';');
			me._pop_video_player__vid.style.outline = 'none';
			me._pop_video_player__vid.appendChild(me._pop_video_player__source);
			me._pop_video_player.appendChild(me._pop_video_player__vid);
			var videoEl = player.registerVideoElement('pop_video_player', me._pop_video_player__vid);
			videoEl.autoplay = true;
			player.changeVolume('pop_video_player', 0.0);
			notifySeekbars();
			me._pop_video_player.ggVideoSource = media;
		}
		el.ggId="pop_video_player";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pop_video_player.ggIsActive=function() {
			if (me._pop_video_player__vid != null) {
				return (me._pop_video_player__vid.paused == false && me._pop_video_player__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pop_video_player.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('pop_video') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._pop_video_player.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._pop_video_player.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._pop_video_player.style.transition='';
				if (me._pop_video_player.ggCurrentLogicStateVisible == 0) {
					me._pop_video_player.style.visibility=(Number(me._pop_video_player.style.opacity)>0||!me._pop_video_player.style.opacity)?'inherit':'hidden';
					if (me._pop_video_player.ggVideoNotLoaded) {
						me._pop_video_player.ggInitMedia(me._pop_video_player.ggVideoSource);
					}
					me._pop_video_player.ggVisible=true;
				}
				else {
					me._pop_video_player.style.visibility="hidden";
					me._pop_video_player.ggInitMedia('');
					me._pop_video_player.ggVisible=false;
				}
			}
		}
		me._pop_video_player.logicBlock_visible();
		me._pop_video_player.ggUpdatePosition=function (useTransition) {
		}
		me._pop_video.appendChild(me._pop_video_player);
		el=me._close=document.createElement('div');
		els=me._close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2UtbGluZWpvaW49InJvdW5kIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0cm9rZT0iY3VycmVudENvbG9yIiBoZWlnaHQ9IjI0IiBzdHJva2Utd2lkdGg9IjEuNSIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLXgtY2lyY2xlIiB3aWR0aD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiA8Y2lyY2xlIHI9IjEwIiBjeT0iMTIiIGN4PSIxMiIvPgogPGxpbmUgeTE9IjkiIHgxPSIxNSIgeDI9IjkiIHkyPSIxNSIvPgogPGxpbmUgeTE9IjkiIHgxPSI5IiB4Mj0iMTUiIHkyPSIxNSIvPgo8L3N2Zz4K';
		me._close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : -36px;';
		hs+='top : -36px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._close.onclick=function (e) {
			player.setVariableValue('pop_video', false);
			player.setVolume("_background",1);
			player.mute("_all");
			player.unmute("_all");
		}
		me._close.ggUpdatePosition=function (useTransition) {
		}
		me._pop_video.appendChild(me._close);
		me.divSkin.appendChild(me._pop_video);
		el=me._sounds_splashscreen=document.createElement('div');
		el.ggId="sounds_splashscreen";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : calc(10vw* 9/16);';
		hs+='left : calc(50% - ((15vw + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(10vw* 9/16) + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 15vw;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sounds_splashscreen.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._sounds_splashscreen.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._sounds_splashscreen.ggCurrentLogicStateSize != newLogicStateSize) {
				me._sounds_splashscreen.ggCurrentLogicStateSize = newLogicStateSize;
				me._sounds_splashscreen.style.transition='width 0s, height 0s';
				if (me._sounds_splashscreen.ggCurrentLogicStateSize == 0) {
					me._sounds_splashscreen.style.width='35vw';
					me._sounds_splashscreen.style.height='calc(25vw* 9/16)';
					me._sounds_splashscreen.style.left = 'calc(50% - (35vw / 2))';
					me._sounds_splashscreen.style.top = 'calc(50% - (calc(25vw* 9/16) / 2))';
					skin.updateSize(me._sounds_splashscreen);
				}
				else {
					me._sounds_splashscreen.style.width='15vw';
					me._sounds_splashscreen.style.height='calc(10vw* 9/16)';
					me._sounds_splashscreen.style.left = 'calc(50% - (15vw / 2))';
					me._sounds_splashscreen.style.top = 'calc(50% - (calc(10vw* 9/16) / 2))';
					skin.updateSize(me._sounds_splashscreen);
				}
			}
		}
		me._sounds_splashscreen.logicBlock_size();
		me._sounds_splashscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_sounds_splashscreen') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._sounds_splashscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._sounds_splashscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._sounds_splashscreen.style.transition='width 0s, height 0s';
				if (me._sounds_splashscreen.ggCurrentLogicStateVisible == 0) {
					me._sounds_splashscreen.style.visibility=(Number(me._sounds_splashscreen.style.opacity)>0||!me._sounds_splashscreen.style.opacity)?'inherit':'hidden';
					me._sounds_splashscreen.ggVisible=true;
				}
				else {
					me._sounds_splashscreen.style.visibility="hidden";
					me._sounds_splashscreen.ggVisible=false;
				}
			}
		}
		me._sounds_splashscreen.logicBlock_visible();
		me._sounds_splashscreen.ggUpdatePosition=function (useTransition) {
		}
		el=me._sounds_splashscreen_bg=document.createElement('div');
		el.ggId="sounds_splashscreen_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(136,136,136,0.470588);';
		hs+='border : 3px solid #000000;';
		hs+='border-radius : 32px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='backdrop-filter: blur(5px); -webkit-backdrop-filter: blur(5px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sounds_splashscreen_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sounds_splashscreen_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._sounds_off=document.createElement('div');
		els=me._sounds_off__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgogPGcgaWQ9Imljb25hIj4KICA8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjM0LjcsMTkuOCAyMy43LDI3LjUgMTYsMjcuNSAxNiwzNi41IDIzLjcsMzYuNSAzNC43LDQ0LjIgICIvPgogIDxwYXRoIGQ9Ik0zOS4xLDIzLjVjNC43LDQuNyw0LjcsMTIuMywwLDE3YzAsMCwwLDAsMCwwIiBjbGFzcz0ic3QwIi8+CiAgPHBhdGggZD0iTTQzLjMsMjAuN2M2LjIsNi4yLDYuMiwxNi40LDAsMjIuNiIgY2xh'+
			'c3M9InN0MCIvPgogPC9nPgogPGcgaWQ9ImJhcnJhIj4KICA8bGluZSB5MT0iNDcuOCIgeDE9IjE1LjgiIHgyPSI0Ny44IiBjbGFzcz0ic3QwIiB5Mj0iMTUuOCIvPgogPC9nPgo8L3N2Zz4K';
		me._sounds_off__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._sounds_off__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHg9IjBweCIgdmlld0JveD0iMCAwIDY0IDY0IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bG'+
			'luayI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgogPGcgaWQ9Imljb25hIj4KICA8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjM0LjcsMTkuOCAyMy43LDI3LjUgMTYsMjcuNSAxNiwzNi41IDIzLjcsMzYuNSAzNC43LDQ0LjIgICIvPgogIDxwYXRoIGQ9Ik0zOS4xLDIzLjVjNC43LDQuNyw0LjcsMTIuMywwLDE3YzAsMCwwLDAsMCwwIiBjbGFzcz0ic3QwIi8+CiAgPHBhdGggZD0iTTQzLjMsMjAuN2M2LjIsNi4yLDYuMiwxNi40LDAsMjIuNiIgY2xh'+
			'c3M9InN0MCIvPgogPC9nPgogPGcgaWQ9ImJhcnJhIj4KICA8bGluZSB5MT0iNDcuOCIgeDE9IjE1LjgiIHgyPSI0Ny44IiBjbGFzcz0ic3QwIiB5Mj0iMTUuOCIvPgogPC9nPgo8L3N2Zz4K';
		me._sounds_off__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="sounds_off";
		el.ggDx=23.44;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg svg_shadow";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 91.4286%;';
		hs+='left : calc(50% - ((40% + 0px) / 2) + 23.44%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((91.4286% + 0px) / 2) + 0%);';
		hs+='visibility : inherit;';
		hs+='width : 40%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sounds_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sounds_off.onclick=function (e) {
			player.mute("_all");
			player.setVariableValue('toggle_audio', false);
			player.setVariableValue('sounds_splashscreen_accepted', true);
		}
		me._sounds_off.onmouseenter=function (e) {
			me._sounds_off__img.style.visibility='hidden';
			me._sounds_off__imgo.style.visibility='inherit';
			me.elementMouseOver['sounds_off']=true;
		}
		me._sounds_off.onmouseleave=function (e) {
			me._sounds_off__img.style.visibility='inherit';
			me._sounds_off__imgo.style.visibility='hidden';
			me.elementMouseOver['sounds_off']=false;
		}
		me._sounds_off.ggUpdatePosition=function (useTransition) {
		}
		me._sounds_splashscreen_bg.appendChild(me._sounds_off);
		el=me._sounds_on=document.createElement('div');
		els=me._sounds_on__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgogPGcgaWQ9Imljb25hIj4KICA8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjM0LjcsMTkuOCAyMy43LDI3LjUgMTYsMjcuNSAxNiwzNi41IDIzLjcsMzYuNSAzNC43LDQ0LjIgICIvPgogIDxwYXRoIGQ9Ik0zOS4xLDIzLjVjNC43LDQuNyw0LjcsMTIuMywwLDE3YzAsMCwwLDAsMCwwIiBjbGFzcz0ic3QwIi8+CiAgPHBhdGggZD0iTTQzLjMsMjAuN2M2LjIsNi4yLDYuMiwxNi40LDAsMjIuNiIgY2xh'+
			'c3M9InN0MCIvPgogPC9nPgo8L3N2Zz4K';
		me._sounds_on__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._sounds_on__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHg9IjBweCIgdmlld0JveD0iMCAwIDY0IDY0IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bG'+
			'luayI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgogPGcgaWQ9Imljb25hIj4KICA8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjM0LjcsMTkuOCAyMy43LDI3LjUgMTYsMjcuNSAxNiwzNi41IDIzLjcsMzYuNSAzNC43LDQ0LjIgICIvPgogIDxwYXRoIGQ9Ik0zOS4xLDIzLjVjNC43LDQuNyw0LjcsMTIuMywwLDE3YzAsMCwwLDAsMCwwIiBjbGFzcz0ic3QwIi8+CiAgPHBhdGggZD0iTTQzLjMsMjAuN2M2LjIsNi4yLDYuMiwxNi40LDAsMjIuNiIgY2xh'+
			'c3M9InN0MCIvPgogPC9nPgo8L3N2Zz4K';
		me._sounds_on__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="sounds_on";
		el.ggDx=-23.4375;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg svg_shadow";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 91.4286%;';
		hs+='left : calc(50% - ((40% + 0px) / 2) - 23.4375%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((91.4286% + 0px) / 2) + 0%);';
		hs+='visibility : inherit;';
		hs+='width : 40%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sounds_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sounds_on.onclick=function (e) {
			player.startAutoplayMedia();
			player.setVariableValue('sounds_splashscreen_accepted', true);
		}
		me._sounds_on.onmouseenter=function (e) {
			me._sounds_on__img.style.visibility='hidden';
			me._sounds_on__imgo.style.visibility='inherit';
			me.elementMouseOver['sounds_on']=true;
		}
		me._sounds_on.onmouseleave=function (e) {
			me._sounds_on__img.style.visibility='inherit';
			me._sounds_on__imgo.style.visibility='hidden';
			me.elementMouseOver['sounds_on']=false;
		}
		me._sounds_on.ggUpdatePosition=function (useTransition) {
		}
		me._sounds_splashscreen_bg.appendChild(me._sounds_on);
		me._sounds_splashscreen.appendChild(me._sounds_splashscreen_bg);
		me.divSkin.appendChild(me._sounds_splashscreen);
		el=me._button_mute=document.createElement('div');
		el.ggId="button_mute";
		el.ggDx=134;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 23px;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 134px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_mute.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_mute.ggUpdatePosition=function (useTransition) {
		}
		el=me._unmute=document.createElement('div');
		els=me._unmute__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeT0iMHB4IiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgYmFzZVByb2ZpbGU9ImJhc2ljIiB4PSIwcHgiIHdpZH'+
			'RoPSIzMnB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIHN0cm9rZS13aWR0aD0iMS41IiBvcGFjaXR5PSIwLjQiIHN0cm9rZT0iIzNDM0MzQyI+CiAgPHBhdGggZD0iTTE2LDMuNUM5LjA5NiwzLjUsMy41LDkuMDk2LDMuNSwxNmMwLDYuOTA0LDUuNTk2LDEyLjQ5OSwxMi41LDEyLjVjNi45MDMtMC4wMDEsMTIuNDk5LTUuNTk2LDEyLjUtMTIuNSAgICBDMjguNDk5LDkuMDk2LDIyLjkwMywzLjUsMTYsMy41eiBNMjMuMTQ3LDIzLjE0N2MtMS44MzMsMS44My00LjM1MywyLjk1OS03LjE0NywyLjk2Yy0yLjc5NS0wLjAw'+
			'MS01LjMxNC0xLjEzLTcuMTQ2LTIuOTYgICAgQzcuMDIyLDIxLjMxNCw1Ljg5NCwxOC43OTUsNS44OTMsMTZjMC4wMDEtMi43OTUsMS4xMjktNS4zMTQsMi45NjEtNy4xNDdjMS44MzMtMS44MzEsNC4zNTItMi45Niw3LjE0Ni0yLjk2MSAgICBjMi43OTUsMC4wMDEsNS4zMTMsMS4xMyw3LjE0NywyLjk2MWMxLjgzMSwxLjgzMywyLjk1OSw0LjM1MiwyLjk2LDcuMTQ3QzI2LjEwNiwxOC43OTUsMjQuOTc5LDIxLjMxNCwyMy4xNDcsMjMuMTQ3eiAgICAgTTE2LjAzMiw4LjkxN2MtMC40NDMtMC4xODYtMC45NTgtMC4wODctMS4zMDEsMC4yNDhsLTMuMTAzLDMuMDM3bC0yLjIzOCwwYy0wLjMxNSwwLT'+
			'AuNjI0LDAuMTI3LTAuODQ2LDAuMzUgICAgcy0wLjM1MSwwLjUzMS0wLjM1MSwwLjg0NnY1LjI5NmMwLDAuMzE1LDAuMTI4LDAuNjI0LDAuMzUxLDAuODQ3czAuNTMxLDAuMzUsMC44NDYsMC4zNWgyLjIzOGwzLjEwMywzLjAzOCAgICBjMC4yMjgsMC4yMjMsMC41MzEsMC4zNDEsMC44MzgsMC4zNDFjMC4xNTYsMCwwLjMxMy0wLjAzLDAuNDYyLTAuMDkzYzAuNDQzLTAuMTg2LDAuNzMzLTAuNjIyLDAuNzMzLTEuMTAzVjEwLjAyICAgIEMxNi43NjUsOS41NCwxNi40NzUsOS4xMDMsMTYuMDMyLDguOTE3eiBNMTQuMzcyLDE5LjIyOWwtMS40MTctMS4zODljLTAuMjI2LTAuMjIxLTAuNTIyLTAuMzQx'+
			'LTAuODM3LTAuMzQxaC0xLjUzMXYtMi45MDVoMS41MzEgICAgYzAuMzE1LDAsMC42MTItMC4xMjEsMC44MzctMC4zNDFsMS40MTctMS4zODhWMTkuMjI5eiBNMTkuNTQzLDE4Ljk3OWMwLjc4NC0wLjc0NSwxLjI4LTEuODA3LDEuMjgtMi45NzggICAgYzAtMS4xNDYtMC40NzUtMi4xODktMS4yMy0yLjkzMmMtMC4zNjYtMC4zNi0wLjk1NS0wLjM1NS0xLjMxNSwwLjAxMWMtMC4zNiwwLjM2Ni0wLjM1NSwwLjk1NSwwLjAxMSwxLjMxNSAgICBjMC40MTgsMC40MTIsMC42NzQsMC45NzUsMC42NzQsMS42MDVjMCwwLjY0My0wLjI2OCwxLjIxNC0wLjcwMiwxLjYzYy0wLjM3MiwwLjM1NC0wLjM4NywwLj'+
			'k0My0wLjAzMiwxLjMxNSAgICBjMC4xODMsMC4xOTIsMC40MjksMC4yODksMC42NzUsMC4yODlDMTkuMTMzLDE5LjIzNSwxOS4zNjMsMTkuMTUsMTkuNTQzLDE4Ljk3OUwxOS41NDMsMTguOTc5eiBNMjAuNzY2LDkuMTMyICAgIGMtMC40MTQtMC4zMDYtMC45OTYtMC4yMTctMS4zMDEsMC4xOTdjLTAuMzA1LDAuNDE0LTAuMjE3LDAuOTk2LDAuMTk3LDEuMzAxYzEuNjQ5LDEuMjE3LDIuNzE3LDMuMTY0LDIuNzE3LDUuMzY5ICAgIGMwLDIuMjIzLTEuMDg0LDQuMTgzLTIuNzU2LDUuMzk3Yy0wLjQxNywwLjMwMy0wLjUwOSwwLjg4NC0wLjIwNiwxLjMwMWMwLjE4MiwwLjI1LDAuNDY2LDAuMzgzLDAu'+
			'NzU0LDAuMzgzICAgIGMwLjE4OSwwLDAuMzgxLTAuMDU4LDAuNTQ2LTAuMTc3aC0wLjAwMWMyLjEzMy0xLjU0NywzLjUyNC00LjA2NiwzLjUyNC02LjkwNEMyNC4yNCwxMy4xODMsMjIuODcxLDEwLjY4MSwyMC43NjYsOS4xMzJ6Ii8+CiA8L2c+CiA8ZyBzdHJva2Utd2lkdGg9IjAuMiIgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjMDAwMDAwIj4KICA8cGF0aCBkPSJNMTYsMy41QzkuMDk2LDMuNSwzLjUsOS4wOTYsMy41LDE2YzAsNi45MDQsNS41OTYsMTIuNDk5LDEyLjUsMTIuNWM2LjkwMy0wLjAwMSwxMi40OTktNS41OTYsMTIuNS0xMi41ICAgIEMyOC40OTksOS4wOTYsMjIuOTAzLDMuNSwxNi'+
			'wzLjV6IE0yMy4xNDcsMjMuMTQ3Yy0xLjgzMywxLjgzLTQuMzUzLDIuOTU5LTcuMTQ3LDIuOTZjLTIuNzk1LTAuMDAxLTUuMzE0LTEuMTMtNy4xNDYtMi45NiAgICBDNy4wMjIsMjEuMzE0LDUuODk0LDE4Ljc5NSw1Ljg5MywxNmMwLjAwMS0yLjc5NSwxLjEyOS01LjMxNCwyLjk2MS03LjE0N2MxLjgzMy0xLjgzMSw0LjM1Mi0yLjk2LDcuMTQ2LTIuOTYxICAgIGMyLjc5NSwwLjAwMSw1LjMxMywxLjEzLDcuMTQ3LDIuOTYxYzEuODMxLDEuODMzLDIuOTU5LDQuMzUyLDIuOTYsNy4xNDdDMjYuMTA2LDE4Ljc5NSwyNC45NzksMjEuMzE0LDIzLjE0NywyMy4xNDd6ICAgICBNMTYuMDMyLDguOTE3Yy0w'+
			'LjQ0My0wLjE4Ni0wLjk1OC0wLjA4Ny0xLjMwMSwwLjI0OGwtMy4xMDMsMy4wMzdsLTIuMjM4LDBjLTAuMzE1LDAtMC42MjQsMC4xMjctMC44NDYsMC4zNSAgICBzLTAuMzUxLDAuNTMxLTAuMzUxLDAuODQ2djUuMjk2YzAsMC4zMTUsMC4xMjgsMC42MjQsMC4zNTEsMC44NDdzMC41MzEsMC4zNSwwLjg0NiwwLjM1aDIuMjM4bDMuMTAzLDMuMDM4ICAgIGMwLjIyOCwwLjIyMywwLjUzMSwwLjM0MSwwLjgzOCwwLjM0MWMwLjE1NiwwLDAuMzEzLTAuMDMsMC40NjItMC4wOTNjMC40NDMtMC4xODYsMC43MzMtMC42MjIsMC43MzMtMS4xMDNWMTAuMDIgICAgQzE2Ljc2NSw5LjU0LDE2LjQ3NSw5LjEwMy'+
			'wxNi4wMzIsOC45MTd6IE0xNC4zNzIsMTkuMjI5bC0xLjQxNy0xLjM4OWMtMC4yMjYtMC4yMjEtMC41MjItMC4zNDEtMC44MzctMC4zNDFoLTEuNTMxdi0yLjkwNWgxLjUzMSAgICBjMC4zMTUsMCwwLjYxMi0wLjEyMSwwLjgzNy0wLjM0MWwxLjQxNy0xLjM4OFYxOS4yMjl6IE0xOS41NDMsMTguOTc5YzAuNzg0LTAuNzQ1LDEuMjgtMS44MDcsMS4yOC0yLjk3OCAgICBjMC0xLjE0Ni0wLjQ3NS0yLjE4OS0xLjIzLTIuOTMyYy0wLjM2Ni0wLjM2LTAuOTU1LTAuMzU1LTEuMzE1LDAuMDExYy0wLjM2LDAuMzY2LTAuMzU1LDAuOTU1LDAuMDExLDEuMzE1ICAgIGMwLjQxOCwwLjQxMiwwLjY3NCwwLjk3'+
			'NSwwLjY3NCwxLjYwNWMwLDAuNjQzLTAuMjY4LDEuMjE0LTAuNzAyLDEuNjNjLTAuMzcyLDAuMzU0LTAuMzg3LDAuOTQzLTAuMDMyLDEuMzE1ICAgIGMwLjE4MywwLjE5MiwwLjQyOSwwLjI4OSwwLjY3NSwwLjI4OUMxOS4xMzMsMTkuMjM1LDE5LjM2MywxOS4xNSwxOS41NDMsMTguOTc5TDE5LjU0MywxOC45Nzl6IE0yMC43NjYsOS4xMzIgICAgYy0wLjQxNC0wLjMwNi0wLjk5Ni0wLjIxNy0xLjMwMSwwLjE5N2MtMC4zMDUsMC40MTQtMC4yMTcsMC45OTYsMC4xOTcsMS4zMDFjMS42NDksMS4yMTcsMi43MTcsMy4xNjQsMi43MTcsNS4zNjkgICAgYzAsMi4yMjMtMS4wODQsNC4xODMtMi43NTYsNS'+
			'4zOTdjLTAuNDE3LDAuMzAzLTAuNTA5LDAuODg0LTAuMjA2LDEuMzAxYzAuMTgyLDAuMjUsMC40NjYsMC4zODMsMC43NTQsMC4zODMgICAgYzAuMTg5LDAsMC4zODEtMC4wNTgsMC41NDYtMC4xNzdoLTAuMDAxYzIuMTMzLTEuNTQ3LDMuNTI0LTQuMDY2LDMuNTI0LTYuOTA0QzI0LjI0LDEzLjE4MywyMi44NzEsMTAuNjgxLDIwLjc2Niw5LjEzMnoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._unmute__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._unmute__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeT0iMHB4IiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgYmFzZVByb2ZpbGU9ImJhc2ljIiB4PSIwcHgiIHdpZH'+
			'RoPSIzMnB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgc3Ryb2tlLXdpZHRoPSIxLjUiIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIj4KICA8cGF0aCBkPSJNMTYsMy41QzkuMDk2LDMuNSwzLjUsOS4wOTYsMy41LDE2YzAsNi45MDQsNS41OTYsMTIuNDk5LDEyLjUsMTIuNWM2LjkwMy0wLjAwMSwxMi40OTktNS41OTYsMTIuNS0xMi41ICAgIEMyOC40OTksOS4wOTYsMjIuOTAzLDMuNSwxNiwzLjV6IE0y'+
			'My4xNDcsMjMuMTQ3Yy0xLjgzMywxLjgzLTQuMzUzLDIuOTU5LTcuMTQ3LDIuOTZjLTIuNzk1LTAuMDAxLTUuMzE0LTEuMTMtNy4xNDYtMi45NiAgICBDNy4wMjIsMjEuMzE0LDUuODk0LDE4Ljc5NSw1Ljg5MywxNmMwLjAwMS0yLjc5NSwxLjEyOS01LjMxNCwyLjk2MS03LjE0N2MxLjgzMy0xLjgzMSw0LjM1Mi0yLjk2LDcuMTQ2LTIuOTYxICAgIGMyLjc5NSwwLjAwMSw1LjMxMywxLjEzLDcuMTQ3LDIuOTYxYzEuODMxLDEuODMzLDIuOTU5LDQuMzUyLDIuOTYsNy4xNDdDMjYuMTA2LDE4Ljc5NSwyNC45NzksMjEuMzE0LDIzLjE0NywyMy4xNDd6ICAgICBNMTYuMDMyLDguOTE3Yy0wLjQ0My0wLj'+
			'E4Ni0wLjk1OC0wLjA4Ny0xLjMwMSwwLjI0OGwtMy4xMDMsMy4wMzdsLTIuMjM4LDBjLTAuMzE1LDAtMC42MjQsMC4xMjctMC44NDYsMC4zNSAgICBzLTAuMzUxLDAuNTMxLTAuMzUxLDAuODQ2djUuMjk2YzAsMC4zMTUsMC4xMjgsMC42MjQsMC4zNTEsMC44NDdzMC41MzEsMC4zNSwwLjg0NiwwLjM1aDIuMjM4bDMuMTAzLDMuMDM4ICAgIGMwLjIyOCwwLjIyMywwLjUzMSwwLjM0MSwwLjgzOCwwLjM0MWMwLjE1NiwwLDAuMzEzLTAuMDMsMC40NjItMC4wOTNjMC40NDMtMC4xODYsMC43MzMtMC42MjIsMC43MzMtMS4xMDNWMTAuMDIgICAgQzE2Ljc2NSw5LjU0LDE2LjQ3NSw5LjEwMywxNi4wMzIs'+
			'OC45MTd6IE0xNC4zNzIsMTkuMjI5bC0xLjQxNy0xLjM4OWMtMC4yMjYtMC4yMjEtMC41MjItMC4zNDEtMC44MzctMC4zNDFoLTEuNTMxdi0yLjkwNWgxLjUzMSAgICBjMC4zMTUsMCwwLjYxMi0wLjEyMSwwLjgzNy0wLjM0MWwxLjQxNy0xLjM4OFYxOS4yMjl6IE0xOS41NDMsMTguOTc5YzAuNzg0LTAuNzQ1LDEuMjgtMS44MDcsMS4yOC0yLjk3OCAgICBjMC0xLjE0Ni0wLjQ3NS0yLjE4OS0xLjIzLTIuOTMyYy0wLjM2Ni0wLjM2LTAuOTU1LTAuMzU1LTEuMzE1LDAuMDExYy0wLjM2LDAuMzY2LTAuMzU1LDAuOTU1LDAuMDExLDEuMzE1ICAgIGMwLjQxOCwwLjQxMiwwLjY3NCwwLjk3NSwwLjY3NC'+
			'wxLjYwNWMwLDAuNjQzLTAuMjY4LDEuMjE0LTAuNzAyLDEuNjNjLTAuMzcyLDAuMzU0LTAuMzg3LDAuOTQzLTAuMDMyLDEuMzE1ICAgIGMwLjE4MywwLjE5MiwwLjQyOSwwLjI4OSwwLjY3NSwwLjI4OUMxOS4xMzMsMTkuMjM1LDE5LjM2MywxOS4xNSwxOS41NDMsMTguOTc5TDE5LjU0MywxOC45Nzl6IE0yMC43NjYsOS4xMzIgICAgYy0wLjQxNC0wLjMwNi0wLjk5Ni0wLjIxNy0xLjMwMSwwLjE5N2MtMC4zMDUsMC40MTQtMC4yMTcsMC45OTYsMC4xOTcsMS4zMDFjMS42NDksMS4yMTcsMi43MTcsMy4xNjQsMi43MTcsNS4zNjkgICAgYzAsMi4yMjMtMS4wODQsNC4xODMtMi43NTYsNS4zOTdjLTAu'+
			'NDE3LDAuMzAzLTAuNTA5LDAuODg0LTAuMjA2LDEuMzAxYzAuMTgyLDAuMjUsMC40NjYsMC4zODMsMC43NTQsMC4zODMgICAgYzAuMTg5LDAsMC4zODEtMC4wNTgsMC41NDYtMC4xNzdoLTAuMDAxYzIuMTMzLTEuNTQ3LDMuNTI0LTQuMDY2LDMuNTI0LTYuOTA0QzI0LjI0LDEzLjE4MywyMi44NzEsMTAuNjgxLDIwLjc2Niw5LjEzMnoiLz4KIDwvZz4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgc3Ryb2tlLXdpZHRoPSIwLjIiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMCI+CiAgPHBhdGggZD0iTTE2LDMuNUM5LjA5Ni'+
			'wzLjUsMy41LDkuMDk2LDMuNSwxNmMwLDYuOTA0LDUuNTk2LDEyLjQ5OSwxMi41LDEyLjVjNi45MDMtMC4wMDEsMTIuNDk5LTUuNTk2LDEyLjUtMTIuNSAgICBDMjguNDk5LDkuMDk2LDIyLjkwMywzLjUsMTYsMy41eiBNMjMuMTQ3LDIzLjE0N2MtMS44MzMsMS44My00LjM1MywyLjk1OS03LjE0NywyLjk2Yy0yLjc5NS0wLjAwMS01LjMxNC0xLjEzLTcuMTQ2LTIuOTYgICAgQzcuMDIyLDIxLjMxNCw1Ljg5NCwxOC43OTUsNS44OTMsMTZjMC4wMDEtMi43OTUsMS4xMjktNS4zMTQsMi45NjEtNy4xNDdjMS44MzMtMS44MzEsNC4zNTItMi45Niw3LjE0Ni0yLjk2MSAgICBjMi43OTUsMC4wMDEsNS4z'+
			'MTMsMS4xMyw3LjE0NywyLjk2MWMxLjgzMSwxLjgzMywyLjk1OSw0LjM1MiwyLjk2LDcuMTQ3QzI2LjEwNiwxOC43OTUsMjQuOTc5LDIxLjMxNCwyMy4xNDcsMjMuMTQ3eiAgICAgTTE2LjAzMiw4LjkxN2MtMC40NDMtMC4xODYtMC45NTgtMC4wODctMS4zMDEsMC4yNDhsLTMuMTAzLDMuMDM3bC0yLjIzOCwwYy0wLjMxNSwwLTAuNjI0LDAuMTI3LTAuODQ2LDAuMzUgICAgcy0wLjM1MSwwLjUzMS0wLjM1MSwwLjg0NnY1LjI5NmMwLDAuMzE1LDAuMTI4LDAuNjI0LDAuMzUxLDAuODQ3czAuNTMxLDAuMzUsMC44NDYsMC4zNWgyLjIzOGwzLjEwMywzLjAzOCAgICBjMC4yMjgsMC4yMjMsMC41MzEsMC'+
			'4zNDEsMC44MzgsMC4zNDFjMC4xNTYsMCwwLjMxMy0wLjAzLDAuNDYyLTAuMDkzYzAuNDQzLTAuMTg2LDAuNzMzLTAuNjIyLDAuNzMzLTEuMTAzVjEwLjAyICAgIEMxNi43NjUsOS41NCwxNi40NzUsOS4xMDMsMTYuMDMyLDguOTE3eiBNMTQuMzcyLDE5LjIyOWwtMS40MTctMS4zODljLTAuMjI2LTAuMjIxLTAuNTIyLTAuMzQxLTAuODM3LTAuMzQxaC0xLjUzMXYtMi45MDVoMS41MzEgICAgYzAuMzE1LDAsMC42MTItMC4xMjEsMC44MzctMC4zNDFsMS40MTctMS4zODhWMTkuMjI5eiBNMTkuNTQzLDE4Ljk3OWMwLjc4NC0wLjc0NSwxLjI4LTEuODA3LDEuMjgtMi45NzggICAgYzAtMS4xNDYtMC40'+
			'NzUtMi4xODktMS4yMy0yLjkzMmMtMC4zNjYtMC4zNi0wLjk1NS0wLjM1NS0xLjMxNSwwLjAxMWMtMC4zNiwwLjM2Ni0wLjM1NSwwLjk1NSwwLjAxMSwxLjMxNSAgICBjMC40MTgsMC40MTIsMC42NzQsMC45NzUsMC42NzQsMS42MDVjMCwwLjY0My0wLjI2OCwxLjIxNC0wLjcwMiwxLjYzYy0wLjM3MiwwLjM1NC0wLjM4NywwLjk0My0wLjAzMiwxLjMxNSAgICBjMC4xODMsMC4xOTIsMC40MjksMC4yODksMC42NzUsMC4yODlDMTkuMTMzLDE5LjIzNSwxOS4zNjMsMTkuMTUsMTkuNTQzLDE4Ljk3OUwxOS41NDMsMTguOTc5eiBNMjAuNzY2LDkuMTMyICAgIGMtMC40MTQtMC4zMDYtMC45OTYtMC4yMT'+
			'ctMS4zMDEsMC4xOTdjLTAuMzA1LDAuNDE0LTAuMjE3LDAuOTk2LDAuMTk3LDEuMzAxYzEuNjQ5LDEuMjE3LDIuNzE3LDMuMTY0LDIuNzE3LDUuMzY5ICAgIGMwLDIuMjIzLTEuMDg0LDQuMTgzLTIuNzU2LDUuMzk3Yy0wLjQxNywwLjMwMy0wLjUwOSwwLjg4NC0wLjIwNiwxLjMwMWMwLjE4MiwwLjI1LDAuNDY2LDAuMzgzLDAuNzU0LDAuMzgzICAgIGMwLjE4OSwwLDAuMzgxLTAuMDU4LDAuNTQ2LTAuMTc3aC0wLjAwMWMyLjEzMy0xLjU0NywzLjUyNC00LjA2NiwzLjUyNC02LjkwNEMyNC4yNCwxMy4xODMsMjIuODcxLDEwLjY4MSwyMC43NjYsOS4xMzJ6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._unmute__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="unmute";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._unmute.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._unmute.onclick=function (e) {
			me._unmute.style.transition='none';
			me._unmute.style.visibility='hidden';
			me._unmute.ggVisible=false;
			me._mute.style.transition='none';
			me._mute.style.visibility=(Number(me._mute.style.opacity)>0||!me._mute.style.opacity)?'inherit':'hidden';
			me._mute.ggVisible=true;
			player.unmute("_all");
		}
		me._unmute.onmouseenter=function (e) {
			me._unmute__img.style.visibility='hidden';
			me._unmute__imgo.style.visibility='inherit';
			me.elementMouseOver['unmute']=true;
			me._tt_unmute.logicBlock_visible();
		}
		me._unmute.onmouseleave=function (e) {
			me._unmute__img.style.visibility='inherit';
			me._unmute__imgo.style.visibility='hidden';
			me.elementMouseOver['unmute']=false;
			me._tt_unmute.logicBlock_visible();
		}
		me._unmute.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_unmute=document.createElement('div');
		els=me._tt_unmute__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_unmute";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_unmute.ggUpdateText=function() {
			var params = [];
			var hs = player._("Unmute", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_unmute.ggUpdateText();
		el.appendChild(els);
		me._tt_unmute.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_unmute.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_unmute.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_unmute.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_unmute.style.transition='left 0s, top 0s';
				if (me._tt_unmute.ggCurrentLogicStatePosition == 0) {
					me._tt_unmute.style.left = 'calc(50% - (0px / 2))';
					me._tt_unmute.style.top='-25px';
				}
				else {
					me._tt_unmute.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._tt_unmute.style.top='32px';
				}
			}
		}
		me._tt_unmute.logicBlock_position();
		me._tt_unmute.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['unmute'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_unmute.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_unmute.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_unmute.style.transition='left 0s, top 0s';
				if (me._tt_unmute.ggCurrentLogicStateVisible == 0) {
					me._tt_unmute.style.visibility=(Number(me._tt_unmute.style.opacity)>0||!me._tt_unmute.style.opacity)?'inherit':'hidden';
					me._tt_unmute.ggVisible=true;
				}
				else {
					me._tt_unmute.style.visibility="hidden";
					me._tt_unmute.ggVisible=false;
				}
			}
		}
		me._tt_unmute.logicBlock_visible();
		me._tt_unmute.ggUpdatePosition=function (useTransition) {
		}
		me._unmute.appendChild(me._tt_unmute);
		me._button_mute.appendChild(me._unmute);
		el=me._mute=document.createElement('div');
		els=me._mute__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeT0iMHB4IiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgYmFzZVByb2ZpbGU9ImJhc2ljIiB4PSIwcHgiIHdpZH'+
			'RoPSIzMnB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIHN0cm9rZS13aWR0aD0iMS41IiBvcGFjaXR5PSIwLjQiIHN0cm9rZT0iIzNDM0MzQyI+CiAgPHBhdGggZD0iTTE2LjAzMSw4LjkxN2MtMC40NDItMC4xODYtMC45NTgtMC4wODctMS4zLDAuMjQ4bC0zLjEwMywzLjAzN2wtMi4yMzgsMGMtMC4zMTUsMC0wLjYyNCwwLjEyNy0wLjg0NiwwLjM1ICAgIGMtMC4yMjMsMC4yMjMtMC4zNTEsMC41MzEtMC4zNTEsMC44NDZ2NS4yOTZjMCwwLjMxNSwwLjEyOCwwLjYyMywwLjM1MSwwLjg0N2MwLjIyMywwLjIyMiwwLjUz'+
			'MSwwLjM1MSwwLjg0NiwwLjM1MWgyLjIzOCAgICBsMy4xMDMsMy4wMzdjMC4yMjcsMC4yMjMsMC41MywwLjM0MSwwLjgzOCwwLjM0MWMwLjE1NiwwLDAuMzEzLTAuMDMsMC40NjItMC4wOTNjMC40NDMtMC4xODcsMC43MzMtMC42MjMsMC43MzMtMS4xMDNWMTAuMDIgICAgQzE2Ljc2NCw5LjUzOSwxNi40NzQsOS4xMDMsMTYuMDMxLDguOTE3eiBNMTQuMzcyLDE5LjIyOGwtMS40MTgtMS4zODhjLTAuMjI1LTAuMjIxLTAuNTIyLTAuMzQyLTAuODM3LTAuMzQyaC0xLjUzdi0yLjkwNGgxLjUzMSAgICBjMC4zMTUsMCwwLjYxMi0wLjEyMSwwLjgzNy0wLjM0MWwxLjQxOC0xLjM4OFYxOS4yMjh6IE0xNi'+
			'wzLjVDOS4wOTYsMy41LDMuNSw5LjA5NiwzLjUsMTZjMCw2LjkwMyw1LjU5NiwxMi40OTksMTIuNSwxMi41ICAgIGM2LjkwMy0wLjAwMSwxMi40OTktNS41OTcsMTIuNS0xMi41QzI4LjQ5OSw5LjA5NiwyMi45MDMsMy41LDE2LDMuNXogTTIzLjE0NywyMy4xNDZjLTEuODMzLDEuODMxLTQuMzUzLDIuOTYtNy4xNDcsMi45NiAgICBzLTUuMzE0LTEuMTI5LTcuMTQ2LTIuOTZDNy4wMjIsMjEuMzEzLDUuODk0LDE4Ljc5NSw1Ljg5MywxNmMwLjAwMS0yLjc5NSwxLjEyOS01LjMxNCwyLjk2MS03LjE0NyAgICBjMS44MzMtMS44MzEsNC4zNTItMi45Niw3LjE0Ni0yLjk2YzIuNzk1LDAsNS4zMTMsMS4x'+
			'Myw3LjE0NywyLjk2YzEuODMxLDEuODMzLDIuOTU5LDQuMzUyLDIuOTYsNy4xNDcgICAgQzI2LjEwNiwxOC43OTUsMjQuOTc5LDIxLjMxMywyMy4xNDcsMjMuMTQ2eiBNMjIuMzI3LDE2LjAzMWwxLjQ4NS0xLjQ4NWMwLjM2My0wLjM2NCwwLjM2My0wLjk1MywwLTEuMzE2ICAgIGMtMC4zNjQtMC4zNjMtMC45NTMtMC4zNjMtMS4zMTUsMGwtMS40ODUsMS40ODVsLTEuNDg1LTEuNDg1Yy0wLjM2My0wLjM2My0wLjk1Mi0wLjM2My0xLjMxNiwwYy0wLjM2MiwwLjM2NC0wLjM2MiwwLjk1MywwLDEuMzE2ICAgIGwxLjQ4NSwxLjQ4NWwtMS40ODUsMS40ODVjLTAuMzYyLDAuMzYyLTAuMzYyLDAuOTUyLD'+
			'AsMS4zMTVjMC4xODMsMC4xODIsMC40MiwwLjI3MiwwLjY1OCwwLjI3MnMwLjQ3Ny0wLjA5MSwwLjY1OC0wLjI3MiAgICBsMS40ODUtMS40ODVsMS40ODUsMS40ODVjMC4xODEsMC4xODIsMC40MTksMC4yNzIsMC42NTcsMC4yNzJzMC40NzctMC4wOTEsMC42NTgtMC4yNzJjMC4zNjMtMC4zNjMsMC4zNjMtMC45NTMsMC0xLjMxNSAgICBMMjIuMzI3LDE2LjAzMXoiLz4KIDwvZz4KIDxnIHN0cm9rZS13aWR0aD0iMC4yIiBmaWxsPSIjRkZGRkZGIiBzdHJva2U9IiMwMDAwMDAiPgogIDxwYXRoIGQ9Ik0xNi4wMzEsOC45MTdjLTAuNDQyLTAuMTg2LTAuOTU4LTAuMDg3LTEuMywwLjI0OGwtMy4xMDMs'+
			'My4wMzdsLTIuMjM4LDBjLTAuMzE1LDAtMC42MjQsMC4xMjctMC44NDYsMC4zNSAgICBjLTAuMjIzLDAuMjIzLTAuMzUxLDAuNTMxLTAuMzUxLDAuODQ2djUuMjk2YzAsMC4zMTUsMC4xMjgsMC42MjMsMC4zNTEsMC44NDdjMC4yMjMsMC4yMjIsMC41MzEsMC4zNTEsMC44NDYsMC4zNTFoMi4yMzggICAgbDMuMTAzLDMuMDM3YzAuMjI3LDAuMjIzLDAuNTMsMC4zNDEsMC44MzgsMC4zNDFjMC4xNTYsMCwwLjMxMy0wLjAzLDAuNDYyLTAuMDkzYzAuNDQzLTAuMTg3LDAuNzMzLTAuNjIzLDAuNzMzLTEuMTAzVjEwLjAyICAgIEMxNi43NjQsOS41MzksMTYuNDc0LDkuMTAzLDE2LjAzMSw4LjkxN3ogTT'+
			'E0LjM3MiwxOS4yMjhsLTEuNDE4LTEuMzg4Yy0wLjIyNS0wLjIyMS0wLjUyMi0wLjM0Mi0wLjgzNy0wLjM0MmgtMS41M3YtMi45MDRoMS41MzEgICAgYzAuMzE1LDAsMC42MTItMC4xMjEsMC44MzctMC4zNDFsMS40MTgtMS4zODhWMTkuMjI4eiBNMTYsMy41QzkuMDk2LDMuNSwzLjUsOS4wOTYsMy41LDE2YzAsNi45MDMsNS41OTYsMTIuNDk5LDEyLjUsMTIuNSAgICBjNi45MDMtMC4wMDEsMTIuNDk5LTUuNTk3LDEyLjUtMTIuNUMyOC40OTksOS4wOTYsMjIuOTAzLDMuNSwxNiwzLjV6IE0yMy4xNDcsMjMuMTQ2Yy0xLjgzMywxLjgzMS00LjM1MywyLjk2LTcuMTQ3LDIuOTYgICAgcy01LjMxNC0x'+
			'LjEyOS03LjE0Ni0yLjk2QzcuMDIyLDIxLjMxMyw1Ljg5NCwxOC43OTUsNS44OTMsMTZjMC4wMDEtMi43OTUsMS4xMjktNS4zMTQsMi45NjEtNy4xNDcgICAgYzEuODMzLTEuODMxLDQuMzUyLTIuOTYsNy4xNDYtMi45NmMyLjc5NSwwLDUuMzEzLDEuMTMsNy4xNDcsMi45NmMxLjgzMSwxLjgzMywyLjk1OSw0LjM1MiwyLjk2LDcuMTQ3ICAgIEMyNi4xMDYsMTguNzk1LDI0Ljk3OSwyMS4zMTMsMjMuMTQ3LDIzLjE0NnogTTIyLjMyNywxNi4wMzFsMS40ODUtMS40ODVjMC4zNjMtMC4zNjQsMC4zNjMtMC45NTMsMC0xLjMxNiAgICBjLTAuMzY0LTAuMzYzLTAuOTUzLTAuMzYzLTEuMzE1LDBsLTEuND'+
			'g1LDEuNDg1bC0xLjQ4NS0xLjQ4NWMtMC4zNjMtMC4zNjMtMC45NTItMC4zNjMtMS4zMTYsMGMtMC4zNjIsMC4zNjQtMC4zNjIsMC45NTMsMCwxLjMxNiAgICBsMS40ODUsMS40ODVsLTEuNDg1LDEuNDg1Yy0wLjM2MiwwLjM2Mi0wLjM2MiwwLjk1MiwwLDEuMzE1YzAuMTgzLDAuMTgyLDAuNDIsMC4yNzIsMC42NTgsMC4yNzJzMC40NzctMC4wOTEsMC42NTgtMC4yNzIgICAgbDEuNDg1LTEuNDg1bDEuNDg1LDEuNDg1YzAuMTgxLDAuMTgyLDAuNDE5LDAuMjcyLDAuNjU3LDAuMjcyczAuNDc3LTAuMDkxLDAuNjU4LTAuMjcyYzAuMzYzLTAuMzYzLDAuMzYzLTAuOTUzLDAtMS4zMTUgICAgTDIyLjMy'+
			'NywxNi4wMzF6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._mute__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._mute__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeT0iMHB4IiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgYmFzZVByb2ZpbGU9ImJhc2ljIiB4PSIwcHgiIHdpZH'+
			'RoPSIzMnB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgc3Ryb2tlLXdpZHRoPSIxLjUiIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIj4KICA8cGF0aCBkPSJNMTYuMDMxLDguOTE3Yy0wLjQ0Mi0wLjE4Ni0wLjk1OC0wLjA4Ny0xLjMsMC4yNDhsLTMuMTAzLDMuMDM3bC0yLjIzOCwwYy0wLjMxNSwwLTAuNjI0LDAuMTI3LTAuODQ2LDAuMzUgICAgYy0wLjIyMywwLjIyMy0wLjM1MSwwLjUzMS0wLjM1MSww'+
			'Ljg0NnY1LjI5NmMwLDAuMzE1LDAuMTI4LDAuNjIzLDAuMzUxLDAuODQ3YzAuMjIzLDAuMjIyLDAuNTMxLDAuMzUxLDAuODQ2LDAuMzUxaDIuMjM4ICAgIGwzLjEwMywzLjAzN2MwLjIyNywwLjIyMywwLjUzLDAuMzQxLDAuODM4LDAuMzQxYzAuMTU2LDAsMC4zMTMtMC4wMywwLjQ2Mi0wLjA5M2MwLjQ0My0wLjE4NywwLjczMy0wLjYyMywwLjczMy0xLjEwM1YxMC4wMiAgICBDMTYuNzY0LDkuNTM5LDE2LjQ3NCw5LjEwMywxNi4wMzEsOC45MTd6IE0xNC4zNzIsMTkuMjI4bC0xLjQxOC0xLjM4OGMtMC4yMjUtMC4yMjEtMC41MjItMC4zNDItMC44MzctMC4zNDJoLTEuNTN2LTIuOTA0aDEuNTMxIC'+
			'AgIGMwLjMxNSwwLDAuNjEyLTAuMTIxLDAuODM3LTAuMzQxbDEuNDE4LTEuMzg4VjE5LjIyOHogTTE2LDMuNUM5LjA5NiwzLjUsMy41LDkuMDk2LDMuNSwxNmMwLDYuOTAzLDUuNTk2LDEyLjQ5OSwxMi41LDEyLjUgICAgYzYuOTAzLTAuMDAxLDEyLjQ5OS01LjU5NywxMi41LTEyLjVDMjguNDk5LDkuMDk2LDIyLjkwMywzLjUsMTYsMy41eiBNMjMuMTQ3LDIzLjE0NmMtMS44MzMsMS44MzEtNC4zNTMsMi45Ni03LjE0NywyLjk2ICAgIHMtNS4zMTQtMS4xMjktNy4xNDYtMi45NkM3LjAyMiwyMS4zMTMsNS44OTQsMTguNzk1LDUuODkzLDE2YzAuMDAxLTIuNzk1LDEuMTI5LTUuMzE0LDIuOTYxLTcu'+
			'MTQ3ICAgIGMxLjgzMy0xLjgzMSw0LjM1Mi0yLjk2LDcuMTQ2LTIuOTZjMi43OTUsMCw1LjMxMywxLjEzLDcuMTQ3LDIuOTZjMS44MzEsMS44MzMsMi45NTksNC4zNTIsMi45Niw3LjE0NyAgICBDMjYuMTA2LDE4Ljc5NSwyNC45NzksMjEuMzEzLDIzLjE0NywyMy4xNDZ6IE0yMi4zMjcsMTYuMDMxbDEuNDg1LTEuNDg1YzAuMzYzLTAuMzY0LDAuMzYzLTAuOTUzLDAtMS4zMTYgICAgYy0wLjM2NC0wLjM2My0wLjk1My0wLjM2My0xLjMxNSwwbC0xLjQ4NSwxLjQ4NWwtMS40ODUtMS40ODVjLTAuMzYzLTAuMzYzLTAuOTUyLTAuMzYzLTEuMzE2LDBjLTAuMzYyLDAuMzY0LTAuMzYyLDAuOTUzLDAsMS'+
			'4zMTYgICAgbDEuNDg1LDEuNDg1bC0xLjQ4NSwxLjQ4NWMtMC4zNjIsMC4zNjItMC4zNjIsMC45NTIsMCwxLjMxNWMwLjE4MywwLjE4MiwwLjQyLDAuMjcyLDAuNjU4LDAuMjcyczAuNDc3LTAuMDkxLDAuNjU4LTAuMjcyICAgIGwxLjQ4NS0xLjQ4NWwxLjQ4NSwxLjQ4NWMwLjE4MSwwLjE4MiwwLjQxOSwwLjI3MiwwLjY1NywwLjI3MnMwLjQ3Ny0wLjA5MSwwLjY1OC0wLjI3MmMwLjM2My0wLjM2MywwLjM2My0wLjk1MywwLTEuMzE1ICAgIEwyMi4zMjcsMTYuMDMxeiIvPgogPC9nPgogPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIiBz'+
			'dHJva2Utd2lkdGg9IjAuMiIgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjMDAwMDAwIj4KICA8cGF0aCBkPSJNMTYuMDMxLDguOTE3Yy0wLjQ0Mi0wLjE4Ni0wLjk1OC0wLjA4Ny0xLjMsMC4yNDhsLTMuMTAzLDMuMDM3bC0yLjIzOCwwYy0wLjMxNSwwLTAuNjI0LDAuMTI3LTAuODQ2LDAuMzUgICAgYy0wLjIyMywwLjIyMy0wLjM1MSwwLjUzMS0wLjM1MSwwLjg0NnY1LjI5NmMwLDAuMzE1LDAuMTI4LDAuNjIzLDAuMzUxLDAuODQ3YzAuMjIzLDAuMjIyLDAuNTMxLDAuMzUxLDAuODQ2LDAuMzUxaDIuMjM4ICAgIGwzLjEwMywzLjAzN2MwLjIyNywwLjIyMywwLjUzLDAuMzQxLDAuODM4LDAuMzQxYz'+
			'AuMTU2LDAsMC4zMTMtMC4wMywwLjQ2Mi0wLjA5M2MwLjQ0My0wLjE4NywwLjczMy0wLjYyMywwLjczMy0xLjEwM1YxMC4wMiAgICBDMTYuNzY0LDkuNTM5LDE2LjQ3NCw5LjEwMywxNi4wMzEsOC45MTd6IE0xNC4zNzIsMTkuMjI4bC0xLjQxOC0xLjM4OGMtMC4yMjUtMC4yMjEtMC41MjItMC4zNDItMC44MzctMC4zNDJoLTEuNTN2LTIuOTA0aDEuNTMxICAgIGMwLjMxNSwwLDAuNjEyLTAuMTIxLDAuODM3LTAuMzQxbDEuNDE4LTEuMzg4VjE5LjIyOHogTTE2LDMuNUM5LjA5NiwzLjUsMy41LDkuMDk2LDMuNSwxNmMwLDYuOTAzLDUuNTk2LDEyLjQ5OSwxMi41LDEyLjUgICAgYzYuOTAzLTAuMDAx'+
			'LDEyLjQ5OS01LjU5NywxMi41LTEyLjVDMjguNDk5LDkuMDk2LDIyLjkwMywzLjUsMTYsMy41eiBNMjMuMTQ3LDIzLjE0NmMtMS44MzMsMS44MzEtNC4zNTMsMi45Ni03LjE0NywyLjk2ICAgIHMtNS4zMTQtMS4xMjktNy4xNDYtMi45NkM3LjAyMiwyMS4zMTMsNS44OTQsMTguNzk1LDUuODkzLDE2YzAuMDAxLTIuNzk1LDEuMTI5LTUuMzE0LDIuOTYxLTcuMTQ3ICAgIGMxLjgzMy0xLjgzMSw0LjM1Mi0yLjk2LDcuMTQ2LTIuOTZjMi43OTUsMCw1LjMxMywxLjEzLDcuMTQ3LDIuOTZjMS44MzEsMS44MzMsMi45NTksNC4zNTIsMi45Niw3LjE0NyAgICBDMjYuMTA2LDE4Ljc5NSwyNC45NzksMjEuMz'+
			'EzLDIzLjE0NywyMy4xNDZ6IE0yMi4zMjcsMTYuMDMxbDEuNDg1LTEuNDg1YzAuMzYzLTAuMzY0LDAuMzYzLTAuOTUzLDAtMS4zMTYgICAgYy0wLjM2NC0wLjM2My0wLjk1My0wLjM2My0xLjMxNSwwbC0xLjQ4NSwxLjQ4NWwtMS40ODUtMS40ODVjLTAuMzYzLTAuMzYzLTAuOTUyLTAuMzYzLTEuMzE2LDBjLTAuMzYyLDAuMzY0LTAuMzYyLDAuOTUzLDAsMS4zMTYgICAgbDEuNDg1LDEuNDg1bC0xLjQ4NSwxLjQ4NWMtMC4zNjIsMC4zNjItMC4zNjIsMC45NTIsMCwxLjMxNWMwLjE4MywwLjE4MiwwLjQyLDAuMjcyLDAuNjU4LDAuMjcyczAuNDc3LTAuMDkxLDAuNjU4LTAuMjcyICAgIGwxLjQ4NS0x'+
			'LjQ4NWwxLjQ4NSwxLjQ4NWMwLjE4MSwwLjE4MiwwLjQxOSwwLjI3MiwwLjY1NywwLjI3MnMwLjQ3Ny0wLjA5MSwwLjY1OC0wLjI3MmMwLjM2My0wLjM2MywwLjM2My0wLjk1MywwLTEuMzE1ICAgIEwyMi4zMjcsMTYuMDMxeiIvPgogPC9nPgo8L3N2Zz4K';
		me._mute__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="mute";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._mute.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mute.onclick=function (e) {
			player.mute("_all");
			me._mute.style.transition='none';
			me._mute.style.visibility='hidden';
			me._mute.ggVisible=false;
			me._unmute.style.transition='none';
			me._unmute.style.visibility=(Number(me._unmute.style.opacity)>0||!me._unmute.style.opacity)?'inherit':'hidden';
			me._unmute.ggVisible=true;
		}
		me._mute.onmouseenter=function (e) {
			me._mute__img.style.visibility='hidden';
			me._mute__imgo.style.visibility='inherit';
			me.elementMouseOver['mute']=true;
			me._tt_mute.logicBlock_visible();
		}
		me._mute.onmouseleave=function (e) {
			me._mute__img.style.visibility='inherit';
			me._mute__imgo.style.visibility='hidden';
			me.elementMouseOver['mute']=false;
			me._tt_mute.logicBlock_visible();
		}
		me._mute.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_mute=document.createElement('div');
		els=me._tt_mute__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_mute";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_mute.ggUpdateText=function() {
			var params = [];
			var hs = player._("Mute", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_mute.ggUpdateText();
		el.appendChild(els);
		me._tt_mute.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_mute.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_mute.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_mute.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_mute.style.transition='left 0s, top 0s';
				if (me._tt_mute.ggCurrentLogicStatePosition == 0) {
					me._tt_mute.style.left = 'calc(50% - (0px / 2))';
					me._tt_mute.style.top='-25px';
				}
				else {
					me._tt_mute.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._tt_mute.style.top='32px';
				}
			}
		}
		me._tt_mute.logicBlock_position();
		me._tt_mute.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['mute'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_mute.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_mute.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_mute.style.transition='left 0s, top 0s';
				if (me._tt_mute.ggCurrentLogicStateVisible == 0) {
					me._tt_mute.style.visibility=(Number(me._tt_mute.style.opacity)>0||!me._tt_mute.style.opacity)?'inherit':'hidden';
					me._tt_mute.ggVisible=true;
				}
				else {
					me._tt_mute.style.visibility="hidden";
					me._tt_mute.ggVisible=false;
				}
			}
		}
		me._tt_mute.logicBlock_visible();
		me._tt_mute.ggUpdatePosition=function (useTransition) {
		}
		me._mute.appendChild(me._tt_mute);
		me._button_mute.appendChild(me._mute);
		me.divSkin.appendChild(me._button_mute);
		el=me._ios_fix=document.createElement('div');
		el.ggId="iOS_fix";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 124px;';
		hs+='position : absolute;';
		hs+='top : 11px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ios_fix.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._ios_fix.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._ios_fix);
		el=me._screen_tint_url=document.createElement('div');
		el.ggId="screen_tint_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 1px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._screen_tint_url.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._screen_tint_url.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_website') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._screen_tint_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._screen_tint_url.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._screen_tint_url.style.transition='';
				if (me._screen_tint_url.ggCurrentLogicStateVisible == 0) {
					me._screen_tint_url.style.visibility=(Number(me._screen_tint_url.style.opacity)>0||!me._screen_tint_url.style.opacity)?'inherit':'hidden';
					me._screen_tint_url.ggVisible=true;
				}
				else {
					me._screen_tint_url.style.visibility="hidden";
					me._screen_tint_url.ggVisible=false;
				}
			}
		}
		me._screen_tint_url.logicBlock_visible();
		me._screen_tint_url.onclick=function (e) {
			player.setVariableValue('vis_website', false);
		}
		me._screen_tint_url.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._screen_tint_url);
		el=me._web_page=document.createElement('div');
		els=me._web_page__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="web_page";
		el.ggDx=-0.01;
		el.ggDy=-0.02;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 90%;';
		hs+='left : calc(50% - ((90% + 0px) / 2) - 0.01%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90% + 0px) / 2) - 0.02%);';
		hs+='visibility : hidden;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='0% 0%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._web_page.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._web_page.ggUpdateText();
		el.appendChild(els);
		me._web_page.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._web_page.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_website') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._web_page.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._web_page.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._web_page.style.transition='';
				if (me._web_page.ggCurrentLogicStateVisible == 0) {
					me._web_page.style.visibility=(Number(me._web_page.style.opacity)>0||!me._web_page.style.opacity)?'inherit':'hidden';
					me._web_page.ggVisible=true;
				}
				else {
					me._web_page.style.visibility="hidden";
					me._web_page.ggVisible=false;
				}
			}
		}
		me._web_page.logicBlock_visible();
		me._web_page.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._web_page);
		el=me._close_url=document.createElement('div');
		els=me._close_url__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIGhlaWdodD0iMz'+
			'JweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIwcHgiIHdpZHRoPSIzMnB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0yMS4xMzIsMTkuNDM5TDE3LjY5MiwxNmwzLjQ0LTMuNDRjMC40NjgtMC40NjcsMC40NjgtMS4yMjUsMC0xLjY5MyAgIGMtMC40NjctMC40NjctMS4yMjUtMC40NjctMS42OTEsMC4wMDFMMTYsMTQuMzA4bC0zLjQ0MS0zLjQ0MWMtMC40NjctMC40NjctMS4yMjQtMC40NjctMS42OTEsMC4w'+
			'MDEgICBjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI0LDAsMS42OUwxNC4zMDksMTZsLTMuNDQsMy40NGMtMC40NjcsMC40NjctMC40NjcsMS4yMjYsMCwxLjY5MmMwLjQ2NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwICAgbDMuNDQtMy40NGwzLjQzOSwzLjQzOWMwLjQ2OCwwLjQ2OCwxLjIyNSwwLjQ2OCwxLjY5MSwwLjAwMUMyMS41OTksMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjEgICBjLTQuODgyLTQuODgyLTEyLjc5Ni00Ljg4Mi0xNy42NzgsMGMtNC44ODEsNC44ODEtNC44ODEsMTIuNzk1LDAsMTcuNjc4YzQuODgxLDQuODgsMTIuNzk2LDQuODgsMT'+
			'cuNjc4LDAgICBDMjkuNzIsMTkuOTU2LDI5LjcyLDEyLjA0MiwyNC44MzksNy4xNjF6IE0xNiwyNi4xMDZjLTIuNTg5LTAuMDAxLTUuMTctMC45ODUtNy4xNDYtMi45NjFTNS44OTUsMTguNTksNS44OTQsMTYgICBjMC0yLjU5MSwwLjk4NC01LjE3LDIuOTYtNy4xNDdDMTAuODMsNi44NzgsMTMuNDA5LDUuODk0LDE2LDUuODk0YzIuNTkxLDAuMDAxLDUuMTcsMC45ODQsNy4xNDcsMi45NTkgICBjMS45NzYsMS45NzcsMi45NTcsNC41NTYsMi45Niw3LjE0N2MtMC4wMDEsMi41OTEtMC45ODUsNS4xNjktMi45Niw3LjE0OEMyMS4xNjksMjUuMTIyLDE4LjU5MSwyNi4xMDYsMTYsMjYuMTA2eiIgc3Ry'+
			'b2tlPSIjM0MzQzNDIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBzdHJva2Utd2lkdGg9IjAuMiIgZmlsbD0iI0ZGRkZGRiIgZD0iTTIxLjEzMiwxOS40MzlMMTcuNjkyLDE2bDMuNDQtMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNSwwLTEuNjkzICAgYy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5MSwwLjAwMUwxNiwxNC4zMDhsLTMuNDQxLTMuNDQxYy0wLjQ2Ny0wLjQ2Ny0xLjIyNC0wLjQ2Ny0xLjY5MSwwLjAwMSAgIGMtMC40NjcsMC40NjctMC40NjcsMS4yMjQsMCwxLjY5TDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNiwwLDEuNjkyYzAuNDY3LDAuND'+
			'Y3LDEuMjI2LDAuNDY3LDEuNjkyLDAgICBsMy40NC0zLjQ0bDMuNDM5LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI1LDAuNDY4LDEuNjkxLDAuMDAxQzIxLjU5OSwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MSAgIGMtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTUsMCwxNy42NzhjNC44ODEsNC44OCwxMi43OTYsNC44OCwxNy42NzgsMCAgIEMyOS43MiwxOS45NTYsMjkuNzIsMTIuMDQyLDI0LjgzOSw3LjE2MXogTTE2LDI2LjEwNmMtMi41ODktMC4wMDEtNS4xNy0wLjk4NS03LjE0Ni0yLjk2MVM1Ljg5'+
			'NSwxOC41OSw1Ljg5NCwxNiAgIGMwLTIuNTkxLDAuOTg0LTUuMTcsMi45Ni03LjE0N0MxMC44Myw2Ljg3OCwxMy40MDksNS44OTQsMTYsNS44OTRjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OSAgIGMxLjk3NiwxLjk3NywyLjk1Nyw0LjU1NiwyLjk2LDcuMTQ3Yy0wLjAwMSwyLjU5MS0wLjk4NSw1LjE2OS0yLjk2LDcuMTQ4QzIxLjE2OSwyNS4xMjIsMTguNTkxLDI2LjEwNiwxNiwyNi4xMDZ6IiBzdHJva2U9IiMwMDAwMDAiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._close_url__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._close_url__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIGhlaWdodD0iMz'+
			'JweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIwcHgiIHdpZHRoPSIzMnB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgb3BhY2l0eT0iMC40Ij4KICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTIxLjEzMiwxOS40MzlMMTcuNjkzLDE2bDMuNDM5LTMuNDRjMC40NjgtMC40NjcsMC40NjgtMS4yMjYsMC4wMDEtMS42OTMgICBjLTAuNDY3LTAuNDY3LTEuMjI1LTAuNDY3LTEuNjky'+
			'LDAuMDAxbC0zLjQ0LDMuNDRsLTMuNDQxLTMuNDQxYy0wLjQ2OC0wLjQ2OC0xLjIyNS0wLjQ2Ny0xLjY5MywwICAgYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNSwwLDEuNjkyTDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ni0wLjQ2NywxLjIyNCwwLDEuNjkxYzAuNDY3LDAuNDY3LDEuMjI2LDAuNDY3LDEuNjkyLDAuMDAxICAgbDMuNDQtMy40NGwzLjQ0LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI0LDAuNDY3LDEuNjkxLDBDMjEuNTk4LDIwLjY2NCwyMS42LDE5LjkwNywyMS4xMzIsMTkuNDM5eiBNMjQuODM5LDcuMTYxICAgYy00Ljg4Mi00Ljg4Mi0xMi43OTYtNC44ODItMTcuNjc4LD'+
			'BjLTQuODgxLDQuODgxLTQuODgxLDEyLjc5NiwwLDE3LjY3OGM0Ljg4Miw0Ljg4MSwxMi43OTYsNC44ODEsMTcuNjc4LDAgICBDMjkuNzIsMTkuOTU3LDI5LjcyMSwxMi4wNDMsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU5LDAtNS4xNzEtMC45ODQtNy4xNDYtMi45NTlDNi44NzgsMjEuMTcsNS44OTUsMTguNTkxLDUuODk0LDE2ICAgYzAtMi41OTEsMC45ODMtNS4xNywyLjk1OS03LjE0N2MxLjk3Ny0xLjk3Niw0LjU1Ni0yLjk1OSw3LjE0OC0yLjk2YzIuNTkxLDAuMDAxLDUuMTcsMC45ODQsNy4xNDcsMi45NTkgICBjMS45NzUsMS45NzcsMi45NTcsNC41NTYsMi45NTksNy4xNDdjLTAu'+
			'MDAxLDIuNTkyLTAuOTg0LDUuMTctMi45Niw3LjE0OEMyMS4xNywyNS4xMjMsMTguNTkxLDI2LjEwNywxNiwyNi4xMDZ6IiBzdHJva2U9IiMzQzNDM0MiLz4KIDwvZz4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSI+CiAgPHBhdGggc3Ryb2tlLXdpZHRoPSIwLjIiIGZpbGw9IiNGRkZGRkYiIGQ9Ik0yMS4xMzIsMTkuNDM5TDE3LjY5MywxNmwzLjQzOS0zLjQ0ICAgYzAuNDY4LTAuNDY3LDAuNDY4LTEuMjI2LDAuMDAxLTEuNjkzYy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5MiwwLjAwMWwtMy40NCwzLjQ0bC0zLjQ0MS0zLj'+
			'Q0MSAgIGMtMC40NjgtMC40NjgtMS4yMjUtMC40NjctMS42OTMsMGMtMC40NjcsMC40NjctMC40NjcsMS4yMjUsMCwxLjY5MkwxNC4zMDksMTZsLTMuNDQsMy40NGMtMC40NjcsMC40NjYtMC40NjcsMS4yMjQsMCwxLjY5MSAgIGMwLjQ2NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwLjAwMWwzLjQ0LTMuNDRsMy40NCwzLjQzOWMwLjQ2OCwwLjQ2OCwxLjIyNCwwLjQ2NywxLjY5MSwwICAgQzIxLjU5OCwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MWMtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTYs'+
			'MCwxNy42NzggICBjNC44ODIsNC44ODEsMTIuNzk2LDQuODgxLDE3LjY3OCwwQzI5LjcyLDE5Ljk1NywyOS43MjEsMTIuMDQzLDI0LjgzOSw3LjE2MXogTTE2LDI2LjEwNmMtMi41OSwwLTUuMTcxLTAuOTg0LTcuMTQ2LTIuOTU5ICAgQzYuODc4LDIxLjE3LDUuODk1LDE4LjU5MSw1Ljg5NCwxNmMwLTIuNTkxLDAuOTgzLTUuMTcsMi45NTktNy4xNDdjMS45NzctMS45NzYsNC41NTYtMi45NTksNy4xNDgtMi45NiAgIGMyLjU5MSwwLjAwMSw1LjE3LDAuOTg0LDcuMTQ3LDIuOTU5YzEuOTc1LDEuOTc3LDIuOTU3LDQuNTU2LDIuOTU5LDcuMTQ3Yy0wLjAwMSwyLjU5Mi0wLjk4NCw1LjE3LTIuOTYsNy'+
			'4xNDggICBDMjEuMTcsMjUuMTIzLDE4LjU5MSwyNi4xMDcsMTYsMjYuMTA2eiIgc3Ryb2tlPSIjMDAwMDAwIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._close_url__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="close_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._close_url.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._close_url.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_website') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._close_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._close_url.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._close_url.style.transition='';
				if (me._close_url.ggCurrentLogicStateVisible == 0) {
					me._close_url.style.visibility=(Number(me._close_url.style.opacity)>0||!me._close_url.style.opacity)?'inherit':'hidden';
					me._close_url.ggVisible=true;
				}
				else {
					me._close_url.style.visibility="hidden";
					me._close_url.ggVisible=false;
				}
			}
		}
		me._close_url.logicBlock_visible();
		me._close_url.onclick=function (e) {
			player.setVariableValue('vis_website', false);
				me._web_page.ggUpdateText=function() {
					var params = [];
					var hs = player._("", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me._web_page.ggUpdateText();
			me._web_page.ggTextDiv.scrollTop = 0;
		}
		me._close_url.onmouseenter=function (e) {
			me._close_url__img.style.visibility='hidden';
			me._close_url__imgo.style.visibility='inherit';
			me.elementMouseOver['close_url']=true;
		}
		me._close_url.onmouseleave=function (e) {
			me._close_url__img.style.visibility='inherit';
			me._close_url__imgo.style.visibility='hidden';
			me.elementMouseOver['close_url']=false;
		}
		me._close_url.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._close_url);
		el=me.__2=document.createElement('div');
		el.ggId="\u6211\u662f\u5206\u9694\u7dda2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='height : 20px;';
		hs+='left : 38px;';
		hs+='position : absolute;';
		hs+='top : -114px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__2.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me.__2);
		me._dropdown_floorplan_mobile.logicBlock_position();
		me._dropdown_floorplan_mobile.logicBlock_size();
		me._dropdown_floorplan_mobile.logicBlock_visible();
		me._map_1_mobile.ggInitMap=function() {};
		me._map_1_mobile.ggInitMapMarkers=function() {};
		me._map_1_mobile.ggClearMap=function() {};
		me._map_1_mobile.logicBlock_size();
		me._dropdown_floorplan_mobile_l.logicBlock_visible();
		me._map_1_mobile_l.ggInitMap=function() {};
		me._map_1_mobile_l.ggInitMapMarkers=function() {};
		me._map_1_mobile_l.ggClearMap=function() {};
		me._dropdown_floorplan.logicBlock_visible();
		me._map_1.ggInitMap=function() {};
		me._map_1.ggInitMapMarkers=function() {};
		me._map_1.ggClearMap=function() {};
		me.elementMouseOver['thumbnail_show_button_show']=false;
		me._tt_thumbnail_open.logicBlock_position();
		me._tt_thumbnail_open.logicBlock_visible();
		me._tt_thumbnail_open.logicBlock_text();
		me._thumbnail_menu.logicBlock_position();
		me._thumbnail_menu.logicBlock_alpha();
		me.elementMouseOver['svg_1']=false;
		me._text_2.logicBlock_position();
		me._text_2.logicBlock_visible();
		me.elementMouseOver['button_fullscreen_1']=false;
		me._button_image_normalscreen.logicBlock_visible();
		me.elementMouseOver['button_image_normalscreen']=false;
		me._button_image_fullscreen.logicBlock_visible();
		me.elementMouseOver['button_image_fullscreen']=false;
		me._tt_fullscreen.logicBlock_position();
		me._tt_fullscreen.logicBlock_visible();
		me._tt_fullscreen.logicBlock_text();
		me.elementMouseOver['pano_prev']=false;
		me._tt_pano_prev.logicBlock_position();
		me._tt_pano_prev.logicBlock_visible();
		me.elementMouseOver['pano_next']=false;
		me._tt_pano_next.logicBlock_position();
		me._tt_pano_next.logicBlock_visible();
		me.elementMouseOver['zoomout']=false;
		me._tt_zoomout.logicBlock_position();
		me._tt_zoomout.logicBlock_visible();
		me.elementMouseOver['zoomin']=false;
		me._tt_zoomin.logicBlock_position();
		me._tt_zoomin.logicBlock_visible();
		me._screen_tint0.logicBlock_visible();
		me._gallery.logicBlock_size();
		me._gallery.logicBlock_visible();
		me._logo.logicBlock_position();
		me._logo.logicBlock_scaling();
		me.elementMouseOver['logo']=false;
		me._image_1_1.logicBlock_alpha();
		me.elementMouseOver['image_1_1']=false;
		me._booking.logicBlock_visible();
		me._screentint_image.logicBlock_visible();
		me._image_popup.logicBlock_visible();
		me._popup_image.logicBlock_visible();
		me._image_popup_close.logicBlock_visible();
		me.elementMouseOver['image_popup_close']=false;
		me._screen_tint.logicBlock_visible();
		me._pop_video.logicBlock_scaling();
		me._pop_video.logicBlock_visible();
		me._pop_video.logicBlock_alpha();
		me._pop_video_player.logicBlock_visible();
		me._pop_video_player.ggVideoSource = 'media/';
		me._pop_video_player.ggVideoNotLoaded = true;
		me._sounds_splashscreen.logicBlock_size();
		me._sounds_splashscreen.logicBlock_visible();
		me.elementMouseOver['sounds_off']=false;
		me.elementMouseOver['sounds_on']=false;
		me.elementMouseOver['unmute']=false;
		me._tt_unmute.logicBlock_position();
		me._tt_unmute.logicBlock_visible();
		me.elementMouseOver['mute']=false;
		me._tt_mute.logicBlock_position();
		me._tt_mute.logicBlock_visible();
		me._screen_tint_url.logicBlock_visible();
		me._web_page.logicBlock_visible();
		me._close_url.logicBlock_visible();
		me.elementMouseOver['close_url']=false;
		player.addListener('activehotspotchanged', function(event) {
			for(var i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
				me._thumbnail_cloner.ggInstances[i].ggEvent_activehotspotchanged(event);
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node_camera_switch')) {
				for(var i = 0; i < hotspotTemplates['ht_node_camera_switch'].length; i++) {
					hotspotTemplates['ht_node_camera_switch'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node_Day&Night')) {
				for(var i = 0; i < hotspotTemplates['ht_node_Day&Night'].length; i++) {
					hotspotTemplates['ht_node_Day&Night'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_url')) {
				for(var i = 0; i < hotspotTemplates['ht_url'].length; i++) {
					hotspotTemplates['ht_url'][i].ggEvent_activehotspotchanged();
				}
			}
		});
		player.addListener('changenode', function(event) {
			for(var i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
				me._thumbnail_cloner.ggInstances[i].ggEvent_changenode(event);
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_gallery')) {
				for(var i = 0; i < hotspotTemplates['ht_gallery'].length; i++) {
					hotspotTemplates['ht_gallery'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node_camera_switch')) {
				for(var i = 0; i < hotspotTemplates['ht_node_camera_switch'].length; i++) {
					hotspotTemplates['ht_node_camera_switch'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node_Day&Night')) {
				for(var i = 0; i < hotspotTemplates['ht_node_Day&Night'].length; i++) {
					hotspotTemplates['ht_node_Day&Night'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_url')) {
				for(var i = 0; i < hotspotTemplates['ht_url'].length; i++) {
					hotspotTemplates['ht_url'][i].ggEvent_changenode();
				}
			}
			me._variable_vis_sounds_splashscreen.logicBlock();
			me._dropdown_floorplan_mobile.logicBlock_visible();
			me._dropdown_floorplan_mobile_l.logicBlock_visible();
			me._dropdown_floorplan.logicBlock_visible();
			me._tt_thumbnail_open.logicBlock_text();
			me._thumbnail_menu.logicBlock_alpha();
			me._thumbnail_cloner.ggUpdateConditionNodeChange();
			me._screen_tint0.logicBlock_visible();
			me._gallery.logicBlock_visible();
			me._screentint_image.logicBlock_visible();
			me._image_popup.logicBlock_visible();
			me._popup_image.logicBlock_visible();
			me._image_popup_close.logicBlock_visible();
			me._screen_tint.logicBlock_visible();
			me._pop_video.logicBlock_scaling();
			me._pop_video.logicBlock_visible();
			me._pop_video.logicBlock_alpha();
			me._pop_video_player.logicBlock_visible();
			me._sounds_splashscreen.logicBlock_visible();
				player.stopSound("#Element.*");
				player.playSound("#Element.*","0");
			me._screen_tint_url.logicBlock_visible();
			me._web_page.logicBlock_visible();
			me._close_url.logicBlock_visible();
		});
		player.addListener('changevisitednodes', function(event) {
			for(var i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
				me._thumbnail_cloner.ggInstances[i].ggEvent_changevisitednodes(event);
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_changevisitednodes();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node_camera_switch')) {
				for(var i = 0; i < hotspotTemplates['ht_node_camera_switch'].length; i++) {
					hotspotTemplates['ht_node_camera_switch'][i].ggEvent_changevisitednodes();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node_Day&Night')) {
				for(var i = 0; i < hotspotTemplates['ht_node_Day&Night'].length; i++) {
					hotspotTemplates['ht_node_Day&Night'][i].ggEvent_changevisitednodes();
				}
			}
		});
		player.addListener('configloaded', function(event) {
			for(var i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
				me._thumbnail_cloner.ggInstances[i].ggEvent_configloaded(event);
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_gallery')) {
				for(var i = 0; i < hotspotTemplates['ht_gallery'].length; i++) {
					hotspotTemplates['ht_gallery'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node_camera_switch')) {
				for(var i = 0; i < hotspotTemplates['ht_node_camera_switch'].length; i++) {
					hotspotTemplates['ht_node_camera_switch'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node_Day&Night')) {
				for(var i = 0; i < hotspotTemplates['ht_node_Day&Night'].length; i++) {
					hotspotTemplates['ht_node_Day&Night'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_url')) {
				for(var i = 0; i < hotspotTemplates['ht_url'].length; i++) {
					hotspotTemplates['ht_url'][i].ggEvent_configloaded();
				}
			}
			me._variable_vis_sounds_splashscreen.logicBlock();
			me._tt_thumbnail_open.logicBlock_position();
			me._tt_thumbnail_open.logicBlock_text();
			me._thumbnail_menu.ggUpdatePosition();
			me._thumbnail_menu.logicBlock_position();
			me._thumbnail_menu.logicBlock_alpha();
			me._text_2.logicBlock_position();
			me._tt_fullscreen.logicBlock_position();
			me._tt_pano_prev.logicBlock_position();
			me._tt_pano_next.logicBlock_position();
			me._tt_zoomout.logicBlock_position();
			me._tt_zoomin.logicBlock_position();
			me._screen_tint0.logicBlock_visible();
			me._gallery.logicBlock_size();
			me._gallery.logicBlock_visible();
			me._logo.logicBlock_scaling();
			me._screentint_image.logicBlock_visible();
			me._image_popup.logicBlock_visible();
			me._popup_image.logicBlock_visible();
			me._image_popup_close.logicBlock_visible();
			me._screen_tint.logicBlock_visible();
			me._pop_video.logicBlock_scaling();
			me._pop_video.logicBlock_visible();
			me._pop_video.logicBlock_alpha();
			me._pop_video_player.logicBlock_visible();
			me._sounds_splashscreen.logicBlock_size();
			me._sounds_splashscreen.logicBlock_visible();
			me._tt_unmute.logicBlock_position();
			me._tt_mute.logicBlock_position();
			me._screen_tint_url.logicBlock_visible();
			me._web_page.logicBlock_visible();
			me._close_url.logicBlock_visible();
		});
		player.addListener('fullscreenenter', function(event) {
			me._button_image_normalscreen.logicBlock_visible();
			me._button_image_fullscreen.logicBlock_visible();
			me._tt_fullscreen.logicBlock_text();
		});
		player.addListener('fullscreenexit', function(event) {
			me._button_image_normalscreen.logicBlock_visible();
			me._button_image_fullscreen.logicBlock_visible();
			me._tt_fullscreen.logicBlock_text();
		});
		player.addListener('hastouch', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_hastouch();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_url')) {
				for(var i = 0; i < hotspotTemplates['ht_url'].length; i++) {
					hotspotTemplates['ht_url'][i].ggEvent_hastouch();
				}
			}
			me._tt_thumbnail_open.logicBlock_position();
			me._thumbnail_menu.logicBlock_position();
			me._text_2.logicBlock_position();
			me._tt_fullscreen.logicBlock_position();
			me._tt_pano_prev.logicBlock_position();
			me._tt_pano_next.logicBlock_position();
			me._tt_zoomout.logicBlock_position();
			me._tt_zoomin.logicBlock_position();
			me._tt_unmute.logicBlock_position();
			me._tt_mute.logicBlock_position();
		});
		player.addListener('hsproxyclick', function(event) {
			if (event.id=='Poly01') {
				me._pop_1.onclick();
			}
		});
		player.addListener('sizechanged', function(event) {
			me._dropdown_floorplan_mobile.logicBlock_position();
			me._dropdown_floorplan_mobile.logicBlock_size();
			me._dropdown_floorplan_mobile.logicBlock_visible();
			me._map_1_mobile.logicBlock_size();
			me._dropdown_floorplan_mobile_l.logicBlock_visible();
			me._dropdown_floorplan.logicBlock_visible();
			me._logo.logicBlock_position();
		});
		player.addListener('soundspermittedchanged', function(event) {
			me._variable_vis_sounds_splashscreen.logicBlock();
		});
		player.addListener('varchanged_ht_ani', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_gallery')) {
				for(var i = 0; i < hotspotTemplates['ht_gallery'].length; i++) {
					hotspotTemplates['ht_gallery'][i].ggEvent_varchanged_ht_ani();
				}
			}
		});
		player.addListener('varchanged_opt_3d_preview', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_varchanged_opt_3d_preview();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node_camera_switch')) {
				for(var i = 0; i < hotspotTemplates['ht_node_camera_switch'].length; i++) {
					hotspotTemplates['ht_node_camera_switch'][i].ggEvent_varchanged_opt_3d_preview();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node_Day&Night')) {
				for(var i = 0; i < hotspotTemplates['ht_node_Day&Night'].length; i++) {
					hotspotTemplates['ht_node_Day&Night'][i].ggEvent_varchanged_opt_3d_preview();
				}
			}
		});
		player.addListener('varchanged_opt_thumbnail_menu_tooltip', function(event) {
			for(var i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
				me._thumbnail_cloner.ggInstances[i].ggEvent_varchanged_opt_thumbnail_menu_tooltip(event);
			}
		});
		player.addListener('varchanged_pop_video', function(event) {
			me._screen_tint.logicBlock_visible();
			me._pop_video.logicBlock_scaling();
			me._pop_video.logicBlock_visible();
			me._pop_video.logicBlock_alpha();
			me._pop_video_player.logicBlock_visible();
		});
		player.addListener('varchanged_sounds_splashscreen_accepted', function(event) {
			me._variable_vis_sounds_splashscreen.logicBlock();
		});
		player.addListener('varchanged_vis_gallery', function(event) {
			me._screen_tint0.logicBlock_visible();
			me._gallery.logicBlock_visible();
		});
		player.addListener('varchanged_vis_image_popup', function(event) {
			me._screentint_image.logicBlock_visible();
			me._image_popup.logicBlock_visible();
			me._popup_image.logicBlock_visible();
			me._image_popup_close.logicBlock_visible();
		});
		player.addListener('varchanged_vis_sounds_splashscreen', function(event) {
			me._sounds_splashscreen.logicBlock_visible();
		});
		player.addListener('varchanged_vis_thumbnail_menu', function(event) {
			me._tt_thumbnail_open.logicBlock_text();
			me._thumbnail_menu.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_website', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_url')) {
				for(var i = 0; i < hotspotTemplates['ht_url'].length; i++) {
					hotspotTemplates['ht_url'][i].ggEvent_varchanged_vis_website();
				}
			}
			me._screen_tint_url.logicBlock_visible();
			me._web_page.logicBlock_visible();
			me._close_url.logicBlock_visible();
		});
		player.addListener('viewerinit', function(event) {
			me._thumbnail_cloner.ggUpdate();
		});
	};
	function SkinCloner_thumbnail_cloner_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._thumbnail_nodeimage=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_nodeimage;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_nodeimage__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/hs_preview_image_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_nodeImage";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.62,sy:0.58,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 90px;';
		hs+='left : -24px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._thumbnail_nodeimage.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_nodeimage.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumbnail_nodeimage);
		el=me._thumbnail_active=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_active;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="thumbnail_active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #d1d1d1;';
		hs+='cursor : pointer;';
		hs+='height : 51px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_active.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me._thumbnail_active.ggIsActive() == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				((me.elementMouseOver['thumbnail_active'] == true))
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._thumbnail_active.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._thumbnail_active.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._thumbnail_active.style.transition='border-color 0s';
				if (me._thumbnail_active.ggCurrentLogicStateBorderColor == 0) {
					me._thumbnail_active.style.borderColor="rgba(255,255,255,1)";
				}
				else if (me._thumbnail_active.ggCurrentLogicStateBorderColor == 1) {
					me._thumbnail_active.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me._thumbnail_active.style.borderColor="rgba(209,209,209,1)";
				}
			}
		}
		me._thumbnail_active.logicBlock_bordercolor();
		me._thumbnail_active.onclick=function (e) {
			if (me._thumbnail_active.isDragging()) return;
			if (
				(
					((me._thumbnail_active.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
		}
		me._thumbnail_active.onmouseenter=function (e) {
			me.elementMouseOver['thumbnail_active']=true;
			me._thumbnail_title.logicBlock_alpha();
			me._checkmark_tick.logicBlock_alpha();
			me._thumbnail_active.logicBlock_bordercolor();
		}
		me._thumbnail_active.onmouseleave=function (e) {
			me.elementMouseOver['thumbnail_active']=false;
			me._thumbnail_title.logicBlock_alpha();
			me._checkmark_tick.logicBlock_alpha();
			me._thumbnail_active.logicBlock_bordercolor();
		}
		me._thumbnail_active.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnail_title=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_title;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumbnail_title";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 51px;';
		hs+='left : calc(50% - ((90px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((51px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 2px #000000;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._thumbnail_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._thumbnail_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._thumbnail_title.ggUpdateText();
		});
		el.appendChild(els);
		me._thumbnail_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_title.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['thumbnail_active'] == true)) && 
				((me.ggUserdata.title != "")) && 
				((player.getVariableValue('opt_thumbnail_menu_tooltip') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_title.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_title.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_title.style.transition='opacity 500ms ease 0ms';
				if (me._thumbnail_title.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_title.style.visibility=me._thumbnail_title.ggVisible?'inherit':'hidden';
					me._thumbnail_title.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._thumbnail_title.style.opacity == 0.0) { me._thumbnail_title.style.visibility="hidden"; } }, 505);
					me._thumbnail_title.style.opacity=0;
				}
			}
		}
		me._thumbnail_title.logicBlock_alpha();
		me._thumbnail_title.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_active.appendChild(me._thumbnail_title);
		el=me._checkmark_tick=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._checkmark_tick;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._checkmark_tick__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOng9Imh0dHA6Ly9ucy5hZG9iZS5jb20vRXh0ZW5zaWJpbGl0eS8xLjAvIiB5PSIwcHgiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgLTM3MjIgLTI2MDYgMzIgMzIiIH'+
			'ZlcnNpb249IjEuMSIgeG1sbnM6YT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZVNWR1ZpZXdlckV4dGVuc2lvbnMvMy4wLyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjMycHgiIHhtbG5zOmk9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVJbGx1c3RyYXRvci8xMC4wLyIgeG1sbnM6Z3JhcGg9Imh0dHA6Ly9ucy5hZG9iZS5jb20vR3JhcGhzLzEuMC8iIHg9IjBweCIgd2lkdGg9IjMycHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSItMzcyMiAtMjYwNiAzMiAzMiI+CiA8'+
			'ZyBpZD0iTGF5ZXJfMSIvPgogPGcgaWQ9IkViZW5lXzEiLz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPGc+CiAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTM2OTUuNDczLTI1OTguMTQ2Yy0wLjUxOS0wLjUxOS0xLjM2MS0wLjUxOS0xLjg3OSwwbC04Ljc4Nyw4Ljc4N2wtMi4yOTEtMi4yNDMgICAgIGMtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAyYy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OSAgICAgYzAuMzQsMCwwLjY4LTAuMTMsMC45NC0wLjM5bDkuNzE3LTkuNz'+
			'E3Qy0zNjk0Ljk1NC0yNTk2Ljc4NS0zNjk0Ljk1NC0yNTk3LjYyNi0zNjk1LjQ3My0yNTk4LjE0NnoiLz4KICAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMzY5OS45Ni0yNTgzLjgzN2gtMTIuMzI1di0xMi4zMjZoMTEuODIxbDIuMjUyLTIuMjUyYy0wLjE2Ni0wLjA4Ni0wLjM1Mi0wLjE0MS0wLjU1Mi0wLjE0MWgtMTQuNzE4ICAgICBjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgxNC43MThjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzICAgICBsLTIuMzkzLDIuMzkzVi0yNTgzLjgz'+
			'N3oiLz4KICAgPC9nPgogICA8ZyBhOmFkb2JlLWJsZW5kaW5nLW1vZGU9Im11bHRpcGx5IiBvcGFjaXR5PSIwLjQiPgogICAgPHBhdGggc3Ryb2tlLXdpZHRoPSIxLjUiIGZpbGw9Im5vbmUiIGE6YWRvYmUtYmxlbmRpbmctbW9kZT0ibm9ybWFsIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9IiAgICAgTS0zNjk1LjQ3My0yNTk4LjE0NmMtMC41MTktMC41MTktMS4zNjEtMC41MTktMS44NzksMGwtOC43ODcsOC43ODdsLTIuMjkxLTIuMjQzYy0wLjUyNS0wLjUxMy0xLjM2Ni0wLjUwNC0xLjg4LDAuMDIgICAgIGMtMC41MTMsMC41MjUtMC41MDQsMS4zNjcsMC4wMjEsMS44OGwzLjIzLDMuMTYzYz'+
			'AuMjU5LDAuMjUzLDAuNTk0LDAuMzc5LDAuOTMsMC4zNzljMC4zNCwwLDAuNjgtMC4xMywwLjk0LTAuMzlsOS43MTctOS43MTcgICAgIEMtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9IiMxQTE3MUIiLz4KICAgIDxwYXRoIHN0cm9rZS13aWR0aD0iMS41IiBmaWxsPSJub25lIiBhOmFkb2JlLWJsZW5kaW5nLW1vZGU9Im5vcm1hbCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSIgICAgIE0tMzY5OS45Ni0yNTgzLjgzN2gtMTIuMzI1di0xMi4zMjZoMTEuODIxbDIuMjUyLTIuMjUyYy0w'+
			'LjE2Ni0wLjA4Ni0wLjM1Mi0wLjE0MS0wLjU1Mi0wLjE0MWgtMTQuNzE4ICAgICBjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgxNC43MThjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzICAgICBsLTIuMzkzLDIuMzkzVi0yNTgzLjgzN3oiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iIzFBMTcxQiIvPgogICA8L2c+CiAgIDxnPgogICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0zNjk1LjQ3My0yNTk4LjE0NmMtMC41MTktMC41MTktMS4zNjEtMC41MTktMS44NzksMGwtOC'+
			'43ODcsOC43ODdsLTIuMjkxLTIuMjQzICAgICBjLTAuNTI1LTAuNTEzLTEuMzY2LTAuNTA0LTEuODgsMC4wMmMtMC41MTMsMC41MjUtMC41MDQsMS4zNjcsMC4wMjEsMS44OGwzLjIzLDMuMTYzYzAuMjU5LDAuMjUzLDAuNTk0LDAuMzc5LDAuOTMsMC4zNzkgICAgIGMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxN0MtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTM2OTkuOTYtMjU4My44MzdoLTEyLjMyNXYtMTIuMzI2aDExLjgyMWwyLjI1Mi0yLjI1MmMtMC4xNjYt'+
			'MC4wODYtMC4zNTItMC4xNDEtMC41NTItMC4xNDFoLTE0LjcxOCAgICAgYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djE0LjcxOWMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMTQuNzE4YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZ2LTEwLjQwMyAgICAgbC0yLjM5MywyLjM5M1YtMjU4My44Mzd6Ii8+CiAgIDwvZz4KICAgPGc+CiAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjAuMiIgZmlsbD0ibm9uZSIgZD0iTS0zNjk1LjQ3My0yNTk4LjE0NiAgICAgYy0wLjUxOS0wLjUxOS0xLjM2MS0wLjUxOS0xLjg3OSwwbC04Ljc4Nyw4Ljc4N2wtMi4yOTEtMi4yNDNjLT'+
			'AuNTI1LTAuNTEzLTEuMzY2LTAuNTA0LTEuODgsMC4wMiAgICAgYy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OWMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxNyAgICAgQy0zNjk0Ljk1NC0yNTk2Ljc4NS0zNjk0Ljk1NC0yNTk3LjYyNi0zNjk1LjQ3My0yNTk4LjE0NnoiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSIjMUExNzFCIi8+CiAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjAuMiIgZmlsbD0ibm9uZSIgZD0iTS0zNjk5'+
			'Ljk2LTI1ODMuODM3ICAgICBoLTEyLjMyNXYtMTIuMzI2aDExLjgyMWwyLjI1Mi0yLjI1MmMtMC4xNjYtMC4wODYtMC4zNTItMC4xNDEtMC41NTItMC4xNDFoLTE0LjcxOGMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnYxNC43MTkgICAgIGMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMTQuNzE4YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZ2LTEwLjQwM2wtMi4zOTMsMi4zOTNWLTI1ODMuODM3eiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9IiMxQTE3MUIiLz4KICAgPC9nPgogIDwvZz4KIDwvZz4KPC9zdm'+
			'c+Cg==';
		me._checkmark_tick__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="checkmark_tick";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 24px;';
		hs+='position : absolute;';
		hs+='right : -1px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._checkmark_tick.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._checkmark_tick.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._checkmark_tick.ggElementNodeId()) == true)) || 
				((me._checkmark_tick.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._checkmark_tick.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._checkmark_tick.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._checkmark_tick.style.transition='opacity 500ms ease 0ms';
				if (me._checkmark_tick.ggCurrentLogicStateVisible == 0) {
					me._checkmark_tick.style.visibility=(Number(me._checkmark_tick.style.opacity)>0||!me._checkmark_tick.style.opacity)?'inherit':'hidden';
					me._checkmark_tick.ggVisible=true;
				}
				else {
					me._checkmark_tick.style.visibility="hidden";
					me._checkmark_tick.ggVisible=false;
				}
			}
		}
		me._checkmark_tick.logicBlock_visible();
		me._checkmark_tick.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['thumbnail_active'] == true)) && 
				((player._(me.ggUserdata.title) != ""))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._checkmark_tick.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._checkmark_tick.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._checkmark_tick.style.transition='opacity 500ms ease 0ms';
				if (me._checkmark_tick.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._checkmark_tick.style.opacity == 0.0) { me._checkmark_tick.style.visibility="hidden"; } }, 505);
					me._checkmark_tick.style.opacity=0;
				}
				else {
					me._checkmark_tick.style.visibility=me._checkmark_tick.ggVisible?'inherit':'hidden';
					me._checkmark_tick.style.opacity=1;
				}
			}
		}
		me._checkmark_tick.logicBlock_alpha();
		me._checkmark_tick.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_active.appendChild(me._checkmark_tick);
		me.__div.appendChild(me._thumbnail_active);
		me._thumbnail_active.logicBlock_bordercolor();
		me.elementMouseOver['thumbnail_active']=false;
		me._thumbnail_title.logicBlock_alpha();
		me._checkmark_tick.logicBlock_visible();
		me._checkmark_tick.logicBlock_alpha();
			me.ggEvent_activehotspotchanged=function(event) {
				me._thumbnail_title.logicBlock_alpha();
				me._checkmark_tick.logicBlock_alpha();
			};
			me.ggEvent_changenode=function(event) {
				me._thumbnail_active.logicBlock_bordercolor();
				me._thumbnail_title.logicBlock_alpha();
				me._checkmark_tick.logicBlock_visible();
				me._checkmark_tick.logicBlock_visible();
				me._checkmark_tick.logicBlock_alpha();
			};
			me.ggEvent_changevisitednodes=function(event) {
				me._checkmark_tick.logicBlock_visible();
			};
			me.ggEvent_configloaded=function(event) {
				me._thumbnail_title.logicBlock_alpha();
				me._checkmark_tick.logicBlock_alpha();
			};
			me.ggEvent_varchanged_opt_thumbnail_menu_tooltip=function(event) {
				me._thumbnail_title.logicBlock_alpha();
			};
	};
	function SkinHotspotClass_ht_url(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_url=document.createElement('div');
		el.ggId="ht_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 250px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_url.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_url.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_website') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url.style.transition='';
				if (me._ht_url.ggCurrentLogicStateVisible == 0) {
					me._ht_url.style.visibility="hidden";
					me._ht_url.ggVisible=false;
				}
				else {
					me._ht_url.style.visibility=(Number(me._ht_url.style.opacity)>0||!me._ht_url.style.opacity)?'inherit':'hidden';
					me._ht_url.ggVisible=true;
				}
			}
		}
		me._ht_url.logicBlock_visible();
		me._ht_url.onclick=function (e) {
			if (
				(
					((player.getVariableValue('opt_url') == true)) && 
					((player.getHasTouch() == false))
				)
			) {
					skin._web_page.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.url)));
						var hs = player._("<iframe src=\"%1\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\" ><\/iframe>", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._web_page.ggUpdateText();
				skin._web_page.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('opt_url') == true)) && 
					((player.getHasTouch() == false))
				)
			) {
				player.setVariableValue('vis_website', true);
			}
			if (
				(
					((player.getVariableValue('opt_url') == false)) || 
					((player.getHasTouch() == true))
				)
			) {
				player.openUrl(player._(me.hotspot.url),player._(me.hotspot.target));
			}
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_url.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_url.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_url']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_url.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_url']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_url.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_url_image=document.createElement('div');
		els=me._ht_url_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._ht_url_image__img.setAttribute('src',basePath + 'images/ht_url_image.svg');
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_url_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._ht_url_image__imgo.setAttribute('src',basePath + 'images/ht_url_image__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_url_image";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 160px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		me._ht_url_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_url_image.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_url_image.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_url_image.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_url_image.style.transition='transform 0s';
				if (me._ht_url_image.ggCurrentLogicStateScaling == 0) {
					me._ht_url_image.ggParameter.sx = 0.7;
					me._ht_url_image.ggParameter.sy = 0.7;
					me._ht_url_image.style.transform=parameterToTransform(me._ht_url_image.ggParameter);
					skin.updateSize(me._ht_url_image);
				}
				else {
					me._ht_url_image.ggParameter.sx = 1;
					me._ht_url_image.ggParameter.sy = 1;
					me._ht_url_image.style.transform=parameterToTransform(me._ht_url_image.ggParameter);
					skin.updateSize(me._ht_url_image);
				}
			}
		}
		me._ht_url_image.logicBlock_scaling();
		me._ht_url_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url_image.style.transition='transform 0s';
				if (me._ht_url_image.ggCurrentLogicStateVisible == 0) {
					me._ht_url_image.style.visibility="hidden";
					me._ht_url_image.ggVisible=false;
				}
				else {
					me._ht_url_image.style.visibility=(Number(me._ht_url_image.style.opacity)>0||!me._ht_url_image.style.opacity)?'inherit':'hidden';
					me._ht_url_image.ggVisible=true;
				}
			}
		}
		me._ht_url_image.logicBlock_visible();
		me._ht_url_image.onmouseenter=function (e) {
			me._ht_url_image__img.style.visibility='hidden';
			me._ht_url_image__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_url_image']=true;
			me._tt_ht_url.logicBlock_visible();
		}
		me._ht_url_image.onmouseleave=function (e) {
			me._ht_url_image__img.style.visibility='inherit';
			me._ht_url_image__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_url_image']=false;
			me._tt_ht_url.logicBlock_visible();
		}
		me._ht_url_image.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_ht_url=document.createElement('div');
		els=me._tt_ht_url__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_url";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -30px;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='border : 0px solid #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_ht_url.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_ht_url.ggUpdateText();
		player.addListener('changenode', function() {
			me._tt_ht_url.ggUpdateText();
		});
		el.appendChild(els);
		me._tt_ht_url.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_url.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_ht_url.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_url.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_url.style.transition='left 0s, top 0s';
				if (me._tt_ht_url.ggCurrentLogicStatePosition == 0) {
					me._tt_ht_url.style.left = 'calc(50% - (0px / 2))';
					me._tt_ht_url.style.top='-47px';
				}
				else {
					me._tt_ht_url.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._tt_ht_url.style.top='-30px';
				}
			}
		}
		me._tt_ht_url.logicBlock_position();
		me._tt_ht_url.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_url_image'] == true)) && 
				((player._(me.hotspot.title) != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_url.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_url.style.transition='left 0s, top 0s';
				if (me._tt_ht_url.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_url.style.visibility=(Number(me._tt_ht_url.style.opacity)>0||!me._tt_ht_url.style.opacity)?'inherit':'hidden';
					me._tt_ht_url.ggVisible=true;
				}
				else {
					me._tt_ht_url.style.visibility="hidden";
					me._tt_ht_url.ggVisible=false;
				}
			}
		}
		me._tt_ht_url.logicBlock_visible();
		me._tt_ht_url.ggUpdatePosition=function (useTransition) {
		}
		me._ht_url_image.appendChild(me._tt_ht_url);
		me._ht_url.appendChild(me._ht_url_image);
		el=me._ht_url_customimage=document.createElement('div');
		els=me._ht_url_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_url_customimage.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_url_customimage.ggSubElement.setAttribute('alt', player._(me._ht_url_customimage.ggAltText));
			me._ht_url_customimage.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_url_customimage.ggText_untranslated = img;
			me._ht_url_customimage.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_url_customimage.ggSubElement.style.width = '0px';
			me._ht_url_customimage.ggSubElement.style.height = '0px';
			me._ht_url_customimage.ggSubElement.src='';
			me._ht_url_customimage.ggSubElement.src=me._ht_url_customimage.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_url_customimage.ggText != player._(me._ht_url_customimage.ggText_untranslated)) {
				me._ht_url_customimage.ggText = player._(me._ht_url_customimage.ggText_untranslated);
				me._ht_url_customimage.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_url_CustomImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_url_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_url_customimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url_customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url_customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url_customimage.style.transition='';
				if (me._ht_url_customimage.ggCurrentLogicStateVisible == 0) {
					me._ht_url_customimage.style.visibility="hidden";
					me._ht_url_customimage.ggSubElement.src='';
					me._ht_url_customimage.ggVisible=false;
				}
				else {
					me._ht_url_customimage.style.visibility=(Number(me._ht_url_customimage.style.opacity)>0||!me._ht_url_customimage.style.opacity)?'inherit':'hidden';
					me._ht_url_customimage.ggSubElement.src=me._ht_url_customimage.ggText;
					me._ht_url_customimage.ggVisible=true;
				}
			}
		}
		me._ht_url_customimage.logicBlock_visible();
		me._ht_url_customimage.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_url_customimage.clientWidth;
			var parentHeight = me._ht_url_customimage.clientHeight;
			var img = me._ht_url_customimage__img;
			var aspectRatioDiv = me._ht_url_customimage.clientWidth / me._ht_url_customimage.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_url_customimage.ggScrollbars || currentWidth < me._ht_url_customimage.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_url_customimage.scrollLeft=currentWidth / 2 - me._ht_url_customimage.clientWidth / 2;
			}
			if (!me._ht_url_customimage.ggScrollbars || currentHeight < me._ht_url_customimage.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_url_customimage.scrollTop=currentHeight / 2 - me._ht_url_customimage.clientHeight / 2;
			}
		}
		me._ht_url.appendChild(me._ht_url_customimage);
		me._ht_url.logicBlock_visible();
		me.elementMouseOver['ht_url']=false;
		me._ht_url_image.logicBlock_scaling();
		me._ht_url_image.logicBlock_visible();
		me.elementMouseOver['ht_url_image']=false;
		me._tt_ht_url.logicBlock_position();
		me._tt_ht_url.logicBlock_visible();
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_url_customimage.style.width=hotspot.customimagewidth + 'px';
			me._ht_url_customimage.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_url_customimage.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_url_customimage.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_url_customimage.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_url_image.logicBlock_visible();
				me._tt_ht_url.logicBlock_visible();
				me._ht_url_customimage.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_url.logicBlock_visible();
				me._ht_url_image.logicBlock_visible();
				me._tt_ht_url.logicBlock_visible();
				me._ht_url_customimage.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_url.logicBlock_visible();
				me._ht_url_image.logicBlock_scaling();
				me._ht_url_image.logicBlock_visible();
				me._tt_ht_url.logicBlock_position();
				me._tt_ht_url.logicBlock_visible();
				me._ht_url_customimage.logicBlock_visible();
			};
			me.ggEvent_hastouch=function() {
				me._tt_ht_url.logicBlock_position();
			};
			me.ggEvent_varchanged_vis_website=function() {
				me._ht_url.logicBlock_visible();
			};
			me.__div = me._ht_url;
	};
	function SkinHotspotClass_ht_node_daynight(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node_daynight=document.createElement('div');
		el.ggId="ht_node_Day&Night";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 75px;';
		hs+='position : absolute;';
		hs+='top : 220px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		hs+='transform-style: preserve-3d;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_daynight.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node_daynight.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_daynight.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_daynight.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node_daynight']=true;
			me._chevron_white.logicBlock_alpha();
			me._hs_preview_image.logicBlock_alpha();
			me._tt_ht_3d.logicBlock_visible();
			me._text_1.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_daynight.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node_daynight']=false;
			me._chevron_white.logicBlock_alpha();
			me._hs_preview_image.logicBlock_alpha();
			me._tt_ht_3d.logicBlock_visible();
			me._text_1.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_daynight.ggUpdatePosition=function (useTransition) {
		}
		el=me._chevron_white=document.createElement('div');
		els=me._chevron_white__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._chevron_white__img.setAttribute('src',basePath + 'images/chevron_white.svg');
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._chevron_white__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._chevron_white__imgo.setAttribute('src',basePath + 'images/chevron_white__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="chevron_white";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='opacity : 0.70003;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		hs+='transform:translate3d(0px,0px,1px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._chevron_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_white.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._chevron_white.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._chevron_white.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._chevron_white.style.transition='transform 0s, opacity 500ms ease 0ms';
				if (me._chevron_white.ggCurrentLogicStateScaling == 0) {
					me._chevron_white.ggParameter.sx = 0.5;
					me._chevron_white.ggParameter.sy = 0.5;
					me._chevron_white.style.transform=parameterToTransform(me._chevron_white.ggParameter);
					skin.updateSize(me._chevron_white);
				}
				else {
					me._chevron_white.ggParameter.sx = 1;
					me._chevron_white.ggParameter.sy = 1;
					me._chevron_white.style.transform=parameterToTransform(me._chevron_white.ggParameter);
					skin.updateSize(me._chevron_white);
				}
			}
		}
		me._chevron_white.logicBlock_scaling();
		me._chevron_white.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._chevron_white.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._chevron_white.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._chevron_white.style.transition='transform 0s, opacity 500ms ease 0ms';
				if (me._chevron_white.ggCurrentLogicStateVisible == 0) {
					me._chevron_white.style.visibility="hidden";
					me._chevron_white.ggVisible=false;
				}
				else {
					me._chevron_white.style.visibility=(Number(me._chevron_white.style.opacity)>0||!me._chevron_white.style.opacity)?'inherit':'hidden';
					me._chevron_white.ggVisible=true;
				}
			}
		}
		me._chevron_white.logicBlock_visible();
		me._chevron_white.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node_daynight'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_white.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_white.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_white.style.transition='transform 0s, opacity 500ms ease 0ms';
				if (me._chevron_white.ggCurrentLogicStateAlpha == 0) {
					me._chevron_white.style.visibility=me._chevron_white.ggVisible?'inherit':'hidden';
					me._chevron_white.style.opacity=1;
				}
				else {
					me._chevron_white.style.visibility=me._chevron_white.ggVisible?'inherit':'hidden';
					me._chevron_white.style.opacity=0.70003;
				}
			}
		}
		me._chevron_white.logicBlock_alpha();
		me._chevron_white.onmouseenter=function (e) {
			me._chevron_white__img.style.visibility='hidden';
			me._chevron_white__imgo.style.visibility='inherit';
			me.elementMouseOver['chevron_white']=true;
		}
		me._chevron_white.onmouseleave=function (e) {
			me._chevron_white__img.style.visibility='inherit';
			me._chevron_white__imgo.style.visibility='hidden';
			me.elementMouseOver['chevron_white']=false;
		}
		me._chevron_white.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_daynight.appendChild(me._chevron_white);
		el=me._hs_preview_image=document.createElement('div');
		els=me._hs_preview_image__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/hs_preview_image_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hs_preview_image";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='z-index: -5;';
		hs+='height : 90px;';
		hs+='left : calc(50% - ((140px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -100px;';
		hs+='visibility : hidden;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		hs+='\/* \u8a2d\u5b9a\u7e2e\u5716\u9810\u89bd\u7684\u6a23\u5f0f *\/ border-radius: 5px; \/* \u5713\u89d2\u6548\u679c *\/ overflow: hidden; \/* \u96b1\u85cf\u6ea2\u51fa\u5167\u5bb9 *\/ box-shadow: 0px 0px 2px #ffffff; \/* \u767d\u8272\u9670\u5f71\u6548\u679c *\/ transform: translate(0px, 0px); \/* \u53bb\u96643D\u8b8a\u63db *\/ scale(1.5); \/* \u653e\u5927\u7e2e\u5716 *\/ -webkit-backface-visibility: hidden; backface-visibility: hidden;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hs_preview_image.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._hs_preview_image.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node_daynight'] == true)) && 
				((player.getVariableValue('opt_3d_preview') == true)) && 
				((player.getIsTour() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hs_preview_image.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hs_preview_image.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hs_preview_image.style.transition='opacity 500ms ease 0ms';
				if (me._hs_preview_image.ggCurrentLogicStateAlpha == 0) {
					me._hs_preview_image.style.visibility=me._hs_preview_image.ggVisible?'inherit':'hidden';
					me._hs_preview_image.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._hs_preview_image.style.opacity == 0.0) { me._hs_preview_image.style.visibility="hidden"; } }, 505);
					me._hs_preview_image.style.opacity=0;
				}
			}
		}
		me._hs_preview_image.logicBlock_alpha();
		me._hs_preview_image.ggUpdatePosition=function (useTransition) {
		}
		el=me._hs_tt=document.createElement('div');
		els=me._hs_tt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="hs_tt";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,0,0,0.196078);';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((140px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 1px 1px 2px #000000;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='pointer-events: none;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._hs_tt.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._hs_tt.ggUpdateText();
		player.addListener('changenode', function() {
			me._hs_tt.ggUpdateText();
		});
		el.appendChild(els);
		me._hs_tt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_tt.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.hotspot.title) == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_tt.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_tt.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_tt.style.transition='';
				if (me._hs_tt.ggCurrentLogicStateVisible == 0) {
					me._hs_tt.style.visibility="hidden";
					me._hs_tt.ggVisible=false;
				}
				else {
					me._hs_tt.style.visibility=(Number(me._hs_tt.style.opacity)>0||!me._hs_tt.style.opacity)?'inherit':'hidden';
					me._hs_tt.ggVisible=true;
				}
			}
		}
		me._hs_tt.logicBlock_visible();
		me._hs_tt.ggUpdatePosition=function (useTransition) {
		}
		me._hs_preview_image.appendChild(me._hs_tt);
		el=me._ht_checkmark_tick=document.createElement('div');
		els=me._ht_checkmark_tick__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOng9Imh0dHA6Ly9ucy5hZG9iZS5jb20vRXh0ZW5zaWJpbGl0eS8xLjAvIiB5PSIwcHgiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgLTM3MjIgLTI2MDYgMzIgMzIiIH'+
			'ZlcnNpb249IjEuMSIgeG1sbnM6YT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZVNWR1ZpZXdlckV4dGVuc2lvbnMvMy4wLyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjMycHgiIHhtbG5zOmk9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVJbGx1c3RyYXRvci8xMC4wLyIgeG1sbnM6Z3JhcGg9Imh0dHA6Ly9ucy5hZG9iZS5jb20vR3JhcGhzLzEuMC8iIHg9IjBweCIgd2lkdGg9IjMycHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSItMzcyMiAtMjYwNiAzMiAzMiI+CiA8'+
			'ZyBpZD0iTGF5ZXJfMSIvPgogPGcgaWQ9IkViZW5lXzEiLz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPGc+CiAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTM2OTUuNDczLTI1OTguMTQ2Yy0wLjUxOS0wLjUxOS0xLjM2MS0wLjUxOS0xLjg3OSwwbC04Ljc4Nyw4Ljc4N2wtMi4yOTEtMi4yNDMgICAgIGMtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAyYy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OSAgICAgYzAuMzQsMCwwLjY4LTAuMTMsMC45NC0wLjM5bDkuNzE3LTkuNz'+
			'E3Qy0zNjk0Ljk1NC0yNTk2Ljc4NS0zNjk0Ljk1NC0yNTk3LjYyNi0zNjk1LjQ3My0yNTk4LjE0NnoiLz4KICAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMzY5OS45Ni0yNTgzLjgzN2gtMTIuMzI1di0xMi4zMjZoMTEuODIxbDIuMjUyLTIuMjUyYy0wLjE2Ni0wLjA4Ni0wLjM1Mi0wLjE0MS0wLjU1Mi0wLjE0MWgtMTQuNzE4ICAgICBjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgxNC43MThjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzICAgICBsLTIuMzkzLDIuMzkzVi0yNTgzLjgz'+
			'N3oiLz4KICAgPC9nPgogICA8ZyBhOmFkb2JlLWJsZW5kaW5nLW1vZGU9Im11bHRpcGx5IiBvcGFjaXR5PSIwLjQiPgogICAgPHBhdGggc3Ryb2tlLXdpZHRoPSIxLjUiIGZpbGw9Im5vbmUiIGE6YWRvYmUtYmxlbmRpbmctbW9kZT0ibm9ybWFsIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9IiAgICAgTS0zNjk1LjQ3My0yNTk4LjE0NmMtMC41MTktMC41MTktMS4zNjEtMC41MTktMS44NzksMGwtOC43ODcsOC43ODdsLTIuMjkxLTIuMjQzYy0wLjUyNS0wLjUxMy0xLjM2Ni0wLjUwNC0xLjg4LDAuMDIgICAgIGMtMC41MTMsMC41MjUtMC41MDQsMS4zNjcsMC4wMjEsMS44OGwzLjIzLDMuMTYzYz'+
			'AuMjU5LDAuMjUzLDAuNTk0LDAuMzc5LDAuOTMsMC4zNzljMC4zNCwwLDAuNjgtMC4xMywwLjk0LTAuMzlsOS43MTctOS43MTcgICAgIEMtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9IiMxQTE3MUIiLz4KICAgIDxwYXRoIHN0cm9rZS13aWR0aD0iMS41IiBmaWxsPSJub25lIiBhOmFkb2JlLWJsZW5kaW5nLW1vZGU9Im5vcm1hbCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSIgICAgIE0tMzY5OS45Ni0yNTgzLjgzN2gtMTIuMzI1di0xMi4zMjZoMTEuODIxbDIuMjUyLTIuMjUyYy0w'+
			'LjE2Ni0wLjA4Ni0wLjM1Mi0wLjE0MS0wLjU1Mi0wLjE0MWgtMTQuNzE4ICAgICBjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgxNC43MThjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzICAgICBsLTIuMzkzLDIuMzkzVi0yNTgzLjgzN3oiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iIzFBMTcxQiIvPgogICA8L2c+CiAgIDxnPgogICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0zNjk1LjQ3My0yNTk4LjE0NmMtMC41MTktMC41MTktMS4zNjEtMC41MTktMS44NzksMGwtOC'+
			'43ODcsOC43ODdsLTIuMjkxLTIuMjQzICAgICBjLTAuNTI1LTAuNTEzLTEuMzY2LTAuNTA0LTEuODgsMC4wMmMtMC41MTMsMC41MjUtMC41MDQsMS4zNjcsMC4wMjEsMS44OGwzLjIzLDMuMTYzYzAuMjU5LDAuMjUzLDAuNTk0LDAuMzc5LDAuOTMsMC4zNzkgICAgIGMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxN0MtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTM2OTkuOTYtMjU4My44MzdoLTEyLjMyNXYtMTIuMzI2aDExLjgyMWwyLjI1Mi0yLjI1MmMtMC4xNjYt'+
			'MC4wODYtMC4zNTItMC4xNDEtMC41NTItMC4xNDFoLTE0LjcxOCAgICAgYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djE0LjcxOWMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMTQuNzE4YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZ2LTEwLjQwMyAgICAgbC0yLjM5MywyLjM5M1YtMjU4My44Mzd6Ii8+CiAgIDwvZz4KICAgPGc+CiAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjAuMiIgZmlsbD0ibm9uZSIgZD0iTS0zNjk1LjQ3My0yNTk4LjE0NiAgICAgYy0wLjUxOS0wLjUxOS0xLjM2MS0wLjUxOS0xLjg3OSwwbC04Ljc4Nyw4Ljc4N2wtMi4yOTEtMi4yNDNjLT'+
			'AuNTI1LTAuNTEzLTEuMzY2LTAuNTA0LTEuODgsMC4wMiAgICAgYy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OWMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxNyAgICAgQy0zNjk0Ljk1NC0yNTk2Ljc4NS0zNjk0Ljk1NC0yNTk3LjYyNi0zNjk1LjQ3My0yNTk4LjE0NnoiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSIjMUExNzFCIi8+CiAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjAuMiIgZmlsbD0ibm9uZSIgZD0iTS0zNjk5'+
			'Ljk2LTI1ODMuODM3ICAgICBoLTEyLjMyNXYtMTIuMzI2aDExLjgyMWwyLjI1Mi0yLjI1MmMtMC4xNjYtMC4wODYtMC4zNTItMC4xNDEtMC41NTItMC4xNDFoLTE0LjcxOGMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnYxNC43MTkgICAgIGMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMTQuNzE4YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZ2LTEwLjQwM2wtMi4zOTMsMi4zOTNWLTI1ODMuODM3eiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9IiMxQTE3MUIiLz4KICAgPC9nPgogIDwvZz4KIDwvZz4KPC9zdm'+
			'c+Cg==';
		me._ht_checkmark_tick__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_checkmark_tick";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_checkmark_tick.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_checkmark_tick.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._ht_checkmark_tick.ggElementNodeId()) == true)) || 
				((me._ht_checkmark_tick.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_checkmark_tick.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_checkmark_tick.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_checkmark_tick.style.transition='';
				if (me._ht_checkmark_tick.ggCurrentLogicStateVisible == 0) {
					me._ht_checkmark_tick.style.visibility=(Number(me._ht_checkmark_tick.style.opacity)>0||!me._ht_checkmark_tick.style.opacity)?'inherit':'hidden';
					me._ht_checkmark_tick.ggVisible=true;
				}
				else {
					me._ht_checkmark_tick.style.visibility="hidden";
					me._ht_checkmark_tick.ggVisible=false;
				}
			}
		}
		me._ht_checkmark_tick.logicBlock_visible();
		me._ht_checkmark_tick.ggUpdatePosition=function (useTransition) {
		}
		me._hs_preview_image.appendChild(me._ht_checkmark_tick);
		me._ht_node_daynight.appendChild(me._hs_preview_image);
		el=me._ht_node_customimage=document.createElement('div');
		els=me._ht_node_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_node_customimage.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_node_customimage.ggSubElement.setAttribute('alt', player._(me._ht_node_customimage.ggAltText));
			me._ht_node_customimage.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_node_customimage.ggText_untranslated = img;
			me._ht_node_customimage.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_node_customimage.ggSubElement.style.width = '0px';
			me._ht_node_customimage.ggSubElement.style.height = '0px';
			me._ht_node_customimage.ggSubElement.src='';
			me._ht_node_customimage.ggSubElement.src=me._ht_node_customimage.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_node_customimage.ggText != player._(me._ht_node_customimage.ggText_untranslated)) {
				me._ht_node_customimage.ggText = player._(me._ht_node_customimage.ggText_untranslated);
				me._ht_node_customimage.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_node_CustomImage";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -145px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_customimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_customimage.style.transition='';
				if (me._ht_node_customimage.ggCurrentLogicStateVisible == 0) {
					me._ht_node_customimage.style.visibility="hidden";
					me._ht_node_customimage.ggSubElement.src='';
					me._ht_node_customimage.ggVisible=false;
				}
				else {
					me._ht_node_customimage.style.visibility=(Number(me._ht_node_customimage.style.opacity)>0||!me._ht_node_customimage.style.opacity)?'inherit':'hidden';
					me._ht_node_customimage.ggSubElement.src=me._ht_node_customimage.ggText;
					me._ht_node_customimage.ggVisible=true;
				}
			}
		}
		me._ht_node_customimage.logicBlock_visible();
		me._ht_node_customimage.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_node_customimage.clientWidth;
			var parentHeight = me._ht_node_customimage.clientHeight;
			var img = me._ht_node_customimage__img;
			var aspectRatioDiv = me._ht_node_customimage.clientWidth / me._ht_node_customimage.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_node_customimage.ggScrollbars || currentWidth < me._ht_node_customimage.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_node_customimage.scrollLeft=currentWidth / 2 - me._ht_node_customimage.clientWidth / 2;
			}
			if (!me._ht_node_customimage.ggScrollbars || currentHeight < me._ht_node_customimage.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_node_customimage.scrollTop=currentHeight / 2 - me._ht_node_customimage.clientHeight / 2;
			}
		}
		me._ht_node_daynight.appendChild(me._ht_node_customimage);
		el=me._tt_ht_3d=document.createElement('div');
		els=me._tt_ht_3d__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_3d";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((150px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -170px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		hs+='\/* \u53bb\u96643D\u6548\u679c\uff0c\u4e26\u8a2d\u5b9a\u6a19\u7c64\u7684\u57fa\u672c\u6a23\u5f0f *\/ transform: translate(0px, 0px); \/* \u4e0d\u4f7f\u75283D\u8b8a\u63db *\/ text-shadow: 1px 1px 2px #000000; \/* \u6dfb\u52a0\u6587\u5b57\u9670\u5f71\uff0c\u8b93\u6a19\u7c64\u66f4\u6e05\u6670 *\/ -webkit-backface-visibility: hidden; backface-visibility: hidden;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 18px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_ht_3d.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_ht_3d.ggUpdateText();
		player.addListener('changenode', function() {
			me._tt_ht_3d.ggUpdateText();
		});
		el.appendChild(els);
		me._tt_ht_3d.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_3d.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsTour() == false)) && 
				((player._(me.hotspot.title) != "")) && 
				((me.elementMouseOver['ht_node_daynight'] == true)) && 
				((player.getVariableValue('opt_3d_preview') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_3d.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_3d.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_3d.style.transition='';
				if (me._tt_ht_3d.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_3d.style.visibility=(Number(me._tt_ht_3d.style.opacity)>0||!me._tt_ht_3d.style.opacity)?'inherit':'hidden';
					me._tt_ht_3d.ggVisible=true;
				}
				else {
					me._tt_ht_3d.style.visibility="hidden";
					me._tt_ht_3d.ggVisible=false;
				}
			}
		}
		me._tt_ht_3d.logicBlock_visible();
		me._tt_ht_3d.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_daynight.appendChild(me._tt_ht_3d);
		el=me.__code=document.createElement('div');
		els=me.__code__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="_code";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 37px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -39px;';
		hs+='visibility : hidden;';
		hs+='width : 66px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='pointer-events: none;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__code.ggUpdateText=function() {
			var params = [];
			var hs = player._("this.onUpdatePosition = function(player, hotspot) {\n    var vs = player.getViewerSize(); \/\/ \u7372\u53d6\u64ad\u653e\u5668\u7684\u5c3a\u5bf8\n\n    \/\/ \u76f4\u63a5\u4f7f\u7528\u71b1\u9ede\u7684\u5ea7\u6a19\u4f86\u5b9a\u4f4d\uff0c\u4e0d\u4f7f\u75283D\u8b8a\u63db\n    var hs = \'translate(\' + hotspot.x + \'px,\' + hotspot.y + \'px)\'; \/\/ \u7528\u71b1\u9ede\u7684 x, y \u5b9a\u4f4d\n\n    \/\/ \u8a2d\u5b9a\u65b0\u7684transform\u5c6c\u6027\uff08\u53bb\u9664\u6240\u67093D\u6548\u679c\uff09\n    this.__div.style.transform = hs;\n    this.__div.style.left = hotspot.x + \"px\"; \/\/ \u4f7f\u7528\u71b1\u9ede\u7684 x \u5ea7\u6a19\u653e\u7f6e\n    this.__div.style.top = hotspot.y + \"px\";  \/\/ \u4f7f\u7528\u71b1\u9ede\u7684 y \u5ea7\u6a19\u653e\u7f6e\n};\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__code.ggUpdateText();
		el.appendChild(els);
		me.__code.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__code.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_daynight.appendChild(me.__code);
		el=me._text_1=document.createElement('div');
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=170;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='color : #000000;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((190px + 0px) / 2) + 170px);';
		hs+='position : absolute;';
		hs+='top : -140px;';
		hs+='visibility : hidden;';
		hs+='width : 190px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : rgba(255,255,255,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 18px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 4px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_1.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.description)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_1.ggUpdateText();
		player.addListener('changenode', function() {
			me._text_1.ggUpdateText();
		});
		el.appendChild(els);
		me._text_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.hotspot.description) != "")) && 
				((me.elementMouseOver['ht_node_daynight'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_1.style.transition='';
				if (me._text_1.ggCurrentLogicStateVisible == 0) {
					me._text_1.style.visibility=(Number(me._text_1.style.opacity)>0||!me._text_1.style.opacity)?'inherit':'hidden';
					me._text_1.ggVisible=true;
				}
				else {
					me._text_1.style.visibility="hidden";
					me._text_1.ggVisible=false;
				}
			}
		}
		me._text_1.logicBlock_visible();
		me._text_1.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_daynight.appendChild(me._text_1);
		me.elementMouseOver['ht_node_daynight']=false;
		me._chevron_white.logicBlock_scaling();
		me._chevron_white.logicBlock_visible();
		me._chevron_white.logicBlock_alpha();
		me.elementMouseOver['chevron_white']=false;
		me._hs_preview_image.logicBlock_alpha();
		me._hs_tt.logicBlock_visible();
		me._ht_checkmark_tick.logicBlock_visible();
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_node_customimage.style.width=hotspot.customimagewidth + 'px';
			me._ht_node_customimage.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_node_customimage.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_node_customimage.logicBlock_visible();
		me._tt_ht_3d.logicBlock_visible();
		me._text_1.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._chevron_white.logicBlock_visible();
				me._hs_tt.logicBlock_visible();
				me._ht_node_customimage.logicBlock_visible();
				me._tt_ht_3d.logicBlock_visible();
				me._text_1.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._chevron_white.logicBlock_visible();
				me._hs_preview_image.logicBlock_alpha();
				me._hs_tt.logicBlock_visible();
				me._ht_checkmark_tick.logicBlock_visible();
				me._ht_checkmark_tick.logicBlock_visible();
				me._ht_node_customimage.logicBlock_visible();
				me._tt_ht_3d.logicBlock_visible();
				me._text_1.logicBlock_visible();
			};
			me.ggEvent_changevisitednodes=function() {
				me._ht_checkmark_tick.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._chevron_white.logicBlock_scaling();
				me._chevron_white.logicBlock_visible();
				me._hs_preview_image.logicBlock_alpha();
				me._hs_tt.logicBlock_visible();
				me._ht_node_customimage.logicBlock_visible();
				me._tt_ht_3d.logicBlock_visible();
				me._text_1.logicBlock_visible();
			};
			me.ggEvent_varchanged_opt_3d_preview=function() {
				me._hs_preview_image.logicBlock_alpha();
				me._tt_ht_3d.logicBlock_visible();
			};
			me.__div = me._ht_node_daynight;
	};
	function SkinHotspotClass_ht_node_camera_switch(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node_camera_switch=document.createElement('div');
		el.ggId="ht_node_camera_switch";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 75px;';
		hs+='position : absolute;';
		hs+='top : 220px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		hs+='transform-style: preserve-3d;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_camera_switch.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node_camera_switch.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_camera_switch.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_camera_switch.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node_camera_switch']=true;
			me._chevron_white0.logicBlock_alpha();
			me._hs_preview_image0.logicBlock_alpha();
			me._tt_ht_3d0.logicBlock_visible();
			me._text_10.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_camera_switch.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node_camera_switch']=false;
			me._chevron_white0.logicBlock_alpha();
			me._hs_preview_image0.logicBlock_alpha();
			me._tt_ht_3d0.logicBlock_visible();
			me._text_10.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_camera_switch.ggUpdatePosition=function (useTransition) {
		}
		el=me._chevron_white0=document.createElement('div');
		els=me._chevron_white0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._chevron_white0__img.setAttribute('src',basePath + 'images/chevron_white0.svg');
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._chevron_white0__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgJ2h0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCc+CjxzdmcgeT0iMHB4IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA0NDggNDU0IiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiBoZWlnaHQ9IjQ1NHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgd2lkdGg9IjQ0OHB4IiB4bWxuczp4bGluaz0iaH'+
			'R0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDQ0OCA0NTQiPgogPGltYWdlIHk9IjAiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBY0FBQUFIR0NBUUFBQUJKZFpQbEFBQUFJR05JVWswQUFIb21BQUNBaEFBQStnQUFBSURvIEFBQjFNQUFBNm1BQUFEcVlBQUFYY0p5NlVUd0FBQUFDWWt0SFJBRC9oNC9NdndBQUFBbHdTRmx6QUFBTEV3QUFDeE1CQUpxY0dBQUEgQUFkMFNVMUZCK2tDQndvbEVaVmMvdkFBQUJrYlNVUkJWSGphN1ozSnN2Tldqb1FQNWV1SXJrMUY5UHMvWkVmVXBoZjJiOVZDbGpXUiAxQmt3SklE'+
			'OEZqWFlWeVNRUUJKSEZJZXRrUUJjci9PZjNUYnY2TWt4TEE0Z0szYnJoYmJFZ0dXQXdNSnlaOUNPWGxCNE43eE50dyt0IGFBdmxOZ2JUZHZ2UWpQcFFZaU1pR2U4ZEdsRVBTcXRNWk9POVF5UEtRMG1WeUdTOFYyaERTU2ltT0htdDl3cU5LQUZGRktTSzlaNmggRGRlZ2ZBSlVOTjRydE9Fc0ZHNEpXdThaMm5BY1NqWU56YmNQYlRnQ3hacUExdnNHVGRnTGhScUU1dXVITnZ3T0plcUcxcHVCSmp5SCA4blJCODYxQUV4NURhYjVDODhsQUcrNUJVVTZoK1dTaENkK2hJQWZRZWxyUWhNOVFqQjFvUG0xb3dqc1U0Z1BhendhYXNEVWE4QVZhIHp4cWFzTHdBRDJnL0gycWJzSFR5RDJnK1grcWFzR3ppRDJnK0'+
			'RHcWFzR1RTRDJnK0pDcGFzR0RLRDJnL1BLcVpzRmk2RDJnK1hDcVogc0ZDcUQyS1pUNllkSytZY2dUS0pQa0J2eGMvbTY0bDR0R1hSVmFoaXdoSkpQa0J0dStkbW00bHhyVmtqcUpLVkFpbmVRV3l6VzR1dCBSamJYcUs5N2xZbEVudXdtVEo3ZUE2VFd3bThxSkxVaTZMV1FtM2NBRnFDMDA3Ykp4N0xVbkwrMVgyZnhiQnVTY2psSm05Z0QveWFLIDN6NytHbVpRY1Rjcjd3QjA4VzZjWEUxRE5SVnk4ZzVBRTgrR3lkZ3NONmlxYUViZUFlamgxU2o1bW1RUFB4dm0wamRWTWc5b1BodDggZE02a2NxSlVIbmkwUmFhbUdNVmU3enhxcDBua2dYVTc1R21HRldqQ3lTeThBNUNGNXZPRTZrL2s0QjJBSkxZTmtL'+
			'SDhHbGhXSVg0TiB3aWZ3Z0lYSGdiWG9qdDQ3QUNtc1NoNjczSmJZbVRCeVRRS0gvb0NsUm9XSHhhK1Jld2V3RG91TWpVMTlvbFluYU5nUFdONElXRlFwIFpvMUNCdjJBaFkwRGE3VWJzWGNBSytpWE5GNUJzV0hGUHVMMURtQVdsakltck50YnRONEJ6S0ZkeGxoRmpBYXI5eFNyZHdBejVDeGcgcmV0NGRMUDF6bTRnVXU4QXhzbFl1b3EzOVdTczQwU2MzZ0dNa3JGc2RXOXUxY3pjTzdmT0tMMERHQ05qd1h5ZnRPTGZwbnI1KytmVyBFYU4zQUNOa0xKWDNnNDRRMmpSalhYdTVlQWZRVCtVeTVXYmJ0Q3JnZjNqN21ydDNBTDFvU2VsdFBvUVc4ZGJnUnRZS254TmtBbVl0IERvTDlVS2c1QmFHUERuZXkybT'+
			'h2TS8yWVBQYTVFcDBFU0JtK1JlWWR3SGN5bCtROU41dW9hRUVjNEplZ3RjcEJ0RTdKb0M1RXdRMm8gSVp2ZU9UZUU3UG9VOE03Y0kwSk1DMEliVU1kKzNsa2hndGVjVlN3SWJNQjY5c09PenBvYUZvUTFZRDM3V1JKRENZMHZDMmdXQkRXZyB2RXc0My93d1FXdk1POWt0Q0dwQWFSRE5oOVVJdU9TMklLUUJvZDZqbnBSSW1tUzI0STkzQUovZzJnK25iQnJJWlNkdm1HM0xxajNjIGNSRFRmaGtmcVJmdndSNnlFV09zQVNDQ2VJQm92N3hQM283M2hMSjhGb1Q2RGlndGJ5VDc1UVR4Z0tvWDNReFFCcFFrenRJek43VGcgT1VBR2xCU0Q5dXZCNjk0THBLaTlhd3hqd09yMlEvZytvZ1cyQlgwQk1XQjErMlVI'+
			'MllMT1Q2WHozTG1HQkZLbE9Zb3AwOUZYQXp2ZCBFTHRtWXM5ZU8zNEc3eWZndllob3ZYNXM5TXRnUVlBbEtKNzlyTGVkRHh1MU10VEUzWUF4N0Vjd2lYK1pvYk1CbzlpUDVoN0ZTckhvIEZuU2ZnRExRSUhXSmJVRlhBL0pVUDVFZzh1SFgwWUJSbHAra0R2WWpJY0VTbFBZamNaZWhiZ2FVU3BUMkk2M0Y3UU1uQTlKK1JCcnQgYTZCMEFId2tSVCswbng0amJZaFNCNmtIVjF5dmRobTVHRkJHSnBTeWUzQ3U0TG95WXhXeWJOaHo0ajA3eHNHQTBTUkNvays3KzEraCAyTUlTR1F2YUhWTENMa0dyTmRkTVc5MCtVMDBwR2F3c2FINFNoc3ZQVWE3WDYzVkZ0WmxQUjlZM1Z1d2hINFZuL3haWnI2TDYzbkRUIH'+
			'MvZmpyWHBxR0tYUFFpNUJZeDNoVnBEOXRueTlqbW9YVitrNDN3Uk5sNkE4L2RMUDJyTFRkcXVJUkRsNGhMc1VMWXF3YTJqYXBJb0YgSmREWHluQUpLcEZNQmZ2MTZyU3ZSYytuY1g2MzB5VEdiNEptaFlobFA3OFRDTjkwNm8za3U5N2FPU0djeU1MdnVuQkwwTng4dThLbCB2eG0yN2R0ZlI1Z1BDT2pxWkdSQS9DTVJBbWNxemIzcDR2eFQrUzJJM3pOaEppQytsS3NjMjJIdE5UTm5uNllGZTlCVXljU0ErY3U4IHp2RURiU1ZhaUJaRUpjZ0V4Qlp4SGYzblNSOGJPYjhGMTlIVHlNQ0E2OEhUZmpKazF6Rmkza0VtWUdiMjdTZXo5UHpjYW44RW1iQysgUTdJZmRRTnkvbUhsWE5XQ3FNQlB3T3oyczM4TlRF'+
			'MExvczVBNVV2UnNwZDFsVlY5bmo4LzhpTTk2NElDK08xSTJlZmZiTTU3QmhwNSBFTVdlQmJOZklicCsyTkZRU0hVSnl1UHNPWFBMejIrM0ZQWGRRWi9iYkhGeWh2NE9pQ2lZYjhiOTkvUE5QME9HSENPdmtLSUJWNFBOIGJyOXhmVVlmRnFqOThNSjQ0T1VNUFFHcklYLzN3cWdGT1FPL0lhMlEya2tZenI5elJxZlowYjk1NkxUL045bFByWXlDZGdhWUV4Q0cgc1F1bXQrMzlqcitqT3dEUGIzSWErZXNjckI2UVpCVlNNaURubnlabmw2bnQvYnY4cG9vTEo2QUxuNWFRZkw3bXB3bHB3V2VRWnFDSyBBVG4vNUpoOXNzcjgzOUdzbG5BQ1FpQnRxOCsvcGEyZXdabUJnQWJrL0h2d1d1aFJaZm9zU0wwOVVUQW'+
			'dqN1hmbUZPSVJwRUVSVTI0IENZZ2lEQUs4bHhJWHFURWpia0RPdjNINjdsOVkzNC9tZGFUeHdEZzRnVTFBREZFeVFVVzFrRGxNZ1JtUVBMQ2JRMVZOaXBDM3NBSFggbWdaQkVFeW9URlk0QVVsaDFnNXNFbXNVVVFOeS9pSHlyR3VOMHl1UjRBUWtwZkdlZ1RBRzVQd2pGUkUwSUpjM2hJd0NNZ0U1Ly9TWSBlM1pvSFh3WG9TQUdKS1FtWWdia0FsUWF1N09YMVd2bnVTNkFtSUJjR0pHNHJCMitJQXhZblo0U3pwYTUrblJEUjhpQUsyWG0vTE5DIDQ3NzdIUGhsL1BaY1VJL2pKUzg2UG83M1dadVpKM3h5L2xtdzh1elZ5Mk1qL2U4ZGlBcEtobFlIZ3I0SFdtQm80bzNYd2ZsdkE5WXAgQW1hbWZjOXJrWHFh'+
			'TnNIaDBscTFVc1hLZHRhQ3M0OHpqTGRRUjJDK3B5N1JHbElDLzR6bm03eHZHZDF2UDM4dFVQQTU4QlQ5R1FLdiA3WHBldjlJWFBjbzNYZExERDR1RnorY2JmVzcvdjllYUkvT1BDMUJid044Um41YzlVNTI5Y3VYc3JmRGY5dVNkYXhSV1hsMDIrMU5FIDBTVW80aUwwbkxueW5yMUhLWjRHR1NsclFIOUd2OXVkbTZsdkQvS2ZJR3ZRZ0ZCOG0wa2pQeVo4KzF2T3YwOVdEa0J6ZXBZMUlNS3ggZmlhR25qblk4emY3YjkzMVZxUWVQQWtEUnMrWCtkdGZyRmlJOWtQaEIrMmw5YlhZVTcvM2ZCb05vNEcxSDRvdVFiR2JWN3NGT1A5dyB1RkI2WC9iVjE3UWdWenhJWEZxclowR3NmRzB0T0hxdEROR2w0QklVcj'+
			'ltc0xIaDBsU2llSXA3TXFyRjBKVXlkRWtUS1ZQYXlhcjRqIEhwRi9KbUNOTXFCbXFYKzdFTzJIeWRNU05IOHBrRE04cytDcUNZKzNnS3lJSDNNWFNNenQ2eUt4RVNMQitXWFQ4NDhsSExuVGtOelEgdityMlRxRXJZZkRiN2Z4SDRPdDFMQWU1NjBxSkhvTlg1TWRsck4zbW42aXlUazhGenVOWjM0SkdIdEVNMysrRWxjeDJQcHJSZ3FNUyArVGFQZmdVczhvbHVRSnNibm5kK0I0d24xRGVpWmFRYjcvaDloVldSdWUva25BSS94RWRzTnoyVFJGVERqL002U0dpNWV4SW0weDBTIGNSdE92Z3B4dGZCazcrWXZPU1VQem9KbXNtQmN0azN1K3lETnQ0YVdmb2MvUStTd1lQeTJPNzc1dHBJS2VYbitEdmpiNjcr'+
			'S1g3YjQgR1R3eW1YOHFXaDRWTW5LZmdGdExNTzlleWRaNDkzejROTkJNM0F4NGFRZTNxY1JkaHVadHdPTjN4K2ZOT1M4L2JmZkgrRHRSTFZpbCBGYXZrbVpkTCszSTlhTVFTUjR5WjFLVGpoM2kyTXlGYVhGbzZlMmtjTUdJdXhEMmhZbjEwWFlvV2FRWkdpcFdReS91dmYvdEVhV3VwIE9QZGVuTUpqZWkvVXFwK2Y5bGV2QmZGRjFUNU00Q3VBUzVSRHVEV1hQRC9BeTVhWURVTXNHREFnZGt0aVIxY2RWdWVJb2ZzQmE4bFkgSzF0TnFPUXhsOWJhbi8xL2ppcWxUbHlvMmNhQ0twNXhhVzNzV3lDaW5Ib3hJV1liQ3lwNHptMEorcGQzR0N2d0NTcTRVTHR2VER3VCBCa3RVaTJpd01vNENEMTA5M0MvRUhseU'+
			'dvdndpWmxWaXRoTFJZZktwYUJnTmlSRUZJZk1zdExEL0ZLUUJTWFFDUHhlVTlpUHhXV3BpIHp4bEkrNUVNTExheGx3VnBQNUtENVViMnNDRHRSN0lROERzZzdVZnlJTkRNdGpPUTlpT1pFSmlBdEFRaHN3aVp4Mm9LMHV3a0YySU4gYldGQjJvOWtJOUJKR05xUDVFT3dxWFZuSU8xSE1pTGExbm9XcFAxSVRrU1hvSHl2T1FuSjFuNXYvL0o1UnJ6NFRqV21JQTFJbE5qYSAvNzc4LzEvdFA3WVA2Z3hnUU5xUEtQSHYzWC82Ui90L3V4RGdYMlJDKzkzcDFaV0tkZkw1VnVpdC9kNWFhKzNhL3JBTFFnRTVDN0taIFZyU2tlbE5zYld0bUR5cFRLcEdNQlNzM2tPUTZvcktPazJ4dDhEbEpLenRTUUtKOXFyWU5m'+
			'OHlwaEZwSlZ0dW9ZclB3Y3I1NktKWmogcloycU5ZcmxUVjNWdEVWR3RSVHpUVldwUmZoWWo4cEF2dEt5VG10NFA5cXhqdEtvQU40TlVhY3B2TzJIRUVGMTFKdDl0TVJWN0RmZSArcjNLNkcyWnlHTWcvVWhEMUdnRkswV29QRDRtc3ZNaXFtZXMxYUQ2eUJpSjN0Y0UrVnZBVHdkV0FCTWdBK1l2dnI4SzN5UElYd1VzIHpPVCtWdnI4aFVkUkFDVU8wcHFoQWM4TG43L281MjAvay85OWl5dWZsWXlIekdBczlGN2g4eGRidnQzZnR5aHZ3dnhWd2NCQjV1ZkMgVnlpejN1elQyTTdhRnNrb0ZGa1orWVgzMFJabHR6YS9SVElDNEtWb21jQnY3N01vZUtHYVBoQk5rSlhqQnA0M244WTJ0YlpLdnNNSiBxRWFrcG'+
			'o2T2lGTlFGeHBRaVVqMk80K0tGdFNFQmxSQnozNTY5cVVGUGFBQlRjR2NmdCtqb3dXMW9BRVZrUDJob0c4cm10c21lbEJ3IGNYVHR0NzhQelcxcjdBTUozd3REa29ycWgxWDdQdllqM3pSMUxPaC9hV1E2U1gzSjBycFo4cGpKMFRaUGZnYzBJRjdieG90NGxQUFQgU25Zbm5kSUxiY2wrMmFJMmM2NXNlbkx6eUpRVFVJeHNEYnNmZVlZZkpKQnlvQUhKSVhFUEhoTFkySlFHRkNMYi9Cdk5OQTc5OFZ0ayBTZ01xRXQ5KzhUTjRaOHhVK2haTUo3QVAvcjhuTWJmWlhMNmhtK3VQbHhSa0hKeUhDbDZ2RVMySXVIZ09LQ01lK2pQQzl3MGJPV1lnIDVzdnl3c21JaUdhRHJoeTFkV09JWlVIVTE4V0dFaEVUTGZ2'+
			'SkxKaGtXaWYrREVSOVpUclBna0p5dlVwOVg1SFpVaXl6N2FuZ3Y0VjkgcklUZFdtdUFYNEhYa1o4Tk9xVmV0VkRrR1lpMGx2allxcGtLbDliYU5aOEpaUnR6L2xWaStsYzNmdTRoaGdIbERtZ2ErVnBLK1B2ZiBlL3ZqdzRaYlZHUGEycTl2eTFxMzJjU2NnYkxyQ2ZsOGJRWDhWL3Q5OTUvL3h6UUtRZVNhVXRvMjhvK0ZpbWhBK2VXOGRNYldBbTd0IDMrMjNsMy95ZjFHblgydHl5ekt0cDZqSi9vQVFiUkdxOFcwNnVnSHZlLzJmOW1mN003TDFXdE4vU1FyYVR3alJaaURtNmF5M3JkbEkga1JPWmhyVDRtVnR2VXVNYVVPL0NNOG1jK1R1Z0tKajJtejFyR2huTi9DUzNEWHY4d2tkaS90a3U2dFlmWmhobE'+
			'VXcHdHNUZRMXB5QSBnbURiNzNQYjQyMkthTFpQSWsxM0d0QU5qMm15YmtGOGJIS1MyZ3NONklUWFlrN2VnbGdtdG90R1prODA0Q1JyOG50K2w2b3dCVzJRIFVJNEdGR1BOUUpiZnJsYjJoZjB0MFBwZ3NyNC9HdEFCLzEvVFh2ZVhaUVpHeklNR05NZmZmcC83ak5pNjcvamtzTHBYR3RBZHIwVWQgOW1KeUZMOUR5TnFlYVVCalVHZk5TbHorT2ZsR3NMSjNHbkFLdVdXazV4eWEyemZlNVBRL0FNeERBNXFpK1diYkdaNzNIN21OdlJuVSA3dW1HUEJxUUJBZmp3REViQlExb0NOcjhlNDhCbzVYSHdJbDVNSksvZGFjQlNXQnc3RGNiRFEzb0JzTDhlNDhEcTZHL0VTdmFEeTcvIC9BZXhJSGk3d0lHbzUvZ3ls'+
			'QVlrSVVHMDMzQmNQelNnR1lnbllQWmlRVzNzT0l3cFNBT1NnR0FmSmdhaTIyaEFFZzVzK3cxQkEvcUEgdEFCRmpPZU1DUGJyanZGQ0E1STNzQnNjTzdyaE9IL1JnQ1pFYVJ0MEl1bllGeXNOU01JUXlYNjlLZEdBaENqUmM4Q2dBUjFBUE9XQiBHTk1yRWVmZmw1ai9wQUZKRUNMYTcydmNWeHB3a25vdk8vSE5OTEs2aDdILzFSb05TQVRRWHI1R3R0OXhVcmYvb2dFSk9QSHQ5NUhCIHI4Zi9wQUVKTlBIdGQ1N0ZqOVpPOE0rcUVXTEg5YnJ2Q0JFRDd2bjc5czhxMmZCSTRsellUcVFjOCsrZXkxNS9DQ3hCejBTNlhqTkogK0V3RnMvVmg5MGJmakN3YXNNZGdGV1NNRDE2VjhDTFN5R2pKZ0wwUzVaTnlMYz'+
			'hxZXF5UVU2UFByQllNT0NKUlRqbnJZVlhIdlAzeSBuaGwvaHBobTVMdFAzbStNR3BubHRkOG4wd1ljRmFtR3FCbXl6SHV3d09DMVJ5WU5PTk5vR1pwVENqUXQrdUt4aVJwTkc5ME11UVJkIGdMTkNYb0g4OW52TmtnWVVKbThEV1dTV1Y3MmpUS2NNT0N0VEhYay9lWjhWU0ZvOHgrSTUxWkUwc1lJVGNJbTlkczNaUm50WnlabzEgcDI3ZjhxVUJ6ZUEzUnZMS2xYZkVyek0vQTFHTytEMExVTTQvTFl3TldGVm1RdmE0OHJHRTYvVFBRTVFUTWJQemo4aEFBNUlwdUFDViBZY3FBSytKbmxEcnVET3padjNlTXVlRUVWQVAvVk16OFEwUjRSbGNLR2xDRS9vWkViVjIvODU4Nlc0ekNwQUc1Q0pYTDFFc1BMajhS'+
			'IDRBUVVZditRMURjLy9KODEzUjk5NVdrbHo4WTM1TXF4c2d5MXRpRGVaS3RxYXhjRDRwWGZQMWRMVGQ3M2hUSC82bGx3MnhZTVdFK3UgNzZ3c1EvMmV0NEpoUC8ydG8zSExsa3RRVWZBdHVHSS9mZXBZOEo2cDI5bk1yRklmcWRKck9GMWQxdXhuVmJQY1gxRmVWVnlTZEVXbyByQVpFdG1BTSsxbmkzOEZ1QnN4WjBCdXJGclI1MWdydDUyOC9mZ2RVWWYycUV1bEZHTzJIeXBJQldaWlJSaXdvWmNLOUxXR2RldkVCIEk5dEZDM0VSZXNTeE1tUG5QOWMwR2xuZ2FzV0FDc0lDbEV0UU5ZNUxOSGJpWlg0U0huMlM5a05pV1Z6T3dHUE90Sm41SGJCUHJkRzkgem53aVBpaDlTd09xSW0zQjQwLzJmSmIyNjh2Nk'+
			'c1S3EwSURLeU02amVXYWU5NUszT2poZEs3QXBuR1F3T2RmSHdvUnpEMXZLWEJtYyBucVVCRFpqN2JpZGp3dGtubldXdUMxTEhpbXdNS1NGVVBFeEk4ODNsZnc0TkdKVFpreVF6K3A1cFN2dXRmRnBhSFFBRDVpLzVuUjZkIFZxenpUY25WL2VjZ29RSFJra0xHeXdRclAzQmtBbTFZUUJpd1F1RWY5R29scFluMS9yQkJHeFZpRzBSTERKc1J0V2ExR2F0SWpRcmcgRFFvUUExWnBnQWN6ZXZWb3BMWGRIT0NOaVI4dkthcXpiZVB0b0hHTlRCM3pvZHlBOUlxZy9KeUJNM2cyUlRYRkVUdVVFOUNabVVrbyB0ZDlhSU5wUDlIN0ExUUFSRndnV1ZNMmJ0TVliY3N0U3pmYVk4MC9ZZ0p5QnF6bHZHeC85WGd2aG9x'+
			'eGJxRnFiSEwybFNQSmdkTFRWIE9scWp6ai94a3pEYlZuR0thWEF2T2NxZDIwUUhnd2ZBRG9kVXFHM0dKcExFZGFRVlp5RHUvRlA0R1lJelVJOGFkcEVHdXg4Qno0SmkgQzZhWEtlMkZpVzVkRkF5NEhuQWRDOXJ6V3AzOFNxTm5DRGdCcThENUZ3SHR1cWdZa0RNUW1Vb3pFRDg3VGtBbjhGc2pQaEhPeUNzWiBrRE53RE5zRmFLVVppQTd3QkdSamtCVWl6RDlGQS9La3dobmVKMkR5ejhBb09RRlB3RGdpa296WUhCWVZEU2lSUUU0TGVzKy8vTVRwIEcrZ0oyRm9rS1dPUmVSRXFrWTNWWVZIVmdEeTI3OEg1Ung0b1QwQXVRM0hKT2dNanpiOEFTOURXTWpVSDBTYVcvUXdNeUNYV0swZ0wgMEh3ek1GNE9JU1'+
			'pnUkdGSlZHd1BpZ1lHbEVrb2h3V1I1dCszNk9JUk1YNlRDVWdMb29KMkNGaEI5NVhlV2dSWmd0Nklia0hzK1JlYiBtUFl6TXlDYkRaVWNKMktpeG0wNEFia01qUng3RFR6R1JLZ2xhR3Q1MmhoblRSQi9Ca1pkZnJabWFrRHJWeTZUR3NUdUIyUFhTNG1GIE16L21Na2VMSHp1Ni9zam44Y281M0JMMFJ1eWpIcEVpdXYzTURTaVhhQ3dMeHAwd3lNVHFnWDNNSnlDYkQ1R0lKMkxrb3ZUc3lhQkwgME5haXRNbG5wRHdFWWVGYkR3Y0RWbDJHWWhOdEJ1SkgySWZMQktRRnlSbzVscCt0bWY4TThTQ1BoR09aSWtjYkpkSk12UlA0TytBZCBUc0ZhWkxLZm93RWxrMGUyWUpTcDhoa2RwcXFZVWMzak9BR3JXSkRJ'+
			'SVZsbmpJT2hjeEFSQktXNTE4RzdGd2JEZmltK0E5N1JNUXJ0IEo0R0VpaG50NTI1QVdTRm9GbHhXYTVQVGZ1NEdwQVZKRDNucjZtNUFXcENjYzczSzFoUnAva0VZa0JZa3gwaFhFOHQrSUFhVXR5Qk4gbUlQczlvTXhvRHp4YjlYTXhZeU8rZTNuL2p2Z00vSlRDMUZ3MGtzRiswRk5RSG1CdUJDTlM1WGFnUjBWT0FXSmp2bFErd0F1ckVyaSBrejFxZFFCZ1lMVUtRRjZwVm4zSTBLb1ZnZHlwVjNuUTRPb1ZndWljZGtHdk9teDROY3RSbDZyMUJnNndha25xb2ZXVFE0UmFRNGRZIHVUQjFxRjFsOENCckY2Y0MxU3NNSDJiMUFtVkc3MnFYT05VTkVDakxsQlBXdGJVUUJtU3A4cUY1cFdlc21nWUpsZ1hMZy'+
			's1bDF0R3EgR1NaY2xpMEhyT05ieE40QjlNUFNSVWY3RnFPSU5Rd1ZNZ3NZR1Zadk4ycnZBTWJRdjAwelpoblJZZDBPNC9ZT1lCU1dNaHFzMkducyAzZ0dNWS9Hd2dzZ2xSWUsxK2hxOWR3QnpzTEQ0MkR6VkpYcVZ3b2JQOGlKajlVaWwrUFVKbkFDTGpJbmQ4OHd5VkNaMENpdzFIandzIER1YmhIY0FhbGsrUHpGSnlMVmlMcVV5OEExaUhoZmZIOWpHNm1hcVFJaFhycHlobmFvQjFxUDVTTnQ0QnlHRC9JUE5jYlRBTHpiZWMga1hjQWN0Q0Vsbmk4dXlHajNxbFM4bm1oUjhhMk9NUHJ0U2s1ZFU2V2xOODdkWEsyeHpzMG4zaG0zZ0hJNC9saXE3eU5RbFdWY3ZNTyBRQVB2ZDh2bGFoaXFxWnFkZHdBNmVE'+
			'ZE5heGtheDEvRitCcCt6ZEE3QUQzODIrZkd0cDFGc20zdHQvWUxKOHR0UTFMT093S0RITDBEIDBBU2xrVzdndHhPU1h2aHFDZVhwSFlBMlNFMTE0OVphcjNITnRkdHFibnVSWUZERmZnVU0yQnBtaTdXMjJtWXpXVDN2TWFjcTBTaVMgTEdxelBSaHR1NTZNUHJlSnJrTXQ4N1hXMmdaZUVVbGlwU3JUaWhWekRrVWxBMFpyeDFvVU5GOXIxUXpZR2sySVNGSHp0VmJSZ0szUiBoRmdVdGw5VkE5S0NLSlEyWDJ0MURkZ2FUZWhOZWZPMVZ0dUFyZEdFWHRCOGYxUGRnSzNSaFBiUWZ2OUFBOTZnRERiUWVtL1FnQThvIGhUYTAzd2MwNEN1VVF3dWFieGNhOEJOS0lndXRkd0lOdUE5bGtZSG0rd0lOZUFiRldZSG'+
			'02NEFHL0FZRm1vSG02NFFHN0lFaTlVUHIgRFVFRDlrT3B2a0h6RFVNRGprRzU5cUgxSnFFQlo2Qm96OUI4QzlDQTgxQTZXbThaR25DVmlnTFNlR0xRZ0RKVWtaSFdFNFlHbENXdiBuTFNlQ2pTZ0JwbEVwZkZVb1FFMWlTd3VqV2NDRFdoQkpKRnBQRk5vUUdzd0JhZnRuS0FCL2ZDV25xWURnQVpFd2FJUXRCd2NOQ0EyIEsrV2gzUUx3WHd5VkxremNjS3psQUFBQUpYUkZXSFJrWVhSbE9tTnlaV0YwWlFBeU1ESTFMVEF5TFRBM1ZERXdPak0zT2pFekt6QXcgT2pBdzFTdnB1d0FBQUNWMFJWaDBaR0YwWlRwdGIyUnBabmtBTWpBeU5TMHdNaTB3TjFReE1Eb3pOem94TXlzd01Eb3dNS1IyVVFjQSBBQUFv'+
			'ZEVWWWRHUmhkR1U2ZEdsdFpYTjBZVzF3QURJd01qVXRNREl0TURkVU1UQTZNemM2TVRjck1EQTZNREFITEZUTEFBQUFBRWxGIFRrU3VRbUNDIiB4PSIwIiBpZD0iaW1hZ2UwIiB3aWR0aD0iNDQ4IiBoZWlnaHQ9IjQ1NCIvPgo8L3N2Zz4K';
		me._chevron_white0__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="chevron_white";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='opacity : 0.70003;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		hs+='transform:translate3d(0px,0px,1px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._chevron_white0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_white0.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._chevron_white0.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._chevron_white0.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._chevron_white0.style.transition='transform 0s, opacity 500ms ease 0ms';
				if (me._chevron_white0.ggCurrentLogicStateScaling == 0) {
					me._chevron_white0.ggParameter.sx = 0.5;
					me._chevron_white0.ggParameter.sy = 0.5;
					me._chevron_white0.style.transform=parameterToTransform(me._chevron_white0.ggParameter);
					skin.updateSize(me._chevron_white0);
				}
				else {
					me._chevron_white0.ggParameter.sx = 1;
					me._chevron_white0.ggParameter.sy = 1;
					me._chevron_white0.style.transform=parameterToTransform(me._chevron_white0.ggParameter);
					skin.updateSize(me._chevron_white0);
				}
			}
		}
		me._chevron_white0.logicBlock_scaling();
		me._chevron_white0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._chevron_white0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._chevron_white0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._chevron_white0.style.transition='transform 0s, opacity 500ms ease 0ms';
				if (me._chevron_white0.ggCurrentLogicStateVisible == 0) {
					me._chevron_white0.style.visibility="hidden";
					me._chevron_white0.ggVisible=false;
				}
				else {
					me._chevron_white0.style.visibility=(Number(me._chevron_white0.style.opacity)>0||!me._chevron_white0.style.opacity)?'inherit':'hidden';
					me._chevron_white0.ggVisible=true;
				}
			}
		}
		me._chevron_white0.logicBlock_visible();
		me._chevron_white0.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node_camera_switch'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_white0.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_white0.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_white0.style.transition='transform 0s, opacity 500ms ease 0ms';
				if (me._chevron_white0.ggCurrentLogicStateAlpha == 0) {
					me._chevron_white0.style.visibility=me._chevron_white0.ggVisible?'inherit':'hidden';
					me._chevron_white0.style.opacity=1;
				}
				else {
					me._chevron_white0.style.visibility=me._chevron_white0.ggVisible?'inherit':'hidden';
					me._chevron_white0.style.opacity=0.70003;
				}
			}
		}
		me._chevron_white0.logicBlock_alpha();
		me._chevron_white0.onmouseenter=function (e) {
			me._chevron_white0__img.style.visibility='hidden';
			me._chevron_white0__imgo.style.visibility='inherit';
			me.elementMouseOver['chevron_white0']=true;
		}
		me._chevron_white0.onmouseleave=function (e) {
			me._chevron_white0__img.style.visibility='inherit';
			me._chevron_white0__imgo.style.visibility='hidden';
			me.elementMouseOver['chevron_white0']=false;
		}
		me._chevron_white0.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_camera_switch.appendChild(me._chevron_white0);
		el=me._hs_preview_image0=document.createElement('div');
		els=me._hs_preview_image0__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/hs_preview_image_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hs_preview_image";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='z-index: -5;';
		hs+='height : 90px;';
		hs+='left : calc(50% - ((140px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -100px;';
		hs+='visibility : hidden;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		hs+='\/* \u8a2d\u5b9a\u7e2e\u5716\u9810\u89bd\u7684\u6a23\u5f0f *\/ border-radius: 5px; \/* \u5713\u89d2\u6548\u679c *\/ overflow: hidden; \/* \u96b1\u85cf\u6ea2\u51fa\u5167\u5bb9 *\/ box-shadow: 0px 0px 2px #ffffff; \/* \u767d\u8272\u9670\u5f71\u6548\u679c *\/ transform: translate(0px, 0px); \/* \u53bb\u96643D\u8b8a\u63db *\/ scale(1.5); \/* \u653e\u5927\u7e2e\u5716 *\/ -webkit-backface-visibility: hidden; backface-visibility: hidden;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hs_preview_image0.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._hs_preview_image0.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node_camera_switch'] == true)) && 
				((player.getVariableValue('opt_3d_preview') == true)) && 
				((player.getIsTour() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hs_preview_image0.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hs_preview_image0.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hs_preview_image0.style.transition='opacity 500ms ease 0ms';
				if (me._hs_preview_image0.ggCurrentLogicStateAlpha == 0) {
					me._hs_preview_image0.style.visibility=me._hs_preview_image0.ggVisible?'inherit':'hidden';
					me._hs_preview_image0.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._hs_preview_image0.style.opacity == 0.0) { me._hs_preview_image0.style.visibility="hidden"; } }, 505);
					me._hs_preview_image0.style.opacity=0;
				}
			}
		}
		me._hs_preview_image0.logicBlock_alpha();
		me._hs_preview_image0.ggUpdatePosition=function (useTransition) {
		}
		el=me._hs_tt0=document.createElement('div');
		els=me._hs_tt0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="hs_tt";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 0px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((140px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 1px 1px 2px #000000;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : rgba(0,0,0,0.196078);';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._hs_tt0.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._hs_tt0.ggUpdateText();
		player.addListener('changenode', function() {
			me._hs_tt0.ggUpdateText();
		});
		el.appendChild(els);
		me._hs_tt0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_tt0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.hotspot.title) == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_tt0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_tt0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_tt0.style.transition='';
				if (me._hs_tt0.ggCurrentLogicStateVisible == 0) {
					me._hs_tt0.style.visibility="hidden";
					me._hs_tt0.ggVisible=false;
				}
				else {
					me._hs_tt0.style.visibility=(Number(me._hs_tt0.style.opacity)>0||!me._hs_tt0.style.opacity)?'inherit':'hidden';
					me._hs_tt0.ggVisible=true;
				}
			}
		}
		me._hs_tt0.logicBlock_visible();
		me._hs_tt0.ggUpdatePosition=function (useTransition) {
		}
		me._hs_preview_image0.appendChild(me._hs_tt0);
		el=me._ht_checkmark_tick0=document.createElement('div');
		els=me._ht_checkmark_tick0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOng9Imh0dHA6Ly9ucy5hZG9iZS5jb20vRXh0ZW5zaWJpbGl0eS8xLjAvIiB5PSIwcHgiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgLTM3MjIgLTI2MDYgMzIgMzIiIH'+
			'ZlcnNpb249IjEuMSIgeG1sbnM6YT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZVNWR1ZpZXdlckV4dGVuc2lvbnMvMy4wLyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjMycHgiIHhtbG5zOmk9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVJbGx1c3RyYXRvci8xMC4wLyIgeG1sbnM6Z3JhcGg9Imh0dHA6Ly9ucy5hZG9iZS5jb20vR3JhcGhzLzEuMC8iIHg9IjBweCIgd2lkdGg9IjMycHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSItMzcyMiAtMjYwNiAzMiAzMiI+CiA8'+
			'ZyBpZD0iTGF5ZXJfMSIvPgogPGcgaWQ9IkViZW5lXzEiLz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPGc+CiAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTM2OTUuNDczLTI1OTguMTQ2Yy0wLjUxOS0wLjUxOS0xLjM2MS0wLjUxOS0xLjg3OSwwbC04Ljc4Nyw4Ljc4N2wtMi4yOTEtMi4yNDMgICAgIGMtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAyYy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OSAgICAgYzAuMzQsMCwwLjY4LTAuMTMsMC45NC0wLjM5bDkuNzE3LTkuNz'+
			'E3Qy0zNjk0Ljk1NC0yNTk2Ljc4NS0zNjk0Ljk1NC0yNTk3LjYyNi0zNjk1LjQ3My0yNTk4LjE0NnoiLz4KICAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMzY5OS45Ni0yNTgzLjgzN2gtMTIuMzI1di0xMi4zMjZoMTEuODIxbDIuMjUyLTIuMjUyYy0wLjE2Ni0wLjA4Ni0wLjM1Mi0wLjE0MS0wLjU1Mi0wLjE0MWgtMTQuNzE4ICAgICBjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgxNC43MThjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzICAgICBsLTIuMzkzLDIuMzkzVi0yNTgzLjgz'+
			'N3oiLz4KICAgPC9nPgogICA8ZyBhOmFkb2JlLWJsZW5kaW5nLW1vZGU9Im11bHRpcGx5IiBvcGFjaXR5PSIwLjQiPgogICAgPHBhdGggc3Ryb2tlLXdpZHRoPSIxLjUiIGZpbGw9Im5vbmUiIGE6YWRvYmUtYmxlbmRpbmctbW9kZT0ibm9ybWFsIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9IiAgICAgTS0zNjk1LjQ3My0yNTk4LjE0NmMtMC41MTktMC41MTktMS4zNjEtMC41MTktMS44NzksMGwtOC43ODcsOC43ODdsLTIuMjkxLTIuMjQzYy0wLjUyNS0wLjUxMy0xLjM2Ni0wLjUwNC0xLjg4LDAuMDIgICAgIGMtMC41MTMsMC41MjUtMC41MDQsMS4zNjcsMC4wMjEsMS44OGwzLjIzLDMuMTYzYz'+
			'AuMjU5LDAuMjUzLDAuNTk0LDAuMzc5LDAuOTMsMC4zNzljMC4zNCwwLDAuNjgtMC4xMywwLjk0LTAuMzlsOS43MTctOS43MTcgICAgIEMtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9IiMxQTE3MUIiLz4KICAgIDxwYXRoIHN0cm9rZS13aWR0aD0iMS41IiBmaWxsPSJub25lIiBhOmFkb2JlLWJsZW5kaW5nLW1vZGU9Im5vcm1hbCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSIgICAgIE0tMzY5OS45Ni0yNTgzLjgzN2gtMTIuMzI1di0xMi4zMjZoMTEuODIxbDIuMjUyLTIuMjUyYy0w'+
			'LjE2Ni0wLjA4Ni0wLjM1Mi0wLjE0MS0wLjU1Mi0wLjE0MWgtMTQuNzE4ICAgICBjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgxNC43MThjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzICAgICBsLTIuMzkzLDIuMzkzVi0yNTgzLjgzN3oiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iIzFBMTcxQiIvPgogICA8L2c+CiAgIDxnPgogICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0zNjk1LjQ3My0yNTk4LjE0NmMtMC41MTktMC41MTktMS4zNjEtMC41MTktMS44NzksMGwtOC'+
			'43ODcsOC43ODdsLTIuMjkxLTIuMjQzICAgICBjLTAuNTI1LTAuNTEzLTEuMzY2LTAuNTA0LTEuODgsMC4wMmMtMC41MTMsMC41MjUtMC41MDQsMS4zNjcsMC4wMjEsMS44OGwzLjIzLDMuMTYzYzAuMjU5LDAuMjUzLDAuNTk0LDAuMzc5LDAuOTMsMC4zNzkgICAgIGMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxN0MtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTM2OTkuOTYtMjU4My44MzdoLTEyLjMyNXYtMTIuMzI2aDExLjgyMWwyLjI1Mi0yLjI1MmMtMC4xNjYt'+
			'MC4wODYtMC4zNTItMC4xNDEtMC41NTItMC4xNDFoLTE0LjcxOCAgICAgYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djE0LjcxOWMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMTQuNzE4YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZ2LTEwLjQwMyAgICAgbC0yLjM5MywyLjM5M1YtMjU4My44Mzd6Ii8+CiAgIDwvZz4KICAgPGc+CiAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjAuMiIgZmlsbD0ibm9uZSIgZD0iTS0zNjk1LjQ3My0yNTk4LjE0NiAgICAgYy0wLjUxOS0wLjUxOS0xLjM2MS0wLjUxOS0xLjg3OSwwbC04Ljc4Nyw4Ljc4N2wtMi4yOTEtMi4yNDNjLT'+
			'AuNTI1LTAuNTEzLTEuMzY2LTAuNTA0LTEuODgsMC4wMiAgICAgYy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OWMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxNyAgICAgQy0zNjk0Ljk1NC0yNTk2Ljc4NS0zNjk0Ljk1NC0yNTk3LjYyNi0zNjk1LjQ3My0yNTk4LjE0NnoiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSIjMUExNzFCIi8+CiAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjAuMiIgZmlsbD0ibm9uZSIgZD0iTS0zNjk5'+
			'Ljk2LTI1ODMuODM3ICAgICBoLTEyLjMyNXYtMTIuMzI2aDExLjgyMWwyLjI1Mi0yLjI1MmMtMC4xNjYtMC4wODYtMC4zNTItMC4xNDEtMC41NTItMC4xNDFoLTE0LjcxOGMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnYxNC43MTkgICAgIGMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMTQuNzE4YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZ2LTEwLjQwM2wtMi4zOTMsMi4zOTNWLTI1ODMuODM3eiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9IiMxQTE3MUIiLz4KICAgPC9nPgogIDwvZz4KIDwvZz4KPC9zdm'+
			'c+Cg==';
		me._ht_checkmark_tick0__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_checkmark_tick";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_checkmark_tick0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_checkmark_tick0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._ht_checkmark_tick0.ggElementNodeId()) == true)) || 
				((me._ht_checkmark_tick0.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_checkmark_tick0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_checkmark_tick0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_checkmark_tick0.style.transition='';
				if (me._ht_checkmark_tick0.ggCurrentLogicStateVisible == 0) {
					me._ht_checkmark_tick0.style.visibility=(Number(me._ht_checkmark_tick0.style.opacity)>0||!me._ht_checkmark_tick0.style.opacity)?'inherit':'hidden';
					me._ht_checkmark_tick0.ggVisible=true;
				}
				else {
					me._ht_checkmark_tick0.style.visibility="hidden";
					me._ht_checkmark_tick0.ggVisible=false;
				}
			}
		}
		me._ht_checkmark_tick0.logicBlock_visible();
		me._ht_checkmark_tick0.ggUpdatePosition=function (useTransition) {
		}
		me._hs_preview_image0.appendChild(me._ht_checkmark_tick0);
		me._ht_node_camera_switch.appendChild(me._hs_preview_image0);
		el=me._ht_node_customimage0=document.createElement('div');
		els=me._ht_node_customimage0__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_node_customimage0.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_node_customimage0.ggSubElement.setAttribute('alt', player._(me._ht_node_customimage0.ggAltText));
			me._ht_node_customimage0.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_node_customimage0.ggText_untranslated = img;
			me._ht_node_customimage0.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_node_customimage0.ggSubElement.style.width = '0px';
			me._ht_node_customimage0.ggSubElement.style.height = '0px';
			me._ht_node_customimage0.ggSubElement.src='';
			me._ht_node_customimage0.ggSubElement.src=me._ht_node_customimage0.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_node_customimage0.ggText != player._(me._ht_node_customimage0.ggText_untranslated)) {
				me._ht_node_customimage0.ggText = player._(me._ht_node_customimage0.ggText_untranslated);
				me._ht_node_customimage0.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_node_CustomImage";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -145px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_customimage0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_customimage0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_customimage0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_customimage0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_customimage0.style.transition='';
				if (me._ht_node_customimage0.ggCurrentLogicStateVisible == 0) {
					me._ht_node_customimage0.style.visibility="hidden";
					me._ht_node_customimage0.ggSubElement.src='';
					me._ht_node_customimage0.ggVisible=false;
				}
				else {
					me._ht_node_customimage0.style.visibility=(Number(me._ht_node_customimage0.style.opacity)>0||!me._ht_node_customimage0.style.opacity)?'inherit':'hidden';
					me._ht_node_customimage0.ggSubElement.src=me._ht_node_customimage0.ggText;
					me._ht_node_customimage0.ggVisible=true;
				}
			}
		}
		me._ht_node_customimage0.logicBlock_visible();
		me._ht_node_customimage0.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_node_customimage0.clientWidth;
			var parentHeight = me._ht_node_customimage0.clientHeight;
			var img = me._ht_node_customimage0__img;
			var aspectRatioDiv = me._ht_node_customimage0.clientWidth / me._ht_node_customimage0.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_node_customimage0.ggScrollbars || currentWidth < me._ht_node_customimage0.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_node_customimage0.scrollLeft=currentWidth / 2 - me._ht_node_customimage0.clientWidth / 2;
			}
			if (!me._ht_node_customimage0.ggScrollbars || currentHeight < me._ht_node_customimage0.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_node_customimage0.scrollTop=currentHeight / 2 - me._ht_node_customimage0.clientHeight / 2;
			}
		}
		me._ht_node_camera_switch.appendChild(me._ht_node_customimage0);
		el=me._tt_ht_3d0=document.createElement('div');
		els=me._tt_ht_3d0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_3d";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((150px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -170px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		hs+='\/* \u53bb\u96643D\u6548\u679c\uff0c\u4e26\u8a2d\u5b9a\u6a19\u7c64\u7684\u57fa\u672c\u6a23\u5f0f *\/ transform: translate(0px, 0px); \/* \u4e0d\u4f7f\u75283D\u8b8a\u63db *\/ text-shadow: 1px 1px 2px #000000; \/* \u6dfb\u52a0\u6587\u5b57\u9670\u5f71\uff0c\u8b93\u6a19\u7c64\u66f4\u6e05\u6670 *\/ -webkit-backface-visibility: hidden; backface-visibility: hidden;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 18px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_ht_3d0.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_ht_3d0.ggUpdateText();
		player.addListener('changenode', function() {
			me._tt_ht_3d0.ggUpdateText();
		});
		el.appendChild(els);
		me._tt_ht_3d0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_3d0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsTour() == false)) && 
				((player._(me.hotspot.title) != "")) && 
				((me.elementMouseOver['ht_node_camera_switch'] == true)) && 
				((player.getVariableValue('opt_3d_preview') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_3d0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_3d0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_3d0.style.transition='';
				if (me._tt_ht_3d0.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_3d0.style.visibility=(Number(me._tt_ht_3d0.style.opacity)>0||!me._tt_ht_3d0.style.opacity)?'inherit':'hidden';
					me._tt_ht_3d0.ggVisible=true;
				}
				else {
					me._tt_ht_3d0.style.visibility="hidden";
					me._tt_ht_3d0.ggVisible=false;
				}
			}
		}
		me._tt_ht_3d0.logicBlock_visible();
		me._tt_ht_3d0.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_camera_switch.appendChild(me._tt_ht_3d0);
		el=me.__code0=document.createElement('div');
		els=me.__code0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="_code";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 37px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -39px;';
		hs+='visibility : hidden;';
		hs+='width : 66px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='pointer-events: none;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__code0.ggUpdateText=function() {
			var params = [];
			var hs = player._("this.onUpdatePosition = function(player, hotspot) {\n    var vs = player.getViewerSize(); \/\/ \u7372\u53d6\u64ad\u653e\u5668\u7684\u5c3a\u5bf8\n\n    \/\/ \u76f4\u63a5\u4f7f\u7528\u71b1\u9ede\u7684\u5ea7\u6a19\u4f86\u5b9a\u4f4d\uff0c\u4e0d\u4f7f\u75283D\u8b8a\u63db\n    var hs = \'translate(\' + hotspot.x + \'px,\' + hotspot.y + \'px)\'; \/\/ \u7528\u71b1\u9ede\u7684 x, y \u5b9a\u4f4d\n\n    \/\/ \u8a2d\u5b9a\u65b0\u7684transform\u5c6c\u6027\uff08\u53bb\u9664\u6240\u67093D\u6548\u679c\uff09\n    this.__div.style.transform = hs;\n    this.__div.style.left = hotspot.x + \"px\"; \/\/ \u4f7f\u7528\u71b1\u9ede\u7684 x \u5ea7\u6a19\u653e\u7f6e\n    this.__div.style.top = hotspot.y + \"px\";  \/\/ \u4f7f\u7528\u71b1\u9ede\u7684 y \u5ea7\u6a19\u653e\u7f6e\n};\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__code0.ggUpdateText();
		el.appendChild(els);
		me.__code0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__code0.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_camera_switch.appendChild(me.__code0);
		el=me._text_10=document.createElement('div');
		els=me._text_10__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=170;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='color : #000000;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((190px + 0px) / 2) + 170px);';
		hs+='position : absolute;';
		hs+='top : -140px;';
		hs+='visibility : hidden;';
		hs+='width : 190px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : rgba(255,255,255,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 18px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 4px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_10.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.description)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_10.ggUpdateText();
		player.addListener('changenode', function() {
			me._text_10.ggUpdateText();
		});
		el.appendChild(els);
		me._text_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_10.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._text_10.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._text_10.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._text_10.style.transition='left 0s, top 0s, transform 0s';
				if (me._text_10.ggCurrentLogicStatePosition == 0) {
					me._text_10.style.left = 'calc(50% - (190px / 2))';
					me._text_10.style.top='60px';
				}
				else {
					me._text_10.style.left='calc(50% - ((190px + 0px) / 2) + 170px)';
					me._text_10.style.top='-140px';
				}
			}
		}
		me._text_10.logicBlock_position();
		me._text_10.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._text_10.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._text_10.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._text_10.style.transition='left 0s, top 0s, transform 0s';
				if (me._text_10.ggCurrentLogicStateScaling == 0) {
					me._text_10.ggParameter.sx = 0.75;
					me._text_10.ggParameter.sy = 0.7;
					me._text_10.style.transform=parameterToTransform(me._text_10.ggParameter);
					skin.updateSize(me._text_10);
				}
				else {
					me._text_10.ggParameter.sx = 1;
					me._text_10.ggParameter.sy = 1;
					me._text_10.style.transform=parameterToTransform(me._text_10.ggParameter);
					skin.updateSize(me._text_10);
				}
			}
		}
		me._text_10.logicBlock_scaling();
		me._text_10.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.hotspot.description) != "")) && 
				((me.elementMouseOver['ht_node_camera_switch'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_10.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_10.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_10.style.transition='left 0s, top 0s, transform 0s';
				if (me._text_10.ggCurrentLogicStateVisible == 0) {
					me._text_10.style.visibility=(Number(me._text_10.style.opacity)>0||!me._text_10.style.opacity)?'inherit':'hidden';
					me._text_10.ggVisible=true;
				}
				else {
					me._text_10.style.visibility="hidden";
					me._text_10.ggVisible=false;
				}
			}
		}
		me._text_10.logicBlock_visible();
		me._text_10.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_camera_switch.appendChild(me._text_10);
		me.elementMouseOver['ht_node_camera_switch']=false;
		me._chevron_white0.logicBlock_scaling();
		me._chevron_white0.logicBlock_visible();
		me._chevron_white0.logicBlock_alpha();
		me.elementMouseOver['chevron_white0']=false;
		me._hs_preview_image0.logicBlock_alpha();
		me._hs_tt0.logicBlock_visible();
		me._ht_checkmark_tick0.logicBlock_visible();
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_node_customimage0.style.width=hotspot.customimagewidth + 'px';
			me._ht_node_customimage0.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_node_customimage0.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_node_customimage0.logicBlock_visible();
		me._tt_ht_3d0.logicBlock_visible();
		me._text_10.logicBlock_position();
		me._text_10.logicBlock_scaling();
		me._text_10.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._chevron_white0.logicBlock_visible();
				me._hs_tt0.logicBlock_visible();
				me._ht_node_customimage0.logicBlock_visible();
				me._tt_ht_3d0.logicBlock_visible();
				me._text_10.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._chevron_white0.logicBlock_visible();
				me._hs_preview_image0.logicBlock_alpha();
				me._hs_tt0.logicBlock_visible();
				me._ht_checkmark_tick0.logicBlock_visible();
				me._ht_checkmark_tick0.logicBlock_visible();
				me._ht_node_customimage0.logicBlock_visible();
				me._tt_ht_3d0.logicBlock_visible();
				me._text_10.logicBlock_visible();
			};
			me.ggEvent_changevisitednodes=function() {
				me._ht_checkmark_tick0.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._chevron_white0.logicBlock_scaling();
				me._chevron_white0.logicBlock_visible();
				me._hs_preview_image0.logicBlock_alpha();
				me._hs_tt0.logicBlock_visible();
				me._ht_node_customimage0.logicBlock_visible();
				me._tt_ht_3d0.logicBlock_visible();
				me._text_10.logicBlock_position();
				me._text_10.logicBlock_scaling();
				me._text_10.logicBlock_visible();
			};
			me.ggEvent_varchanged_opt_3d_preview=function() {
				me._hs_preview_image0.logicBlock_alpha();
				me._tt_ht_3d0.logicBlock_visible();
			};
			me.__div = me._ht_node_camera_switch;
	};
	function SkinHotspotClass_ht_image(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_image=document.createElement('div');
		el.ggId="ht_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 200px;';
		hs+='position : absolute;';
		hs+='top : 200px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_image.onclick=function (e) {
			skin._popup_image.ggSetImage(player.getBasePath()+""+player._(me.hotspot.url));
			player.setVariableValue('vis_image_popup', true);
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_image']=true;
			me._tt_ht_image.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_image']=false;
			me._tt_ht_image.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_image_image=document.createElement('div');
		els=me._ht_image_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeT0iMHB4IiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgYmFzZVByb2ZpbGU9ImJhc2ljIiB4PSIwcHgiIHdpZH'+
			'RoPSIzMnB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIHN0cm9rZS13aWR0aD0iMS41IiBvcGFjaXR5PSIwLjQiIHN0cm9rZT0iIzNDM0MzQyI+CiAgPHBhdGggZD0iTTEzLjcxMiwxMy40MDljMS4wMDUsMCwxLjgyLTAuODE1LDEuODItMS44MjFjMC0xLjAwNS0wLjgxNS0xLjgyMS0xLjgyLTEuODIxICAgYy0xLjAwNiwwLTEuODIxLDAuODE1LTEuODIxLDEuODIxQzExLjg5MiwxMi41OTQsMTIuNzA3LDEzLjQwOSwxMy43MTIsMTMuNDA5eiBNMjguMzA0LDcuMzE5ICAgYy0wLjEyNS0wLjEyNS0wLjI5Ny0wLjE5Ni0w'+
			'LjQ3My0wLjE5Nkg0LjE2OWMtMC4xNzYsMC0wLjM0OSwwLjA3MS0wLjQ3NCwwLjE5NkMzLjU3MSw3LjQ0NCwzLjUsNy42MTcsMy41LDcuNzkzdjE2LjQxNCAgIGMwLDAuMTc2LDAuMDcxLDAuMzQ4LDAuMTk2LDAuNDczYzAuMTI1LDAuMTI1LDAuMjk3LDAuMTk3LDAuNDczLDAuMTk3aDIzLjY2MmMwLjE3NiwwLDAuMzQ4LTAuMDcyLDAuNDczLTAuMTk3ICAgczAuMTk2LTAuMjk3LDAuMTk2LTAuNDczVjcuNzkzQzI4LjUsNy42MTcsMjguNDI5LDcuNDQ0LDI4LjMwNCw3LjMxOXogTTQuODM5LDguNDYySDI3LjE2bDAuMDAxLDcuMTg0ICAgYy0wLjU1Ny0wLjM3OC0xLjI5LTAuODc1LTIuMDk1LTEuND'+
			'IxYy0xLjAwMS0wLjY3Ni0yLjI1NC0wLjk4Ni0zLjUwMy0wLjk4OWMtMS4yNjYsMC4wMDItMi41NCwwLjMyMS0zLjU2LDEuMDA5bC0zLjU3NSwyLjQyNiAgIGMtMC4zMjktMC4yMjMtMC44MTMtMC41NTItMS4zNTMtMC45MThjLTAuNTE0LTAuMzQ0LTEuMTI5LTAuNDY2LTEuNzc0LTAuNDY5Yy0xLjE1NiwwLjAwNC0yLjQ1NCwwLjQwNy0zLjU1OCwxLjE1bC0yLjkwNSwxLjk3MSAgIFY4LjQ2MnogTTQuODM5LDIzLjUzN3YtMy41MTJsMy42NTgtMi40ODJjMC44NjctMC41OTQsMS45NzItMC45MjMsMi44MDUtMC45MTljMC40NjYtMC4wMDIsMC44MzEsMC4xMDMsMS4wMjIsMC4yMzggICBjMC4zMzMs'+
			'MC4yMjYsMC42NDUsMC40MzcsMC45MTMsMC42MTlsLTMuODY5LDIuNjI3Yy0wLjMwNiwwLjIwNy0wLjM4NiwwLjYyMy0wLjE3OSwwLjkzYzAuMTMsMC4xODksMC4zNCwwLjI5MywwLjU1NSwwLjI5MyAgIGMwLjEyOSwwLDAuMjYtMC4wMzcsMC4zNzUtMC4xMTVsOC42MzgtNS44NjFjMC43MzQtMC41MDIsMS43Ny0wLjc4LDIuODA3LTAuNzc4YzEuMDIzLTAuMDAyLDIuMDM2LDAuMjY5LDIuNzUxLDAuNzU3ICAgYzEuMjU4LDAuODUzLDIuMzQ2LDEuNTkxLDIuODQ3LDEuOTMxdjYuMjczSDQuODM5eiIvPgogPC9nPgogPGcgc3Ryb2tlLXdpZHRoPSIwLjIiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIz'+
			'AwMDAwMCI+CiAgPHBhdGggZD0iTTEzLjcxMiwxMy40MDljMS4wMDUsMCwxLjgyLTAuODE1LDEuODItMS44MjFjMC0xLjAwNS0wLjgxNS0xLjgyMS0xLjgyLTEuODIxICAgYy0xLjAwNiwwLTEuODIxLDAuODE1LTEuODIxLDEuODIxQzExLjg5MiwxMi41OTQsMTIuNzA3LDEzLjQwOSwxMy43MTIsMTMuNDA5eiBNMjguMzA0LDcuMzE5ICAgYy0wLjEyNS0wLjEyNS0wLjI5Ny0wLjE5Ni0wLjQ3My0wLjE5Nkg0LjE2OWMtMC4xNzYsMC0wLjM0OSwwLjA3MS0wLjQ3NCwwLjE5NkMzLjU3MSw3LjQ0NCwzLjUsNy42MTcsMy41LDcuNzkzdjE2LjQxNCAgIGMwLDAuMTc2LDAuMDcxLDAuMzQ4LDAuMTk2LDAu'+
			'NDczYzAuMTI1LDAuMTI1LDAuMjk3LDAuMTk3LDAuNDczLDAuMTk3aDIzLjY2MmMwLjE3NiwwLDAuMzQ4LTAuMDcyLDAuNDczLTAuMTk3ICAgczAuMTk2LTAuMjk3LDAuMTk2LTAuNDczVjcuNzkzQzI4LjUsNy42MTcsMjguNDI5LDcuNDQ0LDI4LjMwNCw3LjMxOXogTTQuODM5LDguNDYySDI3LjE2bDAuMDAxLDcuMTg0ICAgYy0wLjU1Ny0wLjM3OC0xLjI5LTAuODc1LTIuMDk1LTEuNDIxYy0xLjAwMS0wLjY3Ni0yLjI1NC0wLjk4Ni0zLjUwMy0wLjk4OWMtMS4yNjYsMC4wMDItMi41NCwwLjMyMS0zLjU2LDEuMDA5bC0zLjU3NSwyLjQyNiAgIGMtMC4zMjktMC4yMjMtMC44MTMtMC41NTItMS4zNT'+
			'MtMC45MThjLTAuNTE0LTAuMzQ0LTEuMTI5LTAuNDY2LTEuNzc0LTAuNDY5Yy0xLjE1NiwwLjAwNC0yLjQ1NCwwLjQwNy0zLjU1OCwxLjE1bC0yLjkwNSwxLjk3MSAgIFY4LjQ2MnogTTQuODM5LDIzLjUzN3YtMy41MTJsMy42NTgtMi40ODJjMC44NjctMC41OTQsMS45NzItMC45MjMsMi44MDUtMC45MTljMC40NjYtMC4wMDIsMC44MzEsMC4xMDMsMS4wMjIsMC4yMzggICBjMC4zMzMsMC4yMjYsMC42NDUsMC40MzcsMC45MTMsMC42MTlsLTMuODY5LDIuNjI3Yy0wLjMwNiwwLjIwNy0wLjM4NiwwLjYyMy0wLjE3OSwwLjkzYzAuMTMsMC4xODksMC4zNCwwLjI5MywwLjU1NSwwLjI5MyAgIGMwLjEy'+
			'OSwwLDAuMjYtMC4wMzcsMC4zNzUtMC4xMTVsOC42MzgtNS44NjFjMC43MzQtMC41MDIsMS43Ny0wLjc4LDIuODA3LTAuNzc4YzEuMDIzLTAuMDAyLDIuMDM2LDAuMjY5LDIuNzUxLDAuNzU3ICAgYzEuMjU4LDAuODUzLDIuMzQ2LDEuNTkxLDIuODQ3LDEuOTMxdjYuMjczSDQuODM5eiIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_image_image__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_image_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeT0iMHB4IiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgYmFzZVByb2ZpbGU9ImJhc2ljIiB4PSIwcHgiIHdpZH'+
			'RoPSIzMnB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgc3Ryb2tlLXdpZHRoPSIxLjUiIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIj4KICA8cGF0aCBkPSJNMTMuNzEyLDEzLjQwOWMxLjAwNSwwLDEuODItMC44MTUsMS44Mi0xLjgyMWMwLTEuMDA1LTAuODE1LTEuODIxLTEuODItMS44MjEgICBjLTEuMDA2LDAtMS44MjEsMC44MTUtMS44MjEsMS44MjFDMTEuODkyLDEyLjU5NCwxMi43MDcsMTMuNDA5'+
			'LDEzLjcxMiwxMy40MDl6IE0yOC4zMDQsNy4zMTkgICBjLTAuMTI1LTAuMTI1LTAuMjk3LTAuMTk2LTAuNDczLTAuMTk2SDQuMTY5Yy0wLjE3NiwwLTAuMzQ5LDAuMDcxLTAuNDc0LDAuMTk2QzMuNTcxLDcuNDQ0LDMuNSw3LjYxNywzLjUsNy43OTN2MTYuNDE0ICAgYzAsMC4xNzYsMC4wNzEsMC4zNDgsMC4xOTYsMC40NzNjMC4xMjUsMC4xMjUsMC4yOTcsMC4xOTcsMC40NzMsMC4xOTdoMjMuNjYyYzAuMTc2LDAsMC4zNDgtMC4wNzIsMC40NzMtMC4xOTcgICBzMC4xOTYtMC4yOTcsMC4xOTYtMC40NzNWNy43OTNDMjguNSw3LjYxNywyOC40MjksNy40NDQsMjguMzA0LDcuMzE5eiBNNC44MzksOC'+
			'40NjJIMjcuMTZsMC4wMDEsNy4xODQgICBjLTAuNTU3LTAuMzc4LTEuMjktMC44NzUtMi4wOTUtMS40MjFjLTEuMDAxLTAuNjc2LTIuMjU0LTAuOTg2LTMuNTAzLTAuOTg5Yy0xLjI2NiwwLjAwMi0yLjU0LDAuMzIxLTMuNTYsMS4wMDlsLTMuNTc1LDIuNDI2ICAgYy0wLjMyOS0wLjIyMy0wLjgxMy0wLjU1Mi0xLjM1My0wLjkxOGMtMC41MTQtMC4zNDQtMS4xMjktMC40NjYtMS43NzQtMC40NjljLTEuMTU2LDAuMDA0LTIuNDU0LDAuNDA3LTMuNTU4LDEuMTVsLTIuOTA1LDEuOTcxICAgVjguNDYyeiBNNC44MzksMjMuNTM3di0zLjUxMmwzLjY1OC0yLjQ4MmMwLjg2Ny0wLjU5NCwxLjk3Mi0wLjky'+
			'MywyLjgwNS0wLjkxOWMwLjQ2Ni0wLjAwMiwwLjgzMSwwLjEwMywxLjAyMiwwLjIzOCAgIGMwLjMzMywwLjIyNiwwLjY0NSwwLjQzNywwLjkxMywwLjYxOWwtMy44NjksMi42MjdjLTAuMzA2LDAuMjA3LTAuMzg2LDAuNjIzLTAuMTc5LDAuOTNjMC4xMywwLjE4OSwwLjM0LDAuMjkzLDAuNTU1LDAuMjkzICAgYzAuMTI5LDAsMC4yNi0wLjAzNywwLjM3NS0wLjExNWw4LjYzOC01Ljg2MWMwLjczNC0wLjUwMiwxLjc3LTAuNzgsMi44MDctMC43NzhjMS4wMjMtMC4wMDIsMi4wMzYsMC4yNjksMi43NTEsMC43NTcgICBjMS4yNTgsMC44NTMsMi4zNDYsMS41OTEsMi44NDcsMS45MzF2Ni4yNzNINC44Mz'+
			'l6Ii8+CiA8L2c+CiA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiIHN0cm9rZS13aWR0aD0iMC4yIiBmaWxsPSIjRkZGRkZGIiBzdHJva2U9IiMwMDAwMDAiPgogIDxwYXRoIGQ9Ik0xMy43MTIsMTMuNDA5YzEuMDA1LDAsMS44Mi0wLjgxNSwxLjgyLTEuODIxYzAtMS4wMDUtMC44MTUtMS44MjEtMS44Mi0xLjgyMSAgIGMtMS4wMDYsMC0xLjgyMSwwLjgxNS0xLjgyMSwxLjgyMUMxMS44OTIsMTIuNTk0LDEyLjcwNywxMy40MDksMTMuNzEyLDEzLjQwOXogTTI4LjMwNCw3LjMxOSAgIGMtMC4xMjUtMC4xMjUtMC4yOTctMC4xOTYtMC40'+
			'NzMtMC4xOTZINC4xNjljLTAuMTc2LDAtMC4zNDksMC4wNzEtMC40NzQsMC4xOTZDMy41NzEsNy40NDQsMy41LDcuNjE3LDMuNSw3Ljc5M3YxNi40MTQgICBjMCwwLjE3NiwwLjA3MSwwLjM0OCwwLjE5NiwwLjQ3M2MwLjEyNSwwLjEyNSwwLjI5NywwLjE5NywwLjQ3MywwLjE5N2gyMy42NjJjMC4xNzYsMCwwLjM0OC0wLjA3MiwwLjQ3My0wLjE5NyAgIHMwLjE5Ni0wLjI5NywwLjE5Ni0wLjQ3M1Y3Ljc5M0MyOC41LDcuNjE3LDI4LjQyOSw3LjQ0NCwyOC4zMDQsNy4zMTl6IE00LjgzOSw4LjQ2MkgyNy4xNmwwLjAwMSw3LjE4NCAgIGMtMC41NTctMC4zNzgtMS4yOS0wLjg3NS0yLjA5NS0xLjQyMW'+
			'MtMS4wMDEtMC42NzYtMi4yNTQtMC45ODYtMy41MDMtMC45ODljLTEuMjY2LDAuMDAyLTIuNTQsMC4zMjEtMy41NiwxLjAwOWwtMy41NzUsMi40MjYgICBjLTAuMzI5LTAuMjIzLTAuODEzLTAuNTUyLTEuMzUzLTAuOTE4Yy0wLjUxNC0wLjM0NC0xLjEyOS0wLjQ2Ni0xLjc3NC0wLjQ2OWMtMS4xNTYsMC4wMDQtMi40NTQsMC40MDctMy41NTgsMS4xNWwtMi45MDUsMS45NzEgICBWOC40NjJ6IE00LjgzOSwyMy41Mzd2LTMuNTEybDMuNjU4LTIuNDgyYzAuODY3LTAuNTk0LDEuOTcyLTAuOTIzLDIuODA1LTAuOTE5YzAuNDY2LTAuMDAyLDAuODMxLDAuMTAzLDEuMDIyLDAuMjM4ICAgYzAuMzMzLDAu'+
			'MjI2LDAuNjQ1LDAuNDM3LDAuOTEzLDAuNjE5bC0zLjg2OSwyLjYyN2MtMC4zMDYsMC4yMDctMC4zODYsMC42MjMtMC4xNzksMC45M2MwLjEzLDAuMTg5LDAuMzQsMC4yOTMsMC41NTUsMC4yOTMgICBjMC4xMjksMCwwLjI2LTAuMDM3LDAuMzc1LTAuMTE1bDguNjM4LTUuODYxYzAuNzM0LTAuNTAyLDEuNzctMC43OCwyLjgwNy0wLjc3OGMxLjAyMy0wLjAwMiwyLjAzNiwwLjI2OSwyLjc1MSwwLjc1NyAgIGMxLjI1OCwwLjg1MywyLjM0NiwxLjU5MSwyLjg0NywxLjkzMXY2LjI3M0g0LjgzOXoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_image_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_image_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_image_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_image_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_image_image.style.transition='';
				if (me._ht_image_image.ggCurrentLogicStateVisible == 0) {
					me._ht_image_image.style.visibility="hidden";
					me._ht_image_image.ggVisible=false;
				}
				else {
					me._ht_image_image.style.visibility=(Number(me._ht_image_image.style.opacity)>0||!me._ht_image_image.style.opacity)?'inherit':'hidden';
					me._ht_image_image.ggVisible=true;
				}
			}
		}
		me._ht_image_image.logicBlock_visible();
		me._ht_image_image.onmouseenter=function (e) {
			me._ht_image_image__img.style.visibility='hidden';
			me._ht_image_image__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_image_image']=true;
		}
		me._ht_image_image.onmouseleave=function (e) {
			me._ht_image_image__img.style.visibility='inherit';
			me._ht_image_image__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_image_image']=false;
		}
		me._ht_image_image.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image.appendChild(me._ht_image_image);
		el=me._tt_ht_image=document.createElement('div');
		els=me._tt_ht_image__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_image";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 24px;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='border : 0px solid #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_ht_image.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_ht_image.ggUpdateText();
		player.addListener('changenode', function() {
			me._tt_ht_image.ggUpdateText();
		});
		el.appendChild(els);
		me._tt_ht_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_image.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_ht_image.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_image.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_image.style.transition='left 0s, top 0s';
				if (me._tt_ht_image.ggCurrentLogicStatePosition == 0) {
					me._tt_ht_image.style.left = 'calc(50% - (0px / 2))';
					me._tt_ht_image.style.top='-47px';
				}
				else {
					me._tt_ht_image.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._tt_ht_image.style.top='24px';
				}
			}
		}
		me._tt_ht_image.logicBlock_position();
		me._tt_ht_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_image'] == true)) && 
				((player._(me.hotspot.title) != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_image.style.transition='left 0s, top 0s';
				if (me._tt_ht_image.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_image.style.visibility=(Number(me._tt_ht_image.style.opacity)>0||!me._tt_ht_image.style.opacity)?'inherit':'hidden';
					me._tt_ht_image.ggVisible=true;
				}
				else {
					me._tt_ht_image.style.visibility="hidden";
					me._tt_ht_image.ggVisible=false;
				}
			}
		}
		me._tt_ht_image.logicBlock_visible();
		me._tt_ht_image.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image.appendChild(me._tt_ht_image);
		el=me._ht_image_customimage=document.createElement('div');
		els=me._ht_image_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_image_customimage.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_image_customimage.ggSubElement.setAttribute('alt', player._(me._ht_image_customimage.ggAltText));
			me._ht_image_customimage.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_image_customimage.ggText_untranslated = img;
			me._ht_image_customimage.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_image_customimage.ggSubElement.style.width = '0px';
			me._ht_image_customimage.ggSubElement.style.height = '0px';
			me._ht_image_customimage.ggSubElement.src='';
			me._ht_image_customimage.ggSubElement.src=me._ht_image_customimage.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_image_customimage.ggText != player._(me._ht_image_customimage.ggText_untranslated)) {
				me._ht_image_customimage.ggText = player._(me._ht_image_customimage.ggText_untranslated);
				me._ht_image_customimage.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_image_CustomImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_customimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_image_customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_image_customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_image_customimage.style.transition='';
				if (me._ht_image_customimage.ggCurrentLogicStateVisible == 0) {
					me._ht_image_customimage.style.visibility="hidden";
					me._ht_image_customimage.ggSubElement.src='';
					me._ht_image_customimage.ggVisible=false;
				}
				else {
					me._ht_image_customimage.style.visibility=(Number(me._ht_image_customimage.style.opacity)>0||!me._ht_image_customimage.style.opacity)?'inherit':'hidden';
					me._ht_image_customimage.ggSubElement.src=me._ht_image_customimage.ggText;
					me._ht_image_customimage.ggVisible=true;
				}
			}
		}
		me._ht_image_customimage.logicBlock_visible();
		me._ht_image_customimage.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_image_customimage.clientWidth;
			var parentHeight = me._ht_image_customimage.clientHeight;
			var img = me._ht_image_customimage__img;
			var aspectRatioDiv = me._ht_image_customimage.clientWidth / me._ht_image_customimage.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_image_customimage.ggScrollbars || currentWidth < me._ht_image_customimage.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_image_customimage.scrollLeft=currentWidth / 2 - me._ht_image_customimage.clientWidth / 2;
			}
			if (!me._ht_image_customimage.ggScrollbars || currentHeight < me._ht_image_customimage.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_image_customimage.scrollTop=currentHeight / 2 - me._ht_image_customimage.clientHeight / 2;
			}
		}
		me._ht_image.appendChild(me._ht_image_customimage);
		me.elementMouseOver['ht_image']=false;
		me._ht_image_image.logicBlock_visible();
		me.elementMouseOver['ht_image_image']=false;
		me._tt_ht_image.logicBlock_position();
		me._tt_ht_image.logicBlock_visible();
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_image_customimage.style.width=hotspot.customimagewidth + 'px';
			me._ht_image_customimage.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_image_customimage.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_image_customimage.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_image_customimage.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_image_image.logicBlock_visible();
				me._tt_ht_image.logicBlock_visible();
				me._ht_image_customimage.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_image_image.logicBlock_visible();
				me._tt_ht_image.logicBlock_visible();
				me._ht_image_customimage.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_image_image.logicBlock_visible();
				me._tt_ht_image.logicBlock_position();
				me._tt_ht_image.logicBlock_visible();
				me._ht_image_customimage.logicBlock_visible();
			};
			me.ggEvent_hastouch=function() {
				me._tt_ht_image.logicBlock_position();
			};
			me.__div = me._ht_image;
	};
	function SkinHotspotClass_ht_gallery(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_gallery=document.createElement('div');
		el.ggId="ht_gallery";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 244px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_gallery.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_gallery.onclick=function (e) {
			player.setVariableValue('vis_gallery', true);
				skin._gallery.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.hotspot.description)));
					var hs = player._("<iframe src=\"assets\/%1\/index.html\" style=\"border:0px #ffffff none;\" name=\"gallery\" scrolling=\"no\" frameborder=\"0\" marginheight=\"0px\" marginwidth=\"0px\" height=\"100%\" width=\"100%\" allowfullscreen><\/iframe>", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			skin._gallery.ggUpdateText();
			skin._gallery.ggTextDiv.scrollTop = 0;
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_gallery.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_gallery.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_gallery']=true;
			me._text_11.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_gallery.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_gallery']=false;
			me._text_11.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_gallery.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_gallery_image=document.createElement('div');
		els=me._ht_gallery_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHI9IjI3IiBjeT0iMzIiIGN4PSIzMiIgc3R5bGU9ImZpbGw6IzRkNGQ0ZCIvPgogPC9nPgogPGcgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIiBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSI+CiAgPHJlY3Qgc3R5bGU9ImZpbGw6bm9uZSIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxyZWN0IHRyYW5zZm9ybT0idHJhbnNsYXRlKDY0IDY0KSByb3RhdGUoLTE4MCkiIHN0eWxlPSJmaW'+
			'xsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjJweCIgeT0iMjEuMzMiIHg9IjE2IiB3aWR0aD0iMzIiIGhlaWdodD0iMjEuMzMiLz4KICA8cGF0aCBzdHlsZT0iZmlsbDojZTZlNmU2IiBkPSJNMzMuMSwzNC42OGwuNjYsMS4wOEgzMi40NWwuNjUtMS4wOG0wLTMuODUtNC4yMSw2LjkzaDguNDJMMzMuMSwzMC44M1oiLz4KICA8cGF0aCBzdHlsZT0iZmlsbDojZTZlNmU2IiBkPSJNMjcsMzIuMjdsMi4xMiwzLjQ5SDI0Ljg3TDI3LDMyLjI3bTAtMy44NS01LjY3LDkuMzRIMzIuNjVMMjcsMjguNDJaIi8+CiAgPGNpcmNsZSByPSIxLjMzIiBjeT0i'+
			'MjkuMzMiIGN4PSI0MCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6MnB4Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_gallery_image__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_gallery_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 72px;';
		hs+='left : calc(50% - ((72px + 0px) / 2) + 0px);';
		hs+='opacity : 0.59999;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((72px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 72px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_gallery_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_gallery_image.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_gallery_image.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_gallery_image.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_gallery_image.style.transition='transform 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._ht_gallery_image.ggCurrentLogicStateScaling == 0) {
					me._ht_gallery_image.ggParameter.sx = 0.5;
					me._ht_gallery_image.ggParameter.sy = 0.5;
					me._ht_gallery_image.style.transform=parameterToTransform(me._ht_gallery_image.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_gallery_image);}, 1050);
				}
				else {
					me._ht_gallery_image.ggParameter.sx = 1;
					me._ht_gallery_image.ggParameter.sy = 1;
					me._ht_gallery_image.style.transform=parameterToTransform(me._ht_gallery_image.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_gallery_image);}, 1050);
				}
			}
		}
		me._ht_gallery_image.logicBlock_scaling();
		me._ht_gallery_image.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_gallery_image.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_gallery_image.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_gallery_image.style.transition='transform 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._ht_gallery_image.ggCurrentLogicStateAlpha == 0) {
					me._ht_gallery_image.style.visibility=me._ht_gallery_image.ggVisible?'inherit':'hidden';
					me._ht_gallery_image.style.opacity=0.3;
				}
				else {
					me._ht_gallery_image.style.visibility=me._ht_gallery_image.ggVisible?'inherit':'hidden';
					me._ht_gallery_image.style.opacity=0.59999;
				}
			}
		}
		me._ht_gallery_image.logicBlock_alpha();
		me._ht_gallery_image.ggUpdatePosition=function (useTransition) {
		}
		me._ht_gallery.appendChild(me._ht_gallery_image);
		el=me._text_11=document.createElement('div');
		els=me._text_11__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggDy=58;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 2px) / 2) + 58px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background : rgba(36,109,109,0.686275);';
		hs+='border : 1px solid #429d6b;';
		hs+='font-size: 16px;';
		hs+='font-weight: lighter;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 2px 2px 2px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_11.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("\u76f8\u7c3f\uff1a%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_11.ggUpdateText();
		player.addListener('changenode', function() {
			me._text_11.ggUpdateText();
		});
		el.appendChild(els);
		me._text_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_11.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_gallery'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_11.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_11.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_11.style.transition='';
				if (me._text_11.ggCurrentLogicStateVisible == 0) {
					me._text_11.style.visibility=(Number(me._text_11.style.opacity)>0||!me._text_11.style.opacity)?'inherit':'hidden';
					me._text_11.ggVisible=true;
				}
				else {
					me._text_11.style.visibility="hidden";
					me._text_11.ggVisible=false;
				}
			}
		}
		me._text_11.logicBlock_visible();
		me._text_11.ggUpdatePosition=function (useTransition) {
		}
		me._ht_gallery.appendChild(me._text_11);
		me.elementMouseOver['ht_gallery']=false;
		me._ht_gallery_image.logicBlock_scaling();
		me._ht_gallery_image.logicBlock_alpha();
		me._text_11.logicBlock_visible();
			me.ggEvent_changenode=function() {
				me._ht_gallery_image.logicBlock_scaling();
				me._ht_gallery_image.logicBlock_alpha();
			};
			me.ggEvent_configloaded=function() {
				me._ht_gallery_image.logicBlock_scaling();
				me._ht_gallery_image.logicBlock_alpha();
			};
			me.ggEvent_varchanged_ht_ani=function() {
				me._ht_gallery_image.logicBlock_scaling();
				me._ht_gallery_image.logicBlock_alpha();
			};
			me.__div = me._ht_gallery;
	};
	function SkinElement_mappin_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me._mappin=document.createElement('div');
		el.ggId="MapPin";
		el.ggDx=171;
		el.ggDy=-6;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,85,0,0.686275);';
		hs+='border : 1px solid #000000;';
		hs+='border-radius : 999px;';
		hs+='cursor : pointer;';
		hs+='height : 15px;';
		hs+='left : calc(50% - ((15px + 2px) / 2) + 171px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((15px + 2px) / 2) - 6px);';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._mappin.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._mappin.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['mappin'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._mappin.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._mappin.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._mappin.style.transition='transform 500ms ease 0ms, background-color 0s';
				if (me._mappin.ggCurrentLogicStateScaling == 0) {
					me._mappin.ggParameter.sx = 1.2;
					me._mappin.ggParameter.sy = 1.2;
					me._mappin.style.transform=parameterToTransform(me._mappin.ggParameter);
					setTimeout(function() {skin.updateSize(me._mappin);}, 550);
				}
				else {
					me._mappin.ggParameter.sx = 1;
					me._mappin.ggParameter.sy = 1;
					me._mappin.style.transform=parameterToTransform(me._mappin.ggParameter);
					setTimeout(function() {skin.updateSize(me._mappin);}, 550);
				}
			}
		}
		me._mappin.logicBlock_scaling();
		me._mappin.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me._mappin.ggIsActive() == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._mappin.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._mappin.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._mappin.style.transition='transform 500ms ease 0ms, background-color 0s';
				if (me._mappin.ggCurrentLogicStateBackgroundColor == 0) {
					me._mappin.style.backgroundColor="rgba(255,0,0,0.686275)";
				}
				else {
					me._mappin.style.backgroundColor="rgba(0,85,0,0.686275)";
				}
			}
		}
		me._mappin.logicBlock_backgroundcolor();
		me._mappin.onclick=function (e) {
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._mappin.onmouseenter=function (e) {
			me.elementMouseOver['mappin']=true;
			me._mappin.logicBlock_scaling();
		}
		me._mappin.onmouseleave=function (e) {
			me.elementMouseOver['mappin']=false;
			me._mappin.logicBlock_scaling();
		}
		me._mappin.ggUpdatePosition=function (useTransition) {
		}
		me._mappin.logicBlock_scaling();
		me._mappin.logicBlock_backgroundcolor();
		me.elementMouseOver['mappin']=false;
			me.ggEvent_changenode=function() {
				me._mappin.logicBlock_backgroundcolor();
			};
	};
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 75px;';
		hs+='position : absolute;';
		hs+='top : 220px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		hs+='transform-style: preserve-3d;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			me._chevron_white_lower.logicBlock_alpha();
			me._chevron_black.logicBlock_alpha();
			me._chevron_white1.logicBlock_alpha();
			me._hs_preview_image1.logicBlock_alpha();
			me._tt_ht_3d1.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node']=false;
			me._chevron_white_lower.logicBlock_alpha();
			me._chevron_black.logicBlock_alpha();
			me._chevron_white1.logicBlock_alpha();
			me._hs_preview_image1.logicBlock_alpha();
			me._tt_ht_3d1.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._chevron_white_lower=document.createElement('div');
		els=me._chevron_white_lower__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgdmVyc2lvbj0iMS4wIiBpZD0iTGF5ZXJfMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAwIDEwMDA7IiB4PSIwcHgiIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy'+
			'8xOTk5L3hsaW5rIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8Zz4KICA8cGF0aCBkPSJNMzQuOSw0MzkuN2w0MDAtNDAxYzE3LjktMTcuOSw0MS43LTI1LjQsNjUuMi0yNGMyMy40LTEuNCw0Ny4yLDYuMSw2NS4xLDI0bDQwMCw0MDEgICBjMzMuMiwzMy4zLDMzLjIsODcuNCwwLDEyMC43Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDBMNTAwLDIxNC43TDE1NS4yLDU2MC40Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDAgICBTMS43LDQ3MywzNC45LDQzOS43eiIgY2xhc3M9InN0MCIvPgogPC9nPgo8L3N2Zz4K';
		me._chevron_white_lower__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_white_lower";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='opacity : 0.69999;';
		hs+='position : absolute;';
		hs+='top : -145px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		hs+='transform:translate3d(0px,0px,-1px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._chevron_white_lower.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_white_lower.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._chevron_white_lower.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._chevron_white_lower.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._chevron_white_lower.style.transition='opacity 500ms ease 0ms';
				if (me._chevron_white_lower.ggCurrentLogicStateVisible == 0) {
					me._chevron_white_lower.style.visibility="hidden";
					me._chevron_white_lower.ggVisible=false;
				}
				else {
					me._chevron_white_lower.style.visibility=(Number(me._chevron_white_lower.style.opacity)>0||!me._chevron_white_lower.style.opacity)?'inherit':'hidden';
					me._chevron_white_lower.ggVisible=true;
				}
			}
		}
		me._chevron_white_lower.logicBlock_visible();
		me._chevron_white_lower.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_white_lower.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_white_lower.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_white_lower.style.transition='opacity 500ms ease 0ms';
				if (me._chevron_white_lower.ggCurrentLogicStateAlpha == 0) {
					me._chevron_white_lower.style.visibility=me._chevron_white_lower.ggVisible?'inherit':'hidden';
					me._chevron_white_lower.style.opacity=1;
				}
				else {
					me._chevron_white_lower.style.visibility=me._chevron_white_lower.ggVisible?'inherit':'hidden';
					me._chevron_white_lower.style.opacity=0.69999;
				}
			}
		}
		me._chevron_white_lower.logicBlock_alpha();
		me._chevron_white_lower.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._chevron_white_lower);
		el=me._chevron_black=document.createElement('div');
		els=me._chevron_black__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgdmVyc2lvbj0iMS4wIiBpZD0iTGF5ZXJfMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAwIDEwMDA7IiB4PSIwcHgiIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy'+
			'8xOTk5L3hsaW5rIj4KIDxnPgogIDxwYXRoIGQ9Ik0zNC45LDQzOS43bDQwMC00MDFjMTcuOS0xNy45LDQxLjctMjUuNCw2NS4yLTI0YzIzLjQtMS40LDQ3LjIsNi4xLDY1LjEsMjRsNDAwLDQwMWMzMy4yLDMzLjMsMzMuMiw4Ny40LDAsMTIwLjcgICBjLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMEw1MDAsMjE0LjdMMTU1LjIsNTYwLjRjLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMFMxLjcsNDczLDM0LjksNDM5Ljd6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._chevron_black__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_black";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='opacity : 0.4;';
		hs+='position : absolute;';
		hs+='top : -145px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._chevron_black.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_black.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._chevron_black.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._chevron_black.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._chevron_black.style.transition='opacity 500ms ease 0ms';
				if (me._chevron_black.ggCurrentLogicStateVisible == 0) {
					me._chevron_black.style.visibility="hidden";
					me._chevron_black.ggVisible=false;
				}
				else {
					me._chevron_black.style.visibility=(Number(me._chevron_black.style.opacity)>0||!me._chevron_black.style.opacity)?'inherit':'hidden';
					me._chevron_black.ggVisible=true;
				}
			}
		}
		me._chevron_black.logicBlock_visible();
		me._chevron_black.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_black.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_black.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_black.style.transition='opacity 500ms ease 0ms';
				if (me._chevron_black.ggCurrentLogicStateAlpha == 0) {
					me._chevron_black.style.visibility=me._chevron_black.ggVisible?'inherit':'hidden';
					me._chevron_black.style.opacity=1;
				}
				else {
					me._chevron_black.style.visibility=me._chevron_black.ggVisible?'inherit':'hidden';
					me._chevron_black.style.opacity=0.4;
				}
			}
		}
		me._chevron_black.logicBlock_alpha();
		me._chevron_black.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._chevron_black);
		el=me._chevron_white1=document.createElement('div');
		els=me._chevron_white1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgdmVyc2lvbj0iMS4wIiBpZD0iTGF5ZXJfMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAwIDEwMDA7IiB4PSIwcHgiIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy'+
			'8xOTk5L3hsaW5rIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8Zz4KICA8cGF0aCBkPSJNMzQuOSw0MzkuN2w0MDAtNDAxYzE3LjktMTcuOSw0MS43LTI1LjQsNjUuMi0yNGMyMy40LTEuNCw0Ny4yLDYuMSw2NS4xLDI0bDQwMCw0MDEgICBjMzMuMiwzMy4zLDMzLjIsODcuNCwwLDEyMC43Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDBMNTAwLDIxNC43TDE1NS4yLDU2MC40Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDAgICBTMS43LDQ3MywzNC45LDQzOS43eiIgY2xhc3M9InN0MCIvPgogPC9nPgo8L3N2Zz4K';
		me._chevron_white1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_white";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='opacity : 0.70003;';
		hs+='position : absolute;';
		hs+='top : -145px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		hs+='transform:translate3d(0px,0px,1px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._chevron_white1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_white1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._chevron_white1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._chevron_white1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._chevron_white1.style.transition='opacity 500ms ease 0ms';
				if (me._chevron_white1.ggCurrentLogicStateVisible == 0) {
					me._chevron_white1.style.visibility="hidden";
					me._chevron_white1.ggVisible=false;
				}
				else {
					me._chevron_white1.style.visibility=(Number(me._chevron_white1.style.opacity)>0||!me._chevron_white1.style.opacity)?'inherit':'hidden';
					me._chevron_white1.ggVisible=true;
				}
			}
		}
		me._chevron_white1.logicBlock_visible();
		me._chevron_white1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_white1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_white1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_white1.style.transition='opacity 500ms ease 0ms';
				if (me._chevron_white1.ggCurrentLogicStateAlpha == 0) {
					me._chevron_white1.style.visibility=me._chevron_white1.ggVisible?'inherit':'hidden';
					me._chevron_white1.style.opacity=1;
				}
				else {
					me._chevron_white1.style.visibility=me._chevron_white1.ggVisible?'inherit':'hidden';
					me._chevron_white1.style.opacity=0.70003;
				}
			}
		}
		me._chevron_white1.logicBlock_alpha();
		me._chevron_white1.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._chevron_white1);
		el=me._hs_preview_image1=document.createElement('div');
		els=me._hs_preview_image1__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/hs_preview_image_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hs_preview_image";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='z-index: -5;';
		hs+='height : 90px;';
		hs+='left : calc(50% - ((140px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -220px;';
		hs+='visibility : hidden;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		hs+='border-radius: 5px; overflow: hidden; box-shadow: 0px 0px 2px #ffffff; transform:translate3d(0px,0px,80px) rotateX(-90deg) scale(1.5); transform-style: preserve-3d; -webkit-backface-visibility: hidden; backface-visibility: hidden;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hs_preview_image1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._hs_preview_image1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true)) && 
				((player.getVariableValue('opt_3d_preview') == true)) && 
				((player.getIsTour() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hs_preview_image1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hs_preview_image1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hs_preview_image1.style.transition='opacity 500ms ease 0ms';
				if (me._hs_preview_image1.ggCurrentLogicStateAlpha == 0) {
					me._hs_preview_image1.style.visibility=me._hs_preview_image1.ggVisible?'inherit':'hidden';
					me._hs_preview_image1.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._hs_preview_image1.style.opacity == 0.0) { me._hs_preview_image1.style.visibility="hidden"; } }, 505);
					me._hs_preview_image1.style.opacity=0;
				}
			}
		}
		me._hs_preview_image1.logicBlock_alpha();
		me._hs_preview_image1.ggUpdatePosition=function (useTransition) {
		}
		el=me._hs_tt1=document.createElement('div');
		els=me._hs_tt1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="hs_tt";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 0px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((140px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 1px 1px 2px #000000;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : rgba(0,0,0,0.196078);';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._hs_tt1.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._hs_tt1.ggUpdateText();
		player.addListener('changenode', function() {
			me._hs_tt1.ggUpdateText();
		});
		el.appendChild(els);
		me._hs_tt1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_tt1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.hotspot.title) == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_tt1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_tt1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_tt1.style.transition='';
				if (me._hs_tt1.ggCurrentLogicStateVisible == 0) {
					me._hs_tt1.style.visibility="hidden";
					me._hs_tt1.ggVisible=false;
				}
				else {
					me._hs_tt1.style.visibility=(Number(me._hs_tt1.style.opacity)>0||!me._hs_tt1.style.opacity)?'inherit':'hidden';
					me._hs_tt1.ggVisible=true;
				}
			}
		}
		me._hs_tt1.logicBlock_visible();
		me._hs_tt1.ggUpdatePosition=function (useTransition) {
		}
		me._hs_preview_image1.appendChild(me._hs_tt1);
		el=me._ht_checkmark_tick1=document.createElement('div');
		els=me._ht_checkmark_tick1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOng9Imh0dHA6Ly9ucy5hZG9iZS5jb20vRXh0ZW5zaWJpbGl0eS8xLjAvIiB5PSIwcHgiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgLTM3MjIgLTI2MDYgMzIgMzIiIH'+
			'ZlcnNpb249IjEuMSIgeG1sbnM6YT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZVNWR1ZpZXdlckV4dGVuc2lvbnMvMy4wLyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjMycHgiIHhtbG5zOmk9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVJbGx1c3RyYXRvci8xMC4wLyIgeG1sbnM6Z3JhcGg9Imh0dHA6Ly9ucy5hZG9iZS5jb20vR3JhcGhzLzEuMC8iIHg9IjBweCIgd2lkdGg9IjMycHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSItMzcyMiAtMjYwNiAzMiAzMiI+CiA8'+
			'ZyBpZD0iTGF5ZXJfMSIvPgogPGcgaWQ9IkViZW5lXzEiLz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPGc+CiAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTM2OTUuNDczLTI1OTguMTQ2Yy0wLjUxOS0wLjUxOS0xLjM2MS0wLjUxOS0xLjg3OSwwbC04Ljc4Nyw4Ljc4N2wtMi4yOTEtMi4yNDMgICAgIGMtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAyYy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OSAgICAgYzAuMzQsMCwwLjY4LTAuMTMsMC45NC0wLjM5bDkuNzE3LTkuNz'+
			'E3Qy0zNjk0Ljk1NC0yNTk2Ljc4NS0zNjk0Ljk1NC0yNTk3LjYyNi0zNjk1LjQ3My0yNTk4LjE0NnoiLz4KICAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMzY5OS45Ni0yNTgzLjgzN2gtMTIuMzI1di0xMi4zMjZoMTEuODIxbDIuMjUyLTIuMjUyYy0wLjE2Ni0wLjA4Ni0wLjM1Mi0wLjE0MS0wLjU1Mi0wLjE0MWgtMTQuNzE4ICAgICBjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgxNC43MThjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzICAgICBsLTIuMzkzLDIuMzkzVi0yNTgzLjgz'+
			'N3oiLz4KICAgPC9nPgogICA8ZyBhOmFkb2JlLWJsZW5kaW5nLW1vZGU9Im11bHRpcGx5IiBvcGFjaXR5PSIwLjQiPgogICAgPHBhdGggc3Ryb2tlLXdpZHRoPSIxLjUiIGZpbGw9Im5vbmUiIGE6YWRvYmUtYmxlbmRpbmctbW9kZT0ibm9ybWFsIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9IiAgICAgTS0zNjk1LjQ3My0yNTk4LjE0NmMtMC41MTktMC41MTktMS4zNjEtMC41MTktMS44NzksMGwtOC43ODcsOC43ODdsLTIuMjkxLTIuMjQzYy0wLjUyNS0wLjUxMy0xLjM2Ni0wLjUwNC0xLjg4LDAuMDIgICAgIGMtMC41MTMsMC41MjUtMC41MDQsMS4zNjcsMC4wMjEsMS44OGwzLjIzLDMuMTYzYz'+
			'AuMjU5LDAuMjUzLDAuNTk0LDAuMzc5LDAuOTMsMC4zNzljMC4zNCwwLDAuNjgtMC4xMywwLjk0LTAuMzlsOS43MTctOS43MTcgICAgIEMtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9IiMxQTE3MUIiLz4KICAgIDxwYXRoIHN0cm9rZS13aWR0aD0iMS41IiBmaWxsPSJub25lIiBhOmFkb2JlLWJsZW5kaW5nLW1vZGU9Im5vcm1hbCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSIgICAgIE0tMzY5OS45Ni0yNTgzLjgzN2gtMTIuMzI1di0xMi4zMjZoMTEuODIxbDIuMjUyLTIuMjUyYy0w'+
			'LjE2Ni0wLjA4Ni0wLjM1Mi0wLjE0MS0wLjU1Mi0wLjE0MWgtMTQuNzE4ICAgICBjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgxNC43MThjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzICAgICBsLTIuMzkzLDIuMzkzVi0yNTgzLjgzN3oiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iIzFBMTcxQiIvPgogICA8L2c+CiAgIDxnPgogICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0zNjk1LjQ3My0yNTk4LjE0NmMtMC41MTktMC41MTktMS4zNjEtMC41MTktMS44NzksMGwtOC'+
			'43ODcsOC43ODdsLTIuMjkxLTIuMjQzICAgICBjLTAuNTI1LTAuNTEzLTEuMzY2LTAuNTA0LTEuODgsMC4wMmMtMC41MTMsMC41MjUtMC41MDQsMS4zNjcsMC4wMjEsMS44OGwzLjIzLDMuMTYzYzAuMjU5LDAuMjUzLDAuNTk0LDAuMzc5LDAuOTMsMC4zNzkgICAgIGMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxN0MtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTM2OTkuOTYtMjU4My44MzdoLTEyLjMyNXYtMTIuMzI2aDExLjgyMWwyLjI1Mi0yLjI1MmMtMC4xNjYt'+
			'MC4wODYtMC4zNTItMC4xNDEtMC41NTItMC4xNDFoLTE0LjcxOCAgICAgYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djE0LjcxOWMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMTQuNzE4YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZ2LTEwLjQwMyAgICAgbC0yLjM5MywyLjM5M1YtMjU4My44Mzd6Ii8+CiAgIDwvZz4KICAgPGc+CiAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjAuMiIgZmlsbD0ibm9uZSIgZD0iTS0zNjk1LjQ3My0yNTk4LjE0NiAgICAgYy0wLjUxOS0wLjUxOS0xLjM2MS0wLjUxOS0xLjg3OSwwbC04Ljc4Nyw4Ljc4N2wtMi4yOTEtMi4yNDNjLT'+
			'AuNTI1LTAuNTEzLTEuMzY2LTAuNTA0LTEuODgsMC4wMiAgICAgYy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OWMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxNyAgICAgQy0zNjk0Ljk1NC0yNTk2Ljc4NS0zNjk0Ljk1NC0yNTk3LjYyNi0zNjk1LjQ3My0yNTk4LjE0NnoiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSIjMUExNzFCIi8+CiAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjAuMiIgZmlsbD0ibm9uZSIgZD0iTS0zNjk5'+
			'Ljk2LTI1ODMuODM3ICAgICBoLTEyLjMyNXYtMTIuMzI2aDExLjgyMWwyLjI1Mi0yLjI1MmMtMC4xNjYtMC4wODYtMC4zNTItMC4xNDEtMC41NTItMC4xNDFoLTE0LjcxOGMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnYxNC43MTkgICAgIGMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMTQuNzE4YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZ2LTEwLjQwM2wtMi4zOTMsMi4zOTNWLTI1ODMuODM3eiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9IiMxQTE3MUIiLz4KICAgPC9nPgogIDwvZz4KIDwvZz4KPC9zdm'+
			'c+Cg==';
		me._ht_checkmark_tick1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_checkmark_tick";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_checkmark_tick1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_checkmark_tick1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._ht_checkmark_tick1.ggElementNodeId()) == true)) || 
				((me._ht_checkmark_tick1.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_checkmark_tick1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_checkmark_tick1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_checkmark_tick1.style.transition='';
				if (me._ht_checkmark_tick1.ggCurrentLogicStateVisible == 0) {
					me._ht_checkmark_tick1.style.visibility=(Number(me._ht_checkmark_tick1.style.opacity)>0||!me._ht_checkmark_tick1.style.opacity)?'inherit':'hidden';
					me._ht_checkmark_tick1.ggVisible=true;
				}
				else {
					me._ht_checkmark_tick1.style.visibility="hidden";
					me._ht_checkmark_tick1.ggVisible=false;
				}
			}
		}
		me._ht_checkmark_tick1.logicBlock_visible();
		me._ht_checkmark_tick1.ggUpdatePosition=function (useTransition) {
		}
		me._hs_preview_image1.appendChild(me._ht_checkmark_tick1);
		me._ht_node.appendChild(me._hs_preview_image1);
		el=me.__code1=document.createElement('div');
		els=me.__code1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="_code";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 37px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -39px;';
		hs+='visibility : hidden;';
		hs+='width : 66px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='pointer-events: none;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
this.onUpdatePosition=function(player,hotspot) {
var vs=player.getViewerSize();
var y=vs.height * (1/6*(1+Math.cos(player.getTilt() * Math.PI/90.0)));
var hs= 'translate3d(0px,0px,-1000px) perspective(500px) translate3d(0px,' + (y) + 'px,0px) ';
hs += 'rotateZ(' + ( player.getRoll()).toFixed(10) + 'deg) ';
hs += 'rotateX(' + ( player.getTilt()).toFixed(10) + 'deg) ';
hs += 'rotateY(' + (-player.getPan()).toFixed(10)  + 'deg) ';
hs += 'rotateY(' + ( hotspot.pan).toFixed(2)  + 'deg) ';
hs += 'rotateX(' + (-hotspot.tilt).toFixed(2) + 'deg) ';
hs += 'rotateX(90deg) ';
this.__div.style.transform=hs;
this.__div.style.left = vs.width / 2 + "px";
this.__div.style.top = vs.height / 2 + "px";
};
		el.appendChild(els);
		me.__code1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__code1.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me.__code1);
		el=me._tt_ht_3d1=document.createElement('div');
		els=me._tt_ht_3d1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_3d";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((150px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -170px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		hs+='transform:translate3d(0px,0px,40px) rotateX(-90deg); text-shadow: 1px 1px 2px #000000; -webkit-backface-visibility: hidden; backface-visibility: hidden;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 18px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_ht_3d1.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_ht_3d1.ggUpdateText();
		player.addListener('changenode', function() {
			me._tt_ht_3d1.ggUpdateText();
		});
		el.appendChild(els);
		me._tt_ht_3d1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_3d1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsTour() == false)) && 
				((player._(me.hotspot.title) != "")) && 
				((me.elementMouseOver['ht_node'] == true)) && 
				((player.getVariableValue('opt_3d_preview') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_3d1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_3d1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_3d1.style.transition='';
				if (me._tt_ht_3d1.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_3d1.style.visibility=(Number(me._tt_ht_3d1.style.opacity)>0||!me._tt_ht_3d1.style.opacity)?'inherit':'hidden';
					me._tt_ht_3d1.ggVisible=true;
				}
				else {
					me._tt_ht_3d1.style.visibility="hidden";
					me._tt_ht_3d1.ggVisible=false;
				}
			}
		}
		me._tt_ht_3d1.logicBlock_visible();
		me._tt_ht_3d1.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._tt_ht_3d1);
		el=me._ht_node_customimage1=document.createElement('div');
		els=me._ht_node_customimage1__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_node_customimage1.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_node_customimage1.ggSubElement.setAttribute('alt', player._(me._ht_node_customimage1.ggAltText));
			me._ht_node_customimage1.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_node_customimage1.ggText_untranslated = img;
			me._ht_node_customimage1.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_node_customimage1.ggSubElement.style.width = '0px';
			me._ht_node_customimage1.ggSubElement.style.height = '0px';
			me._ht_node_customimage1.ggSubElement.src='';
			me._ht_node_customimage1.ggSubElement.src=me._ht_node_customimage1.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_node_customimage1.ggText != player._(me._ht_node_customimage1.ggText_untranslated)) {
				me._ht_node_customimage1.ggText = player._(me._ht_node_customimage1.ggText_untranslated);
				me._ht_node_customimage1.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_node_CustomImage";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -145px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_customimage1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_customimage1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_customimage1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_customimage1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_customimage1.style.transition='';
				if (me._ht_node_customimage1.ggCurrentLogicStateVisible == 0) {
					me._ht_node_customimage1.style.visibility="hidden";
					me._ht_node_customimage1.ggSubElement.src='';
					me._ht_node_customimage1.ggVisible=false;
				}
				else {
					me._ht_node_customimage1.style.visibility=(Number(me._ht_node_customimage1.style.opacity)>0||!me._ht_node_customimage1.style.opacity)?'inherit':'hidden';
					me._ht_node_customimage1.ggSubElement.src=me._ht_node_customimage1.ggText;
					me._ht_node_customimage1.ggVisible=true;
				}
			}
		}
		me._ht_node_customimage1.logicBlock_visible();
		me._ht_node_customimage1.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_node_customimage1.clientWidth;
			var parentHeight = me._ht_node_customimage1.clientHeight;
			var img = me._ht_node_customimage1__img;
			var aspectRatioDiv = me._ht_node_customimage1.clientWidth / me._ht_node_customimage1.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_node_customimage1.ggScrollbars || currentWidth < me._ht_node_customimage1.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_node_customimage1.scrollLeft=currentWidth / 2 - me._ht_node_customimage1.clientWidth / 2;
			}
			if (!me._ht_node_customimage1.ggScrollbars || currentHeight < me._ht_node_customimage1.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_node_customimage1.scrollTop=currentHeight / 2 - me._ht_node_customimage1.clientHeight / 2;
			}
		}
		me._ht_node.appendChild(me._ht_node_customimage1);
		me.elementMouseOver['ht_node']=false;
		me._chevron_white_lower.logicBlock_visible();
		me._chevron_white_lower.logicBlock_alpha();
		me._chevron_black.logicBlock_visible();
		me._chevron_black.logicBlock_alpha();
		me._chevron_white1.logicBlock_visible();
		me._chevron_white1.logicBlock_alpha();
		me._hs_preview_image1.logicBlock_alpha();
		me._hs_tt1.logicBlock_visible();
		me._ht_checkmark_tick1.logicBlock_visible();
		me._tt_ht_3d1.logicBlock_visible();
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_node_customimage1.style.width=hotspot.customimagewidth + 'px';
			me._ht_node_customimage1.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_node_customimage1.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_node_customimage1.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._chevron_white_lower.logicBlock_visible();
				me._chevron_black.logicBlock_visible();
				me._chevron_white1.logicBlock_visible();
				me._hs_tt1.logicBlock_visible();
				me._tt_ht_3d1.logicBlock_visible();
				me._ht_node_customimage1.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._chevron_white_lower.logicBlock_visible();
				me._chevron_black.logicBlock_visible();
				me._chevron_white1.logicBlock_visible();
				me._hs_preview_image1.logicBlock_alpha();
				me._hs_tt1.logicBlock_visible();
				me._ht_checkmark_tick1.logicBlock_visible();
				me._ht_checkmark_tick1.logicBlock_visible();
				me._tt_ht_3d1.logicBlock_visible();
				me._ht_node_customimage1.logicBlock_visible();
			};
			me.ggEvent_changevisitednodes=function() {
				me._ht_checkmark_tick1.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._chevron_white_lower.logicBlock_visible();
				me._chevron_black.logicBlock_visible();
				me._chevron_white1.logicBlock_visible();
				me._hs_preview_image1.logicBlock_alpha();
				me._hs_tt1.logicBlock_visible();
				me._tt_ht_3d1.logicBlock_visible();
				me._ht_node_customimage1.logicBlock_visible();
			};
			me.ggEvent_varchanged_opt_3d_preview=function() {
				me._hs_preview_image1.logicBlock_alpha();
				me._tt_ht_3d1.logicBlock_visible();
			};
			me.__div = me._ht_node;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
			if (hotspot.skinid=='ht_node') {
				hotspot.skinid = 'ht_node';
				hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_gallery') {
				hotspot.skinid = 'ht_gallery';
				hsinst = new SkinHotspotClass_ht_gallery(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_image') {
				hotspot.skinid = 'ht_image';
				hsinst = new SkinHotspotClass_ht_image(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_node_camera_switch') {
				hotspot.skinid = 'ht_node_camera_switch';
				hsinst = new SkinHotspotClass_ht_node_camera_switch(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_node_Day&Night') {
				hotspot.skinid = 'ht_node_Day&Night';
				hsinst = new SkinHotspotClass_ht_node_daynight(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		{
				hotspot.skinid = 'ht_url';
				hsinst = new SkinHotspotClass_ht_url(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = {};
	}
	player.addListener('hotspotsremoved',function() {
			me.removeSkinHotspots();
	});
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		me._zoomout.ggUpdateConditionTimer();
		me._zoomin.ggUpdateConditionTimer();
		if (me._timer_1.ggLastIsActive!=me._timer_1.ggIsActive()) {
			me._timer_1.ggLastIsActive=me._timer_1.ggIsActive();
			if (me._timer_1.ggLastIsActive) {
				player.setVariableValue('ht_ani', true);
			} else {
				player.setVariableValue('ht_ani', false);
			}
		}
		for (const id in hotspotTemplates) {
			const tmpl=hotspotTemplates[id];
			tmpl.forEach(function(hotspot) {
				if (hotspot.hotspotTimerEvent) {
					hotspot.hotspotTimerEvent();
				}
			});
		};
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; } .ggmarkdown p,.ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 0px } .ggmarkdown { white-space:normal }'));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		me.updateSize(me.divSkin);
	}
};