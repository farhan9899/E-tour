using Microsoft.EntityFrameworkCore;

namespace Etour.Model
{
    public class EtourContext : DbContext
    {

        public EtourContext()
        { }
        public EtourContext(DbContextOptions<EtourContext> options) : base(options)
        { }

        public DbSet<Booking_Header_Table> Booking_Header_Tables { get; set; }

        public DbSet<Category_Master> Category_Masters { get; set; }

        public DbSet<Cost_Master> Cost_Masters { get; set; }
        public DbSet<Customer_Master> Customer_Masters { get; set; }
        public DbSet<Date_Master> Date_Masters { get; set; }


        public DbSet<Itinerary_Master> Itireneries { get; set; }

        public DbSet<Package_Master> Package_Masters { get; set; }
 
        public DbSet<Passenger_Table> Passenger_Tables { get; set; }


    }
}
