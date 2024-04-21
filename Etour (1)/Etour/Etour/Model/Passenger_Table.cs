using Microsoft.EntityFrameworkCore.ValueGeneration.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Etour.Model
{
    public class Passenger_Table
    {
        [Key]
        public int Pax_id { get; set; }
        [ForeignKey("Booking_Header")]
        public int Booking_id { get; set; }

        public string? Pax_name { get; set; }

        public DateTime Pax_Birthdate { get; set; }

        public string? Pax_Type { get; set; }
        public double Pax_amount { get; set; }

        //Navigation Property
        public Booking_Header_Table? Booking_Header { get; set; }

    }
}
