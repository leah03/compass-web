/*! grafana - v1.6.1 - 2014-09-02
 * Copyright (c) 2014 Torkel Ödegaard; Licensed Apache License */

define([],function(){return{create:function(){return{refresh:function(){},set_interval:function(a){this.current.refresh=a},current:{title:"",tags:[],style:"dark",timezone:"browser",editable:!0,failover:!1,panel_hints:!0,rows:[],pulldowns:[{type:"templating"},{type:"annotations"}],nav:[{type:"timepicker"}],services:{},loader:{save_gist:!1,save_elasticsearch:!0,save_local:!0,save_default:!0,save_temp:!0,save_temp_ttl_enable:!0,save_temp_ttl:"30d",load_gist:!1,load_elasticsearch:!0,load_elasticsearch_size:20,load_local:!1,hide:!1},refresh:!0}}}}});