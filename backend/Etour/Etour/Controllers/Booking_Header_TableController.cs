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
    public class Booking_Header_TableController : ControllerBase
    {
        private readonly EtourContext _context;

        public Booking_Header_TableController(EtourContext context)
        {
            _context = context;
        }

        // GET: api/Booking_Header_Table
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Booking_Header_Table>>> GetBooking_Header_Tables()
        {
          if (_context.Booking_Header_Tables == null)
          {
              return NotFound();
          }
            return await _context.Booking_Header_Tables.ToListAsync();
        }

        // GET: api/Booking_Header_Table/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Booking_Header_Table>> GetBooking_Header_Table(int id)
        {
          if (_context.Booking_Header_Tables == null)
          {
              return NotFound();
          }
            var booking_Header_Table = await _context.Booking_Header_Tables.FindAsync(id);

            if (booking_Header_Table == null)
            {
                return NotFound();
            }

            return booking_Header_Table;
        }

        // PUT: api/Booking_Header_Table/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBooking_Header_Table(int id, Booking_Header_Table booking_Header_Table)
        {
            if (id != booking_Header_Table.Booking_id)
            {
                return BadRequest();
            }

            _context.Entry(booking_Header_Table).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Booking_Header_TableExists(id))
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

        // POST: api/Booking_Header_Table
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Booking_Header_Table>> PostBooking_Header_Table(Booking_Header_Table booking_Header_Table)
        {
          if (_context.Booking_Header_Tables == null)
          {
              return Problem("Entity set 'EtourContext.Booking_Header_Tables'  is null.");
          }
            _context.Booking_Header_Tables.Add(booking_Header_Table);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBooking_Header_Table", new { id = booking_Header_Table.Booking_id }, booking_Header_Table);
        }

        // DELETE: api/Booking_Header_Table/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBooking_Header_Table(int id)
        {
            if (_context.Booking_Header_Tables == null)
            {
                return NotFound();
            }
            var booking_Header_Table = await _context.Booking_Header_Tables.FindAsync(id);
            if (booking_Header_Table == null)
            {
                return NotFound();
            }

            _context.Booking_Header_Tables.Remove(booking_Header_Table);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool Booking_Header_TableExists(int id)
        {
            return (_context.Booking_Header_Tables?.Any(e => e.Booking_id == id)).GetValueOrDefault();
        }
    }
}
