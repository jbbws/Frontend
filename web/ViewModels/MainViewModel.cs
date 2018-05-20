using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace web.ViewModels
{
    public class MainViewModel
    {
        public string AppName { get; set; }
        public MainViewModel(string appName)
        {
            AppName = appName;
        }
    }
}