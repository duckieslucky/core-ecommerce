using core_ecommerce.EntityFrameworkCore.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace core_ecommerce.EntityFrameworkCore.EntityFramework.Entities
{
    public class Category
    {
        public int Id { set; get; }
        public string Name { set; get; }
        public int SortOrder { set; get; }
        public bool IsShowOnHome { set; get; }
        public int? parenId { set; get; }
        public bool Status { set; get; }
        public List<ProductIntCaterogy> ProductIntCategories { set; get; }
    }
}
