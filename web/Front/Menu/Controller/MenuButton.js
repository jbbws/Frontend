Ext.define('Economic.Controller.NavButton',{
    extend : 'Ext.app.ViewController',
    alias: 'controller.navbutton',
    control:{
        '#': {
            click:'clickHandler'
        }
    },
    clickHandler:function(){
        var view = this.getView();
        var window = Ext.getCmp('maintabpanel');
        this.addTab(window,view.mainCfg);
    },
    addTab:function(window,cfg){
        console.log(window.items);
        if(!window.items.containsKey(cfg.pageId))
            window.add({
                xtype:cfg.itemType,
                id:cfg.pageId,
                title:cfg.title,
                closable:true
            });
        window.setActiveTab(cfg.pageId);
    }
});