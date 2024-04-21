

using ETour.Controllers;
using Etour.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.SqlServer.Query.Internal;

namespace ETour.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class SearchController : ControllerBase
    {
        private readonly EtourContext _context;

        public SearchController(EtourContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<SearchResponse> Search(SearchResult request)
        {
            var query = from dm in _context.Date_Masters
                        join cm in _context.Cost_Masters on dm.Catmaster_Id
                        equals cm.Catmaster_Id
                        join catm in _context.Category_Masters on cm.Catmaster_Id
                        equals catm.CatMaster_Id
                        where request.DepartDate <= dm.Depart_date &&
                        request.EndDate <= dm.End_date && request.EndDate <= dm.End_date &&
                        request.NoOfDays >= dm.No_Of_Days && request.SinglePersonCost <= cm.Single_Person_Cost &&
                        catm.Flag == true
                        select new
                        {
                            catm.Cat_Name,
                            dm.Depart_date,
                            dm.End_date,
                            cm.Single_Person_Cost,
                            dm.No_Of_Days

                        };
            if (query == null)
            {
                return new SearchResponse { Success = false };
            }
            else
            {
                var searchResults = await query.Select(q => new SearchResult

                {

                    Cat_Name = q.Cat_Name,
                    DepartDate = q.Depart_date,
                    EndDate = q.End_date,
                    NoOfDays = q.No_Of_Days,
                    SinglePersonCost = q.Single_Person_Cost
                }).ToListAsync();
                return new SearchResponse
                {
                    Success = true,
                    Results = searchResults
                };
            }
        }

        public class SearchResponse
        {
            public bool Success { get; set; }
            public List<SearchResult>? Results { get; set; }
        }
        public class SearchResult
        {
            public string? Cat_Name { get; set; }
            public DateTime? DepartDate { get; set; }
            public DateTime? EndDate { get; set; }
            public double? SinglePersonCost { set; get; }
            public int NoOfDays { get; set; }
        }
    }
}