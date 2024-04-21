using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Etour.Model
{
    public class Date_Master
    {
        [Key]
        public int Departure_id { get; set; }
        [ForeignKey("Category_Master")]
        public int Catmaster_Id { get; set; }
        public DateTime Depart_date { get; set; }
        public DateTime End_date { get; set; }
        public int No_Of_Days { get; set; }

        //Navigation Property
        public Category_Master Category_Master { get; set; }
        //onte-to-many
        public ICollection<Booking_Header_Table>? Booking_Header_Tables { get; set; }
    }
}
