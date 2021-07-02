using core_ecommerce.EntityFrameworkCore.EntityFramework.Entities;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;

namespace core_ecommerce.EntityFrameworkCore.Entities
{
    public class AppUser : IdentityUser<int>
    {
        public string Firstname { get; set; }
        public string Lasttname { get; set; }
        public Cart Cart { get; set; }
        public List<Order> Orders { get; set; }

    }
}
