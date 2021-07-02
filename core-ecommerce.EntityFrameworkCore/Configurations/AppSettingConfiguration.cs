using core_ecommerce.EntityFrameworkCore.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace core_ecommerce.EntityFrameworkCore.Configurations
{
    public class AppSettingConfiguration : IEntityTypeConfiguration<AppSetting>
    {
        public void Configure(EntityTypeBuilder<AppSetting> builder)
        {
            builder.ToTable("Setting");

            builder.HasKey(x => x.Id);

            builder.Property(x => x.Id)
                    .ValueGeneratedOnAdd()
                    .IsRequired();

            builder.Property(x => x.Key)
                    .IsRequired();

            builder.Property(x => x.Value)
                   .IsRequired();

            builder.Property(x => x.Description)
                   .IsRequired(false);

        }
    }
}
