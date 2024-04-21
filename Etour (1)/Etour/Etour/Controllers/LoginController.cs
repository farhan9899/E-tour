using Etour.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Etour.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LoginController : ControllerBase
    {
        private readonly EtourContext _context;

        public LoginController(EtourContext context)
        {
            _context = context;
        }

        //GET: api/Customer_Master/7869285852/Sagar2123
      /*  [HttpGet("{phoneNo}/{password}")]
        public async Task<ActionResult<IEnumerable<Customer_Master>>> GetCustomer_Master(string Phone_Number, string password)
        {
            if (_context.Customer_Masters == null)
            {
                return NotFound();
            }

            var customer_Master = from c in _context.Customer_Masters where c.Phone_Number == Phone_Number && c.Password == password select c;

            return Ok(customer_Master);
        }
*/


        [HttpPost]
        public async Task<LoginResponse> Login(LoginRequest request)
        {
            var person = await _context.Customer_Masters.FirstOrDefaultAsync(_customers => _customers.Phone_Number.Equals(request.Phone_Number) && _customers.Password.Equals(request.Password));
            //Console.WriteLine(request.Password + "" );
            if (person != null)
            {
                {
                    if (person.Phone_Number.Equals(request.Phone_Number) && (person.Password.Equals(request.Password)))
                    {
                        return new LoginResponse { Success = true };
                    }
                }
                return new LoginResponse { Success = false };

            }

            else
            {
                return new LoginResponse { Success = false };
            }
        }
        /* public async Task<ActionResult<LoginResponse>> Login(LoginRequest request)
         {
             var user = await _context.Customer_Masters.FirstOrDefaultAsync(u => string.Equals(u.Phone_Number, request.Phone_Number, StringComparison.Ordinal));

             if (user != null && string.Equals(user.Password, request.Password, StringComparison.Ordinal))
             {
                 return new LoginResponse { Success = true };
             }

             return new LoginResponse { Success = false };
         }*/
    }

    public class LoginRequest
    {
        public string? Phone_Number { get; set; }
        public string? Password { get; set; }
    }

    public class LoginResponse
    {
        public bool Success { get; set; }
    }
}