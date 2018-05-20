using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace web
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var configuration = new ConfigurationBuilder()
                .Build();
            var hostBuilder = new WebHostBuilder()
                .UseKestrel()
                .UseConfiguration(configuration)
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseStartup<Startup>();
            hostBuilder.UseUrls("http://localhost:7000");
            var host = hostBuilder.Build();
            host.Run();

           // BuildWebHost(args).Run();

        }
        // public static IWebHost BuildWebHost(string[] args) =>
        //     WebHost.CreateDefaultBuilder(args)
        //         .UseStartup<Startup>()
        //         .Build();

    }
}
