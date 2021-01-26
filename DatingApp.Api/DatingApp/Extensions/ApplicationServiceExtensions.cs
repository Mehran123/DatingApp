using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api.Data;
using Api.Interfaces;
using Api.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Api.Extensions
{
    public static class ApplicationServiceExtensions
    {

        public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration config)
        {
            services.AddScoped<ITokenService, TokenService>();
            var connection = config["DbConnectionString"];
            services.AddDbContext<DataContext>(
                options => options.UseSqlServer(connection));

            //services.AddHttpsRedirection(option =>
            //    {
            //        option.RedirectStatusCode = StatusCodes.Status307TemporaryRedirect;
            //        option.HttpsPort = 5001;
            //    });

            return services;
        }
    }
}
