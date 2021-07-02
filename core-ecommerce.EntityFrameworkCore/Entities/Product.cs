using core_ecommerce.EntityFrameworkCore.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace core_ecommerce.EntityFrameworkCore.EntityFramework.Entities
{
    public class Product
    {
        public int Id { set; get; }
        public string Name { set; get; }
        public decimal Price { set; get; }
        public decimal OriginPrice { set; get; }
        public string Details { set; get; }
        public int Stock { set; get; }
        public int ViewCount { set; get; }
        public DateTime DateCreated { set; get; }
        public string SeoAlias { set; get; }
        public List<ProductIntCaterogy> ProductIntCategories { set; get; }
        public List<OrderDetail> OrderDetails { set; get; }
        public Cart Cart { set; get; }
    }
}
