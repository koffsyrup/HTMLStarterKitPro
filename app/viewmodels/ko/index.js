define(['plugins/router', 'knockout'], function(router, ko) {
    var childRouter = router.createChildRouter()
        .makeRelative({
            moduleId:'ko',
            fromParent:true
        }).map([
    { route: 'simpleList',      moduleId: 'simpleList',       title: 'Simple List',           type: 'intro',      nav: true }
    ]).buildNavigationModel();

    return {
        router: childRouter //the property on the view model should be called router
    };
});