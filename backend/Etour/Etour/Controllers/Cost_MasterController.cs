using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Etour.Model;

namespace Etour.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Cost_MasterController : ControllerBase
    {
        private readonly EtourContext _context;

        public Cost_MasterController(EtourContext context)
        {
            _context = context;
        }

        // GET: api/Cost_Master
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Cost_Master>>> GetCost_Masters()
        {
          if (_context.Cost_Masters == null)
          {
              return NotFound();
          }
            return await _context.Cost_Masters.ToListAsync();
        }

        // GET: api/Cost_Master/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Cost_Master>> GetCost_Master(int id)
        {
          if (_context.Cost_Masters == null)
          {
              return NotFound();
          }
            var cost_Master = await _context.Cost_Masters.FindAsync(id);

            if (cost_Master == null)
            {
                return NotFound();
            }

            return cost_Master;
        }

        // PUT: api/Cost_Master/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCost_Master(int id, Cost_Master cost_Master)
        {
            if (id != cost_Master.Cost_Id)
            {
                return BadRequest();
            }

            _context.Entry(cost_Master).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Cost_MasterExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Cost_Master
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Cost_Master>> PostCost_Master(Cost_Master cost_Master)
        {
          if (_context.Cost_Masters == null)
          {
              return Problem("Entity set 'EtourContext.Cost_Masters'  is null.");
          }
            _context.Cost_Masters.Add(cost_Master);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCost_Master", new { id = cost_Master.Cost_Id }, cost_Master);
        }

        // DELETE: api/Cost_Master/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCost_Master(int id)
        {
            if (_context.Cost_Masters == null)
            {
                return NotFound();
            }
            var cost_Master = await _context.Cost_Masters.FindAsync(id);
            if (cost_Master == null)
            {
                return NotFound();
            }

            _context.Cost_Masters.Remove(cost_Master);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool Cost_MasterExists(int id)
        {
            return (_context.Cost_Masters?.Any(e => e.Cost_Id == id)).GetValueOrDefault();
        }
    }
}
