using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using  web.ViewModels;
namespace web.Controllers.View
{
    public class MenuController : Controller
    {
        public IActionResult MainMenu()
        {
            MainViewModel viewmodel = new MainViewModel("Economic");
            return View("~/View/Main/Main.cshtml",viewmodel);
        }
    }
}