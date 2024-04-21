using System.ComponentModel.DataAnnotations;

namespace Etour.Model
{
    public class Category_Master
    {
        [Key]
        public int CatMaster_Id { get; set; }
        public string? Cat_Id { get; set; }
        public string? SubCat_Id { get; set; }
        public string? Cat_Name { get; set; }
        public string? Cat_Image_Path { get; set; }
        public bool Flag { get; set; }



        //one-to-many 
        public ICollection<Itinerary_Master>? Itinnerary_Masters { get; set; }
        public ICollection<Package_Master>? Package_Masters { get; set; }
        public ICollection<Date_Master>? Date_Masters { get; set; }
        public ICollection<Cost_Master>? Cost_Masters { get; set; }

    }
}

