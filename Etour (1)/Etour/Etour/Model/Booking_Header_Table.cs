using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Etour.Model
{
    public class Booking_Header_Table
    {
        [Key]
        public int Booking_id { get; set; }
        public DateTime Booking_Date { get; set; }
        [ForeignKey("Customer_Master")]
        public int Cust_Id { get; set; }

        [ForeignKey("Package_Master")]
        public int Pkg_Id { get; set; }


        [ForeignKey("Date_Master")]
        public int Departure_id { get; set; }
        public int No_of_Passenger { get; set; }  
        public double Tour_Amount { get; set; }
        public double Taxes { get; set; }
        public double Total_Amount { get; set; }



        //Navigation Properties  
        public Customer_Master? Customer_Masters { get; set; }
        public Package_Master? Package_Masters { get; set; }
        public Date_Master? Date_Masters { get; set; }

        //One-to-many relationship
        public ICollection<Passenger_Table>? Passenger_Tables { get; set; }
    }
}
