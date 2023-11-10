using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Mvc.ModelBinding.Validation;

namespace Duallo.Models;

public class Team
{
    [Key]public int Id { get; set; }
    [MaxLength(100)]public string Name { get; set; }
    [MaxLength(255)]public string Motto { get; set; }
    public int ProjectId { get; set; }
    [ForeignKey("ProjectId"), ValidateNever]public Project Project { get; set; }
}