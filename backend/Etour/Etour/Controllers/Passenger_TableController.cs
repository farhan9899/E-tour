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
    public class Passenger_TableController : ControllerBase
    {
        private readonly EtourContext _context;

        public Passenger_TableController(EtourContext context)
        {
            _context = context;
        }

        // GET: api/Passenger_Table
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Passenger_Table>>> GetPassenger_Tables()
        {
          if (_context.Passenger_Tables == null)
          {
              return NotFound();
          }
            return await _context.Passenger_Tables.ToListAsync();
        }

        // GET: api/Passenger_Table/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Passenger_Table>> GetPassenger_Table(int id)
        {
          if (_context.Passenger_Tables == null)
          {
              return NotFound();
          }
            var passenger_Table = await _context.Passenger_Tables.FindAsync(id);

            if (passenger_Table == null)
            {
                return NotFound();
            }

            return passenger_Table;
        }

        // PUT: api/Passenger_Table/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPassenger_Table(int id, Passenger_Table passenger_Table)
        {
            if (id != passenger_Table.Pax_id)
            {
                return BadRequest();
            }

            _context.Entry(passenger_Table).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Passenger_TableExists(id))
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

        // POST: api/Passenger_Table
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Passenger_Table>> PostPassenger_Table(Passenger_Table passenger_Table)
        {
          if (_context.Passenger_Tables == null)
          {
              return Problem("Entity set 'EtourContext.Passenger_Tables'  is null.");
          }
            _context.Passenger_Tables.Add(passenger_Table);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPassenger_Table", new { id = passenger_Table.Pax_id }, passenger_Table);
        }

        // DELETE: api/Passenger_Table/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePassenger_Table(int id)
        {
            if (_context.Passenger_Tables == null)
            {
                return NotFound();
            }
            var passenger_Table = await _context.Passenger_Tables.FindAsync(id);
            if (passenger_Table == null)
            {
                return NotFound();
            }

            _context.Passenger_Tables.Remove(passenger_Table);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool Passenger_TableExists(int id)
        {
            return (_context.Passenger_Tables?.Any(e => e.Pax_id == id)).GetValueOrDefault();
        }
    }
}
