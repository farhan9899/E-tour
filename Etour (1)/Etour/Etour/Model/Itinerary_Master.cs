using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Etour.Model
{
    public class Itinerary_Master
    {
        [Key]
        public int itr_Id { get; set; }

        [ForeignKey("Category_Master")]
        public int Catmaster_Id { get; set; }
        public int Tour_Duration { get; set; }
        public String? Itr_Dtl { get; set; }

        //Navigation Property
        public Category_Master? Category_Master { get; set; }



    }
}
