namespace web.Routing.Base
{
    public interface IRoute
    {
        object defaults {get;}
        string name {get;}
        string template {get;}
    }
}