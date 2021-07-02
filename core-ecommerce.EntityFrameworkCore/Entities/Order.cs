using System;
using System.Collections.Generic;
using System.Text;

namespace core_ecommerce.EntityFrameworkCore.EntityFramework.Entities
{
    public class Order
    {
        public int Id { set; get; }
        public DateTime OrderDate { set; get; }
        public int UserId { set; get; }
        public string ShipName { set; get; }
        public string ShipAddress { set; get; }
        public string ShipEmail { set; get; }
        public string ShipPhoneNumber { set; get; }
        public bool Status { set; get; }
        public List<OrderDetail> OrderDetails { set; get; }
    }
}
