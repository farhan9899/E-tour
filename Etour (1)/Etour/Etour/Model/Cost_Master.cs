using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Etour.Model
{
    public class Cost_Master
    {
        [Key]
        public int Cost_Id { get; set; }

        [ForeignKey("Category_Master")]
        public int Catmaster_Id { get; set; }
        public int Cost { get; set; }
        public double Single_Person_Cost { get; set; }
        public double Extra_Person_Cost { get; set; }
        public double Child_with_Bed { get; set; }
        public double Child_without_Bed { get; set; }
        public DateTime Valid_From { get; set; }
        public DateTime Valid_To { get; set; }


        //Navigation property
        public Category_Master? Category_Master { get; set; }


    }
}
