using core_ecommerce.EntityFrameworkCore.EntityFramework.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace core_ecommerce.EntityFrameworkCore.Entities
{
    public class ProductIntCaterogy
    {
        public int ProductId { set; get; }
        public Product Product { set; get; }
        public int CategoryId { set; get; }
        public Category Category { set; get; }
    }
}
