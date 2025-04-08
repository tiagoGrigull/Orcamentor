using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace Orcamentor.Controllers
{
    public class Contato
    {
        public string nome { get; set; }
        public string email { get; set; }
        public string numero { get; set; }
        public string endereco { get; set; }
    }

    [ApiController] 
    [Route("api/[controller]")]
    public class ContatosController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetContatos()
        {
            var contatos = new List<Contato>
            {
                new Contato {nome = "Tiago", email = "tiago@gmail.com", numero = "4002-8922", endereco = "rua dos bobos Nr 0"},
                new Contato {nome = "Tiago", email = "tiago@gmail.com", numero = "4002-8922", endereco = "rua dos bobos Nr 0"},
                new Contato {nome = "Tiago", email = "tiago@gmail.com", numero = "4002-8922", endereco = "rua dos bobos Nr 0"},
                new Contato {nome = "Tiago", email = "tiago@gmail.com", numero = "4002-8922", endereco = "rua dos bobos Nr 0"},
            };
            return Ok(contatos);
        }
    }
}
