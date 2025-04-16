using Microsoft.EntityFrameworkCore;
using Orcamentor.Model;

namespace Orcamentor.Infra.Data
{
    public class appDbContext : DbContext
    {
        public appDbContext(DbContextOptions<appDbContext> options) : base(options) { }

        public DbSet<Contato> Contatos { get; set; }
    }
}
