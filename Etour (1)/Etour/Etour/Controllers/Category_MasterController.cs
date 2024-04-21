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
    public class Category_MasterController : ControllerBase
    {
        private readonly EtourContext _context;

        public Category_MasterController(EtourContext context)
        {
            _context = context;
        }

        // GET: api/Category_Master
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Category_Master>>> GetCategory_Masters()
        {
          if (_context.Category_Masters == null)
          {
              return NotFound();
          }
            return await _context.Category_Masters.Where(p=> p.SubCat_Id==null).ToListAsync();
           // return _context.Category_Masters;
        
        }
         
        // GET: api/Category_Master/2
        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<Category_Master>>> GetCategory_Master(int id)
        {
          if (_context.Category_Masters == null)
          {
              return NotFound();
          }
            var category_Master = await _context.Category_Masters.FindAsync(id);

            if (category_Master == null)
            {
                return NotFound();
            }

            
            return await _context.Category_Masters.Where(p => p.SubCat_Id == category_Master.Cat_Id).ToListAsync(); 
        }

        // PUT: api/Category_Master/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCategory_Master(int id, Category_Master category_Master)
        {
            if (id != category_Master.CatMaster_Id)
            {
                return BadRequest();
            }

            _context.Entry(category_Master).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Category_MasterExists(id))
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

        // POST: api/Category_Master
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Category_Master>> PostCategory_Master(Category_Master category_Master)
        {
          if (_context.Category_Masters == null)
          {
              return Problem("Entity set 'EtourContext.Category_Masters'  is null.");
          }
            _context.Category_Masters.Add(category_Master);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCategory_Master", new { id = category_Master.CatMaster_Id }, category_Master);
        }

        // DELETE: api/Category_Master/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCategory_Master(int id)
        {
            if (_context.Category_Masters == null)
            {
                
                return NotFound();
            }
            var category_Master = await _context.Category_Masters.FindAsync(id);
            if (category_Master == null)
            {
                return NotFound();
            }

            _context.Category_Masters.Remove(category_Master);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool Category_MasterExists(int id)
        {
            return (_context.Category_Masters?.Any(e => e.CatMaster_Id == id)).GetValueOrDefault();
        }
    }
}
