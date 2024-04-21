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
    public class Package_MasterController : ControllerBase
    {
        private readonly EtourContext _context;

        public Package_MasterController(EtourContext context)
        {
            _context = context;
        }

        // GET: api/Package_Master
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Package_Master>>> GetPackage_Masters()
        {
          if (_context.Package_Masters == null)
          {
              return NotFound();
          }
            return await _context.Package_Masters.ToListAsync();
        }

        // GET: api/Package_Master/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Package_Master>> GetPackage_Master(int id)
        {
          if (_context.Package_Masters == null)
          {
              return NotFound();
          }
            var package_Master = await _context.Package_Masters.FindAsync(id);

            if (package_Master == null)
            {
                return NotFound();
            }

            return package_Master;
        }

        // PUT: api/Package_Master/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPackage_Master(int id, Package_Master package_Master)
        {
            if (id != package_Master.Pkg_id)
            {
                return BadRequest();
            }

            _context.Entry(package_Master).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Package_MasterExists(id))
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

        // POST: api/Package_Master
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Package_Master>> PostPackage_Master(Package_Master package_Master)
        {
          if (_context.Package_Masters == null)
          {
              return Problem("Entity set 'EtourContext.Package_Masters'  is null.");
          }
            _context.Package_Masters.Add(package_Master);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPackage_Master", new { id = package_Master.Pkg_id }, package_Master);
        }

        // DELETE: api/Package_Master/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePackage_Master(int id)
        {
            if (_context.Package_Masters == null)
            {
                return NotFound();
            }
            var package_Master = await _context.Package_Masters.FindAsync(id);
            if (package_Master == null)
            {
                return NotFound();
            }

            _context.Package_Masters.Remove(package_Master);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool Package_MasterExists(int id)
        {
            return (_context.Package_Masters?.Any(e => e.Pkg_id == id)).GetValueOrDefault();
        }
    }
}
