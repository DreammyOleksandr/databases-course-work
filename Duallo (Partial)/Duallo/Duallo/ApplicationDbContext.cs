using Duallo.Models;
using Microsoft.EntityFrameworkCore;

namespace Duallo;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    {
    }

    public DbSet<Project> Projects { get; set; }
    public DbSet<Team> Teams { get; set; }


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Project>().HasData(
            new Project { Id = 1, Name = "M4", Description = "Most powerful ARM-based chip" },
            new Project { Id = 2, Name = "Google Pixel 9", Description = "The fastest growing smartphone on market" },
            new Project
            {
                Id = 3, Name = "Drone delivery", Description = "The newest and the most convenient delivery ever"
            });
        modelBuilder.Entity<Team>().HasData(
            new Team() { Id = 1, Name = "Apple's main Team", Motto = "Think different", ProjectId = 1 },
            new Team() { Id = 2, Name = "Google's main Team", Motto = "Don't be evil", ProjectId = 2 },
            new Team()
            {
                Id = 3, Name = "Amazon's main Team", Motto = "Work hard, Have fun, Make history", ProjectId = 3
            }
        );
    }
}