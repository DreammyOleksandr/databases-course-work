using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Duallo.Models;

namespace Duallo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeamController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public TeamController(ApplicationDbContext context) => _context = context;

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Team>>> GetTeams()
        {
            return _context.Teams is not null
                ? await _context.Teams.Include(c => c.Project).ToListAsync()
                : NotFound();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Team>> GetTeam(int id)
        {
            if (_context.Teams is null) return NotFound();

            var team = await _context.Teams
                .Include(c => c.Project).FirstOrDefaultAsync(_ => _.Id == id);

            return team is not null ? team : NotFound();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutTeam(int id, Team team)
        {
            if (id != team.Id) return BadRequest();
            
            _context.Entry(team).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TeamExists(id))
                {
                    return NotFound();
                }
            }

            return NoContent();
        }

        [HttpPost]
        public async Task<ActionResult<Team>> PostTeam(Team team)
        {
            if (_context.Teams is null) return Problem("Entity set 'ApplicationDbContext.Teams'  is null.");
            
            _context.Teams.Add(team);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTeam", new { id = team.Id }, team);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTeam(int id)
        {
            if (_context.Teams is null) return NotFound();
            
            var team = await _context.Teams.FindAsync(id);
            if (team is null) return NotFound();
            
            _context.Teams.Remove(team);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TeamExists(int id) => (_context.Teams?.Any(e => e.Id == id)).GetValueOrDefault();
    }
}