
if(!CFServerSelect)
  {
      var CFServerSelect={};
  }
  
  CFServerSelect.create=function(select_array, ext_opt_array, opt_array)
  {
      return new MultiSelect.create(select_array, opt_array||CFServerSelect.STD_DATA, ext_opt_array||[]);
  }
  
  CFServerSelect.STD_DATA= 
  [
  
      {t:"上海电信", v:"81", opt_data_array:[
  
          {t: "上海一区",v: "320",status:"1", display:"1", opt_data_array:[]}
    ,
          {t: "上海二区",v: "326",status:"1", display:"1", opt_data_array:[]}
  
  ]}
  ,
      {t:"广东电信", v:"82", opt_data_array:[
  
          {t: "广东一区",v: "318",status:"1", display:"1", opt_data_array:[]}
    ,
          {t: "广东二区",v: "327",status:"1", display:"1", opt_data_array:[]}
    ,
          {t: "广东三区",v: "338",status:"1", display:"1", opt_data_array:[]}
    ,
          {t: "广东四区",v: "339",status:"1", display:"1", opt_data_array:[]}
  
  ]}
  ,
      {t:"广西电信", v:"102", opt_data_array:[
  
          {t: "广西一区",v: "353",status:"1", display:"1", opt_data_array:[]}
  
  ]}
  ,
      {t:"南方电信", v:"92", opt_data_array:[
  
          {t: "南方大区",v: "342",status:"1", display:"1", opt_data_array:[]}
  
  ]}
  ,
      {t:"湖南电信", v:"91", opt_data_array:[
  
          {t: "湖南一区",v: "341",status:"1", display:"1", opt_data_array:[]}
    ,
          {t: "湖南二区",v: "340",status:"1", display:"1", opt_data_array:[]}
  
  ]}
  ,
      {t:"湖北电信", v:"85", opt_data_array:[
  
          {t: "湖北一区",v: "328",status:"1", display:"1", opt_data_array:[]}
    ,
          {t: "湖北二区",v: "329",status:"1", display:"1", opt_data_array:[]}
  
  ]}
  ,
      {t:"浙江电信", v:"86", opt_data_array:[
  
          {t: "浙江一区",v: "325",status:"1", display:"1", opt_data_array:[]}
    ,
          {t: "浙江二区",v: "349",status:"1", display:"1", opt_data_array:[]}
  
  ]}
  ,
      {t:"江苏电信", v:"94", opt_data_array:[
  
          {t: "江苏一区",v: "344",status:"1", display:"1", opt_data_array:[]}
    ,
          {t: "江苏二区",v: "357",status:"1", display:"1", opt_data_array:[]}
  
  ]}
  ,
      {t:"福建电信", v:"87", opt_data_array:[
  
          {t: "福建一区",v: "324",status:"1", display:"1", opt_data_array:[]}
  
  ]}
  ,
      {t:"江西电信", v:"101", opt_data_array:[
  
          {t: "江西一区",v: "352",status:"1", display:"1", opt_data_array:[]}
  
  ]}
  ,
      {t:"陕西电信", v:"88", opt_data_array:[
  
          {t: "陕西一区",v: "330",status:"1", display:"1", opt_data_array:[]}
  
  ]}
  ,
      {t:"四川电信", v:"90", opt_data_array:[
  
          {t: "四川一区",v: "333",status:"1", display:"1", opt_data_array:[]}
    ,
          {t: "四川二区",v: "356",status:"1", display:"1", opt_data_array:[]}
  
  ]}
  ,
      {t:"重庆电信", v:"89", opt_data_array:[
  
          {t: "重庆一区",v: "332",status:"1", display:"1", opt_data_array:[]}
  
  ]}
  ,
      {t:"安徽电信", v:"97", opt_data_array:[
  
          {t: "安徽一区",v: "347",status:"1", display:"1", opt_data_array:[]}
  
  ]}
  ,
      {t:"云南电信", v:"98", opt_data_array:[
  
          {t: "云南一区",v: "348",status:"1", display:"1", opt_data_array:[]}
  
  ]}
  ,
      {t:"北方网通", v:"93", opt_data_array:[
  
          {t: "北方大区",v: "343",status:"1", display:"1", opt_data_array:[]}
  
  ]}
  ,
      {t:"辽宁网通", v:"84", opt_data_array:[
  
          {t: "辽宁一区",v: "322",status:"1", display:"1", opt_data_array:[]}
    ,
          {t: "辽宁二区",v: "323",status:"1", display:"1", opt_data_array:[]}
    ,
          {t: "辽宁三区",v: "336",status:"1", display:"1", opt_data_array:[]}
  
  ]}
  ,
      {t:"黑龙江网通", v:"99", opt_data_array:[
  
          {t: "黑龙江区",v: "350",status:"1", display:"1", opt_data_array:[]}
  
  ]}
  ,
      {t:"吉林网通", v:"100", opt_data_array:[
  
          {t: "吉林一区",v: "351",status:"1", display:"1", opt_data_array:[]}
  
  ]}
  ,
      {t:"北京网通", v:"83", opt_data_array:[
  
          {t: "北京一区",v: "319",status:"1", display:"1", opt_data_array:[]}
    ,
          {t: "北京二区",v: "321",status:"1", display:"1", opt_data_array:[]}
    ,
          {t: "北京三区",v: "334",status:"1", display:"1", opt_data_array:[]}
    ,
          {t: "北京四区",v: "335",status:"1", display:"1", opt_data_array:[]}
  
  ]}
  ,
      {t:"山东网通", v:"96", opt_data_array:[
  
          {t: "山东一区",v: "346",status:"1", display:"1", opt_data_array:[]}
    ,
          {t: "山东二区",v: "358",status:"1", display:"1", opt_data_array:[]}
  
  ]}
  ,
      {t:"山西网通", v:"103", opt_data_array:[
  
          {t: "山西一区",v: "354",status:"1", display:"1", opt_data_array:[]}
  
  ]}
  ,
      {t:"河南网通", v:"170", opt_data_array:[
  
          {t: "河南一区",v: "345",status:"1", display:"1", opt_data_array:[]}
    ,
          {t: "河南二区",v: "359",status:"1", display:"1", opt_data_array:[]}
  
  ]}
  ,
      {t:"河北网通", v:"171", opt_data_array:[
  
          {t: "河北一区",v: "355",status:"1", display:"1", opt_data_array:[]}
  
  ]}
  ,
      {t:"移动专区", v:"540", opt_data_array:[
  
          {t: "移动专区",v: "360",status:"1", display:"1", opt_data_array:[]}
  
  ]}
  ,
      {t:"教育网专区", v:"660", opt_data_array:[
  
          {t: "教育网",v: "361",status:"1", display:"1", opt_data_array:[]}
  
  ]}
  
  ];
  
  
  //////////////////////////////////////////////////////////////////////////////////////////////////////////
  CFServerSelect.showzone=function(select_array, ext_opt_array, opt_array)
  {
    //显示停机
    var arrOpt = opt_array||CFServerSelect.STD_DATA;
    if(arrOpt && arrOpt.length > 0){
                  var tempArrOpt = [];
      for(var i = 0; i < arrOpt.length; i++)
      {
        var tempObj = {"t":arrOpt[i].t, "v":arrOpt[i].v, "opt_data_array":[]};
        for(var j = 0; j < arrOpt[i].opt_data_array.length; j++)
        {
                                  if(arrOpt[i].opt_data_array[j].display * 1 === 0)
                                  {
            continue;
          }
          
          if(arrOpt[i].opt_data_array[j].status * 1 === 0 && arrOpt[i].opt_data_array[j].t.indexOf('(停机)') < 0 )
          {
            arrOpt[i].opt_data_array[j].t += "(停机)";
          }
          tempObj.opt_data_array.push(arrOpt[i].opt_data_array[j]);
        }
        if(tempObj.opt_data_array.length > 0){
          tempArrOpt.push(tempObj);
        }
      }
      arrOpt = tempArrOpt;
    }
      return new MultiSelect.create(select_array, arrOpt, ext_opt_array||[]);
  };
  
  CFServerSelect.showzone2=function(select_array, ext_opt_array, opt_array)
  {
    //停机隐藏
    var arrOpt = opt_array||CFServerSelect.STD_DATA;
    if(arrOpt && arrOpt.length > 0){
      var tempArrOpt = [];
      
      for(var i = 0; i < arrOpt.length; i++){
        var tempObj = {"t":arrOpt[i].t, "v":arrOpt[i].v, "opt_data_array":[]};
        for(var j = 0; j < arrOpt[i].opt_data_array.length; j++){
          if(arrOpt[i].opt_data_array[j].status * 1 != 0 && arrOpt[i].opt_data_array[j].display * 1 != 0){
            tempObj.opt_data_array.push(arrOpt[i].opt_data_array[j]);
          }
        }
        if(tempObj.opt_data_array.length > 0){
          tempArrOpt.push(tempObj);
        }
      }
      arrOpt = tempArrOpt;
    }
      return new MultiSelect.create(select_array, arrOpt, ext_opt_array||[]);
  };
  
  CFServerSelect.showStatusByServerId = function(serverId){
    if(!serverId){
      return "";
    }	
    var arrOpt = CFServerSelect.STD_DATA;
    if(arrOpt && arrOpt.length > 0){
      for(var i = 0; i < arrOpt.length; i++){
        for(var j = 0; j < arrOpt[i].opt_data_array.length; j++){
          if(serverId == arrOpt[i].opt_data_array[j].v){
            return (arrOpt[i].opt_data_array[j].status);
          }
        }
      }
    }
    return "";
  };
  //////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  
  CFServerSelect.zoneToName=function(ssn)
  {
      var data=this.STD_DATA;
      var len=data.length;
      var result = "";
      for(var i=0;i<len;i++)
      {
          var sub_data = data[i].opt_data_array;
          var sub_len = sub_data.length;
          for (var j=0; j<sub_len; j++)
          {
            if(sub_data[j].v==String(ssn))
              {
                  result=sub_data[j].t;
                  break;
              }
          }
          if (result != "") {
               break;
          }
      }
      return result || "";
  }
  
  CFServerSelect.ssn2desc=CFServerSelect.zoneToName;
  
  
  /*  |xGv00|c14f9d27de96b8dd5354abbb50a482ab */