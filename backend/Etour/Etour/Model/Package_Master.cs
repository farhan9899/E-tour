using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Etour.Model
{
    public class Package_Master
    {
        [Key]
        public int Pkg_id { get; set; }
        [ForeignKey("Category_Master")]
        public int CatMaster_id { get; set; }
        public String Pkg_Name { get; set; }
        //Navigation Property
        public Category_Master? Category_Masters { get; set; }
        //one-to-many
        public ICollection<Booking_Header_Table>? Booking_Headers { get; set; }

    }
}
