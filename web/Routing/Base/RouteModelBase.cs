using Microsoft.AspNetCore.Routing;
using Microsoft.AspNetCore.Builder;
using System.Collections.Generic;
namespace web.Routing.Base
{
   public abstract class RouteModelBase
   {
        protected IRouteBuilder Routes {get;private set;}
        public RouteModelBase(IRouteBuilder routes)
        {
            Routes = routes;
        }
        public void AddRoutes()
        {
            foreach(IRoute route in GetModelRoutes())
            {
                Routes.MapRoute(route.name,route.template,route.defaults);
            }
        }
        protected abstract IEnumerable<IRoute> GetModelRoutes();
   }
}