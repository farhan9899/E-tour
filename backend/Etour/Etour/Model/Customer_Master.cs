using System.ComponentModel.DataAnnotations;

namespace Etour.Model
{
    public class Customer_Master
    {

        [Key]
        public int Cust_Id { get; set; }
        public string? Cust_Name { get; set; }
      
        public string? Email { get; set; }

        public string? Password { get; set; }

        public int Country_Code { get; set; }
        [Required]
        [RegularExpression(@"^[0-9]*$")]
        public string? Phone_Number { get; set; }

        public string? Address { get; set; }

        public string? Proof_Id { get; set; }

        public string? Gender { get; set; }

        public int Age { get; set; }
        public ICollection<Booking_Header_Table>? Booking_Header_Tables { get; set; }

    }
}
