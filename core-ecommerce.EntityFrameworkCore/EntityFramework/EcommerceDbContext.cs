using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace core_ecommerce.EntityFrameworkCore.EntityFramework
{
    public class EcommerceDbContext : DbContext
    {
        public EcommerceDbContext(DbContextOptions options) : base(options)
        {
            //none
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //Config

            //seed

            //parent
            //base.OnModelCreating(modelBuilder);
        }

        //Define DbSet
    }
}
