using Microsoft.EntityFrameworkCore;

namespace Orcamentor.Infra.Data
{
    public class appDbContext : DbContext
    {
        public appDbContext(DbContextOptions<appDbContext> options) : base(options) { }

       // public DbSet<> Tarefas { get; set; }
    }
}
