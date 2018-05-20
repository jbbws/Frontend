namespace web.Routing.Base
{
   public class Route : IRoute
   {
       public object defaults {get; set;}
       public string name {get; set;}
       public string template {get;set;}
   }
}