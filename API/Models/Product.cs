namespace API.Models {
    public class Product {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Category { get; set; }
        public string Image { get; set; }
        public string OriginalPrice { get; set; }
        public string QuantitySold { get; set; }

        public string CloudId { get; set; }
        public string CreatedAt { get; set; }

        public string UpdatedAt { get; set; }
    }
}

