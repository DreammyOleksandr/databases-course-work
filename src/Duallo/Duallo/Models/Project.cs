using System.ComponentModel.DataAnnotations;

namespace Duallo.Models;

public class Project
{
    [Key] public int Id { get; set; }
    [MaxLength(45)]public string Name { get; set; }
    [MaxLength(180)]public string Description { get; set; }
}