using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System.IO;

namespace core_ecommerce.EntityFrameworkCore.EntityFramework
{
    public class EcommerceContextFactory : IDesignTimeDbContextFactory<EcommerceDbContext>
    {
        public EcommerceDbContext CreateDbContext(string[] args)
        {
            //read configuration from appsettings.js
            IConfigurationRoot configuration = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appSettings.json")
                .Build();
            var connectionString = configuration.GetConnectionString("EcommerceDatabase");

            //create new instance and inject database driver configuration
            var optionsBuilder = new DbContextOptionsBuilder<EcommerceDbContext>();
            optionsBuilder.UseNpgsql(connectionString);

            return new EcommerceDbContext(optionsBuilder.Options);
        }
    }
}
