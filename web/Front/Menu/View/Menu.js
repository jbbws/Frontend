Ext.define('Economic.View.Menu',{
    extend:'Ext.panel.Panel',
    xtype:'economic-menu-panel',
    layout:'border',
    split:true,
    title:'Экономический анализ',
    bodyPadding:1,
    items:[{            
        title:'Меню',
        border:true,
        width: 200,
        xtype:'panel',   
        layout:'vbox', 
        collapsible:true,
        floatable: false,
        region:'west',
        margin: '5 0 5 0',
        items:[{
            xtype:'eco-nav-button',
            text:'Экспресс-анализ',
            width:'100%',
            mainCfg:{
                title:'Экспресс-анализ',
                itemType: 'economic-express-panel',
                pageId:'express'
            },
            windowtype:'panel'
        },{
            xtype:'eco-nav-button',
            text:'Анализ деловой активности',
            windowtype:'panel',
            mainCfg:{
                title:'Анализ деловой активности',
                itemType: 'panel',
                pageId:'buisness'
            },
            width:'100%'
        }]
    },{
        region: 'center',     // center region is required, no width/height specified
        xtype: 'tabpanel',
        margin: '5 0 0 5',
        scrollable:true,
        collapsible: false,
        id:'maintabpanel',
        border:true
    }]
});