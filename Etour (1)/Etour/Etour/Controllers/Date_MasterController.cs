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
    public class Date_MasterController : ControllerBase
    {
        private readonly EtourContext _context;

        public Date_MasterController(EtourContext context)
        {
            _context = context;
        }

        // GET: api/Date_Master
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Date_Master>>> GetDate_Masters()
        {
          if (_context.Date_Masters == null)
          {
              return NotFound();
          }
            return await _context.Date_Masters.ToListAsync();
        }

        // GET: api/Date_Master/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Date_Master>> GetDate_Master(int id)
        {
          if (_context.Date_Masters == null)
          {
              return NotFound();
          }
            var date_Master = await _context.Date_Masters.FindAsync(id);

            if (date_Master == null)
            {
                return NotFound();
            }

            return date_Master;
        }

        // PUT: api/Date_Master/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDate_Master(int id, Date_Master date_Master)
        {
            if (id != date_Master.Departure_id)
            {
                return BadRequest();
            }

            _context.Entry(date_Master).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Date_MasterExists(id))
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

        // POST: api/Date_Master
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Date_Master>> PostDate_Master(Date_Master date_Master)
        {
          if (_context.Date_Masters == null)
          {
              return Problem("Entity set 'EtourContext.Date_Masters'  is null.");
          }
            _context.Date_Masters.Add(date_Master);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDate_Master", new { id = date_Master.Departure_id }, date_Master);
        }

        // DELETE: api/Date_Master/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDate_Master(int id)
        {
            if (_context.Date_Masters == null)
            {
                return NotFound();
            }
            var date_Master = await _context.Date_Masters.FindAsync(id);
            if (date_Master == null)
            {
                return NotFound();
            }

            _context.Date_Masters.Remove(date_Master);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool Date_MasterExists(int id)
        {
            return (_context.Date_Masters?.Any(e => e.Departure_id == id)).GetValueOrDefault();
        }
    }
}
