using Microsoft.EntityFrameworkCore;
using Orcamentor.Infra.Data;
using Orcamentor.Model.Repository.Interfaces;

namespace Orcamentor.Model.Repository
{
    public class ContatoRepository : IContatoRepository
    {

        private readonly appDbContext _appDbContext;

        public ContatoRepository(appDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public async Task<List<Contato>> GetAll()
        {
            return await _appDbContext.Contatos.ToListAsync();
        }

        public async Task<Contato> GetById(int id)
        {
            return await _appDbContext.Contatos.FindAsync(id);
        }

        public async Task Save(Contato contato)
        {
            _appDbContext.Contatos.Add(contato);
            await _appDbContext.SaveChangesAsync();
        }
    }
}
