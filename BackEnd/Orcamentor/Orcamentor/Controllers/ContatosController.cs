using Microsoft.AspNetCore.Mvc;
using Orcamentor.Model.Repository.Interfaces;
using System.Collections.Generic;

namespace Orcamentor.Controllers
{

    [ApiController] 
    [Route("api/[controller]")]
    public class ContatosController : ControllerBase
    {

        private readonly IContatoRepository _contatoRepository;

        public ContatosController(IContatoRepository repositoryContatos)
        {
            _contatoRepository = repositoryContatos;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var contatos = _contatoRepository.GetAll();
            return Ok(contatos);
        }
    }
}