using Microsoft.AspNetCore.Routing;
using System.Collections.Generic;
using web.Routing.Base;
namespace web.Routing
{
    public class MainRoute : RouteModelBase
    {
        public MainRoute(IRouteBuilder routes):base(routes){}
        public const string ROOT_ROUTE_NAME = "default";
        protected override IEnumerable<IRoute> GetModelRoutes()
        {
            yield return new web.Routing.Base.Route{ name = ROOT_ROUTE_NAME, template = "mainmenu", defaults = new {controller = "Menu", action = "MainMenu"} };  
        }
    }
}