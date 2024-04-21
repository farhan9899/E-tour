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
    public class Itinerary_MasterController : ControllerBase
    {
        private readonly EtourContext _context;

        public Itinerary_MasterController(EtourContext context)
        {
            _context = context;
        }

        // GET: api/Itinerary_Master
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Itinerary_Master>>> GetItireneries()
        {
          if (_context.Itireneries == null)
          {
              return NotFound();
          }
            return await _context.Itireneries.ToListAsync();
        }

        // GET: api/Itinerary_Master/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Itinerary_Master>> GetItinerary_Master(int id)
        {
          if (_context.Itireneries == null)
          {
              return NotFound();
          }
           


           var query = from itinerary in _context.Itireneries
                        join category in _context.Category_Masters on itinerary.Catmaster_Id equals category.CatMaster_Id
                        join cost in _context.Cost_Masters on itinerary.Catmaster_Id equals cost.Catmaster_Id
                        where category.CatMaster_Id == id
                       select new
                        {
                            itinerary,
                            cost.Single_Person_Cost,
                            cost.Extra_Person_Cost,
                            cost.Child_with_Bed,
                            cost.Child_without_Bed,
                            cost.Valid_From,
                            cost.Valid_To,
                            category.Cat_Name,
                        };

            return Ok(query.ToList());



           // return itinerary_Master;
        }

        // PUT: api/Itinerary_Master/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutItinerary_Master(int id, Itinerary_Master itinerary_Master)
        {
            if (id != itinerary_Master.itr_Id)
            {
                return BadRequest();
            }

            _context.Entry(itinerary_Master).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Itinerary_MasterExists(id))
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

        // POST: api/Itinerary_Master
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Itinerary_Master>> PostItinerary_Master(Itinerary_Master itinerary_Master)
        {
          if (_context.Itireneries == null)
          {
              return Problem("Entity set 'EtourContext.Itireneries'  is null.");
          }
            _context.Itireneries.Add(itinerary_Master);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetItinerary_Master", new { id = itinerary_Master.itr_Id }, itinerary_Master);
        }

        // DELETE: api/Itinerary_Master/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteItinerary_Master(int id)
        {
            if (_context.Itireneries == null)
            {
                return NotFound();
            }
            var itinerary_Master = await _context.Itireneries.FindAsync(id);
            if (itinerary_Master == null)
            {
                return NotFound();
            }

            _context.Itireneries.Remove(itinerary_Master);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool Itinerary_MasterExists(int id)
        {
            return (_context.Itireneries?.Any(e => e.itr_Id == id)).GetValueOrDefault();
        }
    }
}
