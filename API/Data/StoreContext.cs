using API.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace API.Data {
    public class StoreContext : DbContext {
        public StoreContext(DbContextOptions options) : base(options) {
        }

        public DbSet<Product> Products { get; set; }
    }
}
