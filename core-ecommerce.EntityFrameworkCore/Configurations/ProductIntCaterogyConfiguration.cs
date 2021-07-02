using core_ecommerce.EntityFrameworkCore.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace core_ecommerce.EntityFrameworkCore.Configurations
{
    public class ProductIntCaterogyConfiguration : IEntityTypeConfiguration<ProductIntCaterogy>
    {
        public void Configure(EntityTypeBuilder<ProductIntCaterogy> builder)
        {
            builder.HasKey(t => new { t.ProductId, t.CategoryId});

            builder.ToTable("ProductIntCategory");

            builder.HasOne(t => t.Product)
                    .WithMany(pc => pc.ProductIntCategories)
                    .HasForeignKey(x => x.ProductId);

            builder.HasOne(t => t.Category)
                    .WithMany(pc => pc.ProductIntCategories)
                    .HasForeignKey(x => x.CategoryId);
        }
    }
}
