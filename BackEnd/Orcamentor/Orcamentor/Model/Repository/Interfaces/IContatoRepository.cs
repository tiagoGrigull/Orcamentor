namespace Orcamentor.Model.Repository.Interfaces
{
    public interface IContatoRepository
    {
        Task<List<Contato>> GetAll();

        Task<Contato> GetById(int id);

        Task Save(Contato contato);
    }
}
