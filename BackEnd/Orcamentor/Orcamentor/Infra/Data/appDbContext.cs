using Microsoft.EntityFrameworkCore;
using Orcamentor.Model;

namespace MeuProjeto.Data
{
    public class MeuDbContext : DbContext
    {
        public MeuDbContext(DbContextOptions<MeuDbContext> options) : base(options) { }

        public DbSet<> Tarefas { get; set; }
    }
}
