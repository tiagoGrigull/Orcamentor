using System.ComponentModel.DataAnnotations;

namespace Orcamentor.Model
{
    public class Contato
    {
        [Key]
        public int id { get; set; }
        [Required]
        public string name { get; set; }
        [Required, EmailAddress]
        public string email { get; set; }
        [Required]
        public string endereco { get; set; }
    }
}
