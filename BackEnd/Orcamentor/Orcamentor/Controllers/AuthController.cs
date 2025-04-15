using Microsoft.AspNetCore.Mvc;
using Orcamentor.Controllers.Objects;

namespace Orcamentor.Controllers
{
    public class AuthController : Controller
    {
        [HttpPost("api/auth")]
        public IActionResult Login([FromBody] LoginRequest loginRequest)
        {
            return Ok(new LoginResponse() { token = "Válido"});
        }
    }
}
